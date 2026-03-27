import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import referencia1 from "@/assets/referencia-1.png";
import referencia2 from "@/assets/referencia-2.png";
import referencia3 from "@/assets/referencia-3.png";

const projects = [
  {
    image: referencia1,
    title: "ŠPORTOVÁ HALA MALACKY",
    desc: "3D skenovanie objektu pre kontrolu realizácie a analýzu plôch",
  },
  {
    image: referencia2,
    title: "METRANS PARKOVISKO",
    desc: "Skenovanie na kontrolu spádovanej plochy 0.5% na 4.7 Ha",
  },
  {
    image: referencia3,
    title: "BUDOVA FAURECIA",
    desc: "Zameranie reality 2D pôdorysov a rezov",
  },
];

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projekty" className="bg-background py-14 lg:py-20 border-t border-border">
      {/* Text content in container */}
      <div className="container mx-auto px-4 lg:px-8">
        {/* Label with horizontal line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-[40px] h-[1px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            REFERENČNÉ PROJEKTY
          </p>
        </div>

        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 text-center">
          <span className="text-foreground">Pozrite si naše projekty</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[420px] mb-12 font-medium text-center mx-auto">
          Pomohli sme architektom, projektantom a stavebným firmám pracovať s presnými dátami a eliminovať chyby pri stavbách.
        </p>
      </div>

      {/* Carousel inside container */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {projects.map((p, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-[300px] lg:h-[500px] object-cover"
                    />
                    {/* Black overlay bar at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-primary px-6 lg:px-12 py-5">
                      <p className="text-[12px] lg:text-[14px] font-extrabold uppercase tracking-wider text-primary-foreground mb-1">
                        {p.title}
                      </p>
                      <p className="text-[13px] lg:text-[15px] text-primary-foreground/70 font-medium">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-primary-foreground/30 bg-primary/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/70 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-primary-foreground/30 bg-primary/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/70 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
