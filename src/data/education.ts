export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  activities: Activity[];
}

export const educationList: Education[] = [
  {
    degree:
      "Master of Science - M.Sc, Computer Science with specialization in Machine Intelligence",
    school: "Kerala University of Digital Sciences, Innovation and Technology (DUK)",
    location: "Kerala, India",
    startDate: "2022",
    endDate: "2024",
    activities: [
      { name: "Department Representative" },
      { name: "Core-team member - Placement Cell DUK" },
    ],
  },
  {
    degree: "Bachelor of Science - B.Sc, Mathematics",
    school: "University of Kerala",
    location: "Kerala, India",
    startDate: "2017",
    endDate: "2020",
    activities: [{ name: "College dance team member for 3 years" }],
  },
];
