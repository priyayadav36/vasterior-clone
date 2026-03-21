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
          src="/style1.webp"     // <-- Add your banner image in public/
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
       Interior Styling & Material Consultation
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

          <span className="font-semibold text-black">Interior Styling & Material Consultation</span>
        </div>
      </div>

      {/* ===========================  
          CONTENT SECTION  
      ============================ */}
      <div className="bg-[#F7E9DB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-black font-semibold mb-8">
            Interior Styling & Material Consultation
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
            At Vasterior, we believe the soul of interior design is found in the details—the textures you touch, the colors you experience, and the atmosphere you live in. Our Interior Styling & Material Consultation services are tailored to transform spaces into immersive environments by thoughtfully curating finishes, furnishings, and accessories that reflect your personal taste and aspirations.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Every space has its own narrative, and styling is the element that completes the story. From selecting furniture, fabrics, and lighting to incorporating artwork, accessories, and statement décor, our expert team ensures that each detail works in balance to create spaces that are cohesive, practical, and timeless.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Equally important is the choice of materials and finishes. Guided by Aparna's refined design sensibility, we help clients choose flooring, wall treatments, surface finishes, woodwork, and upholstery that offer the perfect mix of durability, elegance, and functionality. Our recommendations are always tailored—whether your preference leans toward sustainable, eco-friendly solutions or luxury, high-end finishes.
          </p>
        </div>
      </div>
<div className="w-full">

      {/* SERVICES LIST SECTION (Peach Background) */}
      <div className="bg-[#F3D3B4] py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black mb-12">
         Our Interior Styling & Material Consultation Services
        </h2>

        {/* TWO COLUMN LIST */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-black">

          {/* LEFT COLUMN */}
          <ul className="space-y-6 text-lg">
            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Furniture Selection & Placement</strong>
                  <p>Choosing pieces that maximize comfort and flow</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Soft Furnishings & Fabrics</strong>
                  
                  <p>Upholstery, curtains, rugs, and cushions for warmth and texture.</p>
                  <strong></strong>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Lighting & Ambience Design</strong>
                  <p>
Crafting mood and character with curated lighting plans.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Décor & Accessories Styling</strong>
                  <p>Finishing spaces with artwork, mirrors, and accent pieces.</p>
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
                  <strong>
Material & Finish Consultation</strong>
                  <p>Flooring, wall textures, laminates, and paints for a unified look.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Color Palette Development</strong>
                  <p>Harmonizing shades to reflect mood, brand, or personality.</p>
                  
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Sustainable & Luxury Options</strong>
                  <p>Offering eco-conscious as well as premium finish selections.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>
Tailored Styling Solutions</strong>
                  <p>Customizing every element to fit individual needs.</p>
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
            src="/style2.webp"     // <-- Add your image
            alt="Gallery Image 1"
            width={60}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/style3.webp"     // <-- Add your image
            alt="Gallery Image 2"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/style4.webp"     // <-- Add your image
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
            At Vasterior, we don't just style interiors—we design living experiences where every fabric, finish, and décor piece works seamlessly together. The result is a space that reflects who you are, while remaining functional, elegant, and timeless.
          </p>
        </div>
      </div>
    </div>
  );
}


