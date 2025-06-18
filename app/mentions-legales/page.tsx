"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const MentionsLegales = () => {
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
              Mentions Légales
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <p className="font-semibold">
                  MILARIS PARTNERS – Société par actions simplifiée établie en vertu du droit français, au capital de 2 000,00 EUR, enregistrée sous le n° : RCS Paris B 932 707 813
                </p>
                <p>
                  <strong>Siège social :</strong> 32-34, avenue de Kléber – 75116 Paris<br />
                  <strong>Enregistrement au Registre du Commerce et des Sociétés de Paris sous le n° SIREN :</strong> 932 707 813<br />
                  <strong>Code intra-communautaire – Numéro d'enregistrement TVA :</strong> FR5093270781<br />
                  <strong>Directeur de la publication :</strong> Paul POULAIN<br />
                  <strong>Propriétaire de l'entreprise :</strong> MILARIS PARTNERS<br />
                  <strong>Hébergeur :</strong> GitHub
                </p>
              </section>

              <section>
                <p>
                  Le site web Milaris Partners est la propriété de Milaris Partners, qui est responsable du traitement de vos données personnelles.
                </p>
                <p>
                  Nous avons adopté cette Politique de Confidentialité, qui détermine comment nous traitons les informations collectées par Milaris Partners et explique pourquoi nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette Politique de Confidentialité avant d'utiliser le site web de Milaris Partners.
                </p>
                <p>
                  Nous prenons soin de vos données personnelles et nous engageons à garantir leur confidentialité et leur sécurité.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Introduction</h2>
                <p>
                  Ce site a pour but de fournir des informations sur Milaris Partners. Les visites sur le site sont soumises aux réglementations pertinentes et aux présentes conditions d'utilisation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Avertissement concernant les produits et services présentés sur le site</h2>
                <p>
                  Aucune information publiée sur ce site ne constitue ou ne doit être interprétée comme une offre de Milaris Partners de vendre des services bancaires, d'assurance ou autres, ni comme une offre ou une sollicitation pour acheter ou vendre des titres ou d'autres produits d'investissement. Le contenu du site, y compris les présentations de produits, services, recherches et analyses développées et produites par Milaris Partners, est fourni à titre informatif seulement. Les utilisateurs doivent vérifier les informations et les utiliser de manière appropriée. Milaris Partners n'assume aucune responsabilité quant à l'utilisation faite des informations présentées sur le site. Toute personne intéressée par l'achat de produits ou services présentés sur ce site doit contacter le département concerné pour confirmer la disponibilité, les prix et autres termes contractuels.
                </p>
                <p>
                  La vente des produits et services présentés sur ce site peut être soumise à des restrictions pour certains acheteurs potentiels ou dans certains pays. Milaris Partners ne fournira aucun produit ou service à des acheteurs potentiels en violation des lois du pays d'origine de l'acheteur ou de toute autre loi applicable. Les visiteurs doivent s'assurer qu'ils sont autorisés à visiter ce site conformément aux lois du pays à partir duquel ils se connectent.
                </p>
                <p>
                  Milaris Partners s'efforce de maintenir les informations sur le site exactes et à jour, mais le contenu peut être corrigé à tout moment sans préavis. Milaris Partners ne peut garantir que les informations fournies sont complètes ou non altérées par des pirates ou des virus. Milaris Partners n'accepte aucune responsabilité pour les erreurs ou omissions dans les informations fournies.
                </p>
                <p>
                  L'accès à ce site web est basé sur les niveaux de service actuels, et Milaris Partners n'est pas responsable des problèmes de transmission ou des pannes de réseau.
                </p>
                <p>
                  Milaris Partners ne fournit aucune garantie explicite ou implicite concernant le site web. Plus précisément, Milaris Partners ne garantit pas que le site web répondra aux besoins actuels ou futurs des visiteurs, maintiendra un accès ininterrompu, présentera des informations pertinentes et sans erreur, ou fournira des résultats précis et fiables de l'utilisation du site.
                </p>
                <p>
                  Milaris Partners ne garantit pas la qualité ou la légalité de tout contenu non créé par Milaris Partners et n'accepte aucune responsabilité pour les réclamations, poursuites ou appels de tiers concernant les droits exclusifs sur ce contenu et son utilisation ou pour tout autre motif.
                </p>
                <p>
                  Aucun conseil ou information verbale ou écrite, ni aucun conseil ou information vidéo obtenus de ce site web ne donnera lieu à des garanties ou à des responsabilités, sauf mention explicite.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Avertissement concernant les liens</h2>
                <p>
                  Le site web peut inclure des liens vers d'autres sites web ou sources Internet, ajoutés par des tiers. Milaris Partners n'a aucun contrôle sur ces sites et sources externes et n'est pas responsable de leur disponibilité, de leur contenu, de leur équité, de leur actualité, de leur qualité, de leur complétude, de leur pertinence ou de la légalité de toute publicité, produit, service ou autre matériel disponible sur ou à partir de ces sites ou sources. Les visiteurs reconnaissent que Milaris Partners n'est pas responsable des pertes directes ou consécutives résultant de l'utilisation ou de la confiance dans le contenu de ces sites ou sources, ou de tout bien ou service disponible sur ces sites ou à partir de ces sources, consultés en ligne ou obtenus par e-mail ou tout autre moyen. La confidentialité et l'intégrité des informations sur Internet ne sont pas garanties. Tout message électronique envoyé par les utilisateurs du site peut être intercepté ou altéré. Milaris Partners n'est pas responsable des messages interceptés ou altérés.
                </p>
                <p>
                  Milaris Partners croit que tous les sites mentionnés sur ce site web, directement ou via des hyperliens, appartiennent à des entreprises réputées et éthiques. Cependant, Milaris Partners n'a aucun lien avec la plupart de ces entreprises et ne les a pas vérifiées. Les informations présentées sur ce site ont été obtenues de sources jugées fiables, et tous les efforts ont été faits pour assurer leur exactitude. Malgré ces précautions, Milaris Partners ne peut être tenu responsable de l'exactitude de ces informations. Chaque utilisateur assume l'entière responsabilité de l'utilisation de tout ou partie des informations présentées sur ce site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Propriété Intellectuelle et Contrefaçon</h2>
                <p>
                  https://milaris.partners/ détient les droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site web, notamment les textes, images, graphismes et logos. Toute reproduction, représentation, modification, publication, ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de https://milaris.partners/.
                </p>
                <p>
                  Toute utilisation non autorisée du site ou de l'un de ses contenus sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Coordonnées de contact</h2>
                <p>
                  Si vous souhaitez nous contacter pour en savoir plus sur cette politique ou pour toute question relative aux droits individuels, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:legal@milaris.partners" className="text-[#0001ff] hover:underline">legal@milaris.partners</a>
                </p>
              </section>
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