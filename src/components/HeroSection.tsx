import heroBg from "@/assets/hero-bg.svg";
import arrowDown from "@/assets/arrow-down.svg";

const HeroSection = () => {
  const handleScrollDown = () => {
    const target = document.getElementById("skenovanie");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[520px] lg:min-h-[600px] flex items-center pt-[58px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-dark/70" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* Yellow subtitle with white vertical line */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-[2px] h-[18px] bg-primary-foreground" />
          <p className="text-[8px] uppercase tracking-[0.5em] text-accent font-semibold">
            VERNÁ REALITA V 3D BEZ DOHADOV
          </p>
        </div>

        {/* Main heading - thin + bold mix */}
        <h1 className="max-w-[540px] mb-5 leading-[1.15]">
          <span className="text-[28px] lg:text-[36px] font-light text-primary-foreground">
            Prenášame reálny svet{" "}
          </span>
          <span className="text-[28px] lg:text-[36px] font-light text-primary-foreground">
            do presného{" "}
          </span>
          <span className="text-[28px] lg:text-[36px] font-extrabold text-primary-foreground">
            3D digitálneho
          </span>
          <span className="text-[28px] lg:text-[36px] font-light text-primary-foreground">
            {" "}priestoru
          </span>
          <span className="text-[28px] lg:text-[36px] font-extrabold text-accent">.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[12px] lg:text-[14px] text-primary-foreground/65 max-w-[440px] mb-8 font-light leading-relaxed">
          Zachytíme realitu presne, kompletne a v jednom kroku – ešte skôr, než vzniknú chyby, kolízie a dodatočné náklady.
        </p>

        {/* CTA Button */}
        <a
          href="#projekty"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-yellow-hover transition-colors"
        >
          <div className="flex flex-col">
            <span className="font-bold text-[11px] tracking-[0.15em]">POZRIEŤ PROJEKTY</span>
            <span className="font-light text-[8px] tracking-[0.08em] opacity-70 -mt-0.5">
              kde sme využili 3D skenovanie
            </span>
          </div>
          <img src={arrowDown} alt="" className="w-[14px] h-[14px] rotate-[-90deg]" />
        </a>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <button
          onClick={handleScrollDown}
          className="w-[52px] h-[52px] bg-primary-foreground rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center animate-bounce-gentle cursor-pointer hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-shadow"
        >
          <img src={arrowDown} alt="Scroll down" className="w-[14px] h-[14px]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
