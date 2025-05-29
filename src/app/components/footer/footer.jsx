import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../../../public/images/BPO-logo.svg';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    icon: <FaFacebookF size={18} />,
    href: 'https://www.facebook.com/bpobrigade',
    color: '#1877f2',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={18} />,
    href: 'https://x.com/bpo_brigade',
    color: '#1da1f2',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn size={18} />,
    href: 'https://www.linkedin.com/company/bpobrigade/',
    color: '#0a66c2',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={18} />,
    href: 'https://www.instagram.com/bpobrigade/',
    color: '#e1306c',
  },
  {
    name: 'TikTok',
    icon: <FaTiktok size={18} />,
    href: 'https://www.tiktok.com/@bpobrigade',
    color: '#000000',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube size={18} />,
    href: 'https://www.youtube.com/@BPOBrigade',
    color: '#ff0000',
  },
  {
    name: 'Pinterest',
    icon: <FaPinterestP size={18} />,
    href: 'https://www.pinterest.com/bpobrigade/',
    color: '#bd081c',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-16 pb-8 font-montserrat font-medium">
      {/* Top Grid */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-5">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-extrabold mb-4 text-[#C93C3C]">Quick&nbsp;Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-[#c93c3c]">Home</Link></li>
            <li><Link href="/aboutus" className="hover:text-[#c93c3c]">About&nbsp;Us</Link></li>
            <li><Link href="/joinus" className="hover:text-[#c93c3c]">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-[#c93c3c]">Blogs</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-extrabold mb-4 text-[#C93C3C]">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services/customer-support-services" className="hover:text-[#C93C3C]">Customer Support Services</Link></li>
            <li><Link href="/services/digital-marketing-services" className="hover:text-[#C93C3C]">Digital&nbsp;Marketing Services</Link></li>
            <li><Link href="/services/administrative-support" className="hover:text-[#C93C3C]">Administrative&nbsp;Support</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-extrabold mb-4 text-[#C93C3C]">Solutions</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/solutions/business-process-automation" className="hover:text-[#C93C3C]">Business Automation</Link></li>
            <li><Link href="/solutions/ai-and-machine-learning" className="hover:text-[#C93C3C]">AI &amp; ML</Link></li>
            <li><Link href="/solutions/communication-&-collaboration-tools" className="hover:text-[#C93C3C]">Communication & Collaboration Tools</Link></li>
            <li><Link href="/solutions/data-business-intelligence" className="hover:text-[#C93C3C]">Data Business Intelligence</Link></li>
            <li><Link href="/solutions/crm-marketing-automation" className="hover:text-[#C93C3C]">CRM Marketing Automation</Link></li>
            <li><Link href="/solutions/cloud-infrastructure" className="hover:text-[#C93C3C]">Cloud Infrastructure</Link></li>
            <li><Link href="/solutions/security-compliance" className="hover:text-[#C93C3C]">Security Compliance</Link></li>
            <li><Link href="/solutions/customer-insights-feedback" className="hover:text-[#C93C3C]">Customer Insights Feedback</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-extrabold mb-4 text-[#C93C3C]">Contact&nbsp;Us</h3>
          <p className="text-sm leading-relaxed mb-3">
            123 Business Park&nbsp;Ln<br />
            Suite&nbsp;100<br />
            Karachi, PK&nbsp;74200
          </p>
          <p className="text-sm"><span className="font-semibold">Phone:</span> +92&nbsp;300&nbsp;0000000</p>
          <p className="text-sm"><span className="font-semibold">Email:</span> info@example.com</p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center gap-6 pt-10 text-center">
        <Image src={LogoImg} alt="Site Logo" width={140} height={48} priority />
        <p className="text-center text-sm max-w-2xl leading-relaxed px-2">
          We deliver customer‑centric BPO, technology, and automation solutions that
          help businesses scale effortlessly. With 24/7 support and a global talent pool,
          we keep you connected to your customers, no matter where they are.
        </p>

        <div className="flex gap-4 justify-center pt-4 flex-wrap">
          {socialLinks.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              target="_blank"
              className="group relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-white text-black shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label={item.name}
            >
              {/* Hover Tooltip */}
              <span className="absolute left-1/2 top-0 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:-top-9 transition-all duration-300 ease-in-out bg-white text-black px-2 py-1 rounded-lg shadow-lg pointer-events-none">
               
              </span>

              {/* Animated BG */}
              <span
                className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-300 ease-in-out"
                style={{ backgroundColor: item.color, zIndex: 0 }}
              />

              {/* Icon */}
              <span className="z-10 transition-colors duration-300 group-hover:text-white">
                {item.icon}
              </span>
            </Link>
          ))}
        </div>

        <p className="w-full text-xs mt-4 opacity-75 border-t border-gray-600 pt-10">
          © {new Date().getFullYear()} Your&nbsp;BPO&nbsp;Brigade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
