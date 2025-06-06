"use client";

import { motion } from "framer-motion";
import { Search, FileText, Target, Handshake, DollarSign, Users, Presentation } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        {/* M&A Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Fusions et <span className="text-primary">Acquisitions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre équipe d'experts vous accompagne dans toutes les étapes de votre projet de cession ou d'acquisition. 
                Avec une approche personnalisée et un réseau international, nous maximisons la valeur de votre transaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Analyse</h4>
                    <p className="text-sm text-gray-600">Évaluation approfondie de votre entreprise</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Valorisation</h4>
                    <p className="text-sm text-gray-600">Détermination de la juste valeur</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ciblage</h4>
                    <p className="text-sm text-gray-600">Identification des acquéreurs potentiels</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Négociation</h4>
                    <p className="text-sm text-gray-600">Accompagnement jusqu'à la signature</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl overflow-hidden shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                <Handshake className="w-32 h-32 text-primary/30" />
              </div>
              <div className="absolute inset-0 subtle-grid opacity-30" />
            </div>
          </div>
        </motion.div>

        {/* Levée de fonds Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 bg-gradient-to-br from-blue-sky/5 to-blue-sky/10 rounded-3xl overflow-hidden shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                <DollarSign className="w-32 h-32 text-blue-sky/30" />
              </div>
              <div className="absolute inset-0 subtle-grid opacity-30" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Levée de <span className="text-blue-sky">fonds</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Accélérez votre croissance avec notre expertise en levée de fonds. Nous vous connectons avec les investisseurs 
                les plus pertinents et vous accompagnons dans la structuration et la négociation de votre financement.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-blue-sky/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-blue-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Plan</h4>
                    <p className="text-sm text-gray-600">Structuration de votre projet</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-blue-sky/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Réseau</h4>
                    <p className="text-sm text-gray-600">Accès à notre réseau d'investisseurs</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-blue-sky/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-6 h-6 text-blue-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Présentation</h4>
                    <p className="text-sm text-gray-600">Préparation des pitchs</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-blue-sky/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-blue-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Closing</h4>
                    <p className="text-sm text-gray-600">Finalisation du financement</p>
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