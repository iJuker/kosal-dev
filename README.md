# KOSAL DEV — Personal Blog

A personal blog built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **TypeScript**. Content is managed through Markdown files — no database or CMS required.

## Features

- **Blog** — post listing with search and pagination, individual post pages with Markdown rendering
- **About** — profile page driven by frontmatter (name, skills, experience)
- **Dark / Light mode** — class-based toggle with no-flash script; defaults to dark
- **Markdown content** — frontmatter parsed with `gray-matter`, body rendered with `react-markdown`
- **Reusable components** — `PostCard`, `Navbar`, `ThemeToggle`, SVG icons in `src/assets/icons/`
- **Sticky navbar** — stays pinned while scrolling

## Project Structure

```
content/
  home/         # Hero and about-preview section copy
  posts/        # One .md file per blog post
  about/        # About page content
src/
  app/          # Next.js App Router pages
  assets/icons/ # SVG icon components
  components/   # Shared UI components
  lib/          # Data access (posts, home, about)
```

## Content Management

Add a new blog post by creating a Markdown file in `content/posts/`:

```md
---
title: "Post Title"
excerpt: "Short description shown on cards."
tags:
  - React
date: "June 18, 2026"
featured: false          # true = appears on home page
image: "/images/cover.jpg"  # optional card image
---

Your post content here...
```

Edit `content/home/hero.md` or `content/home/about.md` to update the home page copy.  
Edit `content/about/index.md` to update the about page (name, skills, experience, bio).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, Server Components, static generation
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — Markdown frontmatter parsing
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) — Markdown body rendering
- [Geist](https://vercel.com/font) — font family
