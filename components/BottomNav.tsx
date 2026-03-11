"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: (active: boolean) => (
      <svg className="w-[21px] h-[21px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "AI",
    href: "/ai-services",
    icon: (active: boolean) => (
      <svg className="w-[21px] h-[21px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: "Work",
    href: "/portfolio",
    icon: (active: boolean) => (
      <svg className="w-[21px] h-[21px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "/about",
    icon: (active: boolean) => (
      <svg className="w-[21px] h-[21px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Team",
    href: "/team",
    icon: (active: boolean) => (
      <svg className="w-[21px] h-[21px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: (active: boolean) => (
      <svg className="w-[21px] h-[21px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const BottomNav: React.FC = () => {
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 340, damping: 30, delay: 0.1 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      {/* Frosted bar */}
      <div
        className="relative flex items-center justify-around px-1"
        style={{
          background: "rgba(10, 6, 4, 0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderTop: "1.5px solid rgba(232,69,0,0.5)",
          boxShadow: "0 -2px 0 rgba(232,69,0,0.25), 0 -8px 40px rgba(232,69,0,0.08), 0 -4px 40px rgba(0,0,0,0.7)",
          paddingBottom: "env(safe-area-inset-bottom, 8px)",
          paddingTop: "8px",
        }}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.name} href={item.href} className="flex-1 flex justify-center">
              <motion.div
                whileTap={{ scale: 0.85 }}
                className="relative flex flex-col items-center justify-center gap-[4px] py-1.5 px-1 min-w-[44px]"
                style={{ touchAction: "manipulation" }}
              >
                {/* Active: orange filled pill behind icon */}
                {active && (
                  <motion.div
                    layoutId="bottomNavPill"
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, #E84500 0%, #bf3800 100%)",
                      boxShadow: "0 2px 16px rgba(232,69,0,0.55)",
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}

                {/* Icon */}
                <span
                  className="relative z-10"
                  style={{ color: active ? "#ffffff" : "rgba(200,200,200,0.8)" }}
                >
                  {item.icon(active)}
                </span>

                {/* Label */}
                <span
                  className="relative z-10 font-semibold leading-none"
                  style={{
                    fontSize: "10.5px",
                    letterSpacing: "0.04em",
                    color: active ? "#ffffff" : "rgba(180,180,180,0.75)",
                  }}
                >
                  {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNav;
