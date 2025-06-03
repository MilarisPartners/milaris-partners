"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe, Heart } from "lucide-react";

const Expertise = () => {
  const sectors = [
    {
      icon: ShoppingBag,
      title: "Biens de consommation",
      description: "Expertise approfondie dans le secteur des biens de consommation courante et durables",
    },
    {
      icon: Globe,
      title: "Technologies / Media / Telecom",
      description: "Accompagnement des entreprises innovantes dans leur transformation digitale",
    },
    {
      icon: Heart,
      title: "Santé",
      description: "Conseil spécialisé pour les acteurs du secteur médical et pharmaceutique",
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-[#050e1f] via-[#0a1628] to-[#162644] relative overflow-hidden">
      {/* Motif subtil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#162644] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a1628] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-4 font-playfair">
            Notre expertise <span className="text-[#c9a961] italic">sectorielle</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Une connaissance approfondie des dynamiques de marché dans trois secteurs clés
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Effet de shine au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a961]/20 transition-colors duration-300">
                <sector.icon className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4 font-playfair">{sector.title}</h3>
              <p className="text-white/60">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 