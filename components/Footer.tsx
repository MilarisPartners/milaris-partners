"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

interface FooterProps {
  variant?: 'light' | 'dark';
}

const Footer = ({ variant = 'dark' }: FooterProps) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const isLight = variant === 'light';

  const footerClasses = isLight 
    ? "bg-white text-[#0b062b]" 
    : "bg-[#0b062b] text-white";
  
  const linkClasses = isLight 
    ? "text-gray-600 hover:text-black" 
    : "text-white/80 hover:text-white";

  const dividerClasses = isLight ? "text-gray-300" : "text-white/40";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-4">
      <motion.div 
        className={`max-w-6xl mx-auto rounded-full px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-center shadow-2xl ${footerClasses}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <div className={`flex items-center flex-wrap justify-center gap-x-3 sm:gap-x-4 text-xs sm:text-sm ${linkClasses}`}>
          <span className="hidden sm:inline">© {currentYear} Milaris Partners. {t("footer.rights")}</span>
          <span className="sm:hidden">© {currentYear}</span>
          <span className={`${dividerClasses} hidden sm:inline`}>|</span>
          <Link href="/mentions-legales" className={`transition-colors ${linkClasses}`}>
            {t("footer.legal")}
          </Link>
          <span className={`${dividerClasses} hidden md:inline`}>|</span>
          <Link href="/conditions-generales" className={`transition-colors hidden md:inline ${linkClasses}`}>
            {t("footer.privacy")}
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 