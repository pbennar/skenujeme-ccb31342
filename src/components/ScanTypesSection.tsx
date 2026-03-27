import { ArrowRight } from "lucide-react";
import cardBuilding from "@/assets/card-building.jpg";
import cardHalls from "@/assets/card-halls.jpg";
import cardMonument from "@/assets/card-monument.jpg";
import cardConstruction from "@/assets/card-construction.jpg";

const cards = [
  {
    image: cardBuilding,
    label: "BUDOVY | HALY |\nVÝROBNÉ LINKY",
  },
  {
    image: cardHalls,
    label: "CESTY | MOSTY |\nKRIŽOVATKY | SPEVNENÉ PLOCHY",
  },
  {
    image: cardMonument,
    label: "PAMIATKY | DOMY |\nTECHNOLOGICKÉ CELKY",
  },
  {
    image: cardConstruction,
    label: "ROZOSTAVANÉ STAVBY |\nSTAVEBNÉ DETAILY",
  },
];

const ScanTypesSection = () => {
  return (
    <section className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading - same style as ProcessSection */}
        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 text-center">
          <span className="text-foreground">Čo dokážeme naskenovať</span>
          <span className="text-accent">.</span>
        </h2>

        {/* Subtitle - same style as ProcessSection */}
        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[560px] mb-12 font-medium text-center mx-auto">
          3D laserové skenovanie využívame pri rôznych typoch objektov a projektov.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-background rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-out hover:scale-105 cursor-default"
            >
              {/* Image with shadow underneath */}
              <div className="p-3 pb-0">
                <div className="rounded-lg overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
                  <img
                    src={card.image}
                    alt={card.label}
                    loading="lazy"
                    className="w-full h-[120px] lg:h-[160px] object-cover"
                  />
                </div>
              </div>

              {/* Yellow divider + bold label */}
              <div className="p-4 pt-3">
                <div className="w-10 h-[3px] bg-accent mb-2.5 rounded-full" />
                <p className="text-[10px] lg:text-[12px] font-extrabold uppercase tracking-wider text-foreground whitespace-pre-line leading-snug">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <a
            href="#projekty"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-body uppercase tracking-wider px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            POZRIEŤ PROJEKTY
            <ArrowRight className="w-3.5 h-3.5 group-hover:animate-bounce-gentle" />
          </a>
          <span className="text-micro text-gray-text mt-1.5">
            kde sme využili 3D skenovanie
          </span>
        </div>
      </div>
    </section>
  );
};

export default ScanTypesSection;
