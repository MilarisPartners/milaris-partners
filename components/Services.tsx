"use client";

import { motion } from "framer-motion";
import { Search, FileText, Target, Handshake, DollarSign, Users, Presentation, Sparkles } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-20 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-primary/20 to-blue-sky/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tr from-blue-sky/20 to-primary/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* M&A Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <motion.h2 
                className="heading-2 font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Fusions et{" "}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-bright">
                    Acquisitions
                  </span>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
                </span>
              </motion.h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Notre équipe d'experts vous accompagne dans toutes les étapes de votre projet de cession ou d'acquisition. 
                Avec une approche personnalisée et un réseau international, nous maximisons la valeur de votre transaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-blue-bright rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Analyse</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Évaluation approfondie de votre entreprise</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group"
                >
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-blue-sky/5 border border-blue-sky/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-sky to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Valorisation</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Détermination de la juste valeur</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group"
                >
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-blue-bright rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Ciblage</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Identification des acquéreurs potentiels</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group"
                >
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-blue-sky/5 border border-blue-sky/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-sky to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Négociation</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Accompagnement jusqu'à la signature</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-primary/10 via-blue-sky/10 to-primary/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Handshake className="w-24 h-24 sm:w-32 sm:h-32 text-primary/40" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xs sm:text-sm font-medium text-gray-700">Excellence • Innovation • Résultats</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Levée de fonds Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-sky/10 via-primary/10 to-blue-sky/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <DollarSign className="w-24 h-24 sm:w-32 sm:h-32 text-blue-sky/40" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-sky/20" />
              <motion.div
                className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xs sm:text-sm font-medium text-gray-700">Croissance • Financement • Succès</p>
              </motion.div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.h2 
                className="heading-2 font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Levée de{" "}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-sky to-primary">
                    fonds
                  </span>
                  <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-sky animate-pulse" />
                </span>
              </motion.h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Accélérez votre croissance avec notre expertise en levée de fonds. Nous vous connectons avec les investisseurs 
                les plus pertinents et vous accompagnons dans la structuration et la négociation de votre financement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                                      <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-blue-sky/5 border border-blue-sky/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-sky to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Business Plan</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Structuration de votre projet</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group"
                >
                                      <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-blue-bright rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Réseau</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Accès à notre réseau d'investisseurs</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group"
                >
                                      <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-blue-sky/5 border border-blue-sky/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-sky to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Presentation className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Présentation</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Préparation des pitchs</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group"
                >
                                      <div className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-blue-bright rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Closing</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Finalisation du financement</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 