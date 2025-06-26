import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/utils/seo";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";
import Loader from "@/components/Loader";

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
        <meta name="theme-color" content="#0001ff" />
        <meta name="msapplication-TileColor" content="#0001ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${workSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {/* Redirection www vers racine (compatibilité GitHub Pages) */}
        <Script id="www-redirect" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined' && window.location.hostname.startsWith('www.')) {
              const newUrl = window.location.href.replace(/^https?:\\/\\/www\\./, window.location.protocol + '//');
              window.location.replace(newUrl);
            }
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E93DE5LSJB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E93DE5LSJB');
          `}
        </Script>

        <Loader />
        <LanguageProvider>
          <StructuredData data={organizationData} />
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
