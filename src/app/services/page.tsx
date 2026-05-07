import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CTA from "@/sections/CTA";

import {
  Building2,
  Paintbrush2,
  Hammer,
  Landmark,
  Ruler,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Residential Construction",
    description:
      "Premium apartments, villas, and gated communities designed for modern luxury living.",
  },

  {
    icon: Landmark,
    title: "Commercial Construction",
    description:
      "High-quality commercial spaces crafted for functionality, scalability, and premium business environments.",
  },

  {
    icon: Paintbrush2,
    title: "Interior Design",
    description:
      "Elegant interior experiences combining aesthetics, comfort, and contemporary design trends.",
  },

  {
    icon: Ruler,
    title: "Architecture Planning",
    description:
      "Innovative architectural planning focused on spatial excellence and long-term value creation.",
  },

  {
    icon: Hammer,
    title: "Renovation Services",
    description:
      "Transforming existing spaces with modern upgrades, structural enhancements, and premium finishes.",
  },

  {
    icon: Wrench,
    title: "Project Consultation",
    description:
      "Professional consultation and strategic planning support for residential and commercial developments.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 overflow-hidden">

        {/* HERO */}
        <section className="relative py-32">

          {/* Glow */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

            <p className="uppercase tracking-[6px] text-gray-400 mb-6">
              Our Expertise
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Building Beyond
              <span className="block text-white/70">
                Expectations
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Delivering premium residential, commercial,
              and architectural solutions with innovation,
              precision, and long-term value.
            </p>

          </div>

        </section>

        {/* SERVICES GRID */}
        <section className="pb-32">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden border border-white/10 rounded-[40px] bg-[#081120] p-10 hover:border-white/30 transition-all duration-700 hover:-translate-y-2"
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    {/* Icon */}
                    <div className="relative w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                      <Icon size={38} />
                    </div>

                    {/* Number */}
                    <div className="absolute top-10 right-10 text-6xl font-bold text-white/5">
                      0{index + 1}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">

                      <h3 className="text-3xl font-bold mb-5 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-lg">
                        {service.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* PROCESS SECTION */}
        <section className="bg-[#081120] relative overflow-hidden py-32">

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="text-center mb-20">

              <p className="uppercase tracking-[6px] text-gray-400 mb-5">
                Our Process
              </p>

              <h2 className="text-5xl md:text-6xl font-bold">
                From Vision To Reality
              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-8">

              {[
                "Consultation",
                "Planning",
                "Execution",
                "Delivery",
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative border border-white/10 rounded-[32px] p-10 bg-white/5 backdrop-blur-xl text-center"
                >

                  <div className="text-7xl font-bold text-white/10 mb-6">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {step}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </section>

        <CTA />

      </main>

      <Footer />
    </>
  );
}