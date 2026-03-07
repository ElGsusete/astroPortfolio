# Portfolio con Astro

Portfolio estático construido con [Astro](https://astro.build): diseño atrevido (gradientes, animaciones suaves), responsive y máximo rendimiento (HTML/CSS por defecto, poco JavaScript solo para el efecto typing del Hero).

**Ver en vivo:** [https://elgsusete.github.io/astroPortfolio/](https://elgsusete.github.io/astroPortfolio/)

## Características

- **Responsive**: topbar en una sola línea en móvil, hero con márgenes y texto centrado, contacto en grid 2×2 con botones uniformes.
- **Hero**: animación de texto que cambia (typing) con altura fija para evitar saltos de layout.
- **Proyectos**: tarjetas con enlace a cada repo o demo. Actualmente: [GameLog](https://elgsusete.github.io/gameLibrary/), [F1 Wordle](https://elgsusete.github.io/F1-Wordle/) (Wordle de pilotos F1) y [F1APIDatabase](https://github.com/ElGsusete/F1APIDatabase) (API Go + MongoDB); los datos se editan en `src/data/projects.ts`.
- **Contacto**: botones con icono y color por tipo (Email, LinkedIn, GitHub, WhatsApp), enlaces `mailto`, perfiles y `wa.me`.

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── BaseHead.astro    # Meta, preload de fuentes
│   │   └── SiteLayout.astro  # Nav + layout principal
│   └── sections/
│       ├── Hero.astro
│       ├── About.astro
│       ├── Projects.astro
│       └── Contact.astro
├── data/
│   └── projects.ts           # Datos de proyectos (editar aquí)
├── layouts/
│   └── MainLayout.astro
├── pages/
│   └── index.astro           # Página única con las 4 secciones
└── styles/
    └── global.css            # Variables, gradientes, keyframes
```

## Comandos

| Comando           | Acción                              |
| ----------------- | ----------------------------------- |
| `npm install`     | Instalar dependencias               |
| `npm run dev`     | Servidor de desarrollo (localhost:4321) |
| `npm run build`   | Generar sitio estático en `./dist/` |
| `npm run preview` | Previsualizar el build localmente   |

## Cómo personalizarlo

- **Hero**: En `src/components/sections/Hero.astro` cambia el nombre y el subtítulo.
- **Sobre mí**: En `src/components/sections/About.astro` edita el texto del bloque.
- **Proyectos**: En `src/data/projects.ts` sustituye el array por tus proyectos (título, descripción, enlace, tags). Puedes usar `underConstruction: true` para tarjetas tipo "En construcción".
- **Contacto**: En `src/components/sections/Contact.astro` configura email, LinkedIn, GitHub y WhatsApp (enlaces e iconos; los colores por tipo están en `src/styles/global.css` como `--color-contact-*`).

## Stack

- **Astro** – Sitio estático
- **Tailwind CSS** – Estilos y utilidades
- **View Transitions** – Transiciones entre páginas (incluidas en el layout)
- **CSS puro** – Animaciones (gradientes, blobs, fade-in) sin librerías extra

## Documentación

- [Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
