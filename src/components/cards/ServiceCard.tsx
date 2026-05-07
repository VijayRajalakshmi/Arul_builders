type Props = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:border-white/30">
      <div className="w-14 h-14 rounded-2xl bg-white/10 mb-6"></div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;