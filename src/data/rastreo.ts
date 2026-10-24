/**
 * Herramientas de analítica / rastreo del sitio.
 *
 * Cada herramienta se activa SOLO si su variable de entorno tiene valor.
 * Sin variables → no se carga ningún script, no aparece el aviso de cookies
 * y el aviso de privacidad dice que el sitio no usa analítica.
 *
 * Para agregar una herramienta nueva (ej. Meta Pixel):
 *   1. Agrega su entrada aquí con su variable de entorno.
 *   2. Agrega su carga en src/lib/analytics.ts.
 * El aviso de privacidad y el aviso de cookies la incluyen solos.
 */

/** ID de medición de Google Analytics 4 (ej. G-XXXXXXXXXX). */
export const GA_ID = import.meta.env.VITE_GA_ID?.trim() || ''

export type Herramienta = {
  id: string
  nombre: string
  proveedor: string
  /** Para qué la usamos (se muestra en el aviso de privacidad). */
  para: string
  /** Qué datos recaba. */
  datos: string
  politica: string
  activa: boolean
}

export const HERRAMIENTAS: Herramienta[] = [
  {
    id: 'google-analytics',
    nombre: 'Google Analytics',
    proveedor: 'Google LLC',
    para: 'saber cuántas personas visitan el sitio y qué páginas consultan, para mejorarlo',
    datos:
      'páginas visitadas, tiempo en el sitio, tipo de dispositivo y navegador, y ciudad aproximada. No recibe tu nombre ni tus datos de contacto',
    politica: 'https://policies.google.com/privacy',
    activa: GA_ID !== '',
  },
]

/** Herramientas encendidas en este despliegue. */
export const RASTREO_ACTIVO = HERRAMIENTAS.filter((h) => h.activa)

export const HAY_RASTREO = RASTREO_ACTIVO.length > 0
