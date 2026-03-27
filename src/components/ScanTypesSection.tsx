import arrowDown from "@/assets/arrow-down.svg";
import { handleAnchorClick } from "@/lib/smoothScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import cardBuilding from "@/assets/card-building.png";
import cardHalls from "@/assets/card-halls.png";
import cardMonument from "@/assets/card-monument.png";
import cardConstruction from "@/assets/card-construction.png";

const images = [cardBuilding, cardHalls, cardMonument, cardConstruction];

const ScanTypesSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const s = translations.scanTypes;

  return (
    <section className="bg-background py-14 lg:py-20 border-t border-border" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 text-center" data-reveal>
          <span className="text-foreground">{t(s.heading, lang)}</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[560px] mb-12 font-medium text-center mx-auto" data-reveal data-reveal-delay="1">
          {t(s.subtext, lang)}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {s.cards.map((card, i) => (
            <div
              key={i}
              className="bg-background rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-out hover:scale-105 cursor-default"
              data-reveal
              data-reveal-delay={String(i + 2)}
            >
              <div className="overflow-hidden">
                <img src={images[i]} alt={card[lang].join(" | ")} loading="lazy" className="w-full h-[120px] lg:h-[160px] object-cover" />
              </div>
              <div className="p-4 pt-3 text-center">
                <p className="text-[12px] lg:text-[14px] font-extrabold uppercase tracking-wider text-foreground leading-snug">
                  {card[lang].map((part, j) => (
                    <span key={j}>
                      {j > 0 && <span className="text-accent"> | </span>}
                      {part}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center" data-reveal data-reveal-delay="6">
          <a
            href="#projekty"
            onClick={handleAnchorClick}
            className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-primary/90 transition-colors"
          >
            <div className="flex flex-col">
              <span className="font-extrabold text-[14px] uppercase tracking-[0.15em]">{t(s.ctaMain, lang)}</span>
              <span className="font-semibold text-[10px] tracking-[0.08em] text-primary-foreground/80 -mt-0.5">
                {t(s.ctaSub, lang)}
              </span>
            </div>
            <img src={arrowDown} alt="" className="w-[20px] h-[20px] brightness-0 invert group-hover-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScanTypesSection;
