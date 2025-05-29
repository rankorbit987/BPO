import React from 'react'
import { BarChart, Lightbulb, Shield, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const supportItems = [
  {
    icon: <BarChart className="w-8 h-8 text-[#C93C3C]" />,
    title: "Data-Driven Decisions",
    description: "We turn complex problems into growth opportunities with strategic, data-backed solutions.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#C93C3C]" />,
    title: "Outsmarting Ideas",
    description: "Our diverse team works together to drive innovative solutions that fuel your business growth.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#C93C3C]" />,
    title: "Infallible Trust",
    description: "BPO Brigade ensures transparency and unwavering dedication to client satisfaction.",
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-[#C93C3C]" />,
    title: "24/7 Support",
    description: "We’re always here, ready to assist you with any challenges on the path to growth.",
  }
]

const AboutSupportColumns = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:px-10 px-4 py-20">
      {supportItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-center p-6 rounded-lg shadow-lg"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white p-4 rounded-full">
              {item.icon}
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#C93C3C]">
            {item.title}
          </h2>
          <p className="text-white">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default AboutSupportColumns
