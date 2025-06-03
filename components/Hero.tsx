"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Luxurious gradient background avec bleus plus profonds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050e1f] via-[#0a1628] to-[#162644]">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22pattern%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%20fill%3D%22rgba(255%2C255%2C255%2C0.03)%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23pattern)%22%2F%3E%3C%2Fsvg%3E')]" />
        
        {/* Elegant glow effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#162644]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0a1628]/30 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="container-custom relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center"
        >
          {/* Left content - alignement corrigé */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-10"
            >
              <div className="w-1.5 h-1.5 bg-[#c9a961] rounded-full animate-pulse" />
              <span className="text-xs font-light text-white/80 tracking-widest uppercase">Excellence • Innovation • Proximité</span>
            </motion.div>

            {/* Main heading avec Playfair Display */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 font-playfair"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight">
                Votre partenaire
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight">
                de <span className="font-normal italic text-[#c9a961]">confiance</span>
              </span>
              <span className="block text-2xl md:text-3xl font-light text-white/70 mt-6 font-sans">
                pour la transmission d'entreprise
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-12 font-light text-white/60 max-w-xl leading-relaxed"
            >
              Accompagnement sur mesure dédié aux TPE et PME
              pour optimiser la valeur de votre transaction
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative bg-[#c9a961] text-[#050e1f] px-8 py-4 rounded-none font-medium text-base transition-all duration-500 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Démarrer votre projet
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-none font-light text-base transition-all duration-300 hover:bg-white/5 hover:border-white/50 backdrop-blur-sm">
                En savoir plus
              </button>
            </motion.div>
          </div>

          {/* Right KPIs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            {/* Decorative line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
            
            <div className="space-y-8 lg:pl-12">
              {/* KPI 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                    <TrendingUp className="w-8 h-8 text-[#c9a961]" />
                  </div>
                  <div>
                    <div className="text-4xl font-light text-white mb-2">
                      {isMounted ? (
                        <>
                          <CountUp end={5} duration={2.5} delay={0.5} />-
                          <CountUp end={250} duration={2.5} delay={0.5} suffix=" M€" />
                        </>
                      ) : (
                        <span>5-250 M€</span>
                      )}
                    </div>
                    <div className="text-sm text-white/50 leading-relaxed">Chiffre d'affaires des<br />sociétés accompagnées</div>
                  </div>
                </div>
              </motion.div>

              {/* KPI 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                    <Users className="w-8 h-8 text-[#c9a961]" />
                  </div>
                  <div>
                    <div className="text-4xl font-light text-white mb-2">
                      {isMounted ? (
                        <CountUp end={10} duration={2.5} delay={0.7} prefix="+" />
                      ) : (
                        <span>+10</span>
                      )}
                    </div>
                    <div className="text-sm text-white/50 leading-relaxed">Sociétés accompagnées<br />actuellement à la vente<br />ou à l'achat</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative element */}
              <div className="mt-12 flex items-center gap-3">
                <div className="w-12 h-px bg-[#c9a961]" />
                <span className="text-xs text-white/40 tracking-widest uppercase">France • Italie • Luxembourg</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Luxury scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-light">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 