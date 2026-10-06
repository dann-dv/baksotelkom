"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const benefits = ["100% Daging Sapi Murni Pilihan", "Kuah Kaldu Gurih Tanpa MSG Berlebih", "Mie & Bihun Kenyal Berkualitas", "Tempat Makan Bersih & Nyaman"];

  return (
    <section id="about" className="py-24 bg-softLightGreen/20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-forestGreen/10 border-4 border-white">
              <Image src="/warung2.webp" alt="Suasana Warung Bakso Telkom" priority fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-forestGreen mb-6">
              Lebih Dari Sekadar <span className="text-warmOrange">Semangkuk Bakso</span>
            </h2>
            <p className="text-lg text-forestGreen/80 mb-8 leading-relaxed">
              Berdiri sejak tahun<span className="text-warmOrange"> 1990</span>, Bakso Telkom Klaten konsisten menyajikan kualitas terbaik. Rahasia kelezatan kami terletak pada komitmen menggunakan bahan-bahan segar setiap harinya.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-forestGreen font-medium text-lg"
                >
                  <CheckCircle2 className="text-warmOrange mr-3" size={24} />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
