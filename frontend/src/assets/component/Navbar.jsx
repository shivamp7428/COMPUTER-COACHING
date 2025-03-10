import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-900 to-blue-800 text-white z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img src="img.png" alt="logo" className="w-14 h-14 rounded-full shadow-lg" />
          <h1 className="hidden md:block text-lg font-bold text-white drop-shadow-md">
            SK Computer Coaching <br /> & Institute Pvt. Ltd.
          </h1>
          <h1 className="text-white font-bold  md:hidden block drop-shadow-md">
            SK Computer Classes
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          {[
            ["Home", "/"],
            ["About", "/About"],
            ["Services", "/Services"],
            ["Register", "/Register"],
            ["Login", "/Login"],
            ["Contact Us", "/Contact"],
          ].map(([title, link]) => (
            <a key={title} href={link} className="relative transition duration-300 hover:text-yellow-400">
              {title}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-transform duration-300 hover:scale-110" onClick={() => setIsOpen(!isOpen)}
  >
          {isOpen ? <X size={38} className="text-red-400" /> : <Menu size={38} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-indigo-950 bg-opacity-90 backdrop-blur-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg p-6 flex flex-col space-y-4`}
      >
        <button onClick={() => setIsOpen(false)} className="self-end text-red-400 hover:scale-110">
          <X size={34} />
        </button>
        {[
          ["Home", "/"],
          ["About", "/About"],
          ["Services", "/Services"],
          ["Register", "/Register"],
          ["Login", "/Login"],
          ["Contact Us", "/Contact"],
        ].map(([title, link]) => (
          <a
            key={title}
            href={link}
            className="block text-lg text-white text-center py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
