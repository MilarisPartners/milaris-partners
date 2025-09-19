"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe, Heart, Briefcase, Factory, Zap, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const Expertise = () => {
  const { t } = useTranslation();
  const [backgroundElements, setBackgroundElements] = useState<{
    background: string;
    left: string;
    top: string;
    animateX: number[];
    animateY: number[];
    duration: number;
  }[]>([]);

  useEffect(() => {
    // Générer moins d'éléments sur mobile
    const isMobile = window.innerWidth < 640;
    const elementCount = isMobile ? 3 : 6;
    
    const elements = [...Array(elementCount)].map((_, i) => ({
      background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(14, 165, 233, 0.1)'} 0%, transparent 70%)`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animateX: isMobile ? [0, Math.random() * 50 - 25, 0] : [0, Math.random() * 100 - 50, 0],
      animateY: isMobile ? [0, Math.random() * 50 - 25, 0] : [0, Math.random() * 100 - 50, 0],
      duration: 20 + Math.random() * 10,
    }));
    setBackgroundElements(elements);
  }, []);

  const sectors = [
    {
      key: 'consumer',
      icon: ShoppingBag,
      gradient: "from-[#0001ff] to-[#3E8BFF]",
      bgGradient: "from-[#0001ff]/20 to-[#3E8BFF]/20",
      shadowColor: "shadow-[#0001ff]/30",
    },
    {
      key: 'tmt',
      icon: Globe,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      shadowColor: "shadow-purple-500/30",
    },
    {
      key: 'healthcare',
      icon: Heart,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/20 to-orange-500/20",
      shadowColor: "shadow-red-500/30",
    },
    {
      key: 'industry',
      icon: Factory,
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-500/20 to-yellow-500/20",
      shadowColor: "shadow-amber-500/30",
    },
    {
      key: 'services',
      icon: Briefcase,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/20 to-blue-500/20",
      shadowColor: "shadow-indigo-500/30",
    },
    {
      key: 'energy',
      icon: Zap,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      shadowColor: "shadow-green-500/30",
    },
  ];

  return (
    <section id="expertise" className="section-padding lg:py-28 bg-gradient-to-br from-white via-[#0001ff]/5 to-[#3E8BFF]/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {backgroundElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full"
            style={{
              background: element.background,
              left: element.left,
              top: element.top,
            }}
            animate={{
              x: element.animateX,
              y: element.animateY,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div className="flex justify-center mb-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#0001ff] animate-pulse" />
            </motion.div>
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4 px-4 sm:px-6 lg:px-0">
              {t("expertise.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                {t("expertise.titleHighlight")}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              {t("expertise.subtitle")}
            </p>
          </motion.div>

          {/* Grille de secteurs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.key}
                initial={{ opacity: 0, y: 20, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl ${sector.shadowColor} hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50`}
              >
                {/* Gradient overlay animé */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${sector.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0.8, rotate: -45 }}
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Particules flottantes - cachées sur mobile */}
                <div className="hidden sm:block absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{ 
                        x: 20 + i * 30,
                        y: 100,
                      }}
                      animate={{ 
                        y: -20,
                        opacity: [0, 1, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative">
                  {/* Icône avec animation */}
                  <motion.div 
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${sector.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg relative`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <sector.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-white"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Titre avec effet de survol */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0b062b] mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0b062b] group-hover:to-[#0001ff] transition-all duration-300">
                    {t(`expertise.sectors.${sector.key}.title`)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {t(`expertise.sectors.${sector.key}.description`)}
                  </p>

                  {/* Indicateur de hover */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.gradient}`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise; 