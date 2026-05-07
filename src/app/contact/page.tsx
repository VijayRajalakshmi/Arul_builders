import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Contact from "@/sections/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <Contact />
      </main>

      <Footer />
    </>
  );
}