"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ConditionsGenerales = () => {
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
              Conditions Générales
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Bienvenue chez Milaris Partners !</h2>
                <p>
                  Ces conditions générales définissent les règles et règlements pour l'utilisation du site web de Milaris Partners, situé à l'adresse https://milaris.partners/.
                </p>
                <p>
                  En accédant à ce site web, nous supposons que vous acceptez ces conditions générales. Ne continuez pas à utiliser Milaris Partners si vous n'acceptez pas toutes les conditions générales énoncées sur cette page.
                </p>
                <p>
                  Nous prenons soin de vos données personnelles et nous engageons à garantir leur confidentialité et leur sécurité.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Informations sur les visiteurs</h2>
                <p>
                  Le visiteur est informé des réglementations concernant la communication marketing, la Loi du 21 juin 2014 pour la confiance dans l'économie numérique, la Loi sur la protection des données du 6 août 2004, et le Règlement général sur la protection des données (RGPD : n° 2016-679).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Responsables de la collecte des données personnelles</h2>
                <p>
                  Pour les données personnelles collectées dans le cadre de la création du compte utilisateur et de la navigation sur le site, le responsable du traitement des données est : Milaris Partners SAS. En tant que responsable du traitement des données, https://milaris.partners/ s'engage à respecter le cadre légal en vigueur. Chaque fois que https://milaris.partners/ traite des données personnelles, elle prend toutes les mesures raisonnables pour s'assurer de l'exactitude et de la pertinence des données personnelles au regard des finalités pour lesquelles elles sont traitées.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Finalité de la collecte des données</h2>
                <p>
                  https://milaris.partners/ peut traiter tout ou partie des données :
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Pour permettre la navigation sur le Site.</li>
                  <li>Pour prévenir et lutter contre la fraude informatique (spamming, hacking, etc.) : matériel utilisé pour la navigation, adresse IP, mot de passe haché.</li>
                  <li>Pour améliorer la navigation sur le Site : données de connexion et d'utilisation.</li>
                  <li>Pour mener des campagnes de communication (sms, email) : numéro de téléphone, adresse email.</li>
                </ul>
                <p className="mt-4">
                  https://milaris.partners/ ne vend pas vos données personnelles, qui sont uniquement utilisées en cas de nécessité ou à des fins statistiques et d'analyses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Droits d'accès, de rectification et d'opposition</h2>
                <p>
                  Conformément à la réglementation européenne, les utilisateurs de https://milaris.partners/ disposent des droits suivants :
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des utilisateurs.</li>
                  <li>Droit de verrouillage ou d'effacement des données des utilisateurs (article 17 RGPD) lorsqu'elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite.</li>
                  <li>Droit de retirer à tout moment un consentement (article 13-2c RGPD).</li>
                  <li>Droit à la limitation du traitement des données des utilisateurs (article 18 RGPD).</li>
                  <li>Droit d'opposition au traitement des données des utilisateurs (article 21 RGPD).</li>
                  <li>Droit à la portabilité des données fournies par les utilisateurs lorsque ces données font l'objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD).</li>
                  <li>Droit de définir le sort des données des utilisateurs après leur mort et de choisir à qui https://milaris.partners/ devra communiquer (ou non) ses données à un tiers qu'ils auront préalablement désigné.</li>
                </ul>
                <p className="mt-4">
                  Dès que https://milaris.partners/ a connaissance du décès d'un utilisateur et à défaut d'instructions de sa part, https://milaris.partners/ s'engage à détruire ses données, sauf si leur conservation s'avère nécessaire à des fins probatoires ou pour répondre à une obligation légale. Si l'utilisateur souhaite savoir comment https://milaris.partners/ utilise ses données personnelles, demander à les rectifier ou s'oppose à leur traitement, il peut contacter https://milaris.partners/ par écrit à l'adresse suivante : <a href="mailto:legal@milaris.partners" className="text-[#0001ff] hover:underline">legal@milaris.partners</a>. Dans ce cas, l'utilisateur doit indiquer les données personnelles qu'il souhaiterait que https://milaris.partners/ corrige, mette à jour ou supprime, en s'identifiant précisément avec une copie d'une pièce d'identité (carte d'identité ou passeport). Les demandes de suppression de données personnelles seront soumises aux obligations qui sont imposées à https://milaris.partners/ par la loi, notamment en matière de conservation ou d'archivage des documents. Les utilisateurs du site peuvent également déposer une réclamation auprès des autorités de contrôle, notamment la CNIL (https://www.cnil.fr/fr/plaintes).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Non-communication des données personnelles</h2>
                <p>
                  https://milaris.partners/ s'abstient de traiter, héberger ou transférer les Informations collectées sur ses Visiteurs vers un pays situé en dehors de l'Union européenne ou reconnu comme "inadéquat" par la Commission européenne sans en informer préalablement le client. Pour autant, https://milaris.partners/ reste libre du choix de ses sous-traitants techniques et commerciaux, à condition qu'ils présentent des garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679). https://milaris.partners/ s'engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu'elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l'intégrité ou la confidentialité des Informations du Client est portée à la connaissance de https://milaris.partners/, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs, https://milaris.partners/ ne collecte aucune "donnée sensible". Les données personnelles de l'Utilisateur peuvent être traitées par des filiales de https://milaris.partners/ et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique. Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d'avoir accès aux données des Utilisateurs de https://milaris.partners/ sont principalement les agents de notre service client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Notification d'incident</h2>
                <p>
                  Quelles que soient les mesures de protection que nous prenons, aucune méthode de transmission sur Internet ni aucune méthode de stockage électronique n'est complètement sécurisée. Nous ne pouvons donc pas garantir une sécurité absolue. Si nous prenons connaissance d'une faille de sécurité, nous avertirons les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d'incident tiennent compte de nos obligations légales, qu'elles soient au niveau national ou européen. Nous nous engageons à informer pleinement nos Clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Sécurité</h2>
                <p>
                  Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, https://milaris.partners/ utilise des réseaux protégés par des dispositifs standards tels que par pare-feux, la pseudonymisation, l'encryption et mot de passe. Lors du traitement des Données Personnelles, https://milaris.partners/ prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Liens hypertextes "cookies" et balises ("tags") internet</h2>
                <p>
                  Le site https://milaris.partners/ contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de https://milaris.partners/. Cependant, https://milaris.partners/ n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait. Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-dessous, sachant que cela peut réduire ou empêcher l'accessibilité à tout ou partie des Services proposés par le site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Cookies</h2>
                <p>
                  Un "cookie" est un petit fichier d'information envoyé au navigateur de l'Utilisateur et stocké au sein du terminal de l'Utilisateur (ex : ordinateur, smartphone), (ci-après "Cookies"). Ce fichier comprend des informations telles que le nom de domaine de l'Utilisateur, le fournisseur d'accès Internet de l'Utilisateur, le système d'exploitation de l'Utilisateur, ainsi que la date et l'heure d'accès. Les Cookies ne risquent en aucun cas d'endommager le terminal de l'Utilisateur. https://milaris.partners/ est susceptible de traiter les informations de l'Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à https://milaris.partners/ d'améliorer le contenu du Site, de la navigation de l'Utilisateur. Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l'Utilisateur peut configurer son navigateur pour qu'il lui permette de décider s'il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu'ils soient rejetés, soit systématiquement, soit selon leur émetteur. L'Utilisateur peut également configurer son logiciel de navigation de manière à ce que l'acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu'un Cookie soit susceptible d'être enregistré dans son terminal. https://milaris.partners/ informe l'Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles. Si l'Utilisateur refuse l'enregistrement de Cookies dans son terminal ou son navigateur, ou si l'Utilisateur supprime ceux qui y sont enregistrés, l'Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque https://milaris.partners/ ou l'un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d'affichage ou le pays depuis lequel le terminal semble être connecté à Internet. Le cas échéant, https://milaris.partners/ décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par https://milaris.partners/, résultant (i) du refus de Cookies par l'Utilisateur (ii) de l'impossibilité pour https://milaris.partners/ d'enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l'Utilisateur. Pour la gestion des Cookies et des
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Balises Internet</h2>
                <p>
                  https://milaris.partners/ peut occasionnellement utiliser des balises Internet et les déployer par l'intermédiaire d'un partenaire spécialisé en analyse web, qui peut être situé (et donc stocker les informations correspondantes, y compris l'adresse IP de l'Utilisateur) dans un pays étranger. Cette technologie permet à https://milaris.partners/ d'évaluer les réponses des visiteurs au Site et l'efficacité de ses actions (par exemple, le nombre de fois qu'une page est ouverte et les informations consultées) et l'utilisation de ce Site par l'Utilisateur. Le prestataire externe peut collecter des informations sur les visiteurs du Site et d'autres sites web utilisant ces balises, compiler des rapports sur l'activité du Site pour https://milaris.partners/, et fournir d'autres services liés à l'utilisation du Site et d'Internet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0b062b] mt-8 mb-4">Droit applicable et juridiction</h2>
                <p>
                  Tout litige en relation avec l'utilisation du site https://milaris.partners/ est soumis au droit français. Sauf dans les cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
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

export default ConditionsGenerales; 