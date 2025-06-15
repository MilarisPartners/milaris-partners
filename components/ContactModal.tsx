"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, Phone, User, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Désactiver le scroll du body quand la modal est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup au démontage
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire envoyé:", formData);
    // Pour l'instant, on ferme juste la modal
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]"
          />

          {/* Modal Container */}
          <div 
            className="fixed inset-0 z-[1000] overflow-y-auto"
            onClick={(e) => {
              // Fermer la modal si on clique sur le conteneur (pas sur la modal elle-même)
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <div 
              className="flex min-h-full items-center justify-center p-4"
              onClick={(e) => {
                // Fermer la modal si on clique sur le padding autour
                if (e.target === e.currentTarget) {
                  onClose();
                }
              }}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-[calc(100%-2rem)] sm:max-w-lg bg-gradient-to-br from-[#0b062b] via-[#0b062b] to-[#0001ff]/20 rounded-lg shadow-2xl overflow-hidden mx-auto transform"
              >
                {/* Header */}
                <div className="relative p-6 sm:p-8 text-white">
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <h2 className="text-2xl sm:text-3xl font-normal font-playfair mb-2">
                    Contactez-<span className="italic text-[#3E8BFF]">nous</span>
                  </h2>
                  <p className="text-sm sm:text-base text-white/70 font-light">
                    Nous sommes à votre écoute pour discuter de votre projet
                  </p>
                </div>

                {/* Form Container with white background */}
                <div className="bg-white">
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    {/* Nom */}
                    <div>
                      <label className="block text-sm font-medium text-[#050e1f] mb-2">
                        Nom complet
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#0001ff]" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0001ff] transition-colors duration-200 text-sm sm:text-base"
                          placeholder="Jean Dupont"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#050e1f] mb-2">
                        Adresse email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#0001ff]" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0001ff] transition-colors duration-200 text-sm sm:text-base"
                          placeholder="jean.dupont@example.com"
                        />
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-sm font-medium text-[#050e1f] mb-2">
                        Téléphone (optionnel)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#0001ff]" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0001ff] transition-colors duration-200 text-sm sm:text-base"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[#050e1f] mb-2">
                        Votre message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#0001ff]" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0001ff] transition-colors duration-200 resize-none text-sm sm:text-base"
                          placeholder="Décrivez votre projet ou votre demande..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#0001ff] text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-[#0b062b] transition-all duration-300 flex items-center justify-center space-x-2 group text-sm sm:text-base"
                    >
                      <span>Envoyer le message</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>

                  {/* Footer info */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="border-t border-gray-200 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-[#424242]">
                      <p>Ou contactez-nous directement :</p>
                      <a href="mailto:contact@milarispartners.com" className="text-[#0001ff] hover:text-[#0b062b] transition-colors">
                        contact@milarispartners.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 