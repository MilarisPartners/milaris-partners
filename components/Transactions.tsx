"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";

type Transaction = {
  id: string;
  titleTop: string; // ex: "LE ROUTARD"
  titleBottom: string; // ex: "HACHETTE LIVRE"
  shortLabel: string; // ex: "SOLD TO" / "VENDU À"
  date: string; // ex: "2025"
  detailDate: string; // ex: "Octobre 2025"
  detailType: string; // ex: "M & A SELL SIDE"
  detailDescription: string; // texte court visible au survol
  value?: string; // ex: "€150m"
  country?: string; // ex: "France"
  logoTop?: string; // chemin logo entité haute
  logoBottom?: string; // chemin logo entité basse
};

const Transactions = () => {
  const { t, language } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // Données synchronisées avec la page Transactions
  const transactions: Transaction[] = [
    {
      id: "marcolini-mbk-2023",
      titleTop: "PIERRE MARCOLINI S.A.",
      titleBottom: "MBK PARTNERS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2023",
      detailDate: language === "EN" ? "March 2023" : language === "IT" ? "Marzo 2023" : language === "DE" ? "März 2023" : "Mars 2023",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Pierre Marcolini S.A. is acquired by MBK Partners"
          : language === "IT"
          ? "Pierre Marcolini S.A. è acquisita da MBK Partners"
          : language === "DE"
          ? "Pierre Marcolini S.A. wird von MBK Partners übernommen"
          : "Pierre Marcolini S.A. est cédée à MBK Partners",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Belgium" : language === "IT" ? "Belgio" : language === "DE" ? "Belgien" : "Belgique",
    },
    {
      id: "haglofs-lionrock-2023",
      titleTop: "HAGLÖFS (ASICS)",
      titleBottom: "LIONROCK CAPITAL",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2023",
      detailDate: language === "EN" ? "December 2023" : language === "IT" ? "Dicembre 2023" : language === "DE" ? "Dezember 2023" : "Décembre 2023",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Asics sold its Swedish outdoor brand Haglöfs to Hong Kong investment fund LionRock Capital"
          : language === "IT"
          ? "Asics ha venduto il marchio svedese outdoor Haglöfs al fondo di investimento di Hong Kong LionRock Capital"
          : language === "DE"
          ? "Asics verkaufte seine schwedische Outdoor-Marke Haglöfs an den Hongkonger Investmentfonds LionRock Capital"
          : "Asics a vendu sa marque suédoise outdoor Haglöfs au fonds d'investissement hongkongais LionRock Capital",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : language === "DE" ? "Schweden" : "Suède",
    },
    {
      id: "systemair-panasonic-2022",
      titleTop: "SYSTEMAIR AB (DIV. AC)",
      titleBottom: "PANASONIC CORPORATION",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2022",
      detailDate: language === "EN" ? "November 2022" : language === "IT" ? "Novembre 2022" : language === "DE" ? "November 2022" : "Novembre 2022",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "AC division of Systemair AB is sold to Panasonic Corporation"
          : language === "IT"
          ? "La divisione AC di Systemair AB è venduta a Panasonic Corporation"
          : language === "DE"
          ? "Die AC-Sparte von Systemair AB wird an Panasonic Corporation verkauft"
          : "La division AC de Systemair AB est vendue à Panasonic Corporation",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : language === "DE" ? "Schweden" : "Suède",
    },
    {
      id: "njuko-asics-2022",
      titleTop: "NJUKO",
      titleBottom: "ASICS CORPORATION",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2022",
      detailDate: language === "EN" ? "November 2022" : language === "IT" ? "Novembre 2022" : language === "DE" ? "November 2022" : "Novembre 2022",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Njuko is acquired by ASICS Corporation"
          : language === "IT"
          ? "Njuko è acquisita da ASICS Corporation"
          : language === "DE"
          ? "Njuko wird von ASICS Corporation übernommen"
          : "Njuko est acquise par ASICS Corporation",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "France" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
    },
    {
      id: "promethera-haotian-2020",
      titleTop: "PROMETHERA BIOSCIENCES S.A.",
      titleBottom: "HAO TIAN INTERNATIONAL",
      shortLabel: language === "EN" ? "RAISED FROM" : language === "IT" ? "RACCOLTO DA" : "LEVÉ AUPRÈS DE",
      date: "2020",
      detailDate: language === "EN" ? "July 2020" : language === "IT" ? "Luglio 2020" : "Juillet 2020",
      detailType: language === "EN" ? "FUNDRAISING" : language === "IT" ? "RACCOLTA FONDI" : "LEVÉE DE FONDS",
      detailDescription:
        language === "EN"
          ? "Promethera Biosciences S.A. receives convertible bond financing"
          : language === "IT"
          ? "Promethera Biosciences S.A. riceve finanziamento tramite obbligazioni convertibili"
          : "Promethera Biosciences S.A. reçoit un financement en obligations convertibles",
      value: language === "EN" ? "≈ €5M" : language === "IT" ? "≈ €5M" : "≈ 5 M€",
      country: language === "EN" ? "Belgium" : language === "IT" ? "Belgio" : "Belgique",
    },
    {
      id: "koki-eppendorf-2020",
      titleTop: "KOKI HOLDINGS (HIMAC)",
      titleBottom: "EPPENDORF AG",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : "VENDU À",
      date: "2020",
      detailDate: language === "EN" ? "March 2020" : language === "IT" ? "Marzo 2020" : "Mars 2020",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Koki Holdings (Himac brand) centrifuge business sold to Eppendorf AG"
          : language === "IT"
          ? "Attività centrifughe di Koki Holdings (marchio Himac) venduta a Eppendorf AG"
          : "Activité centrifugeuses de Koki Holdings (marque Himac) vendue à Eppendorf AG",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Japan" : language === "IT" ? "Giappone" : "Japon",
    },
    {
      id: "sabaf-paloma-2019",
      titleTop: "SABAF S.P.A.",
      titleBottom: "PALOMA CO., LTD.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : "ACQUIS PAR",
      date: "2019",
      detailDate: language === "EN" ? "November 2019" : language === "IT" ? "Novembre 2019" : "Novembre 2019",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Minority stake in Sabaf S.p.A. acquired by Paloma Co., Ltd."
          : language === "IT"
          ? "Partecipazione minoritaria di Sabaf S.p.A. acquisita da Paloma Co., Ltd."
          : "Participation minoritaire de Sabaf S.p.A. acquise par Paloma Co., Ltd.",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Italy" : language === "IT" ? "Italia" : "Italie",
    },
    {
      id: "linde-airwater-2019",
      titleTop: "LINDE INDIA LTD.",
      titleBottom: "AIR WATER INC.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : "ACQUIS PAR",
      date: "2019",
      detailDate: language === "EN" ? "June 2019" : language === "IT" ? "Giugno 2019" : "Juin 2019",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Industrial gas assets in South India acquired by Air Water Inc."
          : language === "IT"
          ? "Attivi di gas industriale nel sud dell'India acquisiti da Air Water Inc."
          : "Actifs gaziers industriels dans le sud de l'Inde acquis par Air Water Inc.",
      value: language === "EN" ? "~$194-220M" : language === "IT" ? "~$194-220M" : "~194-220 M$",
      country: language === "EN" ? "India" : language === "IT" ? "India" : "Inde",
    },
    {
      id: "terex-tadano-2019",
      titleTop: "DEMAG MOBILE CRANES (TEREX)",
      titleBottom: "TADANO LTD.",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : "VENDU À",
      date: "2019",
      detailDate: language === "EN" ? "February 2019" : language === "IT" ? "Febbraio 2019" : "Février 2019",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Demag Mobile Cranes division of Terex Corporation sold to Tadano Ltd."
          : language === "IT"
          ? "Divisione Demag Mobile Cranes di Terex Corporation venduta a Tadano Ltd."
          : "Division Demag Mobile Cranes de Terex Corporation vendue à Tadano Ltd.",
      value: language === "EN" ? "~$215M" : language === "IT" ? "~$215M" : "~215 M$",
      country: language === "EN" ? "Germany" : language === "IT" ? "Germania" : "Allemagne",
    },
    {
      id: "gemoneybank-2016",
      titleTop: "GE MONEY BANK FRANCE",
      titleBottom: "CERBERUS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : "VENDU À",
      date: "2016",
      detailDate: language === "EN" ? "June 2016" : language === "IT" ? "Giugno 2016" : "Juin 2016",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "GE Money Bank France (asset portfolio ~$4.6B) sold to Cerberus"
          : language === "IT"
          ? "GE Money Bank France (portafoglio attivi ~4,6 Md$) venduta a Cerberus"
          : "GE Money Bank France (portefeuille d'actifs ~4,6 Md$) vendue à Cerberus",
      value: language === "EN" ? "~$4.6B" : language === "IT" ? "~$4,6Md" : "~4,6 Md$",
      country: language === "EN" ? "France & DOM/TOM" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
    },
    {
      id: "reydel-2014",
      titleTop: "REYDEL AUTOMOTIVE FRANCE S.A.",
      titleBottom: "MOTHERSON SUMI SYSTEMS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : "VENDU À",
      date: "2014",
      detailDate: language === "EN" ? "September 2014" : language === "IT" ? "Settembre 2014" : "Septembre 2014",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Reydel Automotive France S.A. (global revenue > €1B) sold to Motherson Sumi Systems Limited"
          : language === "IT"
          ? "Reydel Automotive France S.A. (fatturato mondiale > 1 Md €) venduta a Motherson Sumi Systems Limited"
          : "Reydel Automotive France S.A. (CA mondial > 1 Md €) vendue à Motherson Sumi Systems Limited",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: "France",
    },
    {
      id: "simtronics-2011",
      titleTop: "SIMTRONICS AB (P2P)",
      titleBottom: "CARRIER",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : "ACQUIS PAR",
      date: "2011",
      detailDate: language === "EN" ? "February 2011" : language === "IT" ? "Febbraio 2011" : "Février 2011",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Simtronics AB (P2P) acquired by Carrier"
          : language === "IT"
          ? "Simtronics AB (P2P) acquisita da Carrier"
          : "Simtronics AB (P2P) acquise par Carrier",
      value: language === "EN" ? "~€49M" : language === "IT" ? "~€49M" : "~49 M €",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : "Suède",
    },
    {
      id: "gesecurity-2009",
      titleTop: "GE SECURITY",
      titleBottom: "UNITED TECHNOLOGIES",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : "VENDU À",
      date: "2009",
      detailDate: language === "EN" ? "November 2009" : language === "IT" ? "Novembre 2009" : "Novembre 2009",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "GE Security sold to United Technologies"
          : language === "IT"
          ? "GE Security venduta a United Technologies"
          : "GE Security vendue à United Technologies",
      value: language === "EN" ? "~€1.5B" : language === "IT" ? "~€1.5Md" : "~1,5 Md €",
      country: language === "EN" ? "United States" : language === "IT" ? "Stati Uniti" : "États-Unis",
    },
    {
      id: "hallkay-2008",
      titleTop: "HALL & KAY LTD.",
      titleBottom: "UTC FIRE & SECURITY",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : "ACQUIS PAR",
      date: "2008",
      detailDate: language === "EN" ? "March 2008" : language === "IT" ? "Marzo 2008" : "Mars 2008",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Hall & Kay Ltd. acquired by UTC Fire & Security"
          : language === "IT"
          ? "Hall & Kay Ltd. acquisita da UTC Fire & Security"
          : "Hall & Kay Ltd. acquise par UTC Fire & Security",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "United Kingdom" : language === "IT" ? "Regno Unito" : "Royaume-Uni",
    },
    {
      id: "marioff-2008",
      titleTop: "MARIOFF CORPORATION LTD.",
      titleBottom: "UTC FIRE & SECURITY",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : "ACQUIS PAR",
      date: "2008",
      detailDate: language === "EN" ? "January 2008" : language === "IT" ? "Gennaio 2008" : "Janvier 2008",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Marioff Corporation Ltd. (scope ~€234M) acquired by UTC Fire & Security"
          : language === "IT"
          ? "Marioff Corporation Ltd. (portata ~234 M €) acquisita da UTC Fire & Security"
          : "Marioff Corporation Ltd. (portée ~234 M €) acquise par UTC Fire & Security",
      value: language === "EN" ? "~€234M" : language === "IT" ? "~€234M" : "~234 M €",
      country: language === "EN" ? "Norway" : language === "IT" ? "Norvegia" : "Norvège",
    },
    {
      id: "canson-hamelin-2007",
      titleTop: "CANSON SA",
      titleBottom: "GROUPE HAMELIN",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : "CÉDÉE À",
      date: "2007",
      detailDate: language === "EN" ? "January 2007" : language === "IT" ? "Gennaio 2007" : "Janvier 2007",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Canson SA sold to Groupe Hamelin (FDD/ODD advisory for Hamelin)"
          : language === "IT"
          ? "Canson SA ceduta a Groupe Hamelin (consulenza FDD/ODD per Hamelin)"
          : "Canson SA cédée au Groupe Hamelin (conseil FDD/ODD pour Hamelin)",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: "France",
    },
    {
      id: "histoiredor-silverfleet-2006",
      titleTop: "HISTOIRE D'OR",
      titleBottom: "SILVERFLEET CAPITAL",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : "ACQUIS PAR",
      date: "2006",
      detailDate: language === "EN" ? "March 2006" : language === "IT" ? "Marzo 2006" : "Mars 2006",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Histoire d'Or acquired by Silverfleet Capital (FDD advisory for Silverfleet)"
          : language === "IT"
          ? "Histoire d'Or acquisita da Silverfleet Capital (consulenza FDD per Silverfleet)"
          : "Histoire d'Or acquise par Silverfleet Capital (conseil FDD pour Silverfleet)",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: "France",
    },
    {
      id: "orangeit-orange-2005",
      titleTop: "ORANGE IT",
      titleBottom: "ORANGE S.A.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : "ACQUIS PAR",
      date: "2005",
      detailDate: language === "EN" ? "June 2005" : language === "IT" ? "Giugno 2005" : "Juin 2005",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Orange IT acquired by Orange S.A."
          : language === "IT"
          ? "Orange IT acquisita da Orange S.A."
          : "Orange IT acquise par Orange S.A.",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: "France",
    },
  ];

  const INITIAL_COUNT = 4; // nombre initial de cartes affichées
  const visible = showAll ? transactions : transactions.slice(0, INITIAL_COUNT);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="heading-2 font-bold text-[#0b062b]">
            {language === "EN"
              ? "Deals completed by our collaborators"
              : language === "IT"
              ? "Operazioni effettuate dai nostri collaboratori"
              : language === "DE"
              ? "Von unseren Mitarbeitern durchgeführte Transaktionen"
              : "Opérations effectuées par nos collaborateurs"}
          </h2>
          <p className="text-gray-600 mt-3">
            {language === "EN"
              ? "A showcase of mandates, from France to Japan."
              : language === "IT"
              ? "Una vetrina di mandati, dalla Francia al Giappone."
              : language === "DE"
              ? "Eine Auswahl von Mandaten, von Frankreich bis Japan."
              : "Une vitrine de mandats, de la France au Japon."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {visible.map((tx) => (
            <motion.div
              key={tx.id}
              className="relative group rounded-xl overflow-hidden shadow-md bg-[#0b2b3a] aspect-square"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {/* Face 1: résumé */}
              <div className="p-4 h-full flex flex-col items-center justify-center text-center text-white">
                {tx.logoTop ? (
                  <div className="w-20 h-10 relative mb-2">
                    <Image src={getAssetPath(tx.logoTop)} alt={tx.titleTop} fill className="object-contain" />
                  </div>
                ) : (
                  <div className="text-xs opacity-90 tracking-wide mb-1">{tx.titleTop}</div>
                )}
                <div className="text-[10px] opacity-80 mb-1">{tx.shortLabel}</div>
                {tx.logoBottom ? (
                  <div className="w-24 h-10 relative">
                    <Image src={getAssetPath(tx.logoBottom)} alt={tx.titleBottom} fill className="object-contain" />
                  </div>
                ) : (
                  <div className="text-base font-semibold leading-tight">{tx.titleBottom}</div>
                )}
              </div>

              {/* Face 2: détails au hover */}
              <div className="absolute inset-0 bg-[#0b86c1] text-white p-5 flex flex-col justify-between text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {/* Contenu principal centré */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-[11px] opacity-90 mb-1">{tx.detailDate}</div>
                  <div className="text-sm font-bold mb-2">{tx.detailType}</div>
                  <div className="text-[13px] leading-snug mb-3">{tx.detailDescription}</div>
                  <div className="flex flex-wrap gap-2 text-[11px] opacity-90 justify-center">
                    {tx.value && (
                      <span className="bg-white/15 rounded-full px-2 py-1">{tx.value}</span>
                    )}
                    {tx.country && (
                      <span className="bg-white/15 rounded-full px-2 py-1">{tx.country}</span>
                    )}
                    <span className="bg-white/15 rounded-full px-2 py-1">{tx.date}</span>
                  </div>
                </div>
                {/* Photo et nom du collaborateur en bas */}
                <div className="flex items-center justify-center gap-2 pt-3 border-t border-white/20">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10">
                    <Image 
                      src={getAssetPath("/team/kevin.jpg")} 
                      alt="Kevin Lauwick-Baumeister" 
                      width={32} 
                      height={32} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-medium">Kevin Lauwick-Baumeister</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton Voir plus */}
        {transactions.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="bg-[#0001ff] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0b062b] transition-all duration-300"
            >
              {showAll
                ? (language === "EN" ? "Show less" : language === "IT" ? "Mostra meno" : language === "DE" ? "Weniger anzeigen" : "Voir moins")
                : (language === "EN" ? "Discover all transactions" : language === "IT" ? "Scoprite tutte le operazioni" : language === "DE" ? "Alle Transaktionen entdecken" : "Découvrez toutes les transactions")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Transactions;


