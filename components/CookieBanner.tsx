"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem("miralis-cookie-consent");
    if (!cookieConsent) {
      // Attendre un peu avant d'afficher pour une meilleure UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("miralis-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("miralis-cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl p-5">
            {/* Header avec icône */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0001ff]/10 to-[#3E8BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-4 h-4 text-[#0001ff]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#0b062b] mb-1">
                  {t("cookies.title")}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t("cookies.description")}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <motion.button
                onClick={handleAccept}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-[#0001ff] text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-[#3E8BFF] transition-colors duration-200"
              >
                {t("cookies.accept")}
              </motion.button>
              <motion.button
                onClick={handleReject}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                {t("cookies.reject")}
              </motion.button>
            </div>

            {/* Privacy policy link */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <a 
                href="/mentions-legales" 
                className="text-xs text-[#0001ff] hover:text-[#3E8BFF] transition-colors duration-200"
              >
                {t("cookies.privacyPolicy")}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 