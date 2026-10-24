/**
 * Carga de herramientas de analítica. Solo se llama cuando hay un ID en
 * el .env (ver src/data/rastreo.ts) y el visitante aceptó las cookies.
 */
import { GA_ID } from '@/data/rastreo'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

let cargado = false

/** Inserta Google Analytics 4 una sola vez. */
export function activarGoogleAnalytics() {
  if (!GA_ID) return
  // Por si antes se había desactivado en esta misma visita.
  ;(window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = false
  if (cargado) {
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
    return
  }
  cargado = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js espera el objeto `arguments`, no un arreglo.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  window.gtag('js', new Date())
  // Las visitas se envían a mano en cada cambio de ruta (sitio de una sola página).
  window.gtag('config', GA_ID, { send_page_view: false })

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
  document.head.appendChild(s)
}

/** Detiene el envío de datos y borra las cookies de Google Analytics. */
export function desactivarGoogleAnalytics() {
  if (!GA_ID) return
  ;(window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true
  if (cargado) window.gtag('consent', 'update', { analytics_storage: 'denied' })

  const dominio = location.hostname.replace(/^www\./, '')
  document.cookie.split(';').forEach((c) => {
    const nombre = c.split('=')[0].trim()
    if (nombre === '_ga' || nombre.startsWith('_ga_')) {
      for (const d of [dominio, `.${dominio}`, '']) {
        document.cookie = `${nombre}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`
      }
    }
  })
}

export function registrarVisita(ruta: string) {
  if (!cargado) return
  window.gtag('event', 'page_view', {
    page_path: ruta,
    page_location: location.href,
    page_title: document.title,
  })
}
