"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/60 bg-white/75 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/70">
      <div className="container-base">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="display-font text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            CodeWork <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Technologies</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    active
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link href="/contact" className="button-secondary">
              Request Demo
            </Link>
            <Link href="/pricing" className="button-primary shadow-glow">
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="container-base space-y-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-sky-100 text-blue-800 dark:bg-slate-800 dark:text-sky-300"
                    : "text-slate-700 dark:text-slate-300"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link href="/contact" className="button-secondary text-center" onClick={() => setMenuOpen(false)}>
                Request Demo
              </Link>
              <Link href="/pricing" className="button-primary text-center" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
