import TechIcon from "@/components/TechIcon";

export default function TechStackGrid({ items }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <article
          key={item.id}
          className="card-surface flex items-center gap-3 rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-600/20 ring-1 ring-sky-400/35">
            <TechIcon name={item.name} />
          </div>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
        </article>
      ))}
    </div>
  );
}
