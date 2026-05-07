import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Home Owner",
    review:
      "Professional execution, transparent communication, and excellent build quality throughout the project.",
  },

  {
    name: "Priya Sharma",
    role: "Property Investor",
    review:
      "Arul Builders delivered exactly what was promised. Highly satisfied with the overall experience.",
  },

  {
    name: "Vignesh Raj",
    role: "Business Owner",
    review:
      "Premium quality construction with modern design and timely completion.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#081120]">
      <Container>
        <SectionTitle
          subtitle="Client Testimonials"
          title="What Our Clients Say"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#0F172A] border border-white/10 rounded-3xl p-8"
            >
              <p className="text-gray-400 leading-relaxed mb-8">
                "{item.review}"
              </p>

              <div>
                <h3 className="text-2xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;