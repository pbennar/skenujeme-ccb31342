import logoHeader from "@/assets/logo-header.png";

const Footer = () => {
  return (
    <footer className="bg-forest-dark py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Col 1 - Logo & about */}
          <div>
            <img src={logoHeader} alt="Skenujeme.sk" className="h-[28px] w-auto mb-3" />
            <p className="text-body text-primary-foreground/60 max-w-[200px]">
              Špecialisti na 3D laserové skenovanie. Našim cieľom je preniesť realitu do digitálneho priestoru tak, aby na nej bolo možné bezpečne navrhovať, plánovať a stavať.
            </p>
            <a href="#" className="text-micro text-accent font-medium mt-2 inline-block hover:underline">
              Pozrieť si firemnú prezentáciu
            </a>
          </div>

          {/* Col 2 - Address */}
          <div>
            <p className="text-tiny font-bold uppercase tracking-wider text-primary-foreground/80 mb-3">
              Navštívte nás
            </p>
            <div className="text-body text-primary-foreground/60 space-y-0.5">
              <p>AquaBT s.r.o</p>
              <p>Farebná 36</p>
              <p>821 05 Bratislava</p>
              <p>Slovensko</p>
            </div>
          </div>

          {/* Col 3 - Nav */}
          <div>
            <p className="text-tiny font-bold uppercase tracking-wider text-primary-foreground/80 mb-3">
              Navigácia
            </p>
            <nav className="flex flex-col gap-1.5">
              <a href="#skenovanie" className="text-body text-primary-foreground/60 hover:text-primary-foreground">3D skenovanie</a>
              <a href="#proces" className="text-body text-primary-foreground/60 hover:text-primary-foreground">Ako to funguje</a>
              <a href="#vystupy" className="text-body text-primary-foreground/60 hover:text-primary-foreground">Výstupy</a>
              <a href="#projekty" className="text-body text-primary-foreground/60 hover:text-primary-foreground">Projekty</a>
            </nav>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <p className="text-tiny font-bold uppercase tracking-wider text-primary-foreground/80 mb-3">
              Kontakt
            </p>
            <div className="text-body text-primary-foreground/60 space-y-1">
              <a href="tel:+421915714091" className="block hover:text-primary-foreground">+421 915 714 091</a>
              <a href="mailto:dopyt@aquabt.sk" className="block hover:text-primary-foreground">dopyt@aquabt.sk</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4">
          <p className="text-micro text-primary-foreground/40 text-center">
            Copyright © 2026. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
