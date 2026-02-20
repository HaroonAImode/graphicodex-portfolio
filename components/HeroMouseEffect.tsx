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
const SNAKE_LENGTH = 25;
const SEGMENT_SIZE = 24;
const SEGMENT_SPACING = 4;
const SNAKE_SPRING_CONFIG = { stiffness: 200, damping: 20, mass: 0.2 };

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
  targetX: number;
  targetY: number;
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

function SnakeSegment({ index, totalSegments, targetX, targetY, prevX, prevY }: SnakeSegmentProps) {
  const x = useMotionValue(targetX);
  const y = useMotionValue(targetY);

  // Faster, more responsive spring config
  const stiffness = 250 - (index * 4);
  const damping = 22 - (index * 0.3);

  const animatedX = useSpring(x, { 
    stiffness, 
    damping, 
    mass: 0.2 + (index * 0.015) 
  });
  const animatedY = useSpring(y, { 
    stiffness, 
    damping, 
    mass: 0.2 + (index * 0.015) 
  });

  useEffect(() => {
    if (prevX !== undefined && prevY !== undefined && index > 0) {
      x.set(prevX);
      y.set(prevY);
    } else {
      x.set(targetX);
      y.set(targetY);
    }
  }, [targetX, targetY, prevX, prevY, index, x, y]);

  // Size decreases gradually - bigger head, smaller tail
  const size = SEGMENT_SIZE - (index * 0.6);
  const progress = index / totalSegments;
  
  // Calculate direction for rotation
  const prevSegmentX = prevX !== undefined ? prevX : targetX;
  const prevSegmentY = prevY !== undefined ? prevY : targetY;
  const angle = Math.atan2(targetY - prevSegmentY, targetX - prevSegmentX) * (180 / Math.PI);

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
        x: animatedX,
        y: animatedY,
        width: size,
        height: size,
        rotate: angle,
        transformStyle: 'preserve-3d',
        zIndex: 100 + (totalSegments-index),
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-md"
        style={{
          background: `radial-gradient(circle, hsla(${hue}, ${saturation}%, ${lightness}%, ${glowIntensity * 0.8}), transparent 70%)`,
          transform: `scale(${1.5 + (isHead ? 0.5 : 0)})`,
        }}
      />
      
      {/* Main body segment */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: isHead 
            ? `radial-gradient(circle at 35% 35%, #60d0ff, #3b9eff 40%, #1e7ad9 100%)`
            : `radial-gradient(circle at 35% 35%, 
                hsl(${hue}, ${saturation}%, ${lightness + 15}%), 
                hsl(${hue}, ${saturation}%, ${lightness}%) 50%, 
                hsl(${hue}, ${saturation}%, ${lightness - 10}%) 100%)`,
          boxShadow: `
            0 0 ${glowSize}px hsla(${hue}, ${saturation}%, ${lightness}%, ${glowIntensity}),
            inset 0 0 ${size * 0.3}px rgba(255, 255, 255, 0.3),
            inset -2px -2px ${size * 0.2}px rgba(0, 0, 0, 0.3)
          `,
          border: isHead ? '2px solid rgba(255, 255, 255, 0.5)' : 'none',
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
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 60%)',
          }}
        />
        
        {/* Head eyes (only on first segment) */}
        {isHead && (
          <>
            <div
              className="absolute rounded-full bg-white"
              style={{
                top: '30%',
                left: '25%',
                width: '20%',
                height: '20%',
                boxShadow: 'inset 0 0 3px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div
                className="absolute rounded-full bg-black"
                style={{
                  top: '30%',
                  left: '30%',
                  width: '40%',
                  height: '40%',
                }}
              />
            </div>
            <div
              className="absolute rounded-full bg-white"
              style={{
                top: '30%',
                right: '25%',
                width: '20%',
                height: '20%',
                boxShadow: 'inset 0 0 3px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div
                className="absolute rounded-full bg-black"
                style={{
                  top: '30%',
                  left: '30%',
                  width: '40%',
                  height: '40%',
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
      </div>
    </motion.div>
  );
}

export default function HeroMouseEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const mouseY = useMotionValue(Number.POSITIVE_INFINITY);
  const [dots, setDots] = useState<Dot[]>([]);
  const [snakePositions, setSnakePositions] = useState<Array<{ x: number; y: number }>>([]);
  const snakeHistoryRef = useRef<Array<{ x: number; y: number }>>([]);
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const updateDots = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newDots = generateDots(rect.width, rect.height, 24);
      setDots(newDots);
      
      // Initialize snake at center
      if (snakeHistoryRef.current.length === 0) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const initialPositions: Array<{ x: number; y: number }> = [];
        for (let i = 0; i < SNAKE_LENGTH; i++) {
          initialPositions.push({ x: centerX, y: centerY });
        }
        setSnakePositions(initialPositions);
        snakeHistoryRef.current = Array(SNAKE_LENGTH * 2).fill({ x: centerX, y: centerY });
      }
    };

    updateDots();

    const resizeObserver = new ResizeObserver(updateDots);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Update snake positions with trailing effect
  useEffect(() => {
    const unsubscribe = mouseX.on("change", (x) => {
      const y = mouseY.get();
      if (Number.isFinite(x) && Number.isFinite(y)) {
        snakeHistoryRef.current.unshift({ x, y });
        if (snakeHistoryRef.current.length > SNAKE_LENGTH * 2) {
          snakeHistoryRef.current.pop();
        }

        // Sample positions for each segment with spacing
        const newPositions: Array<{ x: number; y: number }> = [];
        for (let i = 0; i < SNAKE_LENGTH; i++) {
          const historyIndex = i * SEGMENT_SPACING;
          if (historyIndex < snakeHistoryRef.current.length) {
            newPositions.push(snakeHistoryRef.current[historyIndex]);
          } else if (newPositions.length > 0) {
            newPositions.push(newPositions[newPositions.length - 1]);
          } else {
            newPositions.push({ x, y });
          }
        }
        setSnakePositions(newPositions);
      }
    });

    return unsubscribe;
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsMouseInside(true);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
    // Keep snake visible but reset to center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set(centerX);
      mouseY.set(centerY);
    }
  };

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

      {/* 3D Game Snake Following Cursor - Always visible */}
      {snakePositions.length > 0 && snakePositions.map((pos, index) => (
        <SnakeSegment
          index={index}
          key={`snake-${index}`}
          prevX={index > 0 ? snakePositions[index - 1]?.x : undefined}
          prevY={index > 0 ? snakePositions[index - 1]?.y : undefined}
          targetX={pos.x}
          targetY={pos.y}
          totalSegments={SNAKE_LENGTH}
        />
      ))}
    </div>
  );
}
