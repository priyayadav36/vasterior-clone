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
          src="/pmc1.webp"     // <-- Add your banner image in public/
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
     Project Management Consultancy
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

          <span className="font-semibold text-black">PMC Services</span>
        </div>
      </div>

      {/* ===========================  
          CONTENT SECTION  
      ============================ */}
      <div className="bg-[#F7E9DB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-black font-semibold mb-8">
         PMC (Project Management Consultancy) Services by Vasterior
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
         At Vasterior, we know that the success of any project depends on careful planning, seamless execution, and timely delivery. Our Project Management Consultancy (PMC) services are designed to provide end-to-end oversight, ensuring every project is completed with precision, efficiency, and uncompromised quality. By combining strategic planning with meticulous supervision, we help clients achieve their vision while staying aligned with budgets and deadlines.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Our PMC approach is built on collaboration, transparency, and accountability. Acting as the link between clients, architects, designers, contractors, and vendors, we streamline communication and coordination across all phases. From the earliest stages of project planning and cost estimation to vendor management, execution, and final handover, our dedicated team ensures smooth workflows that protect both design intent and quality standards.</p><br></br>
<p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
Guided by Aparna's design expertise and project leadership, Vasterior brings a unique balance of creativity and technical control. Whether managing a residential development, corporate office, or luxury project, we oversee every step with diligence—giving clients peace of mind while their dream spaces come to life.
          </p>
        </div>
      </div>
<div className="w-full">

      {/* SERVICES LIST SECTION (Peach Background) */}
      <div className="bg-[#F3D3B4] py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black mb-12">
        Our PMC Services Include
        </h2>

        {/* TWO COLUMN LIST */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-black">

          {/* LEFT COLUMN */}
          <ul className="space-y-6 text-lg">
            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Project Planning & Scheduling</strong>
                  <p>Structured workflows and timelines for efficiency.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Budget & Cost Management</strong>
                  
                  <p>Optimizing resources without compromising quality.</p>
                  <strong></strong>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>
Vendor & Contractor Coordination</strong>
                  <p>Seamless collaboration for timely results.

</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Design Implementation Supervision
</strong>
                  <p>Ensuring flawless alignment with project intent.</p>
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
                  <strong>Procurement Management</strong>
                  <p>Quality sourcing for materials, furniture, and finishes.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Quality Control & Risk Management</strong>
                  <p>Monitoring to maintain standards and minimize risks.</p>
                  
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Progress Tracking & Reporting</strong>
                  <p>Transparent updates and accountability throughout.</p>
                </div>
              </span>
            </li>

            <li>
              <span className="flex gap-3">
                <span className="text-orange-600 text-xl">•</span>
                <div>
                  <strong>Complete Project Handover</strong>
                  <p>Delivering fully finished, ready-to-use spaces on schedule.</p>
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
            src="/pmc2.webp"     // <-- Add your image
            alt="Gallery Image 1"
            width={60}
            height={400}
            className="object-cover h-[300px] w-full none-blur transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/pmc3.webp"     // <-- Add your image
            alt="Gallery Image 2"
            width={600}
            height={400}
            className="object-cover h-[300px] w-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/pmc4.webp"     // <-- Add your image
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
          At Vasterior, our PMC services go beyond management—they represent ownership, responsibility, and excellence. With strategic oversight and a creative edge, we ensure every project is delivered on time, within budget, and beyond expectations.
          </p>
        </div>
      </div>
    </div>
  );
}


