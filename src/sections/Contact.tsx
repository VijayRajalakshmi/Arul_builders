import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

const Contact = () => {
  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[5px] text-gray-400 mb-5">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Let’s Build Something Great Together
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Reach out to discuss your residential or commercial
              construction requirements.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-[40px] p-10">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-4 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-4 outline-none"
              ></textarea>

              <Button text="Send Message" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;