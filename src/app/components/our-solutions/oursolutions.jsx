'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import Image from "next/image";

const colors = {
  primary: '#C93C3C',
  secondary: '#1E293B',
  accent: '#E74C3C',
  lightText: '#FFFFFF',
};

const solutions = {
  "Business Process Automation": {
    description:
      "Streamline your operations with our cutting-edge automation solutions that reduce manual work and increase efficiency.",
    image: "/images/as.svg",
  },
  "AI & Machine Learning": {
    description:
      "Leverage artificial intelligence to gain insights, automate processes, and enhance customer experiences.",
    image: "/images/csr.svg",
  },
  "Communication & Collaboration Tools": {
    description:
      "Enhance team productivity with our integrated communication and collaboration platform solutions.",
    image: "/images/dms.svg",
  },
};

const iconList = ["Briefcase", "Cpu", "MessagesSquare"];

export default function OurSolutions() {
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll(".solution-card");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 font-montserrat"
      id="solutions"
      ref={containerRef}
    >
      <h1 className="text-[#C93C3C] text-2xl md:text-3xl font-bold mb-4">
        Our Solutions<span className="text-white">.</span>
      </h1>
      <p className="text-lg text-gray-300 mt-4 max-w-3xl">
        Innovative technology solutions designed to transform your business operations
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-16">
        {Object.entries(solutions).map(([category, data], idx) => {
          const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
          const categoryPath = category.toLowerCase().replace(/ /g, "-");

          const isVisible = visibleCards.includes(idx);

          return (
            <div
              key={category}
              data-index={idx}
              className={`solution-card group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl transition-all duration-700 hover:shadow-2xl rounded-xl opacity-0 translate-y-10 ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
              style={{ backgroundColor: colors.secondary }}
            >
              {/* Expanding Circle */}
              <span
                className="absolute top-10 left-1/2 -translate-x-1/2 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10]"
                style={{ backgroundColor: colors.primary }}
              ></span>

              {/* Icon Circle */}
              <div
                className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto rounded-full transition-all duration-300 group-hover:brightness-110"
                style={{ backgroundColor: colors.primary }}
              >
                <Icon className="text-white w-8 h-8" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 pt-6 space-y-4 text-center">
                <h3 className="text-xl font-semibold transition" style={{ color: colors.lightText }}>
                  {category}
                </h3>
                <p className="text-base transition text-gray-300 line-clamp-3">
                  {data.description}
                </p>

                <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src={data.image}
                    alt={category}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <Link
                  href={`/solutions/${categoryPath}`}
                  className="inline-block font-semibold transition"
                  style={{ color: colors.accent }}
                >
                  Read More →
                </Link>
              </div>

              {/* Gradient Overlay on Hover */}
              <div
                className="absolute inset-0 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #C93C3C, #2C3E50)',
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Link
          href="/solution-page"
          className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-3 mt-10 rounded-full bg-white text-[#C93C3C] shadow-md group font-semibold transition-transform duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-[#C93C3C] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0 rounded-full"></span>
          <span className="relative z-10 transition-colors duration-200 group-hover:text-white whitespace-nowrap">
            View All Solutions
          </span>
        </Link>
      </div>
    </section>
  );
}
