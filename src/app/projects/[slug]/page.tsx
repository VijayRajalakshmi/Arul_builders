import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CTA from "@/sections/CTA";

import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: Props) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center bg-black">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Project Not Found
          </h1>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-24 overflow-hidden">

        {/* HERO */}
        <section className="relative h-screen overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/20 to-black/30"></div>

          {/* Content */}
          <div className="absolute bottom-20 left-0 w-full">

            <div className="max-w-7xl mx-auto px-6">

              <div className="inline-flex px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-xs uppercase tracking-[4px] mb-6">
                {project.status}
              </div>

              <p className="uppercase tracking-[5px] text-gray-300 mb-5">
                {project.location}
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                {project.title}
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {project.description}
              </p>

            </div>

          </div>

        </section>

        {/* OVERVIEW */}
        <section className="py-32">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* LEFT */}
              <div>

                <p className="uppercase tracking-[5px] text-gray-400 mb-5">
                  Project Overview
                </p>

                <h2 className="text-5xl font-bold leading-tight mb-8">
                  Crafted For Premium Living
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Combining architectural excellence,
                  strategic location advantages,
                  and luxury lifestyle amenities,
                  this development is designed for
                  modern urban living and long-term value.
                </p>

              </div>

              {/* RIGHT INFO CARD */}
              <div className="bg-[#081120] border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

                <div className="space-y-8">

                  <div className="flex justify-between border-b border-white/10 pb-5">

                    <span className="text-gray-400">
                      Project Type
                    </span>

                    <span className="font-semibold">
                      Premium Residential
                    </span>

                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-5">

                    <span className="text-gray-400">
                      Location
                    </span>

                    <span className="font-semibold">
                      {project.location}
                    </span>

                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-5">

                    <span className="text-gray-400">
                      Status
                    </span>

                    <span className="font-semibold">
                      {project.status}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-400">
                      Starting Price
                    </span>

                    <span className="font-semibold text-2xl">
                      {project.price}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* AMENITIES */}
        <section className="bg-[#081120] relative overflow-hidden py-32">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <p className="uppercase tracking-[5px] text-gray-400 mb-5">
              Amenities
            </p>

            <h2 className="text-5xl font-bold mb-16">
              Designed For Modern Lifestyle
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                "Infinity Pool",
                "Fitness Center",
                "Club House",
                "Landscape Garden",
                "Children Play Area",
                "24/7 Security",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-[32px] p-8 bg-white/5 backdrop-blur-xl hover:border-white/30 transition-all duration-500"
                >

                  <h3 className="text-2xl font-semibold">
                    {item}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* GALLERY */}
        <section className="py-32">

          <div className="max-w-7xl mx-auto px-6">

            <p className="uppercase tracking-[5px] text-gray-400 mb-5">
              Gallery
            </p>

            <h2 className="text-5xl font-bold mb-16">
              Project Showcase
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-[32px] h-[350px]"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-[2000ms]"
                  />

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