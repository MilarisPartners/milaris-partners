"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import { Building2, MapPin, FileText, Mail, Calendar, Filter } from "lucide-react";

type Mandate = {
  id: string;
  title: string;
  description: string;
  mandateType: "Sell-side" | "Buy-side" | "Levée de fonds";
  country: string;
  countryFlag: string;
  transactionType: "Minoritaire" | "Majoritaire" | "Build-up" | "";
  amount: string;
  partner: "Paul" | "Matteo";
};

type Transaction = {
  id: string;
  titleTop: string;
  titleBottom: string;
  shortLabel: string;
  date: string;
  detailDate: string;
  detailType: string;
  detailDescription: string;
  value?: string;
  country?: string;
  partner: "Paul" | "Matteo" | "Kevin";
};

const TransactionsPage = () => {
  const { t, language } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  // Email links
  const emailPaul = language === "DE" ? "mailto:paul@milaris.partners?subject=Anfrage zu Mandaten" : "mailto:paul@milaris.partners?subject=Demande d'information - Mandats";
  const emailMatteo = language === "DE" ? "mailto:matteo@milaris.partners?subject=Anfrage zu Mandaten" : "mailto:matteo@milaris.partners?subject=Demande d'information - Mandats";

  // Mandats en cours
  const currentMandates: Mandate[] = [
    {
      id: "mandate-2",
      title: language === "FR" ? "Mobilité Tech" : "Mobility Tech",
      description: language === "FR"
        ? "Conseille à la vente un acteur de la gestion de la mobilité électrique en discussion avancée. Cession à un stratégique ou investisseur financier possible"
        : language === "IT"
        ? "Società italiana attiva nella gestione intelligente della mobilità elettrica, con soluzioni digitali per flotte e infrastrutture di ricarica."
        : "Advising on the sale of an electric mobility management player in advanced discussions. Sale to a strategic buyer or financial investor possible",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : 10-15M€" : language === "IT" ? "Fatturato annuo pari a circa €10M" : "Revenue: 10-15M€",
      partner: "Matteo",
    },
    {
      id: "mandate-3",
      title: language === "FR" ? "Industrie" : language === "IT" ? "Industrials" : "Industry",
      description: language === "FR"
        ? "Conseil auprès d'un fonds industriel français dans un processus de build-up en Italie et en Allemagne"
        : language === "IT"
        ? "Fondo di private equity industriale attivo in Europa, focalizzato su acquisizioni di aziende manifatturiere e meccaniche per crescita."
        : "Advising a French industrial fund in a build-up process in Italy and Germany",
      mandateType: "Buy-side",
      country: language === "FR" ? "France / Allemagne / Italie" : language === "IT" ? "Francia / Germania / Italia" : "France / Germany / Italy",
      countryFlag: "🇫🇷 / 🇩🇪 / 🇮🇹",
      transactionType: "Build-up",
      amount: language === "FR" ? "EBITDA : > 2M€" : language === "IT" ? "EBITDA superiore ai €2M" : "EBITDA: > 2M€",
      partner: "Paul",
    },
    {
      id: "mandate-4",
      title: language === "FR" ? "Produits chimiques" : "Chemicals",
      description: language === "FR"
        ? "Conseil pour la cession d'un acteur italien de la chimie"
        : language === "IT"
        ? "Azienda italiana specializzata nella produzione di formulati chimici ad alte prestazioni per applicazioni industriali e professionali."
        : "Advising on the sale of an Italian chemical player",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : >15M€" : language === "IT" ? "Fatturato annuo superiore a €15M" : "Revenue: >15M€",
      partner: "Matteo",
    },
    {
      id: "mandate-5",
      title: language === "FR" ? "Industrie" : language === "IT" ? "Industrials" : "Industry",
      description: language === "FR"
        ? "Conseil d'un fonds d'investissement italien dans une stratégie de build-up en France"
        : language === "IT"
        ? "Fondo di investimento italiano impegnato in una strategia di build-up industriale in Francia, con interesse per società produttive medie."
        : "Advising an Italian investment fund in a build-up strategy in France",
      mandateType: "Buy-side",
      country: language === "FR" ? "France" : language === "IT" ? "Francia" : "France",
      countryFlag: "🇫🇷",
      transactionType: "Build-up",
      amount: language === "FR" ? "EBITDA : 2-8 M€" : language === "IT" ? "EBITDA target tra i €2M e gli €8M" : "EBITDA: 2-8 M€",
      partner: "Matteo",
    },
    {
      id: "mandate-6",
      title: language === "FR" ? "Engineering & Architecture" : "Construction and Engineering",
      description: language === "FR"
        ? "Conseil pour la cession minoritaire d'un studio d'architecture en Italie"
        : language === "IT"
        ? "Studio italiano di architettura e ingegneria con competenze in progetti complessi e sostenibili a livello nazionale e internazionale."
        : "Advising on the minority sale of an architecture studio in Italy",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Minoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : > 10 M€" : language === "IT" ? "Fatturato annuo superiore a €15M" : "Revenue: > 10 M€",
      partner: "Matteo",
    },
    {
      id: "mandate-7",
      title: language === "FR" ? "Sécurité routière" : "Road Safety",
      description: language === "FR"
        ? "Conseil pour la cession minoritaire d'une société industrielle de barrières routières éco-durables"
        : language === "IT"
        ? "Azienda italiana specializzata in soluzioni industriali per la sicurezza stradale e infrastrutture ecosostenibili."
        : "Advising on the minority sale of an industrial eco-sustainable road barriers company",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Minoritaire",
      amount: language === "FR" ? "Ticket d'investissement : 1,5-3 M€" : language === "IT" ? "Fatturato annuo pari a circa €10M" : "Investment ticket: 1.5-3 M€",
      partner: "Paul",
    },
    {
      id: "mandate-8",
      title: language === "FR" ? "Produits de luxe" : "Luxury Goods",
      description: language === "FR"
        ? "Conseil à la vente d'un acteur intégré dans la chaine de valeur de la production de produits de luxe"
        : language === "IT"
        ? "Azienda italiana integrata nella filiera produttiva dei beni di lusso, attiva nella realizzazione di componenti e accessori per brand internazionali."
        : "Advising on the sale of a player integrated in the luxury products production value chain",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : > 10M€" : language === "IT" ? "Fatturato annuo superiore a €10M" : "Revenue: > 10M€",
      partner: "Matteo",
    },
  ];

  // Transactions complétées
  const transactions: Transaction[] = [
    {
      id: "marcolini-mbk-2023",
      titleTop: language === "IT" ? "PIERRE MARCOLINI" : "PIERRE MARCOLINI S.A.",
      titleBottom: "MBK PARTNERS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2023",
      detailDate: language === "EN" ? "March 2023" : language === "IT" ? "Marzo 2023" : language === "DE" ? "März 2023" : "Mars 2023",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Pierre Marcolini S.A. is acquired by MBK Partners"
          : language === "IT"
          ? "Pierre Marcolini ceduta a MBK Partners nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "Pierre Marcolini S.A. wird von MBK Partners übernommen"
          : "Pierre Marcolini S.A. est cédée à MBK Partners",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Belgium" : language === "IT" ? "Belgio" : language === "DE" ? "Belgien" : "Belgique",
      partner: "Kevin",
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
          ? "Haglöfs ceduto da Asics a LionRock Capital nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "Asics verkaufte seine schwedische Outdoor-Marke Haglöfs an den Hongkonger Investmentfonds LionRock Capital"
          : "Asics a vendu sa marque suédoise outdoor Haglöfs au fonds d'investissement hongkongais LionRock Capital",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : language === "DE" ? "Schweden" : "Suède",
      partner: "Kevin",
    },
    {
      id: "systemair-panasonic-2022",
      titleTop: language === "IT" ? "SYSTEMAIR (DIV. AC)" : "SYSTEMAIR AB (DIV. AC)",
      titleBottom: language === "IT" ? "PANASONIC" : "PANASONIC CORPORATION",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2022",
      detailDate: language === "EN" ? "November 2022" : language === "IT" ? "Novembre 2022" : language === "DE" ? "November 2022" : "Novembre 2022",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "AC division of Systemair AB is sold to Panasonic Corporation"
          : language === "IT"
          ? "Divisione AC di Systemair ceduta a Panasonic nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "Die AC-Sparte von Systemair AB wird an Panasonic Corporation verkauft"
          : "La division AC de Systemair AB est vendue à Panasonic Corporation",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : language === "DE" ? "Schweden" : "Suède",
      partner: "Kevin",
    },
    {
      id: "njuko-asics-2022",
      titleTop: "NJUKO",
      titleBottom: language === "IT" ? "ASICS" : "ASICS CORPORATION",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2022",
      detailDate: language === "EN" ? "November 2022" : language === "IT" ? "Novembre 2022" : language === "DE" ? "November 2022" : "Novembre 2022",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Njuko is acquired by ASICS Corporation"
          : language === "IT"
          ? "Njuko acquisita da ASICS nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Njuko wird von ASICS Corporation übernommen"
          : "Njuko est acquise par ASICS Corporation",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "France & DOM/TOM" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      partner: "Kevin",
    },
    {
      id: "promethera-haotian-2020",
      titleTop: language === "IT" ? "PROMETHERA BIOSCIENCES" : "PROMETHERA BIOSCIENCES S.A.",
      titleBottom: "HAO TIAN INTERNATIONAL",
      shortLabel: language === "EN" ? "RAISED FROM" : language === "IT" ? "RACCOLTI DA" : language === "DE" ? "ERHALTEN VON" : "LEVÉ AUPRÈS DE",
      date: "2020",
      detailDate: language === "EN" ? "July 2020" : language === "IT" ? "Luglio 2020" : language === "DE" ? "Juli 2020" : "Juillet 2020",
      detailType: language === "EN" ? "FUNDRAISING" : language === "IT" ? "RACCOLTA FONDI" : language === "DE" ? "FUNDRAISING" : "LEVÉE DE FONDS",
      detailDescription:
        language === "EN"
          ? "Promethera Biosciences S.A. receives convertible bond financing"
          : language === "IT"
          ? "Promethera Biosciences ha ricevuto finanziamento da Hao Tian International nell'ambito di fundraising"
          : language === "DE"
          ? "Promethera Biosciences S.A. erhält Finanzierung durch wandelbare Anleihen"
          : "Promethera Biosciences S.A. reçoit un financement en obligations convertibles",
      value: language === "EN" ? "≈ €5M" : language === "IT" ? "≈ €5M" : "≈ 5 M€",
      country: language === "EN" ? "Belgium" : language === "IT" ? "Belgio" : language === "DE" ? "Belgien" : "Belgique",
      partner: "Kevin",
    },
    {
      id: "koki-eppendorf-2020",
      titleTop: "KOKI HOLDINGS (HIMAC)",
      titleBottom: language === "IT" ? "EPPENDORF" : "EPPENDORF AG",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2020",
      detailDate: language === "EN" ? "March 2020" : language === "IT" ? "Marzo 2020" : language === "DE" ? "März 2020" : "Mars 2020",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Koki Holdings (Himac brand) centrifuge business sold to Eppendorf AG"
          : language === "IT"
          ? "Attività centrifughe di Koki Holdings cedute a Eppendorf nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "Zentrifugengeschäft von Koki Holdings (Marke Himac) an Eppendorf AG verkauft"
          : "Activité centrifugeuses de Koki Holdings (marque Himac) vendue à Eppendorf AG",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Japan" : language === "IT" ? "Giappone" : language === "DE" ? "Japan" : "Japon",
      partner: "Kevin",
    },
    {
      id: "sabaf-paloma-2019",
      titleTop: language === "IT" ? "SABAF" : "SABAF S.P.A.",
      titleBottom: language === "IT" ? "PALOMA" : "PALOMA CO., LTD.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2019",
      detailDate: language === "EN" ? "November 2019" : language === "IT" ? "Novembre 2019" : language === "DE" ? "November 2019" : "Novembre 2019",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Minority stake in Sabaf S.p.A. acquired by Paloma Co., Ltd."
          : language === "IT"
          ? "Partecipazione minoritaria in Sabaf acquisita da Paloma nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Minderheitsbeteiligung an Sabaf S.p.A. von Paloma Co., Ltd. erworben"
          : "Participation minoritaire de Sabaf S.p.A. acquise par Paloma Co., Ltd.",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "Italy" : language === "IT" ? "Italia" : language === "DE" ? "Italien" : "Italie",
      partner: "Kevin",
    },
    {
      id: "linde-airwater-2019",
      titleTop: language === "IT" ? "LINDE INDIA" : "LINDE INDIA LTD.",
      titleBottom: language === "IT" ? "AIR WATER" : "AIR WATER INC.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2019",
      detailDate: language === "EN" ? "June 2019" : language === "IT" ? "Giugno 2019" : language === "DE" ? "Juni 2019" : "Juin 2019",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Industrial gas assets in South India acquired by Air Water Inc."
          : language === "IT"
          ? "Attivi di gas industriale nel sud India acquisiti da Air Water nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Industriegas-Assets in Südindien von Air Water Inc. erworben"
          : "Actifs gaziers industriels dans le sud de l'Inde acquis par Air Water Inc.",
      value: language === "EN" ? "~$194-220M" : language === "IT" ? "~$194-220M" : "~194-220 M$",
      country: language === "EN" ? "India" : language === "IT" ? "India" : language === "DE" ? "Indien" : "Inde",
      partner: "Kevin",
    },
    {
      id: "terex-tadano-2019",
      titleTop: "DEMAG MOBILE CRANES (TEREX)",
      titleBottom: language === "IT" ? "TADANO" : "TADANO LTD.",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2019",
      detailDate: language === "EN" ? "February 2019" : language === "IT" ? "Febbraio 2019" : language === "DE" ? "Februar 2019" : "Février 2019",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Demag Mobile Cranes division of Terex Corporation sold to Tadano Ltd."
          : language === "IT"
          ? "Divisione Demag Mobile Cranes di Terex ceduta a Tadano nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "Demag Mobile Cranes Division von Terex Corporation an Tadano Ltd. verkauft"
          : "Division Demag Mobile Cranes de Terex Corporation vendue à Tadano Ltd.",
      value: language === "EN" ? "~$215M" : language === "IT" ? "~$215M" : "~215 M$",
      country: language === "EN" ? "Germany" : language === "IT" ? "Germania" : language === "DE" ? "Deutschland" : "Allemagne",
      partner: "Kevin",
    },
    {
      id: "gemoneybank-2016",
      titleTop: "GE MONEY BANK FRANCE",
      titleBottom: "CERBERUS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2016",
      detailDate: language === "EN" ? "June 2016" : language === "IT" ? "Giugno 2016" : language === "DE" ? "Juni 2016" : "Juin 2016",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "GE Money Bank France (asset portfolio ~$4.6B) sold to Cerberus"
          : language === "IT"
          ? "GE Money Bank France ceduta a Cerberus nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "GE Money Bank France (Vermögensportfolio ~4,6 Mrd. $) an Cerberus verkauft"
          : "GE Money Bank France (portefeuille d'actifs ~4,6 Md$) vendue à Cerberus",
      value: language === "EN" ? "~$4.6B" : language === "IT" ? "~$4,6Md" : "~4,6 Md$",
      country: language === "EN" ? "France & DOM/TOM" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      partner: "Kevin",
    },
    {
      id: "reydel-2014",
      titleTop: language === "IT" ? "REYDEL AUTOMOTIVE FRANCE" : "REYDEL AUTOMOTIVE FRANCE S.A.",
      titleBottom: "MOTHERSON SUMI SYSTEMS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2014",
      detailDate: language === "EN" ? "September 2014" : language === "IT" ? "Settembre 2014" : language === "DE" ? "September 2014" : "Septembre 2014",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Reydel Automotive France S.A. (global revenue > €1B) sold to Motherson Sumi Systems Limited"
          : language === "IT"
          ? "Reydel Automotive France ceduta a Motherson Sumi Systems nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "Reydel Automotive France S.A. (globaler Umsatz > 1 Mrd. €) an Motherson Sumi Systems Limited verkauft"
          : "Reydel Automotive France S.A. (CA mondial > 1 Md €) vendue à Motherson Sumi Systems Limited",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "France & DOM/TOM" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      partner: "Kevin",
    },
    {
      id: "simtronics-2011",
      titleTop: language === "IT" ? "SIMTRONICS (P2P)" : "SIMTRONICS AB (P2P)",
      titleBottom: "CARRIER",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2011",
      detailDate: language === "EN" ? "February 2011" : language === "IT" ? "Febbraio 2011" : language === "DE" ? "Februar 2011" : "Février 2011",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Simtronics AB (P2P) acquired by Carrier"
          : language === "IT"
          ? "Simtronics (P2P) acquisita da Carrier nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Simtronics AB (P2P) von Carrier erworben"
          : "Simtronics AB (P2P) acquise par Carrier",
      value: language === "EN" ? "~€49M" : language === "IT" ? "~€49M" : "~49 M €",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : language === "DE" ? "Schweden" : "Suède",
      partner: "Kevin",
    },
    {
      id: "gesecurity-2009",
      titleTop: "GE SECURITY",
      titleBottom: "UNITED TECHNOLOGIES",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "CEDUTA A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2009",
      detailDate: language === "EN" ? "November 2009" : language === "IT" ? "Novembre 2009" : language === "DE" ? "November 2009" : "Novembre 2009",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "GE Security sold to United Technologies"
          : language === "IT"
          ? "GE Security ceduta a United Technologies nell'ambito di un'operazione di M&A sell-side"
          : language === "DE"
          ? "GE Security an United Technologies verkauft"
          : "GE Security vendue à United Technologies",
      value: language === "EN" ? "~€1.5B" : language === "IT" ? "~€1,5Md" : "~1,5 Md €",
      country: language === "EN" ? "United States" : language === "IT" ? "Stati Uniti" : language === "DE" ? "Vereinigte Staaten" : "États-Unis",
      partner: "Kevin",
    },
    {
      id: "hallkay-2008",
      titleTop: language === "IT" ? "HALL & KAY" : "HALL & KAY LTD.",
      titleBottom: "UTC FIRE & SECURITY",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2008",
      detailDate: language === "EN" ? "March 2008" : language === "IT" ? "Marzo 2008" : language === "DE" ? "März 2008" : "Mars 2008",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Hall & Kay Ltd. acquired by UTC Fire & Security"
          : language === "IT"
          ? "Hall & Kay acquisita da UTC Fire & Security nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Hall & Kay Ltd. von UTC Fire & Security erworben"
          : "Hall & Kay Ltd. acquise par UTC Fire & Security",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "United Kingdom" : language === "IT" ? "Regno Unito" : language === "DE" ? "Vereinigtes Königreich" : "Royaume-Uni",
      partner: "Kevin",
    },
    {
      id: "marioff-2008",
      titleTop: language === "IT" ? "MARIOFF" : "MARIOFF CORPORATION LTD.",
      titleBottom: "UTC FIRE & SECURITY",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2008",
      detailDate: language === "EN" ? "January 2008" : language === "IT" ? "Gennaio 2008" : language === "DE" ? "Januar 2008" : "Janvier 2008",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Marioff Corporation Ltd. (scope ~€234M) acquired by UTC Fire & Security"
          : language === "IT"
          ? "Marioff acquisita da UTC Fire & Security nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Marioff Corporation Ltd. (Umfang ~234 M €) von UTC Fire & Security erworben"
          : "Marioff Corporation Ltd. (portée ~234 M €) acquise par UTC Fire & Security",
      value: language === "EN" ? "~€234M" : language === "IT" ? "~€234M" : "~234 M €",
      country: language === "EN" ? "Norway" : language === "IT" ? "Norvegia" : language === "DE" ? "Norwegen" : "Norvège",
      partner: "Kevin",
    },
    {
      id: "canson-hamelin-2007",
      titleTop: language === "IT" ? "CANSON" : "CANSON SA",
      titleBottom: "GROUPE HAMELIN",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "VERKAUFT AN" : "CÉDÉE À",
      date: "2007",
      detailDate: language === "EN" ? "January 2007" : language === "IT" ? "Gennaio 2007" : language === "DE" ? "Januar 2007" : "Janvier 2007",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Canson SA sold to Groupe Hamelin (FDD/ODD advisory for Hamelin)"
          : language === "IT"
          ? "Canson acquisita da Groupe Hamelin nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Canson SA an Groupe Hamelin verkauft (FDD/ODD-Beratung für Hamelin)"
          : "Canson SA cédée au Groupe Hamelin (conseil FDD/ODD pour Hamelin)",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "France & DOM/TOM" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      partner: "Kevin",
    },
    {
      id: "histoiredor-silverfleet-2006",
      titleTop: "HISTOIRE D'OR",
      titleBottom: "SILVERFLEET CAPITAL",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2006",
      detailDate: language === "EN" ? "March 2006" : language === "IT" ? "Marzo 2006" : language === "DE" ? "März 2006" : "Mars 2006",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Histoire d'Or acquired by Silverfleet Capital (FDD advisory for Silverfleet)"
          : language === "IT"
          ? "Histoire d'Or acquisita da Silverfleet Capital nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Histoire d'Or von Silverfleet Capital erworben (FDD-Beratung für Silverfleet)"
          : "Histoire d'Or acquise par Silverfleet Capital (conseil FDD pour Silverfleet)",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "France & DOM/TOM" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      partner: "Kevin",
    },
    {
      id: "orangeit-orange-2005",
      titleTop: "ORANGE IT",
      titleBottom: language === "IT" ? "ORANGE" : "ORANGE S.A.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2005",
      detailDate: language === "EN" ? "June 2005" : language === "IT" ? "Giugno 2005" : language === "DE" ? "Juni 2005" : "Juin 2005",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Orange IT acquired by Orange S.A."
          : language === "IT"
          ? "Orange IT acquisita da Orange nell'ambito di un'operazione di M&A buy-side"
          : language === "DE"
          ? "Orange IT von Orange S.A. erworben"
          : "Orange IT acquise par Orange S.A.",
      value: language === "IT" ? "Riservato" : "Confidentiel",
      country: language === "EN" ? "France & DOM/TOM" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      partner: "Kevin",
    },
  ];

  // Filtre des pays uniques
  const uniqueCountries = Array.from(
    new Set(transactions.filter((t) => t.country).map((t) => t.country as string))
  );

  // Fonction pour traduire les noms de pays
  const translateCountry = (country: string) => {
    if (language === "IT") {
      switch (country) {
        case "France & DOM/TOM":
          return "Francia";
        case "Italy":
          return "Italia";
        case "Germany":
          return "Germania";
        case "Japan":
          return "Giappone";
        case "United Kingdom":
          return "Regno Unito";
        case "Spain":
          return "Spagna";
        case "Netherlands":
          return "Paesi Bassi";
        case "Belgium":
          return "Belgio";
        case "Switzerland":
          return "Svizzera";
        case "Austria":
          return "Austria";
        case "Luxembourg":
          return "Lussemburgo";
        case "Portugal":
          return "Portogallo";
        case "Ireland":
          return "Irlanda";
        case "Denmark":
          return "Danimarca";
        case "Sweden":
          return "Svezia";
        case "Norway":
          return "Norvegia";
        case "Finland":
          return "Finlandia";
        case "Poland":
          return "Polonia";
        case "Czech Republic":
          return "Repubblica Ceca";
        case "Hungary":
          return "Ungheria";
        case "Slovakia":
          return "Slovacchia";
        case "Slovenia":
          return "Slovenia";
        case "Croatia":
          return "Croazia";
        case "Romania":
          return "Romania";
        case "Bulgaria":
          return "Bulgaria";
        case "Greece":
          return "Grecia";
        case "Cyprus":
          return "Cipro";
        case "Malta":
          return "Malta";
        case "Estonia":
          return "Estonia";
        case "Latvia":
          return "Lettonia";
        case "Lithuania":
          return "Lituania";
        case "United States":
          return "Stati Uniti";
        case "Canada":
          return "Canada";
        case "Australia":
          return "Australia";
        case "New Zealand":
          return "Nuova Zelanda";
        case "Brazil":
          return "Brasile";
        case "Argentina":
          return "Argentina";
        case "Chile":
          return "Cile";
        case "Mexico":
          return "Messico";
        case "South Africa":
          return "Sudafrica";
        case "India":
          return "India";
        case "China":
          return "Cina";
        case "South Korea":
          return "Corea del Sud";
        case "Singapore":
          return "Singapore";
        case "Hong Kong":
          return "Hong Kong";
        case "Taiwan":
          return "Taiwan";
        case "Thailand":
          return "Thailandia";
        case "Malaysia":
          return "Malesia";
        case "Indonesia":
          return "Indonesia";
        case "Philippines":
          return "Filippine";
        case "Vietnam":
          return "Vietnam";
        case "Turkey":
          return "Turchia";
        case "Israel":
          return "Israele";
        case "United Arab Emirates":
          return "Emirati Arabi Uniti";
        case "Saudi Arabia":
          return "Arabia Saudita";
        case "Egypt":
          return "Egitto";
        case "Morocco":
          return "Marocco";
        case "Tunisia":
          return "Tunisia";
        case "Algeria":
          return "Algeria";
        case "Nigeria":
          return "Nigeria";
        case "Kenya":
          return "Kenya";
        case "Ghana":
          return "Ghana";
        case "Senegal":
          return "Senegal";
        case "Ivory Coast":
          return "Costa d'Avorio";
        case "Cameroon":
          return "Camerun";
        case "Ethiopia":
          return "Etiopia";
        case "Tanzania":
          return "Tanzania";
        case "Uganda":
          return "Uganda";
        case "Rwanda":
          return "Ruanda";
        case "Botswana":
          return "Botswana";
        case "Namibia":
          return "Namibia";
        case "Zambia":
          return "Zambia";
        case "Zimbabwe":
          return "Zimbabwe";
        case "Mozambique":
          return "Mozambico";
        case "Angola":
          return "Angola";
        case "Madagascar":
          return "Madagascar";
        case "Mauritius":
          return "Mauritius";
        case "Seychelles":
          return "Seychelles";
        case "Reunion":
          return "Riunione";
        case "Mayotte":
          return "Mayotte";
        case "Comoros":
          return "Comore";
        case "Djibouti":
          return "Gibuti";
        case "Somalia":
          return "Somalia";
        case "Eritrea":
          return "Eritrea";
        case "Sudan":
          return "Sudan";
        case "South Sudan":
          return "Sudan del Sud";
        case "Central African Republic":
          return "Repubblica Centrafricana";
        case "Chad":
          return "Ciad";
        case "Niger":
          return "Niger";
        case "Mali":
          return "Mali";
        case "Burkina Faso":
          return "Burkina Faso";
        case "Guinea":
          return "Guinea";
        case "Sierra Leone":
          return "Sierra Leone";
        case "Liberia":
          return "Liberia";
        case "Gambia":
          return "Gambia";
        case "Guinea-Bissau":
          return "Guinea-Bissau";
        case "Cape Verde":
          return "Capo Verde";
        case "São Tomé and Príncipe":
          return "São Tomé e Príncipe";
        case "Equatorial Guinea":
          return "Guinea Equatoriale";
        case "Gabon":
          return "Gabon";
        case "Republic of the Congo":
          return "Repubblica del Congo";
        case "Democratic Republic of the Congo":
          return "Repubblica Democratica del Congo";
        case "Burundi":
          return "Burundi";
        case "Malawi":
          return "Malawi";
        case "Lesotho":
          return "Lesotho";
        case "Swaziland":
          return "Swaziland";
        case "South Africa":
          return "Sudafrica";
        default:
          return country;
      }
    } else if (language === "DE") {
      switch (country) {
        case "France & DOM/TOM":
          return "Frankreich";
        case "Italy":
          return "Italien";
        case "Germany":
          return "Deutschland";
        case "Japan":
          return "Japan";
        case "United Kingdom":
          return "Vereinigtes Königreich";
        case "Spain":
          return "Spanien";
        case "Netherlands":
          return "Niederlande";
        case "Belgium":
          return "Belgien";
        case "Switzerland":
          return "Schweiz";
        case "Austria":
          return "Österreich";
        case "Luxembourg":
          return "Luxemburg";
        case "Portugal":
          return "Portugal";
        case "Ireland":
          return "Irland";
        case "Denmark":
          return "Dänemark";
        case "Sweden":
          return "Schweden";
        case "Norway":
          return "Norwegen";
        case "Finland":
          return "Finnland";
        case "Poland":
          return "Polen";
        case "Czech Republic":
          return "Tschechische Republik";
        case "Hungary":
          return "Ungarn";
        case "Slovakia":
          return "Slowakei";
        case "Slovenia":
          return "Slowenien";
        case "Croatia":
          return "Kroatien";
        case "Romania":
          return "Rumänien";
        case "Bulgaria":
          return "Bulgarien";
        case "Greece":
          return "Griechenland";
        case "Cyprus":
          return "Zypern";
        case "Malta":
          return "Malta";
        case "Estonia":
          return "Estland";
        case "Latvia":
          return "Lettland";
        case "Lithuania":
          return "Litauen";
        case "United States":
          return "Vereinigte Staaten";
        case "Canada":
          return "Kanada";
        case "Australia":
          return "Australien";
        case "New Zealand":
          return "Neuseeland";
        case "Brazil":
          return "Brasilien";
        case "Argentina":
          return "Argentinien";
        case "Chile":
          return "Chile";
        case "Mexico":
          return "Mexiko";
        case "South Africa":
          return "Südafrika";
        case "India":
          return "Indien";
        case "China":
          return "China";
        case "South Korea":
          return "Südkorea";
        case "Singapore":
          return "Singapur";
        case "Hong Kong":
          return "Hongkong";
        case "Taiwan":
          return "Taiwan";
        case "Thailand":
          return "Thailand";
        case "Malaysia":
          return "Malaysia";
        case "Indonesia":
          return "Indonesien";
        case "Philippines":
          return "Philippinen";
        case "Vietnam":
          return "Vietnam";
        case "Turkey":
          return "Türkei";
        case "Israel":
          return "Israel";
        case "United Arab Emirates":
          return "Vereinigte Arabische Emirate";
        case "Saudi Arabia":
          return "Saudi-Arabien";
        case "Egypt":
          return "Ägypten";
        case "Morocco":
          return "Marokko";
        case "Tunisia":
          return "Tunesien";
        case "Algeria":
          return "Algerien";
        case "Nigeria":
          return "Nigeria";
        case "Kenya":
          return "Kenia";
        case "Ghana":
          return "Ghana";
        case "Senegal":
          return "Senegal";
        case "Ivory Coast":
          return "Elfenbeinküste";
        case "Cameroon":
          return "Kamerun";
        case "Ethiopia":
          return "Äthiopien";
        case "Tanzania":
          return "Tansania";
        case "Uganda":
          return "Uganda";
        case "Rwanda":
          return "Ruanda";
        case "Botswana":
          return "Botswana";
        case "Namibia":
          return "Namibia";
        case "Zambia":
          return "Sambia";
        case "Zimbabwe":
          return "Simbabwe";
        case "Mozambique":
          return "Mosambik";
        case "Angola":
          return "Angola";
        case "Madagascar":
          return "Madagaskar";
        case "Mauritius":
          return "Mauritius";
        case "Seychelles":
          return "Seychellen";
        case "Reunion":
          return "Réunion";
        case "Mayotte":
          return "Mayotte";
        case "Comoros":
          return "Komoren";
        case "Djibouti":
          return "Dschibuti";
        case "Somalia":
          return "Somalia";
        case "Eritrea":
          return "Eritrea";
        case "Sudan":
          return "Sudan";
        case "South Sudan":
          return "Südsudan";
        case "Central African Republic":
          return "Zentralafrikanische Republik";
        case "Chad":
          return "Tschad";
        case "Niger":
          return "Niger";
        case "Mali":
          return "Mali";
        case "Burkina Faso":
          return "Burkina Faso";
        case "Guinea":
          return "Guinea";
        case "Sierra Leone":
          return "Sierra Leone";
        case "Liberia":
          return "Liberia";
        case "Gambia":
          return "Gambia";
        case "Guinea-Bissau":
          return "Guinea-Bissau";
        case "Cape Verde":
          return "Kap Verde";
        case "São Tomé and Príncipe":
          return "São Tomé und Príncipe";
        case "Equatorial Guinea":
          return "Äquatorialguinea";
        case "Gabon":
          return "Gabun";
        case "Republic of the Congo":
          return "Republik Kongo";
        case "Democratic Republic of the Congo":
          return "Demokratische Republik Kongo";
        case "Burundi":
          return "Burundi";
        case "Malawi":
          return "Malawi";
        case "Lesotho":
          return "Lesotho";
        case "Swaziland":
          return "Swasiland";
        default:
          return country;
      }
    } else if (language === "FR") {
      switch (country) {
        case "France & DOM/TOM":
          return "France";
        case "Italy":
          return "Italie";
        case "Germany":
          return "Allemagne";
        case "Japan":
          return "Japon";
        case "United Kingdom":
          return "Royaume-Uni";
        case "Spain":
          return "Espagne";
        case "Netherlands":
          return "Pays-Bas";
        case "Belgium":
          return "Belgique";
        case "Switzerland":
          return "Suisse";
        case "Austria":
          return "Autriche";
        case "Luxembourg":
          return "Luxembourg";
        case "Portugal":
          return "Portugal";
        case "Ireland":
          return "Irlande";
        case "Denmark":
          return "Danemark";
        case "Sweden":
          return "Suède";
        case "Norway":
          return "Norvège";
        case "Finland":
          return "Finlande";
        case "Poland":
          return "Pologne";
        case "Czech Republic":
          return "République tchèque";
        case "Hungary":
          return "Hongrie";
        case "Slovakia":
          return "Slovaquie";
        case "Slovenia":
          return "Slovénie";
        case "Croatia":
          return "Croatie";
        case "Romania":
          return "Roumanie";
        case "Bulgaria":
          return "Bulgarie";
        case "Greece":
          return "Grèce";
        case "Cyprus":
          return "Chypre";
        case "Malta":
          return "Malte";
        case "Estonia":
          return "Estonie";
        case "Latvia":
          return "Lettonie";
        case "Lithuania":
          return "Lituanie";
        case "United States":
          return "États-Unis";
        case "Canada":
          return "Canada";
        case "Australia":
          return "Australie";
        case "New Zealand":
          return "Nouvelle-Zélande";
        case "Brazil":
          return "Brésil";
        case "Argentina":
          return "Argentine";
        case "Chile":
          return "Chili";
        case "Mexico":
          return "Mexique";
        case "South Africa":
          return "Afrique du Sud";
        case "India":
          return "Inde";
        case "China":
          return "Chine";
        case "South Korea":
          return "Corée du Sud";
        case "Singapore":
          return "Singapour";
        case "Hong Kong":
          return "Hong Kong";
        case "Taiwan":
          return "Taïwan";
        case "Thailand":
          return "Thaïlande";
        case "Malaysia":
          return "Malaisie";
        case "Indonesia":
          return "Indonésie";
        case "Philippines":
          return "Philippines";
        case "Vietnam":
          return "Vietnam";
        case "Turkey":
          return "Turquie";
        case "Israel":
          return "Israël";
        case "United Arab Emirates":
          return "Émirats arabes unis";
        case "Saudi Arabia":
          return "Arabie saoudite";
        case "Egypt":
          return "Égypte";
        case "Morocco":
          return "Maroc";
        case "Tunisia":
          return "Tunisie";
        case "Algeria":
          return "Algérie";
        case "Nigeria":
          return "Nigeria";
        case "Kenya":
          return "Kenya";
        case "Ghana":
          return "Ghana";
        case "Senegal":
          return "Sénégal";
        case "Ivory Coast":
          return "Côte d'Ivoire";
        case "Cameroon":
          return "Cameroun";
        case "Ethiopia":
          return "Éthiopie";
        case "Tanzania":
          return "Tanzanie";
        case "Uganda":
          return "Ouganda";
        case "Rwanda":
          return "Rwanda";
        case "Botswana":
          return "Botswana";
        case "Namibia":
          return "Namibie";
        case "Zambia":
          return "Zambie";
        case "Zimbabwe":
          return "Zimbabwe";
        case "Mozambique":
          return "Mozambique";
        case "Angola":
          return "Angola";
        case "Madagascar":
          return "Madagascar";
        case "Mauritius":
          return "Maurice";
        case "Seychelles":
          return "Seychelles";
        case "Reunion":
          return "Réunion";
        case "Mayotte":
          return "Mayotte";
        case "Comoros":
          return "Comores";
        case "Djibouti":
          return "Djibouti";
        case "Somalia":
          return "Somalie";
        case "Eritrea":
          return "Érythrée";
        case "Sudan":
          return "Soudan";
        case "South Sudan":
          return "Soudan du Sud";
        case "Central African Republic":
          return "République centrafricaine";
        case "Chad":
          return "Tchad";
        case "Niger":
          return "Niger";
        case "Mali":
          return "Mali";
        case "Burkina Faso":
          return "Burkina Faso";
        case "Guinea":
          return "Guinée";
        case "Sierra Leone":
          return "Sierra Leone";
        case "Liberia":
          return "Liberia";
        case "Gambia":
          return "Gambie";
        case "Guinea-Bissau":
          return "Guinée-Bissau";
        case "Cape Verde":
          return "Cap-Vert";
        case "São Tomé and Príncipe":
          return "São Tomé-et-Príncipe";
        case "Equatorial Guinea":
          return "Guinée équatoriale";
        case "Gabon":
          return "Gabon";
        case "Republic of the Congo":
          return "République du Congo";
        case "Democratic Republic of the Congo":
          return "République démocratique du Congo";
        case "Burundi":
          return "Burundi";
        case "Malawi":
          return "Malawi";
        case "Lesotho":
          return "Lesotho";
        case "Swaziland":
          return "Swaziland";
        default:
          return country;
      }
    }
    return country;
  };

  // Transactions filtrées
  const filteredTransactions = selectedCountry === "all" 
    ? transactions 
    : transactions.filter((t) => t.country === selectedCountry);

  // Labels pour les types de mandats
  const getMandateTypeLabel = (type: string) => {
    if (language === "EN") {
      return type;
    } else if (language === "IT") {
      return type === "Sell-side" ? "Sell-side" : type === "Buy-side" ? "Buy-side" : "Raccolta fondi";
    } else if (language === "DE") {
      return type === "Sell-side" ? "Sell-side" : type === "Buy-side" ? "Buy-side" : "Fundraising";
    }
    return type === "Sell-side" ? "Sell-side" : type === "Buy-side" ? "Buy-side" : type;
  };

  return (
    <main className="min-h-screen bg-white">
      <SEOHead pageName="transactions" language={language} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-[#0001ff]/5">
        {/* Animated decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-20 -right-20 w-40 sm:w-80 h-40 sm:h-80 bg-[#0001ff]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-48 sm:w-96 h-48 sm:h-96 bg-[#3E8BFF]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-[#0b062b]">
              {language === "EN" ? (
                <>
                  Our operations and <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >mandates in progress</span>
                </>
              ) : language === "IT" ? (
                <>
                  <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >Mandati in corso</span> e operazioni realizzate
                </>
              ) : language === "DE" ? (
                <>
                  Unsere <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >Transaktionen</span> und laufende Mandate
                </>
              ) : (
                <>
                  Nos opérations et <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >mandats en cours</span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {language === "EN"
                ? "Our team has extensive international M&A experience, with numerous transactions completed across multiple countries."
                : language === "IT"
                ? "Il nostro team vanta una forte esperienza in M&A a livello internazionale, con numerose operazioni concluse in diversi Paesi."
                : language === "DE"
                ? "Unser Team verfügt über umfangreiche M&A-Erfahrung weltweit und hat zahlreiche Transaktionen in verschiedenen Ländern erfolgreich begleitet."
                : "Notre équipe dispose d'une solide expérience en M&A à l'international, avec de nombreuses transactions réalisées dans plusieurs pays."}
            </p>
          </div>
        </div>
        
        {/* Company Logos Scrolling - Full Width */}
        <div className="relative w-full overflow-hidden mt-16">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50/80 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50/80 via-transparent to-transparent z-10 pointer-events-none" />
          
          {/* Top row - scrolling right to left */}
          <div className="overflow-hidden mb-4">
            <div className="flex space-x-8 animate-scroll-left">
              {Array(6).fill(["ASICS", "PROMETHERA", "EPPENDORF", "SABAF", "TADANO", "GE MONEY BANK", "PIERRE MARCOLINI", "SYSTEMAIR"]).flat().map((company, idx) => (
                <div key={`company-row1-${idx}`} className="text-gray-400 text-lg md:text-xl font-semibold whitespace-nowrap flex-shrink-0">
                  {company}
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom row - scrolling left to right */}
          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-scroll-right">
              {Array(6).fill(["KOKI HOLDINGS", "PALOMA", "HISTOIRE D'OR", "ORANGE", "LINDE", "TEREX", "DEMAG", "NJUKO"]).flat().map((company, idx) => (
                <div key={`company-row2-${idx}`} className="text-gray-400 text-lg md:text-xl font-semibold whitespace-nowrap flex-shrink-0">
                  {company}
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional fade gradients for bottom row */}
          <div className="absolute left-0 bottom-0 w-32 h-full bg-gradient-to-r from-blue-50/80 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-32 h-full bg-gradient-to-l from-blue-50/80 via-transparent to-transparent z-10 pointer-events-none" />
        </div>
        
        {/* Fade transition to gray section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-transparent to-gray-50 pointer-events-none" />
      </section>

      {/* Current Mandates Section */}
      <section className="py-20 bg-gray-50 -mt-32 pt-32">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0b062b]">
              {language === "EN" ? (
                <>
                  Our current <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >mandates</span>
                </>
              ) : language === "IT" ? (
                <>
                  Le <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >transazioni</span> seguite dal nostro team
                </>
              ) : language === "DE" ? (
                <>
                  Unsere aktuellen <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >Mandate</span>
                </>
              ) : (
                <>
                  Nos <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >mandats</span> en cours
                </>
              )}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === "EN"
                ? "Some operations currently being carried out by our teams."
                : language === "IT"
                ? "Una panoramica di alcune operazioni attualmente seguite dal nostro team."
                : language === "DE"
                ? "Einige aktuell von unseren Teams durchgeführte Operationen."
                : "Quelques opérations actuellement en cours de réalisation par nos équipes."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMandates.map((mandate, idx) => (
              <motion.div
                key={mandate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow relative flex flex-col h-full"
              >
                {/* Badge en haut à gauche */}
                <div className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full text-white font-semibold ${
                  mandate.mandateType === "Sell-side" ? "bg-[#0001ff]" : 
                  mandate.mandateType === "Buy-side" ? "bg-green-500" : 
                  "bg-purple-500"
                }`}>
                  {getMandateTypeLabel(mandate.mandateType)}
                </div>
                
                <h3 className="text-xl font-bold text-[#0b062b] mb-3 mt-8">
                  {mandate.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {mandate.description}
                </p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="mr-2">{mandate.countryFlag}</span>
                    <span>{mandate.country}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FileText className="w-4 h-4 mr-2" />
                    <span>
                      {language === "IT" 
                        ? (mandate.id === "mandate-4" || mandate.id === "mandate-7"
                            ? "Capitale per la crescita"
                            : mandate.transactionType === "Majoritaire" 
                            ? "Cessione maggioritaria" 
                            : mandate.transactionType === "Minoritaire" 
                            ? "Cessione minoritaria"
                            : mandate.transactionType === "Build-up"
                            ? "Operazione di build-up"
                            : mandate.transactionType)
                        : mandate.transactionType}
                    </span>
                  </div>
                  <div className="text-xs text-[#0001ff] font-normal">
                    {mandate.amount}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center mt-auto">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image 
                      src={getAssetPath(`/team/${mandate.partner.toLowerCase()}-optimized.jpg`)} 
                      alt={mandate.partner} 
                      width={40} 
                      height={40} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <div className="text-xs text-gray-500 uppercase font-medium">
                      MANAGING PARTNER
                    </div>
                    <div className="text-[#0b062b] font-medium">
                      {mandate.partner} {mandate.partner === "Paul" ? "Poulain" : "Orlandi Mango"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0001ff] to-blue-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "EN"
                ? "Learn more about our current and upcoming mandates"
                : language === "IT"
                ? "Scoprite su quali mandati stiamo lavorando e cosa ci attende!"
                : language === "DE"
                ? "Erfahren Sie mehr über unsere aktuellen und künftigen Mandate"
                : "En savoir plus sur nos mandats actuels et à venir"}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {language === "EN"
                ? "Contact our partners to discuss your project."
                : language === "IT"
                ? "Mettetevi in contatto con i nostri partner per parlare del vostro progetto."
                : language === "DE"
                ? "Kontaktieren Sie unsere Partner, um Ihr Projekt zu besprechen."
                : "Contactez nos associés pour discuter de votre projet."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={emailPaul}
                className="bg-white text-[#0001ff] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {language === "EN" ? "Contact Paul" : language === "IT" ? "Contattate Paul" : language === "DE" ? "Paul kontaktieren" : "Contacter Paul"}
              </a>
              <a
                href={emailMatteo}
                className="bg-white text-[#0001ff] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {language === "EN" ? "Contact Matteo" : language === "IT" ? "Contattate Matteo" : language === "DE" ? "Matteo kontaktieren" : "Contacter Matteo"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Transactions Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0b062b]">
              {language === "EN" ? (
                <>
                  Operations <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >accompanied</span> by our collaborators
                </>
              ) : language === "IT" ? (
                <>
                  Le <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >transazioni</span> che raccontano la nostra esperienza
                </>
              ) : language === "DE" ? (
                <>
                  Von unseren <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >Mitarbeitern begleitete</span> Transaktionen
                </>
              ) : (
                <>
                  Les opérations <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0001ff] via-[#3E8BFF] to-[#0001ff] animate-gradient-x"
                  >accompagnées</span> par nos collaborateurs
                </>
              )}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === "EN"
                ? "A showcase of mandates, from France to Japan."
                : language === "IT"
                ? "Una raccolta di operazioni seguite dai nostri professionisti in Europa e nel mondo."
                : language === "DE"
                ? "Eine Auswahl von Mandaten, von Frankreich bis Japan."
                : "Une vitrine de mandats, de la France au Japon."}
            </p>
          </div>

          {/* Country Filter */}
          <div className="mb-8 flex items-center justify-center flex-wrap gap-2">
            <div className="flex items-center gap-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">
                {language === "EN"
                  ? "Filter by country:"
                  : language === "IT"
                  ? "Filtra per paese:"
                  : language === "DE"
                  ? "Nach Land filtern:"
                  : "Filtrer par pays :"}
              </span>
            </div>
            <button
              onClick={() => setSelectedCountry("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCountry === "all"
                  ? "bg-[#0001ff] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {language === "EN" ? "All" : language === "IT" ? "Tutti" : language === "DE" ? "Alle" : "Tous"}
            </button>
            {uniqueCountries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCountry === country
                    ? "bg-[#0001ff] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {translateCountry(country)}
              </button>
            ))}
          </div>

          {/* Transactions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredTransactions.map((tx, idx) => (
              <motion.div
                key={tx.id}
                className="relative group rounded-xl overflow-hidden shadow-md bg-[#0b2b3a] aspect-square"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {/* Face 1: résumé */}
                <div className="p-4 h-full flex flex-col items-center justify-center text-center text-white">
                  <div className="text-xs opacity-90 tracking-wide mb-1">{tx.titleTop}</div>
                  <div className="text-[10px] opacity-80 mb-1">{tx.shortLabel}</div>
                  <div className="text-base font-semibold leading-tight">{tx.titleBottom}</div>
                </div>

                {/* Face 2: détails au hover */}
                <div className="absolute inset-0 bg-[#0b86c1] text-white p-5 flex flex-col justify-between text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
        </div>
      </section>

      <Footer variant="dark" />
    </main>
  );
};

export default TransactionsPage;
