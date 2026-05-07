"use client";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Building"
          className="w-full h-full object-cover scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#020617]"></div>
      </div>

      {/* Blur Lights */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-5xl">

          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[6px] text-gray-300 mb-6 text-sm md:text-base"
          >
            Chennai Premium Construction
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          >
            Building Chennai’s
            <span className="block text-white/70">
              Future With Excellence
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          >
            Crafting premium residential and commercial spaces
            with modern architecture, trusted quality, and
            long-term value for future generations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-wrap gap-5"
          >
            <Button text="Explore Projects" />

            <Button
              text="Schedule Site Visit"
              outline
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-wrap gap-12 mt-20"
          >
            <div>
              <h3 className="text-4xl font-bold mb-2">
                20+
              </h3>

              <p className="text-gray-400">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-2">
                500+
              </h3>

              <p className="text-gray-400">
                Happy Families
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-2">
                10+
              </h3>

              <p className="text-gray-400">
                Years Experience
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-8 h-14 rounded-full border border-white/30 flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-3 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;