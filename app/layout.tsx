import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Milaris Partners - Excellence en Fusions & Acquisitions",
  description: "Cabinet de conseil spécialisé en fusions-acquisitions et levée de fonds pour les TPE/PME en France et en Italie.",
  keywords: "M&A, fusions acquisitions, levée de fonds, conseil financier, TPE, PME, transmission entreprise",
  openGraph: {
    title: "Milaris Partners - Conseil M&A pour TPE et PME",
    description: "Un accompagnement sur mesure dédié aux TPE et PME pour la transmission d'entreprise",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${workSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
