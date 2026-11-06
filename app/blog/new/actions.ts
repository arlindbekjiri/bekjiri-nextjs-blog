"use server";

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { Post } from "@/lib/posts";

export type FormState = { error?: string };

const FILE = path.join(process.cwd(), "content", "posts.json");

// Legt einen Beitrag in content/posts.json an.
// ponytail: kein Login – jeder POST kann schreiben. Lokal ok, für echte Nutzung Auth + DB/CMS.
export async function createPost(_prev: FormState, formData: FormData): Promise<FormState> {
  const title = String(formData.get("title") ?? "").trim().slice(0, 100);
  const body = String(formData.get("body") ?? "").trim().slice(0, 5000);
  if (!title || !body) return { error: "Titel und Text sind Pflicht." };

  const slug = title
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  if (!slug || slug === "new") return { error: "Bitte einen anderen Titel wählen." };

  try {
    const posts: Post[] = JSON.parse(await readFile(FILE, "utf8"));
    if (posts.some((p) => p.slug === slug)) return { error: `Den Beitrag «${slug}» gibt es schon.` };
    posts.push({ slug, title, date: new Date().toISOString().slice(0, 10), body });
    await writeFile(FILE, JSON.stringify(posts, null, 2) + "\n");
  } catch (e) {
    const code = (e as NodeJS.ErrnoException).code ?? "unbekannt";
    console.error("createPost:", e);
    return {
      error: `Speichern nicht möglich (Fehler ${code}). Auf Vercel ist das Dateisystem schreibgeschützt; die Beiträge entstehen beim Build. Lokal mit «npm run dev» funktioniert das Formular.`,
    };
  }

  revalidatePath("/blog/");
  redirect(`/blog/${slug}/`);
}
