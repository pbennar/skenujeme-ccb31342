import logoHeader from "@/assets/logo.svg";
import offerIcon from "@/assets/offer-icon.svg";
import flagSk from "@/assets/flag-sk.svg";
import flagUk from "@/assets/flag-uk.svg";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "3D SKENOVANIE", href: "#skenovanie" },
  { label: "AKO TO FUNGUJE", href: "#proces" },
  { label: "VÝSTUPY", href: "#vystupy" },
  { label: "PROJEKTY", href: "#projekty" },
  { label: "KONTAKT", href: "#kontakt" },
];

const languages = [
  { code: "sk" as const, label: "Slovenčina", flag: flagSk },
  { code: "en" as const, label: "English", flag: flagUk },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"sk" | "en">("sk");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const activeHref = "#skenovanie";

  const activeFlag = languages.find((l) => l.code === activeLang)!;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark">
      <div className="container mx-auto flex items-center justify-between h-[58px] px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logoHeader} alt="Skenujeme.sk" className="h-[36px] w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                item.href === activeHref
                  ? "text-accent"
                  : "text-primary-foreground hover:text-primary-foreground/50"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language switcher dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 group"
            >
              <span className="rounded-full overflow-hidden w-[22px] h-[22px]">
                <img src={activeFlag.flag} alt={activeFlag.label} className="w-full h-full object-cover" />
              </span>
              <ChevronDown className={`w-3 h-3 text-primary-foreground/60 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-dark border border-primary-foreground/10 rounded-md shadow-lg overflow-hidden min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setActiveLang(lang.code);
                      setLangOpen(false);
                    }}
                    className={`flex items-center gap-2.5 w-full px-3 py-2 text-[9px] font-bold uppercase tracking-wider transition-colors ${
                      activeLang === lang.code
                        ? "text-accent bg-primary-foreground/5"
                        : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
                    }`}
                  >
                    <span className="rounded-full overflow-hidden w-[18px] h-[18px] flex-shrink-0">
                      <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
                    </span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-[0.15em] px-5 py-2 rounded-[4px] hover:bg-primary/90 transition-colors"
          >
            CENOVÁ PONUKA
            <img src={offerIcon} alt="" className="w-[18px] h-[18px]" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
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
            <div className="flex flex-col gap-2 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setActiveLang(lang.code)}
                  className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${
                    activeLang === lang.code ? "text-accent" : "text-primary-foreground/70"
                  }`}
                >
                  <span className="rounded-full overflow-hidden w-[20px] h-[20px]">
                    <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
                  </span>
                  {lang.label}
                </button>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] w-fit"
              onClick={() => setMobileOpen(false)}
            >
              CENOVÁ PONUKA
              <img src={offerIcon} alt="" className="w-[18px] h-[18px]" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
