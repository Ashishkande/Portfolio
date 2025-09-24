// src/components/Skills.jsx
import { motion } from "framer-motion";
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
  SiGit,
  SiGithub,
  SiJira,
  SiSlack,
  SiCplusplus,
  SiOpenai
} from "react-icons/si";
import { GiChainLightning } from "react-icons/gi"; 

const skills = [
  { name: "Python", icon: <SiPython className="text-yellow-500" size={40} /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" size={40} /> },
  { name: "React.js", icon: <SiReact className="text-blue-500" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={40} /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-500" size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={40} /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" size={40} /> },
  { name: "Git", icon: <SiGit className="text-red-500" size={40} /> },
  { name: "GitHub", icon: <SiGithub className="text-black" size={40} /> },
  { name: "Jira", icon: <SiJira className="text-blue-600" size={40} /> },
  { name: "Slack", icon: <SiSlack className="text-pink-500" size={40} /> },
  { name: "LangChain", icon: <GiChainLightning className="text-purple-500" size={40} /> }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <h2 className="text-4xl font-bold text-center mb-12">🛠️ Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            {skill.icon}
            <p className="mt-3 font-semibold text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
