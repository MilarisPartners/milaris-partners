"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const offices = [
    { city: "Paris", country: "France" },
    { city: "Milan", country: "Italie" },
    { city: "Luxembourg", country: "Luxembourg" },
  ];

  return (
    <>
      <footer id="contact" className="bg-[#050e1f] text-white pt-20 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo et CTA */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image 
                  src="/logo-white.png" 
                  alt="Milaris Partners"
                  width={250}
                  height={50}
                  className="h-12 w-auto mb-4"
                />
                
                <p className="text-white/60 italic text-lg font-light">L'excellence au service de votre réussite</p>
              </div>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#c9a961] text-[#050e1f] px-8 py-4 font-medium transition-all duration-300 hover:bg-[#b89a4f] flex items-center space-x-2 group"
              >
                <span>Démarrer votre projet</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Bureaux */}
            <div>
              <h4 className="text-lg font-normal mb-4 text-[#c9a961] font-playfair">Nos Bureaux</h4>
              <div className="space-y-3">
                {offices.map((office) => (
                  <div key={office.city} className="flex items-start">
                    <MapPin className="w-4 h-4 text-[#c9a961] mt-1 mr-2" />
                    <div>
                      <p className="font-medium">{office.city}</p>
                      <p className="text-sm text-white/60">{office.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-normal mb-4 text-[#c9a961] font-playfair">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:contact@miralispartners.com" 
                  className="flex items-center hover:text-[#c9a961] transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">contact@miralispartners.com</span>
                </a>
                <a 
                  href="tel:+33100000000" 
                  className="flex items-center hover:text-[#c9a961] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+33 1 00 00 00 00</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-[#c9a961] transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white/40 mb-4 md:mb-0">
                © 2024 Milaris Partners
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="hover:text-[#c9a961] transition-colors text-white/60">
                  Mentions légales
                </Link>
                <Link href="#" className="hover:text-[#c9a961] transition-colors text-white/60">
                  Conditions Générales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Footer; 