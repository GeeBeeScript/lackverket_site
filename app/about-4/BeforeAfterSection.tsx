import React from "react";
import Image from "next/image";
import { robotoBold } from "../layout";
import { CircleArrowDown, CircleArrowRight } from "lucide-react";

type Project = {
  title: string; // Used for alt text, captions and schema – make each one specific
  before: string[];
  after: string[];
};

export const projects = [
  {
    title: "Sprutmålade köksluckor – kök 1",
    before: [
      "/assets/beforeafter/firstBefore.jpeg",
      "/assets/beforeafter/firstBefore2.jpeg",
    ],
    after: ["/assets/beforeafter/firstAfter.jpeg"],
  },
];

const beforeAlt = (p: Project, i: number) =>
  `${p.title} före sprutmålning${p.before.length > 1 ? `, bild ${i + 1}` : ""}`;

const afterAlt = (p: Project, i: number) =>
  `${p.title} efter sprutmålning av Lackverket${
    p.after.length > 1 ? `, bild ${i + 1}` : ""
  }`;

const BeforeAfterSection = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div
        className={`${robotoBold.className} mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20`}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-[#18382b] sm:text-4xl lg:text-5xl">
          Före och efter
        </h1>

        <p className="mt-5 text-base leading-7 text-[#496257] sm:text-lg">
          Före- och efterbilder från ett nyligen utfört arbete.
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
  );
};

export default BeforeAfterSection;
