import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-violet-800">Willkommen</h1>
      <p className="mb-4">
        Diesen Blog baue ich nach dem offiziellen Next.js-Tutorial (Getting Started) für M245, Aufgabe 7.
      </p>
      <p>
        Zu den <Link href="/blog/" className="underline">Beiträgen</Link>.
      </p>
    </>
  );
}
