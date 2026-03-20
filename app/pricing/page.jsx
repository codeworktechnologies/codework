import SectionHeading from "@/components/SectionHeading";
import PricingPlansSection from "@/components/PricingPlansSection";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import pricing from "@/data/pricing.json";
import faqs from "@/data/faqs.json";

export const metadata = {
  title: "Pricing",
  description: "Flexible pricing options for software development and IT solutions."
};

export default function PricingPage() {
  const websitePlans = pricing.filter((p) => p.id.startsWith("web-"));
  const websiteMaintenance = pricing.filter((p) => p.id.startsWith("maint-"));
  const appPlans = pricing.filter((p) => p.id.startsWith("app-") && !p.id.startsWith("app-maint"));
  const appMaintenance = pricing.filter((p) => p.id.startsWith("app-maint"));

  return (
    <section className="section-space">
      <div className="container-base">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Pricing"
            center
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-16">
            {websitePlans.length > 0 && <PricingPlansSection title="Website Development Plans" plans={websitePlans} />}
            {websiteMaintenance.length > 0 && <PricingPlansSection title="Website Maintenance Plans" plans={websiteMaintenance} />}
            {appPlans.length > 0 && <PricingPlansSection title="App Development Plans" plans={appPlans} />}
            {appMaintenance.length > 0 && <PricingPlansSection title="App Maintenance Plans" plans={appMaintenance} />}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common Questions"
              description="Pricing, delivery model, and integration readiness answers."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FaqAccordion items={faqs} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
