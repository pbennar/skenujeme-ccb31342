const outputs = [
  {
    title: "360° fotografie a vizualizácie",
    desc: "",
  },
  {
    title: "Mračno bodov",
    desc: "E57 | LAS | XYZ | RCP | DWG",
  },
  {
    title: "2D výkresy",
    desc: "skutkového stavu objektu",
  },
  {
    title: "3D | BIM model",
    desc: "digitálne dvojča objektu",
  },
];

const OutputsSection = () => {
  return (
    <section id="vystupy" className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-micro uppercase tracking-[0.25em] text-gray-text font-medium mb-2">
          VÝSTUPY A DÁTA
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground leading-tight mb-4">
              Dáta použiteľné<br />v BIM nástrojoch.
            </h2>
            <p className="text-body-lg text-gray-text max-w-[380px] mb-6">
              Digitálny model reality obsahujúci milióny presných meraných bodov – možnosť prehliadať v jednoduchom prehliadači – bez nutnosti CAD znalostí.
            </p>
            <div className="flex items-center gap-3">
              <span className="bg-gray-light rounded px-3 py-1.5 text-micro font-bold uppercase tracking-wider text-foreground">FLAOKE</span>
              <span className="bg-gray-light rounded px-3 py-1.5 text-micro font-bold uppercase tracking-wider text-foreground">BIM 360</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            {outputs.map((o, i) => (
              <div key={i} className="bg-gray-light rounded-lg p-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-micro font-bold text-primary-foreground">{i + 1}</span>
                </div>
                <div>
                  <p className="text-box-title font-bold text-foreground">{o.title}</p>
                  {o.desc && <p className="text-body text-gray-text">{o.desc}</p>}
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
