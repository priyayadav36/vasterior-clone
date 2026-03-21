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
          src="/furniture.webp"     // <-- Add your banner image in public/
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
     Furniture Sourcing
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

          <span className="font-semibold text-black">Furniture Sourcing</span>
        </div>
      </div>

      {/* ===========================  
          CONTENT SECTION  
      ============================ */}
      <div className="bg-[#F7E9DB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-black font-semibold mb-8">
        Furniture Sourcing Services by Vasterior
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
       At Vasterior, we believe furniture is the foundation of great interiors—it defines comfort, enhances functionality, and gives every space its unique character. Our Furniture Sourcing services are crafted to help clients discover the perfect pieces that align with their interiors, lifestyle, and budget. From custom-made designer furniture to curated ready-to-use collections, we ensure every piece complements your vision while delivering quality and elegance.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Selecting the right furniture can feel overwhelming given the endless range of styles, materials, and finishes. That's where our expertise makes the difference. Guided by Aparna's refined design sensibility, our team handpicks furniture that not only suits your design language but also ensures long-lasting durability and comfort. Whether it's a modern apartment, luxury villa, or commercial space, we provide access to a trusted network of skilled artisans, manufacturers, and suppliers.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
What makes our approach unique is the balance between curation and customization. We don't just purchase furniture—we build tailored solutions that bring cohesion to interiors. From statement sofas, dining sets, and beds to ergonomic workstations, storage units, and accent décor, every selection blends style with practicality.
          </p>
        </div>
      </div>
<div className="w-full">

      {/* SERVICES LIST SECTION (Peach Background) */}
      <div className="bg-[#F3D3B4] py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black mb-12">
    Our Furniture Sourcing Services Include
        </h2>

        {/* TWO COLUMN LIST */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-black">

          {/* LEFT COLUMN */}
          <ul className="space-y-6 text-lg">
            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Residential Furniture</strong>
                  <p>Stylish, functional pieces for homes, apartments, and villas</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Office & Commercial Furniture</strong>
                  
                  <p>Ergonomic, durable solutions for productive spaces.</p>
                  <strong></strong>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Custom-Made Furniture</strong>
                  <p>Bespoke designs crafted to individual requirements.
</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Luxury & Designer Furniture
</strong>
                  <p>Exclusive collections for premium lifestyle spaces.</p>
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
Outdoor & Patio Furniture</strong>
                  <p>Weather-resistant, elegant options for open areas.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Soft Furnishings & Accessories</strong>
                  <p>Rugs, cushions, and décor to complete interiors.</p>
                  
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Material & Finish Consultation</strong>
                  <p>Expert guidance on woods, fabrics, metals, and laminates.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>
End-to-End Procurement</strong>
                  <p>Managing selection, sourcing, logistics, and installation.</p>
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
            src="/furniture1.webp"     // <-- Add your image
            alt="Gallery Image 1"
            width={60}
            height={400}
            className="object-cover h-[300px] w-full none-blur transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/furniture2.webp"     // <-- Add your image
            alt="Gallery Image 2"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/furniture3.webp"     // <-- Add your image
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
         At Vasterior, furniture sourcing goes beyond finding pieces—it's about creating cohesive living experiences. With our curated approach, we deliver interiors where design, quality, and comfort come together seamlessly, ensuring every space feels elegant, functional, and uniquely yours.
          </p>
        </div>
      </div>
    </div>
  );
}


