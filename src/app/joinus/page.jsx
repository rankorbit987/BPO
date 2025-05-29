"use client";

import React from "react";

import WhyJoinUs from "../JoinUsComponents/WhyJoinUs";
import CompanyCulture from "../JoinUsComponents/CompanyCulture";
import OpenPositions from "../JoinUsComponents/OpenPositions";
import LifeAtCompany from "../JoinUsComponents/LifeAtCompany";
import JoinUsFinalCTA from "../JoinUsComponents/JoinUsFinalCTA";
import ContactForm from "../components/contact-form/contactform";

const JoinUs = () => {
  // Color scheme
  const colors = {
    primary: "#C93C3C",
    secondary: "#2C3E50",
    accent: "#E74C3C",
    lightBg: "#F5F7FA",
    darkText: "#333333",
    lightText: "#FFFFFF",
  };

  return (
    <>
      <div
        className="relative py-24 px-4 sm:px-6 lg:px-8 mx-auto text-center text-white "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

        {/* Text content */}
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c93c3c]">
            Join Our Growing Global Team
            <span className="text-white">.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl mx-auto max-w-2xl">
            We’re not just offering jobs – we’re building careers with purpose.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("open-positions")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#c93c3c] transition cursor-pointer"
            >
              View Open Positions
            </button>
          </div>
        </div>
      </div>

      <WhyJoinUs />
      <CompanyCulture />
      <OpenPositions />
      <LifeAtCompany />
      <ContactForm />
    </>
  );
};

export default JoinUs;
