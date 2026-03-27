import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const UsagesSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const u = translations.usages;
  const tags = u.tags[lang];

  return (
    <section className="bg-background py-14 lg:py-20 border-t border-border" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground leading-tight mb-8" data-reveal>
          {t(u.heading, lang)}<span className="text-accent">.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
          {tags.map((tag, i) => (
            <div
              key={tag}
              className="usage-card relative bg-muted border border-border rounded-lg px-5 py-4 cursor-default overflow-hidden"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <span className="text-[11px] lg:text-[13px] font-normal uppercase tracking-[0.28em] text-foreground">
                {tag}
              </span>
              <span className="usage-line absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsagesSection;
