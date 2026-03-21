
export default function About() {
  return (
    <section className="w-full bg-[#f3e7d9] py-16 px-4 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl tracking-widest font-serif text-black">
          ABOUT US
        </h2>

        {/* SUBTEXT */}
        <p className="text-center text-md sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4 sm:mt-6">
          A dedicated group of skilled designers and architects committed to delivering
          personalized, functional, and aesthetically pleasing interior design solutions.
        </p>

        {/* TEAM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">

          {/* PERSON 1 */}
          <div className="bg-[#fbf0e5] rounded-2xl p-4 shadow-md flex flex-col items-center">
            <img
              src="/team1.webp"
              alt="Team Member 1"
              className="rounded-xl h-72 w-full object-cover"
            />
            <h3 className="text-xl text-center text-black font-semibold mt-4">
              Mr. Chitresh Jain
            </h3>
          </div>

          {/* PERSON 2 */}
          <div className="bg-[#fbf0e5] rounded-2xl p-4 shadow-md flex flex-col items-center">
            <img
              src="/team2.webp"
              alt="Team Member 2"
              className="rounded-xl h-72 w-full  object-center  object-cover "
            />
            <h3 className="text-xl text-center text-black font-semibold mt-4">
              Mrs. Charu Shukla
            </h3>
          </div>

          {/* PERSON 3 */}
          <div className="bg-[#fbf0e5] rounded-2xl p-4 shadow-md flex flex-col items-center">
            <img
              src="/team3.webp"
              alt="Team Member 3"
              className="rounded-xl h-72 w-full object-cover object-top"
            />
            <h3 className="text-xl text-center text-black font-semibold mt-4 ">
              Mr. Rounak Shukla
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
