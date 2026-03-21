import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogdata";

export default function BlogPage() {
  // Sort blogs by date (newest first)
  const sortedBlogs = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="py-16 px-4 bg-[#f6eade]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif tracking-[0.2em] text-gray-800 mb-8">
            OUR BLOG
          </h1>
          
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              Welcome to the Vasterior Blog, where we share ideas, insights, and inspiration from the world of design. From interior trends and styling tips to Vastu guidance, smart living solutions, and behind-the-scenes glimpses of our projects, our blog is designed to help you discover fresh perspectives and practical advice for creating spaces that truly reflect your lifestyle. Stay tuned for expert tips, creative inspirations, and updates from the world of architecture, interiors, and beyond.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {sortedBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group block">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Date Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {blog.date}
                  </div>
                  
                  {/* Blog Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 bg-[#f7d9bc] h-27 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-xl font-bold text-gray-800 mb-1 tracking-wide line-clamp-2"
                      title={blog.title}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-700 line-clamp-1">
                      {blog.subtitle}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}