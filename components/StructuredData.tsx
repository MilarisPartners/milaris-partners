"use client";

import { useEffect } from 'react';

interface StructuredDataProps {
  data: any;
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Créer un script tag pour les données structurées
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    // Nettoyer le script au démontage du composant
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
} 