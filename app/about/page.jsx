import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TechStackGrid from "@/components/TechStackGrid";
import techstack from "@/data/techstack.json";

export const metadata = {
  title: "About Us",
  description: "Learn about CodeWork Technologies, our mission, and delivery approach."
};

const values = [
  {
    title: "Clarity",
    text: "Clear scope, clear ownership, and clear communication at every delivery stage."
  },
  {
    title: "Craftsmanship",
    text: "Engineering quality with maintainable architecture, performance, and security standards."
  },
  {
    title: "Collaboration",
    text: "We work as an extension of your team with shared goals and transparent execution."
  }
];

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-base">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About Us"
            title="Building Technology That Solves Real Business Problems"
            description="CodeWork Technologies helps organizations turn operational complexity into clear, scalable software systems."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <article className="gradient-border card-surface p-7">
              <h3 className="display-font text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Empower organizations with secure, scalable, and usable technology that improves decision-making and
                accelerates growth.
              </p>
              <h3 className="display-font mt-8 text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Become the most trusted engineering partner for businesses modernizing digital products and operations.
              </p>
            </article>
          </ScrollReveal>

          <div className="grid gap-6">
            {values.map((value, idx) => (
              <ScrollReveal key={value.title} delay={idx * 80}>
                <article className="card-surface p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{value.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{value.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={100}>
          <div className="mt-14">
            <SectionHeading
              eyebrow="Platform"
              title="Technology Foundation"
              description="Our frontend stack is organized for clean transition to Django + DRF APIs."
              center
            />
            <TechStackGrid items={techstack} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
