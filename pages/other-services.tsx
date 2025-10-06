"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const OtherServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      name: "Logo & Brand Identity Design",
      description: "Professional logo design and complete brand identity systems that establish strong visual presence and brand recognition.",
      shortDescription: "Professional logos for brands and businesses",
      image: "/design1.png", // Recommended: 600x400px or 800x600px
      features: [
        "Custom logo design",
        "Brand style guide",
        "Multiple format delivery",
        "Color psychology analysis",
        "Typography selection"
      ],
      deliverables: ["Logo Package", "Brand Guide", "Social Media Kit", "Stationery Design"],
      timeline: "3-7 days",
      gradient: "from-purple-500 to-blue-500",
      portfolioUrl: "https://newdesignerhere.my.canva.site/graphicodexportfolio#logo-design"
    },
    {
      id: 2,
      name: "UI/UX Design & Prototyping",
      description: "Clean, modern, and user-centered interface designs with interactive prototypes for web and mobile applications.",
      shortDescription: "Clean and modern user interfaces",
      image: "/design2.png", // Recommended: 600x400px or 800x600px
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Interactive design mockups",
        "Design system creation",
        "User testing support"
      ],
      deliverables: ["Wireframes", "High-Fidelity Mockups", "Interactive Prototype", "Design System"],
      timeline: "1-3 weeks",
      gradient: "from-blue-500 to-cyan-500",
      portfolioUrl: "https://newdesignerhere.my.canva.site/graphicodexportfolio#ui-ux-design"
    },
    {
      id: 3,
      name: "Marketing & Social Media Design",
      description: "Eye-catching marketing materials, social media graphics, and promotional content that drives engagement and conversions.",
      shortDescription: "Flyers, banners, social posts, and ads",
      image: "/design3.png", // Recommended: 600x400px or 800x600px
      features: [
        "Social media graphics",
        "Marketing collateral",
        "Advertisement designs",
        "Email marketing templates",
        "Presentation design"
      ],
      deliverables: ["Social Media Kit", "Marketing Materials", "Ad Designs", "Email Templates"],
      timeline: "2-5 days",
      gradient: "from-cyan-500 to-teal-500",
      portfolioUrl: "https://newdesignerhere.my.canva.site/graphicodexportfolio#marketing-design"
    },
    {
      id: 4,
      name: "Web & Mobile App Design",
      description: "Responsive web design and mobile app interfaces optimized for user experience and conversion rates.",
      shortDescription: "Responsive website and app interfaces",
      image: "/design4.png", // Recommended: 600x400px or 800x600px
      features: [
        "Responsive web design",
        "Mobile app interfaces",
        "Landing page design",
        "E-commerce design",
        "Dashboard design"
      ],
      deliverables: ["Website Design", "Mobile App UI", "Landing Pages", "E-commerce Design"],
      timeline: "2-4 weeks",
      gradient: "from-teal-500 to-green-500",
      portfolioUrl: "https://newdesignerhere.my.canva.site/graphicodexportfolio#web-design"
    },
    {
      id: 5,
      name: "Print & Publication Design",
      description: "Professional print materials including brochures, business cards, magazines, and corporate publications.",
      shortDescription: "Brochures, business cards, publications",
      image: "/design5.png", // Recommended: 600x400px or 800x600px
      features: [
        "Print-ready design",
        "Brochure & catalog design",
        "Business stationery",
        "Magazine layout",
        "Book design"
      ],
      deliverables: ["Print Materials", "Business Cards", "Brochures", "Publications"],
      timeline: "1-2 weeks",
      gradient: "from-green-500 to-emerald-500",
      portfolioUrl: "https://newdesignerhere.my.canva.site/graphicodexportfolio#print-design"
    },
    {
      id: 6,
      name: "Packaging & Product Design",
      description: "Creative packaging solutions and product design that enhances brand appeal and customer experience.",
      shortDescription: "Product packaging and label design",
      image: "/design6.png", // Recommended: 600x400px or 800x600px
      features: [
        "Product packaging design",
        "Label & sticker design",
        "Box & container design",
        "Retail display design",
        "3D mockups"
      ],
      deliverables: ["Packaging Design", "Labels", "3D Mockups", "Print Files"],
      timeline: "2-3 weeks",
      gradient: "from-emerald-500 to-blue-500",
      portfolioUrl: "https://newdesignerhere.my.canva.site/graphicodexportfolio#packaging-design"
    }
  ];

  const stats = [
    { number: "100+", label: "Design Projects", description: "Successfully delivered" },
    { number: "98%", label: "Client Satisfaction", description: "Based on feedback" },
    { number: "24-48", label: "Hours Response", description: "Quick turnaround" },
    { number: "50+", label: "Happy Clients", description: "Worldwide" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your brand, audience, and design requirements"
    },
    {
      step: "02",
      title: "Concept & Strategy",
      description: "Creating design concepts and strategic direction"
    },
    {
      step: "03",
      title: "Design & Iteration",
      description: "Developing designs with feedback and revisions"
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final delivery and ongoing design support"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6 border border-purple-500/20"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-300">Creative Design Services</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Creative{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Design
            </span>{" "}
            Services
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Professional design services that transform your ideas into stunning visual experiences. 
            From brand identity to digital interfaces, we create designs that make an impact.
          </motion.p>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://newdesignerhere.my.canva.site/graphicodexportfolio" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                View Design Portfolio
              </motion.button>
            </a>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10"
              >
                Start a Project
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
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
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

      {/* Services Grid */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Design
              </span>{" "}
              Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Comprehensive design solutions tailored to your brands unique needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden h-full">
                  {/* Service Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                        {service.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                    {/* Image placeholder - replace with actual image */}
                    {service.image && (
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover opacity-30"
                      />
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Whats Included:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables & Timeline */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{service.deliverables.length} deliverables</span>
                      <span>{service.timeline}</span>
                    </div>

                    {/* Portfolio Link */}
                    <a 
                      href={service.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 font-medium rounded-xl border border-purple-500/30 hover:bg-purple-500/30 hover:text-white transition-all duration-300 group/link"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Portfolio Examples
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Design
              </span>{" "}
              Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              A structured approach that ensures your design project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {step.description}
                </p>

                {/* Connecting line for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-purple-500/30 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg sm:text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Lets create stunning designs that elevate your brand and captivate your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://newdesignerhere.my.canva.site/graphicodexportfolio" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white rounded-xl text-slate-900 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  Explore Full Portfolio
                </motion.button>
              </a>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Start Design Project
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

export default OtherServicesPage;