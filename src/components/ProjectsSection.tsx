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

      {/* Carousel */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* Black bar with title, description and arrows on top */}
            <div className="bg-primary px-6 lg:px-8 py-4 flex items-center justify-between">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-primary-foreground" />
              </button>

              <div className="text-center flex-1 px-4">
                <p className="text-[12px] lg:text-[14px] font-extrabold uppercase tracking-wider text-primary-foreground mb-0.5">
                  {projects[selectedIndex]?.title}
                </p>
                <p className="text-[13px] lg:text-[15px] text-primary-foreground/70 font-medium">
                  {projects[selectedIndex]?.desc}
                </p>
              </div>

              <button
                onClick={() => emblaApi?.scrollNext()}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>

            {/* Image carousel */}
            <div className="overflow-hidden rounded-b-xl" ref={emblaRef}>
              <div className="flex">
                {projects.map((p, i) => (
                  <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-[280px] lg:h-[460px] object-cover"
                    />
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
