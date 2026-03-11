"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const BottomNav: React.FC = () => {
  const router = useRouter();
  
  const navItems = [
    { 
      name: "Home", 
      href: "/", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "AI", 
      href: "/ai-services", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      name: "Team", 
      href: "/team", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      name: "Portfolio", 
      href: "/portfolio", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      name: "More", 
      href: "/about", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden shadow-2xl"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Top accent line - thicker and at very top with no gap */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" style={{ margin: 0, padding: 0 }}></div>
      
      <div className="bg-zinc-950/95 backdrop-blur-xl">
        <div className="flex items-center justify-around px-1 py-2 safe-area-inset-bottom max-w-[600px] mx-auto w-full">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.name} href={item.href} className="flex-1">
              <motion.div
                className={`flex flex-col items-center justify-center px-2 py-2 rounded-xl transition-all duration-300 relative active:scale-95 ${
                  active
                    ? "text-orange-400"
                    : "text-gray-400"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-orange-500/10 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <motion.div
                  animate={active ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  className={`relative z-10 mb-1 ${
                    active ? "text-orange-400" : "text-gray-400"
                  }`}
                >
                  {item.icon}
                </motion.div>
                <span className={`text-[9px] font-semibold mt-0.5 relative z-10 ${
                  active ? "text-orange-400" : "text-gray-400"
                }`}>
                  {item.name}
                </span>
                {active && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-orange-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
      
      {/* Safe area for devices with notches */}
      <div className="h-[env(safe-area-inset-bottom)] bg-zinc-950"></div>
    </div>
    </motion.nav>
  );
};

export default BottomNav;
