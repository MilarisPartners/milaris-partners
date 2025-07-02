"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { ArrowRight, CheckCircle, TrendingUp, FileText, Users, MessageSquare, DollarSign, Clock, Building2, Briefcase, ChevronDown, Cpu, Shield } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const CessionEntreprise = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Calendly link based on language
  const calendlyLink = language === 'IT' 
    ? 'https://calendly.com/matteo-varennepartners/30min'
    : 'https://calendly.com/paul-milarispartners/30min';

  const timeline = [
    {
      title: t("expertisePages.cession.timeline.steps.strategic.title"),
      description: t("expertisePages.cession.timeline.steps.strategic.description"),
      duration: t("expertisePages.cession.timeline.steps.strategic.duration"),
      icon: TrendingUp,
    },
    {
      title: t("expertisePages.cession.timeline.steps.preparation.title"),
      description: t("expertisePages.cession.timeline.steps.preparation.description"),
      duration: t("expertisePages.cession.timeline.steps.preparation.duration"),
      icon: FileText,
    },
    {
      title: t("expertisePages.cession.timeline.steps.targeting.title"),
      description: t("expertisePages.cession.timeline.steps.targeting.description"),
      duration: t("expertisePages.cession.timeline.steps.targeting.duration"),
      icon: Users,
    },
    {
      title: t("expertisePages.cession.timeline.steps.discussions.title"),
      description: t("expertisePages.cession.timeline.steps.discussions.description"),
      duration: t("expertisePages.cession.timeline.steps.discussions.duration"),
      icon: MessageSquare,
    },
    {
      title: t("expertisePages.cession.timeline.steps.closing.title"),
      description: t("expertisePages.cession.timeline.steps.closing.description"),
      duration: t("expertisePages.cession.timeline.steps.closing.duration"),
      icon: DollarSign,
    },
  ];

  const services = [
    {
      title: t("expertisePages.cession.services.items.evaluation.title"),
      description: t("expertisePages.cession.services.items.evaluation.description"),
      icon: TrendingUp,
    },
    {
      title: t("expertisePages.cession.services.items.market.title"),
      description: t("expertisePages.cession.services.items.market.description"),
      icon: Users,
    },
    {
      title: t("expertisePages.cession.services.items.support.title"),
      description: t("expertisePages.cession.services.items.support.description"),
      icon: CheckCircle,
    },
  ];

  const faqs = [
    {
      question: t("expertisePages.cession.faq.questions.q1.question"),
      answer: t("expertisePages.cession.faq.questions.q1.answer"),
    },
    {
      question: t("expertisePages.cession.faq.questions.q2.question"),
      answer: t("expertisePages.cession.faq.questions.q2.answer"),
    },
    {
      question: t("expertisePages.cession.faq.questions.q3.question"),
      answer: t("expertisePages.cession.faq.questions.q3.answer"),
    },
    {
      question: t("expertisePages.cession.faq.questions.q4.question"),
      answer: t("expertisePages.cession.faq.questions.q4.answer"),
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
              <span className="text-[#0001ff] font-semibold">{t("expertisePages.cession.hero.badge")}</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0b062b]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t("expertisePages.cession.hero.title")}
            </motion.h1>
            <motion.p 
              className="text-lg mb-12 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("expertisePages.cession.hero.description")}
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
                  {t("expertisePages.cession.hero.cta")}
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
              {t("expertisePages.cession.services.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("expertisePages.cession.services.subtitle")}
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
        title={t("expertisePages.cession.timeline.title")}
        subtitle={t("expertisePages.cession.timeline.subtitle")}
        legend={{
          steps: t("expertisePages.cession.timeline.legend.steps"),
          duration: t("expertisePages.cession.timeline.legend.duration")
        }}
      />

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
              <h3 className="text-5xl font-bold text-white mb-2">{t("expertisePages.cession.stats.successRate.value")}</h3>
              <p className="text-white/80">{t("expertisePages.cession.stats.successRate.label")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">{t("expertisePages.cession.stats.duration.value")}</h3>
              <p className="text-white/80">{t("expertisePages.cession.stats.duration.label")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">{t("expertisePages.cession.stats.valuation.value")}</h3>
              <p className="text-white/80">{t("expertisePages.cession.stats.valuation.label")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">{t("expertisePages.cession.stats.confidentiality.value")}</h3>
              <p className="text-white/80">{t("expertisePages.cession.stats.confidentiality.label")}</p>
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
              {t("expertisePages.cession.whyMilaris.title")}
            </h2>
            <p className="text-xl text-white/70">
              {t("expertisePages.cession.whyMilaris.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: t("expertisePages.cession.whyMilaris.items.process.title"),
                description: t("expertisePages.cession.whyMilaris.items.process.description"),
                gradient: "from-[#0001ff] to-[#3E8BFF]"
              },
              {
                icon: Cpu,
                title: t("expertisePages.cession.whyMilaris.items.network.title"),
                description: t("expertisePages.cession.whyMilaris.items.network.description"),
                gradient: "from-[#3E8BFF] to-[#0001ff]"
              },
              {
                icon: Shield,
                title: t("expertisePages.cession.whyMilaris.items.confidentiality.title"),
                description: t("expertisePages.cession.whyMilaris.items.confidentiality.description"),
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
                  <div className={`bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg hover:bg-white/15 transition-all duration-300 h-full flex flex-col ${index === 2 ? 'rounded-b-none' : ''}`}>
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
              {t("expertisePages.cession.acquirers.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("expertisePages.cession.acquirers.subtitle")}
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
                    {t("expertisePages.cession.acquirers.strategic.title")}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {t("expertisePages.cession.acquirers.strategic.description")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t("expertisePages.cession.acquirers.strategic.benefits.synergies.title")}</p>
                      <p className="text-sm text-gray-600">{t("expertisePages.cession.acquirers.strategic.benefits.synergies.subtitle")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t("expertisePages.cession.acquirers.strategic.benefits.integration.title")}</p>
                      <p className="text-sm text-gray-600">{t("expertisePages.cession.acquirers.strategic.benefits.integration.subtitle")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#0001ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t("expertisePages.cession.acquirers.strategic.benefits.continuity.title")}</p>
                      <p className="text-sm text-gray-600">{t("expertisePages.cession.acquirers.strategic.benefits.continuity.subtitle")}</p>
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
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#3E8BFF]/10 hover:border-[#3E8BFF]/30 rounded-b-none">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3E8BFF] to-[#0001ff] rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b062b]">
                    {t("expertisePages.cession.acquirers.financial.title")}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {t("expertisePages.cession.acquirers.financial.description")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t("expertisePages.cession.acquirers.financial.benefits.growth.title")}</p>
                      <p className="text-sm text-gray-600">{t("expertisePages.cession.acquirers.financial.benefits.growth.subtitle")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t("expertisePages.cession.acquirers.financial.benefits.management.title")}</p>
                      <p className="text-sm text-gray-600">{t("expertisePages.cession.acquirers.financial.benefits.management.subtitle")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#3E8BFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t("expertisePages.cession.acquirers.financial.benefits.exit.title")}</p>
                      <p className="text-sm text-gray-600">{t("expertisePages.cession.acquirers.financial.benefits.exit.subtitle")}</p>
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
              {t("expertisePages.cession.faq.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("expertisePages.cession.faq.subtitle")}
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
              {t("expertisePages.cession.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {t("expertisePages.cession.cta.subtitle")}
            </p>
            <div className="flex justify-center">
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-white text-[#0001ff] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("expertisePages.cession.cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f8f8f8' }}>
        <Footer variant="dark" />
      </section>
    </main>
  );
};

export default CessionEntreprise; 