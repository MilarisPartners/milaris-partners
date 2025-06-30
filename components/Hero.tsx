"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, X } from "lucide-react";
import Globe3D from "./Globe3D";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const [showVarennePopup, setShowVarennePopup] = useState(false);
  const { t, language } = useTranslation();

  const calendlyLink = language === 'IT' 
    ? 'https://calendly.com/matteo-varennepartners/30min'
    : 'https://calendly.com/paul-milarispartners/30min';

  useEffect(() => {
    // Vérifie si c'est la première visite
    const hasSeenPopup = localStorage.getItem('hasSeenVarennePopup');
    if (!hasSeenPopup) {
      setTimeout(() => {
        setShowVarennePopup(true);
        localStorage.setItem('hasSeenVarennePopup', 'true');
      }, 2000); // Affiche après 2 secondes
    }
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3E8BFF]/20 via-white to-[#0001ff]/10">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <motion.path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(0, 1, 255, 0.05)"
                strokeWidth="1"
                animate={{
                  d: [
                    "M 60 0 L 0 0 0 60",
                    "M 60 5 L 0 0 5 60",
                    "M 60 0 L 0 0 0 60",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.rect
                width="60"
                height="60"
                fill="none"
                stroke="rgba(62, 139, 255, 0.03)"
                strokeWidth="1"
                animate={{
                  width: [60, 58, 60],
                  height: [60, 58, 60],
                  x: [0, 1, 0],
                  y: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid-pattern)"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
        
        {/* Distortion overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 1, 255, 0.02) 50%, transparent 100%)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Moving gradient waves */}
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent, rgba(0, 1, 255, 0.03), transparent, rgba(62, 139, 255, 0.03), transparent)`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Globe terrestre en arrière-plan */}
      <div className="absolute inset-0 opacity-30 lg:opacity-50">
        <Globe3D />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-1 font-bold mb-6 sm:mb-8 relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary to-gray-900 animate-gradient-x">
              {t("hero.title")}
            </span>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-primary/20 blur-3xl -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            <span className="font-bold text-primary">{t("hero.description.part1")}</span> {t("hero.description.part2")}{" "}
            <span className="font-semibold text-blue-bright">{t("hero.description.part3")}</span>{t("hero.description.part4")} {t("hero.description.part5")} <span className="font-semibold text-blue-bright">{t("hero.description.part6")}</span> {t("hero.description.part7")}{" "}
            <span className="font-semibold text-blue-bright">{t("hero.description.part8")}</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <motion.a 
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0001ff] text-white btn-responsive rounded-lg font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group w-full sm:w-auto block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("hero.cta.scheduleCall")}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.button 
              onClick={scrollToAbout}
              className="bg-white/80 backdrop-blur-sm text-[#0b062b] border-2 border-[#0001ff]/30 btn-responsive rounded-lg font-medium hover:border-[#0001ff] hover:bg-[#0001ff]/5 hover:shadow-lg transition-all duration-300 relative overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.cta.whatChanges")}
            </motion.button>
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
          className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer group"
          onClick={scrollToAbout}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white to-[#0001ff]/10 border-2 border-[#0001ff]/30 flex items-center justify-center group-hover:border-[#0001ff] group-hover:shadow-lg transition-all duration-300">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#0001ff] group-hover:text-[#0b062b] transition-colors" />
          </div>
        </motion.div>
      </motion.div>

      {/* Varenne Partners Popup */}
      {showVarennePopup && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-2xl p-4 max-w-xs"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">
                {language === 'FR' && 'Anciennement'}
                {language === 'EN' && 'Formerly'}
                {language === 'IT' && 'Precedentemente'}
              </p>
              <p className="font-bold text-[#0b062b]">Varenne Partners</p>
            </div>
            <button
              onClick={() => setShowVarennePopup(false)}
              className="ml-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;