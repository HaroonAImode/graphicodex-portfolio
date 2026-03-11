"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const OtherServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      name: "Website Development",
      description: "Custom, responsive websites built with performance and conversion in mind. From landing pages to full business sites, built to rank and convert.",
      shortDescription: "Fast, responsive business websites",
      features: [
        "Custom responsive design",
        "SEO-optimized structure",
        "CMS integration (if needed)",
        "Contact forms & lead capture",
        "Performance optimized"
      ],
      deliverables: ["Full Website", "Mobile Responsive", "SEO Setup", "Analytics Integration"],
      timeline: "1–3 weeks",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 2,
      name: "AI Website Integrations",
      description: "Embed AI-powered capabilities directly into your existing website — chatbots, lead capture bots, product recommendation engines, and more.",
      shortDescription: "Add AI features to your existing site",
      features: [
        "AI chatbot integration",
        "Smart lead capture forms",
        "Product recommendation AI",
        "FAQ automation",
        "API connection to your systems"
      ],
      deliverables: ["Deployed Chatbot/Widget", "Backend Integration", "Analytics Dashboard", "Documentation"],
      timeline: "1–2 weeks",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 3,
      name: "AI-Powered Web Applications",
      description: "Full-stack web apps with AI at their core — dashboards, internal tools, client portals, and SaaS products powered by intelligent automation.",
      shortDescription: "Full-stack apps with AI built in",
      features: [
        "React / Next.js frontend",
        "FastAPI or Node.js backend",
        "AI model integration",
        "Database design & setup",
        "Authentication & roles"
      ],
      deliverables: ["Deployed Web App", "Admin Dashboard", "API Layer", "Documentation"],
      timeline: "3–8 weeks",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      name: "UI/UX for AI Products",
      description: "Interface design specifically built for AI-driven tools — dashboards, agent UIs, and data-heavy products designed for clarity and usability.",
      shortDescription: "Interfaces designed for AI tools",
      features: [
        "AI dashboard design",
        "Data visualization UI",
        "Agent interaction flows",
        "Responsive prototyping",
        "Design system creation"
      ],
      deliverables: ["Figma Designs", "Interactive Prototype", "Design System", "Dev Handoff"],
      timeline: "1–3 weeks",
      gradient: "from-orange-500 to-amber-600"
    }
  ];

  const stats = [
    { number: "50+", label: "AI Systems Deployed", description: "Across real industries" },
    { number: "3–8", label: "Weeks to Launch", description: "Typical project timeline" },
    { number: "100%", label: "Client Satisfaction", description: "Based on project delivery" },
    { number: "5+", label: "Technologies Used", description: "Per project on average" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Scoping",
      description: "We review your goals, existing systems, and define project requirements together"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "UI/UX design and technical architecture planned before any code is written"
    },
    {
      step: "03",
      title: "Build & Integrate",
      description: "Development with regular updates and reviews at each milestone"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment, testing, and post-launch support to ensure everything runs smoothly"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-orange-950 to-zinc-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/8 rounded-full mb-6 border border-orange-500/20"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-orange-300">Digital Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Websites, web applications, and AI integrations — built to work, built to perform, and built to grow with your business.
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
                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30"
              >
                Start a Project
              </motion.button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-gray-600 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10"
              >
                Start a Project
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

      {/* Services Grid */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Digital
              </span>{" "}
              Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Four focused solutions that complement our AI work — covering the web layer that your AI systems live on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden h-full">
                  {/* Service Icon */}
                  <div className="relative h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg font-bold`}>
                      {service.name.split(' ').map((word: string) => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Whats Included:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables & Timeline */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{service.deliverables.length} deliverables</span>
                      <span>{service.timeline}</span>
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                      <div className="block w-full text-center px-4 py-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 font-medium rounded-xl border border-orange-500/30 hover:bg-orange-500/30 hover:text-white transition-all duration-300 cursor-pointer">
                        <span className="flex items-center justify-center gap-2">
                          Discuss This Service
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Build
              </span>{" "}
              Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              A structured approach that ensures your digital project is delivered on time, on scope, and ready to grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative text-center bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {step.description}
                </p>

                {/* Connecting line for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-500/30 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-orange-950 to-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Digital Foundation?
            </h2>
            <p className="text-lg sm:text-xl text-orange-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Whether you need a website, a web app, or AI embedded into your existing platform — let&apos;s scope it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-white rounded-xl text-zinc-950 font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-white/30 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  See Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OtherServicesPage;