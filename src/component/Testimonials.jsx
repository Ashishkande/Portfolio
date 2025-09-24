// src/components/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Ashish is a fast learner and great team player. His ability to solve problems creatively sets him apart.",
    author: "Mentor @ POSIT Source",
  },
  {
    text: "Delivered excellent features on time and exceeded expectations in our project.",
    author: "Team Lead",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <h2 className="text-4xl font-bold text-center mb-12">💬 Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-2xl flex-1"
          >
            <p className="italic text-gray-700">“{t.text}”</p>
            <p className="mt-4 font-semibold">{t.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
