"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Timeline from "@/components/Timeline";
import { ArrowRight, CheckCircle, DollarSign, FileText, Search, Handshake, MessageSquare, Clock, TrendingUp, Briefcase, ChevronDown, Users, Shield, Calculator, Wallet, LineChart, ArrowDown } from "lucide-react";
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
    ? 'https://calendly.com/matteo-milarispartners'
    : 'https://calendly.com/paul-milarispartners/30min';

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <SEOHead 
        pageName="financement" 
        language={language} 
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-[#0001ff]/5 overflow-hidden">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                {t("expertisePages.financement.hero.title")}
              </span>
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-12 text-gray-600 max-w-3xl mx-auto"
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer group"
            onClick={scrollToServices}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white to-[#0001ff]/10 border-2 border-[#0001ff]/30 flex items-center justify-center group-hover:border-[#0001ff] group-hover:shadow-lg transition-all duration-300">
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#0001ff] group-hover:text-[#0b062b] transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {t("expertisePages.financement.services.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
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
      <Timeline
        steps={timeline}
        title={t("expertisePages.financement.timeline.title")}
        subtitle={t("expertisePages.financement.timeline.subtitle")}
        legend={{
          steps: t("expertisePages.financement.timeline.legend.steps"),
          duration: t("expertisePages.financement.timeline.legend.duration")
        }}
      />

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
              <h3 className="text-5xl font-bold text-white mb-2">{t("expertisePages.financement.stats.stage.value")}</h3>
              <p className="text-white/80">{t("expertisePages.financement.stats.stage.label")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">{t("expertisePages.financement.stats.investors.value")}</h3>
              <p className="text-white/80">{t("expertisePages.financement.stats.investors.label")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">{t("expertisePages.financement.stats.minimum.value")}</h3>
              <p className="text-white/80">{t("expertisePages.financement.stats.minimum.label")}</p>
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
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("expertisePages.financement.whyMilaris.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["access", "expertise", "optimization"].map((key, index) => {
              const icons = [Users, Handshake, Calculator];
              const gradients = [
                "from-[#0001ff] to-[#3E8BFF]",
                "from-[#3E8BFF] to-[#0001ff]",
                "from-[#0001ff] to-[#3E8BFF]"
              ];
              const Icon = icons[index];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b062b] mb-4">
                      {t(`expertisePages.financement.whyMilaris.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {t(`expertisePages.financement.whyMilaris.items.${key}.description`)}
                    </p>
                    <motion.div 
                      className="mt-6 w-full h-1 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className={`h-full bg-gradient-to-r ${gradients[index]}`} />
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
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {t("expertisePages.financement.types.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              {t("expertisePages.financement.types.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Equity Section */}
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
                    {t("expertisePages.financement.types.equity.title")}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {t("expertisePages.financement.types.equity.description")}
                </p>
                <div className="space-y-4">
                  {["vc", "pe", "family", "angels"].map((key, idx) => (
                    <div className="flex items-start gap-3" key={key}>
                      <div className="mt-1">
                        <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{t(`expertisePages.financement.types.equity.items.${key}.title`)}</p>
                        <p className="text-sm text-gray-600">{t(`expertisePages.financement.types.equity.items.${key}.subtitle`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Debt Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#0001ff]/10 hover:border-[#0001ff]/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3E8BFF] to-[#0001ff] rounded-full flex items-center justify-center shadow-lg">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b062b]">
                    {t("expertisePages.financement.types.debt.title")}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {t("expertisePages.financement.types.debt.description")}
                </p>
                <div className="space-y-4">
                  {["bank", "private", "bonds", "lease"].map((key, idx) => (
                    <div className="flex items-start gap-3" key={key}>
                      <div className="mt-1">
                        <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{t(`expertisePages.financement.types.debt.items.${key}.title`)}</p>
                        <p className="text-sm text-gray-600">{t(`expertisePages.financement.types.debt.items.${key}.subtitle`)}</p>
                      </div>
                    </div>
                  ))}
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
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {t("expertisePages.financement.faq.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              {t("expertisePages.financement.faq.subtitle")}
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
            <h2 className="heading-2 font-bold text-white mb-4">
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