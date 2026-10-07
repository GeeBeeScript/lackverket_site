import Image from "next/image";
import Link from "next/link";
import { robotoBold } from "./layout";
import { Metadata } from "next";
import InfoForm from "./components/InfoForm";


export const metadata:Metadata = {
  title:
    "Lackverket – Sprutlackering av Köksluckor, Dörrar & Möbler i Sverige",
  description:
    "Lackverket är specialister på sprutlackering av köksluckor, innerdörrar, ytterdörrar och möbler. Industrilack, valfri NCS-kulör och perfekt finish. 17 års erfarenhet, ROT-avdrag och gratis hämtning i närområdet.",
  keywords: [
    "lackering",
    "sprutmålning",
    "lackera köksluckor",
    "måla köksluckor",
    "lacka köksluckor",
    "renovera köksluckor",
    "lackering dörrar",
    "måla köksluckor pris",
    "lackering stolar",
    "lackera luckor",
    "lackering inredning",
    "lackering köksluckor dalarna",
    "ROT-avdrag målning",
    "Lackverket",
  ],
  authors: [{ name: "Lackverket" }],
  creator: "Lackverket",
  publisher: "Lackverket",
  metadataBase: new URL("https://www.lackverket.se"),
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
    canonical: "https://www.lackverket.se/",
  },
  openGraph: {
    title:
      "Lackverket – Professionell Sprutlackering i Sverige",
    description:
      "Vi sprutlackerar köksluckor, dörrar och möbler med industrifärg och perfekt finish. 17 års erfarenhet, ROT-avdrag och valfri NCS-kulör.",
    url: "https://www.lackverket.se/",
    siteName: "Lackverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "https://www.lackverket.se/assets/painted_doors.avif",
        width: 1200,
        height: 630,
        alt: "Sprutlackering av köksluckor och inredning – Lackverket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lackverket – Sprutlackering av Köksluckor, Dörrar & Möbler",
    description:
      "Specialister på sprutlackering av kök, dörrar och möbler. Industrilack, NCS-kulör och perfekt resultat.",
    images: ["https://www.lackverket.se/assets/painted_doors.avif"],
  },
  category: "Sprutlackering & Målning",
};


