"use client";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

export default function CompanyCulture() {
  const sectionRef = useRef(null);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowImages(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#c93c3c]">
            Our Culture
          </h2>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            We foster a culture of collaboration, innovation, and inclusion.
            From team events to learning programs, our people grow personally
            and professionally. Our environment encourages transparency, shared
            ownership, and ongoing development.
          </p>
          <Link
            href="/#company-culture"
            className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#C93C3C] shadow-md group font-semibold transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-[#C93C3C] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0 rounded-full"></span>
            <span className="relative z-10 transition-colors duration-200 group-hover:text-white whitespace-nowrap">
              Explore Our Culture
            </span>
          </Link>
        </div>

        {/* Right: Asymmetrical Image Grid */}
        <div
          className={`grid grid-cols-2 grid-rows-2 gap-4 transition-all duration-1000 ease-out ${
            showImages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Large tall image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team Culture"
            className="rounded-lg shadow-md w-full h-auto object-cover row-span-2"
            style={{ aspectRatio: "3 / 4" }}
          />
          {/* Top right image */}
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Office Space"
            className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-48 object-cover"
          />
          {/* Bottom right image */}
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
            alt="Meeting"
            className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
