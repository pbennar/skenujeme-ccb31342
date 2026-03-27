import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

import referencia1 from "@/assets/referencia-1.png";
import referencia2 from "@/assets/referencia-2.png";
import referencia3 from "@/assets/referencia-3.png";

const images = [referencia1, referencia2, referencia3];

const ProjectsSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { lang } = useLanguage();
  const p = translations.projects;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section id="projekty" className="bg-background py-14 lg:py-20 border-t border-border" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-4 mb-8" data-reveal="left">
          <div className="w-[40px] h-[1px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            {t(p.label, lang)}
          </p>
        </div>

        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 text-center" data-reveal data-reveal-delay="1">
          <span className="text-foreground">{t(p.heading, lang)}</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[420px] mb-12 font-medium text-center mx-auto" data-reveal data-reveal-delay="2">
          {t(p.subtext, lang)}
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8" data-reveal data-reveal-delay="3">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            <div className="bg-primary px-6 lg:px-8 py-4 flex items-center justify-between">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-primary-foreground" />
              </button>

              <div className="text-center flex-1 px-2 min-h-[56px] flex flex-col justify-center">
                <p className="text-[11px] lg:text-[14px] font-extrabold uppercase tracking-wider text-primary-foreground mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                  {t(p.items[selectedIndex].title, lang)}
                </p>
                <p className="text-[11px] lg:text-[15px] text-primary-foreground/70 font-medium line-clamp-2">
                  {t(p.items[selectedIndex].desc, lang)}
                </p>
              </div>

              <button
                onClick={() => emblaApi?.scrollNext()}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {p.items.map((item, i) => (
                  <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
                    <img src={images[i]} alt={t(item.title, lang)} loading="lazy" className="w-full h-[280px] lg:h-[460px] object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
