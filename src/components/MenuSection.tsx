"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MenuSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const menus = [
    { name: "Bakso Kuah", price: "Rp 16.500", imageColor: "from-orange-200 to-orange-400" },
    { name: "Bakso Campur", price: "Rp 15.000", imageColor: "from-orange-300 to-orange-500" },
    { name: "Tahu Bakso", price: "Rp 4.000", imageColor: "from-yellow-200 to-yellow-400" },
    { name: "Es Teler", price: "Rp 10.000", imageColor: "from-green-200 to-green-400" },
    { name: "Es Tape", price: "Rp 7.000", imageColor: "from-yellow-300 to-yellow-500" },
    { name: "Tape Panas", price: "Rp 7.000", imageColor: "from-red-200 to-red-400" },
    { name: "Es Jeruk", price: "Rp 4.000", imageColor: "from-orange-300 to-orange-500" },
    { name: "Es Lemon Tea", price: "Rp 4.000", imageColor: "from-yellow-500 to-orange-400" },
    { name: "Lemon Tea Panas", price: "Rp 4.000", imageColor: "from-amber-600 to-orange-600" },
    { name: "Es Teh", price: "Rp 3.000", imageColor: "from-amber-700 to-amber-900" },
    { name: "Teh Panas", price: "Rp 3.000", imageColor: "from-red-700 to-red-900" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    scrollRef.current.classList.remove("snap-x");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!scrollRef.current) return;
    isDown.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
    scrollRef.current.classList.add("snap-x");
  };

  const handleMouseUp = () => {
    if (!scrollRef.current) return;
    isDown.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
    scrollRef.current.classList.add("snap-x");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="menu" className="py-24 bg-softCream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="text-left">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-heading font-bold text-forestGreen mb-4">
              Daftar <span className="text-warmOrange">Menu</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-forestGreen/70 max-w-xl">
              Beragam pilihan menu dari Bakso spesial hingga kesegaran Es Teler.
            </motion.p>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll("left")} className="p-3 rounded-full bg-white shadow-md text-forestGreen hover:bg-softLightGreen transition-colors" aria-label="Geser ke kiri">
              <ChevronLeft size={28} />
            </button>
            <button onClick={() => scroll("right")} className="p-3 rounded-full bg-white shadow-md text-forestGreen hover:bg-softLightGreen transition-colors" aria-label="Geser ke kanan">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 pt-4 px-2 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {menus.map((menu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                className="snap-center shrink-0 w-[280px] md:w-[320px] bg-white rounded-3xl p-6 shadow-lg border border-softLightGreen/30 transition-all duration-300 flex flex-col"
              >
                <div className={`relative mb-6 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${menu.imageColor}`}>
                  <Image src={`/menus_bt/menu${index + 1}.webp`} alt={menu.name} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
                </div>

                <div className="flex flex-col flex-1 justify-between">
                  <h3 className="text-2xl font-heading font-bold text-forestGreen mb-4 leading-tight">{menu.name}</h3>
                  <div className="flex justify-between items-center border-t border-softCream/50 pt-4 mt-auto">
                    <span className="text-xl font-bold text-warmOrange">{menu.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Scroll Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button onClick={() => scroll("left")} className="p-3 rounded-full bg-white shadow-md text-forestGreen hover:bg-softLightGreen transition-colors" aria-label="Geser ke kiri">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll("right")} className="p-3 rounded-full bg-white shadow-md text-forestGreen hover:bg-softLightGreen transition-colors" aria-label="Geser ke kanan">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
