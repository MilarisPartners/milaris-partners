import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AISection from "@/components/AISection";
import InterventionSection from "@/components/InterventionSection";
import EuropePresence from "@/components/EuropePresence";
import Expertise from "@/components/Expertise";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AISection />
      <InterventionSection />
      <EuropePresence />
      <Expertise />
      <Testimonial />
      <section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <Footer variant="dark" />
      </section>
    </main>
  );
}
