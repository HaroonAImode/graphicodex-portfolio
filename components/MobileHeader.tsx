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
      className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-xl"
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
          className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900/50 transition-colors"
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
          className="border-t border-zinc-800/50 bg-zinc-950/98 backdrop-blur-xl"
        >
          <div className="px-4 py-3 space-y-2 max-h-[calc(100vh-60px)] overflow-y-auto">
            <Link href="/contact">
              <motion.button
                className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-lg shadow-lg active:scale-95 transition-transform"
                onClick={() => setShowMenu(false)}
                style={{ touchAction: "manipulation" }}
              >
                📅 Book Free Demo
              </motion.button>
            </Link>
            <a href="tel:+923356533350">
              <motion.button
                className="w-full px-4 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-lg border border-zinc-800 active:scale-95 transition-transform"
                style={{ touchAction: "manipulation" }}
              >
                📞 Call: +92 335 6533350
              </motion.button>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/team">
                <motion.button
                  className="w-full px-3 py-2.5 bg-zinc-900 text-white text-xs font-semibold rounded-lg border border-zinc-800 active:scale-95 transition-transform"
                  onClick={() => setShowMenu(false)}
                  style={{ touchAction: "manipulation" }}
                >
                  👥 Team
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="w-full px-3 py-2.5 bg-zinc-900 text-white text-xs font-semibold rounded-lg border border-zinc-800 active:scale-95 transition-transform"
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
