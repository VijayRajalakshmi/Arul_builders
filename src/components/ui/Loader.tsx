const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] bg-[#020617] flex items-center justify-center overflow-hidden">
      
      {/* Blur Background */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[8px] mb-5">
          ARUL
        </h1>

        <p className="uppercase tracking-[6px] text-gray-400 text-sm">
          Premium Construction
        </p>

        {/* Loading Bar */}
        <div className="w-[250px] h-[2px] bg-white/10 mt-10 overflow-hidden rounded-full">
          <div className="h-full bg-white animate-pulse w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;