export const defaultTask = [
  {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn React such that I can treat it like my slave and make it do whatever I want to do.",
    tag: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Master Tailwind CSS",
    description:
      "I want to master Tailwind so I can build stunning UI components without writing a single custom CSS class.",
    tag: ["css", "tailwind", "frontend"],
    priority: "Medium",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Understand Node.js",
    description:
      "My goal is to understand Node.js well enough to build a fully functional backend with authentication and API routes.",
    tag: ["backend", "node", "js"],
    priority: "Low",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Explore Next.js",
    description:
      "I want to explore Next.js to build fast, scalable full-stack web applications with file-based routing.",
    tag: ["web", "nextjs", "fullstack"],
    priority: "High",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Practice Git & GitHub",
    description:
      "I need to practice Git and GitHub workflows to confidently collaborate on projects and manage version control.",
    tag: ["tools", "git", "github"],
    priority: "Medium",
    isFavorite: false,
  },
];
