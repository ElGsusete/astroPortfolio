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
    href: "https://elgsusete.github.io/gameLibrary/",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
  },
  {
    title: "F1 Wordle",
    description: "Juego tipo Wordle con pilotos de F1: adivina el piloto secreto por categorías (equipo, nacionalidad, año de debut, estadísticas). Modos Campeones, Victorias y Difícil. EN/ES.",
    href: "https://elgsusete.github.io/F1-Wordle/",
    tags: ["Vue 3", "TypeScript", "Vite", "vue-i18n"],
  },
  {
    title: "F1APIDatabase",
    description: "API REST en Go + MongoDB con pilotos de la historia de la F1. Datos desde f1api.dev; ingesta con caché. GET /drivers con filtros y paginación.",
    href: "https://github.com/ElGsusete/F1APIDatabase",
    tags: ["Go", "MongoDB", "Docker", "REST"],
  },
];
