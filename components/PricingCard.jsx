import Link from "next/link";

export default function PricingCard({ name, price, period, features, highlighted }) {
  return (
    <article
      className={`h-full rounded-2xl border p-7 transition hover:-translate-y-1 ${
        highlighted
          ? "gradient-border card-surface shadow-glow"
          : "border-slate-300 bg-white/80 shadow-light dark:border-slate-700 dark:bg-slate-900/60"
      }`}
    >
      {highlighted && (
        <p className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-sky-500">
          Most Popular
        </p>
      )}
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{name}</h3>
      <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
        {price}
        <span className="ml-1 text-sm font-medium text-slate-500 dark:text-slate-400">{period}</span>
      </p>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-slate-600 dark:text-slate-300">
            • {feature}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`mt-7 inline-flex w-full justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${highlighted ? "button-primary" : "button-secondary"}`}>
        Request Demo
      </Link>
    </article>
  );
}
