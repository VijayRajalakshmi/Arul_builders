const Marquee = () => {
  return (
    <div className="overflow-hidden border-y border-white/10 py-6 bg-[#081120]">
      <div className="flex whitespace-nowrap animate-marquee gap-16">
        
        {Array(2)
          .fill(
            "Luxury Apartments • Premium Villas • Commercial Spaces • Modern Architecture • Chennai Real Estate •"
          )
          .map((text, index) => (
            <h2
              key={index}
              className="text-3xl md:text-5xl font-bold text-white/10 uppercase tracking-[4px]"
            >
              {text}
            </h2>
          ))}
      </div>
    </div>
  );
};

export default Marquee;