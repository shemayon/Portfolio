import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/sections/hero";

describe("Hero", () => {
  it("renders the name heading", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Architecting/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Intelligence/i)).toBeInTheDocument();
  });

  it("renders the professional title", () => {
    render(<Hero />);

    expect(screen.getByText(/multi-agent systems/i)).toBeInTheDocument();
    expect(screen.getByText(/perception engines/i)).toBeInTheDocument();
  });

  it("renders the profile image with correct alt text", () => {
    render(<Hero />);

    const image = screen.getByRole("img", { name: /Shemayon Soloman/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/headshot/hero.png");
  });

  it("renders 'Initiate Contact' CTA with correct link", () => {
    render(<Hero />);
 
    const contactLink = screen.getByRole("link", { name: /initiate contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("renders 'View Network' CTA with correct link", () => {
    render(<Hero />);
 
    const projectsLink = screen.getByRole("link", { name: /view network/i });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "/projects");
  });

  it("has section landmark for accessibility", () => {
    const { container } = render(<Hero />);

    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders CTA buttons with accessible styling", () => {
    render(<Hero />);

    const contactLink = screen.getByRole("link", { name: /initiate contact/i });
    const projectsLink = screen.getByRole("link", { name: /view network/i });

    // Both links should be visible and interactive
    expect(contactLink).toBeVisible();
    expect(projectsLink).toBeVisible();
  });
});
