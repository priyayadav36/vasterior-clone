"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Photo() {
  return (
    <div className="relative bg-[#f3e7d9] w-full">

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 3000,      // 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-screen"
      >
        {/* ------ SLIDE 1 ------ */}
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/priya.jpg')" }}
          >
           
          </div>
        </SwiperSlide>

        {/* ------ SLIDE 2 ------ */}
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/harry.jpg')" }}
          ></div>
        </SwiperSlide>

        {/* ------ SLIDE 3 ------ */}
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/carry.jpg')" }}
          ></div>
        </SwiperSlide>
      </Swiper>

      {/* LEFT BUTTON */}
      <button
        className="prev-btn absolute top-1/2 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-lg hover:bg-gray-400 transition"
      >
        <span className="text-black text-2xl">❮</span>
      </button>

      {/* RIGHT BUTTON */}
      <button
        className="next-btn absolute top-1/2 right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-lg hover:bg-gray-400 transition"
      >
        <span className="text-black text-2xl">❯</span>
      </button>
    </div>
  );
}
