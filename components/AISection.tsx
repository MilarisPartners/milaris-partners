"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Brain, Target, Clock, TrendingUp, Globe } from "lucide-react";

const AISection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const features = [
    {
      text: "Identifier des acquéreurs hors radar",
      icon: Target,
      stat: "2000+"
    },
    {
      text: "Qualifier rapidement des cibles pertinentes", 
      icon: Brain,
      stat: "85%"
    },
    {
      text: "Gagner des semaines sur la phase de sourcing",
      icon: Clock,
      stat: "3-5x"
    },
    {
      text: "Objectiver la valorisation d'une cible",
      icon: TrendingUp,
      stat: "95%"
    },
    {
      text: "Market knowledge puissant secteur agnostique",
      icon: Globe,
      stat: "50+"
    }
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

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hauteur fixe pour créer l'espace de scroll */}
      <div className="h-[250vh] relative">
        {/* Contenu fixe pendant le scroll */}
        <div className="sticky top-0 h-screen flex items-center py-20">
          <div className="container-custom w-full">
            <div className="max-w-6xl mx-auto">
              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full mb-12 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                  style={{ width: progressWidth }}
                />
              </div>

              {/* Titre */}
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Notre{" "}
                <span className="text-primary">
                  Intelligence Artificielle
                </span>
                <br />
                au service de vos transactions
              </motion.h2>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Column - Fixe */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {["5M+", "250k", "99.9%"].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {stat}
                        </div>
                        <div className="text-xs text-gray-500">
                          {["Données", "Transactions", "Précision"][index]}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                    <span className="font-bold text-2xl text-primary block mb-4">
                      Technologie IA propriétaire
                    </span> 
                    développée par Milaris Partners. En exploitant des millions de données 
                    de marché et d'investisseurs, notre moteur de matching interne révèle 
                    la valeur cachée dans l'espace fragmenté des fusions-acquisitions de 
                    petites et moyennes capitalisations — là où les réseaux traditionnels 
                    échouent et où la fiabilité est essentielle.
                  </p>
                </motion.div>

                {/* Right Column - Features qui changent de couleur */}
                <div className="relative">
                  {/* Arrow qui suit l'item actif */}
                  <motion.div
                    className="absolute -left-12 hidden lg:flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full"
                    animate={{ 
                      y: activeIndex >= 0 ? activeIndex * 76 + 20 : -40,
                      opacity: activeIndex >= 0 ? 1 : 0,
                      scale: activeIndex >= 0 ? 1 : 0.8,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </motion.div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      const isActive = index === activeIndex;
                      
                      return (
                        <motion.div
                          key={index}
                          className={`
                            relative py-4 px-5 rounded-xl border-2 transition-all duration-700
                            ${isActive
                              ? "border-primary bg-primary text-white shadow-xl scale-[1.02]"
                              : "border-gray-200 bg-white/80 backdrop-blur-sm text-gray-700"
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
                            <div className="flex items-center space-x-3">
                              <motion.div
                                animate={{ 
                                  rotate: isActive ? 360 : 0,
                                  scale: isActive ? 1.1 : 1
                                }}
                                transition={{ duration: 0.7 }}
                              >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                              </motion.div>
                              <p className="text-base lg:text-lg font-medium">
                                {feature.text}
                              </p>
                            </div>
                            
                            <motion.div 
                              className={`font-bold ${isActive ? 'text-white' : 'text-primary'}`}
                              animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              {feature.stat}
                            </motion.div>
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