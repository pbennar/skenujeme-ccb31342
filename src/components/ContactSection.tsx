import ctaBg from "@/assets/cta-bg.png";
import sendIcon from "@/assets/send-icon.svg";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const ContactSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const c = translations.contact;
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.company.trim()) newErrors.company = true;
    if (!form.phone.trim()) newErrors.phone = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true;
    if (!form.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSending(true);
    setSubmitError("");

    try {
      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: form.name.trim(),
          company: form.company.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
      });

      if (error) throw error;

      setSubmitted(true);
      setForm({ name: "", company: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError(t(c.error, lang));
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full border ${errors[field] ? 'border-destructive' : 'border-border'} rounded-md px-3 py-2.5 text-body-lg text-foreground placeholder:text-gray-text bg-background focus:outline-none focus:ring-1 focus:ring-primary`;

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
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                      className={inputClass('name')}
                    />
                    <input
                      type="text"
                      placeholder={t(c.company, lang)}
                      value={form.company}
                      onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors({ ...errors, company: false }); }}
                      className={inputClass('company')}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder={t(c.phone, lang)}
                      value={form.phone}
                      onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }); }}
                      className={inputClass('phone')}
                    />
                    <input
                      type="email"
                      placeholder={t(c.email, lang)}
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: false }); }}
                      className={inputClass('email')}
                    />
                  </div>
                  <textarea
                    placeholder={t(c.message, lang)}
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: false }); }}
                    rows={3}
                    className={`${inputClass('message')} resize-none`}
                  />
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
