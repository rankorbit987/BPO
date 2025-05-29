"use client";
import ServicesGetStartedButton from "@/app/components/Buttons/getStarted";
import ContactForm from "@/app/components/contact-form/contactform";
import ServicesCTA from "@/app/components/servicesCTA";
import ServicesTestimonials from "@/app/components/serviceTestamioal";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ServicesCTASection from "@/app/components/servicCTA/cta";
import OurServices from "@/app/components/our-services/ourservices";

export default function CSR() {
  const colors = {
    primary: "#C93C3C",
    secondary: "#2C3E50",
    accent: "#E74C3C",
    darkBg: "#1A202C",
    darkerBg: "#121826",
    darkText: "#E2E8F0",
    lightText: "#FFFFFF",
    white: "#fff3ff",
  };

  // Refs for in-view animation
  const overviewRef = useRef(null);
  const whyChooseRef = useRef(null);
  const testimonialRef = useRef(null);

  const isOverviewInView = useInView(overviewRef, {
    once: true,
    margin: "-100px",
  });
  const isWhyChooseInView = useInView(whyChooseRef, {
    once: true,
    margin: "-100px",
  });
  const isTestimonialInView = useInView(testimonialRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="font-montserrat" style={{ margin: 0, padding: 0 }}>
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative overflow-hidden py-20 md:py-28 lg:py-32 w-full"
        style={{
          background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
          marginTop: 0,
        }}
      >
        <div className="absolute top-5 left-8 w-full h-full opacity-10">
          <div
            className="absolute w-40 h-40 rounded-4xl"
            style={{ backgroundColor: colors.lightText }}
          />
          <div
            className="absolute bottom-10 right-10 w-60 h-60 rounded-4xl"
            style={{ backgroundColor: colors.lightText }}
          />
        </div>

        <div className="relative z-10 px-4 text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Customer Service{" "}
            <span style={{ color: colors.accent }}>Representative</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Providing reliable, personalized support that strengthens every
            customer relationship.
          </p>
          <div className="animate-bounce mt-8">
            <svg
              className="w-8 h-8 mx-auto text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div>
        {/* ===== OVERVIEW SECTION ===== */}
        <motion.div
          ref={overviewRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-10 md:py-10 lg:py-12 max-w-7xl mx-auto lg:px-10 px-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="mb-8">
                <span
                  className="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4"
                  style={{
                    backgroundColor: `${colors.primary}20`,
                    color: colors.primary,
                  }}
                >
                  Our Approach
                </span>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: colors.lightText }}
                >
                  Personalized Customer Service{" "}
                  <span style={{ color: colors.primary }}>Representative</span>
                </h2>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: colors.darkText }}
                >
                  Every brand needs a calm voice to guide clients. Our customer
                  service team gives real help, not just words. We solve
                  problems fast and speak with care. Clients feel heard, and
                  your brand stays strong. We do more than talk. We listen and
                  act with heart. Our team is trained to give real help that
                  makes each call better. From billing to support, we handle
                  each task with ease. Our voice becomes your brand voice. Each
                  talk builds trust. Your clients get help that feels real. You
                  stay focused on your work while we speak for you. We make
                  every word count.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src="/servicesImages/customersuppport.png"
                    alt="Call center support team"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500"
                  style={{ backgroundColor: `${colors.primary}90` }}
                >
                  <span className="text-white text-xl font-bold">
                    Dedicated Support Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== WHY CHOOSE US SECTION ===== */}
        <motion.div
          ref={whyChooseRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="py-10 md:py-10 lg:py-12 max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <span
              className="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4"
              style={{
                backgroundColor: `${colors.primary}20`,
                color: colors.primary,
              }}
            >
              Our Advantages
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.lightText }}
            >
              Why Choose{" "}
              <span style={{ color: colors.primary }}>Our Support</span>
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: colors.darkText }}
            >
              We provide comprehensive support solutions tailored to your
              business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-10">
            {[
              {
                title: "Fast Problem Solving",
                body: "We fix issues in the first call. No delay or stress for your clients.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                ),
              },
              {
                title: "Real Time Support",
                body: "We stay active and ready all day. Clients always find help when they need it.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                ),
              },
              {
                title: "Kind and Clear Voice",
                body: "We use kind words and short lines. Clients feel calm and heard.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                ),
              },
            ].map(({ title, body, icon }, index) => (
              <div
                key={index}
                className="bg-[#1e293c] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-6 flex flex-col h-full">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                    style={{
                      backgroundColor: `${colors.primary}20`,
                      color: colors.primary,
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: colors.lightText }}
                  >
                    {title}
                  </h3>
                  <p className="flex-grow" style={{ color: colors.darkText }}>
                    {body}
                  </p>
                  <div className="mt-4">
                    <div
                      className="w-10 h-1 rounded-full"
                      style={{ backgroundColor: colors.primary }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <OurServices/>

        {/* ===== TESTIMONIALS ===== */}
        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTestimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="py-10 md:py-10 lg:py-12 max-w-7xl mx-auto"
        >
          <ServicesTestimonials />
        </motion.div>
      </div>

      {/* ===== CTA + CONTACT ===== */}
      <ServicesCTASection colors={colors} />
     
      <ContactForm />
    </div>
  );
}
