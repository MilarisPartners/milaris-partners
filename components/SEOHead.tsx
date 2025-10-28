"use client";

import { generateStructuredData, seoConfig } from '@/utils/seo';
import StructuredData from './StructuredData';
import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface SEOHeadProps {
  pageName: string;
  language?: 'FR' | 'IT' | 'EN' | 'DE' | 'fr' | 'it' | 'en' | 'de';
  customStructuredData?: any[];
}

export default function SEOHead({ 
  pageName, 
  language, 
  customStructuredData = [] 
}: SEOHeadProps) {
  const { language: contextLanguage } = useTranslation();
  const currentLanguage = language || contextLanguage;
  
  // Normalize language format (convert to uppercase)
  // For German, default to English since SEO config doesn't have DE yet
  const normalizedLanguage = currentLanguage.toUpperCase() === 'DE' ? 'EN' : currentLanguage.toUpperCase() as 'FR' | 'EN' | 'IT' | 'DE';
  
  // Données structurées de base pour l'organisation
  const organizationData = generateStructuredData.organization(normalizedLanguage);
  
  // Combiner toutes les données structurées
  const allStructuredData = [organizationData, ...customStructuredData];

  // Get the page title based on language
  const pageConfig = seoConfig[pageName]?.[normalizedLanguage];
  const pageTitle = pageConfig?.title || "Milaris Partners";

  // Update document title and meta tags dynamically
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Update document title
      document.title = pageTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageConfig?.description || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = pageConfig?.description || '';
        document.head.appendChild(meta);
      }
      
      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', pageConfig?.keywords?.join(', ') || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = pageConfig?.keywords?.join(', ') || '';
        document.head.appendChild(meta);
      }
    }
  }, [pageTitle, pageConfig, normalizedLanguage]);

  return (
    <>
      {allStructuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
    </>
  );
} 