import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Photography & AI Studio Blog | Guides & Workflow Insights",
  description:
    "Expert guides and tutorials on AI face search, client photo galleries, studio CRM, proofing, and photography business growth strategies from PhotoOS.",
  keywords: [
    "photography business blog",
    "AI photography guides",
    "photography CRM guide",
    "client photo gallery best practices",
    "photography studio marketing",
    "AI face match tutorials",
    "PhotoOS blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Photography & AI Studio Blog | PhotoOS",
    description:
      "Expert guides and tutorials on AI face search, client photo galleries, studio CRM, proofing, and photography business growth strategies from PhotoOS.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS Photography & AI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography & AI Studio Blog | PhotoOS",
    description:
      "Expert guides and tutorials on AI face search, client photo galleries, studio CRM, proofing, and photography business growth strategies from PhotoOS.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc]">
      <Header />
      <section className="relative overflow-hidden bg-[#0A3F61] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3495A1]/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#EF8619]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
              <BookOpen size={16} />
              PhotoOS Insights
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Ideas for the modern photography business.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Practical guides on AI photography, client galleries, studio
              management, mobile experiences and sustainable photography
              business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider">
                    <span className="text-[#EF8619]">{post.category}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock3 size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-black leading-tight text-[#0A3F61]">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1f70b8] transition hover:text-[#EF8619]"
                  >
                    Read article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[34px] bg-[#0A3F61] px-7 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Build a smarter photography workflow.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
            Explore PhotoOS for studio management, client galleries,
            collaboration and AI-powered photography workflows.
          </p>

          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#EF8619] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0A3F61]"
          >
            Explore PhotoOS
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
