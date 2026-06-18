import fs from "fs";
import path from "path";
import matter from "gray-matter";

const homeDir = path.join(process.cwd(), "content/home");

function readSection<T>(filename: string): T {
  const raw = fs.readFileSync(path.join(homeDir, filename), "utf-8");
  return matter(raw).data as T;
}

export interface HeroData {
  title: string;
  subtitle: string;
  cta_text: string;
  cta_href: string;
}

export interface AboutPreviewData {
  heading: string;
  bio: string;
  button_text: string;
  button_href: string;
}

export function getHero(): HeroData {
  return readSection<HeroData>("hero.md");
}

export function getAboutPreview(): AboutPreviewData {
  return readSection<AboutPreviewData>("about.md");
}
