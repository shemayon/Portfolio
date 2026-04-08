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

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-left mb-20 md:w-2/3">
          <div className="inline-flex items-center gap-2 mb-6 text-primary font-mono text-sm tracking-wider">
            <span className="w-8 h-[1px] bg-primary" />
            01 // NEURAL LANDSCAPE
          </div>
          <h2
            id="about-heading"
            className="scroll-mt-24 text-balance text-4xl font-heading font-bold md:text-5xl mb-6 tracking-tight"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary filter drop-shadow-[0_0_15px_rgba(172,137,255,0.3)]">Perception</span> & Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-sans leading-relaxed">
            {PROFILE.aboutLead}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(129,236,255,0.15)]">
                <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-balance text-2xl font-heading font-semibold tracking-tight">System Architecture</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-sans text-base">
              {PROFILE.aboutBody}
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div key={category.name} className="p-6 rounded-2xl bg-card/40 backdrop-blur-lg border border-white/5 hover:bg-card/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-surface-container-high ring-1 ring-white/5 shadow-[0_0_10px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_15px_rgba(172,137,255,0.2)] transition-all`}>
                    <category.Icon className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-balance text-lg font-heading font-medium tracking-tight">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-black/40 text-muted-foreground border border-white/5 hover:text-primary hover:border-primary/30 transition-colors"
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
