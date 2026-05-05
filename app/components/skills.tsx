"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Brain,
  Boxes,
  GitBranch,
  Workflow,
} from "lucide-react";

const itemHover = {
  rest: { x: 0, scale: 1 },
  hover: { x: 6, scale: 1.03 },
};

const iconHover = {
  rest: { scale: 1 },
  hover: { scale: 1.2 },
};

export default function Skills() {
  return (
    <section  className="relative py-24 px-6 text-white overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2 id="tech-space"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          Technical <span className="text-red-500">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          {[
            {
              title: "Core Skills",
              items: [
                { icon: Workflow, label: "Project Management" },
                { icon: Boxes, label: "System Architecture" },
                { icon: Code, label: "UI/UX Design" },
                { icon: Cpu, label: "Problem Solving" },
              ],
            },
            {
              title: "Languages",
              items: [
                { icon: Code, label: "C++" },
                { icon: Code, label: "C" },
                { icon: Code, label: "Java" },
                { icon: Code, label: "Python" },
              ],
            },
            {
              title: "AI-Assisted Development",
              items: [
                { icon: Brain, label: "GPT" },
                { icon: Brain, label: "Claude" },
                { icon: GitBranch, label: "Cursor" },
              ],
              note:
                "Using AI tools to accelerate development, debugging, and system design.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(255,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
            >
              <h3 className="text-xl font-semibold text-red-500 mb-4">
                {card.title}
              </h3>

              <div className="space-y-3 text-gray-300 text-sm">
                {card.items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemHover}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <motion.div variants={iconHover}>
                        <Icon size={18} className="text-red-400" />
                      </motion.div>

                      <span className="group-hover:text-white transition">
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {card.note && (
                <p className="text-gray-400 text-xs mt-4">
                  {card.note}
                </p>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}