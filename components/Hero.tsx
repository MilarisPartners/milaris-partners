"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Globe3D from "./Globe3D";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";

const Hero = () => {
  const { t, language } = useTranslation();

  const calendlyLink = language === 'IT' 
    ? 'https://calendly.com/matteo-milarispartners'
    : 'https://calendly.com/paul-milarispartners/30min';

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image de Paris en arrière-plan avec parallaxe */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Image avec flou léger global - Paris pour FR, Milan pour IT, Berlin pour DE, London pour EN */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={getAssetPath(
              language === 'IT' ? "/milan-aerial.jpg" : 
              language === 'DE' ? "/berlin-aerial.jpg" : 
              language === 'EN' ? "/london-aerial.jpg" :
              "/paris-aerial.jpg"
            )}
            alt={
              language === 'IT' ? "Milan aerial view" : 
              language === 'DE' ? "Berlin aerial view" : 
              language === 'EN' ? "London aerial view" :
              "Paris aerial view"
            }
            fill
            className="object-cover"
            style={{ filter: 'blur(4px)' }}
            priority
            quality={90}
            key={`hero-bg-${language}`}
          />
        </div>
        
        {/* Overlay gradient pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0001ff]/20 via-transparent to-[#0001ff]/20" />
        
        {/* Rectangle avec flou progressif au centre - flou augmente vers le centre */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Couche externe - flou léger */}
          <div 
            className="absolute w-full max-w-5xl h-[50%]"
            style={{
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              maskImage: 'radial-gradient(ellipse 100% 100% at center, transparent 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, transparent 0%, rgba(0,0,0,0.3) 60%, transparent 100%)'
            }}
          />
          {/* Couche intermédiaire - flou moyen */}
          <div 
            className="absolute w-full max-w-4xl h-[45%]"
            style={{
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              maskImage: 'radial-gradient(ellipse 100% 100% at center, transparent 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, transparent 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
            }}
          />
          {/* Couche centrale - flou fort */}
          <div 
            className="absolute w-full max-w-3xl h-[40%]"
            style={{
              backdropFilter: 'blur(9px)',
              WebkitBackdropFilter: 'blur(9px)',
              maskImage: 'radial-gradient(ellipse 100% 100% at center, transparent 0%, rgba(0,0,0,0.5) 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, transparent 0%, rgba(0,0,0,0.5) 40%, transparent 100%)'
            }}
          />
        </div>
      </motion.div>
      
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
            <span className="text-white drop-shadow-2xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%),_0_4px_20px_rgb(0_0_0_/_50%)]">
              {t("hero.title")}
            </span>
          </motion.h1>
          
          {/* Sous-titre */}
          {t("hero.subtitle") && t("hero.subtitle") !== "hero.subtitle" && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-white drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_70%)] mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              {t("hero.subtitle")}
            </motion.p>
          )}
          

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <motion.a 
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0001ff] text-white btn-responsive rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group w-full sm:w-auto sm:min-w-[200px] shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold">{t("hero.cta.scheduleCall")}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.button 
              onClick={scrollToAbout}
              className={`bg-white/95 backdrop-blur-md text-[#0b062b] border-2 border-white/50 btn-responsive rounded-lg hover:border-white hover:bg-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden w-full sm:w-auto shadow-xl font-semibold ${language === 'IT' ? 'sm:min-w-[280px]' : 'sm:min-w-[200px]'}`}
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
        style={{ opacity }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer group"
          onClick={scrollToAbout}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:shadow-2xl transition-all duration-300 shadow-xl">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#0001ff] group-hover:text-[#0b062b] transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;