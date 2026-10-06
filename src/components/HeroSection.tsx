"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import BaksoBowl3D from "./BaksoBowl3D";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-12">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Content */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-forestGreen leading-tight mb-4 md:mb-6">
            Sajian Autentik, <br />
            <span className="text-warmOrange">Cita Rasa Klasik</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-forestGreen/80 mb-8 max-w-lg mx-auto md:mx-0">Rasakan kelezatan Bakso Telkom Klaten yang melegenda. Dibuat dengan daging sapi pilihan dan kuah kaldu rempah rahasia.</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6282137571407"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-warmOrange text-white font-semibold text-base sm:text-lg px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-orange-500 transition-colors"
          >
            Pesan Sekarang
          </motion.a>
        </motion.div>

        {/* 3D Visual */}
        <div className="order-1 md:order-2 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <BaksoBowl3D />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
          </Canvas>
        </div>
      </div>

      {/* Decorative background blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-softLightGreen/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-warmOrange/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
