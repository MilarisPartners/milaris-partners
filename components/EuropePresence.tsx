"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const EuropePresence = () => {
  const cities = [
    { name: "Paris", country: "France" },
    { name: "Milan", country: "Italie" },
    { name: "Luxembourg", country: "Luxembourg" },
    { name: "Berlin", country: "Allemagne" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Villes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                Notre présence <span className="text-primary">Européenne</span>
              </h2>
              
              <div className="space-y-4">
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                        {city.name}
                      </p>
                      <p className="text-sm text-gray-500">{city.country}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Colonne droite - Carte placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gray-100 rounded-2xl h-[400px] overflow-hidden shadow-lg">
                {/* Placeholder pour la carte */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400 text-lg font-medium">Carte de l'Europe (PNG à ajouter)</p>
                </div>
                
                {/* Points animés pour les villes */}
                <div className="absolute inset-0">
                  {/* Paris */}
                  <motion.div
                    className="absolute top-[40%] left-[45%] w-3 h-3 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Milan */}
                  <motion.div
                    className="absolute top-[55%] left-[55%] w-3 h-3 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  {/* Luxembourg */}
                  <motion.div
                    className="absolute top-[38%] left-[50%] w-3 h-3 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  {/* Berlin */}
                  <motion.div
                    className="absolute top-[30%] left-[60%] w-3 h-3 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EuropePresence; 