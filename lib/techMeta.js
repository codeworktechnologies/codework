const TECH_ICON_BY_KEY = {
  nextjs: "nextjs",
  react: "react",
  django: "django",
  drf: "django",
  djangorestframework: "django",
  tailwind: "tailwind",
  tailwindcss: "tailwind",
  postgresql: "postgres",
  python: "python",
  flask: "flask",
  vite: "vite",
  sqlite: "sqlite",
  sqlalchemy: "sqlite",
  chartjs: "chartjs",
  html: "html",
  html5: "html",
  css: "css",
  css3: "css",
  javascript: "js",
  js: "js"
};

function normalizeTechName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function shortLabel(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) return "?";
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length > 1) {
    return parts
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("");
  }
  return trimmed.slice(0, 2).toUpperCase();
}

export function getTechMeta(name) {
  const normalized = normalizeTechName(name);
  const skillIconId = TECH_ICON_BY_KEY[normalized] || null;

  return {
    iconUrl: skillIconId ? `https://skillicons.dev/icons?i=${skillIconId}` : null,
    short: shortLabel(name)
  };
}
