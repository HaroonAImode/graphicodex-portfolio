"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MobileHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-xl"
    >
      <div className="flex items-center justify-between px-4 py-2.5">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <div className="relative w-32 h-9">
              <Image
                src="/logo2005.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {showMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Quick Actions Menu */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-slate-700/50 bg-slate-900/98 backdrop-blur-xl"
        >
          <div className="px-4 py-3 space-y-2 max-h-[calc(100vh-60px)] overflow-y-auto">
            <Link href="/contact">
              <motion.button
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg shadow-lg active:scale-95 transition-transform"
                onClick={() => setShowMenu(false)}
                style={{ touchAction: "manipulation" }}
              >
                📅 Book Free Demo
              </motion.button>
            </Link>
            <a href="tel:+923355955525">
              <motion.button
                className="w-full px-4 py-3 bg-slate-800 text-white text-sm font-semibold rounded-lg border border-slate-700 active:scale-95 transition-transform"
                style={{ touchAction: "manipulation" }}
              >
                📞 Call: +92 335 5955525
              </motion.button>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/team">
                <motion.button
                  className="w-full px-3 py-2.5 bg-slate-800 text-white text-xs font-semibold rounded-lg border border-slate-700 active:scale-95 transition-transform"
                  onClick={() => setShowMenu(false)}
                  style={{ touchAction: "manipulation" }}
                >
                  👥 Team
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="w-full px-3 py-2.5 bg-slate-800 text-white text-xs font-semibold rounded-lg border border-slate-700 active:scale-95 transition-transform"
                  onClick={() => setShowMenu(false)}
                  style={{ touchAction: "manipulation" }}
                >
                  ℹ️ About
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default MobileHeader;
