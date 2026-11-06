import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await props.params).slug);
  return post ? { title: post.title, description: post.body.split("\n")[0] } : {};
}

// params erst innerhalb von <Suspense> lesen (Cache Components / Instant Navigation)
async function PostContent({ params }: Pick<PageProps<"/blog/[slug]">, "params">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article>
      <h1 className="mb-2 text-3xl font-bold text-violet-800">{post.title}</h1>
      <p className="mb-6 text-sm text-zinc-600">Veröffentlicht: {post.date}</p>
      {post.body.split(/\n\n+/).map((p, i) => (
        <p key={i} className="mb-4">{p}</p>
      ))}
    </article>
  );
}

export default function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={<p>Lade Beitrag …</p>}>
      <PostContent params={props.params} />
    </Suspense>
  );
}
