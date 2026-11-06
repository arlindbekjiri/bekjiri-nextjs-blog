import type { Metadata } from "next";
import { NewPostForm } from "./form";

export const metadata: Metadata = { title: "Neuer Beitrag" };

export default function NewPostPage() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-violet-800">Neuer Beitrag</h1>
      <p className="mb-4">Das Formular ruft eine Server Action auf. Sie speichert den Beitrag in content/posts.json.</p>
      <NewPostForm />
    </>
  );
}
