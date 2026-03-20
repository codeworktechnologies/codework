import Link from "next/link";

export default function PricingCard({ name, price, period, features, highlighted, skills, extraCharges }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md dark:bg-slate-900 ${
        highlighted
          ? "border border-slate-200 border-t-4 border-t-sky-500 dark:border-slate-800 dark:border-t-sky-500"
          : "border border-slate-200 dark:border-slate-800"
      }`}
    >
      <div className="mb-6">
        <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">{name}</h3>
        <p className="mt-4 text-4xl font-light tracking-tight text-slate-900 dark:text-white">
          {price.includes('₹') ? price.replace('₹', '₹ ') : price}
        </p>
        <p className="mt-2 text-sm font-medium text-sky-500">{period}</p>
      </div>

      <ul className="mb-8 mt-2 flex-1 space-y-4">
        {features.map((featureObj, idx) => {
          // If strings are passed instead of objects from old JSON fallback
          const isObj = typeof featureObj === 'object';
          const text = isObj ? featureObj.text : featureObj;
          const included = isObj ? featureObj.included : true;

          return (
            <li
              key={idx}
              className={`flex items-start text-sm ${
                included
                  ? "text-slate-600 dark:text-slate-300"
                  : "text-slate-400 line-through dark:text-slate-500"
              }`}
            >
              <span className="mr-3 mt-0.5 shrink-0">
                {included ? (
                  <svg
                    className="h-4 w-4 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4 text-slate-300 dark:text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </span>
              <span>{text}</span>
            </li>
          );
        })}
      </ul>

      {skills && skills.length > 0 && (
        <div className="mb-6 mt-2">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Skills & Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                <svg className="mr-1.5 h-3.5 w-3.5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {extraCharges && extraCharges.length > 0 && (
        <div className="mb-8 mt-2 rounded-xl bg-orange-50 p-4 dark:bg-orange-950/30">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500">
            Extra Charges
          </p>
          <ul className="space-y-2">
            {extraCharges.map((charge, idx) => (
              <li key={idx} className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <span>{charge.name}</span>
                <span className="font-semibold text-slate-900 dark:text-white">{charge.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href="/contact"
        className={`mt-auto inline-flex w-3/4 justify-center rounded-3xl py-2.5 text-sm font-semibold transition-colors ${
          highlighted
            ? "bg-sky-500 text-white hover:bg-sky-600"
            : "border border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-slate-800"
        }`}
      >
        Get Started
      </Link>
    </article>
  );
}
