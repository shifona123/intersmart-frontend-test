"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto flex h-[100px] max-w-[1400px] items-center justify-between px-6 md:px-8 lg:px-14">
        <a href="/" onClick={closeMenu}>
          <img
            src="/interSmart-logo.png"
            alt="Intersmart"
            className="w-[250px] md:w-[270px] lg:w-[290px]"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="#services"
            className="text-[15px] text-white transition hover:text-gray-300"
          >
            Services
          </a>

          <a
            href="#solutions"
            className="text-[15px] text-white transition hover:text-gray-300"
          >
            Solutions
          </a>

          <a
            href="#virtual-team"
            className="text-[15px] text-white transition hover:text-gray-300"
          >
            Virtual team
          </a>

          <a
            href="#company"
            className="text-[15px] text-white transition hover:text-gray-300"
          >
            Company
          </a>

          <a
            href="#about"
            className="text-[15px] text-white transition hover:text-gray-300"
          >
            About us
          </a>

          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-3 text-[14px] font-medium text-[#02091c] transition hover:bg-gray-200"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[3px] w-[28px] bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-[3px] w-[28px] bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block h-[3px] w-[28px] bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-[100px] bg-[#02091c] px-6 pb-7 pt-5 shadow-lg lg:hidden">
          <div className="flex flex-col">
            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[16px] text-white"
            >
              Services
            </a>

            <a
              href="#solutions"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[16px] text-white"
            >
              Solutions
            </a>

            <a
              href="#virtual-team"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[16px] text-white"
            >
              Virtual team
            </a>

            <a
              href="#company"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[16px] text-white"
            >
              Company
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[16px] text-white"
            >
              About us
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 w-fit rounded-full bg-white px-7 py-3 text-[15px] font-medium text-[#02091c]"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
