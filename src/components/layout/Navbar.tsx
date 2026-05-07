"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

import Container from "../common/Container";

import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Projects",
    href: "/projects",
  },

  {
    name: "About",
    href: "/about",
  },

  {
    name: "Services",
    href: "/services",
  },

  {
    name: "Testimonials",
    href: "/testimonials",
  },

  {
    name: "Blog",
    href: "/blog",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
        <Container>
          <div
            className={`transition-all duration-500 border rounded-2xl px-6 py-4 flex items-center justify-between backdrop-blur-2xl ${
              scrolled
                ? "bg-[#020617]/80 border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.03)]"
                : "bg-white/5 border-white/10"
            }`}
          >
            {/* LOGO */}
            <Link href="/">
              <div className="cursor-pointer">
                <h1 className="text-xl md:text-2xl font-bold tracking-[3px]">
                  ARUL BUILDERS
                </h1>

                <p className="text-[10px] md:text-xs uppercase tracking-[4px] text-gray-400 mt-1">
                  Premium Construction
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center gap-10">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative text-sm tracking-[1px] text-gray-300 hover:text-white transition-all duration-500 group"
                >
                  {item.name}

                  {/* Hover Line */}
                  <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden xl:block">
              <button className="relative overflow-hidden bg-white text-black px-7 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-500">
                <span className="relative z-10">Schedule Visit</span>
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#020617]/98 backdrop-blur-3xl z-[60] transition-all duration-500 ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-6">
          {/* TOP BAR */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <h2 className="text-lg font-bold tracking-[3px]">
                ARUL BUILDERS
              </h2>

              <p className="text-[10px] uppercase tracking-[4px] text-gray-500 mt-1">
                Premium Construction
              </p>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </div>

          {/* MENU LINKS */}
          <div className="flex flex-col mt-10">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-5 border-b border-white/5"
              >
                <span className="text-xl font-medium text-white/80 group-hover:text-white transition-all duration-300">
                  {item.name}
                </span>

                <span className="text-white/20 group-hover:text-white transition-all duration-300">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-auto pt-8">
            <button className="w-full bg-white text-black py-4 rounded-full font-semibold text-base hover:scale-[1.02] transition-all duration-500">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
