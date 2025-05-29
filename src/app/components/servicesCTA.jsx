'use client'
import React from 'react'
import Link from 'next/link'

const ServicesCTA = () => {
  return (
    <div className="w-full flex justify-center my-15">
      <Link
          href="/service-page"
          className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#C93C3C] shadow-md group font-semibold transition-transform duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-[#C93C3C] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0 rounded-full"></span>
          <span className="relative z-10 transition-colors duration-200 group-hover:text-white whitespace-nowrap">
            Explore All Services
          </span>
        </Link>
    </div>
  )
}

export default ServicesCTA
