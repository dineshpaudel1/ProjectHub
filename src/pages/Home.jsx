import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen width and update state
  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile devices
  };

  // Add event listener for window resize
  useEffect(() => {
    checkScreenWidth(); // Check on initial render
    window.addEventListener('resize', checkScreenWidth); // Update on resize

    return () => {
      window.removeEventListener('resize', checkScreenWidth); // Cleanup
    };
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-center"
      style={{
        backgroundImage: `url(${isMobile ? '/mobile.png' : '/mybg.png'})`, // Conditional background image
        backgroundSize: isMobile ? '650px 900px' : '900px 600px', // Adjust size for mobile.png, use 'cover' for mybg.png
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        backgroundPosition: 'center', // Center the image
      }}
    >
      <div className="text-center max-w-2xl px-10 relative z-10">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 animate-fade-in text-gray-900 ml-9">
          Welcome to{' '}
          <span
            className="bg-gradient-to-r from-[#ff0000] to-[#252de6] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, #ff0000, #252de6)',
            }}
          >
            Project Hub
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-2xl font-semibold mb-5 animate-fade-in delay-100 text-gray-800 ml-9">
          Your Gateway to Innovative Projects
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg mb-8 animate-fade-in delay-200 text-gray-700 ml-10">
          Discover, share, and collaborate on cutting-edge projects. Whether you're a developer, designer, or enthusiast.
        </p>

        {/* Explore Button */}
        <button
          className="ml-9 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#ff0000] to-[#252de6] rounded-lg shadow-lg hover:from-[#ff4444] hover:to-[#4a54e8] transition-all duration-300 animate-fade-in delay-300"
        >
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default Home;