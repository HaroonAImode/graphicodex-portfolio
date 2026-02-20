"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

// Enhanced spring physics for smoother movement
const SPRING_CONFIG = { stiffness: 150, damping: 20, mass: 0.8 };
const SNAKE_SPRING_CONFIG = { stiffness: 120, damping: 15, mass: 1.2 };

// Snake configuration - Professional game-like setup
const SNAKE_LENGTH = 35;
const SEGMENT_SIZE = 28;
const SEGMENT_DISTANCE = 22;
const HEAD_SIZE = 34;
const TAIL_SIZE = 18;
const SNAKE_SPEED = 0.18;
const SMOOTHING_FACTOR = 0.15;

// Trail effect configuration
const TRAIL_LENGTH = 8;
const TRAIL_OPACITY = 0.3;

interface Dot {
  id: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  opacity: number;
  scale: number;
  phase: number;
}

interface SnakeSegment {
  x: number;
  y: number;
  angle: number;
  velocity: { x: number; y: number };
  scale: number;
}

interface TrailParticle {
  x: number;
  y: number;
  life: number;
  size: number;
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
      const x = col * spacing + (row % 2) * (spacing / 2);
      const y = row * spacing;

      const dx = x - centerX;
      const dy = y - centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
      const edgeFactor = Math.max(0, 1 - distanceFromCenter / (maxDistance * 0.8));

      if (Math.random() > edgeFactor * 0.9) continue;

      const pattern = (row + col) % 4;
      const baseOpacities = [0.15, 0.25, 0.35, 0.2];
      const baseScales = [0.8, 1.0, 1.2, 0.9];
      
