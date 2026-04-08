import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "../projects/project-card";
import { SectionHeader } from "../shared/section-header";

/**
 * Renders the top three featured projects section sourced from projectsData.
 *
 * @returns {JSX.Element} Featured projects section markup.
 */
export function FeaturedProjects() {
  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 6);

  return (
    <section className="py-24 relative bg-background overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 text-primary font-mono text-sm tracking-wider">
              <span className="w-8 h-[1px] bg-primary" />
              02 // PROJECT NETWORK
            </div>
            <h2 className="text-balance text-4xl font-heading font-bold md:text-5xl tracking-tight mb-4">
              Featured Integrations
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              A selection of my recent work in Industrial AI, Multi-Agent Systems, and Computer Vision.
            </p>
          </div>
          <div className="hidden md:block">
            <Link
              href="/projects"
              className="group relative inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-white/10 text-foreground px-8 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:text-primary focus-visible:outline-hidden"
            >
              <span className="flex items-center gap-2">Explore All Nodes <span className="transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} className="h-full flex flex-col" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link
            href="/projects"
            className="group relative inline-flex h-12 w-full max-w-sm items-center justify-center rounded-md bg-transparent border border-white/10 text-foreground px-8 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:text-primary focus-visible:outline-hidden"
          >
             <span className="flex items-center gap-2">Explore All Nodes <span className="transition-transform group-hover:translate-x-1">→</span></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
