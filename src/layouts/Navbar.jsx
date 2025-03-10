import React, { useState } from 'react';
import logo from "../assets/logos/projecthub.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.querySelector(targetId); // Get the target element
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start', // Align to the top of the viewport
      });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50"> {/* Make navbar fixed and add z-50 */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <img src={logo} alt="Project Hub Logo" className="h-10 w-auto" />
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="py-4 px-2 text-gray-700 font-semibold hover:text-[#ff0000] transition duration-300"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="py-4 px-2 text-gray-700 font-semibold hover:text-[#252de6] transition duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="py-4 px-2 text-gray-700 font-semibold hover:text-[#252de6] transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/upload"
              className="flex justify-center items-center w-[90px] h-[40px] font-medium text-white bg-gradient-to-r from-[#ff0000] to-[#252de6] rounded-full hover:from-[#ff4444] hover:to-[#4a54e8] transition duration-300"
            >
              Login
            </a>
            <a
              href="/upload"
              className="flex justify-center items-center w-[90px] h-[40px] font-medium text-white bg-gradient-to-r from-[#ff0000] to-[#252de6] rounded-full hover:from-[#ff4444] hover:to-[#4a54e8] transition duration-300"
            >
              Signup
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-700 hover:text-[#ff0000]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <ul>
          <li>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="block text-sm px-2 py-4 text-white bg-[#ff0000] font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="block text-sm px-2 py-4 hover:bg-[#252de6] hover:text-white transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="block text-sm px-2 py-4 hover:bg-[#ff0000] hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;