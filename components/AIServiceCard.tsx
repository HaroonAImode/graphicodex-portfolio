"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Constants ──────────────────────────────────────────────────────────────────

const TILT_MAX = 8;
const TILT_SPRING = { stiffness: 300, damping: 28 } as const;
const GLOW_SPRING = { stiffness: 180, damping: 22 } as const;

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

export default function AIServiceCard({
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
  const cardRef = useRef<HTMLDivElement>(null);

  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);

  const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);

  const rotateX = useSpring(rawRotateX, TILT_SPRING);
  const rotateY = useSpring(rawRotateY, TILT_SPRING);
  const glowOpacity = useSpring(0, GLOW_SPRING);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    normX.set((e.clientX - rect.left) / rect.width);
    normY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    normX.set(0.5);
    normY.set(0.5);
    glowOpacity.set(0);
    onHoverEnd();
  };

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
          "hover:shadow-xl hover:border-slate-600"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 900,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {/* Static accent tint — always visible */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 20% 20%, ${color}14, transparent 65%)`,
          }}
        />

        {/* Hover glow layer */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(ellipse at 20% 20%, ${color}2e, transparent 65%)`,
          }}
        />

        {/* Shimmer sweep */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[55%] -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[280%]"
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
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}
