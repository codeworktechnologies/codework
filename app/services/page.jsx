import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import services from "@/data/services.json";

export const metadata = {
  title: "Services",
  description: "Explore software and IT services offered by CodeWork Technologies."
};

export default function ServicesPage() {
  return (
    <section className="section-space">
      <div className="container-base">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Solutions Designed for Growth and Efficiency"
            description="Full-cycle engineering services from product discovery to production operations."
            center
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 70}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
          // TODO: Connect services to Django DRF endpoint: GET /api/services/
        </p>
      </div>
    </section>
  );
}
