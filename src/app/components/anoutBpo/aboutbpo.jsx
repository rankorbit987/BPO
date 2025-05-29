'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutBpo = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    const textObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTextVisible(true);
        textObserver.unobserve(entry.target);
      }
    }, options);

    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImageVisible(true);
        imageObserver.unobserve(entry.target);
      }
    }, options);

    if (textRef.current) textObserver.observe(textRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="w-full py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: Text Content */}
        <div
          ref={textRef}
          className={`w-full md:w-1/2 transition-opacity transition-transform duration-700 ease-out ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#c93c3c] mb-6">
            Empowering Growth Where People, Process, and Technology Unite
          </h1>
          <p className="text-base md:text-lg text-gray-300 text-justify leading-relaxed">
            At BPO Brigade, we are more than just a service provider—we are
            your strategic partner in scaling operations, enhancing customer
            experiences, and driving digital transformation. With a strong
            foundation in Customer Support, Digital Marketing, and
            Administrative Services, we deliver end-to-end outsourcing
            solutions tailored to your business needs.
          </p>
        </div>

        {/* Right: Image */}
        <div
          ref={imageRef}
          className={`w-full md:w-1/2 transition-transform duration-700 ease-out ${
            imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about2.jpg"
              alt="Professional team working together"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBpo;
