import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const About = () => {
  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="About Arul Builders"
              title="Building Trust Through Quality Construction"
            />

            <p className="text-gray-400 leading-relaxed mb-6">
              Arul Builders is committed to creating premium residential
              and commercial spaces that combine modern architecture,
              quality craftsmanship, and long-term value.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              With a strong focus on customer satisfaction, transparency,
              and timely delivery, we continue to shape Chennai’s future
              with thoughtfully designed developments.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  10+
                </h3>

                <p className="text-gray-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold mb-2">
                  500+
                </h3>

                <p className="text-gray-400">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
              alt="About"
              className="rounded-[40px] h-[600px] object-cover w-full"
            />

            <div className="absolute -bottom-10 -left-10 bg-[#0F172A] border border-white/10 rounded-3xl p-8">
              <h3 className="text-5xl font-bold mb-2">
                20+
              </h3>

              <p className="text-gray-400">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;