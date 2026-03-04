export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300">
          {eyebrow}
        </p>
      )}
      <h2 className="display-font text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
