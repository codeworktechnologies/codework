"use client";

import { useEffect, useMemo, useState } from "react";

function useCount(target) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    let start;
    const duration = 1000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}

export default function StatsCounter({ item }) {
  const numericValue = typeof item?.value === "number" ? item.value : 0;
  const value = useCount(numericValue);
  const suffix = item?.suffix ?? "";
  const label = useMemo(() => `${value}${suffix}`, [value, suffix]);

  return (
    <article className="card-surface rounded-2xl p-5 text-center">
      <p className="display-font text-3xl font-bold text-slate-900 dark:text-white">{label}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item?.label ?? "Metric"}</p>
    </article>
  );
}
