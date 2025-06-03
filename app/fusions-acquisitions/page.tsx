"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  FileSearch, 
  Target,
  Search,
  BarChart3,
  Handshake,
  ClipboardCheck,
  CheckCircle,
  Building,
  FileText,
  Scale,
  BrainCog,
  GitBranch
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FusionsAcquisitions = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#050e1f] via-[#0a1628] to-[#162644] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22pattern%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%20fill%3D%22rgba(255%2C255%2C255%2C0.03)%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23pattern)%22%2F%3E%3C%2Fsvg%3E')]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-normal text-white mb-6 font-playfair">
              Conseil en Fusions et <span className="italic text-[#c9a961]">Acquisitions</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Nous accompagnons les entreprises dans la complexité des opérations de fusions et acquisitions 
              grâce à une offre complète de services sur mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertises clés */}
      <section className="py-20 bg-white subtle-grid">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] font-playfair">
              Nos expertises <span className="italic text-[#162644]">clés</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Transmission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f8f9fa] border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Transmission d'entreprise</h3>
              <p className="text-[#424242] leading-relaxed">
                Nous accompagnons les actionnaires dans toutes les étapes de la cession de leur société, 
                avec pour objectif d'en maximiser la valeur.
              </p>
            </motion.div>

            {/* Acquisition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f8f9fa] border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Acquisition d'entreprise</h3>
              <p className="text-[#424242] leading-relaxed">
                Nous aidons les entreprises à identifier et acquérir des sociétés ciblées 
                en adéquation avec leurs ambitions stratégiques.
              </p>
            </motion.div>

            {/* Évaluation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f8f9fa] border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Évaluation d'entreprise</h3>
              <p className="text-[#424242] leading-relaxed">
                Nous réalisons des évaluations précises et rigoureuses pour éclairer 
                les décisions financières et stratégiques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accompagnement côté vendeur */}
      <section className="py-20 bg-gradient-to-br from-[#050e1f] via-[#0a1628] to-[#162644] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6 font-playfair">
              Accompagnement côté <span className="italic text-[#c9a961]">vendeur</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Nous conseillons les actionnaires tout au long du processus de cession, généralement sur une période 
              de 6 à 8 mois, pour maximiser la valeur de leur entreprise avec une prise en charge complète.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Préparation à la vente",
                description: "Optimisation financière, amélioration opérationnelle et positionnement stratégique pour valoriser l'entreprise avant sa mise sur le marché."
              },
              {
                icon: Search,
                title: "Identification des acquéreurs et marketing",
                description: "Recherche d'acheteurs qualifiés via des études de marché ciblées, création de mémorandums d'information, et coordination des présentations avec la direction."
              },
              {
                icon: Scale,
                title: "Évaluation, tarification et négociation",
                description: "Élaboration de stratégies de valorisation, accompagnement dans les négociations et sécurisation des conditions de vente les plus avantageuses."
              },
              {
                icon: FileSearch,
                title: "Due Diligence",
                description: "Coordination avec les acheteurs pour valider tous les aspects juridiques, financiers et opérationnels, garantissant une transaction transparente et fluide."
              },
              {
                icon: CheckCircle,
                title: "Finalisation de la transaction",
                description: "Supervision du processus jusqu'à la clôture, en veillant au respect des exigences légales et réglementaires."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-normal text-white mb-3 font-playfair">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement côté acheteur */}
      <section className="py-20 bg-white subtle-grid">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] mb-6 font-playfair">
              Accompagnement côté <span className="italic text-[#162644]">acheteur</span>
            </h2>
            <p className="text-xl text-[#424242] max-w-3xl mx-auto font-light">
              Nous accompagnons les entreprises dans l'identification et l'acquisition de cibles stratégiques, 
              avec un processus s'étalant généralement sur 6 mois à 2 ans, selon le volume d'opérations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Identification des cibles",
                description: "Sélection rigoureuse de cibles répondant à vos critères via notre réseau et nos capacités d'analyse."
              },
              {
                icon: FileSearch,
                title: "Due Diligence",
                description: "Audit approfondi de la santé financière, des capacités opérationnelles et de la pertinence stratégique de la cible."
              },
              {
                icon: BarChart3,
                title: "Analyse de la valorisation",
                description: "Évaluation indépendante pour garantir un prix juste et défendable."
              },
              {
                icon: Handshake,
                title: "Support à la négociation",
                description: "Accompagnement dans la structuration des accords pour optimiser la valeur et maîtriser les risques."
              },
              {
                icon: GitBranch,
                title: "Planification de l'intégration",
                description: "Mise en place de plans détaillés pour une intégration post-acquisition fluide et réussie."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 bg-[#f8f9fa] border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-[#c9a961]" />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#050e1f] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#424242] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services d'évaluation */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white subtle-grid">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] mb-6 font-playfair">
              Services <span className="italic text-[#162644]">d'évaluation</span>
            </h2>
            <p className="text-xl text-[#424242] max-w-3xl mx-auto font-light">
              Nos évaluations d'entreprise fournissent une base solide pour éclairer les décisions stratégiques, 
              que ce soit dans un contexte de cession, acquisition, fusion ou restructuration.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Évaluations complètes",
                description: "Analyse approfondie des flux de trésorerie, transactions comparables et autres méthodologies financières."
              },
              {
                icon: Scale,
                title: "Opinions d'équité",
                description: "Avis indépendants pour garantir l'équité des termes d'une transaction."
              },
              {
                icon: BrainCog,
                title: "Évaluations stratégiques",
                description: "Évaluations à des fins de restructuration, financement ou planification."
              },
              {
                icon: BarChart3,
                title: "Analyse de marché",
                description: "Étude des tendances sectorielles, concurrence et conditions de marché susceptibles d'influencer la valorisation."
              },
              {
                icon: GitBranch,
                title: "Analyse de scénarios",
                description: "Modélisation de scénarios stratégiques pour évaluer leur impact sur la valeur de l'entreprise."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center group"
              >
                <div className="mb-4 mx-auto w-20 h-20 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center group-hover:bg-[#c9a961]/10 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-[#c9a961]" />
                </div>
                <h3 className="text-lg font-normal text-[#050e1f] mb-3 font-playfair">{item.title}</h3>
                <p className="text-[#424242] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#050e1f] via-[#0a1628] to-[#162644] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6 font-playfair">
              Prêt à lancer votre <span className="italic text-[#c9a961]">projet</span> ?
            </h2>
            <p className="text-xl text-white/70 mb-10 font-light">
              Discutons de vos ambitions et de la manière dont nous pouvons vous accompagner 
              dans votre projet de fusion-acquisition.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#c9a961] text-[#050e1f] px-10 py-4 font-medium hover:bg-[#b89a4f] transition-colors duration-300"
            >
              Contactez-nous
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FusionsAcquisitions; 