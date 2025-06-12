"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const colors = {
  primary: "#C93C3C",
  secondary: "#1E293B",
  accent: "#E74C3C",
  lightBg: "#FFF5F5",
  lightText: "#FFFFFF",
};

const services = {
  "Customer Support Services": {
    description:
      "Elevate your customer experience with BPO Brigade's expert support teams. Our tailored solutions deliver 24/7 multilingual assistance, reducing response times and boosting satisfaction while cutting your operational costs.",
    image: "/images/csr.svg",
  },
  "Digital Marketing Services": {
    description:
      "Unleash your digital potential with BPO Brigade's data-driven marketing strategies. From targeted social campaigns to conversion-optimized SEO, we amplify your online presence and drive measurable business growth.",
    image: "/images/dms.svg",
  },
  "Administrative Support": {
    description:
      "Streamline your operations with BPO Brigade's efficient administrative solutions. Our virtual assistants and CRM experts handle backend tasks with precision, freeing your team to focus on strategic priorities.",
    image: "/images/as.svg",
  },
};

const iconList = ["Headset", "Megaphone", "Settings"];

export default function OurServices() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkIsMobile = () => {
      return window.innerWidth <= 768;
    };
    
    setIsMobile(checkIsMobile());
    
    // Update on resize
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      {
        // Adjust threshold based on device
        threshold: isMobile ? 0.05 : 0.2,
        // Add root margin to trigger earlier on mobile
        rootMargin: isMobile ? "0px 0px -30px 0px" : "0px"
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleCards, isMobile]);

  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 font-montserrat bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]"
      id="services-section"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[#C93C3C] text-2xl md:text-3xl font-bold mb-2">
          Our Services<span className="text-white">.</span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 mt-2 max-w-3xl pb-6 md:pb-10">
          Tailored BPO solutions designed to optimize your operations and
          accelerate growth
        </p>

        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-10 md:pb-16">
          {Object.entries(services).map(([category, data], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const categoryPath = category.toLowerCase().replace(/ /g, "-");

            return (
              <div
                key={category}
                ref={(el) => {
                  if (el) {
                    el.dataset.index = idx;
                    cardRefs.current[idx] = el;
                  }
                }}
                className={`group relative cursor-pointer overflow-hidden px-4 sm:px-5 md:px-6 pt-8 pb-6 shadow-xl rounded-xl transform transition-all duration-700 ease-out 
                  ${
                    visibleCards.includes(idx)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ backgroundColor: colors.secondary }}
              >
                {/* Expanding Circle */}
                <span
                  className="absolute top-8 left-1/2 -translate-x-1/2 z-0 h-16 w-16 md:h-20 md:w-20 rounded-full transition-all duration-300 group-hover:scale-[10]"
                  style={{ backgroundColor: colors.primary }}
                ></span>

                {/* Icon Circle */}
                <div className="group">
                  <div
                    className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: colors.primary,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{
                        backgroundColor: colors.secondary,
                      }}
                    />
                    <Icon className="text-white w-6 h-6 md:w-8 md:h-8 relative z-10" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 pt-5 space-y-3 text-center">
                  <h3
                    className="text-lg md:text-xl font-semibold transition"
                    style={{ color: colors.lightText }}
                  >
                    {category}
                  </h3>
                  <p className="text-sm md:text-base transition text-gray-300 line-clamp-3">
                    {data.description}
                  </p>

                  <div className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={data.image}
                      alt={category}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  <Link
                    href={`/services/${categoryPath}`}
                    className="inline-block font-semibold text-sm md:text-base transition"
                    style={{ color: colors.accent }}
                  >
                    Read More →
                  </Link>
                </div>

                {/* Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #C93C3C, #2C3E50)",
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/service-page"
            className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white text-[#C93C3C] shadow-md group font-semibold transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-[#C93C3C] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0 rounded-full"></span>
            <span className="relative z-10 transition-colors duration-200 group-hover:text-white whitespace-nowrap text-sm md:text-base">
              View All Services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}