import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: Meta;
  index?: number;
};

export default function PostListItem({ post, index = 0 }: Props) {
  const { id, title, date, tags = [] } = post;
  const formattedDate = getFormattedDate(date);
  const staggerClass = `stagger-${Math.min(index + 4, 8)}`;

  return (
    <li className={`list-none m-0 animate-fade-up ${staggerClass}`}>
      <Link
        href={`/posts/${id}`}
        className="post-card flex flex-col gap-2 p-5 no-underline block"
      >
        <span className="post-card-title font-fraunces text-xl font-semibold leading-snug transition-colors duration-200 text-foreground">
          {title}
        </span>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-xs tracking-wide text-muted">
            {formattedDate}
          </span>
          {tags.length > 0 && (
            <>
              <span className="text-muted/40 text-xs">|</span>
              <div className="flex gap-1.5 flex-wrap">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-outfit font-medium text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </Link>
    </li>
  );
}
