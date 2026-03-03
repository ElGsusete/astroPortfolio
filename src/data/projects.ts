export interface Project {
  title: string;
  description: string;
  href: string;
  image?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Proyecto ejemplo 1",
    description: "Una aplicación o sitio que muestra tus habilidades. Sustituye por tu proyecto real.",
    href: "#",
    tags: ["Astro", "Tailwind", "TypeScript"],
  },
  {
    title: "Proyecto ejemplo 2",
    description: "Descripción breve del segundo proyecto. Enlace a demo o repo.",
    href: "#",
    tags: ["React", "API"],
  },
  {
    title: "Proyecto ejemplo 3",
    description: "Tercer proyecto con tecnologías que domines.",
    href: "#",
    tags: ["Vue", "CSS"],
  },
];
