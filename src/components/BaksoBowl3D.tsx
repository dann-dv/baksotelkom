"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, ContactShadows, useTexture, Decal } from "@react-three/drei";
import * as THREE from "three";

export default function BaksoBowl3D() {
  const groupRef = useRef<THREE.Group>(null);

  // Jika Anda memiliki file gambar tekstur ayam jago & logo WOWIN Foods, letakkan di public/assets/ayam_jago.png
  // Lalu aktifkan baris di bawah ini:
  // const bowlTexture = useTexture("/assets/ayam_jago.png");

  useFrame((state) => {
    if (groupRef.current) {
      // Rotasi lambat
      groupRef.current.rotation.y += 0.003;

      // Efek interaktif berdasarkan kursor
      const targetX = (state.pointer.x * Math.PI) / 12;
      const targetY = (state.pointer.y * Math.PI) / 12;

      groupRef.current.rotation.x += 0.03 * (targetY - groupRef.current.rotation.x);
      groupRef.current.rotation.z += 0.03 * (-targetX - groupRef.current.rotation.z);
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
        <group ref={groupRef} position={[0, -0.2, 0]}>
          {/* 1. Mangkuk */}
          <group position={[0, 0, 0]}>
            {/* Bagian Luar Mangkuk */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[2.2, 1.2, 1.6, 64, 1, true]} />
              <meshStandardMaterial
                color="#ffffff"
                side={THREE.DoubleSide}
                roughness={0.1}
                metalness={0.05}
                // map={bowlTexture} // Hubungkan tekstur jika file sudah siap
              />
            </mesh>

            {/* Rim/Bibir Mangkuk Atas */}
            <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[2.2, 0.04, 16, 100]} />
              <meshStandardMaterial color="#ffffff" roughness={0.15} />
            </mesh>

            {/* Bagian Bawah Mangkuk */}
            <mesh position={[0, -0.8, 0]} castShadow>
              <cylinderGeometry args={[1.2, 1.0, 0.15, 32]} />
              <meshStandardMaterial color="#eaeaea" roughness={0.3} />
            </mesh>
          </group>

          {/* 2. Kuah / Sup (Translucent, Perbaikan: Berada aman di dalam/Tenggelam) */}
          <mesh position={[0, 0.25, 0]}>
            {" "}
            {/* Diperbaiki: Posisi diturunkan ke 0.25 (sebelumnya 0.35) */}
            <cylinderGeometry args={[1.9, 1.6, 0.12, 32]} /> {/* Diperbaiki: Diameter atas 1.9 (sebelumnya 2.08) & tinggi 0.12 (sebelumnya 0.15) */}
            <meshStandardMaterial color="#caa25f" opacity={0.8} transparent roughness={0.03} metalness={0.15} />
          </mesh>

          {/* 3. Mie Bihun (Kumpulan Garis/Curve Putih) */}
          <group position={[0, 0.15, -0.15]}>
            {" "}
            {/* Posisi diturunkan agar tenggelam aman */}
            {/* Representasi tumpukan bihun melingkar di kuah */}
            {Array.from({ length: 12 }).map((_, i) => (
              <mesh key={i} position={[Math.sin(i) * 0.25, 0.05, Math.cos(i) * 0.25]} rotation={[0.05, i * 30, 0.05]}>
                <torusGeometry args={[0.55, 0.018, 8, 30, Math.PI * 1.5]} />
                <meshStandardMaterial color="#fafafa" roughness={0.9} />
              </mesh>
            ))}
          </group>

          {/* 4. Tiga Bakso Besar (Tekstur kasar alami & Posisi lebih masuk ke dalam) */}
          {/* Bakso Kiri */}
          <mesh position={[-0.6, 0.3, 0.25]} castShadow>
            <dodecahedronGeometry args={[0.48, 3]} /> {/* Ukuran disesuaikan (0.48) agar tidak keluar */}
            <meshStandardMaterial color="#8a7364" roughness={0.95} bumpScale={0.05} />
          </mesh>
          {/* Bakso Tengah */}
          <mesh position={[0.05, 0.25, 0.35]} castShadow>
            <dodecahedronGeometry args={[0.46, 3]} />
            <meshStandardMaterial color="#826b5c" roughness={0.95} bumpScale={0.05} />
          </mesh>
          {/* Bakso Kanan */}
          <mesh position={[0.65, 0.27, -0.05]} castShadow>
            <dodecahedronGeometry args={[0.47, 3]} />
            <meshStandardMaterial color="#8b7466" roughness={0.95} bumpScale={0.05} />
          </mesh>

          {/* 5. Pangsit Goreng (Kulit Pangsit Berlipat & Posisi yang dirapatkan) */}
          <group position={[0.15, 0.45, -0.4]} rotation={[0.3, -0.5, -0.15]}>
            {/* Lipatan 1 */}
            <mesh castShadow>
              <boxGeometry args={[1.0, 0.02, 0.7]} />
              <meshStandardMaterial color="#e5b158" roughness={0.8} />
            </mesh>
            {/* Lipatan 2 */}
            <mesh position={[0.15, 0.08, 0.08]} rotation={[0.4, 0.4, 0.1]} castShadow>
              <boxGeometry args={[0.85, 0.02, 0.6]} />
              <meshStandardMaterial color="#dba243" roughness={0.8} />
            </mesh>
            {/* Rempahan Crispy */}
            <mesh position={[-0.3, 0.03, -0.15]} rotation={[-0.2, 0.15, 0.4]} castShadow>
              <boxGeometry args={[0.65, 0.02, 0.35]} />
              <meshStandardMaterial color="#d49b38" roughness={0.8} />
            </mesh>
          </group>

          {/* 7. Hiasan: Daun Bawang & Bawang Goreng (Radius area sebaran diperkecil) */}
          <group position={[0, 0.28, 0]}>
            {/* Daun Bawang Hijau Kecil */}
            {Array.from({ length: 15 }).map((_, i) => {
              const radius = 1.6; // Diperkecil agar tetap di dalam jangkauan kuah
              const angle = Math.random() * Math.PI * 2;
              const r = Math.sqrt(Math.random()) * radius;
              return (
                <mesh key={`scallion-${i}`} position={[Math.cos(angle) * r, 0.01, Math.sin(angle) * r]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
                  <cylinderGeometry args={[0.03, 0.03, 0.06, 8, 1, true]} />
                  <meshStandardMaterial color="#3f722f" roughness={0.65} side={THREE.DoubleSide} />
                </mesh>
              );
            })}

            {/* Bawang Goreng Cokelat */}
            {Array.from({ length: 12 }).map((_, i) => {
              const radius = 1.4; // Diperkecil agar tetap di dalam jangkauan kuah
              const angle = Math.random() * Math.PI * 2;
              const r = Math.sqrt(Math.random()) * radius;
              return (
                <mesh key={`onion-${i}`} position={[Math.cos(angle) * r, 0.005, Math.sin(angle) * r]} rotation={[Math.random(), Math.random(), Math.random()]}>
                  <torusGeometry args={[0.025, 0.01, 4, 8]} />
                  <meshStandardMaterial color="#552707" roughness={0.95} />
                </mesh>
              );
            })}
          </group>
        </group>
      </Float>

      {/* Bayangan Alami di bawah */}
      <ContactShadows position={[0, -1.15, 0]} opacity={0.6} scale={7.5} blur={2.0} far={3.0} />
    </group>
  );
}
