import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center pt-[44px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-dark/75" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <p className="text-micro uppercase tracking-[0.3em] text-primary-foreground/60 font-medium mb-2">
          VERNÁ REALITA V 3D BEZ DOHADOV
        </p>
        <h1 className="text-heading-xl lg:text-heading-2xl font-extrabold text-primary-foreground max-w-[520px] mb-4 leading-tight">
          Prenášame reálny svet do presného{" "}
          <span className="text-accent">3D digitálneho</span> priestoru.
        </h1>
        <p className="text-body lg:text-body-lg text-primary-foreground/70 max-w-[440px] mb-6 font-light">
          Zachytíme realitu presne, kompletne a v jednom kroku – ešte skôr, než vzniknú chyby, kolízie a dodatočné náklady.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-box-title uppercase tracking-wider px-6 py-3 rounded-md hover:bg-yellow-hover transition-colors"
          >
            POZRIEŤ PROJEKTY
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-micro text-primary-foreground/50 font-normal mt-1">
            kde sme využili 3D skenovanie
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
