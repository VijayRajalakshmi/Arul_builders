import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CTA from "@/sections/CTA";

import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    category: "Real Estate",
    title: "Top Locations To Invest In Chennai In 2026",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description:
      "Explore the fastest-growing investment corridors and premium residential hotspots across Chennai.",
  },

  {
    category: "Construction",
    title: "Modern Construction Trends Transforming Urban Living",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
    description:
      "Discover how modern architecture and smart construction methods are redefining premium living spaces.",
  },

  {
    category: "Interior",
    title: "Luxury Interior Design Ideas For Contemporary Homes",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    description:
      "Elegant interior concepts and premium design inspirations for modern residential projects.",
  },

  {
    category: "Investment",
    title: "Why Premium Apartments Offer Better Long-Term Value",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
    description:
      "Understand why premium residential developments continue to attract long-term property investors.",
  },

  {
    category: "Architecture",
    title: "The Future Of Sustainable Architecture In Chennai",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
    description:
      "How eco-conscious architecture and sustainable development are shaping future urban projects.",
  },

  {
    category: "Guide",
    title: "Complete Home Buying Guide For First-Time Buyers",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description:
      "A practical guide covering budgeting, location selection, financing, and property evaluation.",
  },
];

export default function BlogPage() {
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
              Insights & Articles
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Real Estate &
              <span className="block text-white/70">
                Construction Insights
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore premium real estate insights,
              construction trends, investment strategies,
              and architectural inspirations shaping Chennai’s future.
            </p>

          </div>

        </section>

        {/* FEATURED BLOG */}
        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="group relative overflow-hidden rounded-[50px] border border-white/10 h-[700px]">

              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-4xl">

                <div className="inline-flex px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-xs uppercase tracking-[4px] mb-6">
                  Featured Article
                </div>

                <p className="uppercase tracking-[5px] text-gray-300 mb-5">
                  {blogs[0].category}
                </p>

                <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                  {blogs[0].title}
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {blogs[0].description}
                </p>

                <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-500">
                  Read Article
                  <ArrowUpRight size={20} />
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* BLOG GRID */}
        <section className="pb-32">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {blogs.slice(1).map((blog, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border border-white/10 rounded-[40px] bg-[#081120] hover:border-white/30 transition-all duration-700 hover:-translate-y-2"
                >

                  {/* Image */}
                  <div className="overflow-hidden h-[280px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">

                    <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
                      {blog.category}
                    </p>

                    <h3 className="text-3xl font-bold leading-snug mb-5">
                      {blog.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-8">
                      {blog.description}
                    </p>

                    <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-500">
                      Read More
                      <ArrowUpRight size={18} />
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* NEWSLETTER */}
        <section className="bg-[#081120] py-32 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

            <p className="uppercase tracking-[6px] text-gray-400 mb-6">
              Stay Updated
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Subscribe For Real Estate Insights
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Get premium real estate trends,
              investment insights, and construction updates directly in your inbox.
            </p>

            <div className="flex flex-col md:flex-row gap-5">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none"
              />

              <button className="px-10 py-5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-500">
                Subscribe
              </button>

            </div>

          </div>

        </section>

        <CTA />

      </main>

      <Footer />
    </>
  );
}