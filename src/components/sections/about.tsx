import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import { PROFILE } from "@/lib/profile";

/** Renders the About component.
 * @returns The JSX element for the rendered about section.
 */
export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle geometric HUD lines */}
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        
        {/* Ambient Neural Glows */}
        <div className="absolute right-[-10%] top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        <div className="absolute left-[-10%] bottom-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-left mb-12 md:w-2/3">
          <div className="inline-flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-wider">
            <span className="w-8 h-[1px] bg-primary" />
            01 // NEURAL LANDSCAPE
          </div>
          <h2
            id="about-heading"
            className="scroll-mt-24 text-balance text-3xl sm:text-4xl font-heading font-bold md:text-5xl mb-4 tracking-tight"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary filter drop-shadow-[0_0_15px_rgba(172,137,255,0.3)]">Perception</span> & Intelligence
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl font-sans leading-relaxed">
            {PROFILE.aboutLead}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Architecture Spotlight */}
          <div className="p-5 sm:p-6 rounded-xl bg-card/60 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-semibold tracking-tight text-foreground">System Architecture</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base max-w-4xl">
              {PROFILE.aboutBody}
            </p>
          </div>

          {/* Denser Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {skillCategories.map((category) => (
              <div key={category.name} className="flex flex-col p-4 rounded-xl bg-card/40 backdrop-blur-lg border border-white/5 hover:bg-card/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-surface-container-high ring-1 ring-white/5 group-hover:shadow-[0_0_15px_rgba(172,137,255,0.2)] transition-all`}>
                    <category.Icon className="w-4 h-4 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-heading font-semibold tracking-tight text-foreground/90">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-black/40 text-muted-foreground border border-white/5 hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-left relative z-10 pt-8 border-t border-white/5">
          <Link
            href="/about"
            className="group relative inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-primary/30 text-primary px-8 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus-visible:outline-hidden"
          >
            <span className="flex items-center gap-2 font-mono uppercase tracking-widest text-xs">Access Full Logs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
