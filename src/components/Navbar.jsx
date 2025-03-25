import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("_hello");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "_hello", url: "/" },
    { id: 2, title: "_about-me", url: "/about" },
    { id: 3, title: "_projects", url: "/projects" },
    { id: 4, title: "_blogs", url: "/blogs" },
  ];

  return (
    <nav className="flex flex-col w-full bg-[#0A192F] text-[#e5e9f0] sticky top-0 z-50">
      {/* Main navigation bar */}
      <div className="flex justify-between items-center w-full border-b border-[#132434]">
        {/* Left - Logo */}
        <Link
          to="/"
          className="text-[#64ffda] font-bold px-5 py-3 border-r-[1px] border-r-[#132434]"
        >
          dainwi-kumar
        </Link>

        {/* Center/Right - Desktop Navigation */}
        <div className="hidden md:flex">
          {navLinks.map((item) => (
            <div className="border-l border-[#132434]">
              <Link
                to={item.url}
                key={item.id}
                className={`relative px-6 py-3 transition-all duration-300 ${
                  active === item.title
                    ? "text-white border-b-2 border-[#FF8C00]"
                    : "text-gray-400"
                } cursor-pointer`}
                onClick={() => setActive(item.title)}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-5">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-400 text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`fixed inset-0 bg-[#0A192F] flex flex-col items-center justify-center text-xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-gray-400 text-3xl hover:text-[#64ffda]"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>

        {/* Navigation Links */}
        {navLinks.map((item) => (
          <Link
            to={item.url}
            key={item.title}
            className={`relative px-4 py-2 transition-all duration-300 ${
              active === item.title ? "text-white" : "text-gray-400"
            }`}
            onClick={() => {
              setActive(item.title);
              setMenuOpen(false);
            }}
          >
            {active === item.title && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF8C00]"></span>
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
