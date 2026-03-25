import arrowDown from "@/assets/arrow-down.svg";

const IntroSection = () => {
  return (
    <section id="skenovanie" className="bg-gray-light py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Label with horizontal line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-[40px] h-[1px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            AKÝ JE PROBLÉM?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5">
              <span className="text-foreground">Vidieť realitu</span>
              <br />
              <span className="text-foreground">skôr než sa zmení</span>
              <br />
              <span className="text-accent">na problém.</span>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[420px]">
              Pri stavebných projektoch, rekonštrukciách alebo modernizácii výrobných technológií je{" "}
              <span className="font-bold text-foreground">presnosť vstupných dát kľúčová.</span>
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <p className="text-[18px] lg:text-[22px] font-bold text-foreground mb-3">Riešenie</p>
              <p className="text-[14px] lg:text-[16px] text-gray-text leading-relaxed">
                3D laserové skenovanie{" "}
                <span className="font-bold text-foreground">zachytí skutočný stav objektu</span>{" "}
                s presnosťou až do 1 mm a vytvorí kompletný digitálny obraz reality.
              </p>
            </div>
            <a
              href="#proces"
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-primary/90 transition-colors w-fit"
            >
              <div className="flex flex-col">
                <span className="font-extrabold text-[14px] uppercase tracking-[0.15em]">AKO TO FUNGUJE</span>
                <span className="font-semibold text-[10px] tracking-[0.08em] text-primary-foreground/80 -mt-0.5">
                  3D skenovanie v praxi
                </span>
              </div>
              <img src={arrowDown} alt="" className="w-[20px] h-[20px] brightness-0 invert" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
