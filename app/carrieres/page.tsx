"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu,
  Users,
  Send,
  Sparkles,
  TrendingUp,
  Heart,
  ArrowRight,
  CheckCircle,
  Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const Carrieres = () => {
  const { t, language } = useTranslation();

  const calendlyLink = language === 'IT' 
    ? "https://calendly.com/matteo-milarispartners" 
    : "https://calendly.com/paul-milarispartners/30min";

  const values = [
    {
      icon: Globe,
      title: t("carrieres.values.value1.title"),
      description: t("carrieres.values.value1.description"),
      gradient: "from-[#0001ff] to-[#3E8BFF]"
    },
    {
      icon: Cpu,
      title: t("carrieres.values.value2.title"),
      description: t("carrieres.values.value2.description"),
      gradient: "from-[#3E8BFF] to-[#0001ff]"
    },
    {
      icon: Users,
      title: t("carrieres.values.value3.title"),
      description: t("carrieres.values.value3.description"),
      gradient: "from-[#0001ff] to-[#3E8BFF]"
    }
  ];

  const benefits = [
    t("carrieres.benefits.benefit1"),
    t("carrieres.benefits.benefit2"),
    t("carrieres.benefits.benefit3"),
    t("carrieres.benefits.benefit4")
  ];

  return (
    <main className="min-h-screen">
      <SEOHead 
        pageName="carrieres" 
        language={language} 
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-[#0001ff]/5 pt-20 overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-20 -right-20 w-40 sm:w-80 h-40 sm:h-80 bg-[#0001ff]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-48 sm:w-96 h-48 sm:h-96 bg-[#3E8BFF]/10 rounded-full blur-3xl"
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
              <Sparkles className="w-5 h-5 text-[#0001ff]" />
              <span className="text-[#0001ff] font-semibold">{t("carrieres.hero.badge")}</span>
            </motion.div>
            
            <motion.h1 
              className="heading-1 font-bold mb-6 text-[#0b062b]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t("carrieres.hero.title1")}{" "}
              {language === 'IT' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("carrieres.hero.title2")}
                </span>
              ) : language === 'EN' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("carrieres.hero.title2")}
                </span>
              ) : (
                <span className="text-[#0001ff]">
                  {t("carrieres.hero.title2")}
                </span>
              )}{" "}
              {t("carrieres.hero.title3") && t("carrieres.hero.title3") !== "carrieres.hero.title3" && t("carrieres.hero.title3")}
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("carrieres.hero.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Travaillez avec nous */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {t("carrieres.workWithUs.title1")}{" "}
              {language === 'IT' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("carrieres.workWithUs.title2")}
                </span>
              ) : language === 'EN' ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    {t("carrieres.workWithUs.title2")}
                  </span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    {t("carrieres.workWithUs.title3")}
                  </span>
                </>
              ) : (
                <span className="text-[#0001ff]">
                  {t("carrieres.workWithUs.title2")}
                </span>
              )}{language === "EN" ? "?" : language === "IT" ? "?" : " ?"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("carrieres.workWithUs.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-lg border border-gray-100 hover:border-[#0001ff]/30 hover:shadow-xl transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b062b] mb-3 group-hover:text-[#0001ff] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {t("carrieres.benefits.title1")}{" "}
              {language === 'IT' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("carrieres.benefits.title2")}
                </span>
              ) : language === 'EN' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("carrieres.benefits.title2")}
                </span>
              ) : (
                <span className="text-[#0001ff]">
                  {t("carrieres.benefits.title2")}
                </span>
              )}
              {t("carrieres.benefits.title3") && t("carrieres.benefits.title3") !== "carrieres.benefits.title3" && t("carrieres.benefits.title3") !== "" && t("carrieres.benefits.title3")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("carrieres.benefits.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-4 px-4 sm:px-0">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#0001ff]/30 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#0001ff] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunités */}
      <section className="section-padding bg-[#0b062b] relative overflow-hidden">
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
            className="text-center"
          >
            <h2 className="heading-2 font-bold text-white mb-12">
              {t("carrieres.opportunities.title1")}{" "}
              {language === 'IT' ? (
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#60A5FA] animate-gradient-x">
                    {t("carrieres.opportunities.title2")}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-[#60A5FA]/20 blur-xl"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              ) : language === 'EN' ? (
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#60A5FA] animate-gradient-x">
                    {t("carrieres.opportunities.title2")}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-[#60A5FA]/20 blur-xl"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8BFF] to-white">
                  {t("carrieres.opportunities.title2")}
                </span>
              )}
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 sm:p-12 rounded-lg text-center">
                <div className="flex justify-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-lg flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3E8BFF] to-[#0001ff] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-lg flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  {t("carrieres.opportunities.description")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comment postuler */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {t("carrieres.howToApply.title1")}{" "}
              {language === 'IT' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("carrieres.howToApply.title2")}
                </span>
              ) : language === 'EN' ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("carrieres.howToApply.title2")}
                </span>
              ) : (
                <span className="text-[#0001ff]">
                  {t("carrieres.howToApply.title2")}
                </span>
              )}{language === "EN" ? "?" : language === "IT" ? "?" : " ?"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 sm:p-12 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-lg flex items-center justify-center mx-auto mb-8">
                <Send className="w-10 h-10 text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                {t("carrieres.howToApply.description")}
              </p>
              <a 
                href="mailto:careers@milaris.partners"
                className="inline-flex items-center gap-3 text-2xl text-[#0001ff] hover:text-[#3E8BFF] transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold">careers@milaris.partners</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-6">
              {t("carrieres.cta.title1")}{" "}
              {language === "EN" ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    {t("carrieres.cta.title2")}
                  </span>{" "}
                  {t("carrieres.cta.title3")}{" "}
                  <span className="text-[#0b062b]">{t("carrieres.cta.title4")}</span>?
                </>
              ) : language === "IT" ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    {t("carrieres.cta.title2")}
                  </span>{" "}
                  {t("carrieres.cta.title3")}{" "}
                  <span className="text-[#0b062b]">{t("carrieres.cta.title4")}</span>?
                </>
              ) : (
                <>
                  <span className="text-[#0001ff]">{t("carrieres.cta.title2")}</span>{" "}
                  {t("carrieres.cta.title3")}{" "}
                  <span className="text-[#0001ff]">{t("carrieres.cta.title4")}</span> ?
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-10">
              {t("carrieres.cta.subtitle")}
            </p>
            <motion.a 
              href={calendlyLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("carrieres.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f8f8f8' }}>
        <Footer variant="dark" />
      </section>
    </main>
  );
};

export default Carrieres; 