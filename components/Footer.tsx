"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 md:px-6">
      {/* Pillule flottante */}
      <motion.div 
        className="max-w-6xl mx-auto bg-[#2c3e50] rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Logo */}
        <div className="text-white font-bold text-base md:text-lg">
          Milaris
        </div>

        {/* Copyright et liens - responsive */}
        <div className="flex items-center space-x-2 md:space-x-6 text-xs md:text-sm text-white/80">
          <span className="hidden md:inline">© 2024 Milaris Partners</span>
          <span className="md:hidden">© 2024</span>
          <span className="text-white/40">•</span>
          <Link href="#" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
          <span className="text-white/40 hidden md:inline">•</span>
          <Link href="#" className="hover:text-white transition-colors hidden md:inline">
            Conditions générales
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 