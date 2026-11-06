"use client";

import { useActionState } from "react";
import { createPost } from "./actions";

export function NewPostForm() {
  const [state, action, pending] = useActionState(createPost, {});

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="title" className="block font-semibold">Titel</label>
        <input id="title" name="title" required maxLength={100} className="w-full border border-zinc-400 p-2" />
      </div>
      <div>
        <label htmlFor="body" className="block font-semibold">Text</label>
        <textarea id="body" name="body" required rows={6} maxLength={5000} className="w-full border border-zinc-400 p-2" />
      </div>
      <button type="submit" disabled={pending} className="bg-violet-800 px-4 py-2 text-white disabled:opacity-50">
        {pending ? "Speichere …" : "Beitrag speichern"}
      </button>
      {state.error && <p role="alert" className="text-red-700">{state.error}</p>}
    </form>
  );
}
