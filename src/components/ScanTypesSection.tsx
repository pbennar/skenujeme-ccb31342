import { ArrowRight } from "lucide-react";
import cardBuilding from "@/assets/card-building.jpg";
import cardHalls from "@/assets/card-halls.jpg";
import cardMonument from "@/assets/card-monument.jpg";
import cardConstruction from "@/assets/card-construction.jpg";

const cards = [
  {
    image: cardHalls,
    label: "BUDOVY | HALY |\nVÝROBNÉ LINKY",
  },
  {
    image: cardBuilding,
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
        <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground mb-2">
          Čo dokážeme naskenovať.
        </h2>
        <p className="text-body-lg text-gray-text mb-10 max-w-[480px]">
          3D laserové skenovanie využívame pri rôznych typoch objektov a projektov.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cards.map((card, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm border border-border">
              <img
                src={card.image}
                alt={card.label}
                loading="lazy"
                className="w-full h-[120px] lg:h-[140px] object-cover"
              />
              <div className="p-3 bg-background">
                <p className="text-micro lg:text-tiny font-bold uppercase tracking-wider text-foreground whitespace-pre-line leading-snug">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <a
            href="#projekty"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-body uppercase tracking-wider px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            POZRIEŤ PROJEKTY
            <ArrowRight className="w-3.5 h-3.5" />
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
