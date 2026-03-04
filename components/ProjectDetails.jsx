"use client";

import { useEffect, useState } from "react";
import PricingPlanCard from "@/components/PricingPlanCard";
import ShareProjectButton from "@/components/ShareProjectButton";
import TechIcon from "@/components/TechIcon";

const SAMPLE_SCREENSHOTS = [
  "/screenshots/sample-1.svg",
  "/screenshots/sample-2.svg",
  "/screenshots/sample-3.svg",
  "/screenshots/sample-4.svg",
  "/screenshots/sample-5.svg",
  "/screenshots/sample-6.svg"
];

function isImagePath(value) {
  if (typeof value !== "string") return false;
  return value.startsWith("/") || /^https?:\/\//i.test(value);
}

function getScreenshotData(item, index) {
  const fallbackSrc = SAMPLE_SCREENSHOTS[index % SAMPLE_SCREENSHOTS.length];

  if (typeof item === "string") {
    return {
      id: `shot-${index + 1}`,
      caption: item,
      src: isImagePath(item) ? item : fallbackSrc
    };
  }

  if (item && typeof item === "object") {
    return {
      id: item.id || `shot-${index + 1}`,
      caption: item.title || item.caption || `Screenshot ${index + 1}`,
      src: isImagePath(item.image || item.src) ? (item.image || item.src) : fallbackSrc
    };
  }

  return {
    id: `shot-${index + 1}`,
    caption: `Screenshot ${index + 1}`,
    src: fallbackSrc
  };
}

export default function ProjectDetails({ project }) {
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const isClientProject = project.type === "delivered";
  const status = (project?.status || "In Progress").trim();
  const isDelivered = status.toLowerCase() === "delivered";
  const tech = Array.isArray(project.technologies) ? project.technologies : [];
  const screenshots = Array.isArray(project.screenshots) ? project.screenshots : [];
  const plans = Array.isArray(project.plans) ? project.plans : [];
  const features = Array.isArray(project.features) ? project.features : [];
  const targetUsers = Array.isArray(project.targetUsers) ? project.targetUsers : [];
  const deliveredFeatures = Array.isArray(project.finalFeatures) ? project.finalFeatures : [];
  const challenges = Array.isArray(project.challengesAndSolutions) ? project.challengesAndSolutions : [];
  const timelineSteps = Array.isArray(project.deliveryTimeline)
    ? project.deliveryTimeline
    : typeof project.deliveryTimeline === "string"
      ? project.deliveryTimeline.split("->").map((step) => step.trim()).filter(Boolean)
      : [];
  const screenshotItems = screenshots.map((item, idx) => getScreenshotData(item, idx));

  useEffect(() => {
    if (!activeScreenshot) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveScreenshot(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeScreenshot]);

  return (
    <section className="section-space">
      <div className="container-base grid gap-8 lg:grid-cols-[1fr,320px]">
        <div className="space-y-8">
          <article className="gradient-border card-surface rounded-3xl p-7 md:p-8">
            {isClientProject && (
              <p
                className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  isDelivered
                    ? "border border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-500/35 dark:bg-emerald-500/10 dark:text-emerald-300"
                    : "border border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/35 dark:bg-amber-500/10 dark:text-amber-300"
                }`}
              >
                {isDelivered ? "Project Successfully Delivered" : "Project In Progress"}
              </p>
            )}
            <h1 className="display-font text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{project.overview}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-300/80 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/40">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Category</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{isClientProject ? "Client Project" : "Our Project"}</p>
              </div>
              <div className="rounded-xl border border-slate-300/80 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/40">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Industry</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{project.industry || project.clientIndustry || "General"}</p>
              </div>
              <div className="rounded-xl border border-slate-300/80 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/40">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Timeline</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{project.timeline || project.projectDuration || "TBD"}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                >
                  <TechIcon name={item} size="sm" />
                  {item}
                </span>
              ))}
            </div>
          </article>

          {isClientProject ? (
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="card-surface rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {isDelivered ? "Delivery Summary" : "Project Summary"}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <p><span className="font-semibold">Client Type:</span> {project.clientType}</p>
                  <p><span className="font-semibold">Client Industry:</span> {project.clientIndustry}</p>
                  <p><span className="font-semibold">Project Duration:</span> {project.projectDuration}</p>
                  <p><span className="font-semibold">Start Date:</span> {project.startDate || "TBD"}</p>
                  <p><span className="font-semibold">End Date:</span> {project.endDate || "TBD"}</p>
                </div>

                <div className="mt-6 rounded-xl border border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {isDelivered ? "Delivery Timeline" : "Project Timeline"}
                  </p>
                  {timelineSteps.length > 0 ? (
                    <div className="mt-3 space-y-3">
                      {timelineSteps.map((step, idx) => (
                        <div key={step} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white dark:bg-sky-500">
                            {idx + 1}
                          </div>
                          <div className="min-w-0 rounded-lg border border-slate-300/70 bg-white/70 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{project.deliveryTimeline}</p>
                  )}
                </div>
              </article>

              <article className="card-surface rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {isDelivered ? "Final Delivered Features" : "Current Project Scope"}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {deliveredFeatures.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>

              <article className="card-surface rounded-2xl p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Challenges & Solutions</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {challenges.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-300/80 bg-white/60 p-4 text-sm leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-900/45 dark:text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm italic text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
                  "{project.clientFeedback}"
                </div>
              </article>
            </div>
          ) : (
            <>
              <div className="grid gap-6 lg:grid-cols-2">
                <article className="card-surface rounded-2xl p-6">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Project Features</h2>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {features.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>

                <article className="card-surface rounded-2xl p-6">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Target Users</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {targetUsers.map((item) => (
                      <span key={item} className="rounded-full border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Estimated Timeline</p>
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{project.timeline}</p>
                  </div>
                </article>
              </div>

              <article className="card-surface rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Pricing Plans</h2>
                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  {plans.map((plan) => (
                    <PricingPlanCard key={plan.name} plan={plan} highlighted={plan.name === "Standard"} />
                  ))}
                </div>
              </article>
            </>
          )}

          <article className="card-surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Screenshots</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {screenshotItems.map((screenshot) => (
                <button
                  key={screenshot.id}
                  type="button"
                  onClick={() => setActiveScreenshot(screenshot)}
                  className="group rounded-xl border border-slate-300 p-3 text-left transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:focus-visible:ring-sky-500"
                >
                  <div className="overflow-hidden rounded-lg border border-slate-200/80 dark:border-slate-700/80">
                    <img
                      src={screenshot.src}
                      alt={screenshot.caption}
                      className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-300">{screenshot.caption}</p>
                </button>
              ))}
            </div>
          </article>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="card-surface rounded-2xl p-5">
            <p className="text-sm text-slate-600 dark:text-slate-300">Need a similar solution?</p>
            <a href="/contact" className="button-primary mt-3 w-full text-center">
              Get Quote
            </a>
            <ShareProjectButton title={project.title} />
          </div>
        </aside>
      </div>

      {activeScreenshot && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${activeScreenshot.caption}`}
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveScreenshot(null)}
              className="absolute right-3 top-3 rounded-full border border-slate-300 bg-white px-2.5 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Close preview"
            >
              X
            </button>
            <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
              <img
                src={activeScreenshot.src}
                alt={activeScreenshot.caption}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-slate-700 dark:text-slate-200">
              {activeScreenshot.caption}
            </p>
          </div>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
        <a href="/contact" className="button-primary mx-auto block w-full max-w-md text-center">
          Get Quote
        </a>
      </div>
    </section>
  );
}
