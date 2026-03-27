import faroScanner from "@/assets/faro-scanner.svg";
import checkIcon from "@/assets/check-icon.svg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const ProcessSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const p = translations.process;

  const steps = p.steps.map((step, idx) => ({
    num: String(idx + 1),
    title: t(step.title, lang),
    items: [...step.items[lang]],
    bullets: 'bullets' in step && step.bullets ? [...(step.bullets as Record<string, readonly string[]>)[lang]] : undefined,
  }));

  return (
    <section id="proces" className="bg-background py-14 lg:py-20 border-t border-border" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-4 mb-8" data-reveal="left">
          <div className="w-[40px] h-[0.5px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            {t(p.label, lang)}
          </p>
        </div>

        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 text-center" data-reveal data-reveal-delay="1">
          <span className="text-foreground">{t(p.heading, lang)}</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[560px] mb-12 font-medium text-center mx-auto" data-reveal data-reveal-delay="2">
          {t(p.subtext, lang)}
        </p>

        {/* Mobile */}
        <div className="flex flex-col lg:hidden gap-6">
          <div className="flex justify-center items-center" data-reveal="scale" data-reveal-delay="2">
            <img src={faroScanner} alt="3D laser scanner FARO" loading="lazy" className="w-full max-w-[280px] h-auto object-contain" />
          </div>
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <div key={step.num} data-reveal data-reveal-delay={String(i + 3)}>
                <StepCard {...step} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col gap-5">
            <div data-reveal="left" data-reveal-delay="2"><StepCard {...steps[0]} /></div>
            <div data-reveal="left" data-reveal-delay="4"><StepCard {...steps[2]} /></div>
          </div>
          <div className="flex justify-center items-center" data-reveal="scale" data-reveal-delay="3">
            <img src={faroScanner} alt="3D laser scanner FARO" loading="lazy" className="w-full max-w-[340px] h-auto object-contain" />
          </div>
          <div className="flex flex-col gap-5">
            <div data-reveal="right" data-reveal-delay="3"><StepCard {...steps[1]} /></div>
            <div data-reveal="right" data-reveal-delay="5"><StepCard {...steps[3]} /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ num, title, items, bullets }: { num: string; title: string; items: string[]; bullets?: string[] }) => (
  <div className="bg-background rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-border/50 p-5 transition-transform duration-300 ease-out hover:scale-105 cursor-default">
    <div className="flex items-center gap-3 mb-4">
      <span className="flex-shrink-0 w-8 h-8 rounded-md bg-primary text-primary-foreground text-[13px] font-extrabold flex items-center justify-center">
        {num}.
      </span>
      <p className="text-[13px] font-extrabold text-foreground uppercase tracking-wide">{title}</p>
    </div>
    <div className="flex flex-col gap-2 pl-1">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <img src={checkIcon} alt="" className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed font-medium">{item}</p>
        </div>
      ))}
      {bullets && bullets.length > 0 && (
        <div className="flex flex-col gap-1.5 pl-7">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-accent flex-shrink-0 mt-[6px]" />
              <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed font-medium">{bullet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProcessSection;
