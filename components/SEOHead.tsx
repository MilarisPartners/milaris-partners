"use client";

import Head from 'next/head';
import { generateStructuredData } from '@/utils/seo';
import StructuredData from './StructuredData';

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

  return (
    <>
      {allStructuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
    </>
  );
} 