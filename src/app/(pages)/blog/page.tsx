import type { Metadata } from "next";


import BlogPostPage from "./BlogPostPage";




export const metadata: Metadata = {
  title: "Vasterior – Interior Design Blogs | Trends, Tips & Inspiration 2025",
  description:
    "Explore Vasterior’s portfolio of bespoke interior design projects. From luxury homes to corporate spaces, discover timeless designs crafted with elegance and spatial harmony.",
  keywords:
    "Vasterior blogs, interior design blogs, design trends 2025, vastu tips, styling advice, home décor blogs, commercial interior insights",


  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/blog",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/blog",
    title: "Vasterior – Interior Design Blogs | Trends, Tips & Inspiration 2025",
    description:
      "Stay inspired with Vasterior’s interior design blogs. Explore the latest trends, Vastu insights, styling tips, and expert advice for residential and commercial spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png",
        width: 1200,
        height: 630,
        alt: "Vasterior – Interior Design Blogs | Trends, Tips & Inspiration 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vasterior – Interior Design Blogs | Trends, Tips & Inspiration 2025",
    description:
      "Stay inspired with Vasterior’s interior design blogs. Explore the latest trends, Vastu insights, styling tips, and expert advice for residential and commercial spaces.",
    images: ["https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
  
};

export default function portfolio() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <BlogPostPage />
      
      
      
      

      
    </div>
  );
}
