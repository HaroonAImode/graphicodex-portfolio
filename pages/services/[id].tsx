"use client";

import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

// Service Projects Data
const serviceProjects: Record<string, any> = {
  agents: {
    title: "AI Agents & Conversational AI",
    description: "Intelligent conversational agents with memory, context awareness, and multi-modal capabilities for enterprise applications.",
    icon: "🤖",
    color: "#a78bfa",
    gradient: "from-purple-500 to-blue-500",
    projects: [
      {
        title: "Enterprise Customer Support Bot",
        description: "24/7 AI-powered customer support system handling 10,000+ queries daily with 85% resolution rate. Integrated with CRM and ticketing systems.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
        technologies: ["GPT-4", "LangChain", "Pinecone", "Twilio"],
        metrics: ["85% Resolution Rate", "10K+ Daily Queries", "30s Avg Response Time"],
        features: [
          "Multi-language support (15+ languages)",
          "Context-aware conversation memory",
          "Sentiment analysis & escalation",
          "Integration with Zendesk & Salesforce"
        ]
      },
      {
        title: "AI Sales Assistant",
        description: "Intelligent sales agent for lead qualification, product recommendations, and follow-up automation. Increased conversion rates by 40%.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
        technologies: ["Claude", "RAG", "PostgreSQL", "n8n"],
        metrics: ["40% Conversion Boost", "500+ Leads/Month", "95% Accuracy"],
        features: [
          "Automated lead scoring & qualification",
          "Personalized product recommendations",
          "Smart follow-up scheduling",
          "CRM data synchronization"
        ]
      },
      {
        title: "Voice-Enabled Virtual Assistant",
        description: "Hands-free voice assistant for warehouse operations with real-time inventory management and task coordination.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
        technologies: ["Whisper", "GPT-4", "WebSocket", "Redis"],
        metrics: ["50% Time Saved", "99% Accuracy", "Real-time Processing"],
        features: [
          "Voice command recognition",
          "Real-time inventory updates",
          "Multi-user task coordination",
          "Offline mode support"
        ]
      },
      {
        title: "Healthcare Patient Assistant",
        description: "HIPAA-compliant AI assistant for appointment scheduling, medication reminders, and health information queries.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        technologies: ["Azure OpenAI", "FHIR", "Encrypted DB", "SMS API"],
        metrics: ["HIPAA Compliant", "5K+ Patients", "98% Satisfaction"],
        features: [
          "Secure appointment scheduling",
          "Medication reminder system",
          "Health records integration",
          "Emergency alert system"
        ]
      },
      {
        title: "E-commerce Shopping Assistant",
        description: "Conversational shopping assistant with product search, comparison, and personalized recommendations for online retail.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        technologies: ["GPT-3.5", "Elasticsearch", "Stripe", "React"],
        metrics: ["35% Cart Increase", "2M+ Products", "< 1s Response"],
        features: [
          "Natural language product search",
          "Visual product comparison",
          "Personalized recommendations",
          "Order tracking & support"
        ]
      },
      {
        title: "HR Recruitment Chatbot",
        description: "Automated recruitment assistant for candidate screening, interview scheduling, and onboarding support.",
        image: "https://images.unsplash.com/photo-1553484771-0b0f5b7d4c6f?w=600&h=400&fit=crop",
        technologies: ["Claude", "ATS Integration", "Calendar API", "Email"],
        metrics: ["70% Time Saved", "1000+ Candidates", "92% Satisfaction"],
        features: [
          "Resume screening & parsing",
          "Automated interview scheduling",
          "Technical assessment delivery",
          "Onboarding documentation"
        ]
      }
    ]
  },
  models: {
    title: "Custom Model Development & Fine-tuning",
    description: "Tailored AI models fine-tuned on your specific data to solve unique business challenges with maximum accuracy.",
    icon: "⚡",
    color: "#38bdf8",
    gradient: "from-blue-500 to-cyan-500",
    projects: [
      {
        title: "Medical Diagnosis AI System",
        description: "Custom deep learning model for disease detection from medical imaging with 94% accuracy, FDA validation pending.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        technologies: ["PyTorch", "ResNet", "DICOM", "TensorBoard"],
        metrics: ["94% Accuracy", "10K+ Scans", "FDA Pending"],
        features: [
          "Multi-class disease detection",
          "DICOM image processing",
          "Explainable AI visualizations",
          "Clinical validation workflows"
        ]
      },
      {
        title: "Financial Fraud Detection Model",
        description: "Real-time fraud detection system processing millions of transactions with 99.2% precision and minimal false positives.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["XGBoost", "Kafka", "Redis", "MLflow"],
        metrics: ["99.2% Precision", "5M+ Transactions/Day", "< 100ms Latency"],
        features: [
          "Real-time transaction monitoring",
          "Anomaly pattern detection",
          "Adaptive learning from feedback",
          "Multi-factor risk scoring"
        ]
      },
      {
        title: "Legal Document Analysis LLM",
        description: "Fine-tuned language model for legal contract analysis, clause extraction, and compliance checking.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        technologies: ["LLaMA-2", "LangChain", "Chroma", "FastAPI"],
        metrics: ["91% Accuracy", "10K+ Contracts", "80% Time Saved"],
        features: [
          "Clause extraction & categorization",
          "Compliance risk assessment",
          "Contract comparison analysis",
          "Jurisdiction-specific training"
        ]
      },
      {
        title: "Manufacturing Quality Control AI",
        description: "Computer vision model for defect detection on production lines with real-time inference and quality scoring.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        technologies: ["YOLO v8", "EdgeAI", "OpenCV", "Jetson"],
        metrics: ["98% Detection Rate", "< 50ms Inference", "24/7 Operation"],
        features: [
          "Real-time defect detection",
          "Multi-camera synchronization",
          "Quality trend analytics",
          "Production line integration"
        ]
      },
      {
        title: "Content Moderation AI",
        description: "Custom NLP model for automated content moderation across text, images, and video with policy compliance.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
        technologies: ["BERT", "CLIP", "TensorFlow", "Kubernetes"],
        metrics: ["96% Accuracy", "1M+ Items/Day", "Multi-modal"],
        features: [
          "Multi-language text moderation",
          "Image & video analysis",
          "Custom policy enforcement",
          "Human-in-the-loop review"
        ]
      }
    ]
  },
  integrations: {
    title: "AI Integrations & Automation",
    description: "Seamless integration of AI capabilities into your existing workflows and automation of business processes.",
    icon: "🔗",
    color: "#34d399",
    gradient: "from-cyan-500 to-teal-500",
    projects: [
      {
        title: "Smart CRM Automation",
        description: "AI-powered CRM workflow automation with lead scoring, email campaigns, and sales forecasting. 40% conversion boost.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        technologies: ["n8n", "Salesforce API", "GPT-4", "PostgreSQL"],
        metrics: ["40% Conversion", "10K+ Leads/Month", "5 Systems Integrated"],
        features: [
          "Automated lead scoring & routing",
          "AI-generated email campaigns",
          "Sales pipeline forecasting",
          "Multi-CRM synchronization"
        ]
      },
      {
        title: "Invoice Processing Automation",
        description: "OCR and NLP-powered invoice extraction and processing system handling 10,000+ invoices monthly with 99.5% accuracy.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
        technologies: ["Tesseract", "GPT-3.5", "Make", "QuickBooks API"],
        metrics: ["99.5% Accuracy", "10K+ Invoices/Month", "10x Faster"],
        features: [
          "Multi-format document processing",
          "Automated data extraction",
          "ERP system integration",
          "Exception handling workflows"
        ]
      },
      {
        title: "Customer Service Ticket Router",
        description: "Intelligent ticket routing and prioritization system using NLP to categorize and assign support tickets automatically.",
        image: "https://images.unsplash.com/photo-1557804506-36122d921a39?w=600&h=400&fit=crop",
        technologies: ["Zapier", "Zendesk", "Claude", "Slack API"],
        metrics: ["70% Auto-Resolved", "50% Faster Response", "95% Accuracy"],
        features: [
          "Automatic ticket categorization",
          "Priority-based routing",
          "SLA monitoring & alerts",
          "Team workload balancing"
        ]
      },
      {
        title: "E-commerce Inventory Sync",
        description: "Real-time inventory synchronization across multiple sales channels with demand forecasting and auto-reordering.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
        technologies: ["FastAPI", "GraphQL", "Redis", "Shopify API"],
        metrics: ["Real-time Sync", "5 Channels", "99.9% Uptime"],
        features: [
          "Multi-channel inventory sync",
          "Demand forecasting",
          "Automated reorder points",
          "Stock level alerts"
        ]
      },
      {
        title: "HR Onboarding Automation",
        description: "End-to-end employee onboarding automation with document management, training scheduling, and compliance tracking.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
        technologies: ["n8n", "DocuSign", "BambooHR", "Slack"],
        metrics: ["90% Time Saved", "100% Compliance", "500+ Employees"],
        features: [
          "Digital document signing",
          "Training schedule automation",
          "Compliance checklist tracking",
          "Welcome kit delivery"
        ]
      }
    ]
  },
  production: {
    title: "Production & MLOps",
    description: "Enterprise-grade deployment, monitoring, and maintenance of AI systems with guaranteed performance SLAs.",
    icon: "🚀",
    color: "#10b981",
    gradient: "from-teal-500 to-green-500",
    projects: [
      {
        title: "Auto-Scaling AI Infrastructure",
        description: "Enterprise ML infrastructure handling 10M+ daily requests with auto-scaling, load balancing, and 99.9% uptime SLA.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        technologies: ["Kubernetes", "AWS EKS", "Prometheus", "Grafana"],
        metrics: ["10M+ Requests/Day", "99.9% Uptime", "Auto-Scaling"],
        features: [
          "Horizontal pod autoscaling",
          "Multi-region deployment",
          "Real-time monitoring",
          "Cost optimization"
        ]
      },
      {
        title: "ML Model Monitoring Dashboard",
        description: "Comprehensive monitoring system tracking model performance, data drift, and system health with real-time alerts.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Evidently AI", "Grafana", "PostgreSQL", "PagerDuty"],
        metrics: ["Real-time Alerts", "15+ Metrics", "99.99% Reliability"],
        features: [
          "Data drift detection",
          "Model performance tracking",
          "Anomaly alerting",
          "Custom metric dashboards"
        ]
      },
      {
        title: "CI/CD Pipeline for ML Models",
        description: "Automated ML pipeline with version control, testing, deployment, and rollback capabilities for production models.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
        technologies: ["GitHub Actions", "MLflow", "Docker", "ArgoCD"],
        metrics: ["5min Deployment", "Automated Testing", "Zero Downtime"],
        features: [
          "Automated model testing",
          "A/B deployment strategies",
          "Model versioning",
          "Instant rollback capability"
        ]
      },
      {
        title: "Multi-Model Serving Platform",
        description: "Unified serving platform for multiple ML models with dynamic routing, caching, and cost optimization.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        technologies: ["TorchServe", "NVIDIA Triton", "Redis", "Kong"],
        metrics: ["50+ Models", "< 100ms P95", "60% Cost Reduction"],
        features: [
          "Dynamic model routing",
          "Response caching",
          "GPU optimization",
          "Usage-based billing"
        ]
      },
      {
        title: "Disaster Recovery System",
        description: "Enterprise-grade DR solution with automated backups, geo-redundancy, and sub-60s recovery time objectives.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        technologies: ["AWS Multi-Region", "Terraform", "Velero", "S3"],
        metrics: ["< 60s RTO", "Geo-Redundant", "Automated Backups"],
        features: [
          "Automated daily backups",
          "Multi-region replication",
          "Point-in-time recovery",
          "Disaster drill automation"
        ]
      }
    ]
  }
};

const ServiceDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const serviceData = serviceProjects[id as string];

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl">Service not found</p>
          <Link href="/ai-services" className="text-blue-400 mt-4 inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <Link href="/ai-services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Services
          </Link>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
                style={{
                  background: `${serviceData.color}18`,
                  boxShadow: `inset 0 0 0 1px ${serviceData.color}30`
                }}
              >
                {serviceData.icon}
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {serviceData.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-4xl">
              {serviceData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Featured <span style={{ color: serviceData.color }}>Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world implementations and success stories from our portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceData.projects.map((project: any, index: number) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl"
                style={{
                  boxShadow: `0 0 0 0 ${serviceData.color}00`,
                }}
                whileHover={{
                  boxShadow: `0 10px 40px ${serviceData.color}20`,
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Metrics Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.metrics.map((metric: string, idx: number) => (
                      <div 
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white backdrop-blur-sm"
                        style={{ background: `${serviceData.color}40` }}
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-opacity-90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <svg 
                            className="w-4 h-4 mt-0.5 flex-shrink-0" 
                            style={{ color: serviceData.color }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                    {project.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300 border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help implement a similar solution for your business
            </p>
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300"
                style={{ 
                  background: `linear-gradient(to right, ${serviceData.color}, ${serviceData.color}aa)`,
                }}
whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
