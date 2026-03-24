import projectHall from "@/assets/project-sports-hall.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projekty" className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-micro uppercase tracking-[0.25em] text-gray-text font-medium mb-2 text-center">
          REFERENČNÉ PROJEKTY
        </p>
        <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground text-center mb-2">
          Pozrite si naše projekty.
        </h2>
        <p className="text-body-lg text-gray-text text-center max-w-[480px] mx-auto mb-10">
          Pomohli sme architektom, projektantom a stavebným firmám pracovať s presnými dátami a eliminovať chyby pri stavbách.
        </p>

        {/* Carousel placeholder */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <button className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-gray-light transition-colors">
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>

            <div className="flex-1 max-w-[600px]">
              <div className="rounded-lg overflow-hidden shadow-md border border-border">
                <img
                  src={projectHall}
                  alt="Športová hala Malacky"
                  loading="lazy"
                  className="w-full h-[200px] lg:h-[280px] object-cover"
                />
                <div className="bg-primary p-4">
                  <p className="text-tiny font-bold uppercase tracking-wider text-primary-foreground mb-1">
                    ŠPORTOVÁ HALA MALACKY
                  </p>
                  <p className="text-body text-primary-foreground/70">
                    3D skenovanie objektu pre kontrolu realizácie a analýzu plôch
                  </p>
                </div>
              </div>
            </div>

            <button className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-gray-light transition-colors">
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
