const tags = [
  "ZAMERANIE STAVU",
  "VÝŠKOPIS A POLOHOPIS",
  "VADY A NEDOROBKY",
  "POREALIZAČNÉ ZAMERANIE",
  "FORÉNZE STAVY",
  "POSÚDENIE TERÉNU",
];

const UsagesSection = () => {
  return (
    <section className="bg-background py-14 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground leading-tight mb-8">
          Veľa možností využitia<span className="text-accent">.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
          {tags.map((tag) => (
            <div
              key={tag}
              className="usage-card relative bg-background border border-border rounded-lg px-5 py-4 cursor-default overflow-hidden"
            >
              <span className="text-[11px] lg:text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground">
                {tag}
              </span>
              <span className="usage-line absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsagesSection;
