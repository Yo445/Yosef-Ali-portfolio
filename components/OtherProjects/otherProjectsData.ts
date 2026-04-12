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
    title: 'Lugar',
    description:
      'An e-commerce web app built with Angular. Features include product listing, shopping cart, dynamic filtering, category navigation, and user interaction. A comprehensive platform demonstrating modern Angular development practices.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap', 'E-commerce'],
    links: [
      {
        href: 'https://github.com/Yo445/Angular_ecommerce_Lugar',
        icon: 'icon-github',
        label: 'GitHub'
      }
    ]
  }
];
