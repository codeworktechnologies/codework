export default function PricingPlanCard({ plan, highlighted = false }) {
  return (
    <article
      className={`h-full rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${highlighted
          ? "gradient-border card-surface shadow-glow"
          : "card-surface hover:shadow-soft"
        }`}
    >
      {highlighted && (
        <p className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-sky-500">
          Most Popular
        </p>
      )}
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
      <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</p>

      <div className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-300">
        <p>
          <span className="font-semibold">Delivery:</span> {plan.deliveryTime}
        </p>
        <p>
          <span className="font-semibold">Support:</span> {plan.supportDuration}
        </p>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {plan.features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>

      {plan.demoLink && (
        <a
          href={plan.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary mt-6 w-full block text-center"
          aria-label={`View demo for ${plan.name} plan`}
        >
          View Demo
        </a>
      )}
    </article>
  );
}
