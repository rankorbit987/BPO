import React from "react";
import Image from "next/image";

const CeoMessage = () => {
  return (
    <section className="font-montserrat bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/ceo-pic.jpg"
            alt="CEO"
            width={600}             // ✅ Reasonable width
            height={400}            // ✅ Required height
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#c93c3c] text-start">
            Message from the CEO
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed text-justify font-light">
            At BPO Brigade, our mission is to empower businesses by streamlining
            operations and driving efficiency. We deliver tailored solutions backed
            by advanced technology, expert teams, and a commitment to continuous
            improvement. From customer support to digital transformation, we handle
            the complexities—so you can focus on growth. With us, adaptability
            becomes your advantage.
          </p>
          <p className="mt-4 font-medium text-lg text-white">
            — Atif Iqbal, CEO, BPO Brigade
          </p>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
