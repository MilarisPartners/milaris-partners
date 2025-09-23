"use client";

import { generateStructuredData, seoConfig } from '@/utils/seo';
import StructuredData from './StructuredData';
import { useEffect } from 'react';

interface SEOHeadProps {
  pageName: string;
  language?: 'FR' | 'IT' | 'EN' | 'fr' | 'it' | 'en';
  customStructuredData?: any[];
}

export default function SEOHead({ 
  pageName, 
  language = 'en', 
  customStructuredData = [] 
}: SEOHeadProps) {
  
  // Normalize language format (convert uppercase to lowercase)
  const normalizedLanguage = language.toLowerCase() as 'fr' | 'it' | 'en';
  
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
  }, [pageTitle, pageConfig]);

  return (
    <>
      {allStructuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
    </>
  );
} 