"use client";

import React, { useRef, useState, useEffect } from "react";

const dataUlasan = [
  {
    nama: "Alfian N",
    waktu: "sebulan lalu",
    teks: "Warung bakso andalan keluarga, cukup legend karena warung ini sudah berdiri mungkin lebih dari umur saya",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjWwBVaOrUB61qwWiLPKiK_FMFFZS8uBIV_itBrB70j4f_oGtHIq=s1920-c-rp-mo-ba12-br100",
  },
  {
    nama: "Dwi Febryanto",
    waktu: "sebulan lalu",
    teks: "Baksonya enak, pilihan minumanya banyak, harga murah, tempat nyaman",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjVJdAr_EyZWQUFHqnI68QSUCmnXL4x_UhGYblaqFizTCxv2_x66=s1920-c-rp-mo-ba12-br100",
  },
  {
    nama: "Risma Riyantyy",
    waktu: "2 bulan lalu",
    teks: "Rasanya mantappp bangetttt❤ibu2 nya juga ramahhh bangetttt❤😍",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a/ACg8ocI1nF16wO0M6R8UucrHr9emw-IWyWsv8OlZ5OxYQLcvB3ARRA=s1920-c-rp-mo-br100",
  },
  {
    nama: "AZSA, CIKA & ELFA",
    waktu: "3 tahun lalu",
    teks: "Bakso n es Teller Legend... Nostalgilaaa masa lalu. Pokoknen Madyangggg Uenakkkk 🤗👍",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjU3byeWUKb9UTBtJwpp98EzOR6Z_XgtGc_jMmyRY4rGfVfWlYL7=s1920-c-rp-mo-ba12-br100",
  },
  {
    nama: "andi bongga",
    waktu: "2 tahun lalu",
    teks: "Bakso, Tahu Bakso, dan Es Teller andalan pokok e, Top Markotop",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjVAwok07kpahOL5gf7xcYaG86-lw4W3OAWA5b8_Gn8zJxRDgQQS=s1920-c-rp-mo-br100",
  },
  {
    nama: "Ghalihaji Hadipranata",
    waktu: "5 tahun lalu",
    teks: "Suka tahu baksonya selalu pesan banyak buat oleh oleh",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjX6SCVwEyEWbp6IjeETt6yIWgAr15cY-Ddoi8vGVGCOGqb6T-hk=s1920-c-rp-mo-ba12-br100",
  },
  {
    nama: "Sebut Saja Bedjo S2B",
    waktu: "5 tahun lalu",
    teks: "Tempat nyaman, parkir luas,  Akses mudah",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjXxFtIPY4sr_pXL4uIASauOV6TESJZAq73f5-efZ0QzXU3pXEnw=s1920-c-rp-mo-ba12-br100",
  },
  {
    nama: "Moning Her Pratiwi",
    waktu: "4 tahun lalu",
    teks: "Best bakso in the town!",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjWGKZffFzgHlB9isX24RpI5OXX9YhSDNpQ8y5tNAmhCNItpXjky=s1920-c-rp-mo-ba12-br100",
  },
  {
    nama: "Samuel Kurniawan",
    waktu: "4 tahun lalu",
    teks: "You must try Tahu Bakso, it is tofu with meetball inside.",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a/ACg8ocL-Zwmin2L1OaMmT6z5mxTM7JT9DKNTu48Cr2AP2s_AijqwXQ=s1920-c-rp-mo-ba12-br100",
  },
  {
    nama: "Fransiska Yuanita",
    waktu: "4 tahun lalu",
    teks: "Enaakkkk tenaannn",
    rating: 5,
    foto: "https://lh3.googleusercontent.com/a/ACg8ocJ5gRAOKFE6tutFJqtZsg2EopIfHbmVEyHjhLfb9v1PXft6vw=s1920-c-rp-mo-ba12-br100",
  },
];

