import Container from "@/components/common/Container";

const brands = [
  "L&T",
  "UltraTech",
  "Asian Paints",
  "Kajaria",
  "Havells",
  "JSW Steel",
];

const Brands = () => {
  return (
    <section className="py-20 border-y border-white/10 bg-[#081120] overflow-hidden">
      <Container>

        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-gray-400 mb-4">
            Trusted Partnerships
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Brands We Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="h-28 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:border-white/30 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-white/70">
                {brand}
              </h3>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Brands;