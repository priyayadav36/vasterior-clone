export default function ProjectVideos() {
  const videos = [
    // 👉 Just replace these YouTube links
    
    "https://www.youtube.com/embed/98tO8_CR0ic?si=7MXpyn7X4jTfUPGx",
    "https://www.youtube.com/embed/dcWHEl1_Ku4?si=KHXE9C0AGXCx_aGI",
    "https://www.youtube.com/embed/lyiGx4AnfOA?si=QrDkiA0eQOMLmgvS",
    "https://www.youtube.com/embed/lj2kGkWH4Ao?si=cDK8_8Uj2fLeMC7x",
    "https://www.youtube.com/embed/1BdHzbSFRuc?si=sdN9F7iPNU8ZCkKW",
  ];

  return (
    <section className="bg-[#f6e8d9] py-20 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-serif tracking-widest text-[#1e1e1e] mb-12">
        Project Videos
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((link, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <iframe
              className="w-full h-64 md:h-72 rounded-2xl"
              src={link}
              title={`YouTube video ${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
