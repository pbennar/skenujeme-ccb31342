import faroScanner from "@/assets/faro-scanner.svg";
import checkIcon from "@/assets/check-icon.svg";

const steps = [
  {
    num: "1",
    title: "SKENOVANIE OBJEKTU",
    items: [
      "Objekt sa nasníma z viacerých stanovísk pomocou 3D laserového skenera.",
      "Presnosť merania dosahuje až 1 mm.",
    ],
  },
  {
    num: "2",
    title: "SPRACOVANIE DÁT",
    items: [
      "Z nasnímaných dát vzniká farebné mračno bodov obsahujúce milióny bodov.",
      "Dáta sa následne spracujú do potrebného formátu.",
    ],
  },
  {
    num: "3",
    title: "TVORBA VÝSTUPOV",
    items: [
      "Zo skenovania vznikne:",
      "2D dokumentácia (pôdorysy, rezy, pohľady)",
      "3D model",
      "BIM model",
    ],
  },
  {
    num: "4",
    title: "ODOVZDANIE DÁT",
    items: [
      "Formáty dát vhodné pre projektantov, architektov a stavebné firmy.",
      "Výsledkom je jeden presný zdroj dát pre všetkých.",
    ],
  },
];

const ProcessSection = () => {
  return (
    <section id="proces" className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Label with horizontal line - same style as IntroSection */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-[40px] h-[0.5px] bg-primary" />
          <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
            3D SKENOVANIE
          </p>
        </div>

        {/* Heading - same size as "Vidieť realitu..." */}
        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-5">
          <span className="text-foreground">Proces 3D skenovania</span>
          <span className="text-accent">.</span>
        </h2>

        {/* Subtitle - same style as "Pri stavebných projektoch..." */}
        <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed max-w-[560px] mb-12 font-medium">
          Výsledkom je kompletný digitálny obraz reality – nie výsek alebo odhad, ale presný model existujúceho stavu.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left steps (1 & 3) */}
          <div className="flex flex-col gap-5">
            <StepCard {...steps[0]} />
            <StepCard {...steps[2]} />
          </div>

          {/* Center image - Faro scanner */}
          <div className="flex justify-center items-center">
            <img
              src={faroScanner}
              alt="3D laserový skener FARO"
              loading="lazy"
              className="w-full max-w-[340px] h-auto object-contain"
            />
          </div>

          {/* Right steps (2 & 4) */}
          <div className="flex flex-col gap-5">
            <StepCard {...steps[1]} />
            <StepCard {...steps[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ num, title, items }: { num: string; title: string; items: string[] }) => (
  <div className="bg-background rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-border/50 p-5 transition-transform duration-300 ease-out hover:scale-105 cursor-default">
    {/* Green number badge */}
    <div className="flex items-center gap-3 mb-4">
      <span className="flex-shrink-0 w-8 h-8 rounded-md bg-primary text-primary-foreground text-[13px] font-extrabold flex items-center justify-center">
        {num}.
      </span>
      <p className="text-[13px] font-extrabold text-foreground uppercase tracking-wide">{title}</p>
    </div>

    {/* Items with check icons */}
    <div className="flex flex-col gap-2 pl-1">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <img src={checkIcon} alt="" className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed font-medium">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ProcessSection;
