"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="bg-[#f7ebdf] py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl text-black font-semibold tracking-wide">Testimonials</h2>
        <p className="text-lg text-gray-600 mt-3">
          Hear what our clients have to say about their experience.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-5xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500, // Auto swipe every 2.5 sec
            disableOnInteraction: false,
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#f8d9b9] rounded-3xl p-14 shadow-lg">
              <div className="flex justify-center mb-8">
                <span className="text-yellow-500 text-3xl">★★★★☆</span>
              </div>

              <p className="text-center text-xl leading-relaxed text-gray-700">
                “Vasterior perfectly blended aesthetics and Vastu, transforming
                our space into a harmonious, positive environment. It feels
                balanced, beautiful, and filled with positive energy.”
              </p>

              <div className="flex items-center justify-center mt-12">
                <img
                  src="/M.avif"
                  className="w-16 h-16 rounded-full bg-teal-500 p-3"
                  alt="profile"
                />
                <div className="ml-4">
                  <h3 className="font-bold  text-black text-xl"> Mrs. Reena Jain</h3>
                  <p className="text-gray-600 text-sm">
                    Studio Apartment, Noida Extension
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-[#f8d9b9] rounded-3xl p-14 shadow-lg">
              <div className="flex justify-center mb-8">
                <span className="text-yellow-500 text-3xl">★★★★☆</span>
              </div>

              <p className="text-center text-xl leading-relaxed text-gray-700">
                “The interior design completely transformed our space, making it more beautiful, comfertable
                and perfectly styled.Every was thoughtfully designed,creating a warm and inviting atmosphere
                              Truly a wonderful and satisfying experience!”
              </p>

              <div className="flex items-center justify-center mt-12">
                <img
                  src="/R.avif"
                  className="w-16 h-16 rounded-full bg-teal-500 p-3"
                  alt="profile"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-black text-xl">Rahul Sharma</h3>
                  <p className="text-gray-600 text-sm">Gurgaon</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          

        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute text-black left-0 top-1/2 size-10  cursor-pointer -translate-y-1/2 bg-white shadow rounded-full z-10">
          ←
        </button>
        <button className="next-btn absolute text-black right-0 top-1/2 size-10 cursor-pointer -translate-y-1/2 bg-white shadow rounded-full z-10">
          →
        </button>
      </div>
    </section>
  );
}
