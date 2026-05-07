import Container from "@/components/common/Container";
import { stats } from "@/data/stats";

const Stats = () => {
  return (
    <section className="bg-[#0F172A]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center border border-white/10 rounded-3xl p-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                {item.number}
              </h2>

              <p className="text-gray-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;