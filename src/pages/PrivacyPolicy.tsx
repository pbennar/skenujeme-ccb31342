import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[58px] bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20 max-w-[800px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[40px] h-[1px] bg-primary" />
            <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
              PRÁVNE INFORMÁCIE
            </p>
          </div>

          <h1 className="text-[28px] lg:text-[36px] font-extrabold leading-[1.15] mb-8">
            <span className="text-foreground">Ochrana osobných </span>
            <span className="text-accent">údajov</span>
          </h1>

          <div className="prose-custom space-y-8">
            <Section title="1. Prevádzkovateľ">
              <p>
                Prevádzkovateľom osobných údajov je spoločnosť <strong>AquaBT s.r.o.</strong>, so sídlom Farebná 36, 821 05 Bratislava, Slovenská republika (ďalej len „prevádzkovateľ").
              </p>
              <p>Kontaktný e-mail: <a href="mailto:dopyt@aquabt.sk" className="text-primary hover:underline">dopyt@aquabt.sk</a></p>
            </Section>

            <Section title="2. Právny základ spracúvania">
              <p>
                Osobné údaje spracúvame v súlade so zákonom č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov (ďalej len „zákon o ochrane osobných údajov") a Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR).
              </p>
            </Section>

            <Section title="3. Účel spracúvania osobných údajov">
              <p>Osobné údaje spracúvame na tieto účely:</p>
              <ul>
                <li>Spracovanie dopytov a žiadostí o cenovú ponuku zaslaných prostredníctvom kontaktného formulára</li>
                <li>Komunikácia s potenciálnymi a existujúcimi klientmi</li>
                <li>Plnenie zmluvných povinností</li>
                <li>Analytické účely na zlepšenie fungovania webovej stránky (cookies)</li>
              </ul>
            </Section>

            <Section title="4. Rozsah spracúvaných údajov">
              <p>Prostredníctvom kontaktného formulára zbierame:</p>
              <ul>
                <li>Meno a priezvisko</li>
                <li>Názov spoločnosti</li>
                <li>Telefónne číslo</li>
                <li>E-mailová adresa</li>
                <li>Obsah správy (popis požiadavky)</li>
              </ul>
            </Section>

            <Section title="5. Doba uchovávania údajov">
              <p>
                Osobné údaje uchovávame po dobu nevyhnutnú na splnenie účelu spracúvania, maximálne však po dobu <strong>3 rokov</strong> od posledného kontaktu, pokiaľ právne predpisy nevyžadujú dlhšiu dobu uchovávania.
              </p>
            </Section>

            <Section title="6. Príjemcovia osobných údajov">
              <p>
                Osobné údaje neposkytujeme tretím stranám s výnimkou prípadov, keď je to nevyhnutné na splnenie zákonných povinností alebo na plnenie zmluvy. Údaje nie sú prenášané do tretích krajín mimo EÚ/EHP.
              </p>
            </Section>

            <Section title="7. Cookies">
              <p>
                Naša webová stránka používa cookies na analytické účely a zlepšenie používateľského zážitku. Pri prvej návšteve stránky máte možnosť cookies prijať alebo odmietnuť.
              </p>
              <p>Typy cookies, ktoré používame:</p>
              <ul>
                <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základné fungovanie stránky</li>
                <li><strong>Analytické cookies</strong> – pomáhajú nám porozumieť návštevnosti stránky</li>
              </ul>
            </Section>

            <Section title="8. Práva dotknutej osoby">
              <p>Ako dotknutá osoba máte právo:</p>
              <ul>
                <li>Na prístup k osobným údajom</li>
                <li>Na opravu nesprávnych osobných údajov</li>
                <li>Na vymazanie osobných údajov (právo na zabudnutie)</li>
                <li>Na obmedzenie spracúvania</li>
                <li>Na prenosnosť údajov</li>
                <li>Namietať proti spracúvaniu</li>
                <li>Podať sťažnosť na Úrad na ochranu osobných údajov SR</li>
              </ul>
            </Section>

            <Section title="9. Kontakt na Úrad na ochranu osobných údajov SR">
              <p>
                Úrad na ochranu osobných údajov Slovenskej republiky<br />
                Hraničná 12, 820 07 Bratislava 27<br />
                Tel.: +421 2 3231 3214<br />
                E-mail: <a href="mailto:statny.dozor@pdp.gov.sk" className="text-primary hover:underline">statny.dozor@pdp.gov.sk</a><br />
                Web: <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dataprotection.gov.sk</a>
              </p>
            </Section>

            <Section title="10. Záverečné ustanovenia">
              <p>
                Tieto zásady ochrany osobných údajov sú platné a účinné od 1. 1. 2026. Prevádzkovateľ si vyhradzuje právo tieto zásady kedykoľvek aktualizovať. Aktuálna verzia bude vždy zverejnená na tejto stránke.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-[18px] lg:text-[20px] font-extrabold text-foreground mb-3">{title}</h2>
    <div className="text-[13px] lg:text-[15px] text-gray-text leading-relaxed font-medium space-y-3 [&_ul]:list-none [&_ul]:space-y-1.5 [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2 [&_ul_li]:before:content-[''] [&_ul_li]:before:w-[7px] [&_ul_li]:before:h-[7px] [&_ul_li]:before:rounded-full [&_ul_li]:before:bg-accent [&_ul_li]:before:flex-shrink-0 [&_ul_li]:before:mt-[6px] [&_strong]:text-foreground">
      {children}
    </div>
  </div>
);

export default PrivacyPolicy;
