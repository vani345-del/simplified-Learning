import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null; // Hide navbar when scrolled down

  return (
    <nav className="fixed w-full top-5 left-0 z-50 bg-transparent backdrop-filter backdrop-blur-md shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop view */}
        <div className="hidden md:flex justify-center">
          <div className="inline-flex items-center h-16 space-x-30 border-2 border-white rounded-4xl px-6 py-1">
            <div className="shrink-0 font-bold text-indigo-700 text-xl">Logo</div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-white hover:text-indigo-600 font-medium">About Us</a>
              <a href="#" className="text-white hover:text-indigo-600 font-medium">Services</a>
              <a href="#" className="text-white hover:text-indigo-600 font-medium">Our Methods</a>
              <a href="#" className="text-white hover:text-indigo-600 font-medium">Contacts</a>
            </div>
            <div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-4xl border-2 border-white hover:bg-indigo-700 transition">
                Call Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden items-center h-16 justify-between border-2 border-white rounded-4xl px-4 py-1">
          <div className="font-bold text-indigo-700 text-xl">Logo</div>
          <button className="text-white focus:outline-none focus:ring-2 focus:ring-indigo-600" aria-label="Toggle menu">
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
