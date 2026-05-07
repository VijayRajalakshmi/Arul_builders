import Container from "@/components/common/Container";

import {
  Building2,
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    number: "01",
    title: "Premium Construction",
    description:
      "Modern engineering standards with premium-grade materials for long-term durability and elegance.",
  },

  {
    icon: Clock3,
    number: "02",
    title: "On-Time Delivery",
    description:
      "Efficient planning and disciplined execution ensure projects are delivered as promised.",
  },

  {
    icon: ShieldCheck,
    number: "03",
    title: "Trusted Expertise",
    description:
      "Years of expertise in residential and commercial developments across Chennai.",
  },

  {
    icon: Users,
    number: "04",
    title: "Customer Focused",
    description:
      "Transparent communication and client-first execution throughout every stage.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-[40px] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Building"
                className="w-full h-[750px] object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-10 left-10 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl px-8 py-6">

              <h3 className="text-5xl font-bold mb-2">
                10+
              </h3>

              <p className="text-gray-300 uppercase tracking-[3px] text-sm">
                Years Experience
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="uppercase tracking-[6px] text-gray-400 mb-6">
              Why Choose Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-16">
              Building Chennai’s Future With Precision & Excellence
            </h2>

            <div className="space-y-10">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-6 border-b border-white/10 pb-10"
                  >

                    {/* Number */}
                    <div className="text-5xl font-bold text-white/10">
                      {item.number}
                    </div>

                    {/* Content */}
                    <div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                          <Icon size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-400 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;