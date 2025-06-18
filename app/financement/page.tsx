"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, DollarSign, FileText, Search, Handshake, MessageSquare, Clock, TrendingUp, Briefcase, ChevronDown, Users, Shield, Calculator, Wallet, LineChart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const Financement = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Calendly link based on language
  const calendlyLink = language === 'IT' 
    ? 'https://calendly.com/matteo-varennepartners/30min'
    : 'https://calendly.com/paul-varennepartners/30min';

  const timeline = [
    {
      title: t("expertisePages.financement.timeline.steps.preparation.title"),
      description: t("expertisePages.financement.timeline.steps.preparation.description"),
      duration: t("expertisePages.financement.timeline.steps.preparation.duration"),
      icon: FileText,
    },
    {
      title: t("expertisePages.financement.timeline.steps.identification.title"),
      description: t("expertisePages.financement.timeline.steps.identification.description"),
      duration: t("expertisePages.financement.timeline.steps.identification.duration"),
      icon: Search,
    },
    {
      title: t("expertisePages.financement.timeline.steps.pitch.title"),
      description: t("expertisePages.financement.timeline.steps.pitch.description"),
      duration: t("expertisePages.financement.timeline.steps.pitch.duration"),
      icon: MessageSquare,
    },
    {
      title: t("expertisePages.financement.timeline.steps.closing.title"),
      description: t("expertisePages.financement.timeline.steps.closing.description"),
      duration: t("expertisePages.financement.timeline.steps.closing.duration"),
      icon: Handshake,
    },
  ];

  const services = [
    {
      title: t("expertisePages.financement.services.items.planning.title"),
      description: t("expertisePages.financement.services.items.planning.description"),
      icon: FileText,
    },
    {
      title: t("expertisePages.financement.services.items.search.title"),
      description: t("expertisePages.financement.services.items.search.description"),
      icon: Search,
    },
    {
      title: t("expertisePages.financement.services.items.negotiation.title"),
      description: t("expertisePages.financement.services.items.negotiation.description"),
      icon: Handshake,
    },
  ];

  const faqs = [
    {
      question: t("expertisePages.financement.faq.questions.q1.question"),
      answer: t("expertisePages.financement.faq.questions.q1.answer"),
    },
    {
      question: t("expertisePages.financement.faq.questions.q2.question"),
      answer: t("expertisePages.financement.faq.questions.q2.answer"),
    },
    {
      question: t("expertisePages.financement.faq.questions.q3.question"),
      answer: t("expertisePages.financement.faq.questions.q3.answer"),
    },
    {
      question: t("expertisePages.financement.faq.questions.q4.question"),
      answer: t("expertisePages.financement.faq.questions.q4.answer"),
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
              <span className="text-[#0001ff] font-semibold">{t("expertisePages.financement.hero.badge")}</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#0b062b]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t("expertisePages.financement.hero.title")}
            </motion.h1>
            <motion.p 
              className="text-lg mb-12 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("expertisePages.financement.hero.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-[#0001ff] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3E8BFF] transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("expertisePages.financement.hero.cta")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
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
              {t("expertisePages.financement.services.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("expertisePages.financement.services.subtitle")}
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
              {t("expertisePages.financement.timeline.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t("expertisePages.financement.timeline.subtitle")}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full"></div>
                <span className="text-gray-600">{t("expertisePages.financement.timeline.legend.steps")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0001ff]" />
                <span className="text-gray-600">{t("expertisePages.financement.timeline.legend.duration")}</span>
              </div>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Trait vertical continu avec gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[calc(100%-4.5rem)] bg-gradient-to-b from-[#0001ff]/20 via-[#3E8BFF]/30 to-[#0001ff]/20"></div>
            
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
                      className={`p-8 ${
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">Série A+</h3>
              <p className="text-white/80">A partir de la série A</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">250k+</h3>
              <p className="text-white/80">Investisseurs actifs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">2M+</h3>
              <p className="text-white/80">Seuil minimal d'intervention</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Milaris Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {t("expertisePages.financement.whyMilaris.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("expertisePages.financement.whyMilaris.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Accès direct aux décideurs",
                description: "Réseau privilégié d'investisseurs et banquiers pour accélérer vos discussions de financement",
                gradient: "from-[#0001ff] to-[#3E8BFF]"
              },
              {
                icon: Handshake,
                title: "Expertise en négociation",
                description: "Expérience dans la négociation des termes clés : dilution, levier, covenants pour optimiser vos conditions",
                gradient: "from-[#3E8BFF] to-[#0001ff]"
              },
              {
                icon: Calculator,
                title: "Optimisation du coût du capital",
                description: "Capacité à structurer des solutions flexibles et à optimiser le coût de votre financement",
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
                  <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b062b] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {item.description}
                    </p>
                    <motion.div 
                      className="mt-6 w-full h-1 bg-gray-200 rounded-full overflow-hidden"
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

      {/* Types de financement Section */}
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
              Types de financement
            </h2>
            <p className="text-xl text-gray-600">
              Solutions adaptées à vos besoins et contraintes spécifiques
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
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b062b]">
                    Levée de fonds en capital
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Pour financer votre croissance tout en conservant la flexibilité
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Fonds de Venture Capital (VC)</p>
                      <p className="text-sm text-gray-600">Pour les startups en hyper-croissance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Fonds de Private Equity (PE)</p>
                      <p className="text-sm text-gray-600">Pour les entreprises matures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Family Offices et investisseurs privés</p>
                      <p className="text-sm text-gray-600">Pour un partenariat long terme</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Business Angels et clubs d'investisseurs</p>
                      <p className="text-sm text-gray-600">Pour les phases d'amorçage</p>
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
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b062b]">
                    Financement par dette
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Solutions de dette pour préserver votre capital et optimiser votre structure
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Dette bancaire traditionnelle</p>
                      <p className="text-sm text-gray-600">Financements classiques sécurisés</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Dette privée (unitranche, mezzanine)</p>
                      <p className="text-sm text-gray-600">Solutions flexibles et sur-mesure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Obligations et financement obligataire</p>
                      <p className="text-sm text-gray-600">Pour les besoins importants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Crédit-bail et solutions spécialisées</p>
                      <p className="text-sm text-gray-600">Financements d'actifs spécifiques</p>
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
              Tout ce que vous devez savoir sur le financement d'entreprise
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
              {t("expertisePages.financement.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {t("expertisePages.financement.cta.subtitle")}
            </p>
            <a 
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-white text-[#0001ff] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("expertisePages.financement.cta.button")}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f8f8f8' }}>
        <Footer variant="dark" />
      </section>
    </main>
  );
};

export default Financement;