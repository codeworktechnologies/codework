import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";
import ourProjects from "@/data/projects.json";
import deliveredProjects from "@/data/deliveredProjects.json";

const allProjects = [...ourProjects, ...deliveredProjects];

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = allProjects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }) {
  const project = allProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
