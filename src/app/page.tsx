import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import About from "@/sections/About";
import FeaturedProjects from "@/sections/FeaturedProjects";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";
import Brands from "@/sections/Brands";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Marquee />

        <Brands />

        <Stats />

        <About />

        <FeaturedProjects />

        <WhyChooseUs />

        <Testimonials />

        <CTA />

        <Contact />
      </main>

      <FloatingWhatsApp />

      <Footer />
    </>
  );
}