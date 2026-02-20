"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const SNAKE_LENGTH = 35;
const SEGMENT_DISTANCE = 0.25;
const FOLLOW_SPEED = 0.08;
const DASH_SPEED = 0.35;

function Snake() {
  const { viewport } = useThree();

  const segments = useRef<THREE.Vector3[]>(
    Array.from({ length: SNAKE_LENGTH }, () => new THREE.Vector3())
  );

  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const dash = useRef(false);
  const pulse = useRef(0);
  const textZone = useRef({
    minX: -1,
    maxX: 1,
    minY: -0.5,
    maxY: 0.5,
  });

  // Mouse tracking
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      target.current.set(
        x * viewport.width * 0.5,
        y * viewport.height * 0.5,
        0
      );
    };

    const handleClick = () => {
      dash.current = true;
      setTimeout(() => (dash.current = false), 200);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [viewport]);

  useFrame((_, delta) => {
    pulse.current += delta * 2;

    const head = segments.current[0];

    // AI avoid text area
    const avoidForce = new THREE.Vector3();
    if (
      target.current.x > textZone.current.minX &&
      target.current.x < textZone.current.maxX &&
      target.current.y > textZone.current.minY &&
      target.current.y < textZone.current.maxY
    ) {
      avoidForce.set(
        (target.current.x > 0 ? -1 : 1) * 0.5,
        (target.current.y > 0 ? -1 : 1) * 0.5,
        0
      );
    }

    const speed = dash.current ? DASH_SPEED : FOLLOW_SPEED;

    head.lerp(target.current.clone().add(avoidForce), speed);

    for (let i = 1; i < SNAKE_LENGTH; i++) {
      const prev = segments.current[i - 1];
      const curr = segments.current[i];

      const dir = new THREE.Vector3().subVectors(prev, curr);
      const dist = dir.length();

      if (dist > SEGMENT_DISTANCE) {
        dir.normalize().multiplyScalar(dist - SEGMENT_DISTANCE);
        curr.add(dir.multiplyScalar(0.5));
      }
    }

    // Update mesh positions
    meshes.current.forEach((mesh, i) => {
      if (!mesh) return;

      const seg = segments.current[i];
      mesh.position.copy(seg);

      const scale = 1 - i / SNAKE_LENGTH;
      mesh.scale.setScalar(scale * 0.6);

      // subtle glow pulse
      const material = mesh.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity =
        0.6 + Math.sin(pulse.current + i * 0.3) * 0.2;

      // depth blur near text
      if (
        seg.x > textZone.current.minX &&
        seg.x < textZone.current.maxX &&
        seg.y > textZone.current.minY &&
        seg.y < textZone.current.maxY
      ) {
        material.opacity = 0.5;
        material.transparent = true;
      } else {
        material.opacity = 1;
        material.transparent = false;
      }
    });
  });

  return (
    <>
      {Array.from({ length: SNAKE_LENGTH }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.2, 32, 32]}
          castShadow
          receiveShadow
          ref={(el) => {
            if (el) meshes.current[i] = el;
          }}
        >
          <meshStandardMaterial
            color={new THREE.Color(`hsl(${200 - i * 3}, 80%, 55%)`)}
            emissive="#00aaff"
            roughness={0.3}
            metalness={0.6}
          />
        </Sphere>
      ))}
    </>
  );
}

export default function HeroMouseEffect() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
        />
        <Environment preset="city" />
        <Snake />
      </Canvas>
    </div>
  );
}
