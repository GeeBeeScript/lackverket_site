import Image from "next/image";
import InfoForm from "../components/InfoForm";

import ImageSlider from "../components/ImageSlider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sprutmålning av Innerdörrar & Ytterdörrar i Sverige | Lackverket",
  description:
    "Professionell sprutmålning av innerdörrar och ytterdörrar i Sverige. Vi målar din ytterdörr på plats, utan att du blir utan dörr. Slipning, grundmålning och lackering med perfekt finish. ROT-avdrag upp till 50%. Kontakta Lackverket idag!",
  keywords: [
    "sprutmålning dörrar",
    "sprutmåla innerdörrar",
    "sprutmåla ytterdörr",
    "måla dörrar",
    "lackera dörrar",
    "ytterdörr målning",
    "innerdörr målning",
    "sprutlackering dörr",
    "måla ytterdörr på plats",
    "dörrmålning Sverige",
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
    canonical: "https://www.lackverket.se/dorrar",
  },
  openGraph: {
    title: "Sprutmålning av Innerdörrar & Ytterdörrar | Lackverket",
    description:
      "Vi sprutmålar inner- och ytterdörrar med professionellt resultat. Ytterdörrar målas på plats utan att du blir utan dörr. ROT-avdrag upp till 50%.",
    url: "https://www.lackverket.se/dorrar",
    siteName: "Lackverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "https://www.lackverket.se/assets/slide_page_door.avif",
        width: 1200,
        height: 630,
        alt: "Sprutmålad ytterdörr och innerdörr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprutmålning av Dörrar | Lackverket",
    description:
      "Sprutmålning av inner- och ytterdörrar med perfekt finish. Ytterdörrar målas på plats - snabbt, smidigt och professionellt.",
    images: ["https://www.lackverket.se/assets/slide_page_door.avif"],
  },
  category: "Dörrmålning & Lackering",
};

const Dorrar = () => {
  const dorrarSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lackverket.se/dorrar#service",
    name: "Sprutmålning av Innerdörrar och Ytterdörrar",
    description:
      "Professionell sprutmålning av innerdörrar och ytterdörrar. Ytterdörrar målas på plats hemma hos kund utan att du behöver vara utan dörr över natten. Slipning, grundmålning och lackering med perfekt finish. ROT-avdrag gäller.",
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
      "Sprutmålning av ytterdörrar",
      "Sprutmålning av innerdörrar",
      "Lackering av dörrar",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        description:
          "Pris beror på dörrtyp och skick. Skicka bild för offert. ROT-avdrag kan tillämpas.",
      },
    },
  };

  return (
    <section className="w-full flex flex-col justify-start items-center gap-7 bg-[#ebf5f0]">
      <Script
        id="dorrar-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dorrarSchema) }}
      />
      {/* Image Section */}
      <div className="py-9 sm:py-0 w-full flex flex-col sm:flex-row-reverse h-[80vh] sm:h-[50vh] sm:mt-5 sm:w-[70%] sm:mx-auto">
        <div className="h-[60%] w-full sm:w-[50vw] sm:h-full relative px-4 sm:px-0">
          <ImageSlider />
        </div>
        <div className="max-sm:h-[70vh] sm:w-[40%] flex justify-center items-center px-4 sm:px-0">
          <Image
            src="/assets/slide_page_door.avif"
            alt="Painted door"
            width={1200}
            height={600}
            className="sm:w-full sm:h-full sm:mx-0 object-cover max-sm:w-[70%] h-full mx-auto"
          />
        </div>
      </div>

      <div className="text-center">
        <p className="font-bold text-[1.6rem] sm:text-[1.5rem] text-[#111]">
          Sprutmåla Innedörrar & Ytterdörrar
        </p>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5 sm:gap-7 sm:w-[70%] sm:mx-auto">
        <p className="font-bold text-[1.8rem]">Innedörrar och Ytterdörrar</p>
        <p className="text-[1.35rem] leading-[2.6rem] text-[#111] sm:text-[1.1rem] sm:leading-[2.4rem]">
          Vi sprutmålar din ytterdörr på plats hemma hos dig vilket innebär att
          du inte behöver vara utan dörr över natten! Vi slipar ner, grundmålar
          och lackar, och jobbar på en lämplig plats i trädgården. Vi kan
          sprutmåla dörren i en kulör för fram och baksida eller i två olika
          kulörer. Behöver ytor repareras kan vi självklart göra det också och
          har du fler än en dörr så kan vi måla alla samtidigt. Behövs mer än en
          dag så kan vi hjälpa till att hänga tillbaka dörren på kvällen för att
          återkomma nästa dag. Just nu är rot avdraget höjt till 50% så passa på
          och slå till så länge vädret tillåter. Du är alltid välkommen att
          skicka oss en bild så räknar vi ut ett prisförslag!
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

export default Dorrar;
