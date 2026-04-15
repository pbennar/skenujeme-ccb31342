export type Lang = "sk" | "en";

export const translations = {
  // Header
  nav: {
    skenovanie: { sk: "3D SKENOVANIE", en: "3D SCANNING" },
    proces: { sk: "AKO TO FUNGUJE", en: "HOW IT WORKS" },
    vystupy: { sk: "VÝSTUPY", en: "OUTPUTS" },
    projekty: { sk: "PROJEKTY", en: "PROJECTS" },
    kontakt: { sk: "KONTAKT", en: "CONTACT" },
    cta: { sk: "CENOVÁ PONUKA", en: "GET A QUOTE" },
  },

  // Hero
  hero: {
    subtitle: { sk: "VERNÁ REALITA V 3D BEZ DOHADOV", en: "TRUE REALITY IN 3D WITHOUT GUESSWORK" },
    heading1: { sk: "Prenášame svet", en: "We bring the world" },
    heading2: { sk: "do ", en: "into " },
    heading3: { sk: "presného 3D", en: "precise 3D" },
    heading4: { sk: "digitálneho priestoru", en: "digital space" },
    subtext: {
      sk: "Zachytíme realitu presne, kompletne a v jednom kroku – ešte skôr, než vzniknú chyby, kolízie a dodatočné náklady.",
      en: "We capture reality precisely, completely, and in one step – before errors, collisions, and additional costs arise.",
    },
    ctaMain: { sk: "POZRIEŤ PROJEKTY", en: "VIEW PROJECTS" },
    ctaSub: { sk: "kde sme využili 3D skenovanie", en: "where we used 3D scanning" },
  },

  // Intro
  intro: {
    label: { sk: "AKÝ JE PROBLÉM?", en: "WHAT IS THE PROBLEM?" },
    heading1: { sk: "Vidieť realitu", en: "See reality" },
    heading2: { sk: "skôr než sa zmení", en: "before it becomes" },
    heading3: { sk: "na problém.", en: "a problem." },
    text: {
      sk: "Pri stavebných projektoch, rekonštrukciách alebo modernizácii výrobných technológií je",
      en: "In construction projects, renovations, or modernisation of production technologies,",
    },
    textBold: {
      sk: "presnosť vstupných dát kľúčová.",
      en: "accuracy of input data is crucial.",
    },
    solutionTitle: { sk: "Riešenie", en: "Solution" },
    solutionText: {
      sk: "3D laserové skenovanie",
      en: "3D laser scanning",
    },
    solutionBold: {
      sk: "zachytí skutočný stav objektu",
      en: "captures the actual state of an object",
    },
    solutionEnd: {
      sk: "s presnosťou až do 1 mm a vytvorí kompletný digitálny obraz reality.",
      en: "with accuracy up to 1 mm and creates a complete digital image of reality.",
    },
    ctaMain: { sk: "AKO TO FUNGUJE", en: "HOW IT WORKS" },
    ctaSub: { sk: "3D skenovanie v praxi", en: "3D scanning in practice" },
  },

  // Process
  process: {
    label: { sk: "3D SKENOVANIE", en: "3D SCANNING" },
    heading: { sk: "Proces 3D skenovania", en: "3D scanning process" },
    subtext: {
      sk: "Výsledkom je kompletný digitálny obraz reality – nie výsek alebo odhad, ale presný model existujúceho stavu.",
      en: "The result is a complete digital image of reality – not a fragment or estimate, but a precise model of the existing state.",
    },
    steps: [
      {
        title: { sk: "SKENOVANIE OBJEKTU", en: "OBJECT SCANNING" },
        items: {
          sk: [
            "Objekt sa nasníma z viacerých stanovísk pomocou 3D laserového skenera.",
            "Presnosť merania dosahuje až 1 mm.",
          ],
          en: [
            "The object is scanned from multiple positions using a 3D laser scanner.",
            "Measurement accuracy reaches up to 1 mm.",
          ],
        },
      },
      {
        title: { sk: "SPRACOVANIE DÁT", en: "DATA PROCESSING" },
        items: {
          sk: [
            "Z nasnímaných dát vzniká farebné mračno bodov obsahujúce milióny bodov.",
            "Dáta sa následne spracujú do potrebného formátu.",
          ],
          en: [
            "A coloured point cloud containing millions of points is created from the scanned data.",
            "The data is then processed into the required format.",
          ],
        },
      },
      {
        title: { sk: "TVORBA VÝSTUPOV", en: "OUTPUT CREATION" },
        items: {
          sk: ["Zo skenovania vznikne:"],
          en: ["The scanning produces:"],
        },
        bullets: {
          sk: [
            "2D dokumentácia (pôdorysy, rezy, pohľady)",
            "3D model",
            "BIM model",
          ],
          en: [
            "2D documentation (floor plans, sections, views)",
            "3D model",
            "BIM model",
          ],
        },
      },
      {
        title: { sk: "ODOVZDANIE DÁT", en: "DATA DELIVERY" },
        items: {
          sk: [
            "Formáty dát vhodné pre projektantov, architektov a stavebné firmy.",
            "Výsledkom je jeden presný zdroj dát pre všetkých.",
          ],
          en: [
            "Data formats suitable for designers, architects, and construction companies.",
            "The result is a single accurate data source for everyone.",
          ],
        },
      },
    ],
  },

  // Scan Types
  scanTypes: {
    heading: { sk: "Čo dokážeme naskenovať", en: "What we can scan" },
    subtext: {
      sk: "3D laserové skenovanie využívame pri rôznych typoch objektov a projektov.",
      en: "We use 3D laser scanning for various types of objects and projects.",
    },
    cards: [
      { sk: ["BUDOVY", "HALY", "VÝROBNÉ LINKY"], en: ["BUILDINGS", "HALLS", "PRODUCTION LINES"] },
      { sk: ["CESTY", "MOSTY", "KRIŽOVATKY", "SPEVNENÉ PLOCHY"], en: ["ROADS", "BRIDGES", "INTERSECTIONS", "PAVED AREAS"] },
      { sk: ["PAMIATKY", "DOMY", "TECHNOLOGICKÉ CELKY"], en: ["MONUMENTS", "HOUSES", "TECHNOLOGICAL UNITS"] },
      { sk: ["ROZOSTAVANÉ STAVBY", "STAVEBNÉ DETAILY"], en: ["BUILDINGS UNDER CONSTRUCTION", "CONSTRUCTION DETAILS"] },
    ],
    ctaMain: { sk: "POZRIEŤ PROJEKTY", en: "VIEW PROJECTS" },
    ctaSub: { sk: "kde sme využili 3D skenovanie", en: "where we used 3D scanning" },
  },

  // Usages
  usages: {
    heading: { sk: "Veľa možností využitia", en: "Many possible applications" },
    tags: {
      sk: ["ZAMERANIE STAVU", "VÝŠKOPIS A POLOHOPIS", "VADY A NEDOROBKY", "POREALIZAČNÉ ZAMERANIE", "FORÉNZE STAVY", "POSÚDENIE TERÉNU"],
      en: ["STATE SURVEY", "TOPOGRAPHY & POSITIONING", "DEFECTS & UNFINISHED WORK", "POST-CONSTRUCTION SURVEY", "FORENSIC CONDITIONS", "TERRAIN ASSESSMENT"],
    },
  },

  // Benefits
  benefits: {
    label: { sk: "HLAVNÉ VÝHODY", en: "KEY BENEFITS" },
    heading1: { sk: "Moderná technológia,", en: "Modern technology" },
    heading2: { sk: "ktorá dokáže ", en: "that can " },
    heading3: { sk: "presne zachytiť existujúci stav.", en: "precisely capture the existing state." },
    text: {
      sk: "Skenery zaznamenávajú milióny bodov za sekundu a vytvárajú tzv. mračno bodov, ktoré predstavuje",
      en: "Scanners record millions of points per second and create a so-called point cloud, which represents",
    },
    textBold: {
      sk: "presnú digitálnu repliku reality.",
      en: "a precise digital replica of reality.",
    },
    items: [
      { title: { sk: "Presnosť", en: "Accuracy" }, desc: { sk: "až do 1 mm bez odhadov", en: "up to 1 mm without estimates" } },
      { title: { sk: "Rýchlosť", en: "Speed" }, desc: { sk: "zameranie v jednom kroku", en: "survey in one step" } },
      { title: { sk: "Efektivita", en: "Efficiency" }, desc: { sk: "menej chýb a menej prestojov", en: "fewer errors and less downtime" } },
      { title: { sk: "Komplexnosť dát", en: "Data completeness" }, desc: { sk: "všetko v jednom modeli", en: "everything in one model" } },
      { title: { sk: "Spolupráca tímov", en: "Team collaboration" }, desc: { sk: "rovnaké dáta pre všetky tímy", en: "same data for all teams" } },
      { title: { sk: "Špičkové prístroje", en: "Top-class equipment" }, desc: { sk: "prístroje s najnovšími 3D lasermi", en: "devices with the latest 3D lasers" } },
    ],
  },

  // Outputs
  outputs: {
    label: { sk: "VÝSTUPY A DÁTA", en: "OUTPUTS & DATA" },
    heading1: { sk: "Dáta použiteľné", en: "Data usable" },
    heading2: { sk: "v BIM ", en: "in BIM " },
    heading3: { sk: "nástrojoch.", en: "tools." },
    text: {
      sk: "Digitálny model reality obsahujúci milióny presných meraných bodov – možnosť prehliadať v jednoduchom prehliadači –",
      en: "A digital model of reality containing millions of precisely measured points – viewable in a simple browser –",
    },
    textBold: {
      sk: "bez nutnosti CAD znalostí.",
      en: "no CAD knowledge required.",
    },
    items: [
      { title: { sk: "360° fotografie a vizualizácie", en: "360° photos and visualisations" }, desc: { sk: "presne naskenovaného objektu", en: "of the precisely scanned object" } },
      { title: { sk: "Mračno bodov", en: "Point cloud" }, desc: { sk: "E57 | LAS | XYZ | RCP | DWG", en: "E57 | LAS | XYZ | RCP | DWG" } },
      { title: { sk: "2D výkresy", en: "2D drawings" }, desc: { sk: "skutkového stavu objektu", en: "of the actual state of the object" } },
      { title: { sk: "3D | BIM model", en: "3D | BIM model" }, desc: { sk: "digitálne dvojča objektu", en: "digital twin of the object" } },
    ],
  },

  // Projects
  projects: {
    label: { sk: "REFERENČNÉ PROJEKTY", en: "REFERENCE PROJECTS" },
    heading: { sk: "Pozrite si naše projekty", en: "View our projects" },
    subtext: {
      sk: "Pomohli sme architektom, projektantom a stavebným firmám pracovať s presnými dátami a eliminovať chyby pri stavbách.",
      en: "We helped architects, designers, and construction companies work with accurate data and eliminate errors in construction.",
    },
    items: [
      {
        title: { sk: "ŠPORTOVÁ HALA MALACKY", en: "SPORTS HALL MALACKY" },
        desc: { sk: "3D skenovanie objektu pre kontrolu realizácie a analýzu plôch", en: "3D scanning of the facility for construction control and surface analysis" },
      },
      {
        title: { sk: "METRANS PARKOVISKO", en: "METRANS PARKING LOT" },
        desc: { sk: "Skenovanie na kontrolu spádovanej plochy 0.5% na 4.7 Ha", en: "Scanning to verify 0.5% slope on 4.7 Ha area" },
      },
      {
        title: { sk: "BUDOVA FAURECIA", en: "FAURECIA BUILDING" },
        desc: { sk: "Zameranie reality 2D pôdorysov a rezov", en: "Reality survey of 2D floor plans and sections" },
      },
    ],
  },

  // Contact
  contact: {
    label: { sk: "OZVITE SA NÁM", en: "GET IN TOUCH" },
    heading1: { sk: "Máte projekt, pri ktorom", en: "Do you have a project that" },
    heading2: { sk: "potrebujete ", en: "requires " },
    heading3: { sk: "presné dáta?", en: "precise data?" },
    subtext: {
      sk: "Radi sa s vami stretneme na konzultácii a pripravíme nezáväznú cenovú ponuku.",
      en: "We'd be happy to meet for a consultation and prepare a non-binding quote.",
    },
    subtextBold: { sk: "Stačí sa nám len ozvať.", en: "Just get in touch." },
    formTitle: { sk: "Potrebujem 3D skenovanie", en: "I need 3D scanning" },
    formSubtitle: { sk: "Čoskoro sa Vám ozveme", en: "We'll get back to you soon" },
    name: { sk: "Meno *", en: "Name *" },
    company: { sk: "Firma *", en: "Company *" },
    phone: { sk: "Mobil *", en: "Phone *" },
    email: { sk: "E-mail *", en: "Email *" },
    message: { sk: "Popíšte čo potrebujete naskenovať *", en: "Describe what you need scanned *" },
    submit: { sk: "ODOSLAŤ SPRÁVU", en: "SEND MESSAGE" },
    submitSub: { sk: "radi vám pripravíme ponuku", en: "we'll gladly prepare a quote" },
    sending: { sk: "ODOSIELAM...", en: "SENDING..." },
    successTitle: { sk: "Ďakujeme za správu.", en: "Thank you for your message." },
    successText: { sk: "Čoskoro sa vám ozveme.", en: "We'll get back to you soon." },
    error: { sk: "Nastala chyba pri odosielaní. Skúste to prosím znova.", en: "An error occurred while sending. Please try again." },
  },

  // Footer
  footer: {
    about: {
      sk: "Prenášame realitu do digitálneho priestoru tak, aby na nej bolo možné bezpečne navrhovať, plánovať a stavať.",
      en: "We transfer reality into digital space so it can be safely designed, planned, and built upon.",
    },
    aboutBold: {
      sk: "Špecialisti na 3D laserové skenovanie.",
      en: "Specialists in 3D laser scanning.",
    },
    presentation: { sk: "Pozrieť si firemnú prezentáciu", en: "View company presentation" },
    navTitle: { sk: "Navigácia", en: "Navigation" },
    navItems: {
      skenovanie: { sk: "3D skenovanie", en: "3D scanning" },
      proces: { sk: "Ako to funguje", en: "How it works" },
      vystupy: { sk: "Výstupy", en: "Outputs" },
      projekty: { sk: "Projekty", en: "Projects" },
      privacy: { sk: "Ochrana osobných údajov", en: "Privacy policy" },
    },
    findUs: { sk: "Nájdete nás aj na", en: "Find us on" },
    visitTitle: { sk: "Navštívte nás", en: "Visit us" },
    contactTitle: { sk: "Kontakt", en: "Contact" },
    copyright: { sk: "Copyright © 2026. All right reserved", en: "Copyright © 2026. All rights reserved" },
    designedBy: { sk: "Túto stránku nám nadizajnovali", en: "This website was designed by" },
  },

  // Cookies
  cookies: {
    title: { sk: "🍪 Používame cookies", en: "🍪 We use cookies" },
    text: {
      sk: "Táto stránka používa cookies na zlepšenie vášho zážitku z prehliadania a analýzu návštevnosti.",
      en: "This site uses cookies to improve your browsing experience and analyse traffic.",
    },
    decline: { sk: "Odmietnuť", en: "Decline" },
    accept: { sk: "Súhlasím", en: "Accept" },
  },
} as const;

export function t(key: Record<Lang, string>, lang: Lang): string {
  return key[lang];
}
