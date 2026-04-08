/* @vitest-environment node */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";

function roundTo(number: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(number * factor) / factor;
}

function computeStatistics(
  projects: Array<{ stars?: number; license?: unknown; language?: unknown; name: string }>,
) {
  const numberOfProjects = projects.length;
  const totalStars = projects.reduce((sum, project) => sum + (project.stars ?? 0), 0);
  const averageStars = roundTo(totalStars / Math.max(1, numberOfProjects), 1);

  const topRepositories = [...projects]
    .sort((a, b) => {
      const delta = (b.stars ?? 0) - (a.stars ?? 0);
      if (delta !== 0) return delta;
      return String(a.name).localeCompare(String(b.name));
    })
    .slice(0, 6)
    .map((project) => `${project.name} (${project.stars ?? 0} stars)`);

  return {
    totalStars,
    averageStars,
    numberOfProjects,
    topRepositories,
  };
}

describe("src/content/projects/projects.generated.json statistics", () => {
  it("matches computed aggregates from projects list", async () => {
    const projectsJsonPath = path.join(
      process.cwd(),
      "src",
      "content",
      "projects",
      "projects.generated.json",
    );
    const raw = await readFile(projectsJsonPath, "utf8");
    const parsed = JSON.parse(raw) as { projects: unknown[]; statistics: unknown };

    const projects = parsed.projects as Array<{
      stars?: number;
      license?: unknown;
      language?: unknown;
      name: string;
    }>;

    const { topRepositories: _, ...expected } = computeStatistics(projects);
    expect(parsed.statistics).toEqual(expect.objectContaining(expected));
    expect((parsed.statistics as { topRepositories: string[] }).topRepositories).toBeInstanceOf(Array);
  });
});
