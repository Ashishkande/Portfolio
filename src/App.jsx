// src/App.jsx
import Hero from './component/Hero'
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="font-sans text-gray-800">
     <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
