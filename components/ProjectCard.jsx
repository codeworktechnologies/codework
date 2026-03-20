import Link from "next/link";
import TechIcon from "@/components/TechIcon";

export default function ProjectCard({ project }) {
  const technologies = Array.isArray(project?.technologies) ? project.technologies : [];

  return (
    <article className="card-surface h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-sky-300">{project?.industry ?? "General"}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project?.title ?? "Untitled Project"}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project?.description ?? "Project summary coming soon."}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            <TechIcon name={tech} size="sm" />
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={`/projects/${project?.slug ?? "projects"}`} className="button-primary w-full text-center sm:flex-1">
          View Details
        </Link>
        {project?.demo_link && (
          <Link href={project.demo_link} target="_blank" rel="noopener noreferrer" className="button-secondary w-full text-center sm:flex-1">
            View Demo
          </Link>
        )}
      </div>
    </article>
  );
}
