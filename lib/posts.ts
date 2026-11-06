import posts from "@/content/posts.json";

export type Post = { slug: string; title: string; date: string; body: string };

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
