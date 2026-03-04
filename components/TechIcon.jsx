import { getTechMeta } from "@/lib/techMeta";

export default function TechIcon({ name, size = "md" }) {
  const { iconUrl, short } = getTechMeta(name);
  const sizeClass = size === "sm" ? "h-4 w-4 text-[10px]" : "h-6 w-6 text-xs";

  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={`${name} icon`}
        className={sizeClass}
        loading="lazy"
      />
    );
  }

  return (
    <span className={`inline-flex items-center justify-center rounded bg-slate-700/20 font-semibold text-slate-700 dark:text-slate-200 ${sizeClass}`}>
      {short}
    </span>
  );
}
