"use client";

import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Service Projects Data
const serviceProjects: Record<string, any> = {
  agents: {
    title: "AI Agents & Conversational Assistants",
    description: "Intelligent conversational agents — chatbots, RAG systems, and customer support automation — that engage customers 24/7 and drive real business results.",
    icon: "🤖",
    color: "#E84500",
    projects: [
      {
        title: "Enterprise Customer Support Bot",
        description: "24/7 AI-powered customer support system handling 10,000+ queries daily with 85% resolution rate. Integrated with CRM and ticketing systems.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
        technologies: ["GPT-4", "LangChain", "Pinecone", "Twilio"],
        metrics: ["85% Resolution Rate", "10K+ Daily Queries", "65% Cost Reduction"],
        features: [
          "Multi-language support (15+ languages)",
          "Context-aware conversation memory",
          "Sentiment analysis & escalation routing",
          "Integration with Zendesk & Salesforce"
        ]
      },
      {
        title: "AI Sales Assistant",
        description: "Intelligent sales agent for lead qualification, product recommendations, and follow-up automation that runs 24/7 without missing a lead.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
        technologies: ["Claude", "RAG", "PostgreSQL", "n8n"],
        metrics: ["40% Conversion Boost", "500+ Leads/Month", "Zero Missed Leads"],
        features: [
          "Automated lead scoring & qualification",
          "Personalized product recommendations",
          "Smart follow-up scheduling",
          "CRM data synchronization"
        ]
      },
      {
        title: "Healthcare Patient Assistant",
        description: "HIPAA-compliant AI assistant for appointment scheduling, medication reminders, and health information queries — reducing front-desk workload by 60%.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        technologies: ["Azure OpenAI", "FHIR", "Encrypted DB", "SMS API"],
        metrics: ["60% Workload Reduction", "5K+ Patients Served", "98% Satisfaction"],
        features: [
          "Secure appointment scheduling",
          "Medication reminder system",
          "Health records integration",
          "Emergency alert escalation"
        ]
      },
      {
        title: "HR Recruitment Chatbot",
        description: "Automated recruitment assistant that screens candidates, schedules interviews, and handles onboarding — saving 70% of HR time per hire.",
        image: "https://images.unsplash.com/photo-1553484771-0b0f5b7d4c6f?w=600&h=400&fit=crop",
        technologies: ["Claude", "ATS Integration", "Calendar API", "Email"],
        metrics: ["70% Time Saved", "1000+ Candidates Processed", "92% Satisfaction"],
        features: [
          "Resume screening & parsing",
          "Automated interview scheduling",
          "Technical assessment delivery",
          "Onboarding documentation"
        ]
      }
    ]
  },
  automation: {
    title: "AI Workflow Automation",
    description: "End-to-end automation of repetitive business operations — from lead nurturing and data processing to reporting and multi-system orchestration.",
    icon: "⚙️",
    color: "#E84500",
    projects: [
      {
        title: "PropertyPulse AI",
        description: "An n8n-powered real estate bot that reads GHL form data (budget, location, timeline), searches listings for matching properties, and automatically sends available options back to GoHighLevel for instant follow-up.",
        image: "/projects/automation1-Propertypulse.jpeg",
        technologies: ["n8n", "GoHighLevel API", "Google Maps API", "Real Estate APIs"],
        metrics: ["Instant Matching", "24/7 Availability", "100% Automated"],
        features: [
          "Real-time GHL form data processing",
          "Smart property listing matching",
          "Budget & location-based filtering",
          "Automated CRM follow-up integration"
        ]
      },
      {
        title: "Smart Appointment Booking Bot",
        description: "Intelligent appointment scheduling automation that captures availability, syncs with calendars, sends confirmations, and manages rescheduling — all without human intervention.",
        image: "/projects/automation2-appointment-booking.jpeg",
        technologies: ["n8n", "Google Calendar API", "Twilio", "CRM Integration"],
        metrics: ["Zero Double-Booking", "95% Show Rate", "+34 Appointments/Mo"],
        features: [
          "Real-time calendar availability checking",
          "Automated confirmation & reminder SMS/email",
          "Multi-timezone support",
          "Intelligent rescheduling workflows"
        ]
      },
      {
        title: "LeadIntel Campaign Engine",
        description: "Receives a webhook from GoHighLevel on new lead capture, scrapes the lead's website, generates a business abstract, and uses AI to craft hyper-personalized email or SMS campaigns.",
        image: "/projects/automation3- LeadIntel-Campaign-Engine.jpeg",
        technologies: ["n8n", "GoHighLevel", "Web Scraping", "GPT-4", "Claude"],
        metrics: ["3x Engagement Rate", "Personalized at Scale", "10min Processing"],
        features: [
          "Automated website scraping & analysis",
          "AI-powered business intelligence extraction",
          "Hyper-personalized campaign generation",
          "Seamless CRM integration & follow-up"
        ]
      },
      {
        title: "RankGrid AI – Local SEO Report Engine",
        description: "Automated local SEO reporting that generates Google Business Profile ranking reports in real time — pulling data, running geo-grid scans, and delivering a PDF report to the CRM automatically.",
        image: "/projects/automation4-Automated-Local-SEO-Report-Engine.jpeg",
        technologies: ["n8n", "Google Maps API", "Rank Tracking APIs", "PDF Generation"],
        metrics: ["Real-time Reports", "Geo-Grid Accuracy", "Zero Manual Work"],
        features: [
          "Google Business Profile data extraction",
          "Geo-grid visibility scanning",
          "Automated ranking calculations",
          "Professional PDF report generation & CRM delivery"
        ]
      },
      {
        title: "Advanced Website Scraping Automation",
        description: "Enterprise-grade web scraping automation that extracts structured data from complex websites, handles dynamic content, and delivers clean data to your database or CRM.",
        image: "/projects/automation5-Advance-Website-Scraping-Automation.png",
        technologies: ["n8n", "Puppeteer", "Playwright", "Proxy Networks"],
        metrics: ["1000+ Pages/Hour", "99% Success Rate", "Structured Output"],
        features: [
          "Dynamic content & JavaScript rendering",
          "Anti-bot detection handling",
          "Data cleaning & normalization",
          "Scheduled scraping & monitoring"
        ]
      }
    ]
  },
  models: {
    title: "Custom AI Model Development",
    description: "Fine-tuned and purpose-built AI models trained on your specific business data — delivering higher accuracy than generic models for your exact use case.",
    icon: "⚡",
    color: "#E84500",
    projects: [
      {
        title: "Legal Document Analysis LLM",
        description: "Fine-tuned language model for legal contract analysis, clause extraction, and compliance checking — saving 80% of manual review time.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        technologies: ["LLaMA-2", "LangChain", "Chroma", "FastAPI"],
        metrics: ["91% Accuracy", "10K+ Contracts Processed", "80% Time Saved"],
        features: [
          "Clause extraction & categorization",
          "Compliance risk assessment",
          "Contract comparison analysis",
          "Jurisdiction-specific fine-tuning"
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
        title: "E-commerce Product Recommendation AI",
        description: "Custom recommendation model trained on customer behavior data — increasing average cart value by 35% through personalized product suggestions.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        technologies: ["PyTorch", "Collaborative Filtering", "FastAPI", "Redis"],
        metrics: ["35% Cart Value Increase", "2M+ Products", "< 50ms Response"],
        features: [
          "Real-time personalization",
          "Behavioral pattern learning",
          "A/B testing framework",
          "Business rules integration"
        ]
      },
      {
        title: "Content Moderation AI",
        description: "Custom NLP model for automated content moderation across text and images — enforcing policy compliance at scale with 96% accuracy.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
        technologies: ["BERT", "CLIP", "TensorFlow", "Kubernetes"],
        metrics: ["96% Accuracy", "1M+ Items/Day", "Multi-modal"],
        features: [
          "Multi-language text moderation",
          "Image & video analysis",
          "Custom policy enforcement",
          "Human-in-the-loop review queue"
        ]
      }
    ]
  },
  integrations: {
    title: "AI Integrations",
    description: "Seamlessly connect AI capabilities with your existing CRM, ERP, website, and APIs — adding intelligence to the tools your team already uses.",
    icon: "🔗",
    color: "#E84500",
    projects: [
      {
        title: "CRM AI Intelligence Layer",
        description: "Integrated AI into a Salesforce CRM to automatically score leads, summarize call recordings, and suggest next actions — cutting rep prep time by 50%.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
        technologies: ["Salesforce API", "OpenAI", "n8n", "Whisper"],
        metrics: ["50% Time Saved", "3x Lead Conversion", "Auto-summaries"],
        features: [
          "AI-powered lead scoring",
          "Call recording transcription & summary",
          "Next-action recommendations",
          "Automated CRM data enrichment"
        ]
      },
      {
        title: "ERP Automation Integration",
        description: "Connected an AI layer to an existing ERP system to automate purchase order creation, vendor communication, and inventory forecasting.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        technologies: ["SAP API", "Python", "FastAPI", "OpenAI"],
        metrics: ["70% Faster PO Processing", "40% Inventory Accuracy", "Zero Manual Entry"],
        features: [
          "Automated purchase order generation",
          "Vendor email parsing & response",
          "Inventory level forecasting",
          "Exception alerting & routing"
        ]
      },
      {
        title: "Website AI Chat Integration",
        description: "Embedded a context-aware AI assistant into an e-commerce website — answering product questions, processing returns, and booking demos automatically.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
        technologies: ["React Widget", "OpenAI", "RAG", "Stripe API"],
        metrics: ["45% Support Ticket Reduction", "24/7 Coverage", "+28% Conversions"],
        features: [
          "Product knowledge base integration",
          "Order status & return handling",
          "Demo booking automation",
          "Live chat escalation fallback"
        ]
      },
      {
        title: "Multi-Platform Data Pipeline",
        description: "Built an AI-powered data aggregation pipeline connecting 6 marketing platforms — automatically analyzing performance and generating weekly strategy reports.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["n8n", "Google Ads API", "Meta API", "GPT-4", "Google Sheets"],
        metrics: ["6 Platforms Connected", "Weekly Auto-Reports", "5hrs Saved/Week"],
        features: [
          "Multi-platform data aggregation",
          "AI-generated performance insights",
          "Automated weekly report delivery",
          "Anomaly detection & alerts"
        ]
      }
    ]
  },
  "computer-vision": {
    title: "Computer Vision Systems",
    description: "AI-powered image and video analysis systems — from object detection and facial analysis to quality control and real-time surveillance intelligence.",
    icon: "👁️",
    color: "#E84500",
    projects: [
      {
        title: "AI Facial Analyzer",
        description: "Real-time facial recognition and emotion detection system for retail stores — analyzing customer sentiment and demographics to improve in-store experience.",
        image: "/projects/ai-facial-analyzer.jpg",
        technologies: ["PyTorch", "OpenCV", "FastAPI", "DeepFace"],
        metrics: ["98% Detection Accuracy", "Real-time Processing", "30fps Analysis"],
        features: [
          "Real-time facial detection & recognition",
          "Emotion and sentiment analysis",
          "Age and demographic estimation",
          "Privacy-compliant data handling"
        ]
      },
      {
        title: "Restaurant Staff Tracker",
        description: "AI-powered staff activity detection using existing CCTV camera feeds — tracking station coverage, idle time, and hygiene compliance automatically.",
        image: "/projects/restaurant-camera-ai.png",
        technologies: ["YOLO v8", "OpenCV", "Edge AI", "Python"],
        metrics: ["95% Detection Rate", "24/7 Monitoring", "Zero New Hardware"],
        features: [
          "Staff position & activity tracking",
          "Station coverage monitoring",
          "Hygiene compliance detection",
          "Real-time alert system"
        ]
      },
      {
        title: "Manufacturing Quality Control AI",
        description: "Computer vision model for defect detection on production lines — catching defects invisible to the human eye at production speed.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        technologies: ["YOLO v8", "EdgeAI", "OpenCV", "NVIDIA Jetson"],
        metrics: ["98% Defect Detection", "< 50ms Inference", "24/7 Operation"],
        features: [
          "Real-time defect classification",
          "Multi-camera synchronization",
          "Quality trend analytics dashboard",
          "Production line integration"
        ]
      },
      {
        title: "Document OCR & Extraction Pipeline",
        description: "Intelligent document processing system that extracts structured data from invoices, contracts, and forms — eliminating manual data entry entirely.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        technologies: ["Tesseract", "LayoutLM", "FastAPI", "PostgreSQL"],
        metrics: ["99.1% Extraction Accuracy", "10K+ Docs/Day", "100% Manual Entry Eliminated"],
        features: [
          "Multi-format document support",
          "Structured data extraction",
          "Validation & error checking",
          "ERP/CRM data push integration"
        ]
      }
    ]
  },
  "predictive-analytics": {
    title: "Predictive Analytics & Forecasting",
    description: "Data-driven decision systems that analyze historical patterns and predict future outcomes — giving businesses the intelligence to act before problems occur.",
    icon: "📈",
    color: "#E84500",
    projects: [
      {
        title: "Crypto Price Predictor",
        description: "ML model forecasting cryptocurrency price movements using historical data, sentiment analysis, and on-chain metrics — achieving 73% directional accuracy.",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
        technologies: ["TensorFlow", "LSTM", "Python", "Sentiment NLP"],
        metrics: ["73% Directional Accuracy", "15-min Forecast Intervals", "Real-time Feed"],
        features: [
          "Multi-signal price prediction",
          "Sentiment & news integration",
          "On-chain data analysis",
          "Risk-adjusted confidence scoring"
        ]
      },
      {
        title: "E-commerce Demand Forecasting",
        description: "Inventory demand forecasting model for an online retailer — reducing overstock by 42% and eliminating stockouts on top-selling products.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        technologies: ["Prophet", "XGBoost", "Python", "PostgreSQL"],
        metrics: ["42% Overstock Reduction", "Zero Stockouts on Top SKUs", "12-Week Forecast"],
        features: [
          "SKU-level demand forecasting",
          "Seasonal trend modeling",
          "Automated reorder point calculation",
          "ERP inventory integration"
        ]
      },
      {
        title: "Customer Churn Prediction",
        description: "ML model identifying at-risk customers 30 days before churn — enabling proactive retention campaigns that saved 18% of churning revenue.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["XGBoost", "Python", "Scikit-learn", "CRM API"],
        metrics: ["85% Churn Prediction Accuracy", "30-Day Early Warning", "18% Revenue Saved"],
        features: [
          "Behavioral pattern analysis",
          "Risk score calculation per customer",
          "Automated retention campaign triggers",
          "CRM real-time integration"
        ]
      },
      {
        title: "Sales Revenue Forecasting",
        description: "Predictive revenue forecasting model integrating CRM pipeline data, historical trends, and market signals — giving leadership accurate 90-day revenue visibility.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        technologies: ["Prophet", "Python", "Salesforce API", "Power BI"],
        metrics: ["±4% Forecast Accuracy", "90-Day Horizon", "Weekly Auto-Refresh"],
        features: [
          "CRM pipeline signal integration",
          "Seasonal & market trend modeling",
          "Scenario planning (best/base/worst)",
          "Executive dashboard delivery"
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
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl">Service not found</p>
          <Link href="/ai-services" className="text-orange-400 mt-4 inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
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
                className="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl"
                style={{
                  boxShadow: `0 0 0 0 ${serviceData.color}00`,
                }}
                whileHover={{
                  boxShadow: `0 10px 40px ${serviceData.color}20`,
                }}
              >
                {/* Project Image */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Metrics Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.metrics.map((metric: string, idx: number) => (
                      <div 
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white backdrop-blur-md"
                        style={{ background: `${serviceData.color}60` }}
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
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                    {project.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-zinc-900/50 text-gray-300 border border-zinc-700"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
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
    </div>
  );
};

// Required for static site generation with output: "export"
export async function getStaticPaths() {
  // Generate paths for all service IDs
  const paths = Object.keys(serviceProjects).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ServiceDetailPage;
