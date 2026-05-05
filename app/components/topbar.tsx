"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll helper
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between h-16 px-6 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* 🔥 LOGO WITH SMOOTH GRADIENT */}
      <motion.h1
        className="text-2xl font-bold tracking-wide bg-clip-text text-transparent"
        animate={{
          backgroundImage: scrolled
            ? "linear-gradient(to right, #d1d5db, #ffffff, #d1d5db)"
            : "linear-gradient(to right, #c084fc, #ffffff, #f87171)",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        Portfolio
      </motion.h1>

      {/* 🔹 NAVIGATION */}
      <ul className="flex gap-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600  transition-colors duration-300 ">

        <motion.li
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer hover:text-red-400 transition"
          
          onClick={() => scrollTo("work-space")}
        >
          Projects
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer hover:text-red-400 transition"
          onClick={() => scrollTo("tech-space")}
        >
          About
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer hover:text-red-400 transition"
          onClick={() => scrollTo("contact-space")}
        >
          Contact
        </motion.li>

      </ul>
    </motion.div>
  );
}