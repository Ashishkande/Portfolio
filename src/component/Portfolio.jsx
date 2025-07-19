import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white text-gray-800 font-sans">
      <header className="py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Ashish Kande</h1>
        <p className="mt-4 text-xl font-medium">Full Stack Developer 🚀 | React.js | Next.js | FastAPI | PostgreSQL | MongoDB</p>
        <div className="mt-6 flex justify-center gap-6 text-blue-700 text-lg">
          <a href="mailto:ashishkande692@gmail.com" className="hover:underline">📧 Email</a>
          <a href="https://linkedin.com/in/ashish-kande" target="_blank" className="hover:underline">🔗 LinkedIn</a>
          <a href="https://github.com/Ashishkande" target="_blank" className="hover:underline">💻 GitHub</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-3">🧠 About Me</h2>
          <p className="leading-relaxed text-lg">
            I'm a passionate Computer Science undergrad who loves turning ideas into reality with full-stack development.
            From crafting pixel-perfect UIs to building scalable backend logic, I enjoy every bit of the development cycle.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-500 pl-3">💼 Internship</h2>
          <div className="bg-white rounded-xl p-6 shadow-xl border-l-4 border-purple-400">
            <h3 className="text-xl font-semibold">Full Stack Developer Intern @ POSIT Source Technology (Jan–Jun 2025)</h3>
            <ul className="list-disc list-inside mt-2 text-lg space-y-1">
              <li>Developed a scalable task management system using Next.js + TailwindCSS</li>
              <li>Integrated Slack & GitHub APIs for real-time collaboration and tracking</li>
              <li>Used Prisma, PostgreSQL, NeonDB, Ngrok, and Google OAuth</li>
              <li>Implemented real-time alerts using Prisma Pulse</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-green-500 pl-3">🚀 Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="text-xl font-bold">📌 PTask</h3>
              <p className="text-sm mb-2 text-gray-600">Next.js | Prisma | PostgreSQL | TailwindCSS</p>
              <p className="text-md">A project management platform with deadline sorting, Google auth, and real-time updates like ClickUp.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
              <h3 className="text-xl font-bold">📌 Avkash</h3>
              <p className="text-sm mb-2 text-gray-600">React | FastAPI | MongoDB | WebSocket</p>
              <p className="text-md">An AI-enabled HR platform with resume analysis, leave management, referrals, and live tracking.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold">📌 Tourism Guide</h3>
              <p className="text-sm mb-2 text-gray-600">ReactJS | TailwindCSS | MongoDB</p>
              <p className="text-md">A responsive travel app showcasing 100+ attractions with interactive filters and map integration.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
              <h3 className="text-xl font-bold">📌 Stock Trend Prediction</h3>
              <p className="text-sm mb-2 text-gray-600">Python | ML | LSTM</p>
              <p className="text-md">Predicted stock prices with 85% accuracy using LSTM and regression models.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-indigo-500 pl-3">🛠️ Technical Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 list-disc list-inside text-lg gap-2">
            <li>React.js, Next.js, Tailwind CSS</li>
            <li>JavaScript, Python, C++, HTML, CSS</li>
            <li>FastAPI, Prisma, REST APIs</li>
            <li>PostgreSQL, MongoDB, MySQL</li>
            <li>Git, GitHub, VS Code, Postman</li>
            <li>Slack, Jira, ClickUp, Trello</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-teal-500 pl-3">🎓 Education</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>B.Tech in Computer Science – SVERI COE, CGPA: 8.50/10 (2025)</li>
            <li>HSC – Udaygiri Mahavidyalaya, 78.50%</li>
            <li>SSC – Vidya Vardhini High School, 68.00%</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-orange-500 pl-3">💡 Soft Skills</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Clear communicator & documentation wizard</li>
            <li>Team player with agile experience</li>
            <li>Fast learner, self-starter, and solution-driven</li>
            <li>Eye for detail & clean code advocate</li>
          </ul>
        </section>
      </main>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ashish Kande • Built with ❤️ using React & Tailwind CSS
      </footer>
    </div>
  );
};

export default Portfolio;
