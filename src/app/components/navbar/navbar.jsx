/* components/NavigationBar.jsx */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LogoImg from "../../../../public/images/BPO-logo.svg";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Headset,
  Megaphone,
  ClipboardList,
  Settings,
  Brain,
  MessageSquare,
  Database,
  Mail,
  Shield,
  BarChart2,
  Users,
  Info,
  Contact,
  Zap,
  Bot,
  Phone,
  Calendar,
  MessageCircle,
  Inbox,
  UserCircle,
  ShoppingCart,
  CheckCircle,
  Search,
  Share2,
  CreditCard,
  ShoppingBag,
  TrendingUp,
  Workflow,
  ListChecks,
  Cloud,
  Github,
  Lock,
  FileText,
  ClipboardCheck,
  Type,
  ClipboardCopy,
} from "lucide-react";

export default function NavigationBar() {
  const [showServices, setShowServices] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [hoverServiceCat, setHoverServiceCat] = useState(null);
  const [hoverSolutionCat, setHoverSolutionCat] = useState(null);
  const [childTop, setChildTop] = useState(0);
  const timeoutRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const drop = { hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } };
  const slide = { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } };
  const mobileDrop = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 1, height: "auto" },
  };

  const open = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    menu === "services" ? setShowServices(true) : setShowSolutions(true);
    if (menu === "services") setShowSolutions(false);
    else setShowServices(false);
  };

  const close = (menu) => {
    timeoutRef.current = setTimeout(() => {
      menu === "services" ? setShowServices(false) : setShowSolutions(false);
      setHoverServiceCat(null);
      setHoverSolutionCat(null);
    }, 200);
  };

  const hoverCat = (menu, idx, e) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const container = e.currentTarget.closest(".dropdown-container");
    if (container)
      setChildTop(rect.top - container.getBoundingClientRect().top);
    menu === "services" ? setHoverServiceCat(idx) : setHoverSolutionCat(idx);
  };

  const closeAll = () => {
    setShowServices(false);
    setShowSolutions(false);
    setHoverServiceCat(null);
    setHoverSolutionCat(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <div className="z-50 font-montserrat fixed lg:top-3 left-0 right-0 shadow-md lg:mx-20 xl-mx-24 ">
      {/* Top Bar */}
      <div className="container lg:rounded-2xl px-4 sm:px-6 md:px-10 lg:px-10 flex items-center justify-between bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-3">
        <Link href="/" className="flex items-center">
          <Image src={LogoImg} alt="Logo" width={120} height={44} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => open("services")}
            onMouseLeave={() => close("services")}
          >
            <Link
              href="/service-page"
              className="flex items-center gap-1 font-medium hover:bg-[#c93c3c] py-2 px-3 rounded-full"
            >
              <Headset className="w-5 h-5" /> Services <ChevronDown size={18} />
            </Link>

            <AnimatePresence>
              {showServices && (
                <motion.div
                  className="dropdown-container absolute top-full mt-2 left-0 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-2 shadow-lg flex"
                  variants={drop}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-64 space-y-2">
                    <Link
                      href="/services/customer-support-services"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("services", 0, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Headset className="w-4 h-4" /> Customer Support
                        Services
                      </span>
                      <motion.span
                        animate={{ rotate: hoverServiceCat === 0 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/services/digital-marketing-services"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("services", 1, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Megaphone className="w-4 h-4" /> Digital Marketing
                        Services
                      </span>
                      <motion.span
                        animate={{ rotate: hoverServiceCat === 1 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/services/administrative-support"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("services", 2, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <ClipboardList className="w-4 h-4" /> Administrative
                        Support
                      </span>
                      <motion.span
                        animate={{ rotate: hoverServiceCat === 2 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                  </div>

                  <AnimatePresence>
                    {hoverServiceCat !== null && (
                      <motion.div
                        className="w-64 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-2 shadow-lg absolute left-full"
                        style={{ top: childTop }}
                        variants={slide}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                      >
                        <div className="space-y-2">
                          {
                            [
                              <>
                                <Link
                                  href="/services/customer-support-services/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Phone className="w-4 h-4" /> Inbound and
                                  Outbound Calling
                                </Link>
                                <Link
                                  href="/services/customer-support-services/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <UserCircle className="w-4 h-4" /> Customer
                                  Service Representative
                                </Link>
                                <Link
                                  href="/services/customer-support-services/2"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Calendar className="w-4 h-4" /> Appointment
                                  Setting
                                </Link>
                                <Link
                                  href="/services/customer-support-services/3"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Inbox className="w-4 h-4" /> Front Desk
                                  Support
                                </Link>
                                <Link
                                  href="/services/customer-support-services/4"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <MessageCircle className="w-4 h-4" /> Chat
                                  Support
                                </Link>
                                <Link
                                  href="/services/customer-support-services/5"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Mail className="w-4 h-4" /> Email Support
                                </Link>
                                <Link
                                  href="/services/customer-support-services/6"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <UserCircle className="w-4 h-4" /> Virtual
                                  Assistant
                                </Link>
                                <Link
                                  href="/services/customer-support-services/7"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <ShoppingCart className="w-4 h-4" /> Virtual
                                  Order Taker
                                </Link>
                                <Link
                                  href="/services/customer-support-services/8"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <CheckCircle className="w-4 h-4" /> Quality
                                  Assurance
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/services/digital-marketing-services/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Search className="w-4 h-4" /> SEO (Search
                                  Engine Optimization)
                                </Link>
                                <Link
                                  href="/services/digital-marketing-services/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Share2 className="w-4 h-4" /> Social Media
                                  Marketing
                                </Link>
                                <Link
                                  href="/services/digital-marketing-services/2"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <CreditCard className="w-4 h-4" /> PPC
                                  (Pay‑Per‑Click) Management
                                </Link>
                                <Link
                                  href="/services/digital-marketing-services/3"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <ShoppingBag className="w-4 h-4" /> E‑commerce
                                  Marketing
                                </Link>
                                <Link
                                  href="/services/digital-marketing-services/4"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <TrendingUp className="w-4 h-4" /> Conversion
                                  Rate Optimization
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/services/administrative-support/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Users className="w-4 h-4" /> CRM Support
                                </Link>
                                <Link
                                  href="/services/administrative-support/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Zap className="w-4 h-4" /> Automation
                                  Services
                                </Link>
                              </>,
                            ][hoverServiceCat]
                          }
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => open("solutions")}
            onMouseLeave={() => close("solutions")}
          >
            <Link
              href="/solution-page"
              className="flex items-center gap-1 text-white font-medium hover:bg-[#c93c3c] py-2 px-3 rounded-full"
            >
              <Settings className="w-5 h-5" /> Solutions{" "}
              <ChevronDown size={18} />
            </Link>

            <AnimatePresence>
              {showSolutions && (
                <motion.div
                  className="dropdown-container absolute top-full mt-2 left-0 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-2 shadow-lg flex"
                  variants={drop}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-64 space-y-2">
                    <Link
                      href="/solutions/business-process-automation"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 0, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Workflow className="w-4 h-4" /> Business Process
                        Automation
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 0 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/solutions/ai-and-machine-learning"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 1, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Brain className="w-4 h-4" /> AI & Machine Learning
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 1 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/solutions/communication-&-collaboration-tools"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 2, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <MessageSquare className="w-4 h-4" /> Communication &
                        Collaboration Tools
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 2 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/solutions/data-business-intelligence"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 3, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Database className="w-4 h-4" /> Data & Business
                        Intelligence
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 3 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/solutions/crm-marketing-automation"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 4, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4" /> CRM & Marketing Automation
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 4 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/solutions/cloud-infrastructure"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 5, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Cloud className="w-4 h-4" /> Cloud & Infrastructure
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 5 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/solutions/security-compliance"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 6, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4" /> Security & Compliance
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 6 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                    <Link
                      href="/solutions/customer-insights-feedback"
                      className="flex justify-between items-center p-2 hover:bg-[#b53535] cursor-pointer"
                      onMouseEnter={(e) => hoverCat("solutions", 7, e)}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <BarChart2 className="w-4 h-4" /> Customer Insights &
                        Feedback
                      </span>
                      <motion.span
                        animate={{ rotate: hoverSolutionCat === 7 ? 90 : 0 }}
                      >
                        <ChevronRight size={14} />
                      </motion.span>
                    </Link>
                  </div>

                  <AnimatePresence>
                    {hoverSolutionCat !== null && (
                      <motion.div
                        className="w-64 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] py-2 shadow-lg absolute left-full"
                        style={{ top: childTop }}
                        variants={slide}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                      >
                        <div className="space-y-2">
                          {
                            [
                              <>
                                <Link
                                  href="/solutions/business-process-automation/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Zap className="w-4 h-4" /> Workflow
                                  Automation (Zapier, Monday.com, Power
                                  Automate)
                                </Link>
                                <Link
                                  href="/solutions/business-process-automation/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <ListChecks className="w-4 h-4" /> Task
                                  Management &amp; Orchestration
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/solutions/ai-and-machine-learning/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Bot className="w-4 h-4" /> Chatbots &amp;
                                  Intelligent Ticket Routing
                                </Link>
                                <Link
                                  href="/solutions/ai-and-machine-learning/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <BarChart2 className="w-4 h-4" /> Predictive
                                  Analytics
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/solutions/communication-&-collaboration-tools/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <MessageSquare className="w-4 h-4" />{" "}
                                  Microsoft Teams
                                </Link>
                                <Link
                                  href="/solutions/communication-&-collaboration-tools/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <MessageSquare className="w-4 h-4" /> Slack
                                </Link>
                                <Link
                                  href="/solutions/communication-&-collaboration-tools/2"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <MessageSquare className="w-4 h-4" /> Zoom
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/solutions/data-business-intelligence/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <BarChart2 className="w-4 h-4" /> Power BI
                                </Link>
                                <Link
                                  href="/solutions/data-business-intelligence/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <BarChart2 className="w-4 h-4" />{" "}
                                  Looker Studio
                                </Link>
                                <Link
                                  href="/solutions/data-business-intelligence/2"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <BarChart2 className="w-4 h-4" /> Tableau
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/solutions/crm-marketing-automation/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Users className="w-4 h-4" /> Salesforce
                                </Link>
                                <Link
                                  href="/solutions/crm-marketing-automation/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Users className="w-4 h-4" /> HubSpot
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/solutions/cloud-infrastructure/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Cloud className="w-4 h-4" /> Amazon Web
                                  Services (AWS)
                                </Link>
                                <Link
                                  href="/solutions/cloud-infrastructure/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Cloud className="w-4 h-4" /> Kubernetes
                                </Link>
                                <Link
                                  href="/solutions/cloud-infrastructure/2"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Github className="w-4 h-4" /> GitHub (CI/CD,
                                  Private Repos)
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/solutions/security-compliance/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Shield className="w-4 h-4" /> ISO 27001
                                  Compliance
                                </Link>
                                <Link
                                  href="/solutions/security-compliance/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <FileText className="w-4 h-4" />{" "}
                                  Process Street
                                </Link>
                                <Link
                                  href="/solutions/security-compliance/2"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <ClipboardCheck className="w-4 h-4" /> Qualio
                                </Link>
                              </>,
                              <>
                                <Link
                                  href="/solutions/customer-insights-feedback/0"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <Type className="w-4 h-4" /> Typeform
                                </Link>
                                <Link
                                  href="/solutions/customer-insights-feedback/1"
                                  className="flex items-center gap-2 p-2 hover:bg-[#b53535] text-sm"
                                >
                                  <ClipboardCopy className="w-4 h-4" />{" "}
                                  SurveyMonkey
                                </Link>
                              </>,
                            ][hoverSolutionCat]
                          }
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/joinus"
            className="flex items-center gap-1 text-white font-medium hover:bg-[#c93c3c] py-2 px-3 rounded-full"
          >
            <Users className="w-5 h-5 " /> Join Us
          </Link>

          <Link
            href="/aboutus"
            className="flex items-center gap-1 text-white font-medium hover:bg-[#c93c3c] py-2 px-3 rounded-full"
          >
            <Info className="w-5 h-5" /> About Us
          </Link>

          {/* Contact Us Button */}
          <Link href="mailto:hr@bpobrigade.com">
            <motion.button
              className="relative overflow-hidden rounded-full bg-white text-neutral-900 shadow-[10px_10px_20px_rgba(0,0,0,0.05)] cursor-pointer group px-6 py-2 font-medium flex items-center gap-2"
              style={{ "--clr": "#C93C3C" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sliding Background */}
              <span className="absolute inset-0 bg-[var(--clr)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0 rounded-full"></span>

              {/* Content */}
              <div className="relative z-10 flex items-center gap-2 text-[var(--clr)] transition-colors duration-200 group-hover:text-white whitespace-nowrap">
                <Contact className="w-5 h-5" />
                Contact Us
              </div>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="px-0">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {/* Mobile Drawer */}
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      className="overflow-hidden bg-white shadow-lg w-full"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="border-b border-gray-200 py-2">
          <div className="flex justify-between items-center w-full">
            <Link
              href="/service-page"
              className="py-2 font-medium text-black"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="p-2"
            >
              <motion.span
                animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
          </div>
          <AnimatePresence>
            {mobileServicesOpen && (
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={mobileDrop}
                className="overflow-hidden"
              >
                <div className="pl-4 py-2 space-y-2">
                  <Link
                    href="/services/customer-support-services"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Customer Support Services
                  </Link>
                  <Link
                    href="/services/digital-marketing-services"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Digital Marketing Services
                  </Link>
                  <Link
                    href="/services/administrative-support"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Administrative Support
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border-b border-gray-200 py-2">
          <div className="flex justify-between items-center w-full">
            <Link
              href="/solution-page"
              className="py-2 font-medium text-black"
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="p-2"
            >
              <motion.span
                animate={{ rotate: mobileSolutionsOpen ? 180 : 0 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
          </div>
          <AnimatePresence>
            {mobileSolutionsOpen && (
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={mobileDrop}
                className="overflow-hidden"
              >
                <div className="pl-4 py-2 space-y-2">
                  <Link
                    href="/solutions/business-process-automation"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Business Process Automation
                  </Link>
                  <Link
                    href="/solutions/ai-and-machine-learning"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    AI & Machine Learning
                  </Link>
                  <Link
                    href="/solutions/communication-collaboration"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Communication & Collaboration Tools
                  </Link>
                  <Link
                    href="/solutions/data-business-intelligence"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Data & Business Intelligence
                  </Link>
                  <Link
                    href="/solutions/crm-marketing-automation"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    CRM & Marketing Automation
                  </Link>
                  <Link
                    href="/solutions/cloud-infrastructure"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Cloud & Infrastructure
                  </Link>
                  <Link
                    href="/solutions/security-compliance"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Security & Compliance
                  </Link>
                  <Link
                    href="/solutions/customer-insights-feedback"
                    className="block py-1 text-sm hover:text-[#C93C3C]"
                    onClick={closeMobileMenu}
                  >
                    Customer Insights & Feedback
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="py-2 space-y-2">
          <Link
            href="/joinus"
            className="block py-2 font-medium text-black"
            onClick={closeMobileMenu}
          >
            Join Us
          </Link>
          <Link
            href="/aboutus"
            className="block py-2 font-medium text-black"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link href="/aboutus#contact-form" scroll={true}>
            <button
              className="w-full bg-[#C93C3C] text-white font-medium py-2 px-4 rounded-lg shadow-[0_4px_6px_0_rgba(201,60,60,0.4)] hover:bg-[#b53535] transition-colors mt-2"
              onClick={closeMobileMenu}
            >
              Reach out to us
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}