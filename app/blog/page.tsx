import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-violet-800">Meine Blog-Beiträge</h1>
      <ul className="space-y-4">
        {getPosts().map((post) => (
          <li key={post.slug}>
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}/`} className="underline">{post.title}</Link>
            </h2>
            <p className="text-sm text-zinc-600">Veröffentlicht: {post.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
