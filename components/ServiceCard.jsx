"use client";

import { useState } from "react";

export default function ServiceCard({ icon, title, description, details }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card-surface h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-lg text-white shadow-soft">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>

      {expanded && <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{details}</p>}

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-4 text-sm font-semibold text-blue-700 transition hover:text-blue-500 dark:text-sky-300 dark:hover:text-sky-200"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </article>
  );
}
