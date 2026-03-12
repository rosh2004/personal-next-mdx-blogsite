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

      <ul className="w-full list-none p-0 m-0 flex flex-col gap-4">
        {posts.map((post, i) => (
          <PostListItem key={post.id} post={post} index={i} />
        ))}
      </ul>
    </section>
  );
}
