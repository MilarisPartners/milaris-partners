"use client";

import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="py-32 bg-white subtle-grid relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Citation minimaliste */}
          <div className="relative">
            {/* Guillemets décoratifs */}
            <div className="absolute -top-8 -left-8 text-[#c9a961]/20 text-[120px] font-serif leading-none select-none">"</div>
            
            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl font-light text-[#050e1f] leading-relaxed text-center font-playfair">
                Milaris Partners nous a accompagnés dans la cession de notre entreprise avec un professionnalisme 
                remarquable. Leur approche personnalisée et leur connaissance approfondie du marché nous ont 
                permis de réaliser une transaction dans des conditions optimales.
              </p>
            </blockquote>
            
            {/* Ligne décorative */}
            <div className="flex items-center justify-center mt-12 mb-8">
              <div className="w-16 h-px bg-[#c9a961]" />
            </div>
            
            {/* Attribution */}
            <footer className="text-center">
              <p className="text-lg font-medium text-[#050e1f] mb-1">Franck JOHANNY</p>
              <p className="text-sm text-[#424242] uppercase tracking-wider">Président-Directeur Général</p>
            </footer>
          </div>
        </motion.div>
      </div>
      
      {/* Motif subtil de fond */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/20 to-transparent" />
    </section>
  );
};

export default Testimonial; 