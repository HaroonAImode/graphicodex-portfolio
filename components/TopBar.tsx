"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TopBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const textToType = "Get Free Demo of Web, AI Agents & Automations BEFORE HIRING US!";
  const typingSpeed = 50; // ms per character
  const deletingSpeed = 30; // ms per character
  const pauseDuration = 1500; // ms to pause before deleting

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentIndex < textToType.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayText(textToType.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting backward
      timer = setTimeout(() => {
        setDisplayText(textToType.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && currentIndex === textToType.length) {
      // Pause at full text, then start deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentIndex === 0) {
      // Pause at empty, then start typing again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textToType]);

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText("+923355955525");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-blue-500/30 shadow-xl"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2">
            {/* Left: Announcement with Typing Animation */}
            <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-blue-300">Limited Offer</span>
              </div>

              {/* Desktop: Typing Animation */}
              <div className="hidden sm:flex ml-3 text-sm text-white font-medium min-h-[24px] items-center">
                <span className="text-blue-300 font-semibold mr-1">
                  {displayText}
                </span>
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[2px] h-4 bg-blue-400 ml-[1px]"
                />
              </div>
              
              {/* Mobile: Simplified message */}
              <div className="sm:hidden ml-3 text-xs text-white font-medium text-center flex-1 min-h-[20px] flex items-center justify-center">
                <span className="text-blue-300 font-semibold">Free Demo Available</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[1px] h-3 bg-blue-400 ml-[1px]"
                />
              </div>
            </div>

            {/* Center: Phone Number for mobile */}
            <div className="sm:hidden flex items-center justify-center w-full">
              <div className="flex items-center space-x-2 group cursor-pointer" onClick={copyPhoneNumber}>
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  {copied && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white">+92 335 5955525</span>
                  <span className="text-[10px] text-blue-300 group-hover:text-cyan-300 transition-colors">
                    {copied ? "Copied!" : "Tap to call/copy"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Desktop Contact & Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Phone Number with Copy */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 group cursor-pointer" onClick={copyPhoneNumber}>
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    {copied && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">+92 335 5955525</span>
                    <span className="text-xs text-blue-300 group-hover:text-cyan-300 transition-colors">
                      {copied ? "Copied!" : "Click to copy"}
                    </span>
                  </div>
                </div>

                <div className="h-6 w-px bg-blue-500/30"></div>
              </div>

              {/* Book Now Button - Desktop */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border border-blue-500/30 whitespace-nowrap"
                >
                  Book Free Demo
                </motion.button>
              </Link>
            </div>

            {/* Mobile: Book Demo Button */}
            <div className="sm:hidden flex items-center justify-center w-full mt-1">
              <Link href="/contact" className="w-full max-w-xs">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold rounded-lg border border-blue-500/30 shadow-sm text-center"
                >
                  Book Free Demo
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Progress Bar - Mobile optimized */}
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
    </motion.div>
  );
};

export default TopBar;