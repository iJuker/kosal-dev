import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface AboutData {
  title: string;
  name: string;
  avatar?: string;
  experience: string;
  skills: string[];
  paragraphs: string[];
}

export function getAbout(): AboutData {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content/about/index.md"),
    "utf-8"
  );
  const { data, content } = matter(raw);
  const paragraphs = content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return {
    title: data.title as string,
    name: data.name as string,
    avatar: (data.avatar as string) || undefined,
    experience: data.experience as string,
    skills: (data.skills as string[]) ?? [],
    paragraphs,
  };
}
