"use client";

import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TechBadge } from "@/components/shared/tech-badge";

interface ProjectTagsPopoverProps {
  tags: string[];
  hiddenCount: number;
}

/**
 * Client component for the project tags popover.
 * Only renders the interactive popover after mounting to avoid hydration mismatches.
 *
 * @param props - Component properties.
 * @returns Popover component.
 */
export function ProjectTagsPopover({ tags, hiddenCount }: ProjectTagsPopoverProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="inline-flex h-11 items-center rounded-full border border-white/5 bg-black/30 px-3 text-[11px] font-mono text-muted-foreground md:h-8 md:px-2 md:py-0.5">
        +{hiddenCount}
      </div>
    );
  }

  return (
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
              {tags.map((tag) => (
                <TechBadge key={tag} name={tag} size="sm" className="bg-black/30 border-white/5" />
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
