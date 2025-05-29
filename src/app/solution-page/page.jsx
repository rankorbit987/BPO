'use client';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import ContactForm from '../components/contact-form/contactform';

// Color scheme
const colors = {
  primary: '#C93C3C',
  secondary: '#2C3E50',
  accent: '#E74C3C',
  lightBg: '#F5F7FA',
  darkText: '#333333',
  lightText: '#FFFFFF'
};

/* ---------- STATIC DATA ---------- */
const solutions = {
  'Business Process Automation': {
    path: 'business-process-automation',
    items: [
      'Workflow Automation (Zapier, Monday.com, Power Automate)',
      'Task Management & Orchestration'
    ]
  },
  'AI & Machine Learning': {
    path: 'ai-and-machine-learning',
    items: [
      'Chatbots & Intelligent Ticket Routing',
      'Predictive Analytics'
    ]
  },
  'Communication & Collaboration Tools': {
    path: 'communication-&-collaboration-tools',
    items: [
      'Microsoft Teams',
      'Slack',
      'Zoom'
    ]
  },
  'Data & Business Intelligence': {
    path: 'data-business-intelligence',
    items: [
      'Power BI',
      'Looker Studio',
      'Tableau'
    ]
  },
  'CRM & Marketing Automation': {
    path: 'crm-marketing-automation',
    items: [
      'Salesforce',
      'HubSpot'
    ]
  },
  'Cloud & Infrastructure': {
    path: 'cloud-infrastructure',
    items: [
      'Amazon Web Services (AWS)',
      'Kubernetes',
      'GitHub (CI/CD, Private Repos)'
    ]
  },
  'Security & Compliance': {
    path: 'security-compliance',
    items: [
      'ISO 27001 Compliance',
      'Process Street',
      'Qualio'
    ]
  },
  'Customer Insights & Feedback': {
    path: 'customer-insights-feedback',
    items: [
      'Typeform',
      'SurveyMonkey'
    ]
  }
};

const iconList = ['Briefcase', 'Cpu', 'MessagesSquare', 'Database', 'Contact', 'Cloud', 'Shield', 'Users'];

export default function SolutionsPage() {
  return (
    <div>
      {/* 🖼️ Top Hero Section with Background Image - Matches Services page */}
      <div
        className="relative py-24 px-4 sm:px-6 lg:px-8 mx-auto text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

        {/* Text content - Matches Services page style */}
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c93c3c]">
            Solutions<span className='text-white'>.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl mx-auto max-w-2xl">
            Transform your business with our cutting-edge technology solutions and automation services
          </p>
        </div>
      </div>

      {/* Solutions Cards Section */}
      <div className="container mx-auto px-6 md:px-10 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(solutions).map(([category, data], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const { path, items } = data;

            return (
              <div
                key={category}
                className="relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Card Container with space for icon */}
                <div className="h-full pt-8">
                  {/* Floating Icon - Half inside, half outside the card */}
                  <div className="absolute -top-0 left-8 z-10">
                    <div 
                      className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg border-4 border-[#C93C3C] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <Icon size={28} strokeWidth={1.5} className="text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div 
                    className="h-full p-8 rounded-xl shadow-md bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
                    style={{ 
                      borderTop: `4px solid ${colors.primary}`,
                    }}
                  >
                    {/* Category Title with padding to align with icon */}
                    <h2 
                      className="text-xl font-bold mb-6 mt-4"
                    >
                      {category}
                    </h2>

                    {/* Solution Items List */}
                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={item}>
                          <Link
                            href={`/solutions/${path}/${i}`}
                            className="flex items-center gap-2 font-medium hover:underline"
                          >
                            <Icons.ArrowRight
                              size={16} className='text-[#9C3C3C]'
                            />
                            <span className="text-sm md:text-base">{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm/>
    </div>
  );
}