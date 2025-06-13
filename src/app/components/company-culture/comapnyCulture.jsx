"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { throttle } from "lodash";

export default function CompanyTimeline() {
  const containerRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const timelineContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Video handling with intersection observer
  const videoRefs = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.3, triggerOnce: true });

  // Memoized color calculation
  const timelineColor = useMemo(() => {
    if (scrollProgress < 0.5) {
      const ratio = scrollProgress * 2;
      const r = Math.floor(127 + (254 - 127) * ratio);
      const g = Math.floor(29 + (202 - 29) * ratio);
      const b = Math.floor(29 + (202 - 29) * ratio);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      const ratio = (scrollProgress - 0.5) * 2;
      const r = Math.floor(254 - (254 - 30) * ratio);
      const g = Math.floor(202 - (202 - 58) * ratio);
      const b = Math.floor(202 - (202 - 138) * ratio);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }, [scrollProgress]);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const containerTop = containerRect.top + scrollTop;
      const containerBottom = containerRect.bottom + scrollTop;
      
      const currentPosition = scrollTop - containerTop;
      const totalHeight = containerBottom - containerTop;
      const progress = Math.min(Math.max(currentPosition / totalHeight, 0), 1);
      
      setScrollProgress(progress);
    }
  }, []);

  // Calculate layout once and on resize (debounced)
  const calculateHeight = useCallback(() => {
    if (timelineContainerRef.current) {
      const firstSection = document.querySelector("#section-1");
      const lastSection = document.querySelector("#section-4");

      if (firstSection && lastSection) {
        const firstSectionTop = firstSection.getBoundingClientRect().top + window.scrollY;
        const lastSectionBottom = lastSection.getBoundingClientRect().bottom + window.scrollY;
        setTimelineHeight(lastSectionBottom - firstSectionTop);
      }
    }
  }, []);

  // Video controls
  const toggleMute = useCallback((index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
    }
  }, []);

  // Set up observers and event listeners
  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    const throttledResize = throttle(() => {
      calculateHeight();
    }, 200);

    // Initial calculation
    calculateHeight();
    
    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", throttledResize);

    // Video intersection observer
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setActiveVideoIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach(video => {
      if (video) videoObserver.observe(video);
    });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", throttledResize);
      videoObserver.disconnect();
    };
  }, [handleScroll, calculateHeight]);

  return (
    <div
      ref={containerRef}
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative font-montserrat overflow-hidden"
      id="company-culture"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-500 ease-out ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Life at <span className="text-[#c93c3c]">BPO Brigade</span> 
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Discover what makes our workplace unique and vibrant
          </p>
        </div>

        {/* Timeline container */}
        <div ref={timelineContainerRef} className="relative">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-[calc(25%+8px)] w-1 hidden lg:block"
            style={{
              height: `${timelineHeight}px`,
              top: 0,
              marginLeft: "-0.5px",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(to bottom, #7F1D1D, #FECACA, #1E3A8A)`,
                transform: `scaleY(${scrollProgress})`,
                transformOrigin: "top",
              }}
            />
          </div>

          {/* Tours Section */}
          <div
            id="section-1"
            ref={ref1}
            className="relative mb-16 sm:mb-20 lg:mb-28"
          >
            <div className={`timeline-dot hidden lg:block absolute left-[calc(25%+8px)] transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10 transition-all duration-300 ${inView1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ backgroundColor: timelineColor }}
            ></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <div className={`transition-all duration-500 ease-out ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">
                    Tours
                  </h3>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-1"></div>

              <div className="lg:col-span-8 mt-8 lg:mt-0">
                <div className={`transition-all duration-500 ease-out delay-100 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/TourImages/IMG_4989.jpg"
                        alt="Team playing table tennis"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        priority={true}
                      />
                    </div>
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-white/10">
                      {activeVideoIndex === 0 && (
                        <video
                          ref={el => videoRefs.current[0] = el}
                          src="/TourImages/tour.mp4"
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                      <button
                        onClick={() => toggleMute(0)}
                        className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded hover:bg-black/70 transition"
                      >
                        {videoRefs.current[0]?.muted ? "Unmute" : "Mute"}
                      </button>
                    </div>

                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-white/10">
                      {activeVideoIndex === 1 && (
                        <video
                          ref={el => videoRefs.current[1] = el}
                          src="/TourImages/tour2.mp4"
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                      <button
                        onClick={() => toggleMute(1)}
                        className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded hover:bg-black/70 transition"
                      >
                        {videoRefs.current[1]?.muted ? "Unmute" : "Mute"}
                      </button>
                    </div>
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/TourImages/IMG_5264.jpg"
                        alt="Team playing table tennis"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 14 August Celebrations Section */}
          <div
            id="section-2"
            ref={ref2}
            className="relative mb-16 sm:mb-20 lg:mb-28"
          >
            <div className={`timeline-dot hidden lg:block absolute left-[calc(25%+8px)] transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10 transition-all duration-300 ${inView2 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ backgroundColor: timelineColor }}
            ></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <div className={`transition-all duration-500 ease-out ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">
                    Independance Day Celebrations
                  </h3>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-1"></div>

              <div className="lg:col-span-8 mt-8 lg:mt-0">
                <div className={`transition-all duration-500 ease-out delay-100 ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="relative h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/14August/IMG_0416.jpg"
                        alt="Modern office"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      />
                    </div>
                    <div className="relative h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/14August/IMG_0425.jpg"
                        alt="Office workspace"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      />
                    </div>
                    <div className="relative h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/14August/IMG_0431.jpg"
                        alt="Recreation area"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sports Section */}
          <div
            id="section-3"
            ref={ref3}
            className="relative mb-16 sm:mb-20 lg:mb-28"
          >
            <div className={`timeline-dot hidden lg:block absolute left-[calc(25%+8px)] transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10 transition-all duration-300 ${inView3 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ backgroundColor: timelineColor }}
            ></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <div className={`transition-all duration-500 ease-out ${inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">
                    Sports
                  </h3>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-1"></div>

              <div className="lg:col-span-8 mt-8 lg:mt-0">
                <div className={`transition-all duration-500 ease-out delay-100 ${inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-white/10">
                      {activeVideoIndex === 2 && (
                        <video
                          ref={el => videoRefs.current[2] = el}
                          src="/Cricket/cricket.mp4"
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                      <button
                        onClick={() => toggleMute(2)}
                        className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded hover:bg-black/70 transition"
                      >
                        {videoRefs.current[2]?.muted ? "Unmute" : "Mute"}
                      </button>
                    </div>

                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/Cricket/Manipulation1.jpg"
                        alt="Yoga class"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Events & Functions Section */}
          <div id="section-4" ref={ref4} className="relative">
            <div className={`timeline-dot hidden lg:block absolute left-[calc(25%+8px)] transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10 transition-all duration-300 ${inView4 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ backgroundColor: timelineColor }}
            ></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <div className={`transition-all duration-500 ease-out ${inView4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">
                    Events & Functions
                  </h3>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-1"></div>

              <div className="lg:col-span-8 mt-8 lg:mt-0">
                <div className={`transition-all duration-500 ease-out delay-100 ${inView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 relative h-40 sm:h-56 md:h-100 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/events/event-main.jpg"
                        alt="Company party"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                      />
                    </div>

                    <div className="relative h-32 sm:h-40 md:h-60 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/events/event-awards.jpg"
                        alt="Award ceremony"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                      />
                    </div>
                    <div className="relative h-32 sm:h-40 md:h-60 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/events/event-concert.jpg"
                        alt="Concert event"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                      />
                    </div>

                    <div className="col-span-2 relative h-40 sm:h-56 md:h-100 rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/events/event-team.jpg"
                        alt="Team outing"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .timeline-dot {
          transition-property: transform, opacity, background-color;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}