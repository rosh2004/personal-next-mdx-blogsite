import PostListItem from "@/app/components/PostListItem";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{
    tag: string;
  }>;
};

export const revalidate = 86400;

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];
  const tags = new Set(
    posts
      .map((post) => post.tags ?? [])
      .flat()
      .filter(Boolean)
  );

  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params;
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function page({ params }: Props) {
  const { tag } = await params;
  const posts = await getPostsMeta();
  if (!posts)
    return (
      <p className="mt-10 text-center text-muted">
        No posts with {tag} found
      </p>
    );

  const renderedPosts = posts
    .filter((post) => post.tags?.includes(tag))
    .map((post, i) => <PostListItem key={post.id} post={post} index={i} />);

  if (!renderedPosts.length) {
    return (
      <div className="text-center not-prose animate-fade-up">
        <p className="mt-10 text-muted">
          No posts found for &ldquo;{tag}&rdquo;
        </p>
        <Link href="/" className="back-link justify-center mt-2">
          &larr; Back to home
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-8 mx-auto max-w-2xl not-prose animate-fade-up">
      <Link href="/" className="back-link mb-6 inline-flex">
        &larr; Back to home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-1 h-8 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, var(--primary), var(--secondary))",
          }}
        />
        <div>
          <p className="section-label m-0">Tagged</p>
          <h2 className="font-fraunces text-3xl font-bold m-0 leading-none text-foreground">
            {tag}
          </h2>
        </div>
      </div>
      <ul className="w-full list-none p-0 m-0 flex flex-col gap-4">
        {renderedPosts}
      </ul>
    </section>
  );
}
