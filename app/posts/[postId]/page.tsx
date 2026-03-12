import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";

type Props = {
  params: Promise<{
    postId: string;
  }>;
};

export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) return { title: "Page Not Found" };

  return {
    title: post.meta.title,
  };
}

export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export default async function page({ params }: Props) {
  const { postId } = await params;
  const post = await getPostByName(`${postId}.mdx`);
  if (!post) notFound();

  const { content, meta } = post;
  const { date, title, tags = [] } = meta;
  const pubDate = getFormattedDate(date);

  return (
    <div className="animate-fade-up">
      <p className="not-prose mt-6 mb-8">
        <Link href="/" className="back-link">
          <span className="transition-transform duration-200 inline-block group-hover:-translate-x-1">
            &larr;
          </span>
          Back to home
        </Link>
      </p>

      <header className="not-prose mb-8">
        <p className="section-label mb-3">{pubDate}</p>
        <h1 className="font-fraunces text-3xl md:text-4xl font-bold text-foreground leading-tight m-0">
          {title}
        </h1>
        {tags.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
              <Link key={i} href={`/tags/${tag}`} className="tag-pill">
                {tag}
              </Link>
            ))}
          </div>
        )}
        <div className="gradient-line mt-6 w-full" />
      </header>

      <article>{content}</article>

      {tags.length > 0 && (
        <section className="not-prose mt-12 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="section-label mb-3">Related topics</p>
          <div className="flex flex-row flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Link key={i} href={`/tags/${tag}`} className="tag-pill">
                {tag}
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="not-prose mt-10 mb-12">
        <Link href="/" className="back-link">
          &larr; Back to home
        </Link>
      </p>
    </div>
  );
}
