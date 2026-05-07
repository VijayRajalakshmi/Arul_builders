import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition-all duration-500">
        <FaWhatsapp />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;