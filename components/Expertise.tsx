"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe, Heart, Briefcase, Factory, Zap } from "lucide-react";

const Expertise = () => {
  const sectors = [
    {
      icon: ShoppingBag,
      title: "Biens de consommation",
      description: "Expertise approfondie dans le secteur des biens de consommation courante et durables",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Globe,
      title: "Technologies / Media / Telecom",
      description: "Accompagnement des entreprises innovantes dans leur transformation digitale",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Santé",
      description: "Conseil spécialisé pour les acteurs du secteur médical et pharmaceutique",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Factory,
      title: "Industrie",
      description: "Support stratégique pour les entreprises industrielles et manufacturières",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Briefcase,
      title: "Services aux entreprises",
      description: "Expertise dans l'optimisation et la valorisation des services B2B",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "Énergie & Environnement",
      description: "Accompagnement dans la transition énergétique et les projets durables",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Notre expertise <span className="text-primary">sectorielle</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Une connaissance approfondie des dynamiques de marché dans six secteurs clés
            </p>
          </motion.div>

          {/* Grille de secteurs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay subtil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icône */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <sector.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  {/* Titre */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                    {sector.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise; 