"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "Enterprise AI Customer Support",
      description: "Intelligent conversational agent handling 80% of customer queries with 65% cost reduction for Fortune 500 retail client.",
      fullDescription: "Developed a comprehensive AI-powered customer support system that reduced human agent workload by 80% while maintaining 94% customer satisfaction. The system integrates with existing CRM, uses RAG for knowledge base retrieval, and provides real-time analytics.",
      image: "/project1.png",
      category: "ai-agents",
      technologies: ["OpenAI GPT-4", "LangChain", "Vector DB", "WebSocket", "React", "Node.js"],
      results: ["65% cost reduction", "80% query automation", "94% satisfaction", "24/7 availability"],
      client: "Fortune 500 Retail",
      duration: "12 weeks",
      status: "Completed",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      name: "Financial Document Processing AI",
      description: "Custom NLP models for automated financial document analysis, reducing processing time from 4 hours to 8 minutes.",
      fullDescription: "Built a sophisticated document processing pipeline that automatically extracts, classifies, and analyzes financial documents. The system handles PDFs, scanned images, and structured data with 99.2% accuracy, significantly reducing manual processing time.",
      image: "/project2.png",
      category: "custom-models",
      technologies: ["PyTorch", "Hugging Face", "Computer Vision", "FastAPI", "Docker", "AWS"],
      results: ["4hrs → 8mins processing", "99.2% accuracy", "Zero manual intervention", "Real-time validation"],
      client: "Global Banking Institution",
      duration: "16 weeks",
      status: "Completed",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "E-commerce Personalization Engine",
      description: "AI-driven product recommendations and personalized shopping experiences increasing conversion by 32%.",
      fullDescription: "Implemented a real-time personalization engine that analyzes user behavior, purchase history, and contextual data to deliver hyper-personalized product recommendations. The system integrates with existing e-commerce platforms and provides A/B testing capabilities.",
      image: "/project3.png",
      category: "custom-models",
      technologies: ["TensorFlow", "Redis", "React", "GraphQL", "Kubernetes", "Prometheus"],
      results: ["32% conversion lift", "45% cart value increase", "Real-time personalization", "Multi-platform support"],
      client: "Leading E-commerce Platform",
      duration: "10 weeks",
      status: "Completed",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      id: 4,
      name: "Healthcare Automation Platform",
      description: "n8n + Make integration automating patient intake and appointment scheduling for healthcare provider.",
      fullDescription: "Developed a comprehensive automation platform that streamlines patient intake, appointment scheduling, and follow-up communications. The system integrates with EHR systems, calendar APIs, and communication platforms while maintaining HIPAA compliance.",
      image: "/project4.png",
      category: "integrations",
      technologies: ["n8n", "Make", "FastAPI", "PostgreSQL", "React Native", "Twilio"],
      results: ["70% time savings", "Zero scheduling errors", "Automated reminders", "HIPAA compliant"],
      client: "Healthcare Provider Network",
      duration: "8 weeks",
      status: "Completed",
      gradient: "from-teal-500 to-green-500"
    },
    {
      id: 5,
      name: "Manufacturing Quality Control AI",
      description: "Computer vision system for real-time defect detection in manufacturing process with 99.8% accuracy.",
      fullDescription: "Built a real-time quality control system using computer vision and machine learning to detect manufacturing defects. The system processes video streams from multiple production lines and provides instant alerts for quality issues.",
      image: "/project5.png",
      category: "custom-models",
      technologies: ["PyTorch", "OpenCV", "TensorRT", "Docker", "Kubernetes", "Grafana"],
      results: ["99.8% detection accuracy", "Real-time processing", "Zero false positives", "Predictive maintenance"],
      client: "Manufacturing Conglomerate",
      duration: "14 weeks",
      status: "Completed",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      name: "Real Estate Virtual Assistant",
      description: "AI-powered virtual assistant handling property inquiries, scheduling, and lead qualification for real estate agency.",
      fullDescription: "Created an intelligent virtual assistant that handles property inquiries, schedules viewings, qualifies leads, and provides market insights. The system integrates with CRM, calendar systems, and property databases.",
      image: "/project6.png",
      category: "ai-agents",
      technologies: ["OpenAI", "LangChain", "Vector DB", "React", "Node.js", "MongoDB"],
      results: ["50% lead qualification", "24/7 availability", "Multi-language support", "CRM integration"],
      client: "Real Estate Agency Chain",
      duration: "9 weeks",
      status: "Completed",
      gradient: "from-emerald-500 to-blue-500"
    }
  ];

  const filters = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "ai-agents", name: "AI Agents", count: projects.filter(p => p.category === "ai-agents").length },
    { id: "custom-models", name: "Custom Models", count: projects.filter(p => p.category === "custom-models").length },
    { id: "integrations", name: "Integrations", count: projects.filter(p => p.category === "integrations").length }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", description: "Across various industries" },
    { number: "98%", label: "Client Satisfaction", description: "Based on client feedback" },
    { number: "2-16", label: "Weeks Delivery", description: "Average project timeline" },
    { number: "40%", label: "Avg. Efficiency Gain", description: "For our clients" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-300">Project Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-gray-600 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-slate-800/30 border-y border-slate-700">
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
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
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
<section className="py-12 bg-slate-900 border-b border-slate-700">
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
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-600"
          }`}
        >
          <span>{filter.name}</span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              activeFilter === filter.id ? "bg-white/20" : "bg-slate-600"
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
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} showcasing our expertise in AI development and implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                        {project.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    {/* Client & Duration */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{project.client}</span>
                      <span>{project.duration}</span>
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                          >
                            {result}
                          </span>
                        ))}
                        {project.results.length > 2 && (
                          <span className="px-3 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full border border-slate-600">
                            +{project.results.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full border border-slate-600">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details */}
                    <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                      <span>View case study</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
                        className="p-2 hover:bg-slate-700 rounded-xl transition-colors"
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
                        <div className="bg-slate-700/50 rounded-2xl p-6 mb-6">
                          <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                          <p className="text-gray-300 leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div className="bg-slate-700/50 rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.results.map((result, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-slate-600/50 rounded-xl">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-300">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-6">
                        <div className="bg-slate-700/50 rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span 
                                key={index}
                                className="px-3 py-2 bg-slate-600/50 text-gray-300 text-sm rounded-xl border border-slate-500"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">
                          <h3 className="text-xl font-bold text-white mb-4">Interested in Similar?</h3>
                          <p className="text-gray-300 mb-4">
                            Lets discuss how we can implement similar AI solutions for your business.
                          </p>
                          <Link href="/contact">
                            <button className="w-full px-4 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
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
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Lets work together to build AI solutions that deliver real business impact and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-xl text-slate-900 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
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

      <Footer />
    </div>
  );
};

export default PortfolioPage;