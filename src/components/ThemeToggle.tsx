"use client";

import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon } from "@/assets/icons";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-zinc-500 cursor-pointer hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
