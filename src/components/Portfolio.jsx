"use client";
import Image from "next/image";

export default function Portfolio() {
  const images = [
    { src: "/p1.png" },
    { src: "/p2.png" },
    { src: "/p3.png" },
    { src: "/p4.png" },
    { src: "/p5.png" },
    { src: "/p6.png" },
    { src: "/p7.png" },
    { src: "/p8.png" },
    { src: "/p9.png" },
    { src: "/p10.png" },
    { src: "/p11.png" },
    { src: "/p12.png" },
    { src: "/p13.png" },
    { src: "/p14.png" },
    { src: "/p15.png" },
    { src: "/p16.png" },
    { src: "/p17.png" },
    { src: "/p18.png" },
    { src: "/p19.png" },
    { src: "/p20.png" },
  ];

  return (
    <section className="bg-[#f7ede7] py-20">
      <h2 className="text-center text-5xl font-serif tracking-widest text-[#1c2231] mb-16">
        PORTFOLIO
      </h2>

      {/* Masonry Layout */}
      <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl break-inside-avoid group shadow-lg hover:shadow-2xl transition duration-300"
          >
            
            {/* IMAGE */}
            <Image
              src={img.src}
              alt="Portfolio Image"
              width={500}
              height={600}
              className="w-full rounded-3xl object-cover group-hover:scale-110 transition-all duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* TEXT ON HOVER */}
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 
                            translate-y-3 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-white text-xl font-semibold backdrop-blur-lg bg-white/20 p-3 rounded-2xl shadow-lg">
                Interior Design
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
