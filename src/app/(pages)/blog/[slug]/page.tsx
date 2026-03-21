// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogdata";
import { Images, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Blog post not found", description: "The requested blog post could not be found." };

  return post.metaTags || { title: post.title, description: post.content };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = blogPosts[currentIndex + 1];
  const nextPost = blogPosts[currentIndex - 1];

  return (
    <div className="min-h-screen bg-[#FFF2EB]">
      {/* Banner */}
      <div className="w-full h-[40vh] md:h-[85vh] overflow-hidden mt-0 relative">
        <Image
          src={post.image}
          alt={post.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      <div className="py-20 bg-[#FFF2EB]">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-10" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-gray-900 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Post Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            <header className="space-y-4">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black">{post.title}</h1>
              {/* Subtitle */}
              {post.subtitle && (
                <p className="text-lg text-gray-700">
                  {post.subtitle}
                </p>
              )}
              <div className="flex items-center gap-4 text-black text-sm md:text-base">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
            </header>

            <article className="prose prose-lg max-w-none text-black space-y-8">
              {post.fullContent ? (
                <>
                  <p
                    className="text-lg font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.fullContent.introduction || "" }}
                  />

                  {post.fullContent.sections?.map((section, index) => (
                    <section key={index} className="mb-10">
                      <h2 className="font-serif text-2xl sm:text-3xl text-black mb-5">{section.heading}</h2>

                      {/* Images right after heading */}
                      {section.imagesAfterHeading && section.imagesAfterHeading.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                          {section.imagesAfterHeading.map((img, idx) => (
                            <div key={idx} className="overflow-hidden rounded-md">
                              <Image
                                src={img}
                                alt={`${post.title} - ${section.heading} - ${idx + 1}`}
                                width={600}
                                height={600}
                                className="w-[600px] h-[320px] object-cover rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 1. Display content if it exists */}
                      {section.content && (
                        <p
                          className="text-lg leading-relaxed mb-4"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      )}

                      {/* 2. Display contents array if it exists */}
                      {section.contents && section.contents.length > 0 && (
                        section.contents.map((para, i) => (
                          <p
                            key={i}
                            className="text-lg leading-relaxed mb-4"
                            dangerouslySetInnerHTML={{ __html: para }}
                          />
                        ))
                      )}

                      {/* Images after content/contents */}
                      {section.imagesAfterContent && section.imagesAfterContent.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                          {section.imagesAfterContent.map((img, idx) => (
                            <div key={idx} className="overflow-hidden rounded-md">
                              <Image
                                src={img}
                                alt={`${post.title} - ${section.heading} - ${idx + 1}`}
                                width={600}
                                height={600}
                                className="w-[600px] h-[320px] object-cover rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 3. Display bullets if they exist */}
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="list-disc list-inside mb-6 space-y-2">
                          {section.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-black text-lg"
                              dangerouslySetInnerHTML={{ __html: bullet }}
                            />
                          ))}
                        </ul>
                      )}

                      {/* Images after bullets (also supports legacy 'images' field) */}
                      {(section.imagesAfterBullets || section.images) && (
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                          {(section.imagesAfterBullets || section.images)?.map((img, idx) => (
                            <div key={idx} className="overflow-hidden rounded-md">
                              <Image
                                src={img}
                                alt={`${post.title} - ${section.heading} - ${idx + 1}`}
                                width={600}
                                height={600}
                                className="w-[600px] h-[320px] object-cover rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 4. Display contentAfterBullets */}
                      {section.contentAfterBullets && (
                        <p
                          className="text-lg leading-relaxed mb-4"
                          dangerouslySetInnerHTML={{ __html: section.contentAfterBullets }}
                        />
                      )}

                      {/* 5. Display contentsAfterBullets array */}
                      {section.contentsAfterBullets && section.contentsAfterBullets.length > 0 && (
                        section.contentsAfterBullets.map((para, i) => (
                          <p
                            key={i}
                            className="text-lg leading-relaxed mb-4"
                            dangerouslySetInnerHTML={{ __html: para }}
                          />
                        ))
                      )}

                      {/* Images after contentAfterBullets */}
                      {section.imagesAfterContentAfterBullets && section.imagesAfterContentAfterBullets.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                          {section.imagesAfterContentAfterBullets.map((img, idx) => (
                            <div key={idx} className="overflow-hidden rounded-md">
                              <Image
                                src={img}
                                alt={`${post.title} - ${section.heading} - ${idx + 1}`}
                                width={600}
                                height={600}
                                className="w-[600px] h-[320px] object-cover rounded-md"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 6. Display contentAfterImages */}
                      {section.contentAfterImages && (
                        <p
                          className="text-lg leading-relaxed mb-4"
                          dangerouslySetInnerHTML={{ __html: section.contentAfterImages }}
                        />
                      )}

                      {/* 7. Display contentsAfterImages array */}
                      {section.contentsAfterImages && section.contentsAfterImages.length > 0 && (
                        section.contentsAfterImages.map((para, i) => (
                          <p
                            key={i}
                            className="text-lg leading-relaxed mb-4"
                            dangerouslySetInnerHTML={{ __html: para }}
                          />
                        ))
                      )}

                      {/* Table Support */}
                      {section.table && (
                        <div className="overflow-x-auto mb-6">
                          <table className="min-w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
                            {section.table.headers && (
                              <thead>
                                <tr className="bg-gray-50">
                                  {section.table.headers.map((header, i) => (
                                    <th
                                      key={i}
                                      className="border border-gray-300 px-4 py-3 text-left font-semibold text-black text-sm md:text-base"
                                    >
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                            )}
                            <tbody>
                              {section.table.rows?.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-25"}>
                                  {row.map((cell, j) => (
                                    <td
                                      key={j}
                                      className="border border-gray-300 px-4 py-3 text-black text-sm md:text-base"
                                      dangerouslySetInnerHTML={{ __html: cell }}
                                    />
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </section>
                  ))}
                </>
              ) : (
                <p className="text-lg leading-relaxed">{post.content}</p>
              )}
            </article>

            {/* Gallery */}
            {post.gallery && post.gallery.length > 0 && (
              <section className="mt-16">
                <h2 className="font-serif text-2xl text-black mb-6 flex items-center">
                  <Images className="mr-2 text-black" size={24} /> Gallery
                </h2>
                <div className="columns-2 md:columns-3 gap-6 space-y-6">
                  {post.gallery
                    .filter((image) => image && image.trim() !== "")
                    .map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-md">
                        <Image
                          src={image}
                          alt={`${post.title} - Wedding gallery image ${index + 1}`}
                          width={800}
                          height={600}
                          className="w-full h-[320px] object-cover rounded-md"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                      </div>
                    ))}
                </div>
              </section>
            )}

            {/* Navigation */}
            <nav className="mt-16 pt-8 border-t border-gray-200 flex justify-between" aria-label="Post navigation">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="text-black font-medium hover:underline"
                  aria-label={`Previous post: ${prevPost.title}`}
                >
                  ← {prevPost.title}
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="text-black font-medium hover:underline"
                  aria-label={`Next post: ${nextPost.title}`}
                >
                  {nextPost.title} →
                </Link>
              )}
            </nav>

            {/* Share Buttons */}
            <section className="mt-16 pt-8 border-t border-elegant-200 space-y-4">
              <h3 className="font-serif text-xl text-black">Share this story</h3>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.vasterior.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border text-black border-black rounded-md hover:bg-gray-100 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=https://www.vasterior.com/blog/${post.slug}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border text-black border-black rounded-md hover:bg-gray-100 transition-colors"
                >
                  Pinterest
                </a>
                <a
                  href="https://www.instagram.com/pradeepshukladecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border text-black border-black rounded-md hover:bg-gray-100 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}