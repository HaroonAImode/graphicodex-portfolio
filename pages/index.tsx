"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ServiceCardFlip from "../components/ServiceCardFlip";
import HeroMouseEffect from "../components/HeroMouseEffect";
import RecentProjects from "../components/RecentProjects";
import Link from "next/link";
import Image from "next/image";

const HomePage: React.FC = () => {
  // Memoize static data to prevent recreating on every render
  const aiLogosRow1 = useMemo(() => [
    { name: "OpenAI", path: "/logos/openai.png" },
    { name: "ChatGPT", path: "/logos/chatgpt.png" },
    { name: "Hugging Face", path: "/logos/huggingface.png" },
    { name: "LangChain", path: "/logos/langchain.png" },
    { name: "Anthropic", path: "/logos/anthropic.png" },
    { name: "Pinecone", path: "/logos/Pinecone.png" },
    { name: "Weaviate", path: "/logos/Weaviate.png" },
    { name: "Cohere", path: "/logos/Cohere.png" },
  ], []);

  const aiLogosRow2 = useMemo(() => [
    { name: "TensorFlow", path: "/logos/TensorFlow.png" },
    { name: "PyTorch", path: "/logos/PyTorch.png" },
    { name: "n8n", path: "/logos/n8n.png" },
    { name: "Make", path: "/logos/Make.png" },
    { name: "Zapier", path: "/logos/Zapier.png" },
    { name: "React", path: "/logos/React.png" },
    { name: "Next.js", path: "/logos/nextjs.png" },
    { name: "FastAPI", path: "/logos/FastAPI.png" },
  ], []);

  const aiLogosRow3 = useMemo(() => [
    { name: "AWS", path: "/logos/AWS.png" },
    { name: "Google Cloud", path: "/logos/gcp.png" },
    { name: "Azure", path: "/logos/Azure.png" },
    { name: "Docker", path: "/logos/Docker.png" },
    { name: "Kubernetes", path: "/logos/Kubernetes.png" },
    { name: "PostgreSQL", path: "/logos/PostgreSQL.png" },
    { name: "MongoDB", path: "/logos/MongoDB.png" },
    { name: "Redis", path: "/logos/Redis.png" },
  ], []);

  const services = useMemo(() => [
    {
      title: "AI Agents & Conversational Assistants",
      subtitle: "Deploy 24/7 AI agents that handle customer queries, qualify leads, and book appointments automatically.",
      description: "Custom AI agents trained on your business data to handle real conversations, answer questions, and take action — without human involvement.",
      icon: "🤖",
      features: ["Custom chatbot development", "RAG knowledge base", "WhatsApp & web integration", "Lead qualification"],
      href: "/services/agents",
      gradient: "from-orange-500 to-amber-500",
      examples: [
        {
          title: "24/7 Customer Support Bot",
          description: "AI agent reducing support workload by 65% for a SaaS company",
          image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop"
        },
        {
          title: "Lead Qualification Agent",
          description: "Automated lead scoring increasing conversions by 40%",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "AI Workflow Automation",
      subtitle: "Eliminate repetitive manual tasks with intelligent automations that run 24/7 across your entire business.",
      description: "We map your existing processes and build AI-powered workflows that complete tasks automatically — from lead follow-up to invoice processing.",
      icon: "⚙️",
      features: ["n8n/Make workflow builds", "CRM automation", "Email & SMS sequences", "Data processing pipelines"],
      href: "/services/integrations",
      gradient: "from-orange-500 to-amber-500",
      examples: [
        {
          title: "PropertyPulse AI",
          description: "Real estate bot matching clients to listings automatically",
          image: "/projects/automation1-Propertypulse.jpeg"
        },
        {
          title: "LeadIntel Campaign Engine",
          description: "AI scrapes leads & generates personalized outreach campaigns",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Custom AI Model Development",
      subtitle: "AI models trained specifically on your industry data to solve problems no off-the-shelf tool can handle.",
      description: "Domain-specific models fine-tuned on your data for classification, detection, analysis, or prediction with maximum accuracy.",
      icon: "⚡",
      features: ["LLM fine-tuning", "Domain-specific training", "Computer vision models", "Performance optimization"],
      href: "/services/models",
      gradient: "from-orange-500 to-amber-500",
      examples: [
        {
          title: "Staff Activity Monitor",
          description: "Computer vision AI tracking staff efficiency in real time",
          image: "/projects/restaurant-camera-ai.png"
        },
        {
          title: "Manufacturing QC AI",
          description: "99.8% defect detection accuracy on production lines",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "AI Integrations",
      subtitle: "Connect AI capabilities into your existing CRM, ERP, website, or business tools without disruption.",
      description: "We integrate AI into your current stack — GoHighLevel, HubSpot, Salesforce, custom APIs — so your tools work smarter automatically.",
      icon: "🔗",
      features: ["CRM/ERP AI integration", "REST API development", "Real-time data sync", "Third-party connectors"],
      href: "/services/integrations",
      gradient: "from-orange-600 to-amber-500",
      examples: [
        {
          title: "Smart Appointment Bot",
          description: "AI booking system with zero double-bookings — +34 monthly appointments",
          image: "/projects/automation2-appointment-booking.jpeg"
        },
        {
          title: "RankGrid Local SEO Engine",
          description: "Automated SEO reporting delivered to CRM in real time",
          image: "/projects/automation4-Automated-Local-SEO-Report-Engine.jpeg"
        }
      ]
    },
    {
      title: "Computer Vision Systems",
      subtitle: "Give your business the ability to see and analyze visual data automatically and in real time.",
      description: "AI systems that analyze video feeds, images, and documents — for quality control, safety monitoring, and intelligent data extraction.",
      icon: "👁️",
      features: ["Object detection & recognition", "Facial analysis systems", "OCR & document scanning", "Real-time monitoring"],
      href: "/services/computer-vision",
      gradient: "from-red-500 to-pink-500",
      examples: [
        {
          title: "Restaurant Camera AI",
          description: "Real-time staff tracking and safety zone monitoring",
          image: "/projects/restaurant-camera-ai.png"
        },
        {
          title: "Document Extraction AI",
          description: "Intelligent OCR reducing manual data entry by 90%",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Predictive Analytics & Forecasting",
      subtitle: "Turn your existing business data into accurate forecasts and actionable decisions automatically.",
      description: "ML models that analyze historical data to predict demand, customer behavior, and business outcomes so you can act before problems arise.",
      icon: "📈",
      features: ["Sales & revenue forecasting", "Customer churn prediction", "Demand planning", "Anomaly detection"],
      href: "/services/predictive-analytics",
      gradient: "from-yellow-500 to-amber-500",
      examples: [
        {
          title: "Sales Forecasting Model",
          description: "32% more accurate revenue forecasts for SaaS company",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
        },
        {
          title: "Churn Prediction System",
          description: "Identifies at-risk customers 30 days before they leave",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
        }
      ]
    }
  ], []);

  const stats = useMemo(() => [
    { number: "50+", label: "AI Systems Deployed", description: "Across multiple industries" },
    { number: "40–70%", label: "Workload Reduction", description: "Achieved by our clients" },
    { number: "24/7", label: "Automated Operations", description: "AI runs while you sleep" },
    { number: "3–6", label: "Weeks to Deploy", description: "Fast, reliable delivery" }
  ], []);

  const caseStudies = useMemo(() => [
    {
      title: "Real Estate Lead Automation",
      company: "Property Agency",
      result: "3× faster lead follow-up",
      description: "PropertyPulse AI bot automatically matches leads with listings and sends follow-ups via GoHighLevel — zero manual work required."
    },
    {
      title: "Appointment Booking Automation",
      company: "Healthcare Clinic",
      result: "+34 monthly appointments",
      description: "AI booking system integrated with website and WhatsApp — eliminated phone calls and double-bookings completely."
    },
    {
      title: "Personalized Lead Campaign Engine",
      company: "Marketing Agency",
      result: "3× higher engagement",
      description: "LeadIntel AI scrapes each prospect’s website and crafts personalized email campaigns — 90% open rate vs 22% industry average."
    }
  ], []);

  const processSteps = useMemo(() => [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "We map your existing workflows and identify tasks AI can automate for immediate impact."
    },
    {
      step: "02",
      title: "Build & Integrate",
      description: "We build the AI system and connect it directly to your existing tools and platforms."
    },
    {
      step: "03",
      title: "Deploy & Go Live",
      description: "Your AI system is tested, refined, and deployed — live within 3–6 weeks."
    },
    {
      step: "04",
      title: "Monitor & Improve",
      description: "We monitor performance and continuously improve your system as your business grows."
    }
  ], []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:pt-20 lg:pb-0 overflow-hidden" style={{ background: '#080808' }}>
        {/* Cursor trail - Desktop Only */}
        <div className="hidden lg:block">
          <HeroMouseEffect />
        </div>

        {/* Background: subtle warm radial glow, not blinding orange */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(145,32,0,0.5) 0%, rgba(70,16,0,0.22) 52%, transparent 80%)',
          }} />
          {/* Subtle vignette edges */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
          }} />
          {/* Fine grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">

          {/* Eyebrow label */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55 }}
            className="flex items-center justify-center gap-3 mb-7 lg:mb-9"
          >
            <span className="block w-10 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(232,69,0,0.7))' }} />
            <span className="text-[10px] lg:text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: '#E84500' }}>
              B2B AI Automation Agency
            </span>
            <span className="block w-10 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(232,69,0,0.7))' }} />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-black tracking-tight leading-[1.04] mb-4 lg:mb-5"
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
            }}
          >
            <span className="block text-white">Custom AI Agents &</span>
            <span className="block text-white">Automation Systems</span>
          </motion.h1>

          {/* Stat accent line */}
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg lg:text-xl font-normal mb-6 lg:mb-7"
            style={{ color: 'rgba(255,255,255,0.52)', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            that reduce your workload by{' '}
            <strong className="font-black" style={{ color: '#E84500' }}>40–70%</strong>
          </motion.p>

          {/* Subheading */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="text-sm sm:text-base lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed font-normal px-2"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            We design and deploy AI systems that automate operations, generate leads, and handle customer interactions — so your team can focus on growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 lg:mb-16 px-4 sm:px-0"
          >
            <Link href="/portfolio#filters">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #E84500 0%, #bf3800 100%)', boxShadow: '0 2px 20px rgba(232,69,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Our Work
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)' }}
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your AI Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
{/* Continuous Moving Logos Section - Dark Theme */}
<section className="py-6 lg:py-12 bg-zinc-900/50 border-y border-zinc-800 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center text-gray-400 text-xs lg:text-sm uppercase tracking-widest mb-4 lg:mb-8 font-medium px-4"
    >
      Powered by Industry-Leading Technologies
    </motion.p>
    
    {/* First Row - Left to Right */}
    <div className="flex overflow-hidden mb-2 lg:mb-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...aiLogosRow1, ...aiLogosRow1, ...aiLogosRow1].map((logo, index) => (
          <div key={index} className="mx-2 lg:mx-4 flex items-center justify-center group">
            <div className="w-16 h-10 lg:w-24 lg:h-14 bg-white rounded-lg lg:rounded-xl shadow-lg border border-white/30 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/25 hover:border-orange-400 hover:scale-105 hover:bg-white/95">
              {/* Professional Logo Container */}
              <div className="relative w-12 h-6 lg:w-18 lg:h-9 flex items-center justify-center p-0.5 lg:p-1">
                <Image 
                  src={logo.path} 
                  alt={logo.name}
                  width={60}
                  height={30}
                  className="h-5 lg:h-8 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) saturate(1.2)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'block';
                    }
                  }}
                />
                {/* Fallback text */}
                <span 
                  className="text-xs font-medium text-gray-600 text-center hidden"
                >
                  {logo.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Second Row - Right to Left */}
    <div className="flex overflow-hidden mb-2 lg:mb-4">
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {[...aiLogosRow2, ...aiLogosRow2, ...aiLogosRow2].map((logo, index) => (
          <div key={index} className="mx-2 lg:mx-4 flex items-center justify-center group">
            <div className="w-16 h-10 lg:w-24 lg:h-14 bg-white rounded-lg lg:rounded-xl shadow-lg border border-white/30 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/25 hover:border-orange-400 hover:scale-105 hover:bg-white/95">
              {/* Professional Logo Container */}
              <div className="relative w-12 h-6 lg:w-18 lg:h-9 flex items-center justify-center p-0.5 lg:p-1">
                <Image 
                  src={logo.path} 
                  alt={logo.name}
                  width={60}
                  height={30}
                  className="h-5 lg:h-8 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) saturate(1.2)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'block';
                    }
                  }}
                />
                {/* Fallback text */}
                <span 
                  className="text-xs font-medium text-gray-600 text-center hidden"
                >
                  {logo.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Third Row - Left to Right (Different Speed) */}
    <div className="flex overflow-hidden">
      <div className="flex animate-marquee-slow whitespace-nowrap">
        {[...aiLogosRow3, ...aiLogosRow3, ...aiLogosRow3].map((logo, index) => (
          <div key={index} className="mx-2 lg:mx-4 flex items-center justify-center group">
            <div className="w-16 h-10 lg:w-24 lg:h-14 bg-white rounded-lg lg:rounded-xl shadow-lg border border-white/30 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/25 hover:border-orange-400 hover:scale-105 hover:bg-white/95">
              {/* Professional Logo Container */}
              <div className="relative w-12 h-6 lg:w-18 lg:h-9 flex items-center justify-center p-0.5 lg:p-1">
                <Image 
                  src={logo.path} 
                  alt={logo.name}
                  width={60}
                  height={30}
                  className="h-5 lg:h-8 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) saturate(1.2)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'block';
                    }
                  }}
                />
                {/* Fallback text */}
                <span 
                  className="text-xs font-medium text-gray-600 text-center hidden"
                >
                  {logo.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Recent Projects Showcase */}
      <RecentProjects />

      {/* Services Section - Dark Theme with Flip Cards */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
       <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-orange-500/10 rounded-full text-orange-400 text-xs lg:text-sm font-medium mb-3 lg:mb-4 border border-orange-500/20">
              What We Build
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-6">
              AI Services <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Focused on Results</span>
            </h2>
            <p className="text-sm lg:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              We build AI agents, automations, and integrations that reduce your workload and generate results — not just technology for technology’s sake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCardFlip
                  title={service.title}
                  subtitle={service.subtitle}
                  icon={service.icon}
                  description={service.description}
                  features={service.features}
                  gradient={service.gradient}
                  examples={service.examples}
                  href={service.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Theme */}
      <section className="py-8 lg:py-20 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="text-2xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent mb-2 lg:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xs lg:text-lg font-semibold text-white mb-1 lg:mb-2">
                    {stat.label}
                  </div>
                  <div className="text-[10px] lg:text-sm text-gray-400 font-light">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-12"
          >
            <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-orange-500/10 rounded-full text-orange-400 text-xs lg:text-sm font-medium mb-3 lg:mb-4 border border-orange-500/20">
              Industry Focus
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
              Industries We <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Work With</span>
            </h2>
            <p className="text-sm lg:text-lg text-gray-400 max-w-2xl mx-auto font-light">
              We build AI automation systems for businesses that want to stop doing things manually.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🏠", name: "Real Estate", desc: "Lead follow-up & property matching" },
              { icon: "🏥", name: "Healthcare Clinics", desc: "Appointment booking & reminders" },
              { icon: "📣", name: "Marketing Agencies", desc: "Personalized campaigns at scale" },
              { icon: "💻", name: "SaaS Startups", desc: "Onboarding & support automation" },
              { icon: "🛒", name: "E-commerce", desc: "Recommendations & cart recovery" },
              { icon: "🔧", name: "Service Businesses", desc: "Scheduling & follow-up automation" },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 border border-zinc-800 text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/30"
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{industry.name}</div>
                <div className="text-xs text-gray-400 font-light leading-snug">{industry.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Dark Theme */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-green-500/10 rounded-full text-green-400 text-xs lg:text-sm font-medium mb-3 lg:mb-4 border border-green-500/20">
              Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-6">
              Proven <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-sm lg:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Real-world AI implementations delivering tangible business value across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-zinc-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-base lg:text-lg font-bold mb-3 lg:mb-6">
                  {index + 1}
                </div>
                <h3 className="text-base lg:text-xl font-bold text-white mb-2 lg:mb-3 group-hover:text-green-400 transition-colors">
                  {study.title}
                </h3>
                <div className="text-xs lg:text-sm text-gray-400 font-medium mb-2 lg:mb-4">{study.company}</div>
                <div className="text-lg lg:text-2xl font-bold text-green-400 mb-2 lg:mb-4">{study.result}</div>
                <p className="text-xs lg:text-base text-gray-400 leading-relaxed font-light">
                  {study.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark Theme */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-sm lg:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              A structured approach that ensures successful AI implementation from concept to production.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative text-center bg-zinc-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-base lg:text-xl font-bold mb-3 lg:mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-sm lg:text-xl font-bold text-white mb-2 lg:mb-4">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-base text-gray-400 leading-relaxed font-light">
                  {step.description}
                </p>
                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-500/30 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Dark Theme */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-orange-950 to-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Ready to Automate Your Business Operations?
            </h2>
            <p className="text-sm lg:text-xl text-orange-200 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Let’s talk about which parts of your business can be automated — and how quickly we can get them running.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-white rounded-xl text-zinc-950 font-semibold text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                    Start Your AI Project
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/30 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  <span className="flex items-center justify-center gap-2 lg:gap-3 text-white">
                    Book a Free Strategy Call
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 22s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee-slow 28s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;