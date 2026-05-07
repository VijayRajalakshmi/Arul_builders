import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

const CTA = () => {
  return (
    <section>
      <Container>
        <div className="bg-[#0F172A] rounded-[40px] p-10 md:p-20 text-center border border-white/10">
          <p className="uppercase tracking-[5px] text-gray-400 mb-5">
            Let’s Build Together
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Ready To Build Your Dream Property?
          </h2>

          <div className="flex justify-center">
            <Button text="Schedule Site Visit" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;