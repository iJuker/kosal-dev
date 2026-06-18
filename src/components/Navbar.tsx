import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-zinc-100 dark:border-zinc-900 px-8 py-5 flex items-center justify-between">
      <Link href="/" className="text-zinc-900 dark:text-white font-bold text-xl">
        KOSAL DEV
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
          Blog
        </Link>
        <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
