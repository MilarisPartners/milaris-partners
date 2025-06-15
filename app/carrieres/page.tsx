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
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Carrieres = () => {
  const values = [
    {
      icon: Globe,
      title: "Exposition internationale",
      description: "Intégrez une équipe présente dans plusieurs pays, et profitez d'opportunités concrètes de collaboration sur des projets à portée internationale — l'idéal pour élargir vos horizons professionnels.",
      gradient: "from-[#0001ff] to-[#3E8BFF]"
    },
    {
      icon: Cpu,
      title: "Solutions axées sur la technologie",
      description: "Chez Miralis Partners, nous mettons la technologie au service de l'efficacité. Nous déployons des outils avancés et des systèmes d'IA de pointe pour optimiser nos processus.",
      gradient: "from-[#3E8BFF] to-[#0001ff]"
    },
    {
      icon: Users,
      title: "Environnement jeune et dynamique",
      description: "Évoluez dans un cadre stimulant, ouvert aux idées neuves et aux initiatives. Nous valorisons la curiosité, l'apprentissage continu et l'esprit d'équipe.",
      gradient: "from-[#0001ff] to-[#3E8BFF]"
    }
  ];

  const benefits = [
    "Opportunités de croissance et développement personnel",
    "Projets stimulants avec des clients prestigieux",
    "Formation continue et mentorat",
    "Environnement de travail flexible",
    "Rémunération compétitive et avantages",
    "Culture d'entreprise collaborative et inclusive"
  ];

  return (
    <main className="min-h-screen">
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
              <span className="text-[#0001ff] font-semibold">Rejoignez-nous</span>
            </motion.div>
            
            <motion.h1 
              className="heading-1 font-bold mb-6 text-[#0b062b]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Rejoignez notre équipe{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
                innovante
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Notre réussite repose sur une équipe talentueuse de professionnels, dont la diversité 
              d'expériences et la richesse des idées nourrissent notre ambition d'excellence et d'innovation.
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
              Pourquoi nous{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
                rejoindre
              </span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce qui fait de Miralis Partners un environnement de travail unique
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
              Nos avantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous investissons dans le bien-être et le développement de nos collaborateurs
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
              Opportunités{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8BFF] to-white">
                actuelles
              </span>
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
                  Nous sommes en permanence à la recherche de profils ambitieux, passionnés par 
                  l'excellence et l'innovation. Si vous aspirez à avoir un impact réel, à apprendre 
                  chaque jour et à progresser dans un environnement bienveillant, parlons-en.
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
              Comment{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
                postuler
              </span> ?
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
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Envoyez votre CV et une lettre de motivation présentant votre parcours, 
                vos aspirations et ce qui vous attire chez Miralis Partners, à l'adresse suivante :
              </p>
              <a 
                href="mailto:careers@miralispartners.com"
                className="inline-flex items-center gap-3 text-2xl text-[#0001ff] hover:text-[#3E8BFF] transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold">careers@miralispartners.com</span>
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
              Prêt à façonner l'avenir avec{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] to-[#3E8BFF]">
                nous
              </span> ?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Rejoignez une équipe où votre talent sera valorisé et où vous pourrez 
              contribuer à des projets d'envergure internationale.
            </p>
            <motion.a 
              href="mailto:careers@miralispartners.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0001ff] to-[#3E8BFF] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Postulez maintenant
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Carrieres; 