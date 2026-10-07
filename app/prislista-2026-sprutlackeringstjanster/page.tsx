import { Metadata } from "next";
import { inter, robotoBold } from "../layout";
import Script from "next/script";
import InfoForm from "../components/InfoForm";

export const metadata: Metadata = {
  title:
    "Prislista – Sprutmålning & Lackering | Köksluckor, Dörrar & Möbler | Lackverket",
  description:
    "Prislista för sprutmålning och lackering av köksluckor, innerdörrar, ytterdörrar och möbler. Tydliga priser, professionell industrilack och ROT-avdrag. Skicka bild för offert – Lackverket i Sverige.",
  keywords: [
    "prislista sprutmålning",
    "pris sprutmålning köksluckor",
    "lackera köksluckor pris",
    "måla köksluckor pris",
    "sprutmålning dörrar pris",
    "lackera innerdörr pris",
    "sprutmåla ytterdörr pris",
    "lackera möbler pris",
    "möbellackering pris",
    "ROT-avdrag målning",
    "Lackverket",
  ],
  authors: [{ name: "Lackverket" }],
  creator: "Lackverket",
  publisher: "Lackverket",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical:
      "https://www.lackverket.se//prislista-2026-sprutlackeringstjanster",
  },
  openGraph: {
    title: "Prislista – Sprutmålning & Lackering | Lackverket",
    description:
      "Se vår prislista för sprutmålning av köksluckor, dörrar och möbler. Transparent prissättning, industrifärg och ROT-avdrag. Skicka bild för offert.",
    url: "https://www.lackverket.se/prislista",
    siteName: "Lackverket",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Prislista – Sprutmålning & Lackering | Lackverket",
    description:
      "Tydlig prislista för köksluckor, dörrar och möbler. Professionell sprutmålning med ROT-avdrag.",
  },
  category: "Prislista & Tjänster",
};

