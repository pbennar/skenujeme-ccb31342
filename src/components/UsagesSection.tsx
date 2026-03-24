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
        <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold text-foreground mb-8">
          Veľa možností využitia.
        </h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-[640px] mx-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block border border-border rounded-md px-4 py-2 text-tiny lg:text-xs-nav font-medium uppercase tracking-widest text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsagesSection;
