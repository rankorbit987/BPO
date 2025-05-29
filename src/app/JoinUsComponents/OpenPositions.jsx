"use client";

import Link from "next/link";

const colors = {
  primary: "#C93C3C",
  secondary: "#1E293B",
  accent: "#E74C3C",
  lightBg: "#FFF5F5",
  lightText: "#FFFFFF",
};

export default function OpenPositions() {
  const jobs = [
    {
      id: 1,
      title: "Customer Support Executive",
      location: "Remote - Night Shift",
      type: "Full Time",
      description: "Join our customer support team to help clients with their queries and issues. Night shift position with flexible hours.",
      responsibilities: [
        "Respond to customer inquiries via email, chat, and phone",
        "Troubleshoot basic technical issues",
        "Document customer interactions",
        "Escalate complex issues to appropriate teams"
      ],
      requirements: [
        "Excellent communication skills",
        "1+ years of customer service experience",
        "Ability to work night shifts",
        "Basic technical knowledge"
      ]
    },
    {
      id: 2,
      title: "Technical Support Agent",
      location: "On-Site - Pune",
      type: "Full Time",
      description: "Provide technical support for our products and services. On-site position in our Pune office.",
      responsibilities: [
        "Diagnose and troubleshoot technical issues",
        "Guide users through solutions",
        "Maintain detailed documentation",
        "Collaborate with engineering teams"
      ],
      requirements: [
        "2+ years of technical support experience",
        "Strong problem-solving skills",
        "Knowledge of networking basics",
        "Experience with support ticketing systems"
      ]
    },
    {
      id: 3,
      title: "Data Entry Specialist",
      location: "Remote",
      type: "Part Time",
      description: "Accurate and efficient data entry specialist needed for remote part-time work.",
      responsibilities: [
        "Enter data from various sources into our systems",
        "Verify data accuracy",
        "Maintain data confidentiality",
        "Generate reports as needed"
      ],
      requirements: [
        "Fast typing speed with high accuracy",
        "Attention to detail",
        "Basic Excel knowledge",
        "Reliable internet connection"
      ]
    },
  ];

  return (
    <section className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-10 2xl:mx-12 py-20" 
    id="open-positions">
      <div className="mb-12">
        <h2 className="text-2xl md:3xl lg:text-4xl font-bold" style={{ color: colors.primary }}>
          Open Positions
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden px-6 pt-10 pb-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-xl"
            style={{ backgroundColor: colors.secondary }}
          >
            <span
              className="absolute top-10 left-1/2 -translate-x-1/2 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10]"
              style={{ backgroundColor: colors.primary }}
            ></span>

            <div
              className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto rounded-full transition-all duration-300 group-hover:brightness-110"
              style={{ backgroundColor: colors.primary }}
            >
              <span className="text-white text-xl font-bold">
                {job.title.split(" ")[0][0]}
              </span>
            </div>

            <div className="relative z-10 pt-6 space-y-2 text-center">
              <h3
                className="text-xl font-semibold transition"
                style={{ color: colors.lightText }}
              >
                {job.title}
              </h3>
              <p className="text-sm" style={{ color: "#e0e0e0" }}>
                📍 {job.location}
              </p>
              <p className="text-sm" style={{ color: "#ccc" }}>
                🕒 {job.type}
              </p>

              <Link
                href={`/careers/${job.id}`}
                className="inline-block mt-4 px-5 py-2 font-semibold rounded-full transition cursor-pointer"
                style={{
                  backgroundColor: colors.accent,
                  color: "white",
                }}
              >
                Apply Now
              </Link>
            </div>

            <div
              className="absolute inset-0 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #C93C3C, #2C3E50)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}