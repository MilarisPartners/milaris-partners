"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Cpu } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t, language } = useTranslation();

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50 via-white to-[#0001ff]/5 relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-[#0001ff]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-[#3E8BFF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="heading-2 font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-[#0b062b] leading-tight px-4 sm:px-6 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t("about.title.part1")}{" "}
            {language === 'EN' ? (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                {t("about.title.part2")}
              </span>
            ) : language === 'IT' ? (
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x">
                  {t("about.title.part2")}
                </span>
                <motion.span
                  className="absolute inset-0 bg-[#0001ff]/20 blur-xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            ) : (
              <span className="text-[#0001ff]">
                {t("about.title.part2")}
              </span>
            )}{" "}
            {t("about.title.part3")}
          </motion.h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t("about.content.point1.title").includes("società parigina") ? (
                  <>
                    Milaris Partners, società parigina fondata da <span className="font-semibold">professionisti italiani e francesi</span>, accompagna <span className="font-semibold">micro, piccole e medie imprese</span> nei loro percorsi di <span className="font-semibold">cessione, acquisizione e raccolta capitali</span>, aprendo loro le porte a investitori e acquirenti internazionali.
                  </>
                ) : t("about.content.point1.title").includes("Paris-based firm founded by") ? (
                  <>
                    Milaris Partners, a Paris-based firm founded by <span className="font-semibold">Italian and French professionals</span>, <span className="font-semibold">supports micro, small, and medium-sized enterprises</span> in their processes of <span className="font-semibold">divestment, acquisition, and capital raising</span>, opening doors to international investors and buyers.
                  </>
                ) : (
                  t("about.content.point1.title")
                )}
              </p>
            </motion.div>
            
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#3E8BFF] to-[#0001ff] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t("about.content.point2.text1").includes("Presenti in") ? (
                  <>
                    Presenti in <span className="font-semibold">Francia, Italia e Germania</span>, adottiamo un approccio selettivo, seguendo solo un numero limitato di mandati. Coniughiamo <span className="font-semibold">rigore metodologico, una rete internazionale e un autentico senso del deal</span> per ampliare le possibilità e <span className="font-semibold">garantire il massimo in termini di valore, opportunità e successo</span>.
                  </>
                ) : t("about.content.point2.text1").includes("Present in") ? (
                  <>
                    Present in <span className="font-semibold">France, Italy and Germany</span>, we approach each mandate with selectivity, applying rigorous methods and drawing on our <span className="font-semibold">extensive international network</span> as well as sharp deal intuition to open strategic pathways that maximize value and ensure <span className="font-semibold">successful outcomes</span>.
                  </>
                ) : (
                  <>
                    {t("about.content.point2.text1")} {t("about.content.point2.country1")}, {t("about.content.point2.country2")} {t("about.content.point2.text2")} {t("about.content.point2.country3")}{t("about.content.point2.text3")}
                  </>
                )}
              </p>
            </motion.div>
            
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {t("about.content.point3.text1").includes("Pionieri nell'integrazione") ? (
                  <>
                    Pionieri <span className="font-semibold">nell'integrazione dell'intelligenza artificiale</span> nelle operazioni di M&A, utilizziamo una <span className="font-semibold">tecnologia proprietaria</span> che rende più efficiente ogni fase della transazione, aprendo nuove possibilità e <span className="font-semibold">aumentando le chance di successo</span>.
                  </>
                ) : t("about.content.point3.text1").includes("As pioneers in applying") ? (
                  <>
                    As pioneers in <span className="font-semibold">applying artificial intelligence</span> to mergers and acquisitions, we've created <span className="font-semibold">proprietary technology</span> that elevates every phase of the transaction, providing our clients with an <span className="font-semibold">unmatched strategic advantage</span> to succeed.
                  </>
                ) : (
                  <>
                    {t("about.content.point3.text1")}{t("about.content.point3.ai")} {t("about.content.point3.text2")}
                  </>
                )}
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 