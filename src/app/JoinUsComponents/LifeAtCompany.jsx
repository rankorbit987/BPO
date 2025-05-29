"use client";

import { useEffect, useRef, useState } from "react";

const colors = {
  primary: "#C93C3C",
  secondary: "#1E293B",
  lightBg: "#FFF5F5",
  lightText: "#FFFFFF",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    alt: "Team event",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    alt: "Office Vibes",
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    alt: "Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    alt: "Meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    alt: "Teamwork",
  },
  {
    src: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    alt: "Workspace",
  },
];

export default function LifeAtCompany() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const imagesToShow = showAll ? images : images.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
          Life at BPO Brigade
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-lg">
          Whether you're remote or on-site, we support, engage, and empower you every
          step of the way. Here's a glimpse into the culture that drives us.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mb-10">
        {imagesToShow.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className={`rounded-lg shadow-md object-cover h-60 w-full transform transition-opacity transition-transform duration-500 ease-out ${
              visible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${idx * 250}ms` }}
          />
        ))}
      </div>

      <div className="text-center">
  {!showAll && (
    <button
      onClick={() => setShowAll(true)}
      className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#C93C3C] shadow-md group font-semibold transition-transform duration-300 hover:scale-105"
    >
      <span className="absolute inset-0 bg-[#C93C3C] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0 rounded-full"></span>
      <span className="relative z-10 transition-colors duration-200 group-hover:text-white whitespace-nowrap">
        View More Moments
      </span>
    </button>
  )}
</div>

    </section>
  );
}
