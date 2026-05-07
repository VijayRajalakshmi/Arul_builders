type Props = {
  text: string;
  outline?: boolean;
};

const Button = ({ text, outline }: Props) => {
  return (
    <button
      className={`px-8 py-4 rounded-full font-semibold transition-all duration-300
      ${
        outline
          ? "border border-white text-white hover:bg-white hover:text-black"
          : "bg-white text-black hover:scale-105"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;