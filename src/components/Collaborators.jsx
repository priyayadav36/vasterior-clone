
export default function Collaborators() {
  const collaborators = [
    { name: "Artist/ Art Gallery", icon: "/artist.webp" },
    { name: "Vastu Consultants", icon: "/vastu.webp" },
    { name: "Architects", icon: "/architectS.webp" },
    { name: "Civil Contractors", icon: "/civil.webp" },
    { name: "M.E.P Consultants", icon: "/MEP.webp" },
    { name: "Builders", icon: "/builders.webp" },
  ];

  return (
    <div className="bg-[#f8ebdd] py-20 px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl text-black font-bold mb-4">Our Collaborators</h1>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        We partner with the best in the industry to deliver exceptional design solutions.
      </p>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center mb-16">
        {collaborators.map((c, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <img
                src={c.icon}
                width={60}
                height={60}
                alt={c.name}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">{c.name}</p>
          </div>
        ))}
      </div>

      {/* CTA Tag */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#e8f1ff]  text-gray-800 px-6 py-2 rounded-full shadow-sm text-lg flex items-center gap-2">
          <span>🤝</span> Interested in collaborating with us?
        </div>
      </div>

      {/* Sub Text */}
      <p className="text-gray-700 mb-10">
        We're always looking for new partnerships that align with our vision and values.
      </p>

      {/* Button */}
    <button className="mx-auto block px-10 py-4 text-black bg-[#ffddbd] rounded-full shadow hover:shadow-lg text-lg font-semibold flex items-center gap-2 transition-all">
  Become a Collaborator →
</button>

    </div>
  );
}
