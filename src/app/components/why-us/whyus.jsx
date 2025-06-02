'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Proven Expertise',
    description:
      'With years of experience, our team consistently delivers high-quality results tailored to your unique business goals.',
  },
  {
    title: 'Cost-Efficient Solutions',
    description:
      'We help you reduce operational costs while enhancing customer satisfaction through smarter outsourcing.',
  },
  {
    title: '24/7 Multilingual Support',
    description:
      'Our team is available around the clock, supporting your clients in multiple languages and time zones.',
  },
  {
    title: 'Scalable & Flexible Services',
    description:
      'From startups to enterprises, our services adapt to your evolving needs and growth.',
  },
  {
    title: 'Tech-Enabled Operations',
    description:
      'We use the latest tools and CRMs to ensure seamless workflow integration and real-time insights.',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We personalize every solution to align with your goals—your success is our mission.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCards(reasons.length); // Show all cards at once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#C93C3C] mb-12">
          Why Choose Us<span className="text-white">?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-[#1E293B]/80 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-[#C93C3C]/30 transition-all duration-300 transform
                ${
                  index < visibleCards
                    ? 'animate-fade-in-up'
                    : 'opacity-0 translate-y-8'
                }`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#1E293B] rounded-full border border-[#C93C3C]/30">
                  <CheckCircle className="w-6 h-6 text-[#C93C3C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {reason.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
