import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  alternateLanguages?: { [key: string]: string };
  structuredData?: any;
}

export interface PageSEO {
  [key: string]: {
    fr: SEOConfig;
    it: SEOConfig;
    en: SEOConfig;
  }
}

export const seoConfig: PageSEO = {
  home: {
    fr: {
      title: "Milaris Partners - Cabinet M&A spécialisé TPE/PME | Fusions-Acquisitions",
      description: "Cabinet de conseil en fusions-acquisitions et levée de fonds spécialisé dans l'accompagnement des TPE/PME en France et Italie. Expertise sectorielle et technologie IA propriétaire.",
      keywords: ["M&A", "fusions acquisitions", "levée de fonds", "TPE", "PME", "ETI", "cession entreprise", "acquisition entreprise", "conseil financier", "France", "Italie"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website"
    },
    it: {
      title: "Milaris Partners - Consulenza M&A per PMI | Fusioni e Acquisizioni",
      description: "Consulenza specializzata in fusioni e acquisizioni e raccolta fondi per PMI in Francia e Italia. Competenza settoriale e tecnologia IA proprietaria.",
      keywords: ["M&A", "fusioni acquisizioni", "raccolta fondi", "PMI", "cessione impresa", "acquisizione impresa", "consulenza finanziaria", "Francia", "Italia"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website"
    },
    en: {
      title: "Milaris Partners - M&A Advisory for SMEs | Mergers & Acquisitions",
      description: "Specialized M&A and fundraising advisory for SMEs in France and Italy. Sector expertise and proprietary AI technology.",
      keywords: ["M&A", "mergers acquisitions", "fundraising", "SME", "business sale", "business acquisition", "financial advisory", "France", "Italy"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website"
    }
  },
  equipe: {
    fr: {
      title: "Notre Équipe - Experts M&A France-Italie | Milaris Partners",
      description: "Rencontrez Paul Poulain et Matteo Orlandi Mango, nos experts M&A basés en France et Italie. Une équipe franco-italienne au service de vos projets de croissance.",
      keywords: ["équipe M&A", "experts fusions acquisitions", "Paul Poulain", "Matteo Orlandi Mango", "conseil M&A France", "conseil M&A Italie"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "profile"
    },
    it: {
      title: "Il Nostro Team - Esperti M&A Francia-Italia | Milaris Partners",
      description: "Incontrate Paul Poulain e Matteo Orlandi Mango, i nostri esperti M&A basati in Francia e Italia. Un team franco-italiano al servizio dei vostri progetti di crescita.",
      keywords: ["team M&A", "esperti fusioni acquisizioni", "Paul Poulain", "Matteo Orlandi Mango", "consulenza M&A Francia", "consulenza M&A Italia"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "profile"
    },
    en: {
      title: "Our Team - M&A Experts France-Italy | Milaris Partners",
      description: "Meet Paul Poulain and Matteo Orlandi Mango, our M&A experts based in France and Italy. A Franco-Italian team serving your growth projects.",
      keywords: ["M&A team", "mergers acquisitions experts", "Paul Poulain", "Matteo Orlandi Mango", "M&A advisory France", "M&A advisory Italy"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "profile"
    }
  },
  "cession-entreprise": {
    fr: {
      title: "Cession d'Entreprise - Vendre son entreprise avec Milaris Partners",
      description: "Accompagnement complet dans la cession de votre entreprise. Processus structuré, réseau d'acquéreurs international et technologie IA pour maximiser la valorisation.",
      keywords: ["cession entreprise", "vendre entreprise", "transmission entreprise", "valorisation entreprise", "acquéreurs stratégiques", "acquéreurs financiers", "M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    it: {
      title: "Cessione d'Impresa - Vendere la propria azienda con Milaris Partners",
      description: "Accompagnamento completo nella cessione della vostra impresa. Processo strutturato, rete di acquirenti internazionale e tecnologia IA per massimizzare la valutazione.",
      keywords: ["cessione impresa", "vendere azienda", "trasmissione impresa", "valutazione impresa", "acquirenti strategici", "acquirenti finanziari", "M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    en: {
      title: "Business Sale - Sell Your Company with Milaris Partners",
      description: "Complete support in selling your business. Structured process, international buyer network and AI technology to maximize valuation.",
      keywords: ["business sale", "sell company", "business transfer", "company valuation", "strategic buyers", "financial buyers", "M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    }
  },
  "acquisition-entreprise": {
    fr: {
      title: "Acquisition d'Entreprise - Croissance externe avec Milaris Partners",
      description: "Stratégie d'acquisition sur-mesure pour votre croissance externe. Identification de cibles, négociation et structuration d'opérations avec notre technologie IA.",
      keywords: ["acquisition entreprise", "croissance externe", "rachat entreprise", "identification cibles", "due diligence", "négociation M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    it: {
      title: "Acquisizione d'Impresa - Crescita esterna con Milaris Partners",
      description: "Strategia di acquisizione su misura per la vostra crescita esterna. Identificazione di target, negoziazione e strutturazione di operazioni con la nostra tecnologia IA.",
      keywords: ["acquisizione impresa", "crescita esterna", "acquisto azienda", "identificazione target", "due diligence", "negoziazione M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    en: {
      title: "Business Acquisition - External Growth with Milaris Partners",
      description: "Tailored acquisition strategy for your external growth. Target identification, negotiation and deal structuring with our AI technology.",
      keywords: ["business acquisition", "external growth", "company buyout", "target identification", "due diligence", "M&A negotiation"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    }
  },
  financement: {
    fr: {
      title: "Levée de Fonds - Financement pour votre croissance | Milaris Partners",
      description: "Accompagnement dans votre levée de fonds. Structuration financière, accès à notre réseau d'investisseurs et négociation optimisée pour votre croissance.",
      keywords: ["levée de fonds", "financement entreprise", "investisseurs", "private equity", "venture capital", "structuration financière", "croissance"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    it: {
      title: "Raccolta Fondi - Finanziamento per la vostra crescita | Milaris Partners",
      description: "Accompagnamento nella vostra raccolta fondi. Strutturazione finanziaria, accesso alla nostra rete di investitori e negoziazione ottimizzata per la vostra crescita.",
      keywords: ["raccolta fondi", "finanziamento impresa", "investitori", "private equity", "venture capital", "strutturazione finanziaria", "crescita"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    en: {
      title: "Fundraising - Financing for your growth | Milaris Partners",
      description: "Support in your fundraising. Financial structuring, access to our investor network and optimized negotiation for your growth.",
      keywords: ["fundraising", "business financing", "investors", "private equity", "venture capital", "financial structuring", "growth"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    }
  },
  "levee-de-fonds": {
    fr: {
      title: "Levée de Fonds Spécialisée - Financer votre développement | Milaris Partners",
      description: "Expertise approfondie en levée de fonds pour TPE/PME. De l'amorçage au développement, nous structurons votre financement avec les meilleurs investisseurs.",
      keywords: ["levée de fonds spécialisée", "financement TPE PME", "amorçage", "développement", "investisseurs spécialisés", "structuration financière"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    it: {
      title: "Raccolta Fondi Specializzata - Finanziare il vostro sviluppo | Milaris Partners",
      description: "Competenza approfondita in raccolta fondi per PMI. Dal seed allo sviluppo, strutturiamo il vostro finanziamento con i migliori investitori.",
      keywords: ["raccolta fondi specializzata", "finanziamento PMI", "seed", "sviluppo", "investitori specializzati", "strutturazione finanziaria"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    en: {
      title: "Specialized Fundraising - Finance your development | Milaris Partners",
      description: "Deep expertise in fundraising for SMEs. From seed to development, we structure your financing with the best investors.",
      keywords: ["specialized fundraising", "SME financing", "seed funding", "development", "specialized investors", "financial structuring"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    }
  },
  "fusions-acquisitions": {
    fr: {
      title: "Fusions-Acquisitions - Expertise M&A complète | Milaris Partners",
      description: "Conseil stratégique en fusions-acquisitions. Accompagnement complet des opérations de M&A avec notre expertise sectorielle et technologie IA propriétaire.",
      keywords: ["fusions acquisitions", "conseil M&A", "opérations M&A", "expertise sectorielle", "technologie IA", "conseil stratégique"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    it: {
      title: "Fusioni-Acquisizioni - Competenza M&A completa | Milaris Partners",
      description: "Consulenza strategica in fusioni e acquisizioni. Accompagnamento completo delle operazioni M&A con la nostra competenza settoriale e tecnologia IA proprietaria.",
      keywords: ["fusioni acquisizioni", "consulenza M&A", "operazioni M&A", "competenza settoriale", "tecnologia IA", "consulenza strategica"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    },
    en: {
      title: "Mergers-Acquisitions - Complete M&A expertise | Milaris Partners",
      description: "Strategic M&A advisory. Complete support for M&A transactions with our sector expertise and proprietary AI technology.",
      keywords: ["mergers acquisitions", "M&A advisory", "M&A transactions", "sector expertise", "AI technology", "strategic advisory"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "article"
    }
  },
  carrieres: {
    fr: {
      title: "Carrières - Rejoignez Milaris Partners | Opportunités M&A",
      description: "Rejoignez notre équipe d'experts M&A. Découvrez nos opportunités de carrière dans le conseil en fusions-acquisitions et levée de fonds.",
      keywords: ["carrières M&A", "emploi conseil", "opportunités", "expert M&A", "fusions acquisitions", "recrutement"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website"
    },
    it: {
      title: "Carriere - Unitevi a Milaris Partners | Opportunità M&A",
      description: "Unitevi al nostro team di esperti M&A. Scoprite le nostre opportunità di carriera nella consulenza in fusioni e acquisizioni e raccolta fondi.",
      keywords: ["carriere M&A", "lavoro consulenza", "opportunità", "esperto M&A", "fusioni acquisizioni", "recruitment"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website"
    },
    en: {
      title: "Careers - Join Milaris Partners | M&A Opportunities",
      description: "Join our team of M&A experts. Discover our career opportunities in mergers & acquisitions and fundraising advisory.",
      keywords: ["M&A careers", "advisory jobs", "opportunities", "M&A expert", "mergers acquisitions", "recruitment"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website"
    }
  },
  "mentions-legales": {
    fr: {
      title: "Mentions Légales - Milaris Partners",
      description: "Mentions légales du site Milaris Partners. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
      keywords: ["mentions légales", "éditeur", "hébergeur", "conditions utilisation"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website",
      noIndex: true
    },
    it: {
      title: "Note Legali - Milaris Partners",
      description: "Note legali del sito Milaris Partners. Informazioni sull'editore, sull'hosting e sulle condizioni d'uso.",
      keywords: ["note legali", "editore", "hosting", "condizioni uso"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website",
      noIndex: true
    },
    en: {
      title: "Legal Notice - Milaris Partners",
      description: "Legal notice of Milaris Partners website. Information about publisher, hosting and terms of use.",
      keywords: ["legal notice", "publisher", "hosting", "terms of use"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website",
      noIndex: true
    }
  },
  "conditions-generales": {
    fr: {
      title: "Conditions Générales - Milaris Partners",
      description: "Conditions générales d'utilisation du site Milaris Partners. Termes et conditions de nos services de conseil M&A.",
      keywords: ["conditions générales", "termes conditions", "services conseil", "M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website",
      noIndex: true
    },
    it: {
      title: "Condizioni Generali - Milaris Partners",
      description: "Condizioni generali d'uso del sito Milaris Partners. Termini e condizioni dei nostri servizi di consulenza M&A.",
      keywords: ["condizioni generali", "termini condizioni", "servizi consulenza", "M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website",
      noIndex: true
    },
    en: {
      title: "General Terms - Milaris Partners",
      description: "General terms of use of Milaris Partners website. Terms and conditions of our M&A advisory services.",
      keywords: ["general terms", "terms conditions", "advisory services", "M&A"],
      ogImage: "/og-images/home-fr.svg",
      ogType: "website",
      noIndex: true
    }
  }
};

export function generateMetadata(
  pageName: string,
  language: 'fr' | 'it' | 'en' = 'fr',
  baseUrl: string = 'https://milaris.partners'
): Metadata {
  const pageConfig = seoConfig[pageName]?.[language];
  
  if (!pageConfig) {
    // Fallback pour les pages non configurées
    return {
      title: "Milaris Partners - Cabinet M&A spécialisé TPE/PME",
      description: "Cabinet de conseil en fusions-acquisitions et levée de fonds spécialisé dans l'accompagnement des TPE/PME en France et Italie.",
      metadataBase: new URL(baseUrl),
    };
  }

  const canonicalUrl = pageConfig.canonicalUrl || `${baseUrl}/${pageName === 'home' ? '' : pageName}`;
  
  const alternateLanguages: { [key: string]: string } = {};
  if (seoConfig[pageName]) {
    Object.keys(seoConfig[pageName]).forEach(lang => {
      alternateLanguages[lang] = `${baseUrl}/${lang}/${pageName === 'home' ? '' : pageName}`;
    });
  }

  return {
    metadataBase: new URL(baseUrl),
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    robots: {
      index: !pageConfig.noIndex,
      follow: !pageConfig.noFollow,
      googleBot: {
        index: !pageConfig.noIndex,
        follow: !pageConfig.noFollow,
      },
    },
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: canonicalUrl,
      siteName: 'Milaris Partners',
      locale: language === 'fr' ? 'fr_FR' : language === 'it' ? 'it_IT' : 'en_US',
      type: pageConfig.ogType || 'website',
      images: pageConfig.ogImage ? [
        {
          url: pageConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageConfig.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.title,
      description: pageConfig.description,
      images: pageConfig.ogImage ? [pageConfig.ogImage] : [],
    },
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'msapplication-TileColor': '#0001ff',
      'theme-color': '#0001ff',
    },
  };
}

// Données structurées pour différents types de pages
export const generateStructuredData = {
  organization: (language: 'fr' | 'it' | 'en' = 'fr') => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Milaris Partners',
    description: language === 'fr' 
      ? 'Cabinet de conseil spécialisé en fusions-acquisitions et levée de fonds pour les TPE/PME en France et en Italie.'
      : language === 'it'
      ? 'Studio di consulenza specializzato in fusioni e acquisizioni e raccolta fondi per PMI in Francia e in Italia.'
      : 'Advisory firm specialized in mergers & acquisitions and fundraising for SMEs in France and Italy.',
    url: 'https://milaris.partners',
    logo: 'https://milaris.partners/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-XX-XX-XX-XX',
      contactType: 'customer service',
      availableLanguage: ['French', 'Italian', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'Paris',
      streetAddress: 'Your Address'
    },
    sameAs: [
      'https://www.linkedin.com/company/milaris-partners'
    ]
  }),

  person: (name: string, role: string, email: string, linkedin: string, language: 'fr' | 'it' | 'en' = 'fr') => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: role,
    email: email,
    url: linkedin,
    worksFor: {
      '@type': 'Organization',
      name: 'Milaris Partners'
    }
  }),

  service: (serviceName: string, description: string, language: 'fr' | 'it' | 'en' = 'fr') => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Milaris Partners'
    },
    areaServed: ['France', 'Italy', 'Europe'],
    serviceType: language === 'fr' ? 'Conseil en fusions-acquisitions' : language === 'it' ? 'Consulenza in fusioni e acquisizioni' : 'Mergers & Acquisitions Advisory'
  }),

  faq: (questions: Array<{question: string, answer: string}>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  })
}; 