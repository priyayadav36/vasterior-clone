

export default function Blogs() {
  const blogs = [
    {
      date: "Nov 27, 2025",
      img: "/b1.webp",
      title: "Smart Budget Vastu-Based Interior Design Ideas for Delhi-NCR Homes",
      sub: "An Expert Guide by Vasterior - Delhi-NCR's Leading...",
    },
    {
      date: "Nov 26, 2025",
      img: "/b2.webp",
      title: "How Premium Residential Interior Designers Transform Delhi Homes",
      sub: "A Signature Guide by Vasterior - Delhi-NCR's Luxury...",
    },
    {
      date: "Nov 22, 2025",
      img: "/b3.webp",
      title: "Latest Interior Design Trends by the Best Designers in Delhi-NCR",
      sub: "A Vasterior Signature Guide: Where Timeless Design...",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 bg-[#f8ebdd]">
      <h1 className="text-4xl text-black font-bold mb-10">BLOGS</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-20 w-full">
        {blogs.map((b, i) => (
          <div
            key={i}
            className="bg-[#eecfaf]  text-black rounded-3xl shadow-xl p-4 hover:shadow-2xl transition-all duration-300"
          >
            {/* IMAGE BOX */}
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={b.img}
                width={600}
                height={400}
                alt={b.title}
                className="rounded-3xl w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* DATE TAG */}
              <p className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm shadow">
                {b.date}
              </p>
            </div>

            {/* TEXT CONTENT */}
            <div className="mt-4">
              <h2 className="text-lg font-bold">{b.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button className="mt-10 px-8 py-3 bg-[#eecfaf] text-black rounded-full shadow hover:shadow-lg flex items-center gap-2 text-lg font-medium">
        More Blogs →
      </button>
    </div>
  );
}
