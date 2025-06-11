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

/* ---------- STATIC DATA ---------- */
const solutions = {
  "Business Process Automation": {
    path: "business-process-automation",
    items: [
      "Workflow Automation (Zapier, Monday.com, Power Automate)",
      "Task Management & Orchestration",
    ],
  },
  "AI & Machine Learning": {
    path: "ai-and-machine-learning",
    items: ["Chatbots & Intelligent Ticket Routing", "Predictive Analytics"],
  },
  "Communication & Collaboration Tools": {
    path: "communication-&-collaboration-tools",
    items: ["Microsoft Teams", "Slack", "Zoom"],
  },
  "Data & Business Intelligence": {
    path: "data-business-intelligence",
    items: ["Power BI", "Looker Studio", "Tableau"],
  },
  "CRM & Marketing Automation": {
    path: "crm-marketing-automation",
    items: ["Salesforce", "HubSpot"],
  },
  "Cloud & Infrastructure": {
    path: "cloud-infrastructure",
    items: [
      "Amazon Web Services (AWS)",
      "Kubernetes",
      "GitHub (CI/CD, Private Repos)",
    ],
  },
  "Security & Compliance": {
    path: "security-compliance",
    items: ["ISO 27001 Compliance", "Process Street", "Qualio"],
  },
  "Customer Insights & Feedback": {
    path: "customer-insights-feedback",
    items: ["Typeform", "SurveyMonkey"],
  },
};

const iconList = [
  "Briefcase",
  "Cpu",
  "MessagesSquare",
  "Database",
  "Contact",
  "Cloud",
  "Shield",
  "Users",
];

export default function SolutionsPage() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    // Observe all cards
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Initial check for cards already in view
    const checkInitialVisibility = () => {
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible =
            rect.top <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0;
          if (isVisible) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        }
      });
    };

    // Run initial check after a small delay to ensure all elements are rendered
    const timer = setTimeout(checkInitialVisibility, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Initialize refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, Object.keys(solutions).length);
  }, []);

  return (
    <div ref={containerRef}>
      {/* 🖼️ Full Screen Hero Section */}
      <div
        className="relative h-screen w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

        {/* Text content */}
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#c93c3c] mb-6">
            Solutions<span className="text-white">.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            Transform your business with our cutting-edge technology solutions
            and automation services
          </p>
          
          {/* Optional CTA Button */}
          <div className="mt-10">
            <Link 
              href="#contact-form"
              className="inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                backgroundColor: colors.primary,
                color: colors.lightText,
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.accent}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Solutions Cards Section */}
      <div className="container mx-auto px-6 md:px-10 lg:px-10 py-16 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.lightText }}>
            Our Technology Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: colors.lightText }}>
            Comprehensive services designed to streamline your operations and drive innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(solutions).map(([category, data], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const { path, items } = data;

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
                <div
                  className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto rounded-full transition-all duration-300"
                  style={{ backgroundColor: colors.primary }}
                >
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: colors.secondary }}
                  />
                  <Icon className="text-white w-8 h-8 relative z-10" />
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
                          href={`/solutions/${path}/${i}`}
                          className="flex items-center gap-2 font-medium hover:underline [text-underline-position:under]"
                          style={{ textDecorationColor: colors.lightText }}
                        >
                          <Icons.ArrowRight
                            size={16}
                            className="transition-colors duration-300 text-[#C93C3C] group-hover:text-[#1E293B]"
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

      {/* Contact Form Section */}
      <div id="contact-form" className=" py-16">
        <div className="container mx-auto px-6">
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
}