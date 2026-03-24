import { ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <section id="skenovanie" className="bg-background py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-micro uppercase tracking-[0.25em] text-gray-text font-medium mb-6">
          AKÝ JE PROBLÉM?
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground leading-tight mb-4">
              Vidieť realitu skôr<br />
              než sa zmení na problém.
            </h2>
            <p className="text-body-lg text-gray-text max-w-[380px]">
              Pri stavebných projektoch, rekonštrukciách alebo modernizácii výrobných technológií je presnosť vstupných dát kľúčová.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-light rounded-lg p-6 mb-4">
              <p className="text-box-title font-bold text-foreground mb-2">Riešenie</p>
              <p className="text-body-lg text-gray-text">
                3D laserové skenovanie zachytí skutočný stav objektu s presnosťou až do 1 mm a vytvorí kompletný digitálny obraz reality.
              </p>
            </div>
            <a
              href="#proces"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-body uppercase tracking-wider px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity w-fit"
            >
              AKO TO FUNGUJE
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
