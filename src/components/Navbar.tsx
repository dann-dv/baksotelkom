"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", to: "home" },
    { name: "Tentang", to: "about" },
    { name: "Menu", to: "menu" },
    { name: "Lokasi", to: "location" },
  ];

  return (
    <nav className={clsx("fixed w-full z-50 transition-all duration-300", isScrolled ? "bg-softCream/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6")}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-heading font-bold text-forestGreen cursor-pointer">
          <Link to="home" smooth={true} duration={500} className="flex items-center">
            <Image
              src="/logo_baksoTelkom.webp"
              alt="Logo Bakso Telkom"
              width={120}
              height={80}
              priority
              className="w-[80px] md:w-[110px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-forestGreen font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={500} className="cursor-pointer hover:text-warmOrange transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/6282137571407" target="_blank" rel="noopener noreferrer" className="bg-forestGreen text-softCream px-6 py-2 rounded-full hover:bg-warmOrange transition-colors">
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-forestGreen" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-softCream shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)} className="text-forestGreen font-medium cursor-pointer">
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/6282137571407" target="_blank" rel="noopener noreferrer" className="bg-forestGreen text-softCream px-6 py-2 rounded-full text-center hover:bg-warmOrange transition-colors">
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
