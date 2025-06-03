"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MapBanner = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#050e1f] via-[#0a1628] to-[#162644] overflow-hidden">
      {/* Grille de fond subtile */}
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Texte */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-normal mb-6 font-playfair">
              Une présence stratégique en <span className="text-[#c9a961] italic">Europe</span>
            </h2>
            <p className="text-lg mb-8 text-white/70 font-light">
              Milaris Partners opère au cœur de l'Europe avec une expertise reconnue en France, en Italie et au Luxembourg. 
              Notre réseau international nous permet d'identifier les meilleures opportunités pour nos clients.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-xl mb-1">France</h3>
                  <p className="text-white/60 text-sm">Paris, Lyon, Marseille</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-xl mb-1">Italie</h3>
                  <p className="text-white/60 text-sm">Milan, Rome, Turin</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-xl mb-1">Luxembourg</h3>
                  <p className="text-white/60 text-sm">Luxembourg-Ville</p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration abstraite de carte */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Fond lumineux */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-[#c9a961]/5 rounded-full blur-3xl" />
            </div>

            {/* Carte abstraite */}
            <div className="relative w-full h-full max-w-[600px]">
              {/* Points de connexion */}
              {/* France - Paris */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-[45%] left-[30%] transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-[#c9a961]/10 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#c9a961]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#c9a961] rounded-full animate-pulse shadow-lg shadow-[#c9a961]/50" />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-white text-sm font-light">France</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Italie - Milan */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-[60%] right-[20%] transform translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-[#c9a961]/10 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#c9a961]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#c9a961] rounded-full animate-pulse shadow-lg shadow-[#c9a961]/50" />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-white text-sm font-light">Italie</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Luxembourg */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-[#c9a961]/10 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-[#c9a961]/20 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#c9a961] rounded-full animate-pulse shadow-lg shadow-[#c9a961]/50" />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-white text-sm font-light">Luxembourg</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Lignes de connexion animées */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c9a961" stopOpacity="0" />
                    <stop offset="50%" stopColor="#c9a961" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#c9a961" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* France - Luxembourg */}
                <motion.path
                  id="path1"
                  d="M 180 270 Q 240 200 300 150"
                  fill="none"
                  stroke="#c9a961"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                />
                {/* Point lumineux animé */}
                <circle r="4" fill="#c9a961" filter="url(#glow)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1.5s"
                  >
                    <mpath href="#path1" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1.5s"
                  />
                </circle>

                {/* France - Italie */}
                <motion.path
                  id="path2"
                  d="M 180 270 Q 300 300 480 360"
                  fill="none"
                  stroke="#c9a961"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
                />
                {/* Point lumineux animé */}
                <circle r="4" fill="#c9a961" filter="url(#glow)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1.7s"
                  >
                    <mpath href="#path2" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1.7s"
                  />
                </circle>

                {/* Luxembourg - Italie */}
                <motion.path
                  id="path3"
                  d="M 300 150 Q 390 250 480 360"
                  fill="none"
                  stroke="#c9a961"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.9, ease: "easeInOut" }}
                />
                {/* Point lumineux animé */}
                <circle r="4" fill="#c9a961" filter="url(#glow)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1.9s"
                  >
                    <mpath href="#path3" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1.9s"
                  />
                </circle>

                {/* Filtre de glow pour les points */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Particules flottantes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#c9a961]/40 rounded-full"
                  initial={{
                    x: (i * 67) % 400,
                    y: (i * 97) % 400,
                  }}
                  animate={{
                    x: ((i * 67 + 200) % 400),
                    y: ((i * 97 + 150) % 400),
                  }}
                  transition={{
                    duration: 20 + i * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                />
              ))}

              {/* Cercles d'onde */}
              <motion.div
                className="absolute top-[40%] left-[35%] transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 2, 3],
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <div className="w-20 h-20 border border-[#c9a961]/20 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapBanner; 