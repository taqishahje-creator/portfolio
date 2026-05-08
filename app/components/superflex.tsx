"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-4 sm:px-6 lg:px-10">
      
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="
          relative z-10
          w-full
          max-w-5xl
          text-center
          rounded-3xl
          backdrop-blur-lg
          border border-white/10
          bg-white/5
          shadow-2xl
          px-6 py-10
          sm:px-10 sm:py-14
          lg:px-16 lg:py-20
        "
      >
        <p className="text-red-400 tracking-[0.3em] uppercase text-xs sm:text-sm">
          Hello, I'm
        </p>

        <h1 className="mt-4 font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Muhammad <span className="text-red-500">Ali</span> Taqi
        </h1>

        <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Web Developer & Designer crafting dark aesthetic,
          modern MERN + Next.js experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          
          <button
            className="
              w-full sm:w-auto
              bg-red-600 hover:bg-red-700
              px-6 py-3
              rounded-xl
              transition
              duration-300
              font-medium
            "
            onClick={() => {
              document
                .getElementById("work-space")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Work
          </button>

          <button
            className="
              w-full sm:w-auto
              border border-white/20
              hover:bg-white/10
              px-6 py-3
              rounded-xl
              transition
              duration-300
              font-medium
            "
            onClick={() => {
              document
                .getElementById("contact-space")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
