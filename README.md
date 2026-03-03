# Portfolio con Astro

Portfolio estático construido con [Astro](https://astro.build): diseño atrevido (gradientes, animaciones suaves) y máximo rendimiento (HTML/CSS por defecto, poco o ningún JavaScript).

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
- **Proyectos**: En `src/data/projects.ts` sustituye el array por tus proyectos (título, descripción, enlace, tags).
- **Contacto**: En `src/components/sections/Contact.astro` pon tu email real y las URLs de LinkedIn y GitHub.

## Stack

- **Astro** – Sitio estático
- **Tailwind CSS** – Estilos y utilidades
- **View Transitions** – Transiciones entre páginas (incluidas en el layout)
- **CSS puro** – Animaciones (gradientes, blobs, fade-in) sin librerías extra

## Documentación

- [Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
