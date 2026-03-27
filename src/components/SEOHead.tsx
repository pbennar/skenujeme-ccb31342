import { useLanguage } from "@/i18n/LanguageContext";

const SEOHead = () => {
  const { lang } = useLanguage();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://skenujeme.lovable.app/#organization",
    name: "Skenujeme.sk – AquaBT s.r.o.",
    alternateName: "Skenujeme.sk",
    url: "https://skenujeme.lovable.app",
    logo: "https://skenujeme.lovable.app/logo.svg",
    image: "https://skenujeme.lovable.app/og-image.png",
    description:
      lang === "sk"
        ? "Špecialisti na 3D laserové skenovanie budov, hál, ciest a pamiatok s presnosťou do 1 mm. Mračno bodov, BIM modely, 2D výkresy."
        : "Specialists in 3D laser scanning of buildings, halls, roads, and monuments with accuracy up to 1 mm. Point clouds, BIM models, 2D drawings.",
    telephone: "+421915714091",
    email: "dopyt@aquabt.sk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Farebná 36",
      addressLocality: "Bratislava",
      postalCode: "821 05",
      addressRegion: "Bratislavský kraj",
      addressCountry: "SK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1486,
      longitude: 17.1077,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Slovakia",
      },
      {
        "@type": "Country",
        name: "Czech Republic",
      },
      {
        "@type": "Country",
        name: "Austria",
      },
    ],
    serviceType: [
      "3D laser scanning",
      "3D laserové skenovanie",
      "BIM modeling",
      "Point cloud processing",
      "2D documentation",
      "Building surveying",
      "As-built documentation",
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: ["https://www.linkedin.com/company/aquabt-s-r-o/"],
    knowsAbout: [
      "3D laser scanning",
      "BIM",
      "Point cloud",
      "As-built documentation",
      "Construction surveying",
      "Digital twin",
      "FARO scanner",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name:
      lang === "sk"
        ? "3D laserové skenovanie objektov"
        : "3D laser scanning of objects",
    description:
      lang === "sk"
        ? "Profesionálne 3D laserové skenovanie budov, hál, ciest, pamiatok a priemyselných objektov s presnosťou do 1 mm."
        : "Professional 3D laser scanning of buildings, halls, roads, monuments, and industrial objects with accuracy up to 1 mm.",
    provider: {
      "@type": "ProfessionalService",
      name: "AquaBT s.r.o.",
      url: "https://skenujeme.lovable.app",
    },
    serviceType: "3D Laser Scanning",
    areaServed: {
      "@type": "Country",
      name: "Slovakia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "sk" ? "Služby 3D skenovania" : "3D Scanning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: lang === "sk" ? "Mračno bodov" : "Point Cloud",
            description:
              lang === "sk"
                ? "Farebné mračno bodov vo formátoch E57, LAS, XYZ, RCP, DWG"
                : "Coloured point cloud in E57, LAS, XYZ, RCP, DWG formats",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: lang === "sk" ? "2D výkresy" : "2D Drawings",
            description:
              lang === "sk"
                ? "Pôdorysy, rezy a pohľady skutkového stavu"
                : "Floor plans, sections, and views of the actual state",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3D / BIM model",
            description:
              lang === "sk"
                ? "Digitálne dvojča objektu pre BIM nástroje"
                : "Digital twin of the object for BIM tools",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              lang === "sk"
                ? "360° fotografie a vizualizácie"
                : "360° Photos and Visualisations",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          lang === "sk"
            ? "Aká je presnosť 3D laserového skenovania?"
            : "What is the accuracy of 3D laser scanning?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            lang === "sk"
              ? "Naše 3D laserové skenovanie dosahuje presnosť merania až do 1 mm. Skenery zaznamenávajú milióny bodov za sekundu a vytvárajú presné mračno bodov."
              : "Our 3D laser scanning achieves measurement accuracy of up to 1 mm. Scanners record millions of points per second, creating a precise point cloud.",
        },
      },
      {
        "@type": "Question",
        name:
          lang === "sk"
            ? "Čo všetko sa dá naskenovať?"
            : "What can be scanned?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            lang === "sk"
              ? "Skenujeme budovy, haly, výrobné linky, cesty, mosty, križovatky, pamiatky, domy, technologické celky, rozostavané stavby aj stavebné detaily."
              : "We scan buildings, halls, production lines, roads, bridges, intersections, monuments, houses, technological units, buildings under construction, and construction details.",
        },
      },
      {
        "@type": "Question",
        name:
          lang === "sk"
            ? "Aké výstupy získam zo skenovania?"
            : "What outputs do I get from scanning?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            lang === "sk"
              ? "Výstupmi sú mračno bodov (E57, LAS, XYZ, RCP, DWG), 2D výkresy (pôdorysy, rezy, pohľady), 3D a BIM modely a 360° fotografie a vizualizácie."
              : "Outputs include point clouds (E57, LAS, XYZ, RCP, DWG), 2D drawings (floor plans, sections, views), 3D and BIM models, and 360° photos and visualisations.",
        },
      },
      {
        "@type": "Question",
        name:
          lang === "sk"
            ? "Kde pôsobíte?"
            : "Where do you operate?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            lang === "sk"
              ? "Sídlime v Bratislave a poskytujeme služby 3D skenovania na celom Slovensku, v Česku aj v Rakúsku."
              : "We are based in Bratislava and provide 3D scanning services across Slovakia, Czech Republic, and Austria.",
        },
      },
      {
        "@type": "Question",
        name:
          lang === "sk"
            ? "Ako prebieha proces 3D skenovania?"
            : "How does the 3D scanning process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            lang === "sk"
              ? "Proces má 4 kroky: 1) Skenovanie objektu z viacerých stanovísk, 2) Spracovanie dát do farebného mračna bodov, 3) Tvorba výstupov (2D dokumentácia, 3D/BIM model), 4) Odovzdanie dát v požadovaných formátoch."
              : "The process has 4 steps: 1) Scanning the object from multiple positions, 2) Processing data into a coloured point cloud, 3) Creating outputs (2D documentation, 3D/BIM model), 4) Delivering data in required formats.",
        },
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name:
      lang === "sk"
        ? "3D laserové skenovanie objektov | Skenujeme.sk"
        : "3D Laser Scanning of Objects | Skenujeme.sk",
    description:
      lang === "sk"
        ? "Prenášame reálny svet do presného 3D digitálneho priestoru. 3D laserové skenovanie s presnosťou až do 1 mm."
        : "We bring the real world into precise 3D digital space. 3D laser scanning with accuracy up to 1 mm.",
    url: "https://skenujeme.lovable.app",
    inLanguage: lang === "sk" ? "sk-SK" : "en",
    isPartOf: {
      "@type": "WebSite",
      url: "https://skenujeme.lovable.app",
      name: "Skenujeme.sk",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );
};

export default SEOHead;
