'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Smile, CheckCircle, Users } from 'lucide-react';
import { useRef, useEffect } from 'react';

const stats = [
  {
    number: 1100,
    label: "Happy Clients",
    icon: <Smile className="w-10 h-10 text-[#C93C3C]" />,
  },
  {
    number: 1500,
    label: "Projects Completed",
    icon: <CheckCircle className="w-10 h-10 text-[#C93C3C]" />,
  },
  {
    number: 100,
    label: "Team Members",
    icon: <Users className="w-10 h-10 text-[#C93C3C]" />,
  },
];

export default function ClientsCount() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold for earlier trigger
  });

  // For smooth restart when component mounts again
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView) {
      hasAnimated.current = true;
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full py-16 px-4 sm:px-6 lg:px-12 xl:px-20 "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center transform transition-all duration-500 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="mb-4 p-4 bg-[#1E293B] rounded-full border border-[#C93C3C]/30 shadow-md transform transition-all duration-500 hover:scale-110">
                {stat.icon}
              </div>
              <p className="text-4xl sm:text-5xl font-extrabold text-[#C93C3C]">
                {(inView || hasAnimated.current) ? (
                  <CountUp 
                    end={stat.number} 
                    duration={1.5} // Faster duration
                    separator=","
                    delay={0.1}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={index * 100} // Staggered delay
                  />
                ) : (
                  "0"
                )}
                <span className="text-[#C93C3C]">+</span>
              </p>
              <p className="text-lg sm:text-xl text-white mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}