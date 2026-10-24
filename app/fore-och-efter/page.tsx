import { CircleArrowDown, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { robotoBold } from "../layout";

const SITE_URL = "https://www.lackverket.se";
const PAGE_URL = `${SITE_URL}/fore-och-efter`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const OG_IMAGE = `${SITE_URL}/assets/beforeafter/firstAfter.jpeg`;

const PAGE_TITLE = "Måla köksluckor – före och efter bilder | Lackverket";
const PAGE_DESCRIPTION =
  "Se före och efter bilder på kök med sprutmålade köksluckor. Vi sprutlackerar även laminerade luckor – en köksrenovering till lägre kostnad. Begär offert!";

type Project = {
  title: string; // Used for alt text, captions and schema – make each one specific
  before: string[];
  after: string[];
};

const projects: Project[] = [
  {
    title: "Sprutmålade köksluckor – kök 1",
    before: [
      "/assets/beforeafter/firstBefore.jpeg",
      "/assets/beforeafter/firstBefore2.jpeg",
    ],
    after: ["/assets/beforeafter/firstAfter.jpeg"],
  },
  {
    title: "Sprutmålade köksluckor – kök 2",
    before: ["/assets/beforeafter/secondBefore.jpeg"],
    after: ["/assets/beforeafter/secondAfter.jpeg"],
  },
  {
    title: "Sprutmålade köksluckor – kök 3",
    before: [
      "/assets/beforeafter/thirdBefore1.jpeg",
      "/assets/beforeafter/thirdBefore2.jpeg",
    ],
    after: ["/assets/beforeafter/thirdAfter.jpeg"],
  },
];

const beforeAlt = (p: Project, i: number) =>
  `${p.title} före sprutmålning${p.before.length > 1 ? `, bild ${i + 1}` : ""}`;

const afterAlt = (p: Project, i: number) =>
  `${p.title} efter sprutmålning av Lackverket${
    p.after.length > 1 ? `, bild ${i + 1}` : ""
  }`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "före och efter",
    "före och efter bilder kök",
    "sprutmålade köksluckor",
    "kostnad måla köksluckor",
    "köksluckor målning",
    "måla köksluckor före och efter",
    "måla laminerade köksluckor",
    "köksrenovering före och efter",
    "sprutlackering kök",
    "köksrenoveringar",
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
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Före och efter – Sprutmålade köksluckor | Lackverket",
    description:
      "Se resultatet själv: före- och efterbilder på kök där vi sprutmålat luckorna och målat resten på plats hos kunden.",
    url: PAGE_URL,
    siteName: "Lackverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        alt: "Kök med sprutmålade köksluckor efter renovering av Lackverket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Före och efter – Sprutmålade köksluckor | Lackverket",
    description:
      "Före- och efterbilder på kök med sprutmålade luckor. Nytt kök utan att byta – målat på plats hos kunden.",
    images: [OG_IMAGE],
  },
  category: "Köksrenovering & Sprutmålning",
};

const ForeOchEfter = () => {
  const allImages = projects.flatMap((p) => [
    ...p.before.map((src, i) => ({ src, caption: beforeAlt(p, i) })),
    ...p.after.map((src, i) => ({ src, caption: afterAlt(p, i) })),
  ]);

  const imageObjects = allImages.map(({ src, caption }) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${src}`,
    url: `${SITE_URL}${src}`,
    name: caption,
    caption,
    inLanguage: "sv-SE",
    creator: { "@id": BUSINESS_ID },
    copyrightHolder: { "@id": BUSINESS_ID },
    creditText: "Lackverket",
    copyrightNotice: "© Lackverket",
  }));

  const foreOchEfterSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "sv-SE",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": BUSINESS_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          contentUrl: OG_IMAGE,
          url: OG_IMAGE,
        },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#gallery` },
      },
      {
        "@type": "ImageGallery",
        "@id": `${PAGE_URL}#gallery`,
        name: "Före och efter – sprutmålade köksluckor",
        description:
          "Före- och efterbilder från kök där Lackverket sprutmålat köksluckorna och målat resterande delar på plats hemma hos kunden.",
        inLanguage: "sv-SE",
        author: { "@id": BUSINESS_ID },
        associatedMedia: imageObjects,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Före och efter", item: PAGE_URL },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Lackverket",
        inLanguage: "sv-SE",
        publisher: { "@id": BUSINESS_ID },
      },
      {
        "@type": "LocalBusiness",
        "@id": BUSINESS_ID,
        name: "Lackverket",
        url: SITE_URL,
        telephone: "+46720175620",
        email: "info@lackverket.se",
        address: {
          "@type": "PostalAddress",
          addressCountry: "SE",
        },
        areaServed: { "@type": "Country", name: "Sverige" },
      },
    ],
  };

  return (
    <section className="w-full overflow-x-hidden bg-[#ebf5f0] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(foreOchEfterSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={`${robotoBold.className} mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20`}>
          <h1 className="text-3xl font-semibold tracking-tight text-[#18382b] sm:text-4xl lg:text-5xl">
            Före och efter
          </h1>

          <p className="mt-5 text-base leading-7 text-[#496257] sm:text-lg">
            Vi sprutmålade luckorna och målade resterande delar på plats hemma
            hos kunden.
          </p>
        </div>

        {/* Before / After projects */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-20">
          {projects.map((project, rowIndex) => (
            <article
              key={rowIndex}
              aria-labelledby={`projekt-${rowIndex}`}
              className="overflow-hidden rounded-2xl border border-[#4fc489]/40 bg-white shadow-[0_12px_40px_rgba(24,56,43,0.07)]"
            >
              <h2 id={`projekt-${rowIndex}`} className="sr-only">
                {project.title}
              </h2>

              <div className="grid md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]">
                {/* BEFORE */}
                <div className="flex flex-col bg-[#f4f7f5] p-4 sm:p-6 lg:p-7">
                  <div className="mb-4 flex items-center justify-between sm:mb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#496257]">
                      Före
                    </span>
                    <span className="rounded-full bg-[#e3ebe7] px-3 py-1 text-[11px] font-medium text-[#496257]">
                      Utgångsläge
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {project.before.map((src, index) => (
                      <div
                        key={src}
                        className="relative aspect-4/3 overflow-hidden rounded-xl bg-[#dfe8e3]"
                      >
                        <Image
                          src={src}
                          alt={beforeAlt(project, index)}
                          fill
                          sizes="(max-width: 767px) 100vw, 50vw"
                          priority={rowIndex === 0 && index === 0}
                          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ARROW */}
                <div
                  aria-hidden="true"
                  className="relative flex items-center justify-center bg-white py-5 md:py-0"
                >
                  <div className="absolute left-8 right-8 top-1/2 h-px bg-[#4fc489]/30 md:hidden" />
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#4fc489] bg-[#ebf5f0] text-[#2f9e68] shadow-sm">
                    <CircleArrowRight size={22} strokeWidth={1.8} className="max-sm:hidden md:block" />
                    <CircleArrowDown size={22} strokeWidth={1.8} className="sm:hidden" />
                  </div>
                </div>

                {/* AFTER */}
                <div className="flex flex-col bg-[#dff3e9] p-4 sm:p-6 lg:p-7">
                  <div className="mb-4 flex items-center justify-between sm:mb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#237b50]">
                      Efter
                    </span>
                    <span className="rounded-full bg-[#c5ead7] px-3 py-1 text-[11px] font-semibold text-[#237b50]">
                      Resultat
                    </span>
                  </div>

                  <div className="flex h-full flex-col gap-3 sm:gap-4">
                    {project.after.map((src, index) => (
                      <div
                        key={src}
                        className={`relative overflow-hidden rounded-xl bg-white shadow-sm ${
                          project.before.length > 1
                            ? "min-h-80 flex-1 sm:min-h-[420px]"
                            : "aspect-4/3"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={afterAlt(project, index)}
                          fill
                          sizes="(max-width: 767px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForeOchEfter;