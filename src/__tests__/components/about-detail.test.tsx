import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Mock UI components
vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}));

vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock data dependencies
vi.mock("@/data/skills", () => ({
  skillCategories: [
    {
      name: "Cloud & DevOps",
      Icon: () => <span>CloudIcon</span>,
      color: "text-blue-500",
      skills: ["AWS", "Docker"],
    },
  ],
}));

vi.mock("@/data/education", () => ({
  educationList: [
    {
      degree: "M.S. in Data Science",
      school: "Advanced Tech University",
      startDate: "2020",
      endDate: "2022",
      activities: [{ name: "AI Research Lab" }],
    },
    {
      degree: "B.S. in Computer Science",
      school: "Test University",
      startDate: "2016",
      endDate: "2020",
      activities: [{ name: "Computer Science Club" }],
    },
  ],
}));

vi.mock("@/data/experience", () => ({
  experiences: [
    {
      title: "Senior Data Scientist",
      company: "Test Corp",
      location: "Remote",
      isRemote: true,
      startDate: "2022",
      endDate: "Present",
      achievements: [{ text: "Led AI initiatives" }],
      skills: [{ name: "Python" }],
    },
    {
      title: "ML Engineer",
      company: "Example Corp",
      location: "Onsite",
      isRemote: false,
      startDate: "2020",
      endDate: "2022",
      achievements: [{ text: "Shipped models" }],
      skills: [],
    },
  ],
}));

vi.mock("@/data/hobbies", () => ({
  hobbies: [
    { name: "Travelling", emoji: "✈️", description: "Exploring new cultures" },
    { name: "Bike Riding", emoji: "🚴‍♂️", description: "Enjoying scenic routes" },
    { name: "Playing Football", emoji: "⚽", description: "Staying active" },
    { name: "Freestyle Dance", emoji: "💃", description: "Expressing creativity" },
  ],
}));

// Import after mocks
import { AboutDetail } from "@/components/sections/about-detail";

describe("AboutDetail", () => {
  it("renders profile section with name", () => {
    render(<AboutDetail />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Shemayon Soloman/i }),
    ).toBeInTheDocument();
  });

  // Text appears multiple times (header + experience section), use getAllByText
  it("renders professional title", () => {
    render(<AboutDetail />);

    // Text appears multiple times (header + experience section), use getAllByText
    const machineLearningEngineerMatches = screen.getAllByText(/Machine Learning Engineer/i);
    expect(machineLearningEngineerMatches.length).toBeGreaterThan(0);
    const automationSpecialistMatches = screen.getAllByText(/Automation Specialist/i);
    expect(automationSpecialistMatches.length).toBeGreaterThan(0);
  });

  it("renders profile image", () => {
    render(<AboutDetail />);

    const image = screen.getByRole("img", { name: /Shemayon Soloman/i });
    expect(image).toBeInTheDocument();
  });

  it("renders professional summary section", () => {
    render(<AboutDetail />);

    expect(screen.getByText("Professional Summary")).toBeInTheDocument();
  });

  it("renders skills section", () => {
    render(<AboutDetail />);

    expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
    expect(screen.getByText("Cloud & DevOps")).toBeInTheDocument();
  });

  it("renders work experience section", () => {
    render(<AboutDetail />);

    expect(screen.getByText("Work Experience")).toBeInTheDocument();
    expect(screen.getByText("Senior Data Scientist")).toBeInTheDocument();
    expect(screen.getByText("Test Corp")).toBeInTheDocument();
    expect(screen.getByText("ML Engineer")).toBeInTheDocument();
    expect(screen.getByText("Example Corp")).toBeInTheDocument();
  });

  it("renders achievements in experience", () => {
    render(<AboutDetail />);

    expect(screen.getByText("Led AI initiatives")).toBeInTheDocument();
    expect(screen.getByText("Shipped models")).toBeInTheDocument();
  });

  it("renders achievements & awards section", () => {
    render(<AboutDetail />);

    expect(screen.getByText("Achievements & Awards")).toBeInTheDocument();
    const awardImage = screen.getByRole("img", { name: /achievement award/i });
    expect(awardImage).toBeInTheDocument();
    expect(awardImage).toHaveAttribute("src", expect.stringContaining("award.jpg"));
  });

  it("renders education section", () => {
    render(<AboutDetail />);

    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("B.S. in Computer Science")).toBeInTheDocument();
    expect(screen.getByText("Test University")).toBeInTheDocument();
  });

  it("renders hobbies section", () => {
    render(<AboutDetail />);

    expect(screen.getByText("Hobbies & Interests")).toBeInTheDocument();
    expect(screen.getByText(/Travelling/i)).toBeInTheDocument();
    expect(screen.getByText(/Bike Riding/i)).toBeInTheDocument();
    expect(screen.getAllByText(/football/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Freestyle Dance/i)).toBeInTheDocument();
  });
});
