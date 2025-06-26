"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { translations } from "@/locales/translations";

const MentionsLegales = () => {
  const { language } = useTranslation();
  const legal = translations[language].legal;
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 bg-gradient-to-br from-blue-50 via-white to-[#0001ff]/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0b062b] mb-12 text-center">
              {legal.title}
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              {legal.sections.map((section, idx) => (
                <section key={idx}>
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">{section.heading}</h2>
                  )}
                  <p>{section.content}</p>
                </section>
              ))}
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

export default MentionsLegales; 