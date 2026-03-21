'use client';

import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-[#f9e9dd] py-16 px-4 md:px-16">
      {/* Title */}
      <h2 className="text-center text-black text-5xl font-serif tracking-widest mb-8">
        SERVICES
      </h2>

      {/* Paragraph */}
      <p className="text-center max-w-7xl mx-auto text-gray-700 text-lg leading-8 mb-14">
        At Vasterior, we deliver a complete range of design solutions, spanning
        architecture, interiors, furniture, lighting, product design, and
        landscaping—offering clients a seamless and integrated experience. Led
        by Vasterior’s refined vision, our team blends innovation, precision,
        and functionality to craft spaces that feel timeless, elegant, and
        personal. From material selection to colors, textures, and lighting,
        every detail is thoughtfully curated to create environments— be it
        homes, commercial spaces, or bespoke furniture—that inspire, engage, and
        leave a lasting impression.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}

        <Link href="/services/interior">
          <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-lg group">
            <img
              src="/image1.jpg"
              alt="Interior Designing"
              width={500}
              height={600}
              className=" w-full h-[300px] transition-transform duration-500 group-hover:scale-110 "
            />
            <h3
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                         text-white text-2xl font-serif tracking-widest "
            >
              INTERIOR <br /> DESIGNING
            </h3>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/services/vastu">
        <div className="relative rounded-3xl h-[300px] overflow-hidden shadow-lg group">
          <img
            src="/image2.png"
            alt="Interior Designing"
            width={500}
            height={600}
            className=" w-full h-[300px] transition-transform duration-500 group-hover:scale-110 "
          />
          <h3
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                         text-black text-2xl font-serif tracking-widest "
          >
            MAHAVASTU <br /> CONSULTATION
          </h3>
        </div>
</Link>
        {/* Card 3 */}
        <Link href="/services/styling">
        <div className="relative rounded-3xl h-[300px] overflow-hidden shadow-lg group">
          <img
            src="/image3.png"
            alt="Interior Styling"
            width={500}
            height={600}
            className=" w-full h-[300px] transition-transform duration-500 group-hover:scale-110"
          />
          <h3
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                         text-white text-2xl font-serif tracking-widest"
          >
            INTERIOR STYLING <br /> & MATERIAL CONSULTATION
          </h3>
        </div>
        </Link>

        {/* Card 4 */}
        <Link href="/services/spatial">
        <div className="relative rounded-3xl h-[300px] overflow-hidden shadow-lg group">
          <img
            src="/image4.png"
            alt="Spatial Planning"
            width={500}
            height={600}
            className=" w-full h-[300px]rounded-3xl transition-transform duration-500 group-hover:scale-110"
          />
          <h3
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                        text-black text-2xl font-serif tracking-widest"
          >
            SPATIAL <br /> PLANNING
          </h3>
        </div>
        </Link>
        {/*card 5*/}
        <Link href="/services/wedding">
        <div className="relative rounded-3xl h-[300px] overflow-hidden shadow-lg group">
          <img
            src="/image5.jpg"
            alt="Interior Designing"
            width={500}
            height={600}
            className=" w-full h-[300px] transition-transform duration-500 group-hover:scale-110 "
          />
          <h3
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                         text-white text-2xl font-serif tracking-widest "
          >
            WEDDING <br /> DESIGNING
          </h3>
        </div>
        </Link>
        {/* Card 6 */}

        <Link href="/services/pmc">
        <div className="relative rounded-3xl h-[300px] overflow-hidden shadow-lg group">
          <img
            src="/image6.jpg"
            alt="Interior Designing"
            width={500}
            height={600}
            className=" w-full h-[300px] transition-transform duration-500 group-hover:scale-110 "
          />
          <h3
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                         text-black text-2xl font-serif tracking-widest "
          >
            PMC SERVICES
          </h3>
        </div>
       </Link>
        {/* Card 7 */}
        <Link href="/services/smart">
        <div className="relative rounded-3xl h-[300px] overflow-hidden shadow-lg group">
          <img
            src="/image7.avif"
            alt="Interior Styling"
            width={500}
            height={600}
            className=" w-full h-[300px] transition-transform duration-500 group-hover:scale-110"
          />
          <h3
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                         text-white text-2xl font-serif tracking-widest"
          >
            SMART HOMES
          </h3>
        </div>
      </Link>
        {/* Card 8 */}

        <Link href="/services/furniture">
        <div className="relative rounded-3xl h-[300px] overflow-hidden shadow-lg group">
          <img
            src="/image8.png"
            alt="Spatial Planning"
            width={500}
            height={600}
            className=" w-full h-[300px] rounded-3xl transition-transform duration-500 group-hover:scale-110"
          />
          <h3
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center 
                        text-black text-2xl font-serif tracking-widest"
          >
            FURNITURE <br /> SOURCING
          </h3>
        </div>
        </Link>
      </div>
    </section>
  );
}
