import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Bekjiri Next.js-Blog", template: "%s | Bekjiri Next.js-Blog" },
  description:
    "Minimaler Blog mit Next.js (App Router), gebaut für M245 Aufgabe 7: React-Frameworks vergleichen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <body className="mx-auto max-w-xl px-4 text-zinc-900">
        <header className="my-10 text-4xl font-bold text-zinc-500">Bekjiri Next.js-Blog</header>
        <nav>
          <ul className="flex gap-8">
            <li><Link href="/" className="underline">Home</Link></li>
            <li><Link href="/blog/" className="underline">Blog</Link></li>
            <li><Link href="/blog/new/" className="underline">Neuer Beitrag</Link></li>
          </ul>
        </nav>
        <main className="my-8">{children}</main>
      </body>
    </html>
  );
}
