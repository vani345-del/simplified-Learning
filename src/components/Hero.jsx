import React, { useState, useEffect } from 'react';

import html from "../assets/html.jpeg";
import bulb from "../assets/bulb.jpg";
import boy from '../assets/boy.jpg';
import laptop from '../assets/laptop.jpg';

const slides = [
  {
    image: boy,
    title: 'Custom E Learning',
    paragraph: 'Custom eLearning empowers you with visually rich layouts and personalized learning paths.',
  },
  {
    image: bulb,
    title: 'Rapid E-Learning',
    paragraph: 'Rapid eLearning is a streamlined approach to quickly creating online courses by using simple authoring tools and existing content.',
  },
  {
    image: html,
    title: 'Legacy to HTML5',
    paragraph: 'Converting legacy eLearning courses to HTML5 enhances graphic design and ensures compatibility across multiple devices, making courses mobile-friendly and visually engaging',
  },
  {
    image: laptop,
    title: 'Translation & Localization',
    paragraph: 'With extensive experience localizing courses into 30, we adapt content not just through translation but by culturally tailoring it for global learners',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAnimateText(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden pt-16">
      {/* pt-16 adds top padding to avoid content hiding under fixed navbar */}

      {/* Background images with fade and slight zoom */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={`hero-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1600ms] ease-in-out 
            ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          style={{ willChange: 'opacity, transform' }}
        />
      ))}

      <div className="absolute inset-0 bg-black/40" /> {/* overlay */}

      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20 z-20">
        <div className="max-w-4xl text-center md:text-left text-white">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-transform duration-700 ${
              animateText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            } text-amber-50`}
          >
            {slides[currentIndex].title}
          </h1>

          <p
            className={`mb-8 text-lg md:text-xl max-w-3xl mx-auto md:mx-0 transition-transform duration-900 delay-150 ${
              animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } text-amber-50`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
          >
            {slides[currentIndex].paragraph}
          </p>

          <button
            className={`bg-blue-600 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-500 transform
              hover:scale-105 active:scale-95 focus:outline-none ${
                animateText ? 'opacity-100' : 'opacity-0'
              }`}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
