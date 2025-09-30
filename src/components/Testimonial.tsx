// Menandakan bahwa ini adalah Client Component karena menggunakan hooks (interaktivitas slider)
"use client";

import React from "react";
import Image from "next/image";

// 1. Import komponen dan modul Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// 2. Import style dasar untuk Swiper
import "swiper/css";
import "swiper/css/navigation";

// 3. Definisikan tipe data untuk setiap testimoni menggunakan interface TypeScript
interface Testimonial {
  name: string;
  role: string;
  avatarUrl: string;
  text: string;
}

// 4. Buat array data untuk testimoni agar kode lebih dinamis (prinsip DRY)
const testimonialData: Testimonial[] = [
  {
    name: "Jane D",
    role: "CEO",
    avatarUrl: "https://pagedone.io/asset/uploads/1696229969.png",
    text: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    avatarUrl: "https://pagedone.io/asset/uploads/1696229994.png",
    text: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
  },
  {
    name: "Jane D",
    role: "CEO",
    avatarUrl: "https://pagedone.io/asset/uploads/1696229969.png",
    text: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    avatarUrl: "https://pagedone.io/asset/uploads/1696229994.png",
    text: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
  },
];

// Komponen untuk ikon bintang, agar tidak duplikasi kode SVG
const StarIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
      fill="currentColor"
    />
  </svg>
);

// 5. Definisikan komponen fungsional dengan tipe React.FC (Functional Component)
const Testimonial: React.FC = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-8 lg:flex-nowrap lg:gap-x-8">
          <div className="w-full lg:w-2/5">
            <span className="mb-4 block text-sm font-medium text-gray-500">
              Testimonial
            </span>
            <h2 className="mb-8 text-4xl font-bold leading-[3.25rem] text-gray-900">
              23k+ Customers gave their{" "}
              <span className="bg-gradient-to-tr from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Feedback
              </span>
            </h2>
            <div className="flex items-center justify-center gap-10 lg:justify-start">
              {/* Tombol navigasi untuk Swiper */}
              <button
                id="slider-button-left" // ID ini akan dihubungkan ke Swiper
                className="group flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600">
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    // 6. Ubah atribut SVG dari kebab-case menjadi camelCase
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="slider-button-right" // ID ini akan dihubungkan ke Swiper
                className="group flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600">
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            {/* 7. Implementasi Swiper, hubungkan dengan tombol navigasi */}
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: "#slider-button-right",
                prevEl: "#slider-button-left",
              }}
              spaceBetween={24} // Jarak antar slide
              slidesPerView={1}
              // Tambahkan breakpoints untuk tampilan responsif
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="mySwiper">
              {/* 8. Gunakan .map() untuk me-render setiap testimoni */}
              {testimonialData.map(
                (item, index) => (
                  console.log(item),
                  (
                    <SwiperSlide key={index}>
                      <div className="group rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600">
                        <div className="mb-5 flex items-center gap-5 sm:mb-9">
                          {/* 9. Gunakan komponen Next.js <Image> untuk optimisasi */}
                          <Image
                            src={item.avatarUrl}
                            alt="avatar"
                            width={56} // Wajib ada untuk Next/Image
                            height={56} // Wajib ada untuk Next/Image
                            className="h-14 w-14 rounded-full object-cover"
                          />
                          <div className="grid gap-1">
                            <h5 className="font-medium text-gray-900 transition-all duration-500">
                              {item.name}
                            </h5>
                            <span className="text-sm leading-6 text-gray-500">
                              {item.role}
                            </span>
                          </div>
                        </div>
                        <div className="mb-5 flex items-center gap-2 text-amber-500 transition-all duration-500 sm:mb-9">
                          {/* Render 5 bintang secara dinamis */}
                          {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon key={i} />
                          ))}
                        </div>
                        <p className="min-h-24 text-sm leading-6 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                          {item.text}
                        </p>
                      </div>
                    </SwiperSlide>
                  )
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
