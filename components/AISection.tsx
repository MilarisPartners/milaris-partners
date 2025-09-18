"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Brain, Target, Clock, TrendingUp, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const AISection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const features = [
    {
      key: "identifyBuyers",
      icon: Target,
      value: "500k+",
    },
    {
      key: "qualifyTargets", 
      icon: Brain,
      value: "85%",
    },
    {
      key: "saveSourcing",
      icon: Clock,
      value: "2-4x",
    },
    {
      key: "objectiveValuation",
      icon: TrendingUp,
      value: "95%",
    },
    {
      key: "marketKnowledge",
      icon: Globe,
      value: "50+",
    },
  ];

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Ajuster la plage pour un effet plus progressif
      if (value > 0.2 && value < 0.8) {
        // Normaliser la valeur entre 0 et 1 dans la plage active
        const normalizedValue = (value - 0.2) / 0.6;
        const index = Math.floor(normalizedValue * features.length);
        setActiveIndex(Math.min(index, features.length - 1));
      } else if (value <= 0.2) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(features.length - 1);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, features.length]);

  const stats = [
    { key: "data" },
    { key: "transactions" },
    { key: "accuracy" },
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-[#0001ff]/5 to-gray-50">
      {/* Version mobile simplifiée ou version desktop avec scroll */}
      <div className={isMobile ? "" : "h-[200vh] sm:h-[250vh] relative"}>
        {/* Contenu - sticky seulement sur desktop */}
        <div className={isMobile ? "py-10" : "sticky top-0 h-screen flex items-center py-10 sm:py-20"}>
          <div className="container-custom w-full">
            <div className="max-w-6xl mx-auto">
              {/* Progress Bar - cachée sur mobile */}
              {!isMobile && (
                <div className="w-full h-1 bg-gray-200 rounded-full mb-8 sm:mb-12 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] rounded-full"
                    style={{ width: progressWidth }}
                  />
                </div>
              )}

              {/* Titre */}
              <motion.h2 
                className="heading-2 font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-[#0b062b] leading-tight px-4 sm:px-6 lg:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t("aiSection.title.part1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
                  {t("aiSection.title.highlight")}
                </span>{" "}
                {t("aiSection.title.part2")}
              </motion.h2>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-0">
                {/* Left Column - Fixe */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Stats - Simplifiées sur mobile */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                    {stats.map((stat, index) => (
                      <div key={stat.key} className="text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0001ff]">
                          {t(`aiSection.stats.${stat.key}.value`)}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500">
                          {t(`aiSection.stats.${stat.key}.label`)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {t("aiSection.description")}
                  </p>
                </motion.div>

                {/* Right Column - Features qui changent de couleur */}
                <div className="relative">
                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      const isActive = index === activeIndex;
                      
                      return (
                        <motion.div
                          key={feature.key}
                          className={`
                            relative py-3 sm:py-4 px-3 sm:px-5 rounded-lg border-2 transition-all duration-700
                            ${isActive && !isMobile
                              ? "border-[#0001ff] bg-[#0001ff] text-white shadow-xl scale-[1.01] sm:scale-[1.02]"
                              : "border-gray-200 bg-white/80 backdrop-blur-sm text-gray-700 hover:border-[#0001ff]/50"
                            }
                          `}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.2 + index * 0.08,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
                              <motion.div
                                animate={{ 
                                  rotate: isActive && !isMobile ? 360 : 0,
                                  scale: isActive && !isMobile ? 1.1 : 1
                                }}
                                transition={{ duration: 0.7 }}
                                className="flex-shrink-0"
                              >
                                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive && !isMobile ? 'text-white' : 'text-[#0001ff]'}`} />
                              </motion.div>
                              <div className="flex-1">
                                <p className="text-xs sm:text-sm lg:text-base font-medium">
                                  {t(`aiSection.features.${feature.key}.title`)}
                                </p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <span className={`text-sm sm:text-base lg:text-lg font-bold ${isActive && !isMobile ? 'text-white' : 'text-[#0001ff]'}`}>
                                  {feature.value}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection; 