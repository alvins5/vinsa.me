// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { definePerson } from "nuxt-schema-org/schema";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  pages: true,
  css: ["~/assets/css/main.css"],
  vite: {
    // @ts-expect-error - Type incompatibility between @tailwindcss/vite and Vite 7.3 types
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
      minify: "esbuild",
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ["gsap"],
          },
        },
      },
    },
  },
  experimental: {
    payloadExtraction: true,
    componentIslands: true,
    inlineRouteRules: true,
  },
  features: {
    inlineStyles: true,
  },
  fonts: {
    defaults: {
      weights: [400],
      styles: ["normal"],
      subsets: ["latin", "sans-serif"],
    },
    families: [
      { name: "Antonio", provider: "google", global: true, preload: true, weights: [700], subsets: ["latin", "sans-serif"] },
      { name: "Geist", provider: "google", global: true, preload: true, weights: [400], subsets: ["latin", "sans-serif"] },
      { name: "Inter", provider: "google", global: true, preload: true, weights: [400, 600, 700], subsets: ["latin", "sans-serif"] },
      { name: "JetBrains Mono", provider: "google", global: true, preload: false, weights: [400], subsets: ["latin", "sans-serif"] },
    ],
    experimental: {
      processCSSVariables: true,
    },
  },
  runtimeConfig: {
    supabaseUrl: '',
    supabaseKey: '',
  },
  nitro: {
    preset: "cloudflare_pages",
    prerender: {
      autoSubfolderIndex: false,
    },
    compressPublicAssets: true,
    minify: true,
    cloudflare: {
      pages: {
        routes: {
          exclude: ["/fonts/*", "/icons/*"],
        },
      },
      wrangler: {
        compatibility_flags: ["nodejs_compat"],
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "theme-color", content: "#ffffff" },
        { name: "format-detection", content: "telephone=no" },
        { name: "msapplication-TileColor", content: "#ffffff" },
      ],
      link: [
        { rel: "preconnect", href: "https://ik.imagekit.io", crossorigin: "anonymous" },
        { rel: "dns-prefetch", href: "https://ik.imagekit.io" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  site: {
    url: "https://vinsa.site",
    name: "Alvinsa Isnanda Putra",
    description: "Network Engineer specializing in MikroTik, networking, and cybersecurity. MTCNA & MTCTCE certified.",
    defaultLocale: "en",
  },
  ogImage: {
    enabled: true,
    defaults: {
      width: 1200,
      height: 630,
    },
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  robots: {
    allow: "/",
    sitemap: "https://vinsa.site/sitemap.xml",
  },
  seo: {
    meta: {
      title: "Alvinsa Isnanda Putra - Network Engineer",
      description: "Network Engineer specializing in MikroTik, networking, and cybersecurity. MTCNA & MTCTCE certified professional based in Yogyakarta, Indonesia.",
      author: "Alvinsa Isnanda Putra",
      applicationName: "Alvinsa Isnanda Putra",
      ogSiteName: "Alvinsa Isnanda Putra",
      ogLocale: "en_US",
      ogType: "website",
      ogUrl: "https://vinsa.site",
      ogTitle: "Alvinsa Isnanda Putra - Network Engineer",
      ogDescription: "Network Engineer specializing in MikroTik, networking, and cybersecurity. MTCNA & MTCTCE certified professional based in Yogyakarta, Indonesia.",
      ogImage: "https://vinsa.site/og-image.png",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      keywords: "Alvinsa Isnanda Putra, Network Engineer, MikroTik, MTCNA, MTCTCE, IPv6, Networking, Cybersecurity, Indonesia, Yogyakarta, Cloud Engineer",
    },
  },
  schemaOrg: {
    identity: definePerson({
      name: "Alvinsa Isnanda Putra",
      givenName: "Alvinsa",
      familyName: "Isnanda",
      additionalName: "Alvinsa",
      description: "Network Engineer specializing in MikroTik, networking, and cybersecurity with MTCNA and MTCTCE certifications.",
      jobTitle: "Network Engineer",
      email: "alvinsa.i.p@gmail.com",
      url: "https://vinsa.site",
      image: "https://vinsa.site/avatar-with-bg.webp",
      sameAs: [
        "https://github.com/fzzzn",
        "https://linkedin.com/in/alvinsa-isnanda-putra",
        "https://instagram.com/kaedehara_vins",
        "https://t.me/vinsame",
      ],
      knowsAbout: [
        "MikroTik RouterOS",
        "Network Engineering",
        "IPv6",
        "Cloud Computing",
        "Linux Administration",
      ],
    }),
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/seo",
    "@nuxtjs/critters",
    "nuxt-umami",
  ],
  icon: {
    mode: "css",
    cssLayer: "icons",
  },
});
