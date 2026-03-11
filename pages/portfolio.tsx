"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Handle scroll to filters section if hash is present
  useEffect(() => {
    if (window.location.hash === '#filters') {
      const filtersSection = document.getElementById('filters');
      if (filtersSection) {
        setTimeout(() => {
          filtersSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  const projects = [
    {
      id: 1,
      name: "PropertyPulse AI",
      description: "n8n-powered real estate bot that reads GHL form data and automatically sends matching property listings back to GoHighLevel for instant follow-up.",
      fullDescription: "An n8n-powered real estate bot that reads GHL form data (budget, location, timeline), searches listings for matching properties, and automatically sends available options—or updates—back to GoHighLevel for instant follow-up. This system eliminates manual property research and ensures instant client engagement.",
      image: "/projects/automation1-Propertypulse.jpeg",
      category: "integrations",
      technologies: ["n8n", "GoHighLevel API", "Google Maps API", "Real Estate APIs", "Python"],
      results: ["3× faster lead follow-up", "24/7 availability", "100% automated", "Zero manual work"],
      client: "Real Estate Agency",
      duration: "4 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 2,
      name: "Smart Appointment Booking Bot",
      description: "AI appointment scheduling system that captures availability, syncs with calendars, sends reminders, and manages rescheduling with zero human intervention.",
      fullDescription: "Intelligent appointment scheduling automation that captures availability, syncs with calendars, sends confirmations, and manages rescheduling—all without human intervention. Seamlessly integrates with CRM and calendar systems, supporting multiple timezones and preventing double-booking.",
      image: "/projects/automation2-appointment-booking.jpeg",
      category: "integrations",
      technologies: ["n8n", "Google Calendar API", "Twilio", "CRM Integration", "SMS API"],
      results: ["+34 monthly appointments", "Zero double-booking", "95% show rate", "24/7 scheduling"],
      client: "Healthcare Provider",
      duration: "3 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      id: 3,
      name: "LeadIntel Campaign Engine",
      description: "AI system that scrapes each prospect's website and automatically generates hyper-personalized email or SMS campaigns tailored to their business.",
      fullDescription: "This n8n workflow starts by receiving a webhook from GoHighLevel whenever a new lead is captured. It automatically scrapes the lead's website, converts content into clean markdown, generates a concise business abstract, and uses AI agents to craft highly personalized email or SMS campaigns tailored specifically to that lead — ensuring outreach feels researched and relevant.",
      image: "/projects/automation3- LeadIntel-Campaign-Engine.jpeg",
      category: "ai-agents",
      technologies: ["n8n", "GoHighLevel", "Web Scraping", "GPT-4", "Claude", "Python"],
      results: ["3× engagement rate", "90% open rate", "10min per lead", "100% automated"],
      client: "Marketing Agency",
      duration: "5 weeks",
      status: "Completed",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "RankGrid AI – Local SEO Automation",
      description: "Automated local SEO reporting engine that generates Google Business Profile geo-grid ranking reports and delivers them directly to the CRM in real time.",
      fullDescription: "An automated local SEO reporting system that generates Google Business Profile ranking reports in real time. It pulls business data from Google Maps, runs a geo-grid visibility scan across a targeted radius, calculates average rankings, and automatically sends a professional report back to the CRM. Eliminates manual audits completely.",
      image: "/projects/automation4-Automated-Local-SEO-Report-Engine.jpeg",
      category: "integrations",
      technologies: ["n8n", "Google Maps API", "Rank Tracking APIs", "PDF Generation", "CRM APIs"],
      results: ["Real-time reports", "50+ reports/day", "Zero manual work", "Geo-grid accuracy"],
      client: "SEO Agency",
      duration: "6 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Advanced Website Scraping Automation",
      description: "Enterprise-grade web scraping system that extracts structured data from complex websites and delivers it clean to your CRM or database on schedule.",
      fullDescription: "Enterprise-grade web scraping automation that intelligently extracts structured data from complex websites, handles dynamic content loading, bypasses anti-bot measures, and delivers clean, formatted data to your database or CRM. Perfect for competitive intelligence, lead generation, and market research.",
      image: "/projects/automation5-Advance-Website-Scraping-Automation.png",
      category: "integrations",
      technologies: ["n8n", "Puppeteer", "Playwright", "Proxy Networks", "Python", "MongoDB"],
      results: ["1,000+ pages/hour", "99% success rate", "Structured data output", "24/7 monitoring"],
      client: "Data Analytics Firm",
      duration: "5 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      id: 6,
      name: "AI-Powered CRM Software",
      description: "Custom CRM enhanced with AI lead scoring, automated follow-up workflows, and predictive sales analytics that drive 40% higher conversion rates.",
      fullDescription: "Custom CRM software enhanced with AI capabilities including intelligent lead scoring, automated follow-up suggestions, predictive sales forecasting, and natural language search. Features include automated email campaigns, smart contact management, deal pipeline tracking, and integration with popular business tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      category: "ai-agents",
      technologies: ["React", "Node.js", "OpenAI GPT-4", "PostgreSQL", "Redis", "n8n"],
      results: ["40% conversion boost", "AI lead scoring", "Automated workflows", "360° client view"],
      client: "SaaS Company",
      duration: "12 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 7,
      name: "Restaurant Staff Tracking AI",
      description: "Computer vision AI system monitoring staff activity, zone compliance, and safety violations in real time using existing camera infrastructure.",
      fullDescription: "AI-powered staff detection and activity monitoring system using existing camera feeds. Tracks employee movements, monitors work zones, detects safety violations, and provides analytics on staff efficiency. Helps restaurant managers optimize operations and ensure compliance with safety protocols.",
      image: "/projects/restaurant-camera-ai.png",
      category: "custom-models",
      technologies: ["YOLO v8", "Computer Vision", "Edge AI", "OpenCV", "FastAPI", "PostgreSQL"],
      results: ["Real-time tracking", "98% detection rate", "Zone monitoring", "Safety alerts"],
      client: "Restaurant Chain",
      duration: "7 weeks",
      status: "Completed",
      gradient: "from-orange-600 to-amber-500"
    },
    {
      id: 8,
      name: "AI Facial Analyzer",
      description: "Real-time facial recognition and emotion analysis system for retail environments, tracking customer engagement and improving in-store experiences.",
      fullDescription: "A computer vision system that analyses facial expressions and engagement levels in retail and event environments. Detects age range, sentiment, and dwell time to help businesses understand how customers interact with displays and staff. Data is anonymised and aggregated for privacy compliance.",
      image: "/projects/ai-facial-analyzer.jpg",
      category: "custom-models",
      technologies: ["Python", "DeepFace", "OpenCV", "FastAPI", "Redis", "PostgreSQL"],
      results: ["Real-time analysis", "95% accuracy", "Privacy compliant", "Live dashboard"],
      client: "Retail Brand",
      duration: "6 weeks",
      status: "Completed",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      id: 9,
      name: "AI Email Marketing Automation",
      description: "End-to-end email marketing automation that segments audiences, generates personalized content with AI, and sends campaigns triggered by user behaviour.",
      fullDescription: "A fully automated email marketing pipeline that connects to your CRM, segments contacts by behaviour and attributes, uses GPT-4 to generate personalised email copy for each segment, and triggers sends based on real-time user actions. Includes A/B testing, open-rate tracking, and automatic list hygiene.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop&q=80",
      category: "integrations",
      technologies: ["n8n", "GPT-4", "SendGrid", "CRM API", "Segment", "Python"],
      results: ["2× open rate", "60% less manual work", "AI-written copy", "Behaviour triggers"],
      client: "E-commerce Store",
      duration: "4 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 10,
      name: "Inventory Forecasting AI",
      description: "Predictive AI model trained on historical sales data that forecasts stock demand by SKU and location, reducing overstock and preventing stockouts.",
      fullDescription: "A demand forecasting system that ingests historical sales data, seasonal trends, and promotional calendars to predict inventory requirements at SKU and location level. Integrated directly with the client's ERP to auto-generate purchase orders when stock is projected to fall below threshold.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80",
      category: "custom-models",
      technologies: ["Python", "Prophet", "XGBoost", "FastAPI", "PostgreSQL", "ERP API"],
      results: ["30% less overstock", "Zero critical stockouts", "Auto PO generation", "Weekly forecasts"],
      client: "Retail Distribution Company",
      duration: "8 weeks",
      status: "Completed",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 11,
      name: "Social Media Content AI",
      description: "Automated social media content pipeline that researches trending topics, drafts posts, generates images, and schedules publishing across platforms.",
      fullDescription: "A content automation system that monitors industry trends and competitor activity, uses GPT-4 to write platform-optimised posts (LinkedIn, Instagram, Twitter/X), generates matching visuals via DALL-E, and auto-schedules everything through a social media management API. Produces 30+ posts per week with zero manual writing.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&q=80",
      category: "ai-agents",
      technologies: ["n8n", "GPT-4", "DALL-E", "Buffer API", "Python", "Web Scraping"],
      results: ["30+ posts/week", "Zero manual writing", "3× follower growth", "Trending content"],
      client: "Digital Marketing Agency",
      duration: "4 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 12,
      name: "AI Document Processing System",
      description: "Intelligent document automation that extracts, classifies, and routes data from invoices, contracts, and forms directly into your business systems.",
      fullDescription: "An AI-powered document processing pipeline that accepts scanned or digital documents (invoices, contracts, applications, forms), extracts key fields using OCR and LLM-based parsing, validates the data, and pushes it structured into the relevant business system (ERP, CRM, or database). Handles hundreds of documents per hour without manual data entry.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=600&fit=crop&q=80",
      category: "integrations",
      technologies: ["Python", "GPT-4 Vision", "OCR", "n8n", "FastAPI", "PostgreSQL"],
      results: ["500+ docs/hour", "99% extraction accuracy", "Zero data entry", "Multi-format support"],
      client: "Financial Services Firm",
      duration: "6 weeks",
      status: "Completed",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const filters = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "ai-agents", name: "AI Agents", count: projects.filter(p => p.category === "ai-agents").length },
    { id: "custom-models", name: "Custom Models", count: projects.filter(p => p.category === "custom-models").length },
    { id: "integrations", name: "Integrations", count: projects.filter(p => p.category === "integrations").length }
  ];

  const stats = [
    { number: "12+", label: "AI Projects Featured", description: "Real-world implementations" },
    { number: "98%", label: "Client Satisfaction", description: "Based on client feedback" },
    { number: "3–12", label: "Weeks Delivery", description: "Average project timeline" },
    { number: "40–70%", label: "Avg. Workload Reduction", description: "For our clients" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-orange-950 to-zinc-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-6 border border-orange-500/20"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-orange-300">Project Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              AI Success
            </span>
            {" "}Stories
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Explore our portfolio of successful AI implementations that have delivered measurable business results 
            across various industries and use cases.
          </motion.p>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30"
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-gray-600 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Portfolio Filters */}
<section id="filters" className="py-12 bg-zinc-950 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === filter.id
              ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
              : "bg-zinc-900/50 text-gray-300 hover:bg-zinc-900/50 hover:text-white border border-zinc-700"
          }`}
        >
          <span>{filter.name}</span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              activeFilter === filter.id ? "bg-white/20" : "bg-zinc-700"
            }`}
          >
            {filter.count}
          </span>
        </motion.button>
      ))}
    </div>
  </div>
</section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} showcasing our expertise in AI development and implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-zinc-800 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-30 mix-blend-overlay`}></div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-[10px] sm:text-sm rounded-full border border-green-500/30">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-3 sm:p-4 lg:p-6">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                      {project.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-2 sm:mb-4 leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>

                    {/* Client & Duration */}
                    <div className="hidden sm:flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">
                      <span>{project.client}</span>
                      <span>{project.duration}</span>
                    </div>

                    {/* Results */}
                    <div className="mb-2 sm:mb-4">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <span 
                            key={idx}
                            className="px-1.5 sm:px-3 py-0.5 sm:py-1 bg-orange-500/10 text-orange-400 text-[9px] sm:text-xs rounded-full border border-orange-500/20"
                          >
                            {result}
                          </span>
                        ))}
                        {project.results.length > 2 && (
                          <span className="px-1.5 sm:px-3 py-0.5 sm:py-1 bg-zinc-900/50 text-gray-400 text-[9px] sm:text-xs rounded-full border border-zinc-700">
                            +{project.results.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-900/50 text-gray-300 text-[9px] sm:text-xs rounded-full border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-900/50 text-gray-400 text-[9px] sm:text-xs rounded-full border border-zinc-700">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details */}
                    <div className="hidden sm:flex items-center gap-2 text-orange-400 font-medium group-hover:text-orange-300 transition-colors">
                      <span className="text-xs sm:text-sm">View case study</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {project.name}
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{project.client}</span>
                          <span>•</span>
                          <span>{project.duration}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-zinc-800 rounded-xl transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2">
                        {/* Project Image */}
                        <div className="relative h-64 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden mb-6">
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 mix-blend-overlay`}></div>
                        </div>

                        <div className="bg-zinc-900/50 rounded-2xl p-6 mb-6">
                          <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                          <p className="text-gray-300 leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div className="bg-zinc-900/50 rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.results.map((result, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-300">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-6">
                        <div className="bg-zinc-900/50 rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span 
                                key={index}
                                className="px-3 py-2 bg-zinc-800/50 text-gray-300 text-sm rounded-xl border border-zinc-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl p-6 border border-orange-500/30">
                          <h3 className="text-xl font-bold text-white mb-4">Interested in Similar?</h3>
                          <p className="text-gray-300 mb-4">
                            Lets discuss how we can implement similar AI solutions for your business.
                          </p>
                          <Link href="/contact">
                            <button className="w-full px-4 py-3 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                              Start Conversation
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-orange-950 to-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg sm:text-xl text-orange-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Lets work together to build AI solutions that deliver real business impact and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-xl text-zinc-950 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;