import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const footerLinks = {
    Services: [
      { name: "AI Services", href: "/ai-services" },
      { name: "Other Services", href: "/other-services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Team", href: "/team" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    Contact: [
      { 
        name: "muhammadharoon3740502005@gmail.com", 
        href: "mailto:muhammadharoon3740502005@gmail.com",
        type: "email"
      },
      { 
        name: "+92 335 5955525", 
        href: "tel:+923355955525",
        type: "phone"
      },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "GitHub", href: "#", icon: "💻" },
    { name: "Instagram", href: "#", icon: "📷" },
  ];

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description - Updated with larger logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative w-64 h-20"> {/* Increased size */}
                  <Image
                    src="/logo2005.png"
                    alt="AI Portfolio Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 256px, 256px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-70"></div>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Leading AI solutions provider delivering cutting-edge technology 
              and enterprise-grade artificial intelligence services to transform 
              businesses worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 group cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 group cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links - Updated with copy functionality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact
            </h3>
            <ul className="space-y-4">
              {footerLinks.Contact.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="group cursor-pointer"
                    onClick={() => copyToClipboard(link.name.replace(/\s+/g, ''), link.type as 'email' | 'phone')}
                  >
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                            {link.type === 'email' ? (
                              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {link.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {link.type === 'email' ? 'Email Address' : 'Phone Number'}
                          </p>
                        </div>
                      </div>
                      
                      {/* Copy Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-2 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(link.name.replace(/\s+/g, ''), link.type as 'email' | 'phone');
                        }}
                        aria-label={`Copy ${link.type}`}
                      >
                        {link.type === 'email' && copiedEmail ? (
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : link.type === 'phone' && copiedPhone ? (
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </motion.button>
                    </div>
                    
                    {/* Click to copy hint */}
                    <div className="mt-1 text-xs text-gray-500 pl-11">
                      Click to copy
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Portfolio. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy">
              <span className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="/cookies">
              <span className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer">
                Cookie Policy
              </span>
            </Link>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/50 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-gray-400">
                Lets build something amazing together. Get in touch today!
              </p>
            </div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-500/30 whitespace-nowrap"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;