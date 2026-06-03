import Image from "next/image";
import InfoForm from "../components/InfoForm";
import { Metadata } from "next";

import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Sprutmålning av Möbler i Sverige | Lackverket – Måla & Lackera Möbler",
  description:
    "Professionell sprutmålning av möbler i Sverige. Vi lackerar, målar och förnyar gamla och målade möbler med högsta kvalitet. Gratis hämtning i närområdet. Kontakta Lackverket idag!",
  keywords: [
    "sprutmålning möbler",
    "måla möbler",
    "lackera möbler",
    "möbellackering",
    "måla gamla möbler",
    "sprutlackering möbler",
    "möbelmålning Sverige",
    "lackera trä möbler",
    "förnya möbler",
    "professionell möbelmålning",
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
    canonical: "https://www.lackverket.se/mobler",
  },
  openGraph: {
    title: "Sprutmålning av Möbler | Lackverket",
    description:
      "Ge dina möbler nytt liv med professionell sprutmålning. Vi målar, lackerar och förnyar möbler i hela Sverige. Gratis hämtning i närområdet.",
    url: "https://www.lackverket.se/mobler",
    siteName: "Lackverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "https://www.lackverket.se/assets/painted_chair.avif",
        width: 1200,
        height: 630,
        alt: "Sprutmålade möbler – målad stol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprutmålning av Möbler | Lackverket",
    description:
      "Professionell målning och lackering av möbler. Förnya gamla möbler med sprutmålning av hög kvalitet.",
    images: ["https://www.lackverket.se/assets/painted_chair.avif"],
  },
  category: "Möbelmålning & Lackering",
};

const Mobler = () => {
  const moblerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lackverket.se/mobler#service",
    name: "Sprutmålning och Lackering av Möbler",
    description:
      "Professionell sprutmålning och lackering av möbler. Vi förnyar gamla och målade möbler genom nedslipning, spärrgrund, grundmålning och lackering. Med rätt kulör blir möbler tidlösa. Gratis hämtning i närområdet.",
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
      "Sprutmålning av möbler",
      "Möbellackering",
      "Målning av trämöbler",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        description:
          "Pris baseras på möbeltyp och skick. Skicka bild för prisförslag.",
      },
    },
  };
  return (
    <section className="w-full flex flex-col justify-start items-center gap-7 bg-[#ebf5f0]">
      <Script
        id="mobler-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moblerSchema) }}
      />
      <div className="w-full h-[60vh] relative sm:h-0 pb-[56.25%] sm:mt-5 sm:w-[50vw]">
        <Image
          src="/assets/painted_chair.avif"
          alt="painted doors"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <p className="font-bold text-[2.2rem] sm:text-[1.8rem] sm:inline text-[#222] px-8 py-4 flex flex-col justify-center items-center shadow-2xl">
            <span>Möbler</span>
          </p>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5 sm:gap-7 sm:w-[70%] sm:mx-auto">
        <p className="font-bold text-[1.7rem]">Sprutmålning Möbler</p>
        <p className="text-[1.35rem] leading-[2.6rem] text-[#111] sm:text-[1.1rem] sm:leading-[2.4rem]">
          Har du gamla furu möbler ståendes i förråd? Med kulör kan de omvandlas
          till vackra möbler för det här årtiondet! Vi gör ett utförligt jobb
          med nedslipning, spärrgrunds behandling, grund målning och lackning.
          Med den rätta kulören blir möbler tidlösa, så släng inte! Få dem
          sprutlackerade istället! Eller har du sen tidigare målade möbler som
          behöver ett ansiktslyft? Skicka oss en bild så svarar vi med
          prisförslag. Vi hjälper också gärna till med leverans och erbjuder
          gratis hämtning i närområdet! Kontakta oss redan idag!
        </p>
      </div>

      <div className="px-0 sm:px-5 py-5 flex flex-col gap-1 sm:gap-5 sm:w-[70%] sm:mx-auto">
        <p className="font-bold text-[1.8rem] sm:text-[1.4rem] sm:leading-[2.4rem]">
          <span>Telefon:</span> <span>072-017 56 20 </span>
        </p>
        <p className="font-bold text-[1.8rem] sm:text-[1.4rem] sm:leading-[2.4rem]">
          <span>E-post:</span> <span>info@lackverket.se</span>
        </p>
      </div>

      <div className="w-full mb-15 sm:w-[70%] sm:mx-auto sm:text-[1.1rem]">
        <InfoForm />
      </div>
    </section>
  );
};

export default Mobler;
