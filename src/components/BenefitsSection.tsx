import scanRender from "@/assets/scan-render.png";
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
    <section className="bg-gray-light py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Label with horizontal line - same as IntroSection */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-[40px] h-[1px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            HLAVNÉ VÝHODY
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          {/* Left - same style as IntroSection */}
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5">
              <span className="text-foreground">Moderná technológia,</span>
              <br />
              <span className="text-foreground">ktorá dokáže </span>
              <span className="text-accent">presne zachytiť</span>
              <br />
              <span className="text-accent">existujúci stav.</span>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[420px] font-medium">
              Skenery zaznamenávajú milióny bodov za sekundu a vytvárajú tzv. mračno bodov, ktoré predstavuje{" "}
              <span className="font-bold text-foreground">presnú digitálnu repliku reality.</span>
            </p>
          </div>

          {/* Right - floating image */}
          <div className="flex items-center justify-center">
            <img
              src={scanRender}
              alt="3D sken technológia"
              loading="lazy"
              className="w-full max-w-[460px] rounded-lg animate-float"
            />
          </div>
        </div>

        {/* 6 benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-background rounded-lg border border-border shadow-sm p-5 flex items-start gap-3"
            >
              {/* Check icon with pulsing ring */}
              <div className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center group/check">
                <span className="absolute inset-0 rounded-full bg-primary/20 group-hover/check:animate-pulse-ring" />
                <span className="relative w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </span>
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-foreground uppercase tracking-wide mb-0.5">{b.title}</p>
                <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed font-medium">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
