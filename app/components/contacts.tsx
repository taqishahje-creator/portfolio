"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact-space" className="relative py-24 px-6 text-white">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Get In <span className="text-red-500">Touch</span>
        </motion.h2>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
        >

          <p className="text-gray-300 text-center mb-10">
            Let’s collaborate on building modern web experiences or discuss opportunities.
          </p>

          {/* Contact Items */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Email */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
              <Mail className="text-red-400" />
              <span className="text-gray-300">taqihashmi860@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
              <Phone className="text-red-400" />
              <span className="text-gray-300">+92 337-9876525</span>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/taqishahje-creator/vaultx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <FaGithub className="text-red-400" />
              <span className="text-gray-300">GitHub Profile</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-ali-taqi-a90127302/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <FaLinkedin className="text-red-400" />
              <span className="text-gray-300">LinkedIn Profile</span>
            </a>

          </div>

          {/* 🔥 CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {/* 🔥 Gmail Web (optional) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=taqihashmi860@gmail.com&su=Let's%20Work%20Together&body=Hi%20Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-lg transition"
            >
              Send mail
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}