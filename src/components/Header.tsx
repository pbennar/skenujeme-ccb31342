import logoHeader from "@/assets/logo-header.png";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "3D SKENOVANIE", href: "#skenovanie" },
  { label: "AKO TO FUNGUJE", href: "#proces" },
  { label: "VÝSTUPY", href: "#vystupy" },
  { label: "PROJEKTY", href: "#projekty" },
  { label: "KONTAKT", href: "#kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-dark">
      <div className="container mx-auto flex items-center justify-between h-[44px] px-4 lg:px-8">
        <a href="#" className="flex-shrink-0">
          <img src={logoHeader} alt="Skenujeme.sk" className="h-[28px] w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs-nav font-medium uppercase tracking-widest text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs-nav font-bold uppercase tracking-wider px-4 py-2 rounded-md hover:bg-yellow-hover transition-colors"
          >
            CENOVÁ PONUKA
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest-dark border-t border-primary-foreground/10 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-body font-medium uppercase tracking-widest text-primary-foreground/80 hover:text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-body font-bold uppercase tracking-wider px-4 py-2 rounded-md w-fit"
              onClick={() => setMobileOpen(false)}
            >
              CENOVÁ PONUKA
              <ArrowRight className="w-3 h-3" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
