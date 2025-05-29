"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ServicesCTASection({ colors }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Trigger only once
        }
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
    <div
      ref={sectionRef}
      className={`py-14 md:py-16 lg:py-20 w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-150"
          style={{ color: colors.lightText }}
        >
          Ready to Elevate Your 
          <span style={{ color: colors.primary }}> Business Experience?</span>
        </h2>

        <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300">
          Let’s collaborate to craft tailored solutions that drive value and deliver excellence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500">
          {/* Get Started Button */}
          <Link
            href="#contact-form"
            className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white text-[#C93C3C] shadow-md group font-medium transition-transform duration-300 hover:scale-105 min-h-[48px]"
          >
            <span className="absolute inset-0 bg-[#C93C3C] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0 rounded-full"></span>
            <span className="relative z-10 transition-colors duration-200 group-hover:text-white whitespace-nowrap">
              Get Started
            </span>
          </Link>

          {/* Contact Us Button */}
          <Link href="mailto:hr@bpobrigade.com">
            <button
              className="relative overflow-hidden rounded-full bg-white text-[#C93C3C] shadow-md cursor-pointer group px-6 py-2 font-medium flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 min-h-[48px]"
              style={{ "--clr": "#C93C3C" }}
            >
              <span className="absolute inset-0 bg-[var(--clr)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0 rounded-full"></span>
              <span className="relative z-10 flex items-center gap-2 text-[var(--clr)] transition-colors duration-200 group-hover:text-white whitespace-nowrap">
                Contact Us
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
