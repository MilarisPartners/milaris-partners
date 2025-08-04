"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Wallet, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { translations } from '@/locales/translations';

const InterventionSection = () => {
  const { t, language } = useTranslation();
  
  const calendlyLink = language === 'IT' 
    ? 'https://calendly.com/matteo-milarispartners'
    : 'https://calendly.com/paul-varennepartners/30min';
  const services = [
    {
      title: "Conseil en cession",
      description: "Maximisez la valeur de votre entreprise lors de sa transmission",
      icon: TrendingUp,
      link: "/cession-entreprise",
      features: [
        "Entreprises de 5 à 150M€ CA",
        "Cession totale ou partielle",
        "Processus structuré sur 6-9 mois"
      ],
      color: "from-[#0001ff] to-[#3E8BFF]"
    },
    {
      title: "Conseil en acquisition",
      description: "Identifiez et sécurisez les meilleures opportunités de croissance externe",
      icon: Users,
      link: "/acquisition-entreprise",
      features: [
        "Ciblage stratégique européen",
        "Approche confidentielle",
        "Négociation optimisée"
      ],
      color: "from-[#3E8BFF] to-[#0001ff]"
    },
    {
      title: "Conseil en financement",
      description: "Structurez le financement optimal pour accélérer votre développement",
      icon: Wallet,
      link: "/financement",
      features: [
        "Levée de fonds growth",
        "Dette & financements hybrides",
        "Réseau d'investisseurs qualifiés"
      ],
      color: "from-[#0001ff] to-[#3E8BFF]"
    }
  ];

  const cards = translations[language].interventionSection.cards;

  const iconColorList = [
    { icon: TrendingUp, color: "from-[#0001ff] to-[#3E8BFF]" },
    { icon: Users, color: "from-[#3E8BFF] to-[#0001ff]" },
    { icon: Wallet, color: "from-[#0001ff] to-[#3E8BFF]" },
  ];

  return (
    <section className="relative section-padding bg-[#0b062b] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-5 left-5 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#3E8BFF]/20 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-[#0001ff]/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-2 lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
              {t('interventionSection.title.part1')} {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8BFF] to-white">
                {t('interventionSection.title.highlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
              {t('interventionSection.subtitle')}
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card: any, idx: number) => {
              const { icon: Icon, color } = iconColorList[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
                      {card.description}
                    </p>
                    {/* Features */}
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {card.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3E8BFF] flex-shrink-0" />
                          <span className="text-white/80 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* CTA */}
                    <Link href={card.link}>
                      <motion.div
                        className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>{card.cta}</span>
                        <span className="text-[#3E8BFF]">→</span>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-sm sm:text-base text-white/60 mb-4 sm:mb-6 px-4 sm:px-0">
              {t('interventionSection.bottomCtaText')}
            </p>
            <a 
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-[#0001ff] text-white btn-responsive rounded-lg font-medium hover:bg-[#3E8BFF] transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('interventionSection.bottomCtaButton')}
                <span className="text-xl">→</span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterventionSection; 