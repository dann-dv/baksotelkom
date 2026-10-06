"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export default function BaksoBowl3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the bowl slowly
      groupRef.current.rotation.y += 0.005;

      // Add slight interactive tilt based on mouse position
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;

      groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
      groupRef.current.rotation.z += 0.05 * (-targetX - groupRef.current.rotation.z);
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={groupRef} position={[0, -0.5, 0]}>
          {/* Bowl */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[2, 1, 1.5, 32, 1, true]} />
            <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} roughness={0.2} metalness={0.1} />
          </mesh>

          {/* Bowl inside / Soup base */}
          <mesh position={[0, -0.7, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[2, 1, 1.4, 32]} />
            <meshStandardMaterial color="#e8d8c3" roughness={0.9} />
          </mesh>

          {/* Soup liquid */}
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[1.9, 1.9, 0.1, 32]} />
            <meshStandardMaterial color="#c48a3f" opacity={0.8} transparent roughness={0.1} metalness={0.1} />
          </mesh>

          {/* Meatballs (Bakso) */}
          <mesh position={[0.5, 0.5, 0.5]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
          </mesh>
          <mesh position={[-0.6, 0.4, 0.2]} castShadow>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
          </mesh>
          <mesh position={[0.2, 0.3, -0.7]} castShadow>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
          </mesh>

          {/* Tofu / Noodles decorations */}
          <mesh position={[-0.8, 0.5, -0.4]} rotation={[0, Math.PI / 4, 0]} castShadow>
            <boxGeometry args={[0.8, 0.4, 0.6]} />
            <meshStandardMaterial color="#f4a460" roughness={0.9} />
          </mesh>

          {/* Greenery / Celery */}
          <mesh position={[0.8, 0.6, -0.5]} rotation={[0.2, 0.5, 0]}>
            <coneGeometry args={[0.1, 0.4, 8]} />
            <meshStandardMaterial color="#468432" roughness={0.5} />
          </mesh>
          <mesh position={[0.6, 0.55, -0.8]} rotation={[-0.2, -0.5, 0.2]}>
            <coneGeometry args={[0.1, 0.3, 8]} />
            <meshStandardMaterial color="#468432" roughness={0.5} />
          </mesh>
        </group>
      </Float>
      <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
    </group>
  );
}
