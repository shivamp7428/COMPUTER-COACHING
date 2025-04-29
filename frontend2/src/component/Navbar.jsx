import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      setIsScrolled(currentScrollY > 50);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? " text-yellow-700" : " text-black"}`}
    >
      <div className="container mx-auto px-7 py-3 flex bg-opacity-90 backdrop-blur-2xl bg-white justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img src="logo.png" alt="logo" className="w-14 h-14 rounded-full  shadow-lg" />
          <h1 className={`hidden md:block text-lg font-bold drop-shadow-md`}>
            SK Computer Coaching <br /> & Institute Pvt. Ltd.
          </h1>
          <h1 className={`font-bold md:hidden block drop-shadow-md`}>
            SK Computer Classes
          </h1>
        </a>

        {/* Desktop Menu */}
<div className="hidden md:flex space-x-8 text-lg font-semibold  items-center justify-center">
  {[
    ["Home", "/"],
    ["About", "/About"],
    ["Services", "/Services"],
    ["Sign up", "/Register"],
    ["Contact Us", "/Contact"],
  ].map(([title, link]) => (
    <a
      key={title}
      href={link}
      className={`relative px-2 py-1 text-center group ${
        isScrolled ? "text-yellow-700" : "text-black"
      }`}
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  ))}
</div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={38} /> : <Menu size={38} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full  bg-opacity-90 min-h-screen backdrop-blur-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg p-6 flex flex-col space-y-4`}
      >
        <button onClick={() => setIsOpen(false)} className="self-end hover:scale-110">
          <X size={34} />
        </button>
        {[
          ["Home", "/"],
          ["About", "/About"],
          ["Services", "/Services"],
          ["Sign up", "/Register"],
          
          ["Contact Us", "/Contact"],
        ].map(([title, link]) => (
          <a
            key={title}
            href={link}
            className="block text-lg w-full text-center py-2  rounded-md hover:bg-yellow-500 transition duration-300"
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

