import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllPosts, getAllSlugs } from "@/lib/posts";
import type { Components } from "react-markdown";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

const mdComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-900 dark:text-white">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">{children}</p>
  ),
  pre: ({ children }) => (
    <pre className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-5 mb-6 overflow-x-auto text-sm font-mono text-zinc-800 dark:text-zinc-200">
      {children}
    </pre>
  ),
  code: ({ children, className }) =>
    className ? (
      <code className={className}>{children}</code>
    ) : (
      <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ""} className="w-full rounded-lg my-6 object-cover" />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const related = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen text-zinc-900 dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-14">
        {/* Header */}
        <h1 className="text-4xl font-bold leading-tight mb-4">{post.title}</h1>
        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-sm mb-10">
          <span>{post.date}</span>
          {post.tags.length > 0 && (
            <>
              <span>•</span>
              <span>{post.tags.join(" - ")}</span>
            </>
          )}
        </div>

        {/* Markdown body */}
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {post.content}
        </ReactMarkdown>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold mb-5">Related Posts</h2>
            <div className="grid grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <h3 className="font-semibold text-sm leading-snug mb-2">{p.title}</h3>
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs">{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-block mt-10 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
