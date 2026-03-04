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
  return (
    <section className="section-space">
      <div className="container-base">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible Plans for Every Growth Stage"
            description="Choose a plan based on scope, delivery velocity, and support requirements."
            center
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-10">
            <PricingPlansSection plans={pricing} />
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
