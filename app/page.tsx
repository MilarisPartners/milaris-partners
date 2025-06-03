import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MapBanner from "@/components/MapBanner";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Expertise from "@/components/Expertise";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MapBanner />
      <Services />
      <Process />
      <Expertise />
      <Testimonial />
      <Footer />
    </main>
  );
}
