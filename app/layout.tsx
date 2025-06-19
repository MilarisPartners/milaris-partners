import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/utils/seo";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-work-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: '--font-playfair',
  display: 'swap',
});

// Métadonnées SEO optimisées pour la page d'accueil
export const metadata: Metadata = generateSEOMetadata('home', 'fr');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Données structurées pour l'organisation
  const organizationData = generateStructuredData.organization('fr');

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0001ff" />
        <meta name="msapplication-TileColor" content="#0001ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${workSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <LanguageProvider>
          <StructuredData data={organizationData} />
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
