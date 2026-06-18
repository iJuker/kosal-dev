@AGENTS.md

# KOSAL DEV — Project Guide

## Stack

- **Next.js 16** (App Router, Server Components) — `params` is a `Promise`, always `await` it
- **Tailwind CSS v4** — configured in CSS via `@custom-variant`, no `tailwind.config.js`
- **TypeScript**
- **gray-matter** — frontmatter parsing
- **react-markdown** + **remark-gfm** — Markdown body rendering in post detail page

## Project Structure

```
content/
  home/
    hero.md          # title, subtitle, cta_text, cta_href
    about.md         # heading, bio, button_text, button_href
  posts/
    *.md             # one file per blog post
  about/
    index.md         # title, name, avatar, experience, skills[], body paragraphs

src/
  app/
    page.tsx              # Home page (Server Component)
    blog/
      page.tsx            # passes posts to BlogList
      BlogList.tsx        # "use client" — search + pagination
      [slug]/page.tsx     # Post detail (Server Component, generateStaticParams)
    about/
      page.tsx            # About page (Server Component)
  assets/
    icons/                # SVG components: SunIcon, MoonIcon, SearchIcon, AvatarIcon
      index.ts            # barrel export
  components/
    Navbar.tsx            # sticky, imports ThemeToggle
    PostCard.tsx          # card used on home + blog list
    ThemeProvider.tsx     # "use client" — dark/light context
    ThemeToggle.tsx       # "use client" — sun/moon button
  lib/
    posts.ts              # getAllPosts(), getFeaturedPosts(), getPostBySlug(), getAllSlugs()
    home.ts               # getHero(), getAboutPreview()
    about.ts              # getAbout()
```

## Dark Mode

- Tailwind `dark:` variants are class-based, not media-query-based
- Configured in `globals.css`: `@custom-variant dark (&:where(.dark, .dark *))`
- A no-flash `<script>` in `layout.tsx` sets `.dark` on `<html>` before hydration
- Default is **dark** — falls back to `localStorage` value if set
- `ThemeProvider` reads the DOM class on mount to sync React state

## Content Conventions

### Blog Post frontmatter
```yaml
title: "string"
excerpt: "string"
tags:
  - Tag1
  - Tag2
date: "Month DD, YYYY"
featured: true | false   # true = shown on home page Featured section
image: "/images/..."     # optional — shows banner on PostCard
```

### About frontmatter
```yaml
title: "string"
name: "string"
avatar: ""               # path to image or empty string for placeholder
experience: "string"
skills:
  - React
  - Vue
```

## Key Conventions

- **Server Components by default** — only add `"use client"` when hooks or browser APIs are needed
- **No hardcoded copy** — all page text comes from `content/` MD files via `lib/`
- **Icons** — add new icons to `src/assets/icons/` and re-export from `index.ts`
- **PostCard** — shared between home featured grid and blog list grid
- **Pagination** — `PAGE_SIZE = 6` constant at top of `BlogList.tsx`
- **Sorting** — `getAllPosts()` returns posts sorted newest-first by date
