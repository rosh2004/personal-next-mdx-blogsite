import { getPostsMeta } from "@/lib/posts";
import PostListItem from "./PostListItem";

export default async function Posts() {
  const posts = await getPostsMeta();
  if (!posts) {
    return (
      <p className="mt-10 text-center text-muted">
        Sorry, no posts available.
      </p>
    );
  }

  return (
    <section className="mt-10 mx-auto max-w-2xl not-prose animate-fade-up stagger-3">
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-1 h-8 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, var(--primary), var(--secondary))",
          }}
        />
        <h2 className="font-fraunces text-3xl font-bold m-0 leading-none text-foreground">
          Latest Posts
        </h2>
      </div>
      <ul className="w-full list-none p-0 m-0 flex flex-col gap-4">
        {posts.map((post, i) => (
          <PostListItem key={post.id} post={post} index={i} />
        ))}
      </ul>
    </section>
  );
}
