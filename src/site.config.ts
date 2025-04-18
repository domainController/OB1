import type { SiteConfig } from "@/types";

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about/",
    title: "Manifesto",
  },
  {
    path: "/posts/",
    title: "Blog",
  },
  {
    path: "/notes/",
    title: "Notes",
  },
  {
    path: "/legal/",
    title: "Legal",
  },
];
/**
 * 🧭 site.config.ts — Configuration principale du site
 *
 * Ce fichier contient :
 * 1. La définition des liens du menu de navigation principal (`menuLinks`)
 * 2. Le titre global du site (`title`)
 * 3. La configuration des dates pour affichage internationalisé (`date`)
 *
 * ▸ `menuLinks` : permet de faire apparaître des liens dans le menu principal en haut (et/ou footer).
 * Chaque lien est un objet avec :
 *   - `path` : le chemin de la page (ex: "/about/")
 *   - `title` : le texte affiché dans le menu (ex: "Manifesto")
 *
 * Attention :
 * ▸ Ces liens doivent correspondre à des routes valides (pages `.astro` ou générées depuis le content collection)
 * ▸ Ne pas utiliser un fichier `.md` brut (comme `/notes/legal.md`) en tant que `path` → il faut soit créer une page `.astro`, soit passer par une route dynamique.
 *
 * Exemple de lien correct :
 * {
 *   path: "/legal/",  // crée une page `src/pages/legal.astro`
 *   title: "Legal"
 * }
 *
 * Pour modifier les couleurs, polices, ou autres styles du thème, voir `tailwind.config.js` ou `src/styles`.
 */

export const siteConfig: SiteConfig = {
  // Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
  title: "AfterShift",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  // Used as the default description meta property and webmanifest description
  description: "An opinionated starter theme for Astro",
  // HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
  lang: "en-GB",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_GB",
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Patrice Kenmoé",
};
