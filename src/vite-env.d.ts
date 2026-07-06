/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** "true" muestra la pantalla de "Sitio en construcción"; "false" el sitio real. */
  readonly VITE_UNDER_CONSTRUCTION?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
