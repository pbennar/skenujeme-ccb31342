import scannerDevice from "@/assets/scanner-device.jpg";

const steps = [
  {
    num: "1",
    title: "SKENOVANIE OBJEKTU",
    lines: [
      "Objekt sa nasníma z viacerých stanovísk pomocou 3D laserového skenera.",
      "Presnosť merania dosahuje až 1 mm.",
    ],
  },
  {
    num: "2",
    title: "SPRACOVANIE DÁT",
    lines: [
      "Z nasnímaných dát vzniká farebné mračno bodov obsahujúce milióny bodov.",
      "Dáta sa následne spracujú do potrebného formátu.",
    ],
  },
  {
    num: "3",
    title: "TVORBA VÝSTUPOV",
    lines: [
      "Zo skenovania vznikne:",
      "2D dokumentácia (pôdorysy, rezy, pohľady)",
      "3D model",
      "BIM model",
    ],
  },
  {
    num: "4",
    title: "ODOVZDANIE DÁT",
    lines: [
      "Formáty dát vhodné pre projektantov, architektov a stavebné firmy.",
      "Výsledkom je jeden presný zdroj dát pre všetkých.",
    ],
  },
];

const ProcessSection = () => {
  return (
    <section id="proces" className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-micro uppercase tracking-[0.25em] text-gray-text font-medium mb-2 text-center">
          3D SKENOVANIE
        </p>
        <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground text-center mb-3">
          Proces 3D skenovania.
        </h2>
        <p className="text-body-lg text-gray-text text-center max-w-[480px] mx-auto mb-12">
          Výsledkom je kompletný digitálny obraz reality – nie výsek alebo odhad, ale presný model existujúceho stavu.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left steps */}
          <div className="flex flex-col gap-5">
            {steps.slice(0, 2).map((step) => (
              <StepCard key={step.num} {...step} />
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center items-center">
            <img
              src={scannerDevice}
              alt="3D laserový skener"
              loading="lazy"
              className="w-full max-w-[260px] h-auto object-contain"
            />
          </div>

          {/* Right steps */}
          <div className="flex flex-col gap-5">
            {steps.slice(2, 4).map((step) => (
              <StepCard key={step.num} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ num, title, lines }: { num: string; title: string; lines: string[] }) => (
  <div className="bg-background rounded-lg shadow-sm border border-border p-5">
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-micro font-bold flex items-center justify-center">
        {num}
      </span>
      <div>
        <p className="text-box-title font-bold text-foreground uppercase tracking-wide mb-2">{title}</p>
        {lines.map((line, i) => (
          <p key={i} className="text-body text-gray-text leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default ProcessSection;
