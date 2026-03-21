"use client";
import { useState } from "react";

export default function Brand() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#f7ebdf]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div
          className="relative"
          onMouseLeave={() => setShowMore(false)}   // cursor bahar → hide
        >
          <h2 className="text-center md:text-left text-black text-4xl md:text-5xl font-serif tracking-wide mb-6">
            BRAND STORY
          </h2>

          <h3 className="text-center md:text-left text-black text-xl md:text-2xl font-medium mb-8">
            Hello Dwellers, Welcome To Vasterior
          </h3>

          <p className="text-lg leading-relaxed text-black mb-6">
           Founded in 2023, Vasterior was born with a clear vision—to transform ordinary rooms into extraordinary environments that inspire and endure. What began as a deep-rooted passion for design and artistry has evolved into a commitment to crafting interiors that harmonize functionality, elegance, and individuality. For us, every space is more than just four walls—it is a story waiting to be told.
          </p>

          <p className="text-lg text-black leading-relaxed mb-6">
            Our philosophy is simple yet profound: design is not only about how a place looks, but how it makes you feel. We believe that a thoughtfully curated space has the power to uplift moods, spark creativity, and create meaningful connections with those who experience it.
          </p>

          {/* BUTTON */}
          <div className="text-center md:text-left mt-2">
            <button
              onClick={() => setShowMore(true)}
              className="inline-block px-8 py-3 bg-[#f2c7a5] hover:bg-[#eab58f] 
              text-black font-semibold rounded-xl shadow-md hover:shadow-lg 
              transition-all duration-300"
            >
              Know More →
            </button>
          </div>

          {/* EXTRA TEXT under button */}
          <div
            className={`transition-all duration-500 overflow-hidden 
              ${showMore ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
          >
            <p className="text-lg text-black leading-relaxed mb-4">
              Since our inception, we have had the privilege of collaborating with visionary architects, innovative designers, and esteemed industry professionals. Every partnership has enriched our journey, sharpening our expertise and encouraging us to push creative boundaries. Together, we have delivered interiors that embody sophistication, precision, and timeless appeal.

    </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/brand.webp"
            alt="Brand Story"
            className="rounded-3xl  h-[500px]  shadow-lg w-full max-w-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
