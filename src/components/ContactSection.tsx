import ctaBg from "@/assets/cta-bg.png";
import sendIcon from "@/assets/send-icon.svg";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const COUNTRY_CODES = [
  { code: "+421", flag: "🇸🇰", label: "SK", minLength: 9, maxLength: 9, placeholder: "915 714 091" },
  { code: "+420", flag: "🇨🇿", label: "CZ", minLength: 9, maxLength: 9, placeholder: "601 123 456" },
  { code: "+43", flag: "🇦🇹", label: "AT", minLength: 10, maxLength: 13, placeholder: "664 1234567" },
  { code: "+49", flag: "🇩🇪", label: "DE", minLength: 10, maxLength: 13, placeholder: "1512 3456789" },
  { code: "+48", flag: "🇵🇱", label: "PL", minLength: 9, maxLength: 9, placeholder: "512 345 678" },
  { code: "+36", flag: "🇭🇺", label: "HU", minLength: 9, maxLength: 9, placeholder: "20 123 4567" },
  { code: "+44", flag: "🇬🇧", label: "GB", minLength: 10, maxLength: 10, placeholder: "7700 900123" },
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const ContactSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const c = translations.contact;
  const [form, setForm] = useState({
    name: "",
    company: "",
    phoneCode: "+421",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const selectedCountry = COUNTRY_CODES.find((country) => country.code === form.phoneCode) ?? COUNTRY_CODES[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const email = form.email.trim();
    const phoneDigits = form.phone.replace(/\D/g, "");

    if (!form.name.trim()) newErrors.name = t(c.required, lang);
    if (!form.company.trim()) newErrors.company = t(c.required, lang);
    if (!phoneDigits) {
      newErrors.phone = t(c.required, lang);
    } else if (phoneDigits.length < selectedCountry.minLength || phoneDigits.length > selectedCountry.maxLength) {
      newErrors.phone = t(c.phoneInvalid, lang);
    }
    if (!email) {
      newErrors.email = t(c.required, lang);
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = t(c.emailInvalid, lang);
    }
    if (!form.message.trim()) newErrors.message = t(c.required, lang);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSending(true);
    setSubmitError("");

    try {
      const fullPhone = `${form.phoneCode} ${form.phone.replace(/\D/g, "")}`;
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: form.name.trim(),
          company: form.company.trim(),
          phone: fullPhone,
          email: form.email.trim(),
          message: form.message.trim(),
        },
      });

      if (error) throw error;

      setSubmitted(true);
      setForm({ name: "", company: "", phoneCode: "+421", phone: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError(t(c.error, lang));
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: string) =>
    cn(
      "w-full border rounded-md px-3 py-2.5 text-body-lg text-foreground placeholder:text-gray-text bg-background focus:outline-none focus:ring-1 focus:ring-primary",
      errors[field] ? "border-destructive" : "border-border",
    );

  return (
    <section id="ozvite-sa" className="relative py-14 lg:py-20" ref={sectionRef}>
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-dark/80" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-4 mb-8" data-reveal="left">
          <div className="w-[40px] h-[1px] bg-accent" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-accent font-semibold">
            {t(c.label, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5" data-reveal data-reveal-delay="1">
              <span className="font-normal text-primary-foreground">{t(c.heading1, lang)}</span>
              <br />
              <span className="text-primary-foreground">{t(c.heading2, lang)}</span>
              <span className="text-accent">{t(c.heading3, lang)}</span>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-primary-foreground/70 leading-relaxed max-w-[420px] font-medium mb-4" data-reveal data-reveal-delay="2">
              {t(c.subtext, lang)}
            </p>
            <p className="text-[13px] lg:text-[15px] text-primary-foreground font-extrabold" data-reveal data-reveal-delay="3">
              {t(c.subtextBold, lang)}
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-lg max-w-[380px] lg:ml-auto" data-reveal="right" data-reveal-delay="2">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-heading-lg font-bold text-foreground mb-2">{t(c.successTitle, lang)}</h3>
                <p className="text-[13px] text-gray-text font-medium">{t(c.successText, lang)}</p>
              </div>
            ) : (
              <>
                <h3 className="text-heading-md font-bold text-foreground mb-1">
                  {t(c.formTitle, lang)}
                </h3>
                <p className="text-body text-gray-text font-medium mb-4">
                  {t(c.formSubtitle, lang)}
                </p>
                {submitError && (
                  <p className="text-[12px] text-destructive font-medium mb-3">{submitError}</p>
                )}
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder={t(c.name, lang)}
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      className={inputClass('name')}
                      aria-invalid={Boolean(errors.name)}
                    />
                    <input
                      type="text"
                      placeholder={t(c.company, lang)}
                      value={form.company}
                      onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors({ ...errors, company: "" }); }}
                      className={inputClass('company')}
                      aria-invalid={Boolean(errors.company)}
                    />
                  </div>
                  {(errors.name || errors.company) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 -mt-1">
                      <p className="text-[12px] text-destructive font-medium min-h-4">{errors.name || ""}</p>
                      <p className="text-[12px] text-destructive font-medium min-h-4">{errors.company || ""}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <div className={cn(
                        "grid grid-cols-[118px_minmax(0,1fr)] gap-2",
                      )}>
                        <div className={cn(
                          "flex items-center rounded-md border bg-background px-3",
                          errors.phone ? "border-destructive" : "border-border",
                        )}>
                          <span className="text-[18px] leading-none mr-2" aria-hidden="true">{selectedCountry.flag}</span>
                          <select
                            value={form.phoneCode}
                            onChange={(e) => { setForm({ ...form, phoneCode: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                            className="w-full bg-transparent text-body font-medium text-foreground focus:outline-none"
                            aria-label={t(c.phoneCode, lang)}
                          >
                            {COUNTRY_CODES.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.code}
                              </option>
                            ))}
                          </select>
                        </div>
                        <input
                          type="tel"
                          inputMode="numeric"
                          placeholder={selectedCountry.placeholder}
                          value={form.phone}
                          onChange={(e) => {
                            const digitsOnly = e.target.value.replace(/\D/g, "");
                            setForm({ ...form, phone: digitsOnly });
                            setErrors({ ...errors, phone: "" });
                          }}
                          className={inputClass('phone')}
                          aria-invalid={Boolean(errors.phone)}
                          maxLength={selectedCountry.maxLength}
                        />
                      </div>
                      <p className="text-[12px] text-destructive font-medium min-h-4">{errors.phone || ""}</p>
                    </div>
                    <input
                      type="email"
                      placeholder={t(c.email, lang)}
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      className={inputClass('email')}
                      aria-invalid={Boolean(errors.email)}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 -mt-1">
                    <div />
                    <p className="text-[12px] text-destructive font-medium min-h-4">{errors.email || ""}</p>
                  </div>
                  <textarea
                    placeholder={t(c.message, lang)}
                    value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                    rows={3}
                    className={`${inputClass('message')} resize-none`}
                      aria-invalid={Boolean(errors.message)}
                  />
                  <p className="text-[12px] text-destructive font-medium min-h-4 -mt-1">{errors.message || ""}</p>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={sending}
                    className="group inline-flex items-center justify-center gap-4 bg-accent text-accent-foreground px-8 py-4 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-yellow-hover transition-colors w-full disabled:opacity-70"
                  >
                    <div className="flex flex-col">
                      <span className="font-extrabold text-[14px] uppercase tracking-[0.15em]">
                        {sending ? t(c.sending, lang) : t(c.submit, lang)}
                      </span>
                      <span className="font-semibold text-[10px] tracking-[0.08em] text-dark/80 -mt-0.5">
                        {t(c.submitSub, lang)}
                      </span>
                    </div>
                    <img src={sendIcon} alt="" className="w-[20px] h-[20px] group-hover-float" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
