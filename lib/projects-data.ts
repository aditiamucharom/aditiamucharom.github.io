export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short, punchy description of what the project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://example.com",
    repo: "https://github.com/aditiamucharom",
  },
  {
    title: "Project Two",
    description:
      "Another example project — replace this with real work, screenshots, and live demo links.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "https://example.com",
    repo: "https://github.com/aditiamucharom",
  },
  {
    title: "Project Three",
    description:
      "Showcase of a side project, design experiment, or open-source contribution.",
    tags: ["Vite", "Three.js"],
    repo: "https://github.com/aditiamucharom",
  },
];
