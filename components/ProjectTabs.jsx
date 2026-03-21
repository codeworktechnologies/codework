"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import DeliveredProjectCard from "@/components/DeliveredProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectTabs({ ourProjects, deliveredProjects }) {
  const [activeTab, setActiveTab] = useState("our");
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("Select Industry");
  const [category, setCategory] = useState("All");

  const currentList = activeTab === "our" ? ourProjects : deliveredProjects;

  const industryOptions = useMemo(() => {
    const source = activeTab === "our" ? ourProjects : deliveredProjects;
    const key = activeTab === "our" ? "industry" : "clientIndustry";
    return ["Select Industry", ...new Set(source.map((item) => item[key]))];
  }, [activeTab, ourProjects, deliveredProjects]);

  const filtered = currentList.filter((item) => {
    const lookup = `${item.title} ${item.description} ${item.industry ?? ""} ${item.clientIndustry ?? ""}`.toLowerCase();
    const matchSearch = lookup.includes(search.toLowerCase());
    const matchIndustry =
      industry === "Select Industry" || industry === (item.industry ?? item.clientIndustry ?? "");
    const matchCategory =
      category === "All" || category === item.category;
    return matchSearch && matchIndustry && matchCategory;
  });

  return (
    <div className="mt-10">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white/80 p-1 dark:border-slate-700 dark:bg-slate-900/60">
        <button
          type="button"
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab === "our" ? "bg-blue-600 text-white dark:bg-sky-500" : "text-slate-700 dark:text-slate-300"
            }`}
          onClick={() => setActiveTab("our")}
          aria-pressed={activeTab === "our"}
        >
          Our Projects
        </button>
        <button
          type="button"
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab === "delivered" ? "bg-blue-600 text-white dark:bg-sky-500" : "text-slate-700 dark:text-slate-300"
            }`}
          onClick={() => setActiveTab("delivered")}
          aria-pressed={activeTab === "delivered"}
        >
          Our Clients Projects
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {["All", "Website", "App", "Web App", "SaaS App"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition border ${category === cat
              ? "bg-slate-800 text-white border-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:border-slate-200"
              : "bg-transparent text-slate-700 border-slate-300 hover:bg-slate-100 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-[1fr,220px]">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search projects..."
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 dark:border-slate-700"
          aria-label="Search projects"
        />

        <select
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500 dark:border-slate-700"
          aria-label="Filter by industry"
        >
          {industryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-xl border border-slate-300 p-5 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
          No projects match your current filters.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 60}>
              {activeTab === "our" ? <ProjectCard project={project} /> : <DeliveredProjectCard project={project} />}
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
