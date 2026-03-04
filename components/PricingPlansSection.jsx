"use client";

import { useState } from "react";
import PricingCard from "@/components/PricingCard";

export default function PricingPlansSection({ plans }) {
  const [billing, setBilling] = useState("monthly");

  return (
    <div>
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white/80 p-1 dark:border-slate-700 dark:bg-slate-900/60">
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            billing === "monthly"
              ? "bg-blue-600 text-white dark:bg-sky-500"
              : "text-slate-700 dark:text-slate-300"
          }`}
          onClick={() => setBilling("monthly")}
          aria-pressed={billing === "monthly"}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            billing === "yearly"
              ? "bg-blue-600 text-white dark:bg-sky-500"
              : "text-slate-700 dark:text-slate-300"
          }`}
          onClick={() => setBilling("yearly")}
          aria-pressed={billing === "yearly"}
        >
          Yearly
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">UI toggle only for now.</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            price={billing === "yearly" ? plan.yearly : plan.monthly}
            period={plan.period}
            features={plan.features}
            highlighted={plan.highlighted}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
        // TODO: Connect pricing plans to Django DRF endpoint: GET /api/pricing/
      </p>
    </div>
  );
}
