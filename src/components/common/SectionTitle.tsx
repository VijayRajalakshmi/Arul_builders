type Props = {
  title: string;
  subtitle: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[5px] text-gray-400 mb-4">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;