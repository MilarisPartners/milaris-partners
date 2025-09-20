"use client";

import Head from 'next/head';
import { generateStructuredData, seoConfig } from '@/utils/seo';
import StructuredData from './StructuredData';
import { useEffect } from 'react';

interface SEOHeadProps {
  pageName: string;
  language?: 'fr' | 'it' | 'en';
  customStructuredData?: any[];
}

export default function SEOHead({ 
  pageName, 
  language = 'fr', 
  customStructuredData = [] 
}: SEOHeadProps) {
  
  // Données structurées de base pour l'organisation
  const organizationData = generateStructuredData.organization(language);
  
  // Combiner toutes les données structurées
  const allStructuredData = [organizationData, ...customStructuredData];

  // Get the page title based on language
  const pageConfig = seoConfig[pageName]?.[language];
  const pageTitle = pageConfig?.title || "Milaris Partners";

  // Update document title dynamically
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageConfig?.description || ""} />
        <meta name="keywords" content={pageConfig?.keywords?.join(', ') || ""} />
      </Head>
      {allStructuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
    </>
  );
} 