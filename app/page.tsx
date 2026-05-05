"use client"
import { motion } from "framer-motion";
import Superflex from "./components/superflex";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/works";
import Contact from "./components/contacts";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🌹 Background Blobs Layer */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-30 top-10 left-10"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-80 h-80 bg-purple-700 rounded-full blur-3xl opacity-20 bottom-10 right-10"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -25, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 🌟 Page Content Layer */}
      <div className="relative z-10  justify-center items-center">
        <Superflex />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>

    </div>
  );
}