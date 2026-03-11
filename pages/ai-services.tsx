"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AIServiceCard from "../components/AIServiceCard";
import Link from "next/link";

const AIServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const services = useMemo(() => [
    {
      id: "agents",
      title: "AI Agents & Conversational Assistants",
      description: "Deploy 24/7 AI agents that qualify leads, answer customer queries, and book appointments — automatically, without human involvement.",
      icon: "🤖",
      features: [
        "Custom chatbot development & deployment",
        "Retrieval-Augmented Generation (RAG) systems",
        "Multi-channel support (web, WhatsApp, SMS)",
        "Lead qualification & automated follow-up",
        "Appointment scheduling integration",
        "Context-aware conversation memory",
        "Multi-language support",
        "CRM & helpdesk integration"
      ],
      technologies: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "Pinecone", "WhatsApp API", "Twilio", "n8n", "GoHighLevel"],
      href: "/services/agents",
      gradient: "from-orange-500 to-amber-500",
      color: "#a78bfa",
      category: "agents",
      keywords: ["chatbot", "conversational", "assistant", "voice", "messaging", "support", "customer service", "virtual agent", "lead", "appointment", "booking"]
    },
    {
      id: "automation",
      title: "AI Workflow Automation",
      description: "Automate repetitive business operations end-to-end — from lead follow-up to data processing — so your team can focus on growth.",
      icon: "⚙️",
      features: [
        "Business workflow mapping & automation",
        "n8n & Make workflow development",
        "CRM automation & lead nurturing",
        "Email & SMS automation sequences",
        "Data processing & reporting pipelines",
        "Invoice & document automation",
        "Multi-step task automation",
        "Real-time webhook & trigger systems"
      ],
      technologies: ["n8n", "Make", "GoHighLevel", "Zapier", "Google Workspace", "Slack", "REST APIs", "Webhooks"],
      href: "/services/automation",
      gradient: "from-orange-500 to-amber-500",
      color: "#34d399",
      category: "automation",
      keywords: ["automation", "workflow", "n8n", "make", "zapier", "crm", "email", "sms", "trigger", "webhook", "repetitive", "manual", "process"]
    },
    {
      id: "models",
      title: "Custom AI Model Development",
      description: "AI models trained on your specific business data for classification, detection, and prediction — tasks no generic AI tool can solve.",
      icon: "⚡",
      features: [
        "LLM fine-tuning on domain-specific data",
        "Image & document classification models",
        "Sentiment & intent analysis",
        "Custom scoring & ranking systems",
        "Data preprocessing pipelines",
        "Model deployment & API serving",
        "Performance benchmarking & evaluation",
        "Model versioning & governance"
      ],
      technologies: ["PyTorch", "TensorFlow", "Hugging Face", "MLflow", "FastAPI", "Python", "ONNX", "Transformers"],
      href: "/services/models",
      gradient: "from-orange-500 to-amber-500",
      color: "#38bdf8",
      category: "models",
      keywords: ["fine-tuning", "training", "machine learning", "neural networks", "custom model", "ai model", "classification", "prediction", "domain specific"]
    },
    {
      id: "integrations",
      title: "AI Integrations",
      description: "Connect AI capabilities directly into your CRM, ERP, website, or existing business tools — without rebuilding anything from scratch.",
      icon: "🔗",
      features: [
        "CRM & ERP AI integration",
        "Custom REST API development",
        "Real-time data sync pipelines",
        "Third-party service connectors",
        "Legacy system modernization",
        "Webhook implementations",
        "Database integration & management",
        "Multi-platform synchronization"
      ],
      technologies: ["FastAPI", "GraphQL", "PostgreSQL", "Redis", "Stripe", "HubSpot", "Salesforce", "GoHighLevel"],
      href: "/services/integrations",
      gradient: "from-orange-600 to-amber-500",
      color: "#10b981",
      category: "integrations",
      keywords: ["integration", "api", "crm", "erp", "connector", "sync", "webhook", "database", "salesforce", "hubspot", "gohighlevel"]
    },
    {
      id: "computer-vision",
      title: "Computer Vision Systems",
      description: "AI systems that analyze images, video feeds, and documents in real time — for monitoring, quality control, and intelligent data extraction.",
      icon: "👁️",
      features: [
        "Object detection & recognition",
        "Staff & activity monitoring",
        "Quality control defect detection",
        "Facial analysis & recognition",
        "OCR & document data extraction",
        "Video stream analysis",
        "Edge AI deployment",
        "Real-time alert systems"
      ],
      technologies: ["YOLO v8", "OpenCV", "TensorRT", "MediaPipe", "Tesseract", "FastAPI", "Docker", "Edge AI"],
      href: "/services/computer-vision",
      gradient: "from-red-500 to-pink-500",
      color: "#f472b6",
      category: "vision",
      keywords: ["computer vision", "image", "video", "detection", "ocr", "camera", "monitoring", "facial recognition", "quality control", "defect", "restaurant"]
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics & Forecasting",
      description: "Turn your historical business data into forecasts and early-warning signals — so you act on opportunities before they disappear.",
      icon: "📈",
      features: [
        "Sales & revenue forecasting",
        "Customer churn prediction",
        "Demand & inventory planning",
        "Risk assessment models",
        "Anomaly detection systems",
        "Market trend analysis",
        "Predictive lead scoring",
        "Automated reporting dashboards"
      ],
      technologies: ["Prophet", "XGBoost", "LightGBM", "Scikit-learn", "Pandas", "NumPy", "PostgreSQL", "Plotly"],
      href: "/services/predictive-analytics",
      gradient: "from-yellow-500 to-amber-500",
      color: "#fbbf24",
      category: "analytics",
      keywords: ["predictive", "forecasting", "analytics", "time series", "prediction", "trends", "churn", "demand", "revenue", "sales forecast"]
    }
  ], []);

  const categories = [
    { id: "all", name: "All Services", icon: "🌟", count: services.length },
    { id: "agents", name: "AI Agents", icon: "🤖", count: services.filter(s => s.category === "agents").length },
    { id: "automation", name: "Automation", icon: "⚙️", count: services.filter(s => s.category === "automation").length },
    { id: "models", name: "Custom Models", icon: "⚡", count: services.filter(s => s.category === "models").length },
    { id: "integrations", name: "Integrations", icon: "🔗", count: services.filter(s => s.category === "integrations").length },
    { id: "vision", name: "Computer Vision", icon: "👁️", count: services.filter(s => s.category === "vision").length },
    { id: "analytics", name: "Analytics", icon: "📈", count: services.filter(s => s.category === "analytics").length },
  ];

  // Commenting out unused processSteps variable
  /*
  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Deep dive into your business needs and technical requirements"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Architect the optimal AI solution with clear deliverables"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build, test, and refine with continuous feedback loops"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment with ongoing maintenance"
    }
  ];
  */

  const technologies = [
    { category: "AI Frameworks", items: ["OpenAI", "Anthropic", "Hugging Face", "LangChain", "LlamaIndex", "TensorFlow", "PyTorch"] },
    { category: "Development", items: ["React", "Next.js", "Vue.js", "Node.js", "Python", "FastAPI", "GraphQL"] },
    { category: "Vector Databases", items: ["Pinecone", "Weaviate", "Chroma", "Qdrant", "Milvus", "Redis"] },
    { category: "Automation", items: ["n8n", "Make", "Zapier", "Airflow", "Prefect", "Celery"] },
    { category: "Cloud Platforms", items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Vercel", "Netlify"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana", "MLflow", "Weights & Biases", "Evidently AI", "DataDog"] }
  ];

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = searchQuery === "" || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === "all" || service.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, services]);

  // Find closest matches for search
  const closestMatches = useMemo(() => {
    if (searchQuery.length < 2) return [];
    
    const matches = services.map(service => {
      const titleMatch = service.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descMatch = service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const keywordMatch = service.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      let score = 0;
      if (titleMatch) score += 3;
      if (descMatch) score += 2;
      if (keywordMatch) score += 1;
      
      return { ...service, score };
    }).filter(service => service.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    
    return matches;
  }, [searchQuery, services]);

  const stats = [
    { number: "50+", label: "AI Systems Deployed", description: "Across various industries" },
    { number: "40\u201370%", label: "Workload Reduction", description: "Achieved by our clients" },
    { number: "24/7", label: "Automated Operations", description: "AI works while you sleep" },
    { number: "3\u20136", label: "Weeks to Deliver", description: "From kickoff to go-live" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Hero Section with Search */}
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
            <span className="text-sm font-medium text-orange-300">AI Automation & Agent Development</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            AI Automation Services{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              That Get Results
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We build AI agents and automation systems that reduce workload by 40–70%, generate more leads, and help your business run on autopilot.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search AI services... (e.g., chatbot, computer vision, generative AI, website integration)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
              />
              <svg 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Search Suggestions */}
            <AnimatePresence>
              {searchQuery.length >= 2 && closestMatches.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 right-0 mt-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-2xl shadow-2xl z-20 max-w-2xl mx-auto"
                >
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-3">Quick matches:</p>
                    {closestMatches.map((match) => (
                      <button
                        key={match.id}
                        onClick={() => {
                          setSearchQuery(match.title);
                          setActiveCategory(match.category);
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-zinc-900/50 transition-all duration-200 flex items-center gap-3 group"
                      >
                        <span className="text-2xl">{match.icon}</span>
                        <div className="flex-1">
                          <p className="text-white font-medium group-hover:text-orange-300 transition-colors">
                            {match.title}
                          </p>
                          <p className="text-sm text-gray-400 truncate">
                            {match.description.substring(0, 60)}...
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30"
              >
                Get Custom Proposal
              </motion.button>
            </Link>
              <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10"
              >
                View Portfolio
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

      {/* Category Filters */}
      <section className="py-8 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center scrollbar-none">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-zinc-900/50 text-gray-300 hover:bg-zinc-900/50 hover:text-white border border-zinc-700"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id ? "bg-white/20" : "bg-zinc-700"
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Search Results */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {searchQuery ? (
                <>
                  Search Results for &quot;<span className="text-orange-400">{searchQuery}</span>&quot;
                </>
              ) : (
                <>
                  Our <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">AI Service Portfolio</span>
                </>
              )}
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </motion.div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <motion.div
                key="services-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredServices.map((service) => (
                  <AIServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    features={service.features}
                    technologies={service.technologies}
                    gradient={service.gradient}
                    color={service.color}
                    dimmed={hoveredServiceId !== null && hoveredServiceId !== service.id}
                    onHoverStart={() => setHoveredServiceId(service.id)}
                    onHoverEnd={() => setHoveredServiceId(null)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  We couldn&apos;t find any services matching your search. Try different keywords or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl text-white font-medium transition-colors duration-300"
                >
                  Show All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              We work with industry-leading technologies to build robust, scalable AI solutions across all domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-zinc-900/50 text-gray-300 text-sm rounded-xl border border-zinc-700 transition-all duration-300 hover:bg-zinc-800/50 hover:border-orange-500/30"
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
              Ready to Start Your AI Project?
            </h2>
            <p className="text-lg sm:text-xl text-orange-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Let&apos;s discuss your requirements and build an AI solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-xl text-zinc-950 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/demos">
                 <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;