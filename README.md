# TecnoFix — Sitio web público

Sitio público de **TecnoFix** (tecnología integral en México): servicio técnico
y desarrollo de software. Este repositorio es el sitio de cara al cliente, no la
app interna de gestión del taller.

## Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

- **React 18** — librería de UI
- **Vite 6** — bundler y servidor de desarrollo
- **TypeScript 5** — tipado estático
- **Tailwind CSS 3** — estilos utilitarios

## Scripts

```bash
npm install    # instalar dependencias
npm run dev    # servidor de desarrollo
npm run build  # build de producción
npm run preview
```

## Identidad de marca

| Uso                 | Color     |
| ------------------- | --------- |
| Púrpura principal   | `#2D2B6E` (`brand-purple`) |
| Cian de acento      | `#02C5CE` (`brand-cyan`)   |
| Fondo suave (crema) | `#F4F4FA` (`brand-cream`)  |
| Texto oscuro (tinta)| `#1B1A40` (`brand-ink`)    |

- Títulos: **Anton** (`font-display`)
- Texto: **Nunito** (`font-sans`)

Definido en [tailwind.config.js](tailwind.config.js) y [src/index.css](src/index.css).

## Estructura

```
src/
├─ pages/
│  └─ UnderConstruction.tsx   # única vista visible por ahora
├─ features/                  # secciones (vacías, a desarrollar)
│  ├─ home/
│  ├─ tech-service/
│  ├─ development/
│  └─ contact/
├─ components/                # UI reutilizable (vacío)
├─ assets/                    # logos e imágenes (se agregan después)
├─ App.tsx
├─ main.tsx
└─ index.css
```

> **Estado actual:** solo la estructura base y una pantalla de
> "Sitio en construcción". Las secciones reales aún no se desarrollan.