const Prislista = () => {
  const prislistaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lackverket.se/prislista#service",
    name: "Prislista för Sprutmålning och Lackering",
    description:
      "Prislista för sprutmålning och lackering av köksluckor, innerdörrar, ytterdörrar och möbler. Tydlig prissättning, industrifärg och möjlighet till ROT-avdrag. Skicka bild för offert.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.lackverket.se/#business",
      name: "Lackverket",
      url: "https://www.lackverket.se",
      telephone: "+46720175620",
      email: "info@lackverket.se",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SE",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Sverige",
    },
    serviceType: [
      "Sprutmålning av köksluckor",
      "Sprutmålning av dörrar",
      "Sprutmålning av möbler",
      "Lackering av inredning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prislista – Lackeringstjänster",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Omlackering av köksluckor",
          priceCurrency: "SEK",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: "Sprutlackering av köksluckor",
            description:
              "Omlackering av tidigare fabrikslackerade köksluckor. Priset varierar beroende på storlek och profilering.",
          },
        },
        {
          "@type": "Offer",
          name: "Omlackering av inner- och ytterdörrar",
          priceCurrency: "SEK",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: "Sprutmålning av dörrar",
            description:
              "Sprutmålning av innerdörrar och ytterdörrar, inklusive målning på plats av ytterdörrar.",
          },
        },
        {
          "@type": "Offer",
          name: "Omlackering av möbler",
          priceCurrency: "SEK",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: "Sprutmålning av möbler",
            description:
              "Möbellackering baserad på möbeltyp, storlek och skick. Skicka bild för offert.",
          },
        },
      ],
    },
  };

  return (
    <section
      className={`${inter.className} py-10 px-6 text-[1.2rem] sm:max-lg:text-[1.3rem] text-[#111] font-normal leading-[1.9] flex flex-col justify-center items-center gap-8 lg:w-full lg:text-[0.75rem] lg:py-20`}
    >
      <Script
        id="prislista-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prislistaSchema) }}
      />
      <div className="flex flex-col gap-1 lg:w-[75%] lg:mx-auto">
        <p>
          Förutsättningar för att denna prislista skall gälla är att luckorna/
          dörrarna är rengjorda innan leverans och beslag avtagna.
        </p>
        <p>
          För tvätt av luckor eller avtagande av beslag innan slipning så
          tillkommer en extra debitering på 850kr per timme.
        </p>
        <p>
          Våra priser inkluderar lätt nedslipning, grundmålning och lackning.
          För avslipning av en tidigare penselstruken yta på luckor och dörrar
          så tillkommer en extra debitering på 850kr per timme.
        </p>
        <p>
          Vi sprutmålar med industriell enkomponents halvblank akrylfärg. Om en
          annan glans önskas tillkommer en kostnad.
        </p>
        <p>
          Vid målning av gamla omålade träluckor tillkommer en kostnad för
          spärrgrundsbehandling. Denna kostnad kan aven tillkomma då ytor
          behövts repareras.
        </p>
        <p className="font-bold">
          Spackling av ådring, ojämnheter, repor och vid reparationer debiteras
          850kr per timme.
        </p>
      </div>

      <div className="text-[1.5rem] text-[#111] lg:w-[75%] lg:mx-auto lg:text-[0.86rem] lg:text-[#222]">
        <p className="text-[1.8rem] max-sm:text-[1.5rem] text-[#398652] mt-10 mb-2 lg:text-[18px] lg:font-medium lg:mt-3">
          OMLACKERING AV TIDIGARE FABRIKS LACKERADE LUCKOR{" "}
        </p>
        <div className="flex flex-col gap-1 mb-10 text-[1.25rem] sm:max-lg:text-[1.3rem]">
          <p>
            Släta rätvinklade normalstora luckor och stora lådfronter upp till
            90cm: 425kr
          </p>
          <p>Släta rätvinklade stora luckor över 90cm: 550kr</p>
          <p>Släta rätvinklade lådfronter upp till 20cm: 250kr</p>
          <p>Släta rätvinklade lådfronter över 20cm: 325kr</p>
        </div>

        <div className="flex flex-col gap-1 mb-10 text-[1.25rem] sm:max-lg:text-[1.3rem]">
          <p>
            Profilerade eller övertalade normalstora luckor och stora lådfronter
            upp till 90cm: 450kr
          </p>
          <p>Profilerade eller övertalade stora luckor över 90cm: 575kr</p>
          <p>Profilerade eller övertalade lådfronter upp till 20cm: 275kr</p>
          <p>Profilerade eller övertalade lådfronter över 20cm: 395kr</p>
        </div>

        <div className="flex flex-col gap-1 mb-10 text-[1.25rem] sm:max-lg:text-[1.3rem]">
          <p>
            Spegel eller spârfrästa normalstora luckor och stora lådfronter upp
            till 90cm: 475kr
          </p>
          <p>Spegel eller spârfrästa stora luckor över 90cm: 600kr</p>
          <p>Spegel eller spârfrästa lådfronter upp till 20cm: 295kr</p>
          <p>Spegel eller spârfrästa lådfronter över 20cm: 410kr</p>
        </div>

        <p className="font-bold text-[1.35rem] sm:max-lg:text-[1.6rem] max-sm:text-[1.5rem] lg:text-[0.95rem]">
          Vi målar även resterande kök hemma hos kund! Tiden debiteras 550kr per
          timme efter rot avdraget! Skicka bild för uträkning av tidsplan!
        </p>
      </div>

      <div className="text-[1.3rem] sm:max-lg:text-[1.3rem] text-[#222] lg:w-[75%] lg:mx-auto lg:text-[0.86rem] lg:text-[#222]">
        <p className="text-[1.7rem] max-sm:text-[1.5rem] text-[#398652] mt-3 mb-2 lg:text-[16px] lg:font-medium lg:mt-0">
          OMLACKERING AV TIDIGARE FABRIKS LACKERADE DÖRRAR{" "}
        </p>
        <p>Gabondörrar: 1275kr</p>
        <p>Spegeldörrar: 1475kr</p>
        <p>Extra tunga innedörrar, branddörr: 1875kr</p>
        <p>
          <span>Ytterdörrar: från 1875kr, en sida.</span>{" "}
          <span className="font-bold text-[1.35rem] sm:max-lg:text-[1.6rem] lg:text-[0.95rem]">
            Vi sprutmålar ytterdörrar på plats hemma hos kund över dagen. Skicka
            bild för offert!
          </span>
        </p>
        <p className="mt-8">
          Träluckor och dörrar har naturlig karaktär vilket inte försvinner helt
          vid sprutmålning. Även fast karaktären i tr
        </p>
      </div>

      <div className="text-[1.4rem] text-[#222] flex flex-col items-start w-full lg:w-[75%] lg:mx-auto lg:text-[0.86rem] lg:text-[#222]">
        <p className="text-[1.7rem] max-sm:text-[1.5rem] text-[#398652] mb-2 lg:text-[16px] lg:font-medium lg:mt-0">
          OMLACKERING AV MÖBLER - SKICKA BILD FÖR OFFERT!
        </p>
        <p className="mb-5">Betalning:</p>
      </div>

      <div className="w-full sm:w-[80%] sm:mx-auto sm:text-[1.1rem]">
        <InfoForm />
      </div>
    </section>
  );
};

export default Prislista;
