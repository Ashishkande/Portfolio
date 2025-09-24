// src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">🧠 About Me</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://avatars.githubusercontent.com/u/000000?v=4"
          alt="profile"
          className="w-48 h-48 rounded-full shadow-lg"
        />
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700"
        >
          I'm a passionate Computer Science undergrad who loves turning ideas into reality
          with full-stack development. From crafting pixel-perfect UIs to building scalable
          backend logic, I enjoy every bit of the development cycle.
        </motion.p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-4 bg-blue-50 rounded-lg shadow">
          <h3 className="text-2xl font-bold">1</h3>
          <p>Years Experience</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg shadow">
          <h3 className="text-2xl font-bold">4+</h3>
          <p>Projects</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg shadow">
          <h3 className="text-2xl font-bold">1</h3>
          <p>Internships</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg shadow">
          <h3 className="text-2xl font-bold">1</h3>
          <p>Full-Time</p>
        </div>
      </div>
    </section>
  );
};

export default About;
