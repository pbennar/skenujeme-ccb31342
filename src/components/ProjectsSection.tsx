import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import projectHall from "@/assets/project-sports-hall.jpg";
import projectMetrans from "@/assets/project-metrans-parking.jpg";
import projectFaurecia from "@/assets/project-faurecia.jpg";

const projects = [
  {
    image: projectHall,
    title: "ŠPORTOVÁ HALA MALACKY",
    desc: "3D skenovanie objektu pre kontrolu realizácie a analýzu plôch",
  },
  {
    image: projectMetrans,
    title: "METRANS PARKOVISKO",
    desc: "Skenovanie na kontrolu spádovanej plochy 0.5% na 4.7 Ha",
  },
  {
    image: projectFaurecia,
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
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 text-center">
          <span className="text-foreground">Pozrite si naše projekty</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[560px] mb-12 font-medium text-center mx-auto">
          Pomohli sme architektom, projektantom a stavebným firmám pracovať s presnými dátami a eliminovať chyby pri stavbách.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center gap-4 max-w-[700px] mx-auto">
          {/* Left arrow */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Slides */}
          <div className="flex-1 overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {projects.map((p, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
                  <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-[220px] lg:h-[320px] object-cover"
                    />
                    <div className="bg-primary p-5">
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

          {/* Right arrow */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
