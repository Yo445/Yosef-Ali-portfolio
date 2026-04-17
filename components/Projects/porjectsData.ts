// ─── Static Projects Data ────────────────────────────────────────────────────
interface ProjectLink {
  href: string;
  icon: string; // icon key from symbol-defs.svg
  label: string;
}

interface ProjectData {
  id: number;
  title: string;
  type: string;
  description: string;
  tags?: string[];
  image: string;
  links: ProjectLink[];
  layout?: "left" | "right"; // for alternating desktop layout
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: "WizJobs",
    type: "Flagship Project",
    description:
      "The region's first AI-powered HR solution. A recruitment platform designed using best-in-class AI practices and technologies, WizJobs aims to revolutionize recruitment and workforce management by offering smart, data-driven solutions tailored for the MENA market. Built with modern React and Next.js technologies.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "jest",
      "AI Integration",
    ],
    image: "/images/wizjobs.png",
    links: [
      {
        href: "https://wiz-jobs.com/",
        icon: "icon-external-link",
        label: "View Project",
      },
    ],
    layout: "left",
  },
  {
    id: 2,
    title: "Mongez",
    type: "Flagship Project",
    description:
      "A professional digital platform for Chartered Accountants and Certified Tax Agents that streamlines financial transactions, accelerates processes, and simplifies tax management and compliance. Built with cutting-edge frontend technologies to provide a seamless user experience.",
    tags: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Jest",
    ],
    image: "/images/mongez.png",
    links: [
      {
        href: "https://mongez.ae",
        icon: "icon-external-link",
        label: "View Project",
      },
    ],
    layout: "right",
  },
  {
    id: 3,
    title: "Libri",
    type: "Featured Project",
    description:
      "Libri — Interactive Bookstore Libri is a digital bookstore that brings the feel of a real library to the screen. It features a collection of books with smooth page-flip animations, allowing users to browse and explore books in an interactive way.The project focuses on clean design, simple navigation, and engaging user experience, making book discovery feel natural and enjoyable.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "jest",
      "AI Integration",
    ],
    image: "/images/libri.png",
    links: [
      {
        href: "https://libri-nine.vercel.app/",
        icon: "icon-external-link",
        label: "View Project",
      },
    ],
    layout: "left",
  },
];
