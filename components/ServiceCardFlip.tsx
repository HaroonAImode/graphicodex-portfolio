"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ServiceExample {
  title: string;
  description: string;
  image: string;
}

export interface ServiceCardFlipProps {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  gradient: string;
  examples: ServiceExample[];
  href: string;
}

function ServiceCardFlip({
  title,
  subtitle,
  icon,
  description,
  features,
  gradient,
  examples,
  href,
}: ServiceCardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[380px] md:h-[420px] w-full [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ contain: "layout style paint" }}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-transform duration-500 ease-out",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
        style={{ willChange: isFlipped ? "transform" : "auto" }}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-slate-800/50 backdrop-blur-sm",
            "border border-slate-700",
            "shadow-lg",
            "transition-all duration-500",
            "group-hover:shadow-xl group-hover:shadow-blue-500/10",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Gradient Background Effect */}
          <div className="relative h-full overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}></div>
            
            {/* Simplified animated background - no individual circles */}
            <div className="absolute inset-0 flex items-center justify-center pt-16">
              <div 
                className={`w-32 h-32 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
              />
            </div>

            {/* Icon Display */}
            <div className="absolute top-0 left-0 right-0 flex justify-center pt-12">
              <div 
                className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
                style={{ willChange: "transform" }}
              >
                {icon}
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="space-y-3">
              <h3 className="font-bold text-xl text-white leading-tight tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-4px]">
                {title}
              </h3>
              <p className="line-clamp-2 text-sm text-gray-400 leading-relaxed transition-all delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px]">
                {subtitle}
              </p>
              
              {/* Flip Indicator */}
              <div className="flex items-center gap-2 text-blue-400 text-xs pt-2">
                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Hover to see examples</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-2xl p-6",
            "bg-slate-800/95 backdrop-blur-sm",
            "border border-slate-700",
            "shadow-lg",
            "flex flex-col overflow-y-auto",
            "transition-all duration-700",
            "group-hover:shadow-xl group-hover:shadow-blue-500/10",
            isFlipped ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex-1 space-y-4 overflow-y-auto">
            {/* Title */}
            <div className="space-y-2 pb-3 border-b border-slate-700">
              <h3 className="font-bold text-lg text-white leading-tight tracking-tight flex items-center gap-2">
                <span className="text-2xl">{icon}</span>
                {title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Examples Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-blue-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Example Solutions
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {examples.map((example, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-24 w-full bg-slate-800">
                      <Image
                        src={example.image}
                        alt={example.title}
                        fill
                        sizes="(max-width: 768px) 150px, 200px"
                        className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-2 space-y-1">
                      <h5 className="text-xs font-semibold text-white line-clamp-1">
                        {example.title}
                      </h5>
                      <p className="text-[10px] text-gray-400 line-clamp-2 leading-tight">
                        {example.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-semibold text-blue-400">Key Features</h4>
              <div className="space-y-1.5">
                {features.slice(0, 3).map((feature) => (
                  <div
                    className="flex items-start gap-2 text-xs text-gray-300"
                    key={feature}
                  >
                    <svg className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-4 pt-4 border-t border-slate-700">
            <Link href={href}>
              <div
                className={cn(
                  "relative group/cta",
                  "flex items-center justify-between",
                  "rounded-xl p-3",
                  "transition-all duration-300",
                  `bg-gradient-to-r ${gradient} opacity-90`,
                  "hover:opacity-100 hover:scale-[1.02] cursor-pointer",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                <span className="font-semibold text-sm text-white">
                  Explore Service
                </span>
                <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export memoized version for performance
export default memo(ServiceCardFlip);