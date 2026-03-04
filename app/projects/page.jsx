import SectionHeading from "@/components/SectionHeading";
import ProjectTabs from "@/components/ProjectTabs";
import ourProjects from "@/data/projects.json";
import deliveredProjects from "@/data/deliveredProjects.json";

export const metadata = {
  title: "Projects",
  description: "Explore our in-progress products and our clients' project case showcases."
};

export default function ProjectsPage() {
  return (
    <section className="section-space">
      <div className="container-base">
        <SectionHeading
          eyebrow="Projects"
          title="Our Projects and Our Clients Projects"
          description="Switch tabs to view in-progress solution offerings or our clients projects with live status."
          center
        />

        <ProjectTabs ourProjects={ourProjects} deliveredProjects={deliveredProjects} />
      </div>
    </section>
  );
}
