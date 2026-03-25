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
        {/* Horizontal white line + yellow subtitle */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-[40px] h-[2px] bg-primary-foreground" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-accent font-semibold">
            VERNÁ REALITA V 3D BEZ DOHADOV
          </p>
        </div>

        {/* Main heading - light intro, bold key phrases */}
        <h1 className="max-w-[560px] mb-6 leading-[1.15]">
          <span className="text-[28px] lg:text-[36px] font-light text-primary-foreground">
            Prenášame reálny svet do{" "}
          </span>
          <span className="text-[28px] lg:text-[36px] font-extrabold text-primary-foreground">
            presného 3D digitálneho priestoru
          </span>
          <span className="text-[28px] lg:text-[36px] font-extrabold text-accent">.</span>
        </h1>

        {/* Subtext - larger, bolder, white */}
        <p className="text-[16px] lg:text-[18px] text-primary-foreground max-w-[480px] mb-10 font-normal leading-relaxed">
          Zachytíme realitu presne, kompletne a v jednom kroku – ešte skôr, než vzniknú chyby, kolízie a dodatočné náklady.
        </p>

        {/* CTA Button */}
        <a
          href="#projekty"
          className="inline-flex items-center gap-4 bg-accent text-accent-foreground px-8 py-4 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-yellow-hover transition-colors"
        >
          <div className="flex flex-col">
            <span className="font-extrabold text-[14px] uppercase tracking-[0.15em]">POZRIEŤ PROJEKTY</span>
            <span className="font-semibold text-[10px] tracking-[0.08em] text-dark/80 -mt-0.5">
              kde sme využili 3D skenovanie
            </span>
          </div>
          <img src={arrowDown} alt="" className="w-[20px] h-[20px]" />
        </a>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <button
          onClick={handleScrollDown}
          className="w-[56px] h-[56px] bg-primary-foreground rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center animate-bounce-gentle cursor-pointer hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-shadow"
        >
          <img src={arrowDown} alt="Scroll down" className="w-[20px] h-[20px]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
