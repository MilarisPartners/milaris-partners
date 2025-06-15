"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";
import { getAssetPath } from "@/utils/getAssetPath";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("FR");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isExpertisesOpen, setIsExpertisesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const expertises = [
    { label: "Cession d'entreprise", href: "/cession-entreprise" },
    { label: "Acquisition d'entreprise", href: "/acquisition-entreprise" },
    { label: "Financement", href: "/financement" },
  ];

  const languages = ["FR", "EN", "IT"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-0" : "h-20"
          }`}>
            <AnimatePresence>
              {!isScrolled && (
                <>
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href="/" className="flex items-center">
                      <Image 
                        src={getAssetPath("/logo-dark.png")}
                        alt="Milaris Partners"
                        width={150}
                        height={30}
                        className="h-8 w-auto"
                        priority
                      />
                    </Link>
                  </motion.div>

                  {/* Desktop Menu */}
                  <motion.div 
                    className="hidden lg:flex items-center space-x-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href="/"
                      className="transition-all duration-300 font-medium text-gray-700 hover:text-[#0001ff] text-sm"
                    >
                      A propos
                    </Link>
                    
                    {/* Expertises Dropdown */}
                    <div className="relative group">
                      <button 
                        className="flex items-center space-x-1 transition-all duration-300 font-medium text-gray-700 hover:text-[#0001ff] text-sm"
                        onMouseEnter={() => setIsExpertisesOpen(true)}
                        onMouseLeave={() => setIsExpertisesOpen(false)}
                      >
                        <span>Expertises</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpertisesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div 
                        className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-soft border border-gray-100 transition-all duration-300 ${
                          isExpertisesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                        onMouseEnter={() => setIsExpertisesOpen(true)}
                        onMouseLeave={() => setIsExpertisesOpen(false)}
                      >
                        {expertises.map((expertise) => (
                          <Link
                            key={expertise.label}
                            href={expertise.href}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0001ff]/10 hover:text-[#0001ff] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {expertise.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href="/equipe"
                      className="transition-all duration-300 font-medium text-gray-700 hover:text-[#0001ff] text-sm"
                    >
                      Équipe
                    </Link>
                    
                    <Link
                      href="/carrieres"
                      className="transition-all duration-300 font-medium text-gray-700 hover:text-[#0001ff] text-sm"
                    >
                      Carrière
                    </Link>
                    
                    {/* Language Selector */}
                    <div className="relative group">
                      <button className="flex items-center space-x-1 transition-all duration-300 font-medium text-gray-700 hover:text-primary text-sm">
                        <span>{selectedLanguage}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-soft border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                        {languages.map((lang) => (
                          <button
                            key={lang}
                            onClick={() => setSelectedLanguage(lang)}
                            className={`block w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors duration-300 text-sm ${
                              lang === selectedLanguage ? "text-primary font-semibold" : "text-gray-700"
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-[#0001ff] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0b062b] transition-all duration-300"
                    >
                      Nous contacter
                    </button>
                  </motion.div>

                  {/* Mobile Menu Button */}
                  <motion.button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6 text-gray-700" />
                    ) : (
                      <Menu className="w-6 h-6 text-gray-700" />
                    )}
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && !isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white rounded-lg shadow-soft mt-2 py-4 border border-gray-100"
            >
              <Link
                href="/"
                className="block px-6 py-3 text-gray-700 hover:bg-[#0001ff]/10 hover:text-[#0001ff] transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                A propos
              </Link>
              
              {/* Mobile Expertises */}
              <div className="px-6 py-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Expertises</p>
                {expertises.map((expertise) => (
                  <Link
                    key={expertise.label}
                    href={expertise.href}
                    className="block pl-4 py-2 text-gray-600 hover:text-[#0001ff] transition-colors duration-300 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {expertise.label}
                  </Link>
                ))}
              </div>
              
              <Link
                href="/equipe"
                className="block px-6 py-3 text-gray-700 hover:bg-[#0001ff]/10 hover:text-[#0001ff] transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Équipe
              </Link>
              
              <Link
                href="/carrieres"
                className="block px-6 py-3 text-gray-700 hover:bg-[#0001ff]/10 hover:text-[#0001ff] transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Carrière
              </Link>
              
              <div className="px-6 py-3 border-t border-gray-100 mt-2">
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                        lang === selectedLanguage
                          ? "bg-[#0001ff] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pt-3">
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#0001ff] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0b062b] transition-all duration-300"
                >
                  Nous contacter
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Floating buttons when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 right-6 z-50 flex items-center space-x-4"
          >
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-soft transition-all duration-300 font-medium text-gray-700 hover:text-[#0001ff] text-sm">
                <span>{selectedLanguage}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-soft border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`block w-full px-4 py-2 text-left hover:bg-[#0001ff]/10 transition-colors duration-300 text-sm ${
                      lang === selectedLanguage ? "text-[#0001ff] font-semibold" : "text-gray-700"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#0001ff] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0b062b] transition-all duration-300 shadow-soft"
            >
              Nous contacter
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navbar; 