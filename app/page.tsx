"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AISection from "@/components/AISection";
import InterventionSection from "@/components/InterventionSection";
import EuropePresence from "@/components/EuropePresence";
import Expertise from "@/components/Expertise";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { language } = useTranslation();
  return (
    <main className="min-h-screen">
      <SEOHead 
        pageName="home" 
        language={language} 
      />
      <Navbar />
      <Hero />
      <About />
      <AISection />
      <InterventionSection />
      <EuropePresence />
      <Expertise />
      <Testimonial />
      <section style={{ backgroundColor: '#f8f8f8' }}>
        <Footer variant="dark" />
      </section>
    </main>
  );
}
