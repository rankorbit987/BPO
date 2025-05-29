

"use client";
import Image from "next/image";
import React from "react";

export default function CustomerInsghts() {
  return (
    <section
      className="
        font-montserrat
        mx-auto 
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10
        
      "
    >
      {/* headline in full‑width blue bar */}
      {/* ===== FULL‑WIDTH HEADLINE + SUPPORTING TEXT ===== */}
      <div className="-mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16 xl:-mx-20 bg-[#134386] py-25">
        {/* headline */}
        <h1
          className="
    text-[#C93C3C] text-center
    text-2xl sm:text-2xl md:text-4xl lg:text-4xl
    font-extrabold
    sm:pt-8
  "
        >
          Customer Insights & Feedback
          <span className="text-white">.</span>
        </h1>

        {/* supporting text */}
        <p
          className="
      text-white text-center
      text-sm sm:text-base md:text-lg lg:text-lg
      font-medium
       sm:pb-8
      max-w-4xl mx-auto px-4 pt-5
      
    "
        >
          Enhancing Customer Connections, Driving Business Growth!
        </p>
      </div>

      {/* ───────── OVERVIEW ───────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-16 lg:mb-20 mt-10">
        {/* Text Column (8/12 on lg+, full width on mobile) */}
        <div className="lg:col-span-8 order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#134386] mb-4">
            Overview
          </h2>
          <p className="text-justify text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-gray-800">
          Your team works best when tools work right. Our CRM support team helps keep things on track. We manage data, solve issues, and train your staff with care. From setup to daily use, we handle it all. Each update is clean and quick. You stay focused while we manage the flow. We help your team get the most from each tool. No task is too small. Each step gets full care. With us, your CRM runs smoothly and stays clear. You get the help you need, right when you need it.
          </p>
        </div>

        {/* Image Column (4/12 on lg+, full width on mobile) */}
        <div className="lg:col-span-4 order-2 relative">
          <div className="w-full lg:h-[250px] sm:h-[200px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Make sure to import Image from 'next/image' at the top of your file */}
            <Image
              src="/images/card-img.jpg" // Update with your actual image path
              alt="Call center support team"
              className=" object-contain"
              width={400} // Set appropriate width
              height={300} // Set appropriate height
              priority={false} // Set to true if this is above the fold
            />
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="h-1 w-20 sm:w-28 md:w-36 lg:w-48 bg-[#C93C3C] mb-8 rounded-full" />

      {/* why choose us */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#134386] mb-6">
        Why&nbsp;Choose&nbsp;Us
      </h2>

      <ul className="space-y-6">
        {[
          {
            title: "Quick Issue Fixes",
            body: "We solve tech issues fast. No long hold or long wait.",
          },
          {
            title: "User Help and Tips",
            body: "We guide your staff on the best use. Less stress, more ease.",
          },
          {
            title: "Data Clean Up",
            body: "We sort out old data and keep your records in shape.",
          },
        ].map(({ title, body }) => (
          <li
            key={title}
            className="
              bg-[#E05A5A]/10 border-l-4 border-[#C93C3C]
              rounded-md p-4 sm:p-5 md:p-6 shadow-sm
            "
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-[#C93C3C] mb-1">
              {title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 text-justify">
              {body}
            </p>
          </li>
        ))}
      </ul>

      {/* CTA STRIP */}
      
    </section>
  );
}
