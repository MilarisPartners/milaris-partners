"use client";

import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const EuropePresence = () => {
  const { t, language } = useTranslation();
  
  const cities = (t("europePresence.cities") as unknown as any[]).map((city: any, index: number) => ({
    ...city,
    delay: index * 0.1
  }));

  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#0001ff]/5 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#3E8BFF]/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[#0001ff]/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Titre centré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div className="flex justify-center mb-4">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#0001ff]" />
            </motion.div>
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4 px-4 sm:px-6 lg:px-0">
              {t("europePresence.title.part1")}{" "}
              {language === 'IT' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("europePresence.title.highlight")}
                </span>
              ) : language === 'EN' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("europePresence.title.highlight")}
                </span>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("europePresence.title.highlight")}
                </span>
              )}
              {t("europePresence.title.part2") && ` ${t("europePresence.title.part2")}`}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
              {t("europePresence.description")}
            </p>
          </motion.div>
          
          {/* Villes sur une ligne */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {cities.map((city) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: city.delay }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Icône avec fond gradient */}
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-lg relative overflow-hidden"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0.3 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  
                  {/* Nom de la ville */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0b062b] mb-1 group-hover:text-[#0001ff] transition-colors duration-300">
                    {city.name}
                  </h3>
                  
                  {/* Pays */}
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">
                    {city.country}
                  </p>
                  
                  {/* Ligne décorative */}
                  <motion.div
                    className="mt-3 h-1 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 0.8, delay: city.delay + 0.3 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EuropePresence; 