      dots.push({
        id: `dot-${row}-${col}`,
        x,
        y,
        baseX: x,
        baseY: y,
        opacity: baseOpacities[pattern] * edgeFactor,
        scale: baseScales[pattern] * (0.8 + Math.random() * 0.4),
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  return dots;
}

function DotComponent({ 
  dot, 
  mouseXSpring, 
  mouseYSpring 
}: { 
  dot: Dot; 
  mouseXSpring: ReturnType<typeof useSpring>;
  mouseYSpring: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(mouseXSpring, (mx) => {
    const dx = dot.baseX - mx;
    const dy = dot.baseY - mouseYSpring.get();
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 150) {
      const force = (1 - distance / 150) * 15;
      return Math.cos(Math.atan2(dy, dx)) * force;
    }
    return 0;
  });

  const y = useTransform(mouseYSpring, (my) => {
    const dx = dot.baseX - mouseXSpring.get();
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 150) {
      const force = (1 - distance / 150) * 15;
      return Math.sin(Math.atan2(dy, dx)) * force;
    }
    return 0;
  });

  const opacity = useTransform(mouseXSpring, (mx) => {
    const dx = dot.baseX - mx;
    const dy = dot.baseY - mouseYSpring.get();
    const distance = Math.sqrt(dx * dx + dy * dy);
    const proximityFactor = Math.max(0, 1 - distance / 200);
    return Math.min(dot.opacity + proximityFactor * 0.4, 0.8);
  });

  return (
    <motion.div
      className="absolute rounded-full bg-blue-400/20 will-change-transform"
      style={{
        width: 2 * dot.scale,
        height: 2 * dot.scale,
        left: dot.baseX,
        top: dot.baseY,
        x,
        y,
        opacity,
      }}
    />
  );
}

function SnakeSegment3D({ 
  index, 
  segment, 
  prevSegment, 
  nextSegment,
  isHead,
  isTail 
}: { 
  index: number;
  segment: SnakeSegment;
  prevSegment?: SnakeSegment;
  nextSegment?: SnakeSegment;
  isHead: boolean;
  isTail: boolean;
}) {
  const progress = index / SNAKE_LENGTH;
  const size = isHead ? HEAD_SIZE : 
               isTail ? TAIL_SIZE : 
               SEGMENT_SIZE * (1 - progress * 0.3);
  
  // Calculate rotation based on movement direction and neighboring segments
  const angle = segment.angle;
  
  // Smooth segment connection
  const connectedX = segment.x;
  const connectedY = segment.y;
  
  // Dynamic colors based on position
  const hue = isHead ? 200 : 190 + progress * 30;
  const saturation = isHead ? 95 : 85;
  const lightness = isHead ? 65 : 55 + progress * 15;
  
  // Scale pulse for head
  const scaleSpring = useSpring(1, { stiffness: 300, damping: 30 });
  
  useEffect(() => {
    if (isHead) {
      scaleSpring.set(1.1);
      setTimeout(() => scaleSpring.set(1), 200);
    }
  }, [isHead, segment.velocity, scaleSpring]);

  return (
    <motion.div
      className="absolute will-change-transform pointer-events-none"
      style={{
        x: connectedX - size / 2,
        y: connectedY - size / 2,
        width: size,
        height: size,
        rotate: angle,
        transformStyle: 'preserve-3d',
        zIndex: 1000 + (SNAKE_LENGTH - index),
        filter: `drop-shadow(0 ${isHead ? 15 : 5}px ${isHead ? 20 : 10}px hsla(${hue}, 70%, 30%, 0.5))`,
      }}
      animate={isHead ? {
        scale: [1, 1.05, 1],
      } : {}}
      transition={isHead ? {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      {/* Main segment with 3D effect */}
      <div
        className="absolute inset-0"
        style={{
          transform: `rotateX(${isHead ? 10 : 5}deg) rotateY(${isHead ? 5 : 2}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Core body with gradient and texture */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: isHead
              ? `radial-gradient(circle at 30% 30%, 
                  hsl(${hue}, ${saturation}%, 80%),
                  hsl(${hue}, ${saturation}%, 50%) 40%,
                  hsl(${hue}, ${saturation}%, 30%) 100%)`
              : `radial-gradient(circle at 35% 35%, 
                  hsl(${hue}, ${saturation}%, ${lightness + 15}%),
                  hsl(${hue}, ${saturation}%, ${lightness}%) 50%,
                  hsl(${hue}, ${saturation}%, ${lightness - 15}%) 100%)`,
            boxShadow: `
              0 0 ${size * 0.5}px hsl(${hue}, ${saturation}%, ${lightness}%),
              inset -${size * 0.1}px -${size * 0.1}px ${size * 0.2}px rgba(0,0,0,0.5),
              inset ${size * 0.1}px ${size * 0.1}px ${size * 0.2}px rgba(255,255,255,0.3)
            `,
          }}
        >
          {/* Scales pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 2px, transparent 2px)
            `,
            backgroundSize: `${size * 0.3}px ${size * 0.3}px`,
            opacity: 0.6,
          }} />
        </div>

        {/* Head features */}
        {isHead && (
          <>
            {/* Eyes with glow */}
            <div
              className="absolute rounded-full"
              style={{
                top: '25%',
                left: '20%',
                width: '25%',
                height: '25%',
                background: 'radial-gradient(circle at 30% 30%, #fff, #aaddff)',
                boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                transform: 'translateZ(5px)',
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  top: '35%',
                  left: '35%',
                  width: '30%',
                  height: '30%',
                  background: '#000',
                  boxShadow: '0 0 5px rgba(0,0,0,0.5)',
                }}
              />
            </div>
            <div
              className="absolute rounded-full"
              style={{
                top: '25%',
                right: '20%',
                width: '25%',
                height: '25%',
                background: 'radial-gradient(circle at 30% 30%, #fff, #aaddff)',
                boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                transform: 'translateZ(5px)',
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  top: '35%',
                  left: '35%',
                  width: '30%',
                  height: '30%',
                  background: '#000',
                  boxShadow: '0 0 5px rgba(0,0,0,0.5)',
                }}
              />
            </div>

            {/* Tongue effect on movement */}
            {Math.abs(segment.velocity.x) + Math.abs(segment.velocity.y) > 0.5 && (
              <motion.div
                className="absolute"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                exit={{ scale: 0, opacity: 0 }}
                style={{
                  top: '45%',
                  right: '-20%',
                  width: '30%',
                  height: '10%',
                  background: 'linear-gradient(90deg, #ff6b6b, #ff3838)',
                  borderRadius: '50%',
                  filter: 'blur(2px)',
                  transform: 'rotate(5deg)',
                }}
              />
            )}
          </>
        )}

        {/* Tail effect */}
        {isTail && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 70% 50%, transparent 30%, rgba(0,0,0,0.3) 100%)',
              transform: 'translateZ(-2px)',
            }}
          />
        )}
      </div>

