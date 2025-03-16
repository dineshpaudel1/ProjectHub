import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-red-50 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-50 blur-3xl opacity-50"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff0000] to-[#252de6] font-serif">
                Project Hub
              </h3>
              <div className="ml-2 w-8 h-[2px] bg-gradient-to-r from-[#ff0000] to-[#252de6]"></div>
            </div>
            <p className="text-gray-600 leading-relaxed font-serif">
              Your gateway to innovative projects. Discover, share, and collaborate on cutting-edge ideas with Project
              Hub.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center text-sm font-medium text-[#ff0000] hover:text-[#252de6] transition-colors font-serif">
                Learn more about us
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-gray-900 font-serif">Quick Links</h3>
              <div className="ml-2 w-8 h-[2px] bg-gradient-to-r from-[#ff0000] to-[#252de6]"></div>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-gray-600 hover:text-[#ff0000] transition-colors group font-serif"
                  >
                    <span className="w-0 h-[1px] bg-[#ff0000] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-gray-900 font-serif">Contact Us</h3>
              <div className="ml-2 w-8 h-[2px] bg-gradient-to-r from-[#ff0000] to-[#252de6]"></div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-[#ff0000] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 font-serif">paudeldinesh961@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-[#ff0000] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 font-serif">9847503434</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#ff0000] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 font-serif">Patan Durbar Square Lalitpur</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-gray-900 font-serif">Stay Updated</h3>
              <div className="ml-2 w-8 h-[2px] bg-gradient-to-r from-[#ff0000] to-[#252de6]"></div>
            </div>
            <p className="text-gray-600 font-serif">Subscribe to our newsletter for the latest updates and project releases.</p>
            <form className="mt-4 space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all font-serif"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-[#ff0000] to-[#252de6] text-white rounded-lg font-medium hover:from-[#ff4444] hover:to-[#4a54e8] transition-all duration-300 transform hover:scale-[1.01] shadow-sm hover:shadow font-serif"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm order-2 md:order-1 mt-4 md:mt-0 font-serif">
              &copy; {currentYear} Project Hub. All rights reserved.
            </p>

            <div className="flex space-x-5 order-1 md:order-2">
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://github.com" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Social Link Component
const SocialLink = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#ff0000] hover:border-[#ff0000] hover:shadow-sm transition-all duration-300"
      {...props}
    >
      {children}
    </a>
  )
}

export default Footer