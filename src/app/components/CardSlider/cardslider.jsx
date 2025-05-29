"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      title: "E-COMMERCE",
      subtitle: "Centralized Platforms For Enhanced Business Processes",
      features: [
        {
          title: "USER-FRIENDLY STOREFRONT",
          description:
            "Design intuitive, visually appealing storefronts showcasing products effectively.",
        },
        {
          title: "SECURE PAYMENT INTEGRATION",
          description:
            "Enable secure transactions with credit/debit cards, digital wallets, and BNPL solutions.",
        },
        {
          title: "PRODUCT MANAGEMENT SYSTEM",
          description:
            "Manage inventory, pricing, and promotions with real-time updates.",
        },
      ],
    },
    {
      title: "WEBSITE DEVELOPMENT",
      subtitle: "Custom-Built Sites for Modern Businesses",
      features: [
        {
          title: "CUSTOMER PORTALS",
          description:
            "Provide personalized access for customers to manage their accounts.",
        },
        {
          title: "EMPLOYEE PORTALS",
          description:
            "Enable your team to collaborate efficiently with task management tools.",
        },
        {
          title: "E-COMMERCE PORTALS",
          description: "Integrate shopping features and inventory management.",
        },
        {
          title: "REAL-TIME ANALYTICS",
          description: "Monitor engagement and sales with live dashboards.",
        },
      ],
    },
    {
      title: "M-COMMERCE",
      subtitle: "Mobile Solutions for On-the-Go Sales",
      features: [
        {
          title: "RESPONSIVE STOREFRONT",
          description:
            "Mobile-friendly shopping experience prioritizing speed and efficiency.",
        },
        {
          title: "MOBILE PAYMENT INTEGRATION",
          description:
            "Secure payment options including Apple Pay and Google Pay.",
        },
        {
          title: "INVENTORY MANAGEMENT",
          description:
            "Track and manage product details effortlessly from mobile.",
        },
      ],
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#000000] text-white py-16 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1a324b 1px, transparent 1px), linear-gradient(90deg, #1a324b 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header with images */}
        <div className="text-center mb-16 relative flex items-center justify-center">
          {/* Left image */}
          <img
            src="/images/right.svg"
            alt="Left Decoration"
            className="absolute left-[-120px] top-30 transform -translate-y-1/2 w-60 h-60 "
          />
          {/* Right image */}
          <img
            src="/images/left.svg"
            alt="Right Decoration"
            className="absolute right-[-120px] top-15 transform -translate-y-1/2 w-60 h-60"
          />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">WHAT WE DO BEST</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We craft end‑to‑end tech solutions—spanning strategy, design, and
              development—that turn bold ideas into resilient, user‑focused
              products. Partner with us to accelerate innovation, optimize
              operations, and create seamless digital experiences that set you
              apart.
            </p>
          </div>
        </div>

        {/* Slides */}
        <div className="relative h-[520px] flex items-center">
          {slides.map((slide, index) => {
            let position = index - activeIndex;
            if (position < -1) position += slides.length;
            if (position > 1) position -= slides.length;

            const isCenter = position === 0;
            const transform = isCenter
              ? "translateX(0) scale(1)"
              : `translateX(${position * 60}%) scale(0.85)`;

            const opacity = isCenter ? 1 : 0.7;
            const zIndex = isCenter ? 30 : 10;
            const height = isCenter ? "500px" : "490px";

            return (
              <div
                key={index}
                className="absolute left-1/2 w-full max-w-md transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(-50%) ${transform}`,
                  zIndex,
                  opacity,
                  height,
                  marginTop: isCenter ? "0" : "0px",
                }}
              >
                <div className="relative h-full w-full">
                  {/* Background glow behind center card */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-[#7AE8FF] rounded-3xl blur-2xl opacity-25 z-0" />
                  )}

                  <div
                    className="relative rounded-3xl px-6 py-1 h-full flex flex-col backdrop-blur-lg z-10"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      overflow: isCenter ? "hidden" : "auto",
                    }}
                  >
                    {/* Decorative Dots */}
                    {isCenter && (
                      <>
                        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-white" />
                        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white" />
                        <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-white" />
                        <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-white" />
                      </>
                    )}

                    {/* Icon */}
                    {isCenter && (
                      <div className="absolute mt-4 left-1/2 transform -translate-x-1/2">
                        <LayoutGrid size={40} className="text-white mb-3" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="text-center mb-6 mt-15">
                      <h3
                        className={`font-semibold ${
                          isCenter ? "text-xl" : "text-lg"
                        }`}
                      >
                        {slide.title}
                      </h3>
                      <p
                        className={`text-gray-300 ${
                          isCenter ? "text-sm" : "text-xs"
                        }`}
                      >
                        {slide.subtitle}
                      </p>
                    </div>

                    <div className="flex-1 space-y-3 pr-1">
                      {slide.features.map((feature, idx) => (
                        <div key={idx}>
                          <h4
                            className={`font-bold ${
                              isCenter ? "text-sm" : "text-xs"
                            } text-blue-300`}
                          >
                            • {feature.title}
                          </h4>
                          <p
                            className={`mt-1 ${
                              isCenter ? "text-xs" : "text-xxs"
                            } text-gray-300`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="text-right mr-2">
                      <button className="underline text-white hover:text-blue-200 text-sm transition">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-10 space-x-8">
          <button
            className="bg-gray-700/60 rounded-full p-3 hover:bg-gray-600 transition"
            onClick={handlePrevious}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="bg-gray-700/60 rounded-full p-3 hover:bg-gray-600 transition"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
