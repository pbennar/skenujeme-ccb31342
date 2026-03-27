import logoHeader from "@/assets/logo.svg";
import arrowCircle from "@/assets/arrow-circle.svg";
import mobilIcon from "@/assets/mobil-icon.svg";
import emailIcon from "@/assets/email-icon.svg";
import linkedinIcon from "@/assets/linkedin-icon.svg";
import { handleAnchorClick } from "@/lib/smoothScroll";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const f = translations.footer;

  return (
    <footer id="kontakt" className="bg-dark py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img src={logoHeader} alt="Skenujeme.sk" className="h-[47px] w-auto mb-4" />
              </a>
              <p className="text-[13px] leading-[1.7] text-primary-foreground max-w-[280px] font-medium mb-3">
                <span className="font-bold text-accent">{t(f.aboutBold, lang)}</span>{" "}
                {t(f.about, lang)}
              </p>
              <a href="/Skenujeme-prezentacia.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent text-[13px] font-medium hover:underline">
                <img src={arrowCircle} alt="" className="w-[14px] h-[14px]" />
                {t(f.presentation, lang)}
              </a>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground mb-3">
                {t(f.navTitle, lang)}
              </p>
              <nav className="flex flex-col gap-2">
                <a href="#skenovanie" onClick={handleAnchorClick} className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/60 hover:text-primary-foreground font-medium">
                  <img src={arrowCircle} alt="" className="w-[14px] h-[14px]" />
                  {t(f.navItems.skenovanie, lang)}
                </a>
                <a href="#proces" onClick={handleAnchorClick} className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/60 hover:text-primary-foreground font-medium">
                  <img src={arrowCircle} alt="" className="w-[14px] h-[14px]" />
                  {t(f.navItems.proces, lang)}
                </a>
                <a href="#vystupy" onClick={handleAnchorClick} className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/60 hover:text-primary-foreground font-medium">
                  <img src={arrowCircle} alt="" className="w-[14px] h-[14px]" />
                  {t(f.navItems.vystupy, lang)}
                </a>
                <a href="#projekty" onClick={handleAnchorClick} className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/60 hover:text-primary-foreground font-medium">
                  <img src={arrowCircle} alt="" className="w-[14px] h-[14px]" />
                  {t(f.navItems.projekty, lang)}
                </a>
                <a href="/ochrana-osobnych-udajov" className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/60 hover:text-primary-foreground font-medium">
                  <img src={arrowCircle} alt="" className="w-[14px] h-[14px]" />
                  {t(f.navItems.privacy, lang)}
                </a>
              </nav>

              <div className="flex items-center gap-2 mt-5">
                <span className="text-[11px] text-primary-foreground font-bold uppercase tracking-[0.1em]">
                  {t(f.findUs, lang)}
                </span>
                <a href="https://www.linkedin.com/company/aquabt-s-r-o/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-[17px] h-[19px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-forest rounded-md p-5 min-w-[220px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground mb-3">
              {t(f.visitTitle, lang)}
            </p>
            <div className="text-[13px] text-primary-foreground/70 space-y-0.5 font-medium mb-5">
              <p>AquaBT s.r.o</p>
              <p>Farebná 36</p>
              <p>821 05 Bratislava</p>
              <p>{lang === "sk" ? "Slovensko" : "Slovakia"}</p>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground mb-3">
              {t(f.contactTitle, lang)}
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+421915714091" className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/70 hover:text-primary-foreground font-medium">
                <img src={mobilIcon} alt="" className="w-[16px] h-[16px]" />
                +421 915 714 091
              </a>
              <a href="mailto:dopyt@aquabt.sk" className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/70 hover:text-primary-foreground font-medium">
                <img src={emailIcon} alt="" className="w-[15px] h-[15px]" />
                dopyt@aquabt.sk
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <p className="text-[11px] text-primary-foreground/30 font-medium">
            {t(f.copyright, lang)}
          </p>
          <span className="text-[11px] text-primary-foreground/30 font-medium hidden sm:inline">|</span>
          <p className="text-[11px] text-primary-foreground/30 font-medium">
            {t(f.designedBy, lang)}{" "}
            <a href="https://pekneprezky.sk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              PeknéPrezky
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
