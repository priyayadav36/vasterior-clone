import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="bg-[#f6e8d9] py-16 px-20">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-serif tracking-widest text-[#1a1f2a] mb-10">
          Our Team
        </h2>

        {/* Team Image */}
        <div className="rounded-xl w-full overflow-hidden shadow-xl">
          <div className="w-full h-170 relative">
            <img
              src="/team.jpg" // 👉 Replace with your actual image file
              alt="Our Team Photo"
              className="object-cover object-center h-fill w-full "
            />
          </div>
        </div>

        {/* Text Below Image */}
        <div className="max-w-4xl mx-auto text-center   text-[#3d3a36]">
          <p className="text-lg leading-relaxed ">
            Meet the passionate craftsmen and visionaries behind Vasterior,
            dedicated to transforming spaces with exceptional skill and
            artistry.
          </p>
        </div>
        <section className="bg-[#f6e8d9] py-20">
          <div className="max-w-9xl mx-auto space-y-24">
            {/* Member 1 (Image Left, Text Right) */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg w-68 h-80">
                <img
                  src="/t1.jpg" // change to your image
                  alt="Himanshu"
       
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="text-[#3d3a36] md:max-w-[70%]">
                <h2 className="text-3xl font-serif text-black tracking-wide mb-1">
                  Himanshu
                </h2>
                <p className="text-lg text-black    ">
                  Production & Operations
                </p>

                <p className="text-lg leading-relaxed">
                  Oversees the entire workflow with precision, ensuring smooth
                  coordination between production and on-site execution while
                  maintaining the highest quality standards.
                </p>
              </div>
            </div>

            {/* Member 2 (Text Left, Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg  w-68 h-80">
                <img
                  src="/t2.jpg" // change to your image
                  alt="Naseer"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-[#3d3a36] md:max-w-[70%] text-left md:text-right">
                <h2 className="text-3xl font-serif  text-black tracking-wide mb-1">
                  Naseer
                </h2>
                <p className="text-lg font-medium  text-black mb-2">
                  Carpentry & Woodwork
                </p>

                <p className="text-lg leading-relaxed">
                  Combines creativity and precision to craft extraordinary
                  designs from natural, experiential pieces to modern
                  minimalistic creations showcasing exceptional artistry and
                  refined workmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

      
      <section className="bg-[#f6e8d9] py-20">
          <div className="max-w-9xl mx-auto space-y-24">
            {/* Member 1 (Image Left, Text Right) */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg w-68 h-80">
                <img
                  src="/t3.jpg" // change to your image
                  alt="Jigar"
       
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="text-[#3d3a36] md:max-w-[70%]">
                <h2 className="text-3xl font-serif text-black tracking-wide mb-1">
                 Jigar
                </h2>
                <p className="text-lg text-black  font-medium mb-2">
                  Marble & Tiles Ninja
                </p>

                <p className="text-lg leading-relaxed">
                  Specialises in artistic stone and tile installations,
                   blending traditional karigari craftsmanship 
                  from Rajasthan with contemporary design aesthetics.
                </p>
              </div>
            </div>

            {/* Member 2 (Text Left, Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg  w-68 h-80">
                <img
                  src="/t4.jpg" // change to your image
                  alt="Ramu"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-[#3d3a36] md:max-w-[70%] text-left md:text-right">
                <h2 className="text-3xl font-serif  text-black tracking-wide mb-1">
                  Ramu
                </h2>
                <p className="text-lg font-medium  text-black mb-2">
                 Paint Ninja
                </p>

                <p className="text-lg leading-relaxed">
                 Holds an expert understanding of colors, tones, and textures,
                  ensuring every surface is finished with perfect balance, depth, and harmony
                </p>
              </div>
            </div>
          </div>
        </section>





      
       </div>
    </section>
  );
}
