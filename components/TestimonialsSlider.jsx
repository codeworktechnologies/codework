"use client";

import { useEffect, useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSlider({ items }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length <= 1) return undefined;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeItems.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [safeItems.length]);

  if (safeItems.length === 0) {
    return (
      <div className="relative mt-10">
        <div className="card-surface rounded-2xl p-6">
          <p className="text-sm text-slate-600 dark:text-slate-300">Testimonials will be available soon.</p>
        </div>
      </div>
    );
  }

  const visible = safeItems
    .slice(index, index + 3)
    .concat(safeItems.slice(0, Math.max(0, index + 3 - safeItems.length)));

  return (
    <div className="relative mt-10">
      <div className="grid gap-5 md:grid-cols-3">
        {visible.map((item) => (
          <TestimonialCard key={item.id} name={item.name} role={item.role} quote={item.quote} />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Slider indicators">
        {safeItems.map((item, dotIndex) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full ${dotIndex === index ? "bg-blue-600 dark:bg-sky-300" : "bg-slate-300 dark:bg-slate-700"}`}
            aria-label={`Go to testimonial ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
