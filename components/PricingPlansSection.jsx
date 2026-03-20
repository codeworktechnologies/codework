"use client";

import PricingCard from "@/components/PricingCard";

export default function PricingPlansSection({ plans, title }) {
  return (
    <div className="mb-24">
      {title && (
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-[#2E4057] dark:text-slate-100">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-sky-500 rounded-full" />
        </div>
      )}
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            highlighted={plan.highlighted}
            skills={plan.skills}
            extraCharges={plan.extraCharges}
          />
        ))}
      </div>
    </div>
  );
}
