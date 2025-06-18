"use client";

import { motion } from "framer-motion";
import { Briefcase, Search, Target, Handshake, CheckCircle, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";
import Link from "next/link";

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      key: "discovery",
      icon: Briefcase,
      gradient: "from-[#0001ff] to-[#3E8BFF]",
      bgGradient: "from-[#0001ff]/10 to-[#3E8BFF]/10",
    },
    {
      key: "preparation",
      icon: Search,
      gradient: "from-[#3E8BFF] to-[#0001ff]",
      bgGradient: "from-[#3E8BFF]/10 to-[#0001ff]/10",
    },
    {
      key: "negotiation",
      icon: Target,
      gradient: "from-[#0001ff] to-[#3E8BFF]",
      bgGradient: "from-[#0001ff]/10 to-[#3E8BFF]/10",
    },
    {
      key: "closing",
      icon: Handshake,
      gradient: "from-[#3E8BFF] to-[#0001ff]",
      bgGradient: "from-[#3E8BFF]/10 to-[#0001ff]/10",
    },
  ];

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-white via-[#0001ff]/5 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 sm:top-40 left-5 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#0001ff]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 sm:bottom-40 right-5 sm:right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[#3E8BFF]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div className="flex justify-center mb-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#0001ff] animate-pulse" />
            </motion.div>
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4 px-4 sm:px-0">
              {t("process.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
                {t("process.titleHighlight")}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
              {t("process.subtitle")}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Ligne centrale animée */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-[#0001ff] via-[#3E8BFF] to-[#0001ff]"
                initial={{ y: "-100%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 lg:mb-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Contenu */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <motion.div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${step.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      <div>
                        <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
                          {t(`process.steps.${step.key}.number`)}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#0b062b]">{t(`process.steps.${step.key}.title`)}</h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{t(`process.steps.${step.key}.description`)}</p>
                  </motion.div>
                </div>

                {/* Point central animé */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2 + 0.2 
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-20"
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full shadow-lg" />
                    <motion.div
                      className="absolute inset-0 bg-[#0001ff] rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Espace pour l'autre côté */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-4 sm:px-0">
              {t("hero.cta.whatChanges")}
            </p>
            <Link href="/contact" passHref>
              <motion.button 
                className="bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] text-white btn-responsive rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t("hero.cta.scheduleCall")}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#3E8BFF] to-[#0001ff]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Process; 