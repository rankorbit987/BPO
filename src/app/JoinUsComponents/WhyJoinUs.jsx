"use client";

import {
  Globe,
  BookOpen,
  Clock,
  HeartPulse,
  DollarSign,
  Award
} from "lucide-react";

const colors = {
  primary: '#C93C3C',       // Red
  secondary: '#1E293B',     // Navy base
  accent: '#E74C3C',
  lightBg: '#FFF5F5',       // Light red background
  lightText: '#FFFFFF'
};

export default function WhyJoinUs() {
  const benefits = [
    { title: "Global Work Environment", icon: Globe },
    { title: "Learning & Growth", icon: BookOpen },
    { title: "Flexible Hours", icon: Clock },
    { title: "Health Benefits", icon: HeartPulse },
    { title: "Competitive Pay", icon: DollarSign },
    { title: "Recognition Programs", icon: Award },
  ];

  return (
    <section className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-10 2xl:mx-12 py-20" >
      <div className=" mb-12">
        <h2 className="text-3xl font-bold " style={{ color: colors.primary }}>
          Why Work With Us?
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 ">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-xl"
              style={{
                backgroundColor: colors.secondary,
               
              }}
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
                <h3
                  className="text-xl font-semibold transition"
                  style={{ color: colors.lightText }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base transition"
                  style={{ color: "#e0e0e0" }}
                >
                  We provide {item.title.toLowerCase()} as part of our company culture and employee experience.
                </p>
                <a
                  href="#"
                  className="inline-block font-semibold transition"
                  style={{ color: colors.accent }}
                >
                  Learn more →
                </a>
              </div>

              {/* Gradient Overlay on Hover */}
              <div
                className="absolute inset-0 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #C93C3C, #2C3E50)"
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
