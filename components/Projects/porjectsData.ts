// ─── Static Projects Data ────────────────────────────────────────────────────
interface ProjectLink {
  href: string;
  icon: string; // icon key from symbol-defs.svg
  label: string;
}

interface ProjectData {
  id: number;
  title: string;
  type: 'Featured Project' | 'Graduation Project';
  description: string;
  tags: string[];
  image: string;
  links: ProjectLink[];
  layout?: 'left' | 'right'; // for alternating desktop layout
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: 'WizJobs',
    type: 'Featured Project',
    description:
      'The region\'s first AI-powered HR solution. A recruitment platform designed using best-in-class AI practices and technologies, WizJobs aims to revolutionize recruitment and workforce management by offering smart, data-driven solutions tailored for the MENA market. Built with modern React and Next.js technologies.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
    image: '/images/wizjobs.png',
    links: [
      {
        href: 'https://wiz-jobs.com/',
        icon: 'icon-external-link',
        label: 'View Project'
      }
    ],
    layout: 'left'
  },
  {
    id: 2,
    title: 'Mongez',
    type: 'Featured Project',
    description:
      'A professional digital platform for Chartered Accountants and Certified Tax Agents that streamlines financial transactions, accelerates processes, and simplifies tax management and compliance. Built with cutting-edge frontend technologies to provide a seamless user experience.',
    tags: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Material UI', 'Jest'],
    image: '/images/mongez.png',
    links: [
      {
        href: 'https://mongez.ae',
        icon: 'icon-external-link',
        label: 'View Project'
      }
    ],
    layout: 'right'
  },
  {
    id: 3,
    title: 'PlantSiri',
    type: 'Graduation Project',
    description:
      'Integrated agriculture water resource management system using React, Node.js, and Python to monitor soil moisture and optimize water usage in real time. An innovative IoT solution for smart irrigation and sustainable farming practices.',
    tags: ['React.js', 'Node.js', 'Python', 'IoT', 'MongoDB', 'Real-time Monitoring'],
    image: 'https://res.cloudinary.com/dhbiouaym/image/upload/q_auto:eco/v1663667991/Portfolio/project3_rw9d06.jpg',
    links: [
      {
        href: 'https://github.com/Yo445/PlantSiri_-GP-',
        icon: 'icon-github',
        label: 'GitHub'
      },
      {
        href: 'https://linkedin.com/feed/update/urn:li:activity:7207044451272187904',
        icon: 'icon-external-link',
        label: 'Details'
      }
    ],
    layout: 'left'
  }
];