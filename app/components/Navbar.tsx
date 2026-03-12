import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav-bar sticky top-0 z-10">
      <div className="max-w-3xl mx-auto flex items-center justify-between py-3.5 px-4 md:px-6">
        <Link
          href="https://www.roshaantech.com"
          className="group flex items-center gap-2 no-underline"
        >
          <span className="font-mono text-xs select-none text-secondary/60 group-hover:text-secondary transition-colors duration-200">
            ~/
          </span>
          <span className="font-fraunces text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
            Roshaan Siddiqui
          </span>
        </Link>
        <Link
          href="/"
          className="font-outfit text-sm font-medium text-muted hover:text-primary transition-colors duration-200 no-underline"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
