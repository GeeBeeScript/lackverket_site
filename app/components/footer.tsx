
import Link from "next/link";
import NumberButton from "./NumberButton";

const Footer = () => {

  return (
    <footer className="w-full bg-[rgb(232,182,144)] py-2">
      
      {/* ---------------------------------------------------- */}
      {/*     1️⃣ SMALL → MEDIUM SCREENS (mobile + tablet)      */}
      {/* ---------------------------------------------------- */}
      <section
        className="
          bg-[#b4b4b4] 
          text-white 
          flex 
          flex-col 
          items-start 
          justify-start 
          gap-3 
          px-6 
          py-6 
          lg:hidden
        "
      >
        <div className="font-sans text-base">
          <Link href="mailto:info@lackverket.se">info@lackverket.se</Link>
        </div>
        <div className="text-base cursor-pointer">072-0175620</div>
        <div className="text-base leading-tight">
          Strandvägen 4,<br />Söderbärke, södra Dalarna
        </div>
        <div className="text-base">Telefontid: Mån–Lör, 9–17</div>
      </section>

      {/* ---------------------------------------------------- */}
      {/*     2️⃣ LARGE SCREENS (desktop)                      */}
      {/* ---------------------------------------------------- */}
      <section
        className="
          hidden 
          lg:flex 
          bg-[#b4b4b4] 
          text-white 
          h-[15vh] 
          items-center 
          justify-between 
          px-32 
          xl:px-52 
          text-[1rem] 
          leading-[1.3rem]
        "
      >
        <div className="font-sans cursor-pointer">
          <Link href="mailto:info@lackverket.se">info@lackverket.se</Link>
        </div>
        <NumberButton />
        <div>Strandvägen 4, Söderbärke, södra Dalarna</div>
        <Link href="tel:0720175620">Telefontid: Mån-Lör, 9-17</Link>
      </section>

    </footer>
  );
};


export default Footer