import React from "react";
import Link from "next/link";

export default function ServicesGetStartedButton() {
  return (
    <>
      {/* heading + underline */}
      <div className="inline-block font-montserrat">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-1">
          Get Started
        </h2>
        <div className="h-[3px] w-full bg-white rounded-full" />
      </div>


      {/* button */}
      <Link
        href="/service-page"
        className="inline-block bg-[#C93C3C] hover:bg-[#b53535] transition-colors
                   text-white font-medium py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10
                   rounded-lg"
      >
      </Link>
    </>
  );
}
