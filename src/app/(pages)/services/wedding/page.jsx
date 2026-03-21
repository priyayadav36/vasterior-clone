"use client";

import Image from "next/image";
import Link from "next/link";

export default function InteriorDesignPage() {
  return (
    <div className="w-full">

      {/* ===========================  
          HERO BANNER  
      ============================ */}
      <div className="relative w-full h-[380px] md:h-[450px]">
        <Image
          src="/wedding1.webp"     // <-- Add your banner image in public/
               // <-- Add your banner image in public/
          alt="Interior Design Banner"
          fill
          priority
          sizes="100vw"                  // <-- FIX for Next.js error
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Heading */}
        <h1 className="absolute inset-0 flex items-center justify-center 
            text-white font-semibold text-4xl md:text-6xl">
      Wedding Designing
        </h1>
      </div>

      {/* ===========================  
          BREADCRUMB  
      ============================ */}
      <div className="bg-[#F7E9DB] py-4 px-6 text-gray-700 text-sm">
        <div className="max-w-6xl mx-auto flex gap-2 items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>

          <Link href="/services" className="hover:underline">Services</Link>
          <span>›</span>

          <span className="font-semibold text-black">Wedding Designing</span>
        </div>
      </div>

      {/* ===========================  
          CONTENT SECTION  
      ============================ */}
      <div className="bg-[#F7E9DB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-black font-semibold mb-8">
          Wedding Designing Services by Vasterior
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
          At Vasterior, we see weddings not just as events, but as extraordinary life moments that deserve to be celebrated with artistry, precision, and heart. Our wedding designing services are dedicated to creating unforgettable experiences where every design detail reflects your love story, personality, and cultural heritage. From intimate ceremonies to grand destination weddings, we craft celebrations that are both visually breathtaking and emotionally memorable.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Wedding design goes far beyond decoration—it's about curating an atmosphere that blends tradition with modern elegance, ensuring every element resonates with meaning. Our process begins by understanding your story, preferences, and vision. Guided by Aparna's refined design sensibility, our team conceptualizes unique themes, color palettes, and décor elements that bring harmony, soul, and style to your big day. Every aspect—from stage and mandap design to floral arrangements, lighting concepts, and guest flow—is planned with care and perfection.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
With extensive experience in luxury, destination, and cultural weddings, we transform venues into enchanting spaces that reflect timeless elegance. Whether you dream of a regal palace celebration, a serene beach ceremony, or a chic modern setting, Vasterior ensures your wedding feels magical and truly personal.
          </p>
        </div>
      </div>
<div className="w-full">

      {/* SERVICES LIST SECTION (Peach Background) */}
      <div className="bg-[#F3D3B4] py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black mb-12">
         Our Wedding Designing Services Include
        </h2>

        {/* TWO COLUMN LIST */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-black">

          {/* LEFT COLUMN */}
          <ul className="space-y-6 text-lg">
            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Theme & Concept Development</strong>
                  <p>Crafting unique narratives that reflect your journey.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>
Venue Styling & Transformation</strong>
                  
                  <p>Enhancing spaces with sophisticated décor.</p>
                  <strong></strong>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Stage & Mandap Design</strong>
                  <p>Creating elegant and striking centerpieces.

</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Floral Installations
</strong>
                  <p>Designing artistic arrangements filled with beauty and freshness.</p>
                </div>
              </span>
            </li>
             <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Lighting & Ambience Creation
</strong>
                  <p>Setting unforgettable moods with custom illumination.</p>
                </div>
              </span>
            </li>
          </ul>

          {/* RIGHT COLUMN */}
          <ul className="space-y-6 text-lg">
            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Guest Flow & Seating Planning</strong>
                  <p>Ensuring comfort, accessibility, and harmony.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Table Styling & Décor</strong>
                  <p>Designing refined, elegant tablescapes.</p>
                  
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Destination Wedding Design</strong>
                  <p>Tailored setups for weddings in unique locations.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Luxury Wedding Experiences</strong>
                  <p>Bespoke, high-end designs for elite celebrations.</p>
                </div>
              </span>
            </li>
          </ul>

        </div>
      </div>

      
    </div>
    <div className="w-full bg-[#F7E9DB] py-16 px-6">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl  font-semibold text-black mb-10">
        Gallery
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* IMAGE 1 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/wedding2.webp"     // <-- Add your image
            alt="Gallery Image 1"
            width={60}
            height={400}
            className="object-cover h-[300px] w-full none-blur transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src=""     // <-- Add your image
            alt="Gallery Image 2"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src=""     // <-- Add your image
            alt="Gallery Image 3"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

      </div>
    </div>
    <div className="bg-[#F7E9DB] py-24 px-6 flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl p-10 text-center">
          <p className="text-xl italic text-black leading-relaxed">
          At Vasterior, we design weddings that go beyond celebration—they become cherished memories for a lifetime. With creativity, precision, and passion, we transform visions into reality, delivering weddings that are truly timeless, magical, and unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
}


