export interface Project {
  title: string;
  description: string;
  href: string;
  image?: string;
  tags: string[];
  underConstruction?: boolean;
}

export const projects: Project[] = [
  {
    title: "GameLog",
    description: "Biblioteca personal de videojuegos: registra, puntúa y consulta tu colección. Login con Steam.",
    href: "https://Gsuse.github.io/gameLibrary/",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
  },
  {
    title: "En construcción",
    description: "Nuevo proyecto en desarrollo. Próximamente más información.",
    href: "#",
    tags: ["Próximamente"],
    underConstruction: true,
  },
  {
    title: "En construcción",
    description: "Otro proyecto en desarrollo. Próximamente más información.",
    href: "#",
    tags: ["Próximamente"],
    underConstruction: true,
  },
];
