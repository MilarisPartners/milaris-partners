"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Globe3D from "./Globe3D";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-offwhite">
      {/* Globe terrestre en arrière-plan */}
      <Globe3D />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Phrase catchy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-8 font-light"
          >
            À destination des sociétés et fonds d'investissement
          </motion.p>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
          >
            Le M&A, simplement.
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Milaris Partners accompagne les dirigeants de TPE/PME, 
            les actionnaires et les investisseurs à vendre, acquérir 
            ou financer des entreprises dans les meilleures conditions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Planifier un échange
            </button>
            <button 
              onClick={scrollToAbout}
              className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-medium hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Ce qui change chez nous ?
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={scrollToAbout}
        >
          <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-primary transition-colors">
            <ArrowDown className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default Hero; 