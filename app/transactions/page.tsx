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
      id: "mandate-1",
      title: language === "FR" ? "Acteur du prêt-à-porter premium" : language === "IT" ? "Attore del prêt-à-porter premium" : language === "DE" ? "Premium Ready-to-Wear Player" : "Premium ready-to-wear player",
      description: language === "FR" 
        ? "Conseille un acteur emblématique du prêt-à-porter masculin premium dans le cadre de sa cession stratégique" 
        : language === "IT" 
        ? "Consulenza a un attore emblematico del prêt-à-porter maschile premium per la sua cessione strategica"
        : language === "DE"
        ? "Beratung eines Premium-Herrenbekleidungsakteurs bei seinem strategischen Verkauf"
        : "Advising an iconic premium men's ready-to-wear player in its strategic sale",
      mandateType: "Sell-side",
      country: language === "FR" ? "France" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      countryFlag: "🇫🇷",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : 20-30M€" : language === "IT" ? "Fatturato : 20-30M€" : language === "DE" ? "Umsatz: 20-30M€" : "Revenue: 20-30M€",
      partner: "Paul",
    },
    {
      id: "mandate-2",
      title: language === "FR" ? "Mobilité électrique" : language === "IT" ? "Mobilità elettrica" : language === "DE" ? "Elektromobilität" : "Electric mobility",
      description: language === "FR"
        ? "Conseille à la vente un acteur de la gestion de la mobilité électrique en discussion avancée. Cession à un stratégique ou investisseur financier possible"
        : language === "IT"
        ? "Consulenza alla vendita di un attore della gestione della mobilità elettrica in discussione avanzata. Cessione a uno strategico o investitore finanziario possibile"
        : language === "DE"
        ? "Beratung beim Verkauf eines Akteurs im Elektromobilitätsmanagement in fortgeschrittenen Gesprächen. Verkauf an einen strategischen Käufer oder Finanzinvestor möglich"
        : "Advising on the sale of an electric mobility management player in advanced discussions. Sale to a strategic buyer or financial investor possible",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : language === "DE" ? "Italien" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : 10-15M€" : language === "IT" ? "Fatturato : 10-15M€" : language === "DE" ? "Umsatz: 10-15M€" : "Revenue: 10-15M€",
      partner: "Matteo",
    },
    {
      id: "mandate-3",
      title: language === "FR" ? "Fonds industriel français" : language === "IT" ? "Fondo industriale francese" : language === "DE" ? "Französischer Industriefonds" : "French industrial fund",
      description: language === "FR"
        ? "Conseil auprès d'un fonds industriel français dans un processus de build-up en Italie et en Allemagne"
        : language === "IT"
        ? "Consulenza a un fondo industriale francese in un processo di build-up in Italia e Germania"
        : language === "DE"
        ? "Beratung eines französischen Industriefonds in einem Build-up-Prozess in Italien und Deutschland"
        : "Advising a French industrial fund in a build-up process in Italy and Germany",
      mandateType: "Buy-side",
      country: language === "FR" ? "France / Allemagne / Italie" : language === "IT" ? "Francia / Germania / Italia" : language === "DE" ? "Frankreich / Deutschland / Italien" : "France / Germany / Italy",
      countryFlag: "🇫🇷 / 🇩🇪 / 🇮🇹",
      transactionType: "Build-up",
      amount: language === "FR" ? "EBITDA : > 2M€" : language === "IT" ? "EBITDA : > 2M€" : language === "DE" ? "EBITDA: > 2M€" : "EBITDA: > 2M€",
      partner: "Matteo",
    },
    {
      id: "mandate-4",
      title: language === "FR" ? "Acteur italien de la chimie" : language === "IT" ? "Attore italiano della chimica" : language === "DE" ? "Italienischer Akteur der Chemie" : "Italian chemical actor",
      description: language === "FR"
        ? "Conseil pour la cession d'un acteur italien de la chimie"
        : language === "IT"
        ? "Consulenza per la cessione di un attore italiano della chimica"
        : language === "DE"
        ? "Beratung beim Verkauf eines italienischen Chemie-Akteurs"
        : "Advising on the sale of an Italian chemical player",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : language === "DE" ? "Italien" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : >15M€" : language === "IT" ? "Fatturato : >15M€" : language === "DE" ? "Umsatz: >15M€" : "Revenue: >15M€",
      partner: "Matteo",
    },
    {
      id: "mandate-5",
      title: language === "FR" ? "Build-up détection incendie" : language === "IT" ? "Build-up rilevamento incendi" : language === "DE" ? "Build-up Branderkennung" : "Build-up fire detection",
      description: language === "FR"
        ? "Conseil d'un fonds d'investissement dans une stratégie de build-up en France, dans la détection incendie"
        : language === "IT"
        ? "Consulenza di un fondo di investimento in una strategia di build-up in Francia, nel rilevamento incendi"
        : language === "DE"
        ? "Beratung eines Investmentfonds in einer Build-up-Strategie in Frankreich im Bereich Branderkennung"
        : "Advising an investment fund in a build-up strategy in France, in fire detection",
      mandateType: "Buy-side",
      country: language === "FR" ? "France" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      countryFlag: "🇫🇷",
      transactionType: "Build-up",
      amount: language === "FR" ? "EBITDA : 2-8 M€" : language === "IT" ? "EBITDA : 2-8 M€" : language === "DE" ? "EBITDA: 2-8 M€" : "EBITDA: 2-8 M€",
      partner: "Matteo",
    },
    {
      id: "mandate-6",
      title: language === "FR" ? "Studio d'architecture" : language === "IT" ? "Studio di architettura" : language === "DE" ? "Architekturstudio" : "Architecture studio",
      description: language === "FR"
        ? "Conseil pour la cession minoritaire d'un studio d'architecture en Italie"
        : language === "IT"
        ? "Consulenza per la cessione minoritaria di uno studio di architettura in Italia"
        : language === "DE"
        ? "Beratung beim Minderheitsverkauf eines Architekturstudios in Italien"
        : "Advising on the minority sale of an architecture studio in Italy",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : language === "DE" ? "Italien" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Minoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : > 10 M€" : language === "IT" ? "Fatturato : > 10 M€" : language === "DE" ? "Umsatz: > 10 M€" : "Revenue: > 10 M€",
      partner: "Matteo",
    },
    {
      id: "mandate-7",
      title: language === "FR" ? "Barrières routières éco-durables" : language === "IT" ? "Barriere stradali eco-sostenibili" : language === "DE" ? "Öko-nachhaltige Straßensperren" : "Eco-sustainable road barriers",
      description: language === "FR"
        ? "Conseil pour la cession minoritaire d'une société industrielle de barrières routières éco-durables"
        : language === "IT"
        ? "Consulenza per la cessione minoritaria di una società industriale di barriere stradali eco-sostenibili"
        : language === "DE"
        ? "Beratung beim Minderheitsverkauf eines Industrieunternehmens für öko-nachhaltige Straßensperren"
        : "Advising on the minority sale of an industrial eco-sustainable road barriers company",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : language === "DE" ? "Italien" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Minoritaire",
      amount: language === "FR" ? "Ticket d'investissement : 1,5-3 M€" : language === "IT" ? "Ticket di investimento : 1,5-3 M€" : language === "DE" ? "Investitionsticket: 1,5-3 M€" : "Investment ticket: 1.5-3 M€",
      partner: "Paul",
    },
    {
      id: "mandate-8",
      title: language === "FR" ? "Tannerie italienne" : language === "IT" ? "Conceria italiana" : language === "DE" ? "Italienische Gerberei" : "Italian tannery",
      description: language === "FR"
        ? "Conseil pour la cession majoritaire d'une tannerie en Italie"
        : language === "IT"
        ? "Consulenza per la cessione maggioritaria di una conceria in Italia"
        : language === "DE"
        ? "Beratung beim Mehrheitsverkauf einer Gerberei in Italien"
        : "Advising on the majority sale of a tannery in Italy",
      mandateType: "Sell-side",
      country: language === "FR" ? "Italie" : language === "IT" ? "Italia" : language === "DE" ? "Italien" : "Italy",
      countryFlag: "🇮🇹",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : > 10M€" : language === "IT" ? "Fatturato : > 10M€" : language === "DE" ? "Umsatz: > 10M€" : "Revenue: > 10M€",
      partner: "Matteo",
    },
    {
      id: "mandate-9",
      title: language === "FR" ? "Distributeur de vins & spiritueux" : language === "IT" ? "Distributore di vini e spiriti" : language === "DE" ? "Vertreiber von Weinen und Spirituosen" : "Wine & spirits distributor",
      description: language === "FR"
        ? "Conseil pour la cession d'un distributeur de vins & spiritueux"
        : language === "IT"
        ? "Consulenza per la cessione di un distributore di vini e spiriti"
        : language === "DE"
        ? "Beratung beim Verkauf eines Vertreibers von Weinen und Spirituosen"
        : "Advising on the sale of a wine & spirits distributor",
      mandateType: "Sell-side",
      country: language === "FR" ? "France" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      countryFlag: "🇫🇷",
      transactionType: "Majoritaire",
      amount: language === "FR" ? "Chiffre d'affaires : > 40M€" : language === "IT" ? "Fatturato : > 40M€" : language === "DE" ? "Umsatz: > 40M€" : "Revenue: > 40M€",
      partner: "Paul",
    },
  ];

  // Transactions complétées
  const transactions: Transaction[] = [
    {
      id: "marcolini-mbk-2023",
      titleTop: "PIERRE MARCOLINI S.A.",
      titleBottom: "MBK PARTNERS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
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
      value: "Confidentiel",
      country: language === "EN" ? "Belgium" : language === "IT" ? "Belgio" : language === "DE" ? "Belgien" : "Belgique",
      partner: "Kevin",
    },
    {
      id: "haglofs-lionrock-2023",
      titleTop: "HAGLÖFS (ASICS)",
      titleBottom: "LIONROCK CAPITAL",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
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
      value: "Confidentiel",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : language === "DE" ? "Schweden" : "Suède",
      partner: "Kevin",
    },
    {
      id: "systemair-panasonic-2022",
      titleTop: "SYSTEMAIR AB (DIV. AC)",
      titleBottom: "PANASONIC CORPORATION",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
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
      value: "Confidentiel",
      country: language === "EN" ? "Europe" : language === "IT" ? "Europa" : language === "DE" ? "Europa" : "Europe",
      partner: "Kevin",
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
      value: "Confidentiel",
      country: language === "EN" ? "France" : language === "IT" ? "Francia" : language === "DE" ? "Frankreich" : "France",
      partner: "Kevin",
    },
    {
      id: "promethera-haotian-2020",
      titleTop: "PROMETHERA BIOSCIENCES S.A.",
      titleBottom: "HAO TIAN INTERNATIONAL FINANCE",
      shortLabel: language === "EN" ? "RAISED FROM" : language === "IT" ? "RACCOLTO DA" : language === "DE" ? "ERHALTEN VON" : "LEVÉ AUPRÈS DE",
      date: "2020",
      detailDate: language === "EN" ? "July 2020" : language === "IT" ? "Luglio 2020" : language === "DE" ? "Juli 2020" : "Juillet 2020",
      detailType: language === "EN" ? "FUNDRAISING" : language === "IT" ? "RACCOLTA FONDI" : language === "DE" ? "FUNDRAISING" : "LEVÉE DE FONDS",
      detailDescription:
        language === "EN"
          ? "Promethera Biosciences S.A. receives convertible bond financing"
          : language === "IT"
          ? "Promethera Biosciences S.A. riceve finanziamento tramite obbligazioni convertibili"
          : language === "DE"
          ? "Promethera Biosciences S.A. erhält Finanzierung durch wandelbare Anleihen"
          : "Promethera Biosciences S.A. reçoit un financement en obligations convertibles",
      value: "≈ 5 M€",
      country: language === "EN" ? "Belgium" : language === "IT" ? "Belgio" : language === "DE" ? "Belgien" : "Belgique",
      partner: "Kevin",
    },
    {
      id: "koki-eppendorf-2020",
      titleTop: "KOKI HOLDINGS (HIMAC)",
      titleBottom: "EPPENDORF AG",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2020",
      detailDate: language === "EN" ? "March 2020" : language === "IT" ? "Marzo 2020" : language === "DE" ? "März 2020" : "Mars 2020",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Koki Holdings (Himac brand) centrifuge business sold to Eppendorf AG"
          : language === "IT"
          ? "Attività centrifughe di Koki Holdings (marchio Himac) venduta a Eppendorf AG"
          : language === "DE"
          ? "Zentrifugengeschäft von Koki Holdings (Marke Himac) an Eppendorf AG verkauft"
          : "Activité centrifugeuses de Koki Holdings (marque Himac) vendue à Eppendorf AG",
      value: "Confidentiel",
      country: language === "EN" ? "Japan" : language === "IT" ? "Giappone" : language === "DE" ? "Japan" : "Japon",
      partner: "Kevin",
    },
    {
      id: "sabaf-paloma-2019",
      titleTop: "SABAF S.P.A.",
      titleBottom: "PALOMA CO., LTD.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2019",
      detailDate: language === "EN" ? "November 2019" : language === "IT" ? "Novembre 2019" : language === "DE" ? "November 2019" : "Novembre 2019",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Minority stake in Sabaf S.p.A. acquired by Paloma Co., Ltd."
          : language === "IT"
          ? "Partecipazione minoritaria di Sabaf S.p.A. acquisita da Paloma Co., Ltd."
          : language === "DE"
          ? "Minderheitsbeteiligung an Sabaf S.p.A. von Paloma Co., Ltd. erworben"
          : "Participation minoritaire de Sabaf S.p.A. acquise par Paloma Co., Ltd.",
      value: "Confidentiel",
      country: language === "EN" ? "Italy" : language === "IT" ? "Italia" : language === "DE" ? "Italien" : "Italie",
      partner: "Kevin",
    },
    {
      id: "linde-airwater-2019",
      titleTop: "LINDE INDIA LTD.",
      titleBottom: "AIR WATER INC.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2019",
      detailDate: language === "EN" ? "June 2019" : language === "IT" ? "Giugno 2019" : language === "DE" ? "Juni 2019" : "Juin 2019",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Industrial gas assets in South India acquired by Air Water Inc."
          : language === "IT"
          ? "Attivi di gas industriale nel sud dell'India acquisiti da Air Water Inc."
          : language === "DE"
          ? "Industriegas-Assets in Südindien von Air Water Inc. erworben"
          : "Actifs gaziers industriels dans le sud de l'Inde acquis par Air Water Inc.",
      value: "~194-220 M$",
      country: language === "EN" ? "India" : language === "IT" ? "India" : language === "DE" ? "Indien" : "Inde",
      partner: "Kevin",
    },
    {
      id: "terex-tadano-2019",
      titleTop: "DEMAG MOBILE CRANES (TEREX)",
      titleBottom: "TADANO LTD.",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2019",
      detailDate: language === "EN" ? "February 2019" : language === "IT" ? "Febbraio 2019" : language === "DE" ? "Februar 2019" : "Février 2019",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Demag Mobile Cranes division of Terex Corporation sold to Tadano Ltd."
          : language === "IT"
          ? "Divisione Demag Mobile Cranes di Terex Corporation venduta a Tadano Ltd."
          : language === "DE"
          ? "Demag Mobile Cranes Division von Terex Corporation an Tadano Ltd. verkauft"
          : "Division Demag Mobile Cranes de Terex Corporation vendue à Tadano Ltd.",
      value: "~215 M$",
      country: language === "EN" ? "Germany" : language === "IT" ? "Germania" : language === "DE" ? "Deutschland" : "Allemagne",
      partner: "Kevin",
    },
    {
      id: "gemoneybank-2016",
      titleTop: "GE MONEY BANK FRANCE",
      titleBottom: "CERBERUS",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2016",
      detailDate: language === "EN" ? "June 2016" : language === "IT" ? "Giugno 2016" : language === "DE" ? "Juni 2016" : "Juin 2016",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "GE Money Bank France (asset portfolio ~$4.6B) sold to Cerberus"
          : language === "IT"
          ? "GE Money Bank France (portafoglio attivi ~4,6 Md$) venduta a Cerberus"
          : language === "DE"
          ? "GE Money Bank France (Vermögensportfolio ~4,6 Mrd. $) an Cerberus verkauft"
          : "GE Money Bank France (portefeuille d'actifs ~4,6 Md$) vendue à Cerberus",
      value: "~4,6 Md$",
      country: "France & DOM/TOM",
      partner: "Kevin",
    },
    {
      id: "reydel-2014",
      titleTop: "REYDEL AUTOMOTIVE FRANCE S.A.",
      titleBottom: "MOTHERSON SUMI SYSTEMS (MSSL)",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2014",
      detailDate: language === "EN" ? "September 2014" : language === "IT" ? "Settembre 2014" : language === "DE" ? "September 2014" : "Septembre 2014",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "Reydel Automotive France S.A. (global revenue > €1B) sold to Motherson Sumi Systems Limited (MSSL)"
          : language === "IT"
          ? "Reydel Automotive France S.A. (fatturato mondiale > 1 Md €) venduta a Motherson Sumi Systems Limited (MSSL)"
          : language === "DE"
          ? "Reydel Automotive France S.A. (globaler Umsatz > 1 Mrd. €) an Motherson Sumi Systems Limited (MSSL) verkauft"
          : "Reydel Automotive France S.A. (CA mondial > 1 Md €) vendue à Motherson Sumi Systems Limited (MSSL)",
      value: "Confidentiel",
      country: "France",
      partner: "Kevin",
    },
    {
      id: "simtronics-2011",
      titleTop: "SIMTRONICS AB (P2P)",
      titleBottom: "CARRIER",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2011",
      detailDate: language === "EN" ? "February 2011" : language === "IT" ? "Febbraio 2011" : language === "DE" ? "Februar 2011" : "Février 2011",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Simtronics AB (P2P) acquired by Carrier"
          : language === "IT"
          ? "Simtronics AB (P2P) acquisita da Carrier"
          : language === "DE"
          ? "Simtronics AB (P2P) von Carrier erworben"
          : "Simtronics AB (P2P) acquise par Carrier",
      value: "~49 M €",
      country: language === "EN" ? "Sweden" : language === "IT" ? "Svezia" : language === "DE" ? "Schweden" : "Suède",
      partner: "Kevin",
    },
    {
      id: "gesecurity-2009",
      titleTop: "GE SECURITY",
      titleBottom: "UNITED TECHNOLOGIES",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "VENDU À",
      date: "2009",
      detailDate: language === "EN" ? "November 2009" : language === "IT" ? "Novembre 2009" : language === "DE" ? "November 2009" : "Novembre 2009",
      detailType: "M & A SELL SIDE",
      detailDescription:
        language === "EN"
          ? "GE Security sold to United Technologies"
          : language === "IT"
          ? "GE Security venduta a United Technologies"
          : language === "DE"
          ? "GE Security an United Technologies verkauft"
          : "GE Security vendue à United Technologies",
      value: "~1,5 Md €",
      country: language === "EN" ? "United States" : language === "IT" ? "Stati Uniti" : language === "DE" ? "Vereinigte Staaten" : "États-Unis",
      partner: "Kevin",
    },
    {
      id: "hallkay-2008",
      titleTop: "HALL & KAY LTD.",
      titleBottom: "UTC FIRE & SECURITY",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2008",
      detailDate: language === "EN" ? "March 2008" : language === "IT" ? "Marzo 2008" : language === "DE" ? "März 2008" : "Mars 2008",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Hall & Kay Ltd. acquired by UTC Fire & Security"
          : language === "IT"
          ? "Hall & Kay Ltd. acquisita da UTC Fire & Security"
          : language === "DE"
          ? "Hall & Kay Ltd. von UTC Fire & Security erworben"
          : "Hall & Kay Ltd. acquise par UTC Fire & Security",
      value: "Confidentiel",
      country: language === "EN" ? "United Kingdom" : language === "IT" ? "Regno Unito" : language === "DE" ? "Vereinigtes Königreich" : "Royaume-Uni",
      partner: "Kevin",
    },
    {
      id: "marioff-2008",
      titleTop: "MARIOFF CORPORATION LTD.",
      titleBottom: "UTC FIRE & SECURITY",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2008",
      detailDate: language === "EN" ? "January 2008" : language === "IT" ? "Gennaio 2008" : language === "DE" ? "Januar 2008" : "Janvier 2008",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Marioff Corporation Ltd. (scope ~€234M) acquired by UTC Fire & Security"
          : language === "IT"
          ? "Marioff Corporation Ltd. (portata ~234 M €) acquisita da UTC Fire & Security"
          : language === "DE"
          ? "Marioff Corporation Ltd. (Umfang ~234 M €) von UTC Fire & Security erworben"
          : "Marioff Corporation Ltd. (portée ~234 M €) acquise par UTC Fire & Security",
      value: "~234 M €",
      country: language === "EN" ? "Norway" : language === "IT" ? "Norvegia" : language === "DE" ? "Norwegen" : "Norvège",
      partner: "Kevin",
    },
    {
      id: "canson-hamelin-2007",
      titleTop: "CANSON SA",
      titleBottom: "GROUPE HAMELIN",
      shortLabel: language === "EN" ? "SOLD TO" : language === "IT" ? "VENDUTO A" : language === "DE" ? "VERKAUFT AN" : "CÉDÉE À",
      date: "2007",
      detailDate: language === "EN" ? "January 2007" : language === "IT" ? "Gennaio 2007" : language === "DE" ? "Januar 2007" : "Janvier 2007",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Canson SA sold to Groupe Hamelin (FDD/ODD advisory for Hamelin)"
          : language === "IT"
          ? "Canson SA ceduta a Groupe Hamelin (consulenza FDD/ODD per Hamelin)"
          : language === "DE"
          ? "Canson SA an Groupe Hamelin verkauft (FDD/ODD-Beratung für Hamelin)"
          : "Canson SA cédée au Groupe Hamelin (conseil FDD/ODD pour Hamelin)",
      value: "Confidentiel",
      country: "France",
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
          ? "Histoire d'Or acquisita da Silverfleet Capital (consulenza FDD per Silverfleet)"
          : language === "DE"
          ? "Histoire d'Or von Silverfleet Capital erworben (FDD-Beratung für Silverfleet)"
          : "Histoire d'Or acquise par Silverfleet Capital (conseil FDD pour Silverfleet)",
      value: "Confidentiel",
      country: "France",
      partner: "Kevin",
    },
    {
      id: "orangeit-orange-2005",
      titleTop: "ORANGE IT",
      titleBottom: "ORANGE S.A.",
      shortLabel: language === "EN" ? "ACQUIRED BY" : language === "IT" ? "ACQUISITA DA" : language === "DE" ? "ERWORBEN VON" : "ACQUIS PAR",
      date: "2005",
      detailDate: language === "EN" ? "June 2005" : language === "IT" ? "Giugno 2005" : language === "DE" ? "Juni 2005" : "Juin 2005",
      detailType: "M & A BUY SIDE",
      detailDescription:
        language === "EN"
          ? "Orange IT acquired by Orange S.A."
          : language === "IT"
          ? "Orange IT acquisita da Orange S.A."
          : language === "DE"
          ? "Orange IT von Orange S.A. erworben"
          : "Orange IT acquise par Orange S.A.",
      value: "Confidentiel",
      country: "France",
      partner: "Kevin",
    },
  ];

  // Filtre des pays uniques
  const uniqueCountries = Array.from(
    new Set(transactions.filter((t) => t.country).map((t) => t.country as string))
  );

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
                  Our operations and <span className="text-[#0001ff]">mandates in progress</span>
                </>
              ) : language === "IT" ? (
                <>
                  Le nostre <span className="text-[#0001ff]">operazioni</span> e mandati in corso
                </>
              ) : language === "DE" ? (
                <>
                  Unsere <span className="text-[#0001ff]">Transaktionen</span> und laufende Mandate
                </>
              ) : (
                <>
                  Nos opérations et <span className="text-[#0001ff]">mandats en cours</span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {language === "EN"
                ? "Our team has supported"
                : language === "IT"
                ? "Il nostro team ha supportato"
                : language === "DE"
                ? "Unser Team hat unterstützt"
                : "Notre équipe a accompagné"}
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
                  Our current <span className="text-[#0001ff]">mandates</span>
                </>
              ) : language === "IT" ? (
                <>
                  I nostri <span className="text-[#0001ff]">mandati</span> in corso
                </>
              ) : language === "DE" ? (
                <>
                  Unsere aktuellen <span className="text-[#0001ff]">Mandate</span>
                </>
              ) : (
                <>
                  Nos <span className="text-[#0001ff]">mandats</span> en cours
                </>
              )}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === "EN"
                ? "Operations currently being carried out by our teams"
                : language === "IT"
                ? "Operazioni attualmente in corso di realizzazione dai nostri team"
                : language === "DE"
                ? "Aktuell von unseren Teams durchgeführte Operationen"
                : "Opérations actuellement en cours de réalisation par nos équipes"}
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
                    <span>{mandate.transactionType}</span>
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
                      {language === "EN" ? "Partner" : language === "IT" ? "Partner" : language === "DE" ? "Partner" : "Associé"}
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
                ? "Scoprite di più sui nostri mandati attuali e futuri"
                : language === "DE"
                ? "Erfahren Sie mehr über unsere aktuellen und künftigen Mandate"
                : "En savoir plus sur nos mandats actuels et à venir"}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {language === "EN"
                ? "Contact our partners to discuss your project"
                : language === "IT"
                ? "Contattate i nostri partner per discutere del vostro progetto"
                : language === "DE"
                ? "Kontaktieren Sie unsere Partner, um Ihr Projekt zu besprechen"
                : "Contactez nos associés pour discuter de votre projet"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={emailPaul}
                className="bg-white text-[#0001ff] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {language === "EN" ? "Contact Paul" : language === "IT" ? "Contatta Paul" : language === "DE" ? "Paul kontaktieren" : "Contacter Paul"}
              </a>
              <a
                href={emailMatteo}
                className="bg-white text-[#0001ff] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {language === "EN" ? "Contact Matteo" : language === "IT" ? "Contatta Matteo" : language === "DE" ? "Matteo kontaktieren" : "Contacter Matteo"}
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
                  Operations <span className="text-[#0001ff]">accompanied</span> by our collaborators
                </>
              ) : language === "IT" ? (
                <>
                  Le operazioni <span className="text-[#0001ff]">accompagnate</span> dai nostri collaboratori
                </>
              ) : language === "DE" ? (
                <>
                  Von unseren <span className="text-[#0001ff]">Mitarbeitern begleitete</span> Transaktionen
                </>
              ) : (
                <>
                  Les opérations <span className="text-[#0001ff]">accompagnées</span> par nos collaborateurs
                </>
              )}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === "EN"
                ? "A showcase of mandates, from France to Japan."
                : language === "IT"
                ? "Una vetrina di mandati, dalla Francia al Giappone."
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
                {country}
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