      {/* Connection glow between segments */}
      {nextSegment && (
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: size * 1.5,
            height: size * 1.5,
            background: `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.3), transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(10px)',
            pointerEvents: 'none',
          }}
        />
      )}
    </motion.div>
  );
}

export default function HeroMouseEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [snakeSegments, setSnakeSegments] = useState<SnakeSegment[]>([]);
  const [trailParticles, setTrailParticles] = useState<TrailParticle[]>([]);
  
  const targetPosition = useRef({ x: 0, y: 0 });
  const mouseVelocity = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  // Mouse motion values for dot repulsion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, SPRING_CONFIG);
  const mouseYSpring = useSpring(mouseY, SPRING_CONFIG);

  // Initialize snake and dots
  useEffect(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Generate background dots
    const newDots = generateDots(rect.width, rect.height, 28);
    setDots(newDots);
    
    // Initialize snake segments
    const initialSegments: SnakeSegment[] = [];
    for (let i = 0; i < SNAKE_LENGTH; i++) {
      const offset = i * SEGMENT_DISTANCE;
      initialSegments.push({
        x: centerX - offset,
        y: centerY,
        angle: 0,
        velocity: { x: 0, y: 0 },
        scale: 1,
      });
    }
    
    setSnakeSegments(initialSegments);
    targetPosition.current = { x: centerX, y: centerY };
    lastMousePos.current = { x: centerX, y: centerY };

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      const newRect = containerRef.current?.getBoundingClientRect();
      if (newRect) {
        const newDots = generateDots(newRect.width, newRect.height, 28);
        setDots(newDots);
      }
    });
    
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  // Advanced snake physics animation
  const animateSnake = useCallback(() => {
    timeRef.current += 1;
    
    setSnakeSegments(prev => {
      if (prev.length === 0) return prev;

      const newSegments = [...prev];
      const target = targetPosition.current;
      const head = newSegments[0];

      // Calculate mouse velocity for dynamic movement
      const currentVel = {
        x: target.x - lastMousePos.current.x,
        y: target.y - lastMousePos.current.y,
      };
      
      mouseVelocity.current = {
        x: mouseVelocity.current.x * 0.8 + currentVel.x * 0.2,
        y: mouseVelocity.current.y * 0.8 + currentVel.y * 0.2,
      };

      // Update head position with momentum and smoothing
      const targetWithVelocity = {
        x: target.x + mouseVelocity.current.x * 1.5,
        y: target.y + mouseVelocity.current.y * 1.5,
      };

      const dx = targetWithVelocity.x - head.x;
      const dy = targetWithVelocity.y - head.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0.5) {
        const moveX = dx * SNAKE_SPEED;
        const moveY = dy * SNAKE_SPEED;
        
        newSegments[0] = {
          ...head,
          x: head.x + moveX,
          y: head.y + moveY,
          velocity: { x: moveX, y: moveY },
          angle: Math.atan2(dy, dx) * (180 / Math.PI),
        };
      }

      // Update body segments with realistic physics
      for (let i = 1; i < newSegments.length; i++) {
        const prev = newSegments[i - 1];
        const current = newSegments[i];
        
        const dx = prev.x - current.x;
        const dy = prev.y - current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > SEGMENT_DISTANCE) {
          const angle = Math.atan2(dy, dx);
          const targetX = prev.x - Math.cos(angle) * SEGMENT_DISTANCE;
          const targetY = prev.y - Math.sin(angle) * SEGMENT_DISTANCE;
          
          // Smooth movement with momentum
          const moveX = (targetX - current.x) * SMOOTHING_FACTOR;
          const moveY = (targetY - current.y) * SMOOTHING_FACTOR;
          
          newSegments[i] = {
            x: current.x + moveX,
            y: current.y + moveY,
            angle: angle * (180 / Math.PI),
            velocity: { x: moveX, y: moveY },
            scale: 1,
          };
        } else {
          // Maintain angle from previous segment
          newSegments[i] = {
            ...current,
            angle: Math.atan2(prev.y - current.y, prev.x - current.x) * (180 / Math.PI),
          };
        }
      }

      // Add trail particles when moving fast
      if (Math.abs(mouseVelocity.current.x) + Math.abs(mouseVelocity.current.y) > 2) {
        setTrailParticles(prevTrail => {
          const newTrail = [...prevTrail];
          
          // Add new particle
          newTrail.push({
            x: head.x,
            y: head.y,
            life: 1,
            size: HEAD_SIZE * 0.8,
          });

          // Update existing particles
          return newTrail
            .map(p => ({
              ...p,
              life: p.life - 0.02,
              size: p.size * 0.98,
            }))
            .filter(p => p.life > 0)
            .slice(-TRAIL_LENGTH);
        });
      }

      lastMousePos.current = target;
      return newSegments;
    });

    // Update mouse motion values for dot repulsion
    mouseX.set(targetPosition.current.x);
    mouseY.set(targetPosition.current.y);

    animationFrame.current = requestAnimationFrame(animateSnake);
  }, [mouseX, mouseY]);

  // Start animation loop
  useEffect(() => {
    animationFrame.current = requestAnimationFrame(animateSnake);
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [animateSnake]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPosition.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    // Smoothly return to center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      targetPosition.current = {
        x: rect.width / 2,
        y: rect.height / 2,
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        cursor: 'none',
      }}
    >
      {/* Animated background particles */}
      {dots.map((dot) => (
        <DotComponent
          key={dot.id}
          dot={dot}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
        />
      ))}

      {/* Trail particles */}
      {trailParticles.map((particle, index) => (
        <motion.div
          key={`trail-${index}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            background: 'radial-gradient(circle, rgba(100, 200, 255, 0.3), transparent 70%)',
            filter: 'blur(4px)',
            opacity: particle.life * TRAIL_OPACITY,
          }}
        />
      ))}

      {/* Snake segments */}
      {snakeSegments.map((segment, index) => (
        <SnakeSegment3D
          key={`snake-${index}`}
          index={index}
          segment={segment}
          prevSegment={index > 0 ? snakeSegments[index - 1] : undefined}
          nextSegment={index < snakeSegments.length - 1 ? snakeSegments[index + 1] : undefined}
          isHead={index === 0}
          isTail={index === snakeSegments.length - 1}
        />
      ))}

      {/* Ambient glow following cursor */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          x: useTransform(mouseXSpring, x => x - 100),
          y: useTransform(mouseYSpring, y => y - 100),
          background: 'radial-gradient(circle, rgba(60, 180, 255, 0.1), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Interactive hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/30 text-sm font-light tracking-widest">
        MOVE YOUR CURSOR
      </div>
    </div>
  );
}