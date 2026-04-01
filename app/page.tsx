import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto relative">
      <div className="ambient-glow" aria-hidden="true" />
      <MyProfilePic />
      <div className="mt-6 mb-4 text-center not-prose animate-fade-up stagger-2">
        <h1 className="font-fraunces text-4xl md:text-5xl font-bold mt-0 mb-0 text-foreground leading-tight">
          Roshaan&apos;s{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--primary), var(--secondary))",
            }}
          >
            Blogs
          </span>
        </h1>
        <p className="text-sm text-muted-foreground/60 mt-3 mb-0">
          These are mostly written with AI — I often just extract what I learn with Claude and share it here.
        </p>
      </div>
      <Posts />
    </div>
  );
}
