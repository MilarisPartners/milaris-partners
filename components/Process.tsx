"use client";

import { motion } from "framer-motion";
import { Briefcase, Search, Target, Handshake, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Évaluation initiale",
      description: "Analyse approfondie de votre entreprise et de vos objectifs",
      icon: Briefcase,
      color: "from-[#c9a961]/20 to-[#c9a961]/10",
    },
    {
      number: "02",
      title: "Valorisation",
      description: "Détermination de la juste valeur de votre entreprise",
      icon: Search,
      color: "from-[#b89a4f]/20 to-[#b89a4f]/10",
    },
    {
      number: "03",
      title: "Ciblage stratégique",
      description: "Identification des meilleurs partenaires potentiels",
      icon: Target,
      color: "from-[#c9a961]/20 to-[#c9a961]/10",
    },
    {
      number: "04",
      title: "Négociation",
      description: "Accompagnement expert dans toutes les discussions",
      icon: Handshake,
      color: "from-[#b89a4f]/20 to-[#b89a4f]/10",
    },
    {
      number: "05",
      title: "Finalisation",
      description: "Sécurisation et clôture de la transaction",
      icon: CheckCircle,
      color: "from-[#c9a961]/20 to-[#c9a961]/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f9fa] subtle-grid">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] mb-4 font-playfair">
            Notre processus <span className="text-[#162644] italic">d'accompagnement</span>
          </h2>
          <p className="text-xl text-[#424242] max-w-3xl mx-auto font-light">
            Une méthodologie éprouvée pour maximiser la valeur de votre transaction
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#c9a961]/30 to-transparent hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 lg:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Contenu */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 shadow-lg border border-gray-100"
                >
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-[#c9a961]" />
                    </div>
                    <div>
                      <span className="text-[#c9a961] font-bold text-2xl">{step.number}</span>
                      <h3 className="text-xl font-medium text-[#050e1f]">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#424242]">{step.description}</p>
                </motion.div>
              </div>

              {/* Point central */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#c9a961] rounded-full border-4 border-white hidden lg:block z-10"
              >
                <div className="absolute inset-0 bg-[#c9a961] rounded-full animate-ping" />
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
          className="text-center mt-16"
        >
          <p className="text-lg text-[#424242] mb-6">
            Prêt à franchir le pas ? Découvrez comment nous pouvons vous accompagner.
          </p>
          <button className="bg-[#c9a961] text-[#050e1f] px-8 py-4 font-medium hover:bg-[#b89a4f] transition-colors duration-300">
            Démarrer votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 