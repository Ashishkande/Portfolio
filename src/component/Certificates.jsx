// src/components/Certificates.jsx
import { motion } from "framer-motion";

const certificates = [
  { name: "AWS Cloud Practitioner", org: "Amazon", year: "2024" },
  { name: "SQL Intermediate", org: "HackerRank", year: "2023" },
  { name: "Frontend Web Dev", org: "freeCodeCamp", year: "2022" },
];

const Certificates = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">🏆 Certificates</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certificates.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-gray-600">{c.org}</p>
            <p className="text-sm text-gray-500">{c.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
