"use client";

import { motion } from "framer-motion";
import { Award, Globe, Users, Lightbulb, Target, Shield, Brain, Network } from "lucide-react";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-white subtle-grid">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Titre principal */}
          <h2 className="text-4xl md:text-5xl font-normal text-center mb-4 text-[#050e1f] font-playfair">
            Notre engagement envers <span className="font-normal italic text-[#162644]">vous</span>
          </h2>
          
          {/* Sous-titre centré */}
          <p className="text-lg md:text-xl text-center text-[#424242] mb-16 font-light">
            Milaris Partners est né d'une conviction essentielle : les petites et moyennes entreprises
            méritent également un conseil d'excellence pour leurs projets de cession et de levée de fonds.
          </p>

          {/* Première carte - Approche exclusive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#f8f9fa] border border-gray-200 p-8 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <h3 className="text-2xl font-normal text-[#050e1f] font-playfair">Approche Exclusive</h3>
                </div>
                <p className="text-lg text-[#424242] leading-relaxed">
                  Grâce à une implantation stratégique en <span className="font-medium text-[#162644]">France</span>, 
                  en <span className="font-medium text-[#162644]">Italie</span> et au <span className="font-medium text-[#162644]">Luxembourg</span>, 
                  nous limitons volontairement notre accompagnement à <span className="text-[#c9a961] font-semibold">cinq mandats par an</span>.
                </p>
                <p className="text-lg text-[#424242] leading-relaxed mt-4">
                  Cette démarche exclusive garantit une <span className="italic">attention personnalisée</span>, 
                  parfaitement alignée sur vos attentes et vos objectifs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#c9a961]/10 p-6 text-center">
                  <div className="text-3xl font-light text-[#c9a961] mb-2">
                    {isMounted ? (
                      <CountUp 
                        end={5} 
                        duration={2} 
                        enableScrollSpy 
                        scrollSpyOnce 
                      />
                    ) : (
                      <span>5</span>
                    )}
                  </div>
                  <div className="text-sm text-[#424242]">Mandats par an</div>
                </div>
                <div className="bg-white border border-gray-200 p-6 text-center">
                  <div className="text-3xl font-light text-[#050e1f] mb-2">
                    {isMounted ? (
                      <CountUp 
                        end={3} 
                        duration={2} 
                        delay={0.2}
                        enableScrollSpy 
                        scrollSpyOnce 
                      />
                    ) : (
                      <span>3</span>
                    )}
                  </div>
                  <div className="text-sm text-[#424242]">Pays d'implantation</div>
                </div>
                <div className="bg-white border border-gray-200 p-6 text-center">
                  <div className="text-3xl font-light text-[#050e1f] mb-2">
                    {isMounted ? (
                      <CountUp 
                        end={100} 
                        duration={2.5} 
                        delay={0.4}
                        suffix="%"
                        enableScrollSpy 
                        scrollSpyOnce 
                      />
                    ) : (
                      <span>100%</span>
                    )}
                  </div>
                  <div className="text-sm text-[#424242]">Attention dédiée</div>
                </div>
                <div className="bg-[#c9a961]/10 p-6 text-center">
                  <div className="text-3xl font-light text-[#c9a961] mb-2">24/7</div>
                  <div className="text-sm text-[#424242]">Disponibilité</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deuxième carte - Innovation & IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-[#162644] to-[#1f3a5f] p-8 mb-8 text-white"
          >
            <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="order-2 md:order-1">
                <div className="flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/10 flex items-center justify-center">
                      <Brain className="w-12 h-12 text-[#c9a961]" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#c9a961] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#050e1f] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-normal font-playfair">Intelligence Artificielle & Innovation</h3>
                </div>
                <p className="text-lg leading-relaxed text-white/80">
                  <span className="font-medium">Pionniers</span> dans l'intégration stratégique de 
                  l'intelligence artificielle à nos processus, nous avons développé une 
                  <span className="text-[#c9a961] font-medium"> technologie propriétaire</span> qui 
                  perfectionne chaque étape de la transaction.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1">
                    <Shield className="w-4 h-4 text-[#c9a961]" />
                    <span className="text-sm">Expertise financière</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1">
                    <Network className="w-4 h-4 text-[#c9a961]" />
                    <span className="text-sm">Réseau international</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Citation finale */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-2xl font-light text-[#050e1f] mt-12 mb-16"
          >
            Milaris Partners incarne l'<span className="text-[#c9a961]">innovation</span>, 
            la <span className="text-[#c9a961]">proximité</span> et 
            l'<span className="text-[#c9a961]">excellence</span> opérationnelle.
          </motion.p>

          {/* Valeurs en cartes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center group"
            >
              <div className="mb-4 mx-auto w-20 h-20 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center group-hover:bg-[#c9a961]/10 transition-all duration-300">
                <Award className="w-10 h-10 text-[#c9a961]" />
              </div>
              <h3 className="text-xl font-normal text-[#050e1f] mb-2 font-playfair">Excellence</h3>
              <p className="text-[#424242] text-sm">Un conseil d'excellence pour vos projets de cession et de levée de fonds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 mx-auto w-20 h-20 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center group-hover:bg-[#c9a961]/10 transition-all duration-300">
                <Globe className="w-10 h-10 text-[#c9a961]" />
              </div>
              <h3 className="text-xl font-normal text-[#050e1f] mb-2 font-playfair">International</h3>
              <p className="text-[#424242] text-sm">Implantation stratégique en France, Italie et Luxembourg</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="mb-4 mx-auto w-20 h-20 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center group-hover:bg-[#c9a961]/10 transition-all duration-300">
                <Users className="w-10 h-10 text-[#c9a961]" />
              </div>
              <h3 className="text-xl font-normal text-[#050e1f] mb-2 font-playfair">Proximité</h3>
              <p className="text-[#424242] text-sm">5 mandats par an pour une attention personnalisée maximale</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="mb-4 mx-auto w-20 h-20 bg-[#f8f9fa] border border-gray-200 flex items-center justify-center group-hover:bg-[#c9a961]/10 transition-all duration-300">
                <Lightbulb className="w-10 h-10 text-[#c9a961]" />
              </div>
              <h3 className="text-xl font-normal text-[#050e1f] mb-2 font-playfair">Innovation</h3>
              <p className="text-[#424242] text-sm">Technologie propriétaire basée sur l'intelligence artificielle</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 