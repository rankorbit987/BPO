"use client";
import React from "react";
import Image from "next/image";
import AboutImage from "../../../public/images/aboutImage.jpeg";

import { Section } from "lucide-react";
import AboutSupportColumns from "../components/about-support/about-support";
import CeoMessage from "../components/ceo-message/ceomessage";
import Testimonials from "../components/testimonials/testminials";
import ContactForm from "../components/contact-form/contactform";
import GlobalBackground from "../components/GlobalBackground/background";
import ClientsCount from "../components/happy-clients/happyclients";
import AboutBpo from "../components/anoutBpo/aboutbpo";

const AboutUs = () => {
  // Color scheme
  const colors = {
    primary: '#C93C3C',
    secondary: '#2C3E50',
    accent: '#E74C3C',
    lightBg: '#F5F7FA',
    darkText: '#333333',
    lightText: '#FFFFFF'
  };

  
  // Unsplash image URL (professional business/tech theme)
  const unsplashImageUrl = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <>
      <div>
        <GlobalBackground/>
        <div className="font-montserrat mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
          {/* Hero Section with Background Image */}
          <div className="relative -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-10 xl:-mx-10 py-20 overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={unsplashImageUrl}
                alt="Business team working together"
                fill
                className="object-cover"
                quality={100}
                priority
                unoptimized // Remove this if you want Next.js to optimize the external image
              />
              <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay */}
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center mt-5">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#9c3c3c]">
                About Us
                <span className="text-white">.</span>
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
                Discover the people and passion behind our success
              </p>
            </div>
          </div>
          <AboutBpo/>
          <ClientsCount/>
        </div>

        <CeoMessage />
        <AboutSupportColumns />
        <Testimonials/>
        <div className="mt-10">
          <ContactForm/>
        </div>
      </div>
    </>
  );
};

export default AboutUs;