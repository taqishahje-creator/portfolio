"use client";

import { motion } from "framer-motion";

const tech = [
  {
    title: "Frontend",
    items: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Firebase"],
  },
  {
    title: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    title: "Tools",
    items: ["Figma", "GitHub", "Cloudinary", "Cloudflare"],
  },
];

export default function About() {
  return (
    <section className="relative py-24 px-6 text-white overflow-hidden">

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            My <span className="text-red-500">Stack</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I build modern web applications using a performance-first stack.
            My workflow focuses on clean architecture, scalable backend systems,
            and visually polished UI/UX.
          </p>

          <p className="text-gray-400 mt-5">
            From design in Figma to deployment via Cloudflare, I handle the
            complete lifecycle of a product.
          </p>

          {/* badge */}
          <div className="mt-8 inline-block px-4 py-2 border border-red-500/30 rounded-lg bg-red-500/10 text-red-400">
            Full Stack • UI Engineering • Deployment
          </div>
        </motion.div>

        {/* RIGHT — TECH CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {tech.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-red-500/40 transition"
            >
              <h3 className="text-lg font-semibold text-red-500 mb-3">
                {group.title}
              </h3>

              <ul className="space-y-1 text-gray-300 text-sm">
                {group.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}