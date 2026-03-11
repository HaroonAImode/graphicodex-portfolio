"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage: React.FC = () => {
  const quickLinks = [
    {
      icon: "🏠",
      title: "Home",
      description: "Return to homepage",
      href: "/",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: "💡",
      title: "AI Services",
      description: "Explore our AI solutions",
      href: "/ai-services",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: "🎯",
      title: "Other Services",
      description: "Web, Mobile & More",
      href: "/other-services",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: "💼",
      title: "Portfolio",
      description: "View our work",
      href: "/portfolio",
      color: "from-orange-600 to-amber-500"
    },
    {
      icon: "👥",
      title: "Our Team",
      description: "Meet the experts",
      href: "/team",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "📧",
      title: "Contact Us",
      description: "Get in touch",
      href: "/contact",
      color: "from-orange-500 to-amber-600"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Mission-Driven",
      description: "We're committed to delivering AI solutions that create real business value and drive measurable results."
    },
    {
      icon: "⚡",
      title: "Innovation First",
      description: "Staying at the forefront of AI technology to provide cutting-edge solutions for our clients."
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work collaboratively with our clients, treating their challenges as our own and their success as our priority."
    },
    {
      icon: "🚀",
      title: "Excellence in Execution",
      description: "From concept to deployment, we maintain the highest standards of quality and professionalism."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "Started building AI automation solutions to solve real operational problems for small and medium businesses"
    },
    {
      year: "2023",
      title: "First Client Projects",
      description: "Delivered AI workflow automations and chatbots for our first clients across real estate and healthcare industries"
    },
    {
      year: "2024",
      title: "Full AI Dev Team",
      description: "Expanded into a dedicated AI development team covering agents, workflow automation, computer vision, and custom models"
    },
    {
      year: "2025",
      title: "50+ AI Systems Deployed",
      description: "Over 50 live AI automation systems deployed across real estate, clinics, marketing agencies, and e-commerce businesses"
    }
  ];

  const stats = [
    { number: "50+", label: "AI Systems Deployed", description: "Across real-world industries" },
    { number: "40–70%", label: "Workload Reduction", description: "Achieved for our clients" },
    { number: "99%", label: "Client Satisfaction", description: "Based on project feedback" },
    { number: "5", label: "Core AI Specialists", description: "Agents, models & automation" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      
      {/* Quick Navigation Section - Mobile Only */}
      <section className="lg:hidden py-8 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Quick Navigation</span>
            </h2>
            <p className="text-sm text-gray-400">
              Explore all sections
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <motion.div
                    className="group bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full active:scale-95"
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {link.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="relative py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-orange-950 to-zinc-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-6 border border-orange-500/20"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-orange-300">About Graphicodex</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Building AI Systems{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              That Work for Your Business
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We are a dedicated team of AI engineers, developers, and automation specialists who build practical systems that eliminate manual work, generate more leads, and let businesses run on autopilot.
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
                Start Your Journey
              </motion.button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-gray-600 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-6 border border-orange-500/20">
                <span className="text-lg">🎯</span>
                <span className="text-sm font-medium text-orange-300">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Making AI{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Accessible
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
                We believe every business — regardless of size — can benefit from AI automation. Our mission is to build practical AI systems that eliminate repetitive work, generate more leads, and let teams focus on what actually matters.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                From service businesses to SaaS companies, we build AI solutions that create immediate, measurable results: fewer manual tasks, faster response times, and more revenue generated automatically.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-6 border border-orange-500/20">
                <span className="text-lg">🔭</span>
                <span className="text-sm font-medium text-orange-300">Our Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Shaping the{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
                We envision a future where AI automation is a standard part of every business — where no team member wastes time on repetitive work, and every operation runs smarter and faster.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Our vision is to be the go-to AI automation partner for businesses across industries — helping them deploy practical systems that save time, reduce costs, and generate results from day one.
              </p>
            </motion.div>
          </div>
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

      {/* Values Section */}
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
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              The principles that guide our work and define our approach to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 h-full text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              From our foundation to becoming a trusted AI solutions provider.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - left-aligned on mobile, centered on desktop */}
            <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 w-0.5 top-0 bottom-0 bg-gradient-to-b from-orange-500 to-amber-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-6 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start sm:items-center ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 mt-6 sm:mt-0 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full border-4 border-zinc-950 z-10 flex-shrink-0"></div>

                  {/* Content */}
                  <div className={`w-full pl-12 sm:pl-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-sm font-semibold text-orange-400 mb-1 sm:mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 font-light">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden sm:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              Ready to Build the Future Together?
            </h2>
            <p className="text-lg sm:text-xl text-orange-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Join us in creating intelligent solutions that transform businesses and shape tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-white rounded-xl text-zinc-950 font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  Start Collaboration
                </motion.button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-white/30 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
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

export default AboutPage;