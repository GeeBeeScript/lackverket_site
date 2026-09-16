import { CircleArrowDown, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { robotoBold } from "../layout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sprutlackering av Köksluckor i Sverige | Lackverket - Måla Köksluckor",
  description:
    "Professionell sprutlackering av köksluckor i Sverige. Förnya ditt kök utan att byta stommar - slitstark industrilack, valfri NCS-kulör och perfekt finish. ROT-avdrag gäller. Gratis hämtning i närområdet. Kontakta Lackverket idag!",
  keywords: [
    "lackering köksluckor",
    "lackera om köksluckor",
    "köksluckor renovering",
    "lacka om köksluckor",
    "köksluckor västerås",
    "lacka köksluckor västerås",
    "lackera köksluckor pris",
    "lackera kök",
    "målning av köksluckor",
    "lackering av köksluckor",
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
    canonical: "https://www.lackverket.se/fore-och-efter",
  },
  openGraph: {
    title: "Sprutlackering av Köksluckor | Lackverket",
    description:
      "Ge ditt kök nytt liv med professionell sprutlackering av köksluckor. Industrilack, valfri NCS-kulör och slitstark finish. ROT-avdrag gäller.",
    url: "https://www.lackverket.se/fore-och-efter",
    siteName: "Lackverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "https://www.lackverket.se/assets/painted_doors.avif",
        width: 1200,
        height: 630,
        alt: "Sprutlackerade köksluckor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprutlackering av Köksluckor | Lackverket",
    description:
      "Förnya köket genom att sprutlackera köksluckorna. Slitstark industrifärg, valfri kulör och perfekt finish.",
    images: ["https://www.lackverket.se/assets/painted_doors.avif"],
  },
  category: "Köksmålning & Köksrenovering",
};

const beforeAfterImages = [
  {
    firstRow: {
      before: [
        "/assets/beforeafter/firstBefore.jpeg",
        "/assets/beforeafter/firstBefore2.jpeg",
      ],
      after: ["/assets/beforeafter/firstAfter.jpeg"],
    },
    secondRow: {
      before: ["/assets/beforeafter/secondBefore.jpeg"],
      after: ["/assets/beforeafter/secondAfter.jpeg"],
    },
    thirdRow: {
      before: [
        "/assets/beforeafter/thirdBefore1.jpeg",
        "/assets/beforeafter/thirdBefore2.jpeg",
      ],
      after: ["/assets/beforeafter/thirdAfter.jpeg"],
    },
  },
];

const ForeOchEfter = () => {
  const rows = Object.values(beforeAfterImages[0]);

  return (
    <section className="w-full overflow-x-hidden bg-[#ebf5f0] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
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
          {rows.map((row, rowIndex) => (
            <article
              key={rowIndex}
              className="overflow-hidden rounded-2xl border border-[#4fc489]/40 bg-white shadow-[0_12px_40px_rgba(24,56,43,0.07)]"
            >
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

                  <div
                    className={`grid gap-3 sm:gap-4 ${
                      row.before.length > 1
                        ? "grid-cols-1"
                        : "grid-cols-1"
                    }`}
                  >
                    {row.before.map((src, index) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#dfe8e3]"
                      >
                        <Image
                          src={src}
                          alt={`Före – bild ${index + 1}`}
                          fill
                          sizes="(max-width: 767px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ARROW */}
                <div className="relative flex items-center justify-center bg-white py-5 md:py-0">
                  {/* Horizontal divider on mobile */}
                  <div className="absolute left-8 right-8 top-1/2 h-px bg-[#4fc489]/30 md:hidden" />

                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#4fc489] bg-[#ebf5f0] text-[#2f9e68] shadow-sm">
                    <CircleArrowRight
                      size={22}
                      strokeWidth={1.8}
                      className="max-sm:hidden md:block"
                    />
                    <CircleArrowDown
                      size={22}
                      strokeWidth={1.8}
                      className="sm:hidden"
                    />
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
                    {row.after.map((src, index) => (
                      <div
                        key={src}
                        className={`relative overflow-hidden rounded-xl bg-white shadow-sm ${
                          row.before.length > 1
                            ? "min-h-[320px] flex-1 sm:min-h-[420px]"
                            : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Efter – bild ${index + 1}`}
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
