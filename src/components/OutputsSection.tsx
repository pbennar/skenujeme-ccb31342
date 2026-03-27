import softAutocad from "@/assets/soft-autocad.png";
import softRevit from "@/assets/soft-revit.png";
import softBim360 from "@/assets/soft-bim360.png";
import ikona360 from "@/assets/ikona-360.svg";
import ikonaMracno from "@/assets/ikona-mracno.svg";
import ikona2d from "@/assets/ikona-2d.svg";
import ikona3d from "@/assets/ikona-3d.svg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const outputs = [
  {
    icon: ikona360,
    title: "360° fotografie a vizualizácie",
    desc: "presne naskenovaného objektu",
  },
  {
    icon: ikonaMracno,
    title: "Mračno bodov",
    desc: "E57 | LAS | XYZ | RCP | DWG",
  },
  {
    icon: ikona2d,
    title: "2D výkresy",
    desc: "skutkového stavu objektu",
  },
  {
    icon: ikona3d,
    title: "3D | BIM model",
    desc: "digitálne dvojča objektu",
  },
];

const software = [
  { logo: softAutocad, alt: "AutoCAD" },
  { logo: softRevit, alt: "Revit" },
  { logo: softBim360, alt: "BIM 360" },
];

const OutputsSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="vystupy" className="bg-gray-light py-14 lg:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-4 mb-8" data-reveal="left">
          <div className="w-[40px] h-[1px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            VÝSTUPY A DÁTA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5" data-reveal data-reveal-delay="1">
              <span className="text-foreground">Dáta použiteľné</span>
              <br />
              <span className="text-foreground">v BIM </span>
              <span className="text-accent">nástrojoch.</span>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[420px] font-medium mb-8" data-reveal data-reveal-delay="2">
              Digitálny model reality obsahujúci milióny presných meraných bodov – možnosť prehliadať v jednoduchom prehliadači –{" "}
              <span className="font-bold text-foreground">bez nutnosti CAD znalostí.</span>
            </p>

            {/* Software logos */}
            <div className="flex items-stretch gap-4" data-reveal data-reveal-delay="3">
              {software.map((s) => (
                <div
                  key={s.alt}
                  className="bg-background rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] p-4 flex items-center justify-center"
                >
                  <img src={s.logo} alt={s.alt} className={`${s.alt === 'Revit' ? 'h-[36px] lg:h-[42px]' : 'h-[28px] lg:h-[32px]'} object-contain`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right - 4 output cards */}
          <div className="flex flex-col gap-4">
            {outputs.map((o, i) => (
              <div
                key={i}
                className="bg-background rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] p-5 flex items-center gap-4 transition-transform duration-300 ease-out hover:scale-105 cursor-default"
                data-reveal="right"
                data-reveal-delay={String(i + 2)}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent flex items-center justify-center">
                  <img src={o.icon} alt="" className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[13px] font-extrabold text-foreground uppercase tracking-wide mb-0.5">
                    {o.title.split('|').map((part, j, arr) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && <span className="text-accent">|</span>}
                      </span>
                    ))}
                  </p>
                  {o.desc && (
                    <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed font-medium">
                      {o.desc.split('|').map((part, j, arr) => (
                        <span key={j}>
                          {part}
                          {j < arr.length - 1 && <span className="text-accent">|</span>}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputsSection;
