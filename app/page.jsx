import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TypingHeadline from "@/components/TypingHeadline";
import StatsCounter from "@/components/StatsCounter";
import TechStackGrid from "@/components/TechStackGrid";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import services from "@/data/services.json";
import projects from "@/data/projects.json";
import testimonials from "@/data/testimonials.json";
import stats from "@/data/stats.json";
import techstack from "@/data/techstack.json";
import faqs from "@/data/faqs.json";

export const metadata = {
  title: "Home",
  description: "CodeWork Technologies builds premium software products and IT solutions for growth-focused teams."
};

const floatingIcons = ["<>", "API", "SQL", "UI", "DRF", "JS"];

export default function HomePage() {
  const safeStats = Array.isArray(stats) ? stats : [];
  const safeServices = Array.isArray(services) ? services : [];
  const safeProjects = Array.isArray(projects) ? projects : [];
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];
  const safeTechstack = Array.isArray(techstack) ? techstack : [];
  const safeFaqs = Array.isArray(faqs) ? faqs : [];

  return (
    <>
      <section className="section-space relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent dark:from-sky-500/20 dark:via-indigo-500/15" />
          <div className="hero-grid absolute inset-0 opacity-70" />
        </div>

        <div className="container-base grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-300">
              CodeWork Technologies
            </p>
            <h1 className="display-font text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Transforming Businesses with <br /> <TypingHeadline />
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              We design and deliver production-grade software that helps organizations scale operations, reduce
              complexity, and move faster with confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/pricing" className="button-primary">
                Get Started
              </Link>
              <Link href="/contact" className="button-secondary">
                Request Demo
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative" delay={100}>
            <div className="hero-shell gradient-border card-surface relative rounded-3xl p-4 md:p-6">
              <div className="hero-shell-inner relative h-72 rounded-2xl p-4 md:h-80">
                <div className="hero-console h-full rounded-xl p-4 md:p-5">
                  <div className="hero-line h-4 w-1/3 rounded" />
                  <div className="hero-block mt-4 h-20 rounded" />
                  <div className="mt-4 grid h-24 grid-cols-3 gap-3">
                    <div className="hero-card hero-card-a rounded" />
                    <div className="hero-card hero-card-b rounded" />
                    <div className="hero-card hero-card-c rounded" />
                  </div>
                  <div className="hero-line hero-line-wide mt-4 h-4 w-2/3 rounded" />
                </div>

                <div className="hero-scroll-track" aria-hidden="true">
                  <div className="hero-scroll-thumb" />
                </div>
              </div>
            </div>

            {floatingIcons.map((icon, idx) => (
              <div
                key={icon}
                className="absolute rounded-lg border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-light backdrop-blur animate-float dark:border-slate-500/30 dark:bg-slate-800/70 dark:text-sky-200"
                style={{
                  top: `${8 + idx * 12}%`,
                  left: idx % 2 === 0 ? "-4%" : "86%",
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                {icon}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-base">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Performance Snapshot"
              title="Results That Matter"
              description="Metrics from recent client engagements across product engineering and digital transformation initiatives."
              center
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {safeStats.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 70}>
                <StatsCounter item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-base">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Services"
              title="Engineering Services Built for Scale"
              description="Modular delivery across web, mobile, cloud platforms, and automation workflows."
              center
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safeServices.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 60}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-base">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tech Stack"
              title="Built with Modern, Reliable Technology"
              description="Frontend and API-ready architecture designed for future Django + DRF integration."
              center
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <TechStackGrid items={safeTechstack} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-base">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Projects"
                title="Recent Delivery Highlights"
                description="Selected products and platforms launched for enterprise and growth-stage teams."
              />
            </ScrollReveal>
            <Link href="/projects" className="button-secondary">
              View All Projects
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safeProjects.slice(0, 3).map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-base">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What Clients Say"
              description="Trusted by teams across education, retail, healthcare, and SaaS products."
              center
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <TestimonialsSlider items={safeTestimonials} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-base grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers Before You Ask"
              description="Everything you need to know before starting your next product engagement."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FaqAccordion items={safeFaqs} />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-base">
          <ScrollReveal>
            <div className="gradient-border card-surface rounded-3xl px-6 py-12 text-center md:px-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-sky-300">Ready to Build?</p>
              <h2 className="display-font mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Launch Your Next Product with CodeWork
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                Let&apos;s map your goals, architecture, and delivery plan with a focused technical strategy session.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/pricing" className="button-primary">
                  Get Started
                </Link>
                <Link href="/contact" className="button-secondary">
                  Request Demo
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
