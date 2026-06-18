"use client";

import { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import { SearchIcon } from "@/assets/icons";
import type { PostMeta } from "@/lib/posts";

const PAGE_SIZE = 6;

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : posts;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset to page 1 whenever the search query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <div className="min-h-screen text-zinc-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-bold mb-6">All Posts</h1>

        {/* Search */}
        <div className="relative mb-10">
          <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
          />
        </div>

        {/* Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {paginated.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-400 text-sm">No posts match &ldquo;{query}&rdquo;.</p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 mt-12">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-lg text-sm transition-colors ${
                  n === page
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium"
                    : "border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
