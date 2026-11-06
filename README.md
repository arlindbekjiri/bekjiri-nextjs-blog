# Bekjiri Next.js-Blog

Minimaler Blog mit Next.js 16 (App Router, TypeScript, Tailwind, Cache Components) für M245, Aufgabe 7 «React-Frameworks vergleichen».
Gebaut nach dem offiziellen Tutorial: https://nextjs.org/docs/app/getting-started

Live: https://bekjiri-nextjs-blog.vercel.app

## Seiten

| URL | Datei | Rendering |
|---|---|---|
| `/` | `app/page.tsx` | statisch beim Build |
| `/blog/` | `app/blog/page.tsx` | statisch beim Build |
| `/blog/<slug>/` | `app/blog/[slug]/page.tsx` | statisch beim Build (`generateStaticParams`) |
| `/blog/new/` | `app/blog/new/` | statische Seite + Server Action |

Die Beiträge stehen in `content/posts.json`.

## Lokal starten

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktions-Build
```

## Formular «Neuer Beitrag»

Das Formular ruft die Server Action `createPost` (`app/blog/new/actions.ts`) auf.
Sie hängt den Beitrag an `content/posts.json` an und leitet auf die neue Seite weiter.

- **Lokal (`npm run dev`)**: funktioniert, die Datei wird geschrieben.
- **Auf Vercel**: Das Dateisystem der Functions ist schreibgeschützt. Die Action fängt den Fehler ab und zeigt eine Meldung. Neue Beiträge entstehen dort nur über einen Commit und einen neuen Build.

Für echte Nutzung bräuchte es Login und eine Datenbank oder ein CMS.
