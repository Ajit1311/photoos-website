import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  ExternalLink,
} from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | PhotoOS`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["PhotoOS"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 750,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function getRelatedPosts(slugs: string[]) {
  return slugs
    .map((slug) => getBlogPost(slug))
    .filter(Boolean);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.related);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`https://photoos.ai${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "PhotoOS",
      url: "https://photoos.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "PhotoOS",
      url: "https://photoos.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://photoos.ai/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <article>
        <section className="bg-[#0A3F61] px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="mt-10 max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF8619]">
                {post.category}
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/55">
                <span>PhotoOS</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[32px] bg-slate-100 shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="prose prose-slate max-w-none">
                {post.content.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="mt-12 text-2xl font-black leading-tight text-[#0A3F61] sm:text-3xl"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul
                        key={index}
                        className="my-7 space-y-3 pl-5 text-base leading-8 text-slate-600"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="my-10 rounded-2xl border-l-4 border-[#EF8619] bg-[#f7fafc] px-6 py-5 text-lg font-semibold leading-8 text-[#0A3F61]"
                      >
                        {block.text}
                      </blockquote>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="my-6 text-base leading-8 text-slate-600"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 rounded-[28px] bg-[#f7fafc] p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-[#EF8619]">
                  Explore PhotoOS
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Connect studio management, client galleries, collaboration
                  and AI-powered workflows in one photography platform.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A3F61] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f70b8]"
                  >
                    View Pricing
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0A3F61] transition hover:border-[#3495A1]"
                  >
                    Contact PhotoOS
                  </Link>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-[28px] border border-slate-200 bg-[#f7fafc] p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#EF8619]">
                  Related reading
                </p>

                <div className="mt-5 space-y-5">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related!.slug}
                      href={`/blog/${related!.slug}`}
                      className="group block"
                    >
                      <p className="text-sm font-bold leading-6 text-[#0A3F61] transition group-hover:text-[#1f70b8]">
                        {related!.title}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                        Read article
                        <ArrowRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[28px] bg-[#0A3F61] p-6 text-white">
                <p className="text-lg font-black">
                  Ready for a smarter studio workflow?
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Explore PhotoOS features for photographers and studios.
                </p>

                <Link
                  href="/pricing"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#EF8619]"
                >
                  Explore plans
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
