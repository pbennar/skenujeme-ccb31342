import arrowDown from "@/assets/arrow-down.svg";
import { handleAnchorClick } from "@/lib/smoothScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const IntroSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const i = translations.intro;

  return (
    <section id="skenovanie" className="bg-gray-light py-14 lg:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-4 mb-8" data-reveal="left">
          <div className="w-[40px] h-[1px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            {t(i.label, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5" data-reveal data-reveal-delay="1">
              <span className="text-foreground">{t(i.heading1, lang)}</span>
              <br />
              <span className="text-foreground">{t(i.heading2, lang)}</span>
              <br />
              <span className="text-accent">{t(i.heading3, lang)}</span>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[420px] font-medium" data-reveal data-reveal-delay="2">
              {t(i.text, lang)}{" "}
              <span className="font-bold text-foreground">{t(i.textBold, lang)}</span>
            </p>
          </div>

          <div className="flex flex-col justify-center" data-reveal="right" data-reveal-delay="2">
            <div className="mb-6">
              <p className="text-[18px] lg:text-[22px] font-bold text-foreground mb-3">{t(i.solutionTitle, lang)}</p>
              <p className="text-[14px] lg:text-[16px] text-gray-text leading-relaxed font-medium">
                {t(i.solutionText, lang)}{" "}
                <span className="font-bold text-foreground">{t(i.solutionBold, lang)}</span>{" "}
                {t(i.solutionEnd, lang)}
              </p>
            </div>
            <a
              href="#proces"
              onClick={handleAnchorClick}
              className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-primary/90 transition-colors w-fit"
            >
              <div className="flex flex-col">
                <span className="font-extrabold text-[14px] uppercase tracking-[0.15em]">{t(i.ctaMain, lang)}</span>
                <span className="font-semibold text-[10px] tracking-[0.08em] text-primary-foreground/80 -mt-0.5">
                  {t(i.ctaSub, lang)}
                </span>
              </div>
              <img src={arrowDown} alt="" className="w-[20px] h-[20px] brightness-0 invert group-hover-float" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
