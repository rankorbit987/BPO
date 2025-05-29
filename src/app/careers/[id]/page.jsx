"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const colors = {
  primary: "#C93C3C",
  secondary: "#1E293B",
  accent: "#E74C3C",
  lightBg: "#FFF5F5",
  lightText: "#FFFFFF",
};

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

export default function JobDetails({ params }) {
  const router = useRouter();
  const jobId = parseInt(params.id);
  const job = jobs.find(job => job.id === jobId);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Job not found</h1>
          <button 
            onClick={() => router.push('/careers')}
            className="px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: colors.primary }}
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-30 px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto text-white">
      <button 
        onClick={() => router.back()}
        className="mb-8 flex items-center text-sm font-medium text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to all positions
      </button>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>{job.title}</h1>
          <div className="flex items-center space-x-4 mb-6 text-white">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {job.location}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {job.type}
            </span>
          </div>

          <div className="mb-8 text-white">
            <h2 className="text-xl font-semibold mb-3">Job Description</h2>
            <p className="mb-4">{job.description}</p>
            
            <h3 className="text-lg font-semibold mb-2 mt-6">Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-2">Requirements</h3>
            <ul className="list-disc pl-5 space-y-2">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md sticky top-6 text-white">
            {submitSuccess ? (
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
                <p className="mb-4">Thank you for applying to {job.title}. We'll review your application and get back to you soon.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  Apply for another position
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>Apply for this position</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium mb-1">Resume/CV*</label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-500 file:text-white hover:file:bg-red-600"
                      />
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                    
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium mb-1">Cover Letter</label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        rows="4"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2 px-4 rounded-md text-white font-medium transition"
                      style={{
                        backgroundColor: isSubmitting ? '#a83232' : colors.primary,
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}