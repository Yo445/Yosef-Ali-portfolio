// ─── Static Other Projects Data ──────────────────────────────────────────────
interface OtherProjectLink {
  href: string;
  icon: string; // icon key from symbol-defs.svg
  label: string;
}

export interface OtherProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: OtherProjectLink[];
}

export const OTHER_PROJECTS_DATA: OtherProjectData[] = [
  {
    id: 1,
    title: "Lugar",
    description:
      "An e-commerce web app built with Angular. Features include product listing, shopping cart, dynamic filtering, category navigation, and user interaction. A comprehensive platform demonstrating modern Angular development practices.",
    tags: ["Angular", "TypeScript", "RxJS", "Bootstrap", "E-commerce"],
    links: [
      {
        href: "https://github.com/Yo445/Angular_ecommerce_Lugar",
        icon: "icon-github",
        label: "GitHub",
      },
    ],
  },
  {
    id: 2,
    title: "PlantSiri",
    description:
      "Integrated agriculture water resource management system using React, Node.js, and Python to monitor soil moisture and optimize water usage in real time. An innovative IoT solution for smart irrigation and sustainable farming practices.",
    tags: [
      "React.js",
      "Node.js",
      "Python",
      "IoT",
      "MongoDB",
      "Real-time Monitoring",
    ],
    links: [
      {
        href: "https://github.com/Yo445/PlantSiri_-GP-",
        icon: "icon-github",
        label: "GitHub",
      },
    ],
  },
  {
    id: 3,
    title: "Mentoria",
    description:
      "Aan Online Course Platform that allows instructors to create courses and students to enroll in and review courses. The backend is built with Node.js and MongoDB, with JWT-based authentication and integration with Amazon S3 for file uploads. The frontend team uses TypeScript for the client-side development.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "JSON Web Tokens (JWT) for authentication",
      "Amazon S3 for file storage",
    ],
    links: [
      {
        href: "https://github.com/Yo445/Mentoria.git",
        icon: "icon-github",
        label: "GitHub",
      },
    ],
  },
  {
    id: 4,
    title: "Career Advisor",
    description:
      "An AI-driven job application and career advisory platform that helps users manage their job searches, improve application success rates, and receive personalized career guidance.",
    tags: ["Angular", "Bootstrap", "Node.js", "TypeScript", "MongoDB"],
    links: [
      {
        href: "https://github.com/Yo445/career_advisor_system.git",
        icon: "icon-github",
        label: "GitHub",
      },
    ],
  },
];
