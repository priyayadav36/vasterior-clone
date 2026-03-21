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
          src="/vastu1.webp"     // <-- Add your banner image in public/
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
         Vastu Consultation
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

          <span className="font-semibold text-black">Vastu Consultation</span>
        </div>
      </div>

      {/* ===========================  
          CONTENT SECTION  
      ============================ */}
      <div className="bg-[#F7E9DB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-black font-semibold mb-8">
            Vastu Consultation Services by Vasterior
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
            At Vasterior, we believe great design goes beyond aesthetics and function—it must also promote harmony and positive energy. This is where the ancient Indian science of Vastu Shastra becomes essential. Rooted in balancing the five elements—earth, water, fire, air, and space—Vastu principles are known to bring health, prosperity, and well-being into homes and workplaces. Our Vastu consultation services are tailored to help you align your environments with universal energies, fostering balance, clarity, and success.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Unlike generic solutions, our approach combines traditional Vastu wisdom with modern design thinking. We carefully study the orientation, layout, and energy flow of each property before providing personalized recommendations. Whether it's a new construction, an existing residence, an office, or a commercial property, our guidance ensures your space supports positivity, productivity, and peace of mind.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Guided by Aparna's refined design sensibility, we seamlessly integrate Vastu principles into architectural planning and interiors. Corrections and adjustments are practical, aesthetically harmonious, and easy to adopt—ensuring that beauty is never compromised while balance is restored.
          </p>
        </div>
      </div>
<div className="w-full">

      {/* SERVICES LIST SECTION (Peach Background) */}
      <div className="bg-[#F3D3B4] py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black mb-12">
         Our Vastu Consultation Services
        </h2>

        {/* TWO COLUMN LIST */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-black">

          {/* LEFT COLUMN */}
          <ul className="space-y-6 text-lg">
            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Site Evaluation & Energy Mapping</strong>
                  <p>In-depth assessment of land, layout, and directional balance.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Residential Vastu Solutions</strong>
                  <p>Aligning homes for health, harmony, and prosperity.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Office & Commercial Vastu</strong>
                  <p>
Designing spaces that enhance success, flow, and growth.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Interior Layout Guidance</strong>
                  <p>Room, furniture, and utility placement as per energy flow.</p>
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
                  <strong>Color & Element Balancing</strong>
                  <p>Using shades, textures, and elements to boost positivity.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Remedial Vastu</strong>
                  <p>Practical corrections without major structural changes.</p>
                  
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Pre-Construction Guidance</strong>
                  <p>Planning Vastu-compliant layouts with architects.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Lifestyle & Spiritual Alignment</strong>
                  <p>Creating spaces that nurture inner well-being.</p>
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
            src="/vastu2.webp"     // <-- Add your image
            alt="Gallery Image 1"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/vastu3.webp"     // <-- Add your image
            alt="Gallery Image 2"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/vastu4.webp"     // <-- Add your image
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
            At Vasterior, our goal is to design spaces that are more than functional—they become a source of energy, inspiration, and balance. With our expert Vastu consultation, we bring together the best of ancient science and contemporary design, helping you create environments that truly support life's journey.
          </p>
        </div>
      </div>
    </div>
  );
}
