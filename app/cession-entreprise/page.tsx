"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, TrendingUp, FileText, Users, MessageSquare, DollarSign, Clock, Building2, Briefcase, ChevronDown, Cpu, Shield } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const CessionEntreprise = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const timeline = [
    {
      title: "Analyse stratégique",
      description: "Compréhension de vos objectifs, évaluation de la société, identification des points de valorisation",
      duration: "2–4 semaines",
      icon: TrendingUp,
    },
    {
      title: "Préparation",
      description: "Constitution des documents de présentation (teaser, info mémo), mise en place d'une data room",
      duration: "4–6 semaines",
      icon: FileText,
    },
    {
      title: "Ciblage acquéreurs",
      description: "Identification et approche d'acquéreurs stratégiques et financiers adaptés à votre profil",
      duration: "6–8 semaines",
      icon: Users,
    },
    {
      title: "Organisation discussions",
      description: "Gestion des échanges, visites, Q&A, coordination des offres concurrentielles",
      duration: "8–12 semaines",
      icon: MessageSquare,
    },
    {
      title: "Négociation & Closing",
      description: "Assistance dans les négociations, coordination avec les conseils juridiques jusqu'à la signature",
      duration: "4–8 semaines",
      icon: DollarSign,
    },
  ];

  const services = [
    {
      title: "Évaluation et positionnement",
      description: "Analyse de votre entreprise, identification des leviers de valeur et positionnement stratégique optimal sur le marché",
      icon: TrendingUp,
    },
    {
      title: "Mise en marché structurée",
      description: "Organisation d'un processus concurrentiel avec notre réseau d'acquéreurs stratégiques et financiers",
      icon: Users,
    },
    {
      title: "Accompagnement jusqu'au closing",
      description: "Négociation, coordination juridique et fiscale, sécurisation de l'opération jusqu'à la signature",
      icon: CheckCircle,
    },
  ];

  const faqs = [
    {
      question: "Combien de temps prend une cession d'entreprise ?",
      answer: "Entre 6 et 9 mois en moyenne pour une opération complète, selon la complexité de l'entreprise, le profil des acquéreurs ciblés et les éventuels enjeux réglementaires.",
    },
    {
      question: "Quelle est la différence entre acquéreur stratégique et financier ?",
      answer: "Les acquéreurs stratégiques sont des industriels cherchant des synergies, tandis que les investisseurs financiers (fonds de private equity) visent le développement et la revente à terme.",
    },
    {
      question: "Comment garantissez-vous la confidentialité ?",
      answer: "Nous utilisons des NDAs, codes projets, data rooms sécurisées et une approche progressive des acquéreurs pour maintenir la confidentialité tout au long du processus.",
    },
    {
      question: "Quel est le coût de votre accompagnement ?",
      answer: "Nos honoraires sont principalement basés sur le succès de l'opération, avec un pourcentage de la valeur de transaction. Contactez-nous pour une proposition personnalisée.",
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
              <TrendingUp className="w-5 h-5 text-[#0001ff]" />
              <span className="text-[#0001ff] font-semibold">Expertise cession</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0b062b]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Vendre son entreprise est une étape majeure.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nous en faisons une réussite.
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Chez Miralis Partners, nous accompagnons les dirigeants dans la cession totale ou partielle de leur entreprise, 
              en structurant une démarche stratégique, confidentielle et optimisée.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-[#0001ff] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3E8BFF] transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discutons de votre projet
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
              Notre mission : maximiser la valeur de votre entreprise et sécuriser votre transmission
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
              Déroulé typique d'une cession
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Une approche structurée, en moyenne sur 6 à 9 mois
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
              <h3 className="text-5xl font-bold text-white mb-2">98%</h3>
              <p className="text-white/80">Taux de succès des opérations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">6-9</h3>
              <p className="text-white/80">Mois en moyenne par cession</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">+25%</h3>
              <p className="text-white/80">Valorisation moyenne obtenue</p>
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

      {/* Why Milaris Section */}
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
              Pourquoi Miralis Partners ?
            </h2>
            <p className="text-xl text-white/70">
              Notre expertise au service de votre réussite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Processus concurrentiel structuré",
                description: "Nous organisons une mise en concurrence optimale pour maximiser la valorisation de votre entreprise",
                gradient: "from-[#0001ff] to-[#3E8BFF]"
              },
              {
                icon: Cpu,
                title: "Réseau d'acquéreurs augmenté par l'IA",
                description: "Notre technologie IA nous permet d'identifier et d'approcher un réseau d'acquéreurs plus large, générant plus d'offres tout en préservant la confidentialité",
                gradient: "from-[#3E8BFF] to-[#0001ff]"
              },
              {
                icon: Shield,
                title: "Confidentialité & alignement",
                description: "Approche sur-mesure, confidentielle et indépendante, avec votre succès comme seul objectif",
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

      {/* Acquéreurs Section */}
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
              Nos réseaux d'acquéreurs
            </h2>
            <p className="text-xl text-gray-600">
              Accès privilégié aux deux types d'acquéreurs pour optimiser votre cession
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
                    Acquéreurs Stratégiques
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Industriels et sociétés de votre secteur cherchant à se renforcer, se diversifier ou réaliser des synergies
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Valorisation basée sur les synergies</p>
                      <p className="text-sm text-gray-600">Maximisation de la valeur par l'intégration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Intégration dans un groupe existant</p>
                      <p className="text-sm text-gray-600">Continuité et développement assuré</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Continuité opérationnelle</p>
                      <p className="text-sm text-gray-600">Préservation des équipes et savoir-faire</p>
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
                    Investisseurs Financiers
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Fonds de private equity et family offices investissant pour développer l'entreprise
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Focus sur la croissance</p>
                      <p className="text-sm text-gray-600">Ressources pour accélérer le développement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Maintien du management</p>
                      <p className="text-sm text-gray-600">Continuité de la direction opérationnelle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Perspective de sortie</p>
                      <p className="text-sm text-gray-600">Horizon d'investissement 3-7 ans</p>
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
              Démocratisons ensemble la cession d'entreprise
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">
              D'autres questions sur la cession d'entreprise ?
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-[#0001ff] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3E8BFF] transition-all duration-300 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez un expert
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CessionEntreprise; 