'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const GlobalBackground = () => {
  // Memoize particles to prevent unnecessary recalculations
  const particles = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // Smaller particles
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 25, // Slower movement
      delay: Math.random() * 5,
      movement: (Math.random() - 0.5) * 15 // Reduced movement range
    }));
  }, []);

  // Static gradient background (removed animation)
  const gradientBackground = useMemo(() => (
    <div 
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at 75% 50%, rgba(201, 60, 60, 0.15), transparent 50%), 
                    linear-gradient(135deg, #2C3E50 0%, #0f172a 100%)`
      }}
    />
  ), []);

  return (
    <div 
      className="fixed inset-0 overflow-hidden z-[-10] pointer-events-none"
      style={{ willChange: 'transform, opacity' }} // Hint for browser optimization
    >
      {gradientBackground}

      {/* Optimized Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#C93C3C] opacity-20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0.1 }}
          animate={{
            x: particle.movement,
            y: particle.movement,
            opacity: [0.1, 0.15, 0.1] // More subtle opacity change
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "mirror", // Smoother reversal
            ease: "linear"
          }}
        />
      ))}

      {/* Static Grid Overlay (removed animation) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(201, 60, 60, 0.1) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(201, 60, 60, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default GlobalBackground;