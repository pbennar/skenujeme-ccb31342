import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const COUNTRY_CODES = [
  { code: "+421", minLength: 9, maxLength: 9 },
  { code: "+420", minLength: 9, maxLength: 9 },
  { code: "+43", minLength: 10, maxLength: 13 },
  { code: "+49", minLength: 10, maxLength: 13 },
  { code: "+48", minLength: 9, maxLength: 9 },
  { code: "+36", minLength: 9, maxLength: 9 },
  { code: "+44", minLength: 10, maxLength: 10 },
] as const;

const isValidMobilePhone = (value: string) => {
  const compact = value.replace(/\s+/g, "").trim();
  const country = COUNTRY_CODES.find((item) => compact.startsWith(item.code));

  if (!country) return false;

  const localNumber = compact.slice(country.code.length).replace(/\D/g, "");
  return localNumber.length >= country.minLength && localNumber.length <= country.maxLength;
};

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(255),
  company: z.string().trim().min(1).max(255),
  phone: z.string().trim().min(1).max(50).refine(isValidMobilePhone, {
    message: "Invalid mobile phone number",
  }),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, company, phone, email, message } = parsed.data;

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      company,
      phone,
      email,
      message,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kontaktný formulár <onboarding@resend.dev>",
        to: ["dopyt@skenujeme.sk"],
        subject: `Nová správa od ${name} (${company})`,
        html: `
          <h2>Nová správa z kontaktného formulára</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Meno:</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Firma:</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Telefón:</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">E-mail:</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
          </table>
          <h3 style="margin-top:20px;">Správa:</h3>
          <p style="background:#f9f9f9;padding:15px;border-radius:5px;">${message}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend error:", errorData);
      // Don't fail the whole request - data is saved in DB
      console.warn("Email notification failed but submission was saved");
    } else {
      console.log(`Email notification sent to dopyt@skenujeme.sk`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Submission saved and email sent" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
