/**
 * Configuración global del sitio.
 */

/**
 * Modo "Sitio en construcción".
 *
 * - `true`  → se muestra la pantalla de "Sitio en construcción".
 * - `false` → se muestra el sitio real.
 *
 * Para encender/apagar el modo NO se borra código: solo se cambia este valor
 * (o, sin tocar el código, definiendo la variable de entorno
 * `VITE_UNDER_CONSTRUCTION` en `true` / `false`, por ejemplo en Vercel).
 */
const envFlag = import.meta.env.VITE_UNDER_CONSTRUCTION

export const UNDER_CONSTRUCTION =
  envFlag !== undefined ? envFlag === 'true' : true
