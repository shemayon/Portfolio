import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// No more SectionHeader mock needed as it's not used in FeaturedProjects anymore

// Mock ProjectCard - track calls for verification
const mockProjectCard = vi.fn();
vi.mock("@/components/projects/project-card", () => ({
  ProjectCard: ({ project }: { project: { id: string; title: string } }) => {
    mockProjectCard(project);
    return <div data-testid={`project-card-${project.id}`}>{project.title}</div>;
  },
}));

// Mock projects data with featured and non-featured projects
vi.mock("@/data/projects", () => ({
  projectsData: [
    {
      id: "featured-1",
      title: "Featured Project 1",
      description: "Featured project description",
      repoUrl: "https://github.com/example/featured-1",
      primaryUrl: "https://example.com/featured-1",
      stars: 10,
      forks: 1,
      language: "TypeScript",
      updatedAt: "2026-01-01",
      updatedLabel: "Jan 01, 2026",
      topics: [],
      tags: ["TypeScript"],
      category: "Other",
      featured: true,
    },
    {
      id: "featured-2",
      title: "Featured Project 2",
      description: "Featured project description",
      repoUrl: "https://github.com/example/featured-2",
      primaryUrl: "https://example.com/featured-2",
      stars: 9,
      forks: 1,
      language: "TypeScript",
      updatedAt: "2026-01-01",
      updatedLabel: "Jan 01, 2026",
      topics: [],
      tags: ["React"],
      category: "Other",
      featured: true,
    },
    {
      id: "not-featured",
      title: "Not Featured",
      description: "Not featured description",
      repoUrl: "https://github.com/example/not-featured",
      primaryUrl: "https://example.com/not-featured",
      stars: 1,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2026-01-01",
      updatedLabel: "Jan 01, 2026",
      topics: [],
      tags: ["Node.js"],
      category: "Other",
      featured: false,
    },
  ],
}));

// Import after mocks
import { FeaturedProjects } from "@/components/sections/featured-projects";

describe("FeaturedProjects", () => {
  beforeEach(() => {
    mockProjectCard.mockClear();
  });

  it("renders section headers with title and description", () => {
    render(<FeaturedProjects />);

    expect(
      screen.getByRole("heading", { level: 2, name: /featured integrations/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/selection of my recent work/i)).toBeInTheDocument();
  });

  it("renders only featured projects", () => {
    render(<FeaturedProjects />);

    expect(screen.getByTestId("project-card-featured-1")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-featured-2")).toBeInTheDocument();
    expect(screen.queryByTestId("project-card-not-featured")).not.toBeInTheDocument();
  });

  it("renders 'Explore All Nodes' link", () => {
    render(<FeaturedProjects />);

    const viewAllLinks = screen.getAllByRole("link", { name: /explore all nodes/i });
    expect(viewAllLinks.length).toBeGreaterThan(0);
    expect(viewAllLinks[0]).toHaveAttribute("href", "/projects");
  });

  it("has section landmark", () => {
    const { container } = render(<FeaturedProjects />);

    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("passes correct project data to ProjectCard", () => {
    render(<FeaturedProjects />);

    // Should have called ProjectCard only for featured projects
    expect(mockProjectCard).toHaveBeenCalledTimes(2);
    expect(mockProjectCard).toHaveBeenCalledWith(
      expect.objectContaining({ id: "featured-1", featured: true }),
    );
    expect(mockProjectCard).toHaveBeenCalledWith(
      expect.objectContaining({ id: "featured-2", featured: true }),
    );
  });
});
