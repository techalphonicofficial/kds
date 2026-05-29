"use client";

import { useState, useEffect } from "react";

export default function Carousel() {
  const slides = [
    {
      src: "/industry.png",
      alt: "Industrial Manpower",
      title: "Elevate Your Operations with Professional Industrial Staffing",
      description: "Get verified machine operators, manufacturing technicians, and factory workers deployed to your site within 24-48 hours with full legal compliance.",
      // buttonText: "Book a free consultation",
    },
    {
      src: "/construction.png",
      alt: "Construction Labor",
      title: "Skilled Construction Workforce for Projects of Any Scale",
      description: "From experienced masons and electricians to skilled supervisors, we provide safety-compliant and trained labor to keep your timeline on track.",
      // buttonText: "Hire Skilled Workers",
    },
    {
      src: "/security.png",
      alt: "Security Staffing",
      title: "PSARA Certified Security Personnel for Complete Safety",
      description: "Protect your commercial, industrial, and residential premises with our professionally trained and fire-safety certified security guards.",
      // buttonText: "Request Security Guards",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#06111e] group">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Background Image - Local high-resolution image */}
            <img
              src={slide.src}
              className="block w-full h-full object-cover"
              alt={slide.alt}
            />
            {/* Gradient overlay to ensure text is fully readable and images blend nicely */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06111e] via-transparent to-transparent z-20" />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-30 flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
                <div className="max-w-4xl space-y-6 text-left">
                  <h1 className="text-4xl text-increase font-black text-white leading-[1.1] tracking-tight drop-shadow-md font-sans">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl drop-shadow">
                    {slide.description}
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href="/contact"
                      className="inline-block px-3 py-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
                    >
                      Book a Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-8 left-1/2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 scale-125" : "bg-white/40 hover:bg-white/70"
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous button (White circle, black arrow matching the screenshot) */}
      <button
        type="button"
        className="absolute top-1/2 left-6 z-40 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black hover:bg-gray-100 active:scale-95 flex items-center justify-center shadow-lg transition-all"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button (White circle, black arrow matching the screenshot) */}
      <button
        type="button"
        className="absolute top-1/2 right-6 z-40 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black hover:bg-gray-100 active:scale-95 flex items-center justify-center shadow-lg transition-all"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
