"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const RecentProjects: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "PropertyPulse AI",
      category: "AI Automation",
      description: "Real estate bot with GHL integration for instant property matching",
      image: "/projects/automation1-Propertypulse.jpeg",
      technologies: ["n8n", "GoHighLevel", "AI"],
      badge: "Live",
    },
    {
      id: 2,
      title: "Smart Appointment Bot",
      category: "AI Automation",
      description: "Intelligent scheduling system with zero double-booking",
      image: "/projects/automation2-appointment-booking.jpeg",
      technologies: ["n8n", "Calendar API", "Twilio"],
      badge: "Live",
    },
    {
      id: 3,
      title: "LeadIntel Campaign Engine",
      category: "AI Automation",
      description: "AI-powered lead intelligence with personalized campaigns",
      image: "/projects/automation3- LeadIntel-Campaign-Engine.jpeg",
      technologies: ["n8n", "GPT-4", "Web Scraping"],
      badge: "Live",
    },
    {
      id: 4,
      title: "RankGrid AI",
      category: "SEO Automation",
      description: "Automated local SEO reporting with geo-grid ranking",
      image: "/projects/automation4-Automated-Local-SEO-Report-Engine.jpeg",
      technologies: ["n8n", "Google Maps API", "PDF Gen"],
      badge: "Live",
    },
    {
      id: 5,
      title: "Advanced Web Scraper",
      category: "Data Automation",
      description: "Enterprise-grade scraping with anti-bot bypass",
      image: "/projects/automation5-Advance-Website-Scraping-Automation.png",
      technologies: ["n8n", "Puppeteer", "Proxy"],
      badge: "Live",
    },
    {
      id: 6,
      title: "AI Facial Analyzer",
      category: "Computer Vision",
      description: "Real-time facial recognition and emotion detection system",
      image: "/projects/ai-facial-analyzer.jpg",
      technologies: ["PyTorch", "OpenCV", "FastAPI"],
      badge: "AI Model",
    },
    {
      id: 7,
      title: "Crypto Price Predictor",
      category: "Predictive AI",
      description: "ML model forecasting cryptocurrency price movements",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      technologies: ["TensorFlow", "LSTM", "Python"],
      badge: "AI Model",
    },
    {
      id: 8,
      title: "Restaurant Staff Tracker",
      category: "Computer Vision",
      description: "AI-powered staff detection using existing camera feeds",
      image: "/projects/restaurant-camera-ai.png",
      technologies: ["YOLO", "Computer Vision", "Edge AI"],
      badge: "AI Model",
    },
  ];

  // Triplicate so the loop is seamless at any pause point
  const looped = [...projects, ...projects, ...projects];

  const CARD_W_MOBILE = 190;
  const GAP_MOBILE = 12;
  const CARD_W = 320;
  const GAP = 24;
  const TOTAL_MOBILE = projects.length * (CARD_W_MOBILE + GAP_MOBILE);
  const TOTAL = projects.length * (CARD_W + GAP);

  return (
    <section className="py-10 lg:py-20 bg-gradient-to-br from-zinc-950 via-orange-950/30 to-zinc-950 overflow-hidden border-y border-zinc-800/50">
      <style>{`
        @keyframes marquee-mobile {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${TOTAL_MOBILE}px); }
        }
        @keyframes marquee-desktop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${TOTAL}px); }
        }
        .marquee-track {
          animation: marquee-mobile 24s linear infinite;
          will-change: transform;
          gap: ${GAP_MOBILE}px;
          padding-left: 12px;
        }
        @media (min-width: 640px) {
          .marquee-track {
            animation: marquee-desktop 40s linear infinite;
            gap: ${GAP}px;
            padding-left: 16px;
          }
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
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
            Our Latest{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world AI solutions delivering measurable results for our clients
          </p>
          {/* Mobile hint */}
          <p className="sm:hidden mt-2 text-[11px] font-medium" style={{ color: "rgba(255,165,0,0.55)" }}>
            ✋ Hold to pause
          </p>
        </motion.div>
      </div>

      {/* Unified animated marquee — works on both mobile & desktop */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={`marquee-track flex${paused ? " paused" : ""}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            onTouchCancel={() => setPaused(false)}
          >
            {looped.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="w-[190px] sm:w-[320px] flex-shrink-0"
              >
                <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 h-full group cursor-default">
                  {/* Badge */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg">
                      {project.badge}
                    </span>
                  </div>
                  {/* Image */}
                  <div className="relative h-28 sm:h-44 overflow-hidden bg-zinc-950">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-3 sm:p-5">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-orange-400 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-1 mb-1.5 sm:mb-2 group-hover:text-orange-300 transition-colors line-clamp-1">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2.5 sm:mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 text-[10px] sm:text-[11px] rounded-md bg-zinc-800 text-gray-300 border border-zinc-700">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8 lg:mt-10 px-4">
        <Link href="/portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50"
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
