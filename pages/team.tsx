"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Haroon",
      role: "AI Systems Engineer",
      photo: "/team1.jpg",
      expertise: ["Full Stack Development", "AI Integration", "System Architecture", "API Development"],
      description: "Specializes in AI integrations, LLM deployment, and full-stack automation platforms. Leads technical architecture for client projects.",
      experience: "AI Systems",
      gradient: "from-orange-500 to-amber-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Fassih Shahzad",
      role: "Automation Engineer",
      photo: "/team2.jpg",
      expertise: ["Workflow Automation", "n8n", "Make", "System Integration"],
      description: "Expert in building business workflow automations using n8n and Make. Specializes in multi-step process automation and CRM integrations.",
      experience: "Automation",
      gradient: "from-orange-500 to-amber-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "Atif Khawaja",
      role: "Backend & AI API Developer",
      photo: "/team3.jpg",
      expertise: ["FastAPI Development", "Model Training", "Database Design", "API Architecture"],
      description: "Builds scalable backend APIs and data pipelines for AI model deployment. Expert in FastAPI, PostgreSQL, and high-performance architecture.",
      experience: "Backend AI",
      gradient: "from-orange-500 to-amber-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Abdul Wassey",
      role: "AI Agents & Automation Developer",
      photo: "/team4.jpg",
      expertise: ["AI Agents", "LangChain", "RAG Systems", "Process Automation"],
      description: "Specializes in AI agent development, RAG systems, and conversational AI using LangChain. Builds the intelligence layer in our systems.",
      experience: "AI Agents",
      gradient: "from-orange-600 to-amber-500",
      linkedin: "#",
      github: "#"
    },
    {
      id: 6,
      name: "Mian Taha",
      role: "Project Manager & Full Stack Developer",
      photo: "/team6.jpg",
      expertise: ["Project Management", "React Development", "Team Leadership", "Client Communication"],
      description: "Oversees project delivery and client communication. Also contributes to frontend development using React and Next.js.",
      experience: "Product Lead",
      gradient: "from-orange-500 to-amber-500",
      linkedin: "#",
      github: "#"
    }
  ];

  const stats = [
    { number: "50+", label: "AI Systems Built", description: "Deployed across industries" },
    { number: "5", label: "Core AI Specialists", description: "Agents, automation & models" },
    { number: "15+", label: "Technologies", description: "Mastered tools & frameworks" },
    { number: "100%", label: "Client Satisfaction", description: "Based on project delivery" }
  ];

  const technologies = [
    { 
      category: "AI & ML", 
      items: ["OpenAI", "LangChain", "PyTorch", "Hugging Face", "TensorFlow", "AI Agents"] 
    },
    { 
      category: "Development", 
      items: ["React", "Next.js", "Node.js", "Python", "TypeScript", "FastAPI"] 
    },
    { 
      category: "Automation", 
      items: ["n8n", "Make", "Zapier", "Workflow Design", "System Integration"] 
    },
    { 
      category: "Infrastructure", 
      items: ["AWS", "Docker", "PostgreSQL", "Redis", "API Gateways", "Cloud Deployment"] 
    }
  ];

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
            <span className="text-sm font-medium text-orange-300">Meet the Experts</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Expert
            </span>{" "}
            Team
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Meet the AI engineers and automation specialists behind every system we build — each focused on a specific domain to deliver real, measurable results for clients.
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
                Work With Our Team
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

      {/* Team Grid */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Experts
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              A diverse team of specialists working together to deliver exceptional AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-3 sm:p-5 lg:p-6 border border-zinc-800 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 h-full">
                  {/* Photo & Basic Info */}
                  <div className="text-center mb-3">
                    <div className="relative inline-block">
                      {/* Profile Picture */}
                      <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-zinc-700 group-hover:border-orange-500 transition-colors duration-300">
                        <div className={`w-full h-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-white text-lg sm:text-2xl font-bold relative`}>
                          {member.photo ? (
                            <Image
                              src={member.photo}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            member.name.split(' ').map(n => n[0]).join('')
                          )}
                        </div>
                      </div>

                      {/* Experience Badge */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                        <div className="px-2 py-0.5 bg-zinc-900 border border-zinc-700 rounded-full whitespace-nowrap">
                          <span className="text-[9px] sm:text-xs font-medium text-orange-400">
                            {member.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mt-2 mb-0.5 group-hover:text-orange-400 transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-medium text-[11px] sm:text-sm leading-tight">
                      {member.role}
                    </p>
                  </div>

                  {/* Description — hidden on smallest mobile, shown sm+ */}
                  <p className="hidden sm:block text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 font-light line-clamp-3">
                    {member.description}
                  </p>

                  {/* Expertise */}
                  <div className="mb-3">
                    <h4 className="text-[10px] sm:text-sm font-semibold text-white mb-1.5">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {member.expertise.slice(0, 2).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-900/50 text-gray-300 text-[9px] sm:text-xs rounded-full border border-zinc-700 leading-tight"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-900/50 text-gray-400 text-[9px] sm:text-xs rounded-full border border-zinc-700">
                          +{member.expertise.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-2 pt-2 border-t border-zinc-800">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.linkedin}
                      className="p-1.5 sm:p-2 bg-zinc-900/50 rounded-lg sm:rounded-xl hover:bg-orange-500/20 transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.github}
                      className="p-1.5 sm:p-2 bg-zinc-900/50 rounded-lg sm:rounded-xl hover:bg-gray-500/20 transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
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
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-4 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-2 bg-zinc-900/50 text-gray-300 text-sm rounded-xl border border-zinc-700 transition-all duration-300 hover:bg-zinc-800/50 hover:border-orange-500/30"
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
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-orange-950 to-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Our Team?
            </h2>
            <p className="text-lg sm:text-xl text-orange-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Lets connect and discuss how our expert team can bring your AI vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-xl text-zinc-950 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
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
    </div>
  );
};

export default TeamPage;