"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactForm from "../components/contact-form/contactform";

// Color scheme
const colors = {
  primary: "#C93C3C",
  secondary: "#1E293B",
  accent: "#E74C3C",
  lightBg: "#F5F7FA",
  darkText: "#333333",
  lightText: "#FFFFFF",
};

// Static service data
const services = {
  "Customer Support Services": [
    "Inbound and Outbound Calling",
    "Customer Service Representative",
    "Appointment Setting",
    "Front Desk Support",
    "Chat Support",
    "Email Support",
    "Virtual Assistant",
    "Virtual Order Taker",
    "Quality Assurance",
  ],
  "Digital Marketing Services": [
    "SEO (Search Engine Optimization)",
    "Social Media Marketing",
    "PPC (Pay‑Per‑Click) Management",
    "E‑commerce Marketing",
    "Conversion Rate Optimization",
  ],
  "Administrative Support": ["CRM Support", "Automation Services"],
};

// Icon list for categories
const iconList = ["Headset", "Megaphone", "Settings"];

export default function ServicesPage() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleCards]);

  return (
    <div>
      {/* 🖼️ Top Hero Section with Background Image */}
      <div
        className="relative py-24 px-4 sm:px-6 lg:px-8 mx-auto text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

        {/* Text content */}
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c93c3c]">
            Services<span className="text-white">.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl mx-auto max-w-2xl">
            Elevate your business with our professional customer support,
            digital marketing, and administrative support services
          </p>
        </div>
      </div>

      {/* 🔧 Service Cards */}
      <div className="container mx-auto px-6 md:px-10 lg:px-10 py-16 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(services).map(([category, items], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const categoryPath = category.toLowerCase().replace(/ /g, "-");

            return (
              <div
                key={category}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl rounded-xl transform transition-all duration-700 ease-out 
                  ${
                    visibleCards.includes(idx)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ backgroundColor: colors.secondary }}
              >
                {/* Expanding Circle */}
                <span
                  className="absolute top-10 left-1/2 -translate-x-1/2 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10]"
                  style={{ backgroundColor: colors.primary }}
                ></span>

                {/* Icon Circle */}
                <div className="group">
                  <div
                    className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto rounded-full transition-all duration-300"
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
                    <Icon className="text-white w-8 h-8 relative z-10" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 pt-6 space-y-4">
                  <h3
                    className="text-xl font-semibold transition text-start pb-4"
                    style={{ color: colors.lightText }}
                  >
                    {category}
                  </h3>

                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li key={item}>
                        <Link
                          href={`/services/${categoryPath}/${i}`}
                          className="flex items-center gap-2 font-medium hover:underline [text-underline-position:under]"
                          style={{ textDecorationColor: colors.lightText }}
                        >
                          <Icons.ArrowRight
                            size={16}
                            style={{ color: colors.primary }}
                          />
                          <span className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">
                            {item}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
      </div>

      {/* 📩 Contact Form Section */}
      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  );
}
