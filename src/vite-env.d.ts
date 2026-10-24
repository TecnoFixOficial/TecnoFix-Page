/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** "true" muestra la pantalla de "Sitio en construcción"; "false" el sitio real. */
  readonly VITE_UNDER_CONSTRUCTION?: string
  /** ID de Google Analytics 4 (G-XXXXXXXXXX). Vacío o ausente = sin analítica. */
  readonly VITE_GA_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