export default function Testimonial() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const infiniteData = [...dataUlasan, ...dataUlasan, ...dataUlasan];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!sliderRef.current || isLoading) return;

    const slider = sliderRef.current;
    const scrollWidth = slider.scrollWidth;
    slider.scrollLeft = scrollWidth / 3;
  }, [isLoading]);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (!sliderRef.current || isLoading) return;

    const slider = sliderRef.current;
    let animationId: number;

    const tick = () => {
      if (!isDraggingRef.current && !isHoveredRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = slider;
        const singleSetWidth = scrollWidth / 3;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft >= singleSetWidth * 2 - 2) {
          slider.scrollLeft = singleSetWidth;
        } else {
          slider.scrollLeft += 1; // Diperbaiki jadi 1 untuk menghindari isu pembulatan desimal browser
        }

        if (slider.scrollLeft > maxScrollLeft) {
          slider.scrollLeft = singleSetWidth;
        }
      }
      animationId = requestAnimationFrame(tick); // Menggunakan requestAnimationFrame agar 60fps
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [isLoading]);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const singleSetWidth = scrollWidth / 3;
    const maxScrollLeft = scrollWidth - clientWidth;

    if (scrollLeft <= 1) {
      sliderRef.current.scrollLeft = singleSetWidth;
    } else if (scrollLeft >= maxScrollLeft - 1) {
      sliderRef.current.scrollLeft = singleSetWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const SkeletonCard = () => (
    <div className="testimonial-card flex flex-col justify-between text-left shrink-0 w-[85vw] sm:w-[320px] md:w-90 animate-pulse bg-gray-50 border border-gray-100 rounded-2xl p-6">
      <div>
        <div className="flex mb-4 gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-5 h-5 bg-gray-200 rounded-full" />
          ))}
        </div>
        <div className="space-y-3 mb-6">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
      </div>
      <div className="testimonial-author-border flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-24" />
          <div className="h-3 bg-gray-200 rounded w-16" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonial-section py-16 overflow-hidden">
      <div className="container mx-auto text-center max-w-6xl mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-forestGreen mb-6">
          Apa Kata <span className="text-warmOrange">Pelanggan?</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <span className="star-icon text-3xl">★</span>
            <span className="font-bold text-2xl">4.7 / 5</span>
          </div>
          <a href="https://www.google.com/maps/place/Bakso+Telkom/@-7.714985,110.589404,17z" target="_blank" rel="noopener noreferrer" className="link-accent transition-colors text-sm underline mt-1">
            Berdasarkan 38 ulasan di Google Maps
          </a>
        </div>
      </div>

      <div className="w-full relative">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className={`testimonial-scroll-container flex gap-6 overflow-x-auto pb-8 ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
          style={{
            scrollSnapType: "none", // Menghapus scroll snap agar animasi berjalan mulus
            paddingLeft: "5vw",
            paddingRight: "5vw",
          }}
        >
          {isLoading
            ? [1, 2, 3, 4].map((skeleton) => <SkeletonCard key={`skeleton-${skeleton}`} />)
            : infiniteData.map((ulasan, index) => (
                // Menghapus 'snap-center' dari class card
                <div key={`${ulasan.nama}-${index}`} className="testimonial-card flex flex-col justify-between text-left shrink-0 w-[85vw] sm:w-[320px] md:w-90 transition-transform hover:-translate-y-1">
                  <div>
                    <div className="flex mb-4 text-lg">
                      {[...Array(ulasan.rating)].map((_, i) => (
                        <span key={i} className="star-icon-small">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="testimonial-text italic mb-6">"{ulasan.teks}"</p>
                  </div>

                  <div className="testimonial-author-border flex items-center gap-3 mt-auto pt-4 border-t">
                    <img src={ulasan.foto} alt={`Foto profil ${ulasan.nama}`} className="w-12 h-12 rounded-full object-cover pointer-events-none bg-gray-100" loading="lazy" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-sm">{ulasan.nama}</p>
                      <p className="testimonial-date text-xs">{ulasan.waktu}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