export default function Home() {

  return (
    <section className="bg-[#ebf5f0] pt-10 w-full overflow-x-hidden max-lg:text-center">
      {/* ---------------------------------------------------- */}
      {/* 1️⃣ SMALL → MEDIUM UI (mobile/tablet)                */}
      {/* ---------------------------------------------------- */}
      <section className="lg:hidden sm:max-lg:px-5">
        <h1
          className={`${robotoBold.className} text-center font-bold text-[7vw] mb-10`}
        >
          VÄLKOMMEN TILL LACKVERKET!
        </h1>

        {/* --- REUSABLE BLOCK --- */}
        {[
          {
            title: "SPRUTLACKERING KÖKSLUCKOR",
            link: "/about-4",
            text: `Vi använder industriell akryl färg vilket ger en mycket 
              slitstark och tålig yta! Perfekt på köksluckor som har mest 
              slitage i hemmet. Ge oss bara en NCS kod så målar vi i exakt 
              din önskade kulör!`,
            img: "/assets/painted_doors.avif",
          },
          {
            title: "SPRUTLACKERING YTTERDÖRRAR",
            link: "/dorrar",
            text: `Vi sprutmålar ytterdörrar på plats hemma hos kunden över dagen! 
              Det är alltså inte nödvändigt att vara utan dörr över natten. 
              Vi behöver endast en liten plast i trädgården och eluttag så fixar 
              vi resten!`,
            img: "/assets/painted_door.avif",
          },
          {
            title: "SPRUTLACKERING MÖBLER",
            link: "/mobler",
            text: `Varför inte modernisera och måla om de gamla furumöblerna 
              istället för att köpa nytt? Valen är ändlösa med färg!`,
            img: "/assets/painted_chair.avif",
          },
          {
            title: "SPRUTLACKERING INNEDÖRRAR",
            link: "/mobler",
            text: `Istället för att byta ut gamla innedörrar till nya med andra 
              mått, installationskostnad och allt vad det innebär, så går det 
              enkelt att sprutmåla de gamla så de känns som nya!`,
            img: "/assets/room_door.avif",
          },
        ].map((block, index) => (
          <div key={index} className="flex flex-col gap-3 mb-8">
            <div className="w-full flex flex-col gap-4 bg-black text-white py-10 px-6">
              <p className="font-bold underline text-xl text-center">
                <Link className={robotoBold.className} href={block.link}>
                  {block.title}
                </Link>
              </p>
              <p className={`${robotoBold.className} text-[1.2rem] sm:max-lg:text-[1.4rem] leading-9`}>
                {block.text}
              </p>
            </div>

            <div className="w-full h-[20vh] sm:max-lg:h-[55vh] relative overflow-hidden">
              <Image
                src={block.img}
                alt={block.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}

        <p className="py-5 text-[4.5vw] leading-[7vw] font-bold">
          Vi är sprutlackerare med bakgrund i möbler och interiörer, och med 17
          års erfarenhet av branschen. Kontakta oss så hjälper vi gärna till med
          att hitta bästa lackeringslösningen för dina köksluckor, dörrar och
          möbler.
        </p>

        {/* VIDEO */}
        <div className="w-full flex justify-center items-center mt-7 mb-10 relative">
          <video
            src="/assets/file.mp4"
            controls
            playsInline
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full sm:w-[80%] sm:mx-auto sm:text-[1.1rem]">
          <InfoForm />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2️⃣ LARGE SCREENS UI (your original layout)           */}
      {/* ---------------------------------------------------- */}
      <section className="hidden lg:block">
        <p
          className={`${robotoBold.className} w-full text-center font-bold leading-[1.35rem] text-[2.5rem] mt-8 mb-5`}
        >
          VÄLKOMMEN TILL LACKVERKET!
        </p>

        <div className="pt-20">
          {/* BLOCKS — original flex-row layout */}
          {[
            {
              reverse: false,
              title: "SPRUTLACKERING KÖKSLUCKOR",
              link: "/about-4",
              text: `Vi använder industriell akryl färg vilket ger en mycket slitstark
              och tålig yta! Perfekt på köksluckor som har mest slitage i
              hemmet. Ge oss bara en NCS kod så målar vi i exakt din önskade
              kulör!`,
              img: "/assets/painted_doors.avif",
            },
            {
              reverse: true,
              title: "SPRUTLACKERING YTTERDÖRRAR",
              link: "/dorrar",
              text: `Vi sprutmålar ytterdörrar på plats hemma hos kunden över dagen!
              Det är alltså inte nödvändigt att vara utan dörr över natten. Vi
              behöver endast en liten plast i trädgården och eluttag så fixar vi
              resten! Låt oss ta vara på varma sommardagar och fräscha upp även
              utvändigt!`,
              img: "/assets/painted_door.avif",
            },
            {
              reverse: false,
              title: "SPRUTLACKERING MÖBLER",
              link: "/mobler",
              text: `Varför inte modernisera och måla om de gamla furumöblerna istället
              för att köpa nytt? Eller ge redan målade möbler ett lyft med en ny
              kulör. Valen är ändlösa med färg!`,
              img: "/assets/painted_chair.avif",
            },
            {
              reverse: true,
              title: "SPRUTLACKERING INNEDÖRRAR",
              link: "/mobler",
              text: `Istället för att byta ut gamla innedörrar till nya med andra mått,
              installationskostnad och allt vad det innebär, så går det enkelt
              att sprutmåla de gamla så de känns som nya! Kontakta oss idag!`,
              img: "/assets/room_door.avif",
            },
          ].map((b, i) => (
            <div
              key={i}
              className={`flex ${
                b.reverse ? "flex-row-reverse" : ""
              } justify-center items-center gap-5 px-10`}
            >
              <div className="w-[42vw] h-[78vh] bg-black text-white flex flex-col justify-center items-center gap-5 p-8">
                <p className="font-bold underline text-[1.3rem]">
                  <Link className={robotoBold.className} href={b.link}>
                    {b.title}
                  </Link>
                </p>
                <p
                  className={`${robotoBold.className} w-[85%] text-center leading-7 text-[0.96rem]`}
                >
                  {b.text}
                </p>
              </div>

              <div className="w-[42vw] h-[78vh] relative">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="pt-17 pb-7 w-[86vw] mx-auto text-[1.4rem] leading-8 font-bold">
          Vi är sprutlackerare med bakgrund i möbler och interiörer, och med 17
          års erfarenhet av branschen. Kontakta oss så hjälper vi gärna till med
          att hitta bästa lackeringslösningen för dina köksluckor, dörrar och
          möbler. Eller varför inte kontakta oss och diskutera sprutmålning av
          olika inredningsdetaljer i ditt hem, så som speglar, lampfötter,
          ramar, lister eller fönsterfoder! Med färg och kulör som passion,
          pratar vi gärna inredningslösningar med just dig!!"
        </p>

        {/* VIDEO (desktop) */}
        <div className="w-[86vw] mx-auto flex justify-center items-center mt-10 mb-10 relative">
          <video
            src="/assets/file.mp4"
            controls
            playsInline
            className="w-full"
          />
        </div>

        <div className="w-[86vw] sm:mx-auto sm:text-[1.1rem]">
          <InfoForm />
        </div>
      </section>
    </section>
  );
}
