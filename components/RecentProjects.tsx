"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const RecentProjects: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "PropertyPulse AI",
      category: "AI Automation",
      description: "Real estate bot with GHL integration for instant property matching",
      image: "/projects/automation1-Propertypulse.jpeg",
      technologies: ["n8n", "GoHighLevel", "AI"],
      gradient: "from-orange-500 to-amber-500",
      badge: "Live",
    },
    {
      id: 2,
      title: "Smart Appointment Bot",
      category: "AI Automation",
      description: "Intelligent scheduling system with zero double-booking",
      image: "/projects/automation2-appointment-booking.jpeg",
      technologies: ["n8n", "Calendar API", "Twilio"],
      gradient: "from-orange-500 to-amber-600",
      badge: "Live",
    },
    {
      id: 3,
      title: "LeadIntel Campaign Engine",
      category: "AI Automation",
      description: "AI-powered lead intelligence with personalized campaigns",
      image: "/projects/automation3- LeadIntel-Campaign-Engine.jpeg",
      technologies: ["n8n", "GPT-4", "Web Scraping"],
      gradient: "from-green-500 to-emerald-500",
      badge: "Live",
    },
    {
      id: 4,
      title: "RankGrid AI",
      category: "SEO Automation",
      description: "Automated local SEO reporting with geo-grid ranking",
      image: "/projects/automation4-Automated-Local-SEO-Report-Engine.jpeg",
      technologies: ["n8n", "Google Maps API", "PDF Gen"],
      gradient: "from-orange-500 to-red-500",
      badge: "Live",
    },
    {
      id: 5,
      title: "Advanced Web Scraper",
      category: "Data Automation",
      description: "Enterprise-grade scraping with anti-bot bypass",
      image: "/projects/automation5-Advance-Website-Scraping-Automation.png",
      technologies: ["n8n", "Puppeteer", "Proxy"],
      gradient: "from-orange-500 to-amber-600",
      badge: "Live",
    },
    {
      id: 6,
      title: "AI Facial Analyzer",
      category: "Computer Vision",
      description: "Real-time facial recognition and emotion detection system",
      image: "/projects/ai-facial-analyzer.jpg",
      technologies: ["PyTorch", "OpenCV", "FastAPI"],
      gradient: "from-pink-500 to-rose-500",
      badge: "AI Model",
    },
    {
      id: 7,
      title: "Crypto Price Predictor",
      category: "Predictive AI",
      description: "ML model forecasting cryptocurrency price movements",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      technologies: ["TensorFlow", "LSTM", "Python"],
      gradient: "from-yellow-500 to-orange-500",
      badge: "AI Model",
    },
    {
      id: 8,
      title: "Restaurant Staff Tracker",
      category: "Computer Vision",
      description: "AI-powered staff detection using existing camera feeds",
      image: "/projects/restaurant-camera-ai.png",
      technologies: ["YOLO", "Computer Vision", "Edge AI"],
      gradient: "from-orange-600 to-amber-500",
      badge: "AI Model",
    },
  ];

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-zinc-950 via-orange-950/30 to-zinc-950 overflow-hidden border-y border-zinc-800/50">
      {/* Section Header - Fixed for better mobile visibility */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 rounded-full text-orange-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-orange-500/20">
            🚀 Portfolio Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4">
            Our Latest <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world AI solutions delivering measurable results for our clients
          </p>
        </motion.div>
      </div>

      {/* Continuous Scrolling Projects */}
      <div className="relative">
        {/* Gradient Overlays - Hidden on mobile for better scroll visibility */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none"></div>
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container - Horizontal scroll on mobile, auto-scroll on desktop */}
        <div className="overflow-x-auto lg:overflow-hidden scroll-smooth scrollbar-none">
          <motion.div
            className="flex gap-4 lg:gap-6 px-4 lg:px-0"
            animate={isPaused ? {} : {
              x: [0, -3264], // 8 cards * (384px width + 24px gap)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 80,
                ease: "linear",
              },
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-52 sm:w-72 md:w-80 lg:w-[22rem]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 h-full group">
                  {/* Badge */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20">
                    <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden bg-zinc-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 lg:p-5">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-orange-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-orange-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md bg-zinc-800/50 text-gray-300 border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-amber-600/0 group-hover:from-orange-600/10 group-hover:to-amber-600/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Mobile Scroll Hint */}
        <div className="lg:hidden text-center mt-4">
          <p className="text-xs text-gray-500">← Swipe to explore more projects →</p>
        </div>
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <Link href="/portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50"
          >
            <span className="flex items-center gap-3">
              View All Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
