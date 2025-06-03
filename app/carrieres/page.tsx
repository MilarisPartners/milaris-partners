"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu,
  Users,
  Send,
  Sparkles,
  TrendingUp,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Carrieres = () => {
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
              Rejoignez notre équipe <span className="italic text-[#c9a961]">dynamique et innovante</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Notre réussite repose sur une équipe talentueuse de professionnels, dont la diversité 
              d'expériences et la richesse des idées nourrissent notre ambition d'excellence et d'innovation.
            </p>
          </motion.div>
        </div>

        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-[#c9a961]/5 rounded-full blur-3xl"
              initial={{
                x: i % 2 === 0 ? -100 : "100%",
                y: i * 150,
              }}
              animate={{
                x: i % 2 === 0 ? "100%" : -100,
                y: i * 150 + 100,
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      {/* Travaillez avec nous */}
      <section className="py-20 bg-white subtle-grid">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] font-playfair">
              Travaillez avec <span className="italic text-[#162644]">nous</span> !
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Exposition internationale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a961]/20 transition-colors duration-300">
                  <Globe className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Exposition internationale</h3>
                <p className="text-[#424242] leading-relaxed">
                  Intégrez une équipe présente dans plusieurs pays, et profitez d'opportunités concrètes 
                  de collaboration sur des projets à portée internationale — l'idéal pour élargir 
                  vos horizons professionnels.
                </p>
              </div>
            </motion.div>

            {/* Solutions technologiques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a961]/20 transition-colors duration-300">
                  <Cpu className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Solutions axées sur la technologie</h3>
                <p className="text-[#424242] leading-relaxed">
                  Chez Milaris Partners, nous mettons la technologie au service de l'efficacité. 
                  Nous déployons des outils avancés et des systèmes d'IA de pointe pour optimiser 
                  nos processus et délivrer des résultats mesurables à nos clients.
                </p>
              </div>
            </motion.div>

            {/* Environnement dynamique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a961]/20 transition-colors duration-300">
                  <Users className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Environnement jeune et dynamique</h3>
                <p className="text-[#424242] leading-relaxed">
                  Évoluez dans un cadre stimulant, ouvert aux idées neuves et aux initiatives. 
                  Nous valorisons la curiosité, l'apprentissage continu et l'esprit d'équipe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      {/* Opportunités */}
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
              Opportunités <span className="italic text-[#c9a961]">actuelles</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="flex space-x-4">
                  <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#c9a961]" />
                  </div>
                  <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#c9a961]" />
                  </div>
                  <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#c9a961]" />
                  </div>
                </div>
              </div>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Nous sommes en permanence à la recherche de profils ambitieux, passionnés par 
                l'excellence et l'innovation. Si vous aspirez à avoir un impact réel, à apprendre 
                chaque jour et à progresser dans un environnement bienveillant, parlons-en.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      {/* Comment postuler */}
      <section className="py-20 bg-white subtle-grid">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] mb-6 font-playfair">
              Comment <span className="italic text-[#162644]">postuler</span> ?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-[#f8f9fa] border border-gray-200 p-12">
              <div className="w-20 h-20 bg-[#c9a961]/10 flex items-center justify-center mx-auto mb-8">
                <Send className="w-10 h-10 text-[#c9a961]" />
              </div>
              <p className="text-lg text-[#424242] leading-relaxed mb-8">
                Envoyez votre CV et une lettre de motivation présentant votre parcours, 
                vos aspirations et ce qui vous attire chez Milaris Partners, à l'adresse suivante :
              </p>
              <a 
                href="mailto:careers@milarispartners.com"
                className="inline-flex items-center space-x-2 text-2xl text-[#c9a961] hover:text-[#b89a4f] transition-colors duration-300"
              >
                <span>📩</span>
                <span className="font-playfair">careers@milarispartners.com</span>
              </a>
            </div>
          </motion.div>
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
              Prêt à façonner l'avenir avec <span className="italic text-[#c9a961]">nous</span> ?
            </h2>
            <p className="text-xl text-white/70 mb-10 font-light">
              Rejoignez une équipe où votre talent sera valorisé et où vous pourrez 
              contribuer à des projets d'envergure internationale.
            </p>
            <a 
              href="mailto:careers@milarispartners.com"
              className="inline-block bg-[#c9a961] text-[#050e1f] px-10 py-4 font-medium hover:bg-[#b89a4f] transition-colors duration-300"
            >
              Postulez maintenant
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Carrieres; 