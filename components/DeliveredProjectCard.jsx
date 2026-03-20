import Link from "next/link";

export default function DeliveredProjectCard({ project }) {
  const status = (project?.status || "In Progress").trim();
  const isDelivered = status.toLowerCase() === "delivered";

  return (
    <article className="card-surface h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div
        className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
          isDelivered
            ? "border border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300"
            : "border border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300"
        }`}
      >
        {status}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-4 space-y-1 text-sm">
        <p className="text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Client Industry:</span> {project.clientIndustry}
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Start Date:</span> {project.startDate || "TBD"}
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          <span className="font-semibold">End Date:</span> {project.endDate || "TBD"}
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Status:</span> {project.status}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={`/projects/${project.slug}`} className="button-secondary w-full text-center sm:flex-1">
          View Details
        </Link>
        {project?.demo_link && (
          <Link href={project.demo_link} target="_blank" rel="noopener noreferrer" className="button-primary w-full text-center sm:flex-1">
            View Demo
          </Link>
        )}
      </div>
    </article>
  );
}
