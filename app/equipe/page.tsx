"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { MapPin, Mail, Linkedin, Target, Globe, Factory, Cpu, Users, Building2, Briefcase, Globe2, Network } from "lucide-react";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import { useTranslation } from "@/hooks/useTranslation";
import { generateStructuredData } from "@/utils/seo";

const Equipe = () => {
  const { t, language } = useTranslation();

  const calendlyLink = language === 'IT' 
    ? "https://calendly.com/matteo-milarispartners" 
    : "https://calendly.com/paul-milarispartners/30min";

  // Données structurées pour les membres de l'équipe
  const teamStructuredData = [
    generateStructuredData.person(
      "Paul Poulain",
      t("equipe.managingDirectorFrance"),
      "paul@milaris.partners",
      "https://www.linkedin.com/in/paul-poulain/",
      language as 'fr' | 'it' | 'en'
    ),
    generateStructuredData.person(
      "Matteo Orlandi Mango",
      t("equipe.managingDirectorItalie"),
      "matteo@milaris.partners",
      "https://www.linkedin.com/in/matteoorlandimango/",
      language as 'fr' | 'it' | 'en'
    ),
    generateStructuredData.person(
      "Kevin Lauwick-Baumeister",
      t("equipe.seniorAdvisor"),
      "kevin@milaris.partners",
      "https://www.linkedin.com/in/kevinlauwick/",
      language as 'fr' | 'it' | 'en'
    )
  ];

  const partners = [
    {
      name: "Paul Poulain",
      role: t("equipe.managingDirectorFrance"),
      email: "paul@milaris.partners",
      linkedin: "https://www.linkedin.com/in/paul-poulain/",
      image: "/team/paul-optimized.jpg",
      focus: [
        {
          icon: Building2,
          title: t("equipe.paul.focus1.title"),
          description: t("equipe.paul.focus1.description")
        },
        {
          icon: Globe,
          title: t("equipe.paul.focus2.title"),
          description: t("equipe.paul.focus2.description")
        },
        {
          icon: Target,
          title: t("equipe.paul.focus3.title"),
          description: t("equipe.paul.focus3.description")
        }
      ]
    },
    {
      name: "Matteo Orlandi Mango",
      role: t("equipe.managingDirectorItalie"),
      email: "matteo@milaris.partners",
      linkedin: "https://www.linkedin.com/in/matteoorlandimango/",
      image: "/team/matteo-optimized.jpg",
      focus: [
        {
          icon: Factory,
          title: t("equipe.matteo.focus1.title"),
          description: t("equipe.matteo.focus1.description")
        },
        {
          icon: Users,
          title: t("equipe.matteo.focus2.title"),
          description: t("equipe.matteo.focus2.description")
        },
        {
          icon: Cpu,
          title: t("equipe.matteo.focus3.title"),
          description: t("equipe.matteo.focus3.description")
        }
      ]
    }
  ];

  const seniorAdvisor = {
    name: "Kevin Lauwick-Baumeister",
    role: t("equipe.seniorAdvisor"),
    email: "kevin@milaris.partners",
    linkedin: "https://www.linkedin.com/in/kevinlauwick/",
    image: "/team/kevin.jpg", // Placeholder jusqu'à ce que la photo soit fournie
    focus: [
      {
        icon: Globe2,
        title: t("equipe.kevin.focus1.title"),
        description: t("equipe.kevin.focus1.description")
      },
      {
        icon: Briefcase,
        title: t("equipe.kevin.focus2.title"),
        description: t("equipe.kevin.focus2.description")
      },
      {
        icon: Network,
        title: t("equipe.kevin.focus3.title"),
        description: t("equipe.kevin.focus3.description")
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <SEOHead 
        pageName="equipe" 
        language={language} 
        customStructuredData={teamStructuredData}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-gradient-to-br from-blue-50 via-white to-[#0001ff]/5 overflow-hidden">
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

        <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0001ff]/10 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Users className="w-5 h-5 text-[#0001ff]" />
              <span className="text-[#0001ff] font-semibold">{t("equipe.hero.badge")}</span>
            </motion.div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b062b] mb-6"
              dangerouslySetInnerHTML={{
                __html: `${t("equipe.hero.title1")}${
                  language === 'IT' ? 
                    `<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">${t("equipe.hero.title2")}</span>` :
                  language === 'EN' ? 
                    `<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">${t("equipe.hero.title2")}</span>` :
                    `<span class="text-[#0001ff]">${t("equipe.hero.title2")}</span>`
                }${t("equipe.hero.title3") && t("equipe.hero.title3") !== "equipe.hero.title3" && t("equipe.hero.title3") !== "" ? t("equipe.hero.title3") : ""}${t("equipe.hero.title4") && t("equipe.hero.title4") !== "equipe.hero.title4" && t("equipe.hero.title4") !== "" ? t("equipe.hero.title4") : ""}`
              }}
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              {t("equipe.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {language === 'IT' ? (
                <>
                  La nostra{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    leadership
                  </span>
                </>
              ) : language === 'EN' ? (
                <>
                  {t("equipe.sections.partners.title1")}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    {t("equipe.sections.partners.title2")}
                  </span>
                  {t("equipe.sections.partners.title3")}
                </>
              ) : (
                t("equipe.sections.partners.title")
              )}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("equipe.sections.partners.subtitle")}
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {partners.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Member Header */}
                <div className="bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] p-8 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                      <p className="text-white/80 text-lg">{member.role}</p>
                    </div>
                    {/* Photo */}
                    <div className="w-30 h-30 overflow-hidden rounded-full border-2 border-white/30 flex items-center justify-center">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="object-cover rounded-full w-full h-full"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0b062b] mb-6">{t("equipe.focus.title")}</h3>
                  <div className="space-y-6">
                    {member.focus.map((area, idx) => {
                      const Icon = area.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-4"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#0001ff]/10 to-[#3E8BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-[#0001ff]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0b062b] mb-1">{area.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Advisor Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
              {language === 'IT' ? (
                <>
                  Il team dei{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    Senior Advisors
                  </span>
                </>
              ) : language === 'EN' ? (
                <>
                  {t("equipe.sections.seniorAdvisor.title1")}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    {t("equipe.sections.seniorAdvisor.title2")}
                  </span>
                  {t("equipe.sections.seniorAdvisor.title3")}
                </>
              ) : (
                t("equipe.sections.seniorAdvisor.title")
              )}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("equipe.sections.seniorAdvisor.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Senior Advisor Header */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{seniorAdvisor.name}</h2>
                    <p className="text-white/80 text-lg mb-4">{seniorAdvisor.role}</p>
                  </div>
                  {/* Photo */}
                  <div className="w-30 h-30 overflow-hidden rounded-full border-2 border-white/30 flex items-center justify-center ml-8 flex-shrink-0">
                    <OptimizedImage
                      src={seniorAdvisor.image}
                      alt={seniorAdvisor.name}
                      width={120}
                      height={120}
                      className="object-cover rounded-full w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <a 
                    href={`mailto:${seniorAdvisor.email}`}
                    className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{seniorAdvisor.email}</span>
                  </a>
                  <a 
                    href={seniorAdvisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#0b062b] mb-6">{t("equipe.focus.title")}</h3>
                <div className="space-y-6">
                  {seniorAdvisor.focus.map((area, idx) => {
                    const Icon = area.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-700/10 to-gray-800/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0b062b] mb-1">{area.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 font-bold text-[#0b062b] mb-6">
              {language === 'IT' ? (
                <>
                  Siete pronti a incontrare{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    il nostro team
                  </span>
                  ?
                </>
              ) : language === 'EN' ? (
                <>
                  {t("equipe.cta.title1")}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                    {t("equipe.cta.title2")}
                  </span>
                  {t("equipe.cta.title3")}
                </>
              ) : (
                t("equipe.cta.title1")
              )}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8">
              {t("equipe.cta.subtitle")}
            </p>
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("equipe.cta.button")}
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

export default Equipe;