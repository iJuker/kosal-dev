import Link from "next/link";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";
import { getHero, getAboutPreview } from "@/lib/home";
import PostCard from "@/components/PostCard";
import { AvatarIcon } from "@/assets/icons";

export default function Home() {
  const hero = getHero();
  const aboutPreview = getAboutPreview();
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen text-zinc-900 dark:text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <h1 className="text-5xl font-bold leading-tight max-w-xl">{hero.title}</h1>
        <p className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-sm text-base leading-relaxed">
          {hero.subtitle}
        </p>
        <Link
          href={hero.cta_href}
          className="mt-8 px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-full text-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors"
        >
          {hero.cta_text}
        </Link>
      </section>

      {/* Featured Blog Posts */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto px-6 py-16 flex items-center gap-10">
        <div className="w-28 h-28 rounded-full bg-zinc-200 dark:bg-zinc-700 shrink-0 overflow-hidden">
          <div className="w-full h-full flex items-end justify-center">
            <AvatarIcon className="w-24 h-24 text-zinc-400 dark:text-zinc-500" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">{aboutPreview.heading}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-5">
            {aboutPreview.bio}
          </p>
          <Link
            href={aboutPreview.button_href}
            className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-full text-sm hover:border-zinc-900 dark:hover:border-zinc-400 transition-colors"
          >
            {aboutPreview.button_text}
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-xl font-bold mb-4">Latest Blog Posts</h2>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-center justify-between py-5 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              <span className="font-medium text-sm">{post.title}</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-sm ml-4 shrink-0">{post.date}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
