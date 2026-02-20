"use client";

import { useEffect, useRef } from "react";

const SNAKE_LENGTH = 25; // Reduced for better performance
const SEGMENT_DISTANCE = 16;
const HEAD_SIZE = 22;
const BODY_SIZE = 18;
const TAIL_SIZE = 8;
const FOLLOW_SPEED = 0.12;
const WAVE_AMPLITUDE = 4;
const WAVE_FREQUENCY = 0.3;

interface Segment {
  x: number;
  y: number;
  element: HTMLDivElement | null;
}

export default function HeroMouseEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const segmentsRef = useRef<Segment[]>([]);
  const targetRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Initialize segments with DOM elements
    const initialSegments: Segment[] = [];
    for (let i = 0; i < SNAKE_LENGTH; i++) {
      const element = document.createElement("div");
      element.className = "absolute rounded-full pointer-events-none";
      element.style.willChange = "transform";
      element.style.transform = `translate(${centerX}px, ${centerY}px)`;
      
      const isHead = i === 0;
      const progress = i / SNAKE_LENGTH;
      const size = isHead ? HEAD_SIZE : BODY_SIZE - progress * (BODY_SIZE - TAIL_SIZE);
      
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.zIndex = String(200 - i);
      
      const hue = 200 - progress * 40;
      const lightness = 55 - progress * 10;
      
      element.style.background = `radial-gradient(circle at 30% 30%, 
        hsl(${hue}, 90%, ${lightness + 15}%),
        hsl(${hue}, 80%, ${lightness}%) 50%,
        hsl(${hue}, 80%, ${lightness - 10}%) 100%)`;
      
      element.style.boxShadow = `
        0 0 ${18 - progress * 8}px hsla(${hue}, 90%, ${lightness}%, 0.7),
        inset -3px -3px ${size * 0.3}px rgba(0,0,0,0.4),
        inset 3px 3px ${size * 0.3}px rgba(255,255,255,0.3)`;
      
      // Add eyes to head
      if (isHead) {
        const leftEye = document.createElement("div");
        leftEye.className = "absolute bg-white rounded-full";
        leftEye.style.width = "25%";
        leftEye.style.height = "25%";
        leftEye.style.top = "25%";
        leftEye.style.left = "18%";
        
        const leftPupil = document.createElement("div");
        leftPupil.className = "absolute bg-black rounded-full";
        leftPupil.style.width = "50%";
        leftPupil.style.height = "50%";
        leftPupil.style.top = "25%";
        leftPupil.style.left = "25%";
        leftEye.appendChild(leftPupil);
        
        const rightEye = document.createElement("div");
        rightEye.className = "absolute bg-white rounded-full";
        rightEye.style.width = "25%";
        rightEye.style.height = "25%";
        rightEye.style.top = "25%";
        rightEye.style.right = "18%";
        
        const rightPupil = document.createElement("div");
        rightPupil.className = "absolute bg-black rounded-full";
        rightPupil.style.width = "50%";
        rightPupil.style.height = "50%";
        rightPupil.style.top = "25%";
        rightPupil.style.left = "25%";
        rightEye.appendChild(rightPupil);
        
        element.appendChild(leftEye);
        element.appendChild(rightEye);
      }
      
      container.appendChild(element);
      
      initialSegments.push({
        x: centerX,
        y: centerY,
        element
      });
    }
    
    segmentsRef.current = initialSegments;
    targetRef.current = { x: centerX, y: centerY };

    // Intersection Observer to pause when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    observer.observe(container);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      targetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Optimized animation loop
    const animate = () => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      timeRef.current += 0.05;
      const segments = segmentsRef.current;

      // Update head
      const head = segments[0];
      head.x += (targetRef.current.x - head.x) * FOLLOW_SPEED;
      head.y += (targetRef.current.y - head.y) * FOLLOW_SPEED;

      // Update body with physics
      for (let i = 1; i < segments.length; i++) {
        const prev = segments[i - 1];
        const curr = segments[i];

        const dx = prev.x - curr.x;
        const dy = prev.y - curr.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        const waveOffset =
          Math.sin(timeRef.current + i * WAVE_FREQUENCY) *
          WAVE_AMPLITUDE *
          (1 - i / SNAKE_LENGTH);

        const targetX =
          prev.x -
          Math.cos(angle) * SEGMENT_DISTANCE +
          Math.cos(angle + Math.PI / 2) * waveOffset;

        const targetY =
          prev.y -
          Math.sin(angle) * SEGMENT_DISTANCE +
          Math.sin(angle + Math.PI / 2) * waveOffset;

        curr.x += (targetX - curr.x) * 0.35;
        curr.y += (targetY - curr.y) * 0.35;
      }

      // Update DOM elements (batched)
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        if (seg.element) {
          const isHead = i === 0;
          const progress = i / SNAKE_LENGTH;
          const size = isHead ? HEAD_SIZE : BODY_SIZE - progress * (BODY_SIZE - TAIL_SIZE);
          
          seg.element.style.transform = `translate(${seg.x - size / 2}px, ${seg.y - size / 2}px)`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      segmentsRef.current.forEach(seg => {
        if (seg.element && container.contains(seg.element)) {
          container.removeChild(seg.element);
        }
      });
      
      segmentsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        perspective: "1200px",
        contain: "layout style paint"
      }}
    />
  );
}