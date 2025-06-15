"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Target, Search, Handshake, FileText, MessageSquare, DollarSign, Clock, Building2, Briefcase, ChevronDown, Cpu, Shield, TrendingUp, Brain, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const AcquisitionEntreprise = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const timeline = [
    {
      title: "Stratégie d'acquisition",
      description: "Définition des critères de ciblage, secteurs prioritaires et synergies recherchées",
      duration: "2–3 semaines",
      icon: Target,
    },
    {
      title: "Identification des cibles",
      description: "Sourcing via notre outil IA, qualification et première approche des cibles prioritaires",
      duration: "4–8 semaines",
      icon: Search,
    },
    {
      title: "Approche discrète",
      description: "Prise de contact confidentielle, analyse de l'intérêt et premiers échanges",
      duration: "2–4 semaines",
      icon: MessageSquare,
    },
    {
      title: "Analyse et valorisation",
      description: "Modélisation financière, estimation des synergies, recommandations stratégiques",
      duration: "3–6 semaines",
      icon: FileText,
    },
    {
      title: "Négociation & Closing",
      description: "Coordination des audits, structuration du montage et négociation jusqu'à la signature",
      duration: "4–8 semaines",
      icon: Handshake,
    },
  ];

  const services = [
    {
      title: "Définition de la stratégie d'acquisition",
      description: "Secteurs cibles, géographie, taille, synergies recherchées selon vos objectifs de croissance",
      icon: Target,
    },
    {
      title: "Identification et qualification de cibles",
      description: "Via notre réseau, nos bases propriétaires et notre outil IA pour un sourcing optimal",
      icon: Search,
    },
    {
      title: "Structuration et négociation",
      description: "Coordination des audits, structuration du montage (LBO, prise de participation), négociation des conditions",
      icon: Handshake,
    },
  ];

  const faqs = [
    {
      question: "Combien de temps prend une acquisition d'entreprise ?",
      answer: "Entre 3 et 12 mois selon le contexte : acquisition opportuniste rapide ou processus structuré avec plusieurs cibles. Notre approche méthodique permet d'optimiser les délais tout en sécurisant chaque étape.",
    },
    {
      question: "Comment identifiez-vous les cibles d'acquisition ?",
      answer: "Nous combinons trois approches : notre réseau direct dans vos secteurs cibles, nos bases de données propriétaires enrichies en continu, et notre outil IA qui identifie des opportunités off-market invisibles autrement.",
    },
    {
      question: "Quels types de montages proposez-vous ?",
      answer: "Nous structurons tous types de montages : acquisition simple, LBO avec effet de levier, prise de participation minoritaire ou majoritaire, carve-out de divisions, stratégies build-up. Chaque montage est optimisé selon vos contraintes.",
    },
    {
      question: "Travaillez-vous sur des acquisitions internationales ?",
      answer: "Oui, notre expertise franco-italienne nous permet d'accompagner des acquisitions cross-border, particulièrement entre la France et l'Italie. Notre réseau européen facilite également les opérations dans d'autres pays.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-[#0001ff]/5 pt-20 overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#0001ff]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3E8BFF]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0001ff]/10 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Target className="w-5 h-5 text-[#0001ff]" />
              <span className="text-[#0001ff] font-semibold">Expertise Acquisition</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0b062b]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Croître par croissance externe : méthodique, ciblé, efficace.
            </motion.h1>
            <motion.p 
              className="text-lg mb-12 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Miralis Partners conseille des dirigeants, groupes industriels et investisseurs dans leurs opérations de croissance externe : acquisition d'un concurrent, d'un fournisseur, d'un acteur complémentaire ou d'une cible de diversification.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-[#0001ff] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3E8BFF] transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorons vos opportunités
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b062b] mb-4">
              Ce que nous faisons pour vous
            </h2>
            <p className="text-xl text-gray-600">
              Notre mission : identifier les meilleures opportunités et sécuriser vos acquisitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-100 hover:border-[#0001ff]/30 hover:shadow-xl transition-all duration-300 h-full">
                    {/* Numéro d'étape */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0001ff]/10 to-[#3E8BFF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#0001ff]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b062b] mb-3 group-hover:text-[#0001ff] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b062b] mb-4">
              Déroulé typique d'une acquisition
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Une approche structurée, de 3 à 12 mois selon le contexte
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full"></div>
                <span className="text-gray-600">Étapes clés</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0001ff]" />
                <span className="text-gray-600">Durée moyenne par étape</span>
              </div>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Trait vertical continu avec gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0001ff]/20 via-[#3E8BFF]/30 to-[#0001ff]/20"></div>
            
            {timeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-12 mb-16 relative ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <motion.div 
                      className={`bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-2xl font-bold text-[#0b062b] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#0001ff]/10 rounded-full ${
                        index % 2 === 0 ? "float-right" : ""
                      }`}>
                        <Clock className="w-4 h-4 text-[#0001ff]" />
                        <span className="text-[#0001ff] font-semibold text-sm">{step.duration}</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Numéro d'étape */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-[#0001ff] font-bold text-sm">{index + 1}</span>
                    </div>
                  </motion.div>
                  
                  <div className="flex-1" />
                </motion.div>
              );
            })}
            
            {/* Indicateur de fin */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-4 h-4 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">500+</h3>
              <p className="text-white/80">Cibles analysées par an</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">2x</h3>
              <p className="text-white/80">Plus rapide grâce à l'IA</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">85%</h3>
              <p className="text-white/80">D'opportunités off-market</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/80">Confidentialité garantie</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Savoir-faire Section */}
      <section className="py-20 bg-[#0b062b] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre savoir-faire
            </h2>
            <p className="text-xl text-white/70">
              Des avantages concurrentiels uniques au service de vos acquisitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Outil IA de sourcing avancé",
                description: "Notre technologie propriétaire identifie des opportunités off-market dans tous les secteurs, invisibles sur le marché traditionnel",
                gradient: "from-[#0001ff] to-[#3E8BFF]"
              },
              {
                icon: Globe,
                title: "Expertise franco-italienne",
                description: "Notre équipe binationale offre un accès privilégié aux deux marchés les plus complémentaires d'Europe",
                gradient: "from-[#3E8BFF] to-[#0001ff]"
              },
              {
                icon: Target,
                title: "Opportunités exclusives",
                description: "Capacité à générer des opportunités non visibles, grâce à notre réseau et notre approche directe",
                gradient: "from-[#0001ff] to-[#3E8BFF]"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/80 flex-grow">
                      {item.description}
                    </p>
                    <motion.div 
                      className="mt-6 w-full h-1 bg-white/10 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className={`h-full bg-gradient-to-r ${item.gradient}`} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types d'acquisitions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b062b] mb-4">
              Types d'acquisitions
            </h2>
            <p className="text-xl text-gray-600">
              Expertise dans tous les montages et secteurs d'activité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#0001ff]/10 hover:border-[#0001ff]/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b062b]">
                    Acquisitions Stratégiques
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Acquisition de concurrents, fournisseurs ou acteurs complémentaires pour renforcer votre positionnement
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Consolidation sectorielle</p>
                      <p className="text-sm text-gray-600">Renforcez votre position de leader</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Intégration verticale</p>
                      <p className="text-sm text-gray-600">Sécurisez votre chaîne de valeur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Extension géographique</p>
                      <p className="text-sm text-gray-600">Conquérez de nouveaux marchés</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#3E8BFF]/10 hover:border-[#3E8BFF]/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3E8BFF] to-[#0001ff] rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b062b]">
                    Montages Complexes
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  LBO, carve-out, build-up selon vos contraintes financières et objectifs de développement
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">LBO et montages effet de levier</p>
                      <p className="text-sm text-gray-600">Optimisez votre structure financière</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Carve-out de divisions</p>
                      <p className="text-sm text-gray-600">Extrayez la valeur cachée</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Stratégies build-up</p>
                      <p className="text-sm text-gray-600">Créez un leader par acquisitions successives</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#0001ff]/10 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageSquare className="w-5 h-5 text-[#0001ff]" />
              <span className="text-[#0001ff] font-semibold">FAQ</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b062b] mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur les acquisitions d'entreprise
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  openFaq === index ? 'ring-2 ring-[#0001ff]/50' : ''
                }`}>
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        openFaq === index ? 'bg-[#0001ff]' : 'bg-gray-100'
                      }`}>
                        <span className={`font-bold text-sm ${
                          openFaq === index ? 'text-white' : 'text-gray-600'
                        }`}>{index + 1}</span>
                      </div>
                      <span className="font-semibold text-[#0b062b] text-lg pr-4">{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                        openFaq === index ? 'text-[#0001ff]' : 'text-gray-400'
                      }`} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 pl-20">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêts à accélérer votre croissance ?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Que vous ayez une cible en vue ou souhaitiez explorer le marché, discutons de vos opportunités d'acquisition en toute confidentialité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  className="bg-white text-[#0001ff] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorons vos opportunités
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <a href="tel:+33100000000" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
                +33 1 XX XX XX XX
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AcquisitionEntreprise; 