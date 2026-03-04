"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = "codework-theme";

function applyThemeClass(nextTheme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(nextTheme);
  root.style.colorScheme = nextTheme;
  root.classList.add("theme-animate");
  window.setTimeout(() => root.classList.remove("theme-animate"), 350);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
    setTheme(resolvedTheme);
    applyThemeClass(resolvedTheme);
    setMounted(true);

    if (!stored) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (event) => {
        const systemTheme = event.matches ? "dark" : "light";
        setTheme(systemTheme);
        applyThemeClass(systemTheme);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    return undefined;
  }, []);

  const updateTheme = (nextTheme) => {
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    applyThemeClass(nextTheme);
  };

  const toggleTheme = () => {
    updateTheme(theme === "dark" ? "light" : "dark");
  };

  const value = useMemo(
    () => ({
      theme,
      mounted,
      setTheme: updateTheme,
      toggleTheme
    }),
    [theme, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
