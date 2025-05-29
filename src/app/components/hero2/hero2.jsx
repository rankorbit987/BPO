'use client';
import React, { useState, useEffect, useRef } from 'react';

const Hero2 = () => {
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [activeIndex, setActiveIndex] = useState(0);
  const prevScrollY = useRef(0);

  const cards = [
    {
      image: "/HeroImages/1.svg",
      bgGradient: "linear-gradient(135deg, #1e1e2f 0%, #2d2d44 100%)"
    },
    {
      image: "/HeroImages/2.svg",
      bgGradient: "linear-gradient(135deg, #1e1e2f 0%, #2d2d44 100%)"
    },
    {
      image: "/HeroImages/3.svg",
      bgGradient: "linear-gradient(135deg, #2e2e38 0%, #4b5563 100%)"
    },
    {
      image: "/HeroImages/4.svg",
      bgGradient: "linear-gradient(135deg, #2a2e35 0%, #384148 100%)"
    },
    {
      image: "/HeroImages/5.svg",
      bgGradient: "linear-gradient(135deg, #3b2f3b 0%, #4e4454 100%)"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY.current ? 'down' : 'up');
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollDirection === 'up') {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [scrollDirection]);

  const getCardStyle = (index) => {
    if (scrollDirection === 'down') {
      const row = Math.floor(index / 3);
      const col = index % 3;
      return {
        transform: `translate(${(col - 1) * 800}px, ${row * 200}px) rotate(${(index % 2 === 0 ? -1 : 1) * 20}deg) scale(0.8)`,
        opacity: 0,
        zIndex: 0,
        transition: 'all 0.9s ease-in'
      };
    } else {
      const offset = (index - activeIndex + cards.length) % cards.length;
      return {
        transform: `translateY(${offset * -30}px) scale(${1 - offset * 0.06})`,
        zIndex: cards.length - offset,
        opacity: offset > 2 ? 0 : 1,
        transition: 'all 0.9s ease-out'
      };
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center text-white font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-14"
    >
      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-12 xl:gap-16">
        {/* Hero Text - Now takes exactly half width on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-2 lg:px-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text dm-serif-display-regular text-white">
            Transform Your Business with Our <span className='text-[#c93c3c]'> Expert BPO Services</span>
          </h1>
          <p className="text-lg text-gray-200 font-medium mt-5 max-w-lg mx-auto lg:mx-0">
            Comprehensive digital solutions for modern business challenges.
          </p>
          <div className=" pointer-events-auto flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
            <button
  onClick={() => {
    const section = document.getElementById('services-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="cursor-pointer relative overflow-hidden rounded-3xl bg-[#c93c3c] text-white px-6 py-3 font-semibold group transition-transform duration-300 hover:scale-105 shadow-lg"
>
  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
  <span className="relative text-white group-hover:text-[#c93c3c] transition-colors duration-200 z-10">
    Explore Services
  </span>
</button>


            <button
              className="relative cursor-pointer overflow-hidden rounded-3xl bg-white text-neutral-900 px-6 py-3 font-semibold group transition-transform duration-300 hover:scale-105 shadow-lg"
              onClick={() => {
                const form = document.getElementById('contact-form');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="absolute inset-0 bg-[#C93C3C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
              <span className="relative text-[#C93C3C] group-hover:text-white transition-colors duration-200 z-10">
                Request Free Demo
              </span>
            </button>
          </div>
        </div>

        {/* Cards Container - Takes exactly half width on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-12">
          {/* Mobile Cards */}
          <div className="lg:hidden w-full max-w-md h-[350px] sm:h-[300px] relative">
            {cards.map((card, index) => (
              <div
                key={index}
                className="absolute w-full h-full rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-700"
                style={{
                  ...getCardStyle(index),
                  backgroundImage: card.bgGradient,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop Cards */}
          <div className="hidden lg:flex w-full max-w-lg h-[350px] relative">
            {cards.map((card, index) => (
              <div
                key={index}
                className="absolute w-full h-full rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-700"
                style={{
                  ...getCardStyle(index),
                  backgroundImage: card.bgGradient,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;