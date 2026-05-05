"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Work() {
  return (
    <section
      id="work-space"
      className="relative py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          Featured <span className="text-red-500">Work</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          className="grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
        >

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              VaultX — Secure Cloud Storage Platform
            </h3>

            <p className="text-gray-300 mb-4">
              A modern cloud storage web app with authentication, file upload,
              and real-time management.
            </p>

            <p className="text-gray-400 text-sm mb-6">
              Next.js • Firebase • Cloudinary
            </p>

            <div className="flex gap-4">
              <a
                href="https://vaultx51214.vercel.app/"
                target="_blank"
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden border border-white/10"
          >
            <Image
              src="/vault-x.png"
              alt="VaultX preview"
              fill
              className="object-cover"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}