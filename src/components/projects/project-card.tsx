"use client";

import BookOpenText from "lucide-react/dist/esm/icons/book-open-text";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import GitFork from "lucide-react/dist/esm/icons/git-fork";
import Github from "lucide-react/dist/esm/icons/github";
import Star from "lucide-react/dist/esm/icons/star";
import Link from "next/link";
import { ExpandableText } from "@/components/shared/expandable-text";
import { TechBadge } from "@/components/shared/tech-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { ProjectCardModel } from "@/types/project";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  project: ProjectCardModel;
  className?: string;
}

/**
 * Card component showing a project summary.
 *
 * @param props Component properties.
 * @returns Project card element.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const maxVisibleTags = 3; // Reduced for better mobile fit
  const visibleTags = project.tags.slice(0, maxVisibleTags);
  const hiddenTags = project.tags.slice(maxVisibleTags);
  const hiddenCount = hiddenTags.length;

  return (
    <Card
      data-testid="project-card"
      className={cn(
        "group relative overflow-hidden",
        "flex flex-col h-full",
        "bg-surface-container-high/40 backdrop-blur-xl border border-white/5",
        "transition-all duration-500 hover:bg-surface-container-high/60 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(172,137,255,0.3)]",
        className,
      )}
    >
      <CardHeader className="relative pb-4 p-5 sm:p-6">
        {/* Ambient background glow inside card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="relative flex flex-wrap items-center gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20">{project.category}</Badge>
          {project.language ? <Badge variant="outline" className="border-white/10 text-muted-foreground">{project.language}</Badge> : null}
          {project.featured ? <Badge className="bg-secondary/20 text-secondary border-secondary/30 hidden sm:inline-flex">Featured</Badge> : null}
        </div>

        <CardTitle className="relative mt-4 text-balance text-xl font-heading tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          <Link
            href={project.primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-xs",
              "focus-visible:outline-hidden",
            )}
          >
            <span className="break-words">{project.title}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" aria-hidden="true" />
          </Link>
        </CardTitle>

        <ExpandableText className="relative mt-3 text-sm text-muted-foreground font-sans leading-relaxed">
          {project.description}
        </ExpandableText>
      </CardHeader>

      <CardContent className="space-y-5 relative z-10 flex-grow p-5 sm:p-6 pt-0 sm:pt-0">
        {/* Highlights first */}
        {project.highlights?.length ? (
          <ul className="space-y-2 text-sm text-foreground/80 font-sans">
            {project.highlights.slice(0, 2).map((highlight) => (
              <li key={highlight} className="flex gap-3 items-start">
                <span
                  aria-hidden="true"
                  className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(129,236,255,0.8)]"
                />
                <span className="min-w-0">{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Tags middle */}
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex min-w-0 items-center gap-2 overflow-hidden">
            {visibleTags.map((tag) => (
              <TechBadge key={tag} name={tag} size="sm" className="bg-black/30 border-white/5 text-muted-foreground hover:text-primary" />
            ))}
          </div>
          {hiddenCount > 0 && isMounted ? (
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="inline-flex h-11 items-center rounded-full border border-white/5 bg-black/30 px-3 text-[11px] font-mono text-muted-foreground hover:text-primary transition-colors focus-visible:outline-hidden md:h-8 md:px-2 md:py-0.5"
                  aria-label={`Show ${hiddenCount} more tags`}
                  title="Show all tags"
                >
                  +{hiddenCount}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-3 bg-surface-container-high border-white/10" side="top" align="start">
                <div className="space-y-3">
                  <p className="text-xs font-mono tracking-widest text-primary">
                    TAGS //
                  </p>
                  <div className="max-h-44 overflow-auto pr-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <TechBadge key={tag} name={tag} size="sm" className="bg-black/30 border-white/5" />
                      ))}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : hiddenCount > 0 ? (
            <div
              className="inline-flex h-11 items-center rounded-full border border-white/5 bg-black/30 px-3 text-[11px] font-mono text-muted-foreground md:h-8 md:px-2 md:py-0.5"
            >
              +{hiddenCount}
            </div>
          ) : null}
        </div>

        {/* Metadata last (smaller) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono tracking-widest text-muted-foreground/70 uppercase">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-3 w-3 text-secondary" aria-hidden="true" />
            {project.stars.toLocaleString("en-US")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <GitFork className="h-3 w-3 text-secondary" aria-hidden="true" />
            {project.forks.toLocaleString("en-US")}
          </span>
          <span>{project.updatedLabel}</span>
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3 relative z-10 p-5 sm:p-6 pt-4 sm:pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent border-white/10 hover:bg-white/5 hover:text-primary transition-colors" asChild>
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} repository on GitHub`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" className="h-10 text-xs font-mono uppercase bg-transparent border-white/10 hover:bg-white/5 hover:text-primary transition-colors" asChild>
            <Link href={project.primaryUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5 mr-2" aria-hidden="true" />
              <span>Project</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {project.liveUrl ? (
            <Button variant="secondary" className="h-10 text-xs font-mono uppercase bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-colors" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Deploy
              </Link>
            </Button>
          ) : null}
          {project.docsUrl ? (
            <Button variant="outline" className="h-10 text-xs font-mono uppercase bg-transparent border-white/10 hover:bg-white/5 transition-colors" asChild>
              <Link href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                <BookOpenText className="h-3.5 w-3.5 mr-2" aria-hidden="true" />
                Docs
              </Link>
            </Button>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
