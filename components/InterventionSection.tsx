"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Building2, Globe2, Handshake, TrendingUp, Users, Wallet } from "lucide-react";
import Link from "next/link";

const InterventionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const criteria = [
    {
      icon: Building2,
      text: "Société de 5 à 150m€\nde chiffre d'affaires"
    },
    {
      icon: Globe2,
      text: "Activité majoritairement\nen Europe"
    },
    {
      icon: Handshake,
      text: "Transaction minoritaire\nou majoritaire"
    }
  ];

  const services = [
    {
      title: "Conseil en cession",
      description: "Notre équipe d'experts vous accompagne dans toutes les étapes de votre projet de cession. Avec une approche personnalisée et un réseau international, nous maximisons la valeur de votre transaction.",
      icon: TrendingUp,
      link: "/fusions-acquisitions",
      color: "from-primary to-primary-dark"
    },
    {
      title: "Conseil en acquisition",
      description: "Nous identifions et qualifions les meilleures opportunités d'acquisition pour votre croissance. Notre expertise sectorielle et notre réseau nous permettent de vous proposer des cibles stratégiques.",
      icon: Users,
      link: "/fusions-acquisitions",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Conseil en financement",
      description: "Nous structurons et négocions vos financements pour optimiser votre structure capitalistique. Notre connaissance des investisseurs et des solutions de financement garantit le succès de vos opérations.",
      icon: Wallet,
      link: "/levee-de-fonds",
      color: "from-green-500 to-green-600"
    }
  ];

  // Calculer quelle carte afficher en fonction du scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0.25 && value < 0.75) {
        const normalizedValue = (value - 0.25) / 0.5;
        const cardIndex = Math.floor(normalizedValue * services.length);
        setActiveCard(Math.min(cardIndex, services.length - 1));
      } else if (value <= 0.25) {
        setActiveCard(0);
      } else {
        setActiveCard(services.length - 1);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, services.length]);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Hauteur pour créer l'espace de scroll */}
      <div className="h-[200vh] relative">
        {/* Contenu fixe pendant le scroll */}
        <div className="sticky top-0 h-screen flex items-center py-16 lg:py-20">
          <div className="container-custom w-full">
            <div className="max-w-6xl mx-auto">
              {/* Titre */}
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Notre périmètre d'intervention
              </motion.h2>

              {/* Grille deux colonnes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Colonne gauche - Critères (fixe) */}
                <div className="lg:pr-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6 lg:space-y-8"
                  >
                    {criteria.map((criterion, index) => {
                      const Icon = criterion.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <p className="text-lg lg:text-xl font-medium text-gray-800 leading-relaxed whitespace-pre-line pt-1">
                            {criterion.text}
                          </p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Colonne droite - Services avec effet de superposition */}
                <div className="relative h-[450px] lg:h-[500px]">
                  {/* Cartes empilées */}
                  <div className="relative h-full">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const isActive = index === activeCard;
                      const isPast = index < activeCard;
                      
                      return (
                        <motion.div
                          key={index}
                          className={`absolute inset-0 bg-white rounded-2xl p-8 lg:p-10 shadow-xl ${
                            isActive ? 'z-30' : isPast ? 'z-10' : 'z-20'
                          }`}
                          initial={{ opacity: 0, y: 50, scale: 0.95 }}
                          animate={{
                            opacity: isActive ? 1 : isPast ? 0.2 : 0,
                            y: isActive ? 0 : isPast ? -50 : 60,
                            scale: isActive ? 1 : isPast ? 0.9 : 0.85,
                            filter: isActive ? 'blur(0px)' : isPast ? 'blur(6px)' : 'blur(10px)',
                          }}
                          transition={{ 
                            duration: 1, 
                            ease: [0.43, 0.13, 0.23, 0.96],
                            opacity: { duration: 0.6 }
                          }}
                        >
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.03] rounded-2xl`} />

                          {/* Contenu de la carte */}
                          <div className="relative h-full flex flex-col justify-between">
                            {/* Icône et titre */}
                            <div>
                              <div className="flex items-center space-x-4 mb-6">
                                <motion.div 
                                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}
                                  animate={{
                                    scale: isActive ? [1, 1.05, 1] : 1
                                  }}
                                  transition={{ duration: 1.5, repeat: isActive ? Infinity : 0, repeatDelay: 3 }}
                                >
                                  <Icon className="w-7 h-7 text-white" />
                                </motion.div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                  {service.title}
                                </h3>
                              </div>

                              {/* Description */}
                              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                {service.description}
                              </p>
                            </div>

                            {/* Bouton */}
                            <div className="mt-8">
                              <Link href={service.link}>
                                <motion.button
                                  className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                                    isActive 
                                      ? 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg' 
                                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                  }`}
                                  whileHover={isActive ? { scale: 1.05 } : {}}
                                  whileTap={isActive ? { scale: 0.95 } : {}}
                                  disabled={!isActive}
                                >
                                  <span>En savoir plus</span>
                                  <motion.div
                                    animate={isActive ? { x: [0, 5, 0] } : {}}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    <ArrowRight className="w-5 h-5" />
                                  </motion.div>
                                </motion.button>
                              </Link>
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

export default InterventionSection; 