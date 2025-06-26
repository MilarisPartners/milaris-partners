"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icône de citation */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="w-16 h-16 text-primary/20" />
          </motion.div>
          
          {/* Citation */}
          <motion.blockquote 
            className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {`"${t('testimonial.quote')}"`}
          </motion.blockquote>
          
          {/* Séparateur */}
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>
          
          {/* Attribution */}
          <motion.footer
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-bold text-gray-800 mb-1">{t('testimonial.name')}</p>
            <p className="text-sm text-gray-600 uppercase tracking-wider">{t('testimonial.title')}</p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial; 