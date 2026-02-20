"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SNAKE_LENGTH = 40;
const SEGMENT_DISTANCE = 14;
const HEAD_SIZE = 26;
const BODY_SIZE = 22;
const TAIL_SIZE = 10;
const FOLLOW_SPEED = 0.18;
const WAVE_AMPLITUDE = 6;
const WAVE_FREQUENCY = 0.4;

interface Segment {
  x: number;
  y: number;
}

export default function HeroMouseEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [segments, setSegments] = useState<Segment[]>([]);
  const target = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  // Initialize snake
  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const initial: Segment[] = [];
    for (let i = 0; i < SNAKE_LENGTH; i++) {
      initial.push({ x: centerX, y: centerY });
    }

    target.current = { x: centerX, y: centerY };
    setSegments(initial);
  }, []);

  // Main animation loop
  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.05;

      setSegments(prev => {
        if (prev.length === 0) return prev;

        const newSegments = [...prev];

        // HEAD movement (smooth lerp)
        const head = newSegments[0];
        head.x += (target.current.x - head.x) * FOLLOW_SPEED;
        head.y += (target.current.y - head.y) * FOLLOW_SPEED;

        // BODY follow physics
        for (let i = 1; i < newSegments.length; i++) {
          const prevSeg = newSegments[i - 1];
          const currSeg = newSegments[i];

          const dx = prevSeg.x - currSeg.x;
          const dy = prevSeg.y - currSeg.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const angle = Math.atan2(dy, dx);

          const waveOffset =
            Math.sin(timeRef.current + i * WAVE_FREQUENCY) *
            WAVE_AMPLITUDE *
            (1 - i / SNAKE_LENGTH);

          const targetX =
            prevSeg.x -
            Math.cos(angle) * SEGMENT_DISTANCE +
            Math.cos(angle + Math.PI / 2) * waveOffset;

          const targetY =
            prevSeg.y -
            Math.sin(angle) * SEGMENT_DISTANCE +
            Math.sin(angle + Math.PI / 2) * waveOffset;

          currSeg.x += (targetX - currSeg.x) * 0.4;
          currSeg.y += (targetY - currSeg.y) * 0.4;
        }

        return [...newSegments];
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    target.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {segments.map((seg, index) => {
        const isHead = index === 0;
        const progress = index / SNAKE_LENGTH;

        const size = isHead
          ? HEAD_SIZE
          : BODY_SIZE - progress * (BODY_SIZE - TAIL_SIZE);

        const prev = segments[index - 1] || seg;
        const angle =
          Math.atan2(seg.y - prev.y, seg.x - prev.x) * (180 / Math.PI);

        const hue = 200 - progress * 40;
        const lightness = 55 - progress * 10;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              x: seg.x - size / 2,
              y: seg.y - size / 2,
              width: size,
              height: size,
              rotate: angle,
              zIndex: 200 - index,
              background: `radial-gradient(circle at 30% 30%, 
                hsl(${hue}, 90%, ${lightness + 15}%),
                hsl(${hue}, 80%, ${lightness}%) 50%,
                hsl(${hue}, 80%, ${lightness - 10}%) 100%)`,
              boxShadow: `
                0 0 ${20 - progress * 10}px hsla(${hue}, 90%, ${lightness}%, 0.8),
                inset -4px -4px ${size * 0.3}px rgba(0,0,0,0.4),
                inset 4px 4px ${size * 0.3}px rgba(255,255,255,0.3)
              `,
              transformStyle: "preserve-3d",
            }}
            initial={false}
          >
            {/* Eyes */}
            {isHead && (
              <>
                <div
                  className="absolute bg-white rounded-full"
                  style={{
                    width: "25%",
                    height: "25%",
                    top: "25%",
                    left: "18%",
                  }}
                >
                  <div className="absolute bg-black rounded-full w-1/2 h-1/2 top-1/4 left-1/4" />
                </div>

                <div
                  className="absolute bg-white rounded-full"
                  style={{
                    width: "25%",
                    height: "25%",
                    top: "25%",
                    right: "18%",
                  }}
                >
                  <div className="absolute bg-black rounded-full w-1/2 h-1/2 top-1/4 left-1/4" />
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}