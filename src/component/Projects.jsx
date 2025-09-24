// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

// Mapping tech names to icons
const techIcons = {
  "React.js": <SiReact className="text-blue-500" size={28} />,
  "React": <SiReact className="text-blue-500" size={28} />,
  "Next.js": <SiNextdotjs className="text-black" size={28} />,
  "TailwindCSS": <SiTailwindcss className="text-sky-400" size={28} />,
  "Node.js": <SiNodedotjs className="text-green-600" size={28} />,
  "Python": <SiPython className="text-yellow-500" size={28} />,
  "FastAPI": <SiFastapi className="text-teal-500" size={28} />,
  "PostgreSQL": <SiPostgresql className="text-blue-700" size={28} />,
  "MongoDB": <SiMongodb className="text-green-500" size={28} />,
  "MySQL": <SiMysql className="text-blue-600" size={28} />,
};

// Projects data
const projects = [
  {
    name: "PTask",
    tech: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    description:
      "A project management platform with deadline sorting, Google auth, and real-time updates like ClickUp.",
    github: "https://github.com/Ashishkande/PTask",
    color: "border-blue-500",
  },
  {
    name: "Avkash",
    tech: ["React", "FastAPI", "MongoDB", "WebSocket"],
    description:
      "An AI-enabled HR platform with resume analysis, leave management, referrals, and live tracking.",
    github: "https://github.com/Ashishkande/Avkash",
    color: "border-pink-500",
  },
  {
    name: "Tourism Guide",
    tech: ["React", "TailwindCSS", "MongoDB"],
    description:
      "A responsive travel app showcasing 100+ attractions with interactive filters and map integration.",
    github: "https://github.com/Ashishkande/Tourism-Guide",
    color: "border-yellow-500",
  },
  {
    name: "Stock Trend Prediction",
    tech: ["Python", "ML", "LSTM" ,"MongoDB"],
    description:
      "Predicted stock prices with 85% accuracy using LSTM and regression models.",
    github: "https://github.com/Ashishkande/Stock-Trend-Prediction",
    color: "border-red-500",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 border-l-4 border-green-500 pl-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🚀 Projects
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${project.color} flex flex-col justify-between min-h-[350px]`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>

                {/* Tech icons */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <div key={i} title={tech}>
                      {techIcons[tech]}
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 mb-6">{project.description}</p>
              </div>

              {/* GitHub button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
              >
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
