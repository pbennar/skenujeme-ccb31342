import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6 animate-slide-up">
      <div className="container mx-auto max-w-[720px] bg-dark border border-primary-foreground/10 rounded-lg shadow-[0_-4px_30px_rgba(0,0,0,0.3)] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-[13px] lg:text-[14px] font-bold text-primary-foreground mb-1">
            🍪 Používame cookies
          </p>
          <p className="text-[11px] lg:text-[12px] text-primary-foreground/60 leading-relaxed font-medium">
            Táto stránka používa cookies na zlepšenie vášho zážitku z prehliadania a analýzu návštevnosti.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground/50 hover:text-primary-foreground transition-colors px-4 py-2.5"
          >
            Odmietnuť
          </button>
          <button
            onClick={accept}
            className="text-[11px] font-bold uppercase tracking-[0.15em] bg-accent text-accent-foreground px-5 py-2.5 rounded-md hover:bg-yellow-hover transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
          >
            Súhlasím
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
