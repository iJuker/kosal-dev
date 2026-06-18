import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors bg-white dark:bg-transparent"
    >
      {post.image && (
        <div className="relative w-full h-44">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">
            {post.title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-6 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          <span className="text-zinc-400 dark:text-zinc-500 text-xs ml-2">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
