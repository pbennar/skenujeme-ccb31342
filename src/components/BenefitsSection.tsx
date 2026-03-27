import scanRender from "@/assets/scan-render.png";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const BenefitsSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const b = translations.benefits;

  return (
    <section className="bg-gray-light py-14 lg:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-4 mb-8" data-reveal="left">
          <div className="w-[40px] h-[1px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            {t(b.label, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5" data-reveal data-reveal-delay="1">
              <span className="text-foreground">{t(b.heading1, lang)}</span>
              <br />
              <span className="text-foreground">{t(b.heading2, lang)}</span>
              <span className="text-accent">{t(b.heading3, lang)}</span>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[420px] font-medium" data-reveal data-reveal-delay="2">
              {t(b.text, lang)}{" "}
              <span className="font-bold text-foreground">{t(b.textBold, lang)}</span>
            </p>
          </div>

          <div className="flex items-center justify-center" data-reveal="right" data-reveal-delay="2">
            <img src={scanRender} alt="3D scan technology" loading="lazy" className="w-full max-w-[460px] rounded-lg animate-float" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {b.items.map((item, i) => (
            <div
              key={i}
              className="group/card bg-background rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] p-5 flex items-start gap-3"
              data-reveal
              data-reveal-delay={String(i + 3)}
            >
              <div className="relative flex-shrink-0 w-11 h-11 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/20 group-hover/card:animate-[pulse-ring_1.5s_ease-in-out_infinite]" />
                <span className="relative w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </span>
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-foreground uppercase tracking-wide mb-0.5">{t(item.title, lang)}</p>
                <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed font-medium">{t(item.desc, lang)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
