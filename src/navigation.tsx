/**
 * Navegación del sitio: única fuente de verdad de las páginas.
 *
 * Cada página tiene un interruptor `enabled`:
 *   - `enabled: false`  -> la página se oculta del MENÚ y de las RUTAS
 *     (queda inaccesible), SIN borrar su código.
 *   - `showInNav: false` -> la página existe (tiene URL) pero NO aparece
 *     en el menú del navbar.
 *
 * Con esto, prender/apagar una sección se hace cambiando un solo valor aquí.
 */
import type { ComponentType } from 'react'
import { Home } from '@/pages/Home'
import { ServicioTecnico } from '@/pages/ServicioTecnico'
import { Desarrollo } from '@/pages/Desarrollo'
import { Contacto } from '@/pages/Contacto'
import { AvisoPrivacidad } from '@/pages/AvisoPrivacidad'

export type PageDef = {
  /** Ruta (URL) de la página. */
  path: string
  /** Texto que se muestra en el menú. */
  label: string
  /** Componente de la página. */
  Component: ComponentType
  /** Interruptor principal: si es false, la página no existe ni en menú ni en rutas. */
  enabled: boolean
  /** Mostrar (o no) en el menú del navbar. */
  showInNav: boolean
  /** Para el resaltado del menú: coincidencia exacta (solo el inicio). */
  end?: boolean
}

export const PAGES: PageDef[] = [
  {
    path: '/',
    label: 'Inicio',
    Component: Home,
    enabled: true,
    showInNav: true,
    end: true,
  },
  {
    path: '/servicio-tecnico',
    label: 'Servicio técnico',
    Component: ServicioTecnico,
    enabled: true,
    showInNav: true,
  },
  {
    path: '/desarrollo',
    label: 'Desarrollo',
    Component: Desarrollo,
    enabled: true,
    showInNav: true,
  },
  {
    path: '/contacto',
    label: 'Contacto',
    Component: Contacto,
    enabled: true,
    showInNav: true,
  },
  {
    path: '/aviso-de-privacidad',
    label: 'Aviso de privacidad',
    Component: AvisoPrivacidad,
    enabled: true,
    showInNav: false, // accesible por URL y footer, pero no en el menú
  },
]

/** Páginas activas (con URL y ruta). */
export const ENABLED_PAGES = PAGES.filter((p) => p.enabled)

/** Páginas que se muestran en el menú del navbar. */
export const NAV_PAGES = ENABLED_PAGES.filter((p) => p.showInNav)
