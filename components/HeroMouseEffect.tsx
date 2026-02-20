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

// Snake configuration
const SNAKE_LENGTH = 20;
const SEGMENT_SIZE = 12;
const SEGMENT_SPACING = 8;
const SNAKE_SPRING_CONFIG = { stiffness: 150, damping: 25, mass: 0.3 };

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

  // Calculate delay based on segment position
  const delay = index * 0.02;
  const stiffness = 150 - (index * 3); // Gradually decrease stiffness for trailing effect

  const animatedX = useSpring(x, { 
    stiffness, 
    damping: 25 - index, 
    mass: 0.3 + (index * 0.02) 
  });
  const animatedY = useSpring(y, { 
    stiffness, 
    damping: 25 - index, 
    mass: 0.3 + (index * 0.02) 
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

  // Size decreases along the snake body
  const size = SEGMENT_SIZE - (index * 0.4);
  const progress = index / totalSegments;
  
  // Calculate 3D rotation based on position
  const rotateX = useTransform([animatedX, animatedY], ([x, y]) => {
    return ((y as number) / 10) % 360;
  });
  
  const rotateY = useTransform([animatedX, animatedY], ([x, y]) => {
    return ((x as number) / 10) % 360;
  });

  // Scale animation for 3D effect
  const scale = useTransform([animatedX, animatedY], () => {
    return 1 + Math.sin(Date.now() * 0.001 + index * 0.5) * 0.1;
  });

  // Color gradient from head to tail
  const hue = 200 + (progress * 60); // Blue to cyan gradient
  const saturation = 100 - (progress * 30);
  const lightness = 50 + (progress * 20);

  return (
    <motion.div
      className="absolute rounded-full will-change-transform pointer-events-none"
      style={{
        x: animatedX,
        y: animatedY,
        width: size,
        height: size,
        rotateX,
        rotateY,
        scale,
        background: `radial-gradient(circle at 30% 30%, hsl(${hue}, ${saturation}%, ${lightness + 20}%), hsl(${hue}, ${saturation}%, ${lightness}%))`,
        boxShadow: `0 0 ${20 - index}px hsl(${hue}, ${saturation}%, ${lightness}%), 0 0 ${40 - index * 2}px hsl(${hue}, ${saturation}%, ${lightness}%)`,
        opacity: 1 - (progress * 0.5),
        transformStyle: 'preserve-3d',
        zIndex: totalSegments - index,
      }}
    >
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6), transparent 70%)`,
        }}
      />
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

  useEffect(() => {
    const updateDots = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newDots = generateDots(rect.width, rect.height, 24);
      setDots(newDots);
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

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(Number.POSITIVE_INFINITY);
    mouseY.set(Number.POSITIVE_INFINITY);
    snakeHistoryRef.current = [];
    setSnakePositions([]);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
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

      {/* 3D Snake Following Cursor */}
      {snakePositions.map((pos, index) => (
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
