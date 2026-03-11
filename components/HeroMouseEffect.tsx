"use client";

import { useEffect, useRef } from "react";

const SNAKE_LENGTH = 32;
const SEGMENT_DISTANCE = 11;
const HEAD_SIZE = 20;
const BODY_SIZE = 9;
const TAIL_SIZE = 2;
const FOLLOW_SPEED = 0.13;
const WAVE_AMPLITUDE = 3;
const WAVE_FREQUENCY = 0.28;

const MESSAGES = [
  "Get 50+ new appointments/mo",
  "No new staff required",
  "24/7 AI works for you",
  "Reduce workload by 70%",
  "AI agents close leads 24/7",
  "Automate repetitive tasks",
  "Scale without hiring staff",
];

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
  const mouseActiveRef = useRef(false);
  const bubbleRef = useRef<HTMLDivElement | null>(null);
  const bubbleTxtRef = useRef<HTMLSpanElement | null>(null);
  const msgIndexRef = useRef(0);
  const velRef = useRef({ x: 1, y: 0 });
  const smoothDirRef = useRef({ x: 1, y: 0 }); // smoothed heading direction for bubble


  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Inject animation keyframes (once per page)
    if (!document.getElementById("ai-snake-styles")) {
      const styleEl = document.createElement("style");
      styleEl.id = "ai-snake-styles";
      styleEl.textContent = `
        @keyframes eyeBlink {
          0%, 85%, 100% { transform: scaleY(1); opacity: 1; }
          90% { transform: scaleY(0.15); opacity: 0.4; }
        }
        @keyframes eyeGlow {
          0%, 100% { box-shadow: 0 0 3px #e0eeff, 0 0 6px rgba(180,220,255,0.7); }
          50% { box-shadow: 0 0 6px #e0eeff, 0 0 14px rgba(130,190,255,1); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px rgba(232,69,0,0.9); }
          50% { opacity: 0.6; box-shadow: 0 0 8px rgba(232,69,0,0.5); }
        }
      `;
      document.head.appendChild(styleEl);
    }

    // Initialize segments with DOM elements
    const initialSegments: Segment[] = [];
    for (let i = 0; i < SNAKE_LENGTH; i++) {
      const element = document.createElement("div");
      element.className = "absolute pointer-events-none";
      element.style.willChange = "transform";
      element.style.transform = `translate(${centerX}px, ${centerY}px)`;

      const isHead = i === 0;
      const progress = i / SNAKE_LENGTH;
      const size = isHead ? HEAD_SIZE : BODY_SIZE - progress * (BODY_SIZE - TAIL_SIZE);
      const alpha = 1 - progress * 0.75;

      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.zIndex = String(200 - i);
      element.style.borderRadius = isHead ? "5px" : "50%";

      if (isHead) {
        // AI robot head — dark base, orange glow border
        element.style.background = "rgba(10, 4, 2, 1)";
        element.style.boxShadow = "0 0 0 1.5px rgba(232,69,0,0.95), 0 0 10px rgba(232,69,0,0.75), 0 0 22px rgba(232,69,0,0.35)";

        const lEye = document.createElement("div");
        lEye.style.cssText = "position:absolute;width:4px;height:4px;border-radius:50%;background:#e0eeff;top:4px;left:3px;animation:eyeBlink 4s ease-in-out infinite,eyeGlow 2.5s ease-in-out infinite;";
        element.appendChild(lEye);

        const rEye = document.createElement("div");
        rEye.style.cssText = "position:absolute;width:4px;height:4px;border-radius:50%;background:#e0eeff;top:4px;right:3px;animation:eyeBlink 4s ease-in-out infinite 0.25s,eyeGlow 2.5s ease-in-out infinite 0.4s;";
        element.appendChild(rEye);

        const mouth = document.createElement("div");
        mouth.style.cssText = "position:absolute;width:10px;height:1.5px;border-radius:1px;background:rgba(232,69,0,0.95);bottom:3px;left:50%;transform:translateX(-50%);box-shadow:0 0 4px rgba(232,69,0,0.8);";
        element.appendChild(mouth);
      } else {
        const r = Math.round(232 - progress * 30);
        const g = Math.round(69 + progress * 20);
        element.style.background = `rgba(${r}, ${g}, 0, ${alpha})`;
        element.style.boxShadow = `0 0 ${Math.round(8 - progress * 6)}px rgba(232,69,0,${0.6 - progress * 0.4})`;
      }

      container.appendChild(element);
      initialSegments.push({ x: centerX, y: centerY, element });
    }

    segmentsRef.current = initialSegments;
    targetRef.current = { x: centerX, y: centerY };

    // Speech bubble — floats ahead of snake head
    const bubble = document.createElement("div");
    // Use position:absolute but start off-screen so it doesn't flash at 0,0
    bubble.style.cssText = "position:absolute;pointer-events:none;z-index:250;background:rgba(6,3,1,0.93);border:1px solid rgba(232,69,0,0.65);border-radius:10px;padding:7px 14px 7px 10px;white-space:nowrap;font-size:11.5px;font-weight:600;font-family:system-ui,sans-serif;letter-spacing:0.025em;color:rgba(255,255,255,0.9);backdrop-filter:blur(12px);box-shadow:0 4px 24px rgba(232,69,0,0.18),0 1px 0 rgba(255,255,255,0.04) inset;transition:opacity 0.35s ease;opacity:1;will-change:transform;top:0;left:0;";

    const dotEl = document.createElement("span");
    dotEl.style.cssText = "display:inline-block;width:5px;height:5px;border-radius:50%;background:#E84500;margin-right:8px;vertical-align:middle;animation:dotPulse 1.8s ease-in-out infinite;";

    const txtEl = document.createElement("span");
    txtEl.style.verticalAlign = "middle";
    txtEl.textContent = MESSAGES[0];

    bubble.appendChild(dotEl);
    bubble.appendChild(txtEl);
    container.appendChild(bubble);
    bubbleRef.current = bubble;
    bubbleTxtRef.current = txtEl;

    // Message rotation every 2.8 s
    const msgInterval = setInterval(() => {
      const b = bubbleRef.current;
      const t = bubbleTxtRef.current;
      if (!b || !t) return;
      b.style.opacity = "0";
      setTimeout(() => {
        const next = (msgIndexRef.current + 1) % MESSAGES.length;
        msgIndexRef.current = next;
        t.textContent = MESSAGES[next];
        if (b) b.style.opacity = "1";
      }, 320);
    }, 2800);

    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    observer.observe(container);

    // Mouse tracking — only track inside the hero container
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Only activate snake mouse-follow when cursor is inside the hero bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseActiveRef.current = true;
        targetRef.current = { x, y };
      } else {
        mouseActiveRef.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Optimized animation loop
    const animate = () => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      timeRef.current += 0.018;
      const segments = segmentsRef.current;
      const rect = containerRef.current?.getBoundingClientRect();
      const W = rect?.width ?? 800;
      const H = rect?.height ?? 600;

      // Idle orbit: figure-8 / Lissajous path centred in hero
      if (!mouseActiveRef.current) {
        const t = timeRef.current;
        targetRef.current = {
          x: W / 2 + Math.sin(t * 0.7) * W * 0.28,
          y: H / 2 + Math.sin(t * 1.4) * H * 0.22,
        };
      }

      // Update head
      const head = segments[0];
      const prevHX = head.x;
      const prevHY = head.y;
      head.x += (targetRef.current.x - head.x) * FOLLOW_SPEED;
      head.y += (targetRef.current.y - head.y) * FOLLOW_SPEED;

      // Smooth velocity
      velRef.current.x = velRef.current.x * 0.85 + (head.x - prevHX) * 0.15;
      velRef.current.y = velRef.current.y * 0.85 + (head.y - prevHY) * 0.15;

      // Smooth heading direction: blend target direction + velocity direction
      const tdx = targetRef.current.x - head.x;
      const tdy = targetRef.current.y - head.y;
      const tLen = Math.sqrt(tdx * tdx + tdy * tdy) || 1;
      const targetNx = tdx / tLen;
      const targetNy = tdy / tLen;
      const vLen = Math.sqrt(velRef.current.x ** 2 + velRef.current.y ** 2) || 1;
      const velNx = velRef.current.x / vLen;
      const velNy = velRef.current.y / vLen;
      // Lerp toward a blended direction and re-normalise
      const blendX = targetNx * 0.6 + velNx * 0.4;
      const blendY = targetNy * 0.6 + velNy * 0.4;
      const blendLen = Math.sqrt(blendX * blendX + blendY * blendY) || 1;
      smoothDirRef.current.x += (blendX / blendLen - smoothDirRef.current.x) * 0.08;
      smoothDirRef.current.y += (blendY / blendLen - smoothDirRef.current.y) * 0.08;
      const sdLen = Math.sqrt(smoothDirRef.current.x ** 2 + smoothDirRef.current.y ** 2) || 1;
      const sdNx = smoothDirRef.current.x / sdLen;
      const sdNy = smoothDirRef.current.y / sdLen;

      // Update body with physics
      for (let i = 1; i < segments.length; i++) {
        const prev = segments[i - 1];
        const curr = segments[i];

        const dx = prev.x - curr.x;
        const dy = prev.y - curr.y;
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

      // Position speech bubble: near EDGE of bubble starts just past head edge
      // anchor = head_center + dir * (HEAD_SIZE/2 + gap)
      // bubble top-left = anchor (near edge), centered vertically on anchor
      const bub = bubbleRef.current;
      if (bub) {
        const bw = bub.offsetWidth || 200;
        const bh = bub.offsetHeight || 30;
        const gap = 10; // px gap between head edge and bubble near edge
        const anchorDist = HEAD_SIZE / 2 + gap; // distance from head center to near bubble edge
        // anchor = the point where the near edge of the bubble should sit
        const ax = head.x + sdNx * anchorDist;
        const ay = head.y + sdNy * anchorDist;
        // top-left of bubble: shift from anchor along direction by bw/2, vertically center
        const rawX = ax + sdNx * (bw / 2) - bw / 2;
        const rawY = ay + sdNy * (bw / 2) - bh / 2;
        // Simpler: anchor is near edge → place bubble so its closest horizontal side starts there
        // Use dot product to choose which side of bubble is "near"
        const cx = Math.max(6, Math.min(W - bw - 6, sdNx >= 0 ? ax : ax - bw));
        const cy = Math.max(6, Math.min(H - bh - 6, ay - bh / 2));
        bub.style.transform = `translate(${cx}px, ${cy}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      clearInterval(msgInterval);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (bubble && container.contains(bubble)) container.removeChild(bubble);
      bubbleRef.current = null;

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
        contain: "layout style paint",
        zIndex: 5
      }}
    />
  );
}