"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const HomePage: React.FC = () => {
  // AI Platform logos for continuous marquee - Updated to match actual filenames
  const aiLogosRow1 = [
    { name: "OpenAI", path: "/logos/openai.png" },
    { name: "ChatGPT", path: "/logos/chatgpt.png" },
    { name: "Hugging Face", path: "/logos/huggingface.png" },
    { name: "LangChain", path: "/logos/langchain.png" },
    { name: "Anthropic", path: "/logos/anthropic.png" },
    { name: "Pinecone", path: "/logos/Pinecone.png" },
    { name: "Weaviate", path: "/logos/Weaviate.png" },
    { name: "Cohere", path: "/logos/Cohere.png" },
  ];

  const aiLogosRow2 = [
    { name: "TensorFlow", path: "/logos/TensorFlow.png" },
    { name: "PyTorch", path: "/logos/PyTorch.png" },
    { name: "n8n", path: "/logos/n8n.png" },
    { name: "Make", path: "/logos/Make.png" },
    { name: "Zapier", path: "/logos/Zapier.png" },
    { name: "React", path: "/logos/React.png" },
    { name: "Next.js", path: "/logos/nextjs.png" },
    { name: "FastAPI", path: "/logos/FastAPI.png" },
  ];

  const aiLogosRow3 = [
    { name: "AWS", path: "/logos/AWS.png" },
    { name: "Google Cloud", path: "/logos/gcp.png" },
    { name: "Azure", path: "/logos/Azure.png" },
    { name: "Docker", path: "/logos/Docker.png" },
    { name: "Kubernetes", path: "/logos/Kubernetes.png" },
    { name: "PostgreSQL", path: "/logos/PostgreSQL.png" },
    { name: "MongoDB", path: "/logos/MongoDB.png" },
    { name: "Redis", path: "/logos/Redis.png" },
  ];

  const services = [
    {
      title: "AI Agents & Assistants",
      description: "Intelligent conversational agents with memory, context awareness, and multi-modal capabilities for enterprise applications.",
      icon: "🤖",
      features: ["Custom chatbot development", "RAG implementation", "Voice interface integration", "Real-time knowledge base"],
      href: "/services/agents",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Custom Model Development",
      description: "Tailored AI models fine-tuned on your specific data to solve unique business challenges with maximum accuracy.",
      icon: "⚡",
      features: ["LLM fine-tuning", "Domain-specific training", "Performance optimization", "Model evaluation"],
      href: "/services/models",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Integrations & Automation",
      description: "Seamless integration of AI capabilities into your existing workflows and automation of business processes.",
      icon: "🔗",
      features: ["n8n/Make workflows", "Custom API development", "CRM/ERP integration", "Real-time data processing"],
      href: "/services/integrations",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Production & MLOps",
      description: "Enterprise-grade deployment, monitoring, and maintenance of AI systems with guaranteed performance SLAs.",
      icon: "🚀",
      features: ["Cloud deployment", "Performance monitoring", "CI/CD pipelines", "Cost optimization"],
      href: "/services/production",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { number: "50+", label: "AI Projects Deployed", description: "Across multiple industries" },
    { number: "40%", label: "Avg. Efficiency Gain", description: "For our enterprise clients" },
    { number: "24/7", label: "Production Monitoring", description: "Enterprise-grade reliability" },
    { number: "99.9%", label: "Uptime SLA", description: "Guaranteed performance" }
  ];

  const caseStudies = [
    {
      title: "Enterprise Customer Support Automation",
      company: "Fortune 500 Retail",
      result: "65% cost reduction",
      description: "AI agents handling 80% of customer queries automatically"
    },
    {
      title: "Financial Document Processing",
      company: "Global Banking Institution",
      result: "4hrs → 8mins processing",
      description: "Custom NLP models for automated financial analysis"
    },
    {
      title: "E-commerce Personalization Engine",
      company: "Leading E-commerce Platform",
      result: "32% conversion lift",
      description: "AI-driven recommendations and personalized experiences"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business needs and AI opportunity assessment"
    },
    {
      step: "02",
      title: "Development & Testing",
      description: "Build, test, and refine AI solutions with continuous feedback"
    },
    {
      step: "03",
      title: "Deployment & Scaling",
      description: "Production deployment with monitoring and optimization"
    },
    {
      step: "04",
      title: "Support & Evolution",
      description: "Ongoing maintenance and continuous improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden">
      <Header />
      
      {/* Premium Hero Section - Dark Theme */}
      <section className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 lg:pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          {/* Premium Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-blue-500/20 shadow-lg mb-6 lg:mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-xs lg:text-sm font-semibold text-blue-300">Enterprise AI Solutions</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-blue-400/30"></div>
            <span className="hidden sm:inline text-xs lg:text-sm text-blue-200/80">Trusted by industry leaders</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight px-4 sm:px-0"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Intelligent
            </span>
            <br />
            <span className="text-white">AI Solutions for</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
              Enterprise
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-6"
          >
            We architect, build, and scale production-ready AI systems that drive measurable business outcomes 
            for forward-thinking organizations worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 lg:mb-16 px-4 sm:px-0"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  Get Free AI Audit
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </Link>
            <Link href="/demos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10 w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3 text-gray-300 group-hover:text-blue-300">
                  View Live Demos
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
{/* Continuous Moving Logos Section - Dark Theme */}
<section className="py-8 lg:py-16 bg-slate-800/50 border-y border-slate-700 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center text-gray-400 text-xs lg:text-sm uppercase tracking-widest mb-6 lg:mb-12 font-medium px-4"
    >
      Powered by Industry-Leading Technologies
    </motion.p>
    
    {/* First Row - Left to Right */}
    <div className="flex overflow-hidden mb-4 lg:mb-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...aiLogosRow1, ...aiLogosRow1].map((logo, index) => (
          <div key={index} className="mx-5 flex items-center justify-center group">
            <div className="w-28 h-16 bg-white rounded-xl shadow-lg border border-white/30 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25 hover:border-blue-400 hover:scale-105 hover:bg-white/95">
              {/* Professional Logo Container */}
              <div className="relative w-20 h-10 flex items-center justify-center p-1">
                <Image 
                  src={logo.path} 
                  alt={logo.name}
                  width={80}
                  height={40}
                  className="h-9 w-auto object-contain transition-all duration-500 group-hover:scale-110"
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
    <div className="flex overflow-hidden mb-8">
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {[...aiLogosRow2, ...aiLogosRow2].map((logo, index) => (
          <div key={index} className="mx-5 flex items-center justify-center group">
            <div className="w-28 h-16 bg-white rounded-xl shadow-lg border border-white/30 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/25 hover:border-cyan-400 hover:scale-105 hover:bg-white/95">
              {/* Professional Logo Container */}
              <div className="relative w-20 h-10 flex items-center justify-center p-1">
                <Image 
                  src={logo.path} 
                  alt={logo.name}
                  width={80}
                  height={40}
                  className="h-9 w-auto object-contain transition-all duration-500 group-hover:scale-110"
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
        {[...aiLogosRow3, ...aiLogosRow3].map((logo, index) => (
          <div key={index} className="mx-5 flex items-center justify-center group">
            <div className="w-28 h-16 bg-white rounded-xl shadow-lg border border-white/30 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400 hover:scale-105 hover:bg-white/95">
              {/* Professional Logo Container */}
              <div className="relative w-20 h-10 flex items-center justify-center p-1">
                <Image 
                  src={logo.path} 
                  alt={logo.name}
                  width={80}
                  height={40}
                  className="h-9 w-auto object-contain transition-all duration-500 group-hover:scale-110"
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

      {/* Services Section - Dark Theme */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
       <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs lg:text-sm font-medium mb-3 lg:mb-4 border border-blue-500/20">
              Our Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-sm lg:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              End-to-end AI development services designed to solve complex business challenges and drive innovation at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link href={service.href}>
                  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-slate-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-6">
                      <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-xl lg:text-2xl transition-transform duration-300 group-hover:scale-110 flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-4 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs lg:text-base text-gray-400 leading-relaxed mb-3 lg:mb-4 font-light">
                          {service.description}
                        </p>
                        <ul className="space-y-1.5 lg:space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-xs lg:text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full mr-2 lg:mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-2 mt-3 lg:mt-4 text-blue-400 font-medium text-xs lg:text-sm">
                          <span>Learn more</span>
                          <svg className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Theme */}
      <section className="py-8 lg:py-20 bg-slate-800/30">
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
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-slate-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-2xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 lg:mb-3">
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

      {/* Case Studies Section - Dark Theme */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
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
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-slate-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
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
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
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
                className="relative text-center bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-slate-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-base lg:text-xl font-bold mb-3 lg:mb-6 mx-auto">
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
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500/30 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Dark Theme */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-sm lg:text-xl text-blue-200 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Lets discuss your vision and build AI solutions that drive real competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-white rounded-xl text-slate-900 font-semibold text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                    Start Your Project
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
              <Link href="/demos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/30 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2 lg:gap-3 text-white">
                    Schedule Demo Call
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

      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee-slow 45s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;