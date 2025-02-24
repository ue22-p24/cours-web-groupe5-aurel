// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "UE22-P24 WEB",
      social: {
        github: "https://github.com/ushu/html-css-mines",
      },
      sidebar: [
        { label: "Prérequis", slug: "prerequis" },
        {
          label: "Cours 1",
          items: [
            {
              label: "Les technologies web",
              slug: "cours1/intro-aux-tech-web",
            },
            {
              label: "Découvrir HTML",
              slug: "cours1/decouvrir-html",
            },
            {
              label: "Ajouter du style",
              slug: "cours1/ajouter-du-style",
            }
          ],
        },
        {
          label: "Cours 2",
          items: [
            {
              label: "Styler du texte",
              slug: "cours2/styler-du-texte",
            },
            {
              label: "Styler un tableau",
              slug: "cours2/styler-un-tableau",
            },
            {
              label: "Découvrir la Flexbox",
              slug: "cours2/decouvrir-la-flexbox",
            },
            {
              label: "Découvrir CSS Grid",
              slug: "cours2/decouvrir-css-grid",
            },
            {
              label: "Autres concepts CSS",
              slug: "cours2/autres-concepts",
            },
          ],
        },
        {
          label: "Cours 3",
          items: [
            {
              label: "Débuter avec JavaScript",
              slug: "cours3/commencer-js",
            },
            {
              label: "Rendre une page web dynamique",
              slug: "cours3/interagir-dom",
            },
            {
              label: "Interagir avec une API",
              slug: "cours3/swapi-tp",
            },
            {
              label: "Créer un jeu avec Canvas",
              slug: "cours3/canvas-tp",
            },
          ],
        }
      ],
      favicon: "favicon.ico",
      head: [
        {
          tag: "meta",
          attrs: {
            name: "author",
            content: "Aurélien Noce <aurelien.noce@minesparis.psl.eu",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "favicon.ico",
            sizes: "16x16 32x32",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-180-precomposed.png",
            sizes: "180x180",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-152-precomposed.png",
            sizes: "152x152",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-144-precomposed.png",
            sizes: "144x144",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-114-precomposed.png",
            sizes: "114x114",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-72-precomposed.png",
            sizes: "72x72",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-192.png",
            sizes: "192x192",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-57.png",
            sizes: "57x57",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "favicon-32.png",
            sizes: "32x32",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "manifest.json",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "true",
          },
        },
      ],
    }),
  ],
});
