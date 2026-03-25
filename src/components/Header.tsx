import logoHeader from "@/assets/logo.svg";
import offerIcon from "@/assets/offer-icon.svg";
import flagSk from "@/assets/flag-sk.svg";
import flagUk from "@/assets/flag-uk.svg";
import { Menu, X } from "lucide-react";
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
  const [activeLang, setActiveLang] = useState<"sk" | "en">("sk");
  const activeHref = "#skenovanie";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark">
      <div className="container mx-auto flex items-center justify-between h-[44px] px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logoHeader} alt="Skenujeme.sk" className="h-[22px] w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs-nav font-medium uppercase tracking-widest transition-colors ${
                item.href === activeHref
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveLang("en")}
              className={`rounded-full overflow-hidden w-[18px] h-[18px] border ${
                activeLang === "en" ? "border-accent" : "border-transparent"
              } transition-colors`}
            >
              <img src={flagUk} alt="English" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => setActiveLang("sk")}
              className={`rounded-full overflow-hidden w-[18px] h-[18px] border ${
                activeLang === "sk" ? "border-accent" : "border-transparent"
              } transition-colors`}
            >
              <img src={flagSk} alt="Slovenčina" className="w-full h-full object-cover" />
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs-nav font-bold uppercase tracking-wider px-4 py-1.5 rounded-[4px] hover:bg-primary/90 transition-colors"
          >
            <img src={offerIcon} alt="" className="w-[14px] h-[14px]" />
            CENOVÁ PONUKA
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
        <div className="lg:hidden bg-dark border-t border-primary-foreground/10 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-body font-medium uppercase tracking-widest ${
                  item.href === activeHref
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveLang("en")}
                className={`rounded-full overflow-hidden w-[20px] h-[20px] border ${
                  activeLang === "en" ? "border-accent" : "border-transparent"
                }`}
              >
                <img src={flagUk} alt="English" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveLang("sk")}
                className={`rounded-full overflow-hidden w-[20px] h-[20px] border ${
                  activeLang === "sk" ? "border-accent" : "border-transparent"
                }`}
              >
                <img src={flagSk} alt="Slovenčina" className="w-full h-full object-cover" />
              </button>
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-body font-bold uppercase tracking-wider px-4 py-2 rounded-[4px] w-fit"
              onClick={() => setMobileOpen(false)}
            >
              <img src={offerIcon} alt="" className="w-[14px] h-[14px]" />
              CENOVÁ PONUKA
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
