"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const AIServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const services = useMemo(() => [
    {
      id: "agents",
      title: "AI Agents & Conversational AI",
      description: "Intelligent conversational agents with memory, context awareness, and multi-modal capabilities for enterprise applications.",
      icon: "🤖",
      features: [
        "Custom chatbot development & deployment",
        "Retrieval-Augmented Generation (RAG) systems",
        "Multi-turn conversation management",
        "Voice interface integration",
        "Real-time knowledge base connectors",
        "Context-aware memory systems",
        "Emotional intelligence & sentiment analysis",
        "Multi-language support"
      ],
      technologies: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "Vector Databases", "WebSocket APIs", "Speech Recognition", "Twilio", "Dialogflow"],
      href: "/services/agents",
      gradient: "from-purple-500 to-blue-500",
      category: "agents",
      keywords: ["chatbot", "conversational", "assistant", "voice", "messaging", "support", "customer service", "virtual agent"]
    },
    {
      id: "models",
      title: "Custom Model Development & Fine-tuning",
      description: "Tailored AI models fine-tuned on your specific data to solve unique business challenges with maximum accuracy.",
      icon: "⚡",
      features: [
        "LLM fine-tuning & optimization",
        "Domain-specific model training",
        "Performance benchmarking & evaluation",
        "Custom architecture design",
        "Data preprocessing pipelines",
        "Model deployment & serving",
        "Transfer learning implementation",
        "Model compression & optimization"
      ],
      technologies: ["PyTorch", "TensorFlow", "Hugging Face", "Custom Datasets", "MLflow", "Weights & Biases", "Keras", "Transformers"],
      href: "/services/models",
      gradient: "from-blue-500 to-cyan-500",
      category: "models",
      keywords: ["fine-tuning", "training", "machine learning", "neural networks", "custom model", "ai model", "transfer learning"]
    },
    {
      id: "integrations",
      title: "AI Integrations & Automation",
      description: "Seamless integration of AI capabilities into your existing workflows and automation of business processes.",
      icon: "🔗",
      features: [
        "n8n/Make workflow automation",
        "Custom REST API development",
        "CRM & ERP system integration",
        "Real-time data processing pipelines",
        "Webhook implementations",
        "Third-party service connectors",
        "Legacy system modernization",
        "Real-time synchronization"
      ],
      technologies: ["n8n", "Make", "Zapier", "FastAPI", "WebSocket", "GraphQL", "PostgreSQL", "Redis"],
      href: "/services/integrations",
      gradient: "from-cyan-500 to-teal-500",
      category: "integrations",
      keywords: ["automation", "workflow", "api", "integration", "connectors", "webhook", "n8n", "make", "zapier"]
    },
    {
      id: "production",
      title: "Production & MLOps",
      description: "Enterprise-grade deployment, monitoring, and maintenance of AI systems with guaranteed performance SLAs.",
      icon: "🚀",
      features: [
        "Cloud deployment & auto-scaling",
        "Performance monitoring & alerting",
        "CI/CD pipelines for ML",
        "Cost optimization & resource management",
        "Security & compliance frameworks",
        "Disaster recovery planning",
        "A/B testing infrastructure",
        "Model versioning & governance"
      ],
      technologies: ["Docker", "Kubernetes", "AWS/GCP/Azure", "Prometheus", "Grafana", "Terraform", "Jenkins", "GitHub Actions"],
      href: "/services/production",
      gradient: "from-teal-500 to-green-500",
      category: "production",
      keywords: ["deployment", "mlops", "monitoring", "scaling", "infrastructure", "cloud", "devops", "kubernetes"]
    },
    {
      id: "web-app-integration",
      title: "AI Model Integration for Websites & Apps",
      description: "Seamlessly integrate cutting-edge AI capabilities directly into your web and mobile applications.",
      icon: "🌐",
      features: [
        "Real-time AI feature integration",
        "API development & management",
        "Frontend AI component development",
        "Mobile app AI integration",
        "Progressive Web App (PWA) AI features",
        "Cross-platform compatibility",
        "Performance optimization",
        "User experience enhancement"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Flutter", "React Native", "Node.js", "FastAPI", "WebRTC"],
      href: "/services/web-app-integration",
      gradient: "from-indigo-500 to-purple-500",
      category: "integration",
      keywords: ["website", "web app", "mobile app", "integration", "frontend", "react", "nextjs", "api", "real-time"]
    },
    {
      id: "prompt-engineering",
      title: "Prompt Engineering & Conversational UX",
      description: "Expert prompt design and conversational user experience optimization for maximum AI performance.",
      icon: "🎯",
      features: [
        "Advanced prompt engineering",
        "Conversational flow design",
        "A/B testing & optimization",
        "Guardrail implementation",
        "User intent classification",
        "Response quality monitoring",
        "Persona development",
        "Tone & style customization"
      ],
      technologies: ["Prompt Libraries", "A/B Testing", "User Analytics", "Quality Metrics", "Feedback Systems", "Hotjar", "Mixpanel"],
      href: "/services/prompt-engineering",
      gradient: "from-green-500 to-emerald-500",
      category: "prompt-engineering",
      keywords: ["prompt", "conversational", "ux", "user experience", "optimization", "testing", "design", "persona"]
    },
    {
      id: "data",
      title: "Data Preparation & Labeling",
      description: "Comprehensive data pipelines and preprocessing solutions to fuel your AI initiatives with quality data.",
      icon: "📊",
      features: [
        "Data collection & web scraping",
        "Data cleaning & preprocessing",
        "Automated data labeling",
        "Quality assurance pipelines",
        "GDPR & compliance handling",
        "Data versioning & management",
        "Data augmentation",
        "Synthetic data generation"
      ],
      technologies: ["Python", "Apache Spark", "Airflow", "SQL", "Data Lakes", "Label Studio", "Beautiful Soup", "Scrapy"],
      href: "/services/data",
      gradient: "from-emerald-500 to-blue-500",
      category: "data",
      keywords: ["data", "labeling", "preprocessing", "cleaning", "collection", "pipeline", "etl", "scraping"]
    },
    {
      id: "computer-vision",
      title: "Computer Vision & Image Processing",
      description: "Advanced visual intelligence solutions for image recognition, object detection, and visual data analysis.",
      icon: "👁️",
      features: [
        "Object detection & recognition",
        "Image classification & segmentation",
        "Facial recognition systems",
        "Optical Character Recognition (OCR)",
        "Video analysis & processing",
        "Medical imaging analysis",
        "Quality control automation",
        "Augmented reality integration"
      ],
      technologies: ["OpenCV", "YOLO", "TensorFlow", "PyTorch", "CNN", "GAN", "Tesseract", "MediaPipe"],
      href: "/services/computer-vision",
      gradient: "from-red-500 to-pink-500",
      category: "vision",
      keywords: ["computer vision", "image processing", "object detection", "facial recognition", "ocr", "video analysis"]
    },
    {
      id: "nlp",
      title: "Natural Language Processing (NLP)",
      description: "Transform text data into actionable insights with advanced language understanding and generation capabilities.",
      icon: "📝",
      features: [
        "Text classification & sentiment analysis",
        "Named Entity Recognition (NER)",
        "Text summarization & generation",
        "Language translation services",
        "Document analysis & processing",
        "Speech-to-text & text-to-speech",
        "Content moderation",
        "Knowledge extraction"
      ],
      technologies: ["spaCy", "NLTK", "BERT", "GPT", "Transformers", "CoreNLP", "OpenNLP", "AllenNLP"],
      href: "/services/nlp",
      gradient: "from-orange-500 to-yellow-500",
      category: "nlp",
      keywords: ["nlp", "natural language", "text analysis", "sentiment", "translation", "summarization", "ner"]
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics & Forecasting",
      description: "Leverage historical data to predict future trends, behaviors, and outcomes with machine learning models.",
      icon: "📈",
      features: [
        "Time series forecasting",
        "Customer behavior prediction",
        "Sales & revenue forecasting",
        "Risk assessment models",
        "Demand prediction",
        "Anomaly detection",
        "Market trend analysis",
        "Predictive maintenance"
      ],
      technologies: ["Prophet", "ARIMA", "XGBoost", "LightGBM", "Scikit-learn", "Pandas", "NumPy", "Statsmodels"],
      href: "/services/predictive-analytics",
      gradient: "from-yellow-500 to-amber-500",
      category: "analytics",
      keywords: ["predictive", "forecasting", "analytics", "time series", "prediction", "trends", "risk assessment"]
    },
    {
      id: "ai-consulting",
      title: "AI Strategy & Consulting",
      description: "Strategic guidance and roadmap development to help organizations successfully implement AI solutions.",
      icon: "💡",
      features: [
        "AI opportunity assessment",
        "Technology stack recommendation",
        "ROI analysis & business case development",
        "Implementation roadmap",
        "Team training & capability building",
        "Ethical AI guidelines",
        "Vendor selection assistance",
        "Proof of concept development"
      ],
      technologies: ["Strategy Frameworks", "Business Analysis", "ROI Modeling", "Training Programs", "Ethical Guidelines", "Vendor Evaluation"],
      href: "/services/ai-consulting",
      gradient: "from-gray-500 to-slate-500",
      category: "consulting",
      keywords: ["consulting", "strategy", "roadmap", "business case", "training", "ethics", "implementation"]
    },
    {
      id: "generative-ai",
      title: "Generative AI Solutions",
      description: "Create novel content, designs, and solutions using state-of-the-art generative AI models.",
      icon: "🎨",
      features: [
        "Content generation (text, images, video)",
        "Creative design assistance",
        "Code generation & automation",
        "Music & audio generation",
        "3D model generation",
        "Personalized content creation",
        "Brand voice development",
        "Multi-modal generation"
      ],
      technologies: ["DALL-E", "Midjourney", "Stable Diffusion", "GPT-4", "Claude", "RunwayML", "Synthesia", "Jukebox"],
      href: "/services/generative-ai",
      gradient: "from-pink-500 to-rose-500",
      category: "generative",
      keywords: ["generative ai", "content creation", "design", "code generation", "creative", "multi-modal"]
    }
  ], []);

  const categories = [
    { id: "all", name: "All Services", icon: "🌟", count: services.length },
    { id: "agents", name: "AI Agents", icon: "🤖", count: services.filter(s => s.category === "agents").length },
    { id: "models", name: "Custom Models", icon: "⚡", count: services.filter(s => s.category === "models").length },
    { id: "integration", name: "Integrations", icon: "🔗", count: services.filter(s => s.category === "integration").length },
    { id: "production", name: "Production", icon: "🚀", count: services.filter(s => s.category === "production").length },
    { id: "vision", name: "Computer Vision", icon: "👁️", count: services.filter(s => s.category === "vision").length },
    { id: "nlp", name: "NLP", icon: "📝", count: services.filter(s => s.category === "nlp").length },
    { id: "generative", name: "Generative AI", icon: "🎨", count: services.filter(s => s.category === "generative").length },
    { id: "analytics", name: "Analytics", icon: "📈", count: services.filter(s => s.category === "analytics").length },
    { id: "data", name: "Data Services", icon: "📊", count: services.filter(s => s.category === "data").length },
    { id: "prompt-engineering", name: "Prompt Engineering", icon: "🎯", count: services.filter(s => s.category === "prompt-engineering").length },
    { id: "consulting", name: "Consulting", icon: "💡", count: services.filter(s => s.category === "consulting").length }
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
    { number: "100+", label: "AI Projects Deployed", description: "Across various industries" },
    { number: "99.9%", label: "Client Satisfaction", description: "Based on client feedback" },
    { number: "24/7", label: "AI Support", description: "Dedicated technical support" },
    { number: "2-6", label: "Weeks Delivery", description: "Average project timeline" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      
      {/* Hero Section with Search */}
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
            <span className="text-sm font-medium text-blue-300">Comprehensive AI Services</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Solution
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Discover our comprehensive AI services portfolio - from AI agents and custom models to website integrations and generative AI solutions.
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
                className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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
                  className="absolute left-0 right-0 mt-2 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-2xl shadow-2xl z-20 max-w-2xl mx-auto"
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
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-200 flex items-center gap-3 group"
                      >
                        <span className="text-2xl">{match.icon}</span>
                        <div className="flex-1">
                          <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
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
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                Get Custom Proposal
              </motion.button>
            </Link>
            <Link href="/case-studies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
              >
                View Case Studies
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

      {/* Category Filters */}
      <section className="py-12 bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-600"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id ? "bg-white/20" : "bg-slate-600"
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Search Results */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
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
                  Search Results for &quot;<span className="text-blue-400">{searchQuery}</span>&quot;
                </>
              ) : (
                <>
                  Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Service Portfolio</span>
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
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Link href={service.href}>
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer h-full">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110`}>
                          {service.icon}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-6 leading-relaxed font-light">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-white mb-3 text-lg">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-400">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-white mb-3 text-lg">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.slice(0, 4).map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600"
                              >
                                {tech}
                              </span>
                            ))}
                            {service.technologies.length > 4 && (
                              <span className="px-3 py-1 bg-slate-700/50 text-gray-400 text-sm rounded-full border border-slate-600">
                                +{service.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                          <span>Learn more</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
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
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition-colors duration-300"
                >
                  Show All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Stack</span>
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-slate-700/50 text-gray-300 text-sm rounded-xl border border-slate-600 transition-all duration-300 hover:bg-slate-600/50 hover:border-cyan-500/30"
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
              Ready to Start Your AI Project?
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Let&apos;s discuss your requirements and build an AI solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-xl text-slate-900 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
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

      <Footer />
    </div>
  );
};

export default AIServicesPage;