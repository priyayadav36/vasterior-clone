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
          src="/smart.webp"     // <-- Add your banner image in public/
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
     Smart Home Solutions
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

          <span className="font-semibold text-black">Smart Home Solutions</span>
        </div>
      </div>

      {/* ===========================  
          CONTENT SECTION  
      ============================ */}
      <div className="bg-[#F7E9DB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-black font-semibold mb-8">
         Smart Home Solutions by Vasterior
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
        At Vasterior, we believe modern living should embody comfort, convenience, and connectivity. Our Smart Home Solutions seamlessly integrate advanced technology into your spaces, making them more intelligent, efficient, and secure—without compromising aesthetics. With automation systems tailored to your needs, you can manage lighting, climate, entertainment, security, and appliances—all from the palm of your hand.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
For us, a smart home isn't about adding gadgets—it's about creating an environment that adapts to your lifestyle. From voice-activated controls to customized automation schedules, our solutions make everyday living simpler, safer, and more luxurious. Whether it's a residence, a luxury villa, or a commercial property, we design discreet, future-ready systems that blend seamlessly with your interiors.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Guided by Aparna's forward-thinking design sensibility, our approach ensures that technology complements design, delivering spaces that feel elegant while offering unmatched functionality.
          </p>
        </div>
      </div>
<div className="w-full">

      {/* SERVICES LIST SECTION (Peach Background) */}
      <div className="bg-[#F3D3B4] py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black mb-12">
        Our Smart Home Services Include
        </h2>

        {/* TWO COLUMN LIST */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-black">

          {/* LEFT COLUMN */}
          <ul className="space-y-6 text-lg">
            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Smart Lighting Solutions</strong>
                  <p>Automated, mood-based illumination.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Climate & Energy Management</strong>
                  
                  <p>Optimized heating, cooling, and energy efficiency.</p>
                  <strong></strong>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Home Security & Surveillance</strong>
                  <p>Smart locks, CCTV, and integrated alarm systems.
</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Entertainment & Media Control
</strong>
                  <p>Centralized systems for music, TV, and theaters.</p>
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
                  <strong>Voice & App Controls</strong>
                  <p>Hands-free convenience via AI assistants and mobile apps.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Curtains & Blinds Automation</strong>
                  <p>Effortless shading and privacy management.</p>
                  
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Appliance Integration</strong>
                  <p>Seamless connection of smart appliances.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Luxury Smart Living</strong>
                  <p>Bespoke automation for premium residences.</p>
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
            src="/smart1.webp"     // <-- Add your image
            alt="Gallery Image 1"
            width={60}
            height={400}
            className="object-cover h-[300px] w-full none-blur transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/smart2.webp"     // <-- Add your image
            alt="Gallery Image 2"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/smart3.webp"     // <-- Add your image
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
         At Vasterior, we don't just equip spaces with smart devices—we design intelligent lifestyles. Our goal is to create homes that are secure, sustainable, and effortless, blending luxury with next-generation convenience so you can enjoy truly future-ready living.
          </p>
        </div>
      </div>
    </div>
  );
}


