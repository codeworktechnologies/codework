"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();
  const nextLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-btn"
      aria-label={nextLabel}
      title={nextLabel}
    >
      <span aria-hidden="true" className="text-base leading-none">
        {mounted && theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
