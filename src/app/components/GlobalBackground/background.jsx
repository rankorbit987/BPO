'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GlobalBackground = () => {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 5
  }));

  return (
    <div className="fixed inset-0 overflow-hidden z-[-10] pointer-events-none">
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 75% 50%, rgba(201, 60, 60, 0.2), transparent 50%), 
                      linear-gradient(135deg, #2C3E50 0%, #0f172a 100%)`,
        }}
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#C93C3C] opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{
            opacity: 0.1,
            x: 0,
            y: 0
          }}
          animate={{
            x: (Math.random() - 0.5) * 30,
            y: (Math.random() - 0.5) * 30,
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid Overlay */}
<motion.div 
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: 'linear-gradient(to right, rgba(201, 60, 60, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(201, 60, 60, 0.1) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  }}
  initial={{ backgroundPosition: '0 0' }}
  animate={{ backgroundPosition: '40px 40px' }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: "linear"
  }}
/>

    </div>
  );
};

export default GlobalBackground;
