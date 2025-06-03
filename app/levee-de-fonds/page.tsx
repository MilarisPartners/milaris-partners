"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Banknote,
  GitMerge,
  Rocket,
  Building2,
  Target,
  ArrowUpDown,
  Layers,
  Crown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LeveeDeFonds = () => {
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
              Conseil en <span className="italic text-[#c9a961]">financement</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Nous offrons un accompagnement sur mesure pour la levée de fonds, adapté aux besoins spécifiques 
              de chaque entreprise. Notre objectif : garantir l'accès au capital nécessaire pour soutenir 
              leur croissance et assurer leur succès.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types de financement */}
      <section className="py-20 bg-white subtle-grid">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] font-playfair">
              Nos solutions de <span className="italic text-[#162644]">financement</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Capitaux propres */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f8f9fa] border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Capitaux propres</h3>
              <p className="text-[#424242] leading-relaxed">
                Nous accompagnons nos clients dans la recherche de financements en fonds propres 
                auprès de fonds de capital-risque, de capital-investissement et d'investisseurs stratégiques.
              </p>
            </motion.div>

            {/* Dette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f8f9fa] border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                <Banknote className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Dette</h3>
              <p className="text-[#424242] leading-relaxed">
                Nous conseillons sur les instruments de dette les plus adaptés, 
                tels que les prêts, les obligations ou autres titres de créance.
              </p>
            </motion.div>

            {/* Hybride */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f8f9fa] border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                <GitMerge className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Hybride</h3>
              <p className="text-[#424242] leading-relaxed">
                Nous structurons des solutions combinant fonds propres et dette, 
                pour optimiser la structure de capital et renforcer la flexibilité financière.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      {/* Financement en capitaux propres */}
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
              Financement en <span className="italic text-[#c9a961]">capitaux propres</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Venture Capital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-white font-playfair">Venture Capital</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Pour les entreprises en phase de démarrage à fort potentiel de croissance, nous facilitons 
                l'accès aux fonds de capital-risque les plus alignés avec leur modèle économique. 
                Nous intervenons dans l'élaboration de supports convaincants, la négociation des conditions 
                et la sécurisation d'investissements cohérents avec leur vision à long terme.
              </p>
            </motion.div>

            {/* Private Equity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-white font-playfair">Private Equity</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Pour les sociétés établies en recherche de financements significatifs – dans le cadre 
                d'une expansion, d'acquisitions ou d'une restructuration – nous mobilisons notre réseau 
                de fonds de capital-investissement afin de leur apporter à la fois du capital, 
                un appui stratégique et une expertise sectorielle approfondie.
              </p>
            </motion.div>

            {/* Investisseurs stratégiques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-white font-playfair">Investisseurs stratégiques</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Nous connectons les entreprises à des acteurs de premier plan dont les intérêts 
                sont alignés avec leur vision. Ces investisseurs apportent, au-delà du financement, 
                un accès à des marchés nouveaux, des synergies industrielles et des ressources clés 
                pour l'exécution de leur stratégie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      {/* Financement hybride */}
      <section className="py-20 bg-white subtle-grid">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#050e1f] mb-6 font-playfair">
              Financement <span className="italic text-[#162644]">hybride</span>
            </h2>
            <p className="text-xl text-[#424242] max-w-3xl mx-auto font-light">
              Des solutions innovantes combinant les avantages de la dette et des capitaux propres
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Dette convertible */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a961]/20 transition-colors duration-300">
                  <ArrowUpDown className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Dette convertible</h3>
              </div>
              <p className="text-[#424242] leading-relaxed">
                Instrument de dette pouvant se transformer en actions selon des conditions définies à l'avance. 
                Il offre un équilibre attractif entre sécurité initiale et potentiel de valorisation, 
                tant pour les investisseurs que pour les émetteurs.
              </p>
            </motion.div>

            {/* Financement mezzanine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a961]/20 transition-colors duration-300">
                  <Layers className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Financement mezzanine</h3>
              </div>
              <p className="text-[#424242] leading-relaxed">
                Positionné entre la dette et les fonds propres, ce financement intègre souvent 
                des bons de souscription ou des options d'equity, offrant des rendements élevés 
                et une grande flexibilité de remboursement.
              </p>
            </motion.div>

            {/* Actions privilégiées */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#c9a961]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a961]/20 transition-colors duration-300">
                  <Crown className="w-8 h-8 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-normal text-[#050e1f] mb-4 font-playfair">Actions privilégiées</h3>
              </div>
              <p className="text-[#424242] leading-relaxed">
                Les actions privilégiées combinent des dividendes fixes et un droit de propriété, 
                attirant des investisseurs en quête de revenus stables, tout en permettant 
                aux entreprises de conserver le contrôle.
              </p>
            </motion.div>
          </div>
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
              Prêt à financer votre <span className="italic text-[#c9a961]">croissance</span> ?
            </h2>
            <p className="text-xl text-white/70 mb-10 font-light">
              Discutons de vos besoins de financement et explorons ensemble les meilleures options 
              pour soutenir votre développement.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#c9a961] text-[#050e1f] px-10 py-4 font-medium hover:bg-[#b89a4f] transition-colors duration-300"
            >
              Contactez-nous
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LeveeDeFonds; 