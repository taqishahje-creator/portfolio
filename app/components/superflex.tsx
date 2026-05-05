"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative rounded-2xl flex items-center justify-center  overflow-hidden  text-white">


      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full  p-10 right-50 text-center  rounded-2xl backdrop-blur-lg border-b  border-white/20"
      >
        <p className="text-red-400 tracking-widest uppercase text-sm mr-20">
          Hello, Im
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold mt-3">
          Muhammad <span className="text-red-500">Ali</span> Taqi
        </h1>

        <p className="mt-5 text-gray-300 text-lg">
          Web Developer & Designer crafting dark aesthetic, modern MERN + Next.js experiences.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"   onClick={() => {
    document
      .getElementById("work-space")
      ?.scrollIntoView({ behavior: "smooth" });
  }} >
            View Work
          </button>

          <button className="border border-white/20 hover:bg-white/10 px-5 py-2 rounded-lg transition" onClick={() => {
    document
      .getElementById("contact-space")
      ?.scrollIntoView({ behavior: "smooth" });
  }} >
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}