import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FeaturedProjects from "@/sections/FeaturedProjects";
import CTA from "@/sections/CTA";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">

        {/* Hero */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[6px] text-gray-400 mb-5">
              Our Developments
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Luxury Projects Across Chennai
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore premium residential and commercial
              developments crafted with quality,
              innovation, and architectural excellence.
            </p>

          </div>
        </section>

        <FeaturedProjects />

        <CTA />
      </main>

      <Footer />
    </>
  );
}