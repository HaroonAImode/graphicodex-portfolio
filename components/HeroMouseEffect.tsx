"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };
const OPACITY_DURATION_BASE = 0.8;
const OPACITY_DURATION_VARIATION = 0.2;
const OPACITY_EASE = [0.4, 0, 0.2, 1] as const;
const OPACITY_DELAY_CYCLE = 1.5;
const OPACITY_DELAY_STEP = 0.02;
const MIN_OPACITY_MULTIPLIER = 0.5;
const MAX_OPACITY_MULTIPLIER = 1.5;
const MIN_OPACITY_FALLBACK = 0.3;
const PROXIMITY_MULTIPLIER = 1.2;
const PROXIMITY_OPACITY_BOOST = 0.8;

// Snake configuration - Game-like realistic snake
const SNAKE_LENGTH = 30;
const SEGMENT_SIZE = 20;
const SEGMENT_DISTANCE = 18; // Distance between segments
const SNAKE_SPEED = 0.15; // How fast snake follows (0-1)

interface Dot {
  id: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  opacity: number;
}

interface DotComponentProps {
  dot: Dot;
  index: number;
  dotSize: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  repulsionRadius: number;
  repulsionStrength: number;
}

interface SnakeSegmentProps {
  index: number;
  totalSegments: number;
  x: number;
  y: number;
  prevX?: number;
  prevY?: number;
}

function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function generateDots(width: number, height: number, spacing: number): Dot[] {
  const dots: Dot[] = [];
  const cols = Math.ceil(width / spacing);
  const rows = Math.ceil(height / spacing);
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const x = col * spacing;
      const y = row * spacing;

      // Calculate distance from center
      const dx = x - centerX;
      const dy = y - centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

      // Calculate edge factor (0 at edges, 1 at center)
      const edgeFactor = Math.min(distanceFromCenter / (maxDistance * 0.7), 1);

      // Skip dots near edges with probability based on distance
      if (Math.random() > edgeFactor) {
        continue;
      }

      const pattern = (row + col) % 3;
      const baseOpacities = [0.3, 0.5, 0.7];
      const opacity = baseOpacities[pattern] * edgeFactor;

      dots.push({
        id: `dot-${row}-${col}`,
        x,
        y,
        baseX: x,
        baseY: y,
        opacity,
      });
    }
  }

  return dots;
}

function DotComponent({
  dot,
  index,
  dotSize,
  mouseX,
  mouseY,
  repulsionRadius,
  repulsionStrength,
}: DotComponentProps) {
  const posX = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!(Number.isFinite(mx) && Number.isFinite(my))) {
      return 0;
    }

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.cos(angle) * force;
    }

    return 0;
  });

  const posY = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!(Number.isFinite(mx) && Number.isFinite(my))) {
      return 0;
    }

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.sin(angle) * force;
    }

    return 0;
  });

  const opacityBoost = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!(Number.isFinite(mx) && Number.isFinite(my))) return 0;

    const distance = calculateDistance(dot.baseX, dot.baseY, mx, my);
    const maxDistance = repulsionRadius * PROXIMITY_MULTIPLIER;

    if (distance < maxDistance) {
      const proximityFactor = 1 - distance / maxDistance;
      return proximityFactor * PROXIMITY_OPACITY_BOOST;
    }

    return 0;
  });

  const x = useSpring(posX, SPRING_CONFIG);
  const y = useSpring(posY, SPRING_CONFIG);

  const baseMinOpacity = Math.max(
    dot.opacity * MIN_OPACITY_MULTIPLIER,
    MIN_OPACITY_FALLBACK
  );
  const baseMaxOpacity = Math.min(dot.opacity * MAX_OPACITY_MULTIPLIER, 1);

  const minOpacityWithBoost = useTransform(opacityBoost, (boost) =>
    Math.min(baseMinOpacity + boost, 1)
  );

  const delay = (index * OPACITY_DELAY_STEP) % OPACITY_DELAY_CYCLE;

  return (
    <motion.div
      animate={{
        opacity: [baseMinOpacity, baseMaxOpacity, baseMinOpacity],
      }}
      className="absolute rounded-full bg-blue-400/60 will-change-transform"
      initial={{ opacity: baseMinOpacity }}
      style={{
        width: dotSize,
        height: dotSize,
        left: dot.baseX,
        top: dot.baseY,
        x,
        y,
        opacity: useSpring(minOpacityWithBoost, {
          stiffness: 150,
          damping: 25,
        }),
      }}
      transition={{
        opacity: {
          duration:
            OPACITY_DURATION_BASE + (index % 4) * OPACITY_DURATION_VARIATION,
          repeat: Infinity,
          ease: OPACITY_EASE,
          delay,
          times: [0, 0.5, 1],
        },
      }}
    />
  );
}

function SnakeSegment({ index, totalSegments, x, y, prevX, prevY }: SnakeSegmentProps) {
  // Size decreases gradually - bigger head, smaller tail
  const size = SEGMENT_SIZE - (index * 0.4);
  const progress = index / totalSegments;
  
  // Calculate direction for rotation
  const prevSegmentX = prevX !== undefined ? prevX : x;
  const prevSegmentY = prevY !== undefined ? prevY : y;
  const angle = Math.atan2(y - prevSegmentY, x - prevSegmentX) * (180 / Math.PI);

  // Enhanced 3D effect with better colors
  const isHead = index === 0;
  const isTail = index > totalSegments - 5;
  
  // Color gradient - vibrant blue to cyan
  const hue = 200 - (progress * 40); // Blue to deeper blue
  const saturation = 90 - (progress * 20);
  const lightness = 55 + (progress * 10);
  
  // Glow intensity
  const glowSize = Math.max(30 - index * 1.2, 10);
  const glowIntensity = 1 - (progress * 0.6);

  return (
    <motion.div
      className="absolute will-change-transform pointer-events-none"
      style={{
        x: x - size / 2,
        y: y - size / 2,
        width: size,
        height: size,
        rotate: angle,
        transformStyle: 'preserve-3d',
        zIndex: 100 + (totalSegments - index),
      }}
      initial={false}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md"
        animate={isHead ? {
          scale: [1.5, 2, 1.5],
          opacity: [glowIntensity * 0.8, glowIntensity * 1.2, glowIntensity * 0.8]
        } : {}}
        transition={isHead ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
        style={{
          background: `radial-gradient(circle, hsla(${hue}, ${saturation}%, ${lightness}%, ${glowIntensity * 0.8}), transparent 70%)`,
          transform: `scale(${1.5 + (isHead ? 0.5 : 0)})`,
        }}
      />
      
      {/* Main body segment */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={isHead ? {
          scale: [1, 1.1, 1]
        } : {}}
        transition={isHead ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
        style={{
          background: isHead 
            ? `radial-gradient(circle at 35% 35%, #60d0ff, #3b9eff 40%, #1e7ad9 100%)`
            : `radial-gradient(circle at 35% 35%, 
                hsl(${hue}, ${saturation}%, ${lightness + 15}%), 
                hsl(${hue}, ${saturation}%, ${lightness}%) 50%, 
                hsl(${hue}, ${saturation}%, ${lightness - 10}%) 100%)`,
          boxShadow: `
            0 0 ${glowSize}px hsla(${hue}, ${saturation}%, ${lightness}%, ${glowIntensity}),
            0 0 ${glowSize * 2}px hsla(${hue}, ${saturation}%, ${lightness}%, ${glowIntensity * 0.5}),
            inset 0 0 ${size * 0.3}px rgba(255, 255, 255, 0.3),
            inset -2px -2px ${size * 0.2}px rgba(0, 0, 0, 0.3)
          `,
          border: isHead ? '3px solid rgba(255, 255, 255, 0.8)' : 'none',
        }}
      >
        {/* Shiny highlight */}
        <div
          className="absolute rounded-full"
          style={{
            top: '15%',
            left: '20%',
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent 60%)',
          }}
        />
        
        {/* Head eyes (only on first segment) */}
        {isHead && (
          <>
            <div
              className="absolute rounded-full bg-white"
              style={{
                top: '25%',
                left: '20%',
                width: '25%',
                height: '25%',
                boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div
                className="absolute rounded-full bg-black"
                style={{
                  top: '25%',
                  left: '25%',
                  width: '50%',
                  height: '50%',
                }}
              />
            </div>
            <div
              className="absolute rounded-full bg-white"
              style={{
                top: '25%',
                right: '20%',
                width: '25%',
                height: '25%',
                boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div
                className="absolute rounded-full bg-black"
                style={{
                  top: '25%',
                  left: '25%',
                  width: '50%',
                  height: '50%',
                }}
              />
            </div>
          </>
        )}
        
        {/* Tail fade effect */}
        {isTail && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, transparent 30%, rgba(30, 58, 138, ${(totalSegments - index) / 5}) 100%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function HeroMouseEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [snakeSegments, setSnakeSegments] = useState<Array<{ x: number; y: number }>>([]);
  const targetPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Initialize dots and snake
  useEffect(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const newDots = generateDots(rect.width, rect.height, 24);
    setDots(newDots);
    
    // Initialize snake at center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const initialSegments: Array<{ x: number; y: number }> = [];
    
    for (let i = 0; i < SNAKE_LENGTH; i++) {
      initialSegments.push({ x: centerX, y: centerY });
    }
    
    setSnakeSegments(initialSegments);
    targetPositionRef.current = { x: centerX, y: centerY };

    const resizeObserver = new ResizeObserver(() => {
      const newRect = containerRef.current?.getBoundingClientRect();
      if (newRect) {
        const newDots = generateDots(newRect.width, newRect.height, 24);
        setDots(newDots);
      }
    });
    
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Animate snake following cursor
  useEffect(() => {
    const animate = () => {
      setSnakeSegments((prevSegments) => {
        if (prevSegments.length === 0) return prevSegments;

        const newSegments = [...prevSegments];
        const target = targetPositionRef.current;

        // Move head toward target
        const head = newSegments[0];
        const dx = target.x - head.x;
        const dy = target.y - head.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          // Smoothly move head toward target
          const moveX = (dx / distance) * Math.min(distance * SNAKE_SPEED, 5);
          const moveY = (dy / distance) * Math.min(distance * SNAKE_SPEED, 5);
          newSegments[0] = { x: head.x + moveX, y: head.y + moveY };
        }

        // Each segment follows the previous one at fixed distance
        for (let i = 1; i < newSegments.length; i++) {
          const prev = newSegments[i - 1];
          const current = newSegments[i];
          
          const dx = prev.x - current.x;
          const dy = prev.y - current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > SEGMENT_DISTANCE) {
            // Move segment toward previous segment
            const ratio = (distance - SEGMENT_DISTANCE) / distance;
            newSegments[i] = {
              x: current.x + dx * ratio,
              y: current.y + dy * ratio,
            };
          }
        }

        return newSegments;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetPositionRef.current = { x, y };
  };

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      targetPositionRef.current = { x: centerX, y: centerY };
    }
  };

  const handleMouseLeave = () => {
    // Keep snake at current position when mouse leaves
  };

  // Create motion values for dot repulsion
  const mouseX = useMotionValue(targetPositionRef.current.x);
  const mouseY = useMotionValue(targetPositionRef.current.y);

  useEffect(() => {
    const animate = () => {
      mouseX.set(targetPositionRef.current.x);
      mouseY.set(targetPositionRef.current.y);
      requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [mouseX, mouseY]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={containerRef}
      style={{ perspective: '1000px' }}
    >
      {/* Animated Dots */}
      {dots.map((dot, index) => (
        <DotComponent
          dot={dot}
          dotSize={2}
          index={index}
          key={dot.id}
          mouseX={mouseX}
          mouseY={mouseY}
          repulsionRadius={100}
          repulsionStrength={25}
        />
      ))}

      {/* 3D Game Snake Following Cursor */}
      {snakeSegments.map((segment, index) => (
        <SnakeSegment
          index={index}
          key={`snake-${index}`}
          prevX={index > 0 ? snakeSegments[index - 1].x : undefined}
          prevY={index > 0 ? snakeSegments[index - 1].y : undefined}
          x={segment.x}
          y={segment.y}
          totalSegments={SNAKE_LENGTH}
        />
      ))}
    </div>
  );
}
