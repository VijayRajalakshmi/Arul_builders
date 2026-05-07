import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import About from "@/sections/About";
import WhyChooseUs from "@/sections/WhyChooseUs";
import CTA from "@/sections/CTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <About />

        <WhyChooseUs />

        <CTA />
      </main>

      <Footer />
    </>
  );
}