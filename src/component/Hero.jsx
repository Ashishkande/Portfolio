// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-white text-gray-800 px-6"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ashish Kande
      </motion.h1>

      <motion.p
        className="mt-4 text-xl font-medium text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Full Stack Developer 🚀 | React.js | Next.js | FastAPI | PostgreSQL | MongoDB
      </motion.p>

      <motion.div
        className="mt-6 flex gap-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
