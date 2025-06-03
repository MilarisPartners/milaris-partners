"use client";

import { motion } from "framer-motion";
import { Search, FileText, Target, Handshake, DollarSign, Users, Presentation } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white subtle-grid">
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
              <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] mb-4 font-playfair">
                Fusions et <span className="text-[#162644] italic">Acquisitions</span>
              </h2>
              <p className="text-lg text-[#424242] mb-8 font-light">
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
                  <div className="w-12 h-12 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Analyse</h4>
                    <p className="text-sm text-[#424242]">Évaluation approfondie de votre entreprise</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Valorisation</h4>
                    <p className="text-sm text-[#424242]">Détermination de la juste valeur</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Ciblage</h4>
                    <p className="text-sm text-[#424242]">Identification des acquéreurs potentiels</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Négociation</h4>
                    <p className="text-sm text-[#424242]">Accompagnement jusqu'à la signature</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] overflow-hidden border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <Handshake className="w-32 h-32 text-[#c9a961]/20" />
              </div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22pattern%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%20fill%3D%22rgba(0%2C0%2C0%2C0.02)%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23pattern)%22%2F%3E%3C%2Fsvg%3E')]" />
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
            <div className="order-2 lg:order-1 relative h-96 bg-gradient-to-br from-[#e9ecef] to-[#f8f9fa] overflow-hidden border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <DollarSign className="w-32 h-32 text-[#c9a961]/20" />
              </div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22pattern%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%20fill%3D%22rgba(0%2C0%2C0%2C0.02)%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23pattern)%22%2F%3E%3C%2Fsvg%3E')]" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] mb-4 font-playfair">
                Levée de <span className="text-[#162644] italic">fonds</span>
              </h2>
              <p className="text-lg text-[#424242] mb-8 font-light">
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
                  <div className="w-12 h-12 bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Business Plan</h4>
                    <p className="text-sm text-[#424242]">Structuration de votre projet</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Réseau</h4>
                    <p className="text-sm text-[#424242]">Accès à notre réseau d'investisseurs</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Présentation</h4>
                    <p className="text-sm text-[#424242]">Préparation des pitchs</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#050e1f]">Closing</h4>
                    <p className="text-sm text-[#424242]">Finalisation du financement</p>
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