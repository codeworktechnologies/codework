export default function TestimonialCard({ name, role, quote }) {
  return (
    <article className="card-surface h-full p-6">
      <p className="text-base italic leading-7 text-slate-700 dark:text-slate-200">"{quote}"</p>
      <div className="mt-5">
        <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    </article>
  );
}
