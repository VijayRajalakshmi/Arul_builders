type Props = {
  image: string;
  title: string;
  location: string;
};

const ProjectCard = ({ image, title, location }: Props) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] object-cover group-hover:scale-110 transition-all duration-700"
        />
      </div>

      <div className="p-6 bg-[#0F172A]">
        <h3 className="text-2xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-400">
          {location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;