import techRender from "@/assets/tech-render.jpg";
import { Check } from "lucide-react";

const benefits = [
  { title: "Presnosť", desc: "až do 1 mm bez akýchkoľvek odhadov" },
  { title: "Rýchlosť", desc: "kompletné zameranie v jednom kroku" },
  { title: "Efektivita", desc: "menej chýb a menej prestojov" },
  { title: "Komplexnosť dát", desc: "všetko dostupné v jednom modeli" },
  { title: "Spolupráca tímov", desc: "rovnaké dáta pre všetky tímy" },
  { title: "Špičkové prístroje", desc: "máme prístroje s najnovšími 3D lasermi" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-micro uppercase tracking-[0.25em] text-gray-text font-medium mb-2">
          HLAVNÉ VÝHODY
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground leading-tight mb-4">
              Moderná technológia, ktorá dokáže{" "}
              <span className="text-accent">presne zachytiť</span> existujúci stav.
            </h2>
            <p className="text-body-lg text-gray-text max-w-[380px]">
              Skenery zaznamenávajú milióny bodov za sekundu a vytvárajú tzv. mračno bodov, ktoré predstavuje presnú digitálnu repliku reality.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={techRender}
              alt="3D technológia"
              loading="lazy"
              className="w-full max-w-[400px] rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-background rounded-lg border border-border shadow-sm p-5 flex items-start gap-3"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
              <div>
                <p className="text-box-title font-bold text-foreground mb-0.5">{b.title}</p>
                <p className="text-body text-gray-text">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
