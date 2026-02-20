"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────────

export interface AIServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  gradient: string;
  color: string;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

// ─── Card Component ─────────────────────────────────────────────────────────────

function AIServiceCard({
  id,
  title,
  description,
  icon,
  features,
  technologies,
  gradient,
  color,
  dimmed,
  onHoverStart,
  onHoverEnd,
}: AIServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <motion.div
        animate={{
          scale: dimmed ? 0.96 : 1,
          opacity: dimmed ? 0.5 : 1,
        }}
        className={cn(
          "group relative flex flex-col gap-5 overflow-hidden rounded-2xl border p-6 cursor-pointer",
          "bg-slate-800/50 backdrop-blur-sm border-slate-700",
          "shadow-lg transition-all duration-300",
          "hover:shadow-xl hover:border-slate-600 hover:-translate-y-1"
        )}
        style={{
          willChange: dimmed ? "transform, opacity" : "auto",
          contain: "layout style paint",
        }}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Static accent tint — always visible */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 20% 20%, ${color}14, transparent 65%)`,
          }}
        />

        {/* Hover glow layer - CSS only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at 20% 20%, ${color}2e, transparent 65%)`,
          }}
        />

        {/* Shimmer sweep - simplified */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[55%] -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-500 ease-out group-hover:translate-x-[280%]"
          style={{ willChange: "transform" }}
        />

        {/* Icon badge */}
        <div className="relative z-10 flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl text-3xl`}
            style={{
              background: `${color}18`,
              boxShadow: `inset 0 0 0 1px ${color}30`,
            }}
          >
            {icon}
          </div>
          <h3 className="font-bold text-xl text-white tracking-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="relative z-10 flex flex-col gap-3">
          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>

          {/* Features - show first 4 */}
          <div className="space-y-2">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <svg 
                  className="w-4 h-4 mt-0.5 flex-shrink-0" 
                  style={{ color }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-xs text-gray-400">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-md bg-slate-700/50 text-gray-300 border border-slate-600"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-slate-700/50 text-gray-300 border border-slate-600">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Accent bottom line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
          style={{
            background: `linear-gradient(to right, ${color}80, transparent)`,
          }}
        />

        {/* View Details indicator */}
        <div className="relative z-10 flex items-center gap-2 text-sm font-medium pt-2" style={{ color }}>
          <span>View Details</span>
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            style={{ willChange: "transform" }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}

// Export memoized version for performance
export default memo(AIServiceCard);
