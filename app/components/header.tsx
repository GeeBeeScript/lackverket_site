"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = "0720175620";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <header className="w-full bg-[#b4b4b4] text-[#ebf5f0] overflow-x-hidden">
      {/* ---------------------------------------------------- */}
      {/*      1️⃣ MOBILE → MEDIUM (SMALL SCREEN UI)            */}
      {/* ---------------------------------------------------- */}
      <section className="relative flex flex-col items-center w-full pt-6 lg:hidden">
        {/* MENU ICON */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="absolute top-10 right-6 z-50 cursor-pointer transition-transform active:scale-90"
          >
            <Image
              src="/assets/menu-bar.svg"
              alt="menu"
              width={40}
              height={40}
            />
          </button>
        )}

        {/* LOGO */}
        <div className="w-full flex justify-center mb-6">
          <Image
            src="/assets/logo.avif"
            alt="Logo"
            width={100}
            height={100}
            className="w-[55vw] h-auto sm:max-lg:w-50 sm:max-lg:h-50"
          />
        </div>

        {/* TITLE */}
        <div className="flex flex-col text-center text-[#A22323] font-bold sm:max-lg:text-[2vw] text-[6vw] leading-tight mb-4 gap-4">
          <span>SPRUTLACKERING</span>
          <span>KÖKSLUCKOR,</span>
          <span>DÖRRAR</span>
          <span>& MÖBLER</span>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col-reverse items-start w-full text-white text-center gap-7 py-8 pl-6 sm:max-lg:py-4 sm:max-lg:flex-row sm:max-lg:justify-center sm:max-lg:gap-25 sm:max-lg:items-center">
          <div className="underline underline-offset-4 decoration-2 font-bold text-2xl">
            <Link href="mailto:info@lackverket.se">info@lackverket.se</Link>
          </div>
          <div onClick={handleCopy} className="text-4xl font-bold cursor-pointer">0720175620</div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 🔥 FULLSCREEN MENU OVERLAY WITH TRUE TRANSITION       */}
        {/* ---------------------------------------------------- */}
        <div
          className={`
          fixed inset-0 z-40 flex flex-col items-center justify-center
          bg-black bg-opacity-95 text-white text-2xl font-bold gap-8
          transform transition-all duration-300
          ${
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
            >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 z-50 cursor-pointer transition-transform active:scale-90"
          >
            <Image
              src="/assets/close-svg.svg"
              alt="close menu"
              width={32}
              height={32}
            />
          </button>

          {/* MENU ITEMS */}
          {[
            { href: "/", text: "Hem" },
            {
              href: "/prislista-2026-sprutlackeringstjanster",
              text: "Prislista 2026 Sprutlackeringstjänster",
            },
            { href: "/about-4", text: "Lackering Köksluckor" },
            { href: "/mobler", text: "Lackering Möbler" },
            {
              href: "/dorrar",
              text: "Lackering Inne- & Ytterdörrar + Fönster",
            },
          ].map((item) => (
            <Link
              key={item.text}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="
          transition-all duration-300 
          hover:text-[#ddf7ea] 
          hover:scale-105
          underline underline-offset-8 decoration-2 truncate
          max-sm:w-[20ch] 
        "
            >
              {item.text}
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/*           2️⃣ LARGE SCREENS                           */}
      {/* ---------------------------------------------------- */}
      <section className="hidden lg:flex w-full h-[41vh] justify-between items-center pr-24 relative">
        {/* LOGO */}
        <div className="h-full w-[33vw]">
          <Image
            src="/assets/logo.avif"
            alt="Logo"
            width={100}
            height={100}
            className="h-full w-auto"
          />
        </div>

        {/* CENTER NAV + TITLE */}
        <div className="flex flex-col items-center h-full pt-9 text-[1.05rem] relative">
          {/* NAV BAR */}
          <div className="flex justify-between items-center font-bold gap-5 pb-2 relative text-[1.1rem]">
            <div className="text-[#F7F7F7] hover:text-[#ddf7ea] transition-colors duration-200">
              <Link href="/">Hem</Link>
            </div>

            <div className="hover:text-[#ddf7ea] transition-colors duration-200">
              <Link href="/prislista-2026-sprutlackeringstjanster">
                Prislista 2026 Sprutlackeringstjänster
              </Link>
            </div>

            {/* DROPDOWN */}
            <div className="group z-50">
              <button className="cursor-pointer hover:text-[bg-[#ddf7ea]] transition-colors duration-200">
                Mer
              </button>

              <div
                className="
                  absolute hidden group-hover:flex
                  flex-col items-end gap-4
                  bg-black text-white
                  top-7 right-0
                  py-3 px-3
                  z-50
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
                {[
                  { href: "/about-4", text: "Lackering Köksluckor" },
                  { href: "/mobler", text: "Lackering Möbler" },
                  {
                    href: "/dorrar",
                    text: "Lackering Inne- & Ytterdörrar + Fönster",
                  },
                ].map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="hover:text-[#ddf7ea] transition-colors duration-200"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER TITLE */}
          <div className="w-full flex flex-col items-center text-[1.6rem] font-bold text-[#A22323] gap-3">
            <span>SPRUTLACKERING</span>
            <span>KÖKSLUCKOR, DÖRRAR</span>
            <span>& MÖBLER</span>
          </div>
        </div>

        {/* CONTACT (RIGHT) */}
        <div
          className="
            absolute bottom-1 right-16
            flex items-center gap-60
            font-bold text-[#ebf5f0]
            z-20
          "
        >
          <div className="underline underline-offset-2 decoration-2 hover:text-[#ddf7ea] transition-colors duration-200">
            <Link href="mailto:info@lackverket.se">info@lackverket.se</Link>
          </div>
          <Link href="tel:0720175620" className="text-2xl cursor-pointer">0720175620</Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
