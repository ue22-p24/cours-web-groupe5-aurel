// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "UE12-P24 WEB",
      social: {
        github: "https://github.com/ushu/html-css-mines",
      },
      sidebar: [
        {
          label: "Sections du cours",
          items: [
            { label: "1.a. Prérequis", slug: "cours/prerequis" },
            {
              label: "1.b. Les technologies web",
              slug: "cours/intro-aux-tech-web",
            },
            {
              label: "2.a. Découvrir HTML",
              slug: "cours/decouvrir-html",
            },
            {
              label: "2.b. Ajouter du style",
              slug: "cours/ajouter-du-style",
            }
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
            rel: "stylesheet",
            type: "text/css",
            href: "https://storage.googleapis.com/app.klipse.tech/css/codemirror.css",
          },
        },
      ],
    }),
  ],
});
