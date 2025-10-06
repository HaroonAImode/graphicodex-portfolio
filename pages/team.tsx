"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Haroon",
      role: "Lead AI Engineer & Founder",
      photo: "/team1.jpg",
      expertise: ["AI Agents", "LLM Fine-tuning", "MLOps", "System Architecture"],
      description: "10+ years in AI/ML with expertise in building production-ready AI systems and leading technical teams.",
      experience: "12+",
      gradient: "from-purple-500 to-blue-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Fassih Shahzad",
      role: "Frontend Developer",
      photo: "/team2.jpg",
      expertise: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "Specialized in building responsive, high-performance web interfaces for AI applications.",
      experience: "6 years",
      gradient: "from-blue-500 to-cyan-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "Atif Khawaja",
      role: "Backend Developer",
      photo: "/team3.jpg",
      expertise: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
      description: "Expert in scalable backend systems and API development for AI-powered applications.",
      experience: "8 years",
      gradient: "from-cyan-500 to-teal-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Abdul Wassey",
      role: "ML Specialist",
      photo: "/team4.jpg",
      expertise: ["Computer Vision", "NLP", "PyTorch", "Research"],
      description: "PhD in Machine Learning with focus on advanced model architectures and research applications.",
      experience: "9 years",
      gradient: "from-teal-500 to-green-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 5,
      name: "Khawaja saab",
      role: "n8n Automation Expert",
      photo: "/team5.jpg",
      expertise: ["n8n", "Make", "Zapier", "Workflow Automation"],
      description: "Specialized in creating complex automation workflows and integration pipelines for businesses.",
      experience: "5 years",
      gradient: "from-green-500 to-emerald-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 6,
      name: "Mian taha",
      role: "Full Stack Developer",
      photo: "/team6.jpg",
      expertise: ["React Native", "Firebase", "AWS", "Mobile Apps"],
      description: "Full stack developer focused on mobile applications and cross-platform AI solutions.",
      experience: "7 years",
      gradient: "from-emerald-500 to-blue-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 7,
      name: "Raja Haroon",
      role: "AI Applications Developer",
      photo: "/team7.jpg",
      expertise: ["LangChain", "Vector DBs", "AI Agents", "RAG Systems"],
      description: "Specialized in developing intelligent AI applications and agent-based systems.",
      experience: "4 years",
      gradient: "from-blue-500 to-purple-500",
      linkedin: "#",
      github: "#"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", description: "Successful AI implementations" },
    { number: "12+", label: "Years Experience", description: "Collective team experience" },
    { number: "15+", label: "Technologies", description: "Mastered tools & frameworks" },
    { number: "100%", label: "Client Satisfaction", description: "Based on project delivery" }
  ];

  const technologies = [
    { category: "AI & ML", items: ["OpenAI", "LangChain", "PyTorch", "Hugging Face", "TensorFlow"] },
    { category: "Development", items: ["React", "Next.js", "Node.js", "Python", "TypeScript"] },
    { category: "Automation", items: ["n8n", "Make", "Zapier", "Airflow", "FastAPI"] },
    { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"] }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
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
            <span className="text-sm font-medium text-blue-300">Meet the Experts</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expert
            </span>{" "}
            Team
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Meet the talented professionals behind our AI solutions. A diverse team of experts 
            dedicated to delivering cutting-edge artificial intelligence applications.
          </motion.p>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                Work With Our Team
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
              >
                View Our Work
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

      {/* Team Grid */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experts
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              A diverse team of specialists working together to deliver exceptional AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  {/* Photo & Basic Info */}
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      {/* Profile Picture Container */}
                      <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-slate-600 group-hover:border-blue-500 transition-colors duration-300">
                        <div className={`w-full h-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                          {member.photo ? (
                            <img 
                              src={member.photo} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            member.name.split(' ').map(n => n[0]).join('')
                          )}
                        </div>
                      </div>
                      
                      {/* Experience Badge */}
                      
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light line-clamp-3">
                    {member.description}
                  </p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 3).map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full border border-slate-600">
                          +{member.expertise.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-3 border-t border-slate-700">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.linkedin}
                      className="p-2 bg-slate-700/50 rounded-xl hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.github}
                      className="p-2 bg-slate-700/50 rounded-xl hover:bg-gray-500/20 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Stack
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              We work with industry-leading technologies to build robust, scalable AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-4 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-2 bg-slate-700/50 text-gray-300 text-sm rounded-xl border border-slate-600 transition-all duration-300 hover:bg-slate-600/50 hover:border-cyan-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Our Team?
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Lets connect and discuss how our expert team can bring your AI vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-xl text-slate-900 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  Start Collaboration
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  See Our Work
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

export default TeamPage;