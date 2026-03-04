"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="mt-8 space-y-4">
      {items.map((faq) => {
        const expanded = faq.id === openId;
        return (
          <article key={faq.id} className="card-surface overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={() => setOpenId(expanded ? null : faq.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={expanded}
              aria-controls={`faq-panel-${faq.id}`}
            >
              <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
              <span className="text-xl text-slate-500 dark:text-slate-300" aria-hidden="true">
                {expanded ? "-" : "+"}
              </span>
            </button>
            {expanded && (
              <div id={`faq-panel-${faq.id}`} className="px-5 pb-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
