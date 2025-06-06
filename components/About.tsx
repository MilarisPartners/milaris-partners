"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 leading-tight">
            Une volonté profonde de valoriser nos <span className="text-primary">entreprises locales</span> à leur juste valeur
          </h2>
          
          <div className="prose prose-sm md:prose-base max-w-none text-gray-600 space-y-4">
            <p className="leading-relaxed">
              Milaris Partners est né d'une conviction forte : les petites et moyennes entreprises méritent un accompagnement expert dans leurs projets de cession et de levée de fonds. Chaque année, en France et en Italie, de nombreuses entreprises rencontrent des difficultés à trouver un repreneur, faute de visibilité, de ressources ou d'expertise adaptée. Notre cabinet est là pour changer cela.
            </p>
            
            <p className="leading-relaxed">
              Avec une présence affirmée en France, en Italie et au Luxembourg, nous choisissons de limiter nos mandats à cinq par an. Cette approche exclusive garantit un accompagnement entièrement centré sur vos besoins. Nous mettons un point d'honneur à construire une relation de confiance durable, vous guidant avec discrétion et efficacité tout au long de votre parcours.
            </p>
            
            <p className="leading-relaxed">
              En pionniers de l'intégration de l'intelligence artificielle à nos processus, nous utilisons une technologie propriétaire optimisant chaque étape de la transaction, augmentant ainsi significativement vos chances de succès. Forts d'une expertise financière solide et d'un réseau international d'investisseurs, nous sommes déterminés à transformer vos ambitions en réalités concrètes.
            </p>
            
            <p className="leading-relaxed font-medium text-gray-700">
              Milaris Partners, c'est l'engagement envers l'innovation, la proximité et l'excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 