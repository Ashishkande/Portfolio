// src/components/Experience.jsx
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "POSIT Source Technology",
      duration: "Jan – Jun 2025",
      details: [
        "Built scalable task management system with Next.js + TailwindCSS",
        "Integrated Slack & GitHub APIs for real-time collaboration",
        "Implemented real-time alerts using Prisma Pulse",
      ],
    },
    {
      role: "Software Developer",
      company: "Prometteur Solution",
      duration: "Aug-2025",
      details: [
        "Developed REST APIs with FastAPI",
        "Working on the tech MongoDB , Langchain",
        "Collaborated in Agile team with Jira & GitHub Projects",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-white to-blue-50">
      <h2 className="text-4xl font-bold text-center mb-16">👨‍💻 Experience</h2>
      <div className="relative border-l-4 border-blue-500 ml-8 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 rounded-2xl shadow-lg w-full md:w-3/4 hover:shadow-2xl transition-all"
          >
            {/* Icon on the timeline */}
            <div className="absolute -left-12 top-8 bg-blue-500 text-white rounded-full p-3 shadow-md">
              <Briefcase size={22} />
            </div>
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 font-medium">
              {exp.company} • {exp.duration}
            </p>
            <ul className="list-disc list-inside mt-4 text-lg space-y-2 text-gray-700">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
