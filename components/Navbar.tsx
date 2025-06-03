"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import { getAssetPath } from "@/utils/getAssetPath";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("FR");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Fusions et Acquisitions", href: "/fusions-acquisitions" },
    { label: "Levée de fonds", href: "/levee-de-fonds" },
    { label: "Carrières", href: "/carrieres" },
  ];

  const languages = ["FR", "EN", "IT"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#050e1f]/95 backdrop-blur-md border-white/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src={getAssetPath("/logo-white.png")}
                alt="Milaris Partners"
                width={200}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors duration-300 font-light text-white/80 hover:text-[#c9a961] text-sm uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Contact Button */}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="transition-colors duration-300 font-light text-white/80 hover:text-[#c9a961] text-sm uppercase tracking-wider"
              >
                Contact
              </button>
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center space-x-1 transition-colors duration-300 font-light text-white/80 hover:text-[#c9a961] text-sm uppercase tracking-wider">
                  <span>{selectedLanguage}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 mt-2 w-20 bg-[#050e1f]/95 backdrop-blur-md border border-white/10 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`block w-full px-4 py-2 text-left hover:bg-white/10 transition-colors duration-300 text-sm ${
                        lang === selectedLanguage ? "text-[#c9a961]" : "text-white/80"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-[#050e1f]/95 backdrop-blur-md border border-white/10 mt-2 py-4"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-white/80 hover:bg-white/10 hover:text-[#c9a961] transition-colors duration-300 text-sm uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Contact Button Mobile */}
              <button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-white/80 hover:bg-white/10 hover:text-[#c9a961] transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Contact
              </button>
              
              <div className="px-4 py-3 border-t border-white/10 mt-2">
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-3 py-1 text-sm ${
                        lang === selectedLanguage
                          ? "bg-[#c9a961] text-[#050e1f]"
                          : "bg-white/10 text-white/80"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navbar; 