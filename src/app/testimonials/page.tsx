import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CTA from "@/sections/CTA";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Villa Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    review:
      "Arul Builders delivered exceptional quality with complete transparency throughout the project. The execution and finishing exceeded our expectations.",
  },

  {
    name: "Priya Sharma",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    review:
      "Professional team, modern architecture, and timely delivery. One of the best construction experiences we have had in Chennai.",
  },

  {
    name: "Vignesh Raj",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    review:
      "The premium design quality and project management standards truly stand out. Highly recommended for luxury developments.",
  },

  {
    name: "Keerthana S",
    role: "Apartment Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    review:
      "Excellent customer communication and attention to detail from start to finish. The final result was absolutely beautiful.",
  },

  {
    name: "Arjun Menon",
    role: "Commercial Client",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    review:
      "The commercial project was completed on schedule with impressive professionalism and engineering quality.",
  },

  {
    name: "Divya Narayanan",
    role: "Interior Client",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    review:
      "Luxury finishes, elegant interiors, and a very smooth project experience overall. Truly premium service.",
  },
];

export default function TestimonialsPage() {
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
              Client Testimonials
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Trusted By Families
              <span className="block text-white/70">
                Across Chennai
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Hear from homeowners, investors, and business
              clients who experienced our commitment to
              quality, transparency, and premium execution.
            </p>

          </div>

        </section>

        {/* TESTIMONIAL GRID */}
        <section className="pb-32">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border border-white/10 rounded-[40px] bg-[#081120] p-10 hover:border-white/30 transition-all duration-700 hover:-translate-y-2"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                  {/* Quote */}
                  <div className="absolute top-8 right-8 text-7xl text-white/5 font-bold">
                    "
                  </div>

                  {/* User */}
                  <div className="relative flex items-center gap-5 mb-8">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-white/10"
                    />

                    <div>
                      <h3 className="text-2xl font-semibold mb-1">
                        {item.name}
                      </h3>

                      <p className="text-gray-400">
                        {item.role}
                      </p>
                    </div>

                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className="fill-white text-white"
                      />
                    ))}

                  </div>

                  {/* Review */}
                  <p className="relative text-gray-300 leading-relaxed text-lg">
                    {item.review}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="bg-[#081120] py-32 relative overflow-hidden">

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="grid md:grid-cols-3 gap-10 text-center">

              <div>
                <h2 className="text-6xl font-bold mb-4">
                  500+
                </h2>

                <p className="text-gray-400 text-lg">
                  Happy Families
                </p>
              </div>

              <div>
                <h2 className="text-6xl font-bold mb-4">
                  20+
                </h2>

                <p className="text-gray-400 text-lg">
                  Premium Projects
                </p>
              </div>

              <div>
                <h2 className="text-6xl font-bold mb-4">
                  10+
                </h2>

                <p className="text-gray-400 text-lg">
                  Years Experience
                </p>
              </div>

            </div>

          </div>

        </section>

        <CTA />

      </main>

      <Footer />
    </>
  );
}