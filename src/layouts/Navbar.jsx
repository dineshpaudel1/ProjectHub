"use client"

import { useState, useEffect } from "react"
import logo from "../assets/logos/projecthub.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault() // Prevent default anchor behavior
    const targetElement = document.querySelector(targetId) // Get the target element
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the viewport
      })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["home", "projects", "contact"]
      for (const section of sections) {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/ProjectHub" className="flex items-center">
              <img
                src={logo || "/placeholder.svg"}
                alt="Project Hub Logo"
                className={`transition-all duration-300 ${scrolled ? "h-9" : "h-10"}`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              href="#home"
              label="Home"
              isActive={activeSection === "home"}
              onClick={(e) => handleSmoothScroll(e, "#home")}
            />
            <NavLink
              href="#projects"
              label="Projects"
              isActive={activeSection === "projects"}
              onClick={(e) => handleSmoothScroll(e, "#projects")}
            />
            <NavLink
              href="#contact"
              label="Contact"
              isActive={activeSection === "contact"}
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-[#ff0000] border border-transparent hover:border-gray-200 rounded-full transition-all duration-300 font-serif active:bg-blue-700 bg-red-200"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#ff0000] to-[#252de6] hover:from-[#ff4444] hover:to-[#4a54e8] rounded-full shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-serif"
            >
              Sign up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ff0000] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff0000] transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
          <MobileNavLink
            href="#home"
            label="Home"
            isActive={activeSection === "home"}
            onClick={(e) => handleSmoothScroll(e, "#home")}
          />
          <MobileNavLink
            href="#projects"
            label="Projects"
            isActive={activeSection === "projects"}
            onClick={(e) => handleSmoothScroll(e, "#projects")}
          />
          <MobileNavLink
            href="#contact"
            label="Contact"
            isActive={activeSection === "contact"}
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          />

          {/* Mobile Auth Buttons */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-3 px-3">
            <a
              href="/login"
              className="flex-1 px-4 py-2 text-center text-sm font-medium text-gray-700 hover:text-[#ff0000] border border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300 font-serif"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="flex-1 px-4 py-2 text-center text-sm font-medium text-white bg-gradient-to-r from-[#ff0000] to-[#252de6] hover:from-[#ff4444] hover:to-[#4a54e8] rounded-full shadow-md transition-all duration-300 font-serif"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Desktop Navigation Link Component
const NavLink = ({ href, label, isActive, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative px-3 py-2 mx-1 text-sm font-medium rounded-md transition-all duration-300 font-serif ${isActive ? "text-[#ff0000]" : "text-gray-700 hover:text-[#ff0000] hover:bg-gray-50"
        }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff0000] to-[#252de6] transform scale-x-100 transition-transform duration-300"></span>
      )}
    </a>
  )
}

// Mobile Navigation Link Component
const MobileNavLink = ({ href, label, isActive, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 font-serif ${isActive
        ? "bg-gradient-to-r from-red-50 to-indigo-50 text-[#ff0000] border-l-4 border-[#ff0000]"
        : "text-gray-700 hover:bg-gray-50 hover:text-[#ff0000]"
        }`}
    >
      {label}
    </a>
  )
}

export default Navbar