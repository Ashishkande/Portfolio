// Navbar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const links = [
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Ashish Kande</div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}      // highlight active link
                offset={-80}    // adjust for fixed navbar
                className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-white shadow-md">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-700 hover:text-blue-600 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
