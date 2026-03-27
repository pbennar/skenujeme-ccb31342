import { ArrowRight } from "lucide-react";
import arrowDown from "@/assets/arrow-down.svg";
import cardBuilding from "@/assets/card-building.png";
import cardHalls from "@/assets/card-halls.png";
import cardMonument from "@/assets/card-monument.png";
import cardConstruction from "@/assets/card-construction.png";

const cards = [
  {
    image: cardBuilding,
    parts: ["BUDOVY", "HALY", "VÝROBNÉ LINKY"],
  },
  {
    image: cardHalls,
    parts: ["CESTY", "MOSTY", "KRIŽOVATKY", "SPEVNENÉ PLOCHY"],
  },
  {
    image: cardMonument,
    parts: ["PAMIATKY", "DOMY", "TECHNOLOGICKÉ CELKY"],
  },
  {
    image: cardConstruction,
    parts: ["ROZOSTAVANÉ STAVBY", "STAVEBNÉ DETAILY"],
  },
];

const ScanTypesSection = () => {
  return (
    <section className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 text-center">
          <span className="text-foreground">Čo dokážeme naskenovať</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[560px] mb-12 font-medium text-center mx-auto">
          3D laserové skenovanie využívame pri rôznych typoch objektov a projektov.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-background rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-out hover:scale-105 cursor-default"
            >
              {/* Image edge-to-edge top/left/right */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.parts.join(" | ")}
                  loading="lazy"
                  className="w-full h-[120px] lg:h-[160px] object-cover"
                />
              </div>

              {/* Bold label with yellow pipes */}
              <div className="p-4 pt-3">
                <p className="text-[10px] lg:text-[12px] font-extrabold uppercase tracking-wider text-foreground leading-snug">
                  {card.parts.map((part, j) => (
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

        <div className="flex flex-col items-center">
          <a
            href="#projekty"
            className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-primary/90 transition-colors"
          >
            <div className="flex flex-col">
              <span className="font-extrabold text-[14px] uppercase tracking-[0.15em]">POZRIEŤ PROJEKTY</span>
              <span className="font-semibold text-[10px] tracking-[0.08em] text-primary-foreground/80 -mt-0.5">
                kde sme využili 3D skenovanie
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
