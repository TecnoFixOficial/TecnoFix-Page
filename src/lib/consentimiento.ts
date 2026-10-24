/**
 * Decisión del visitante sobre las cookies de analítica.
 *
 * Se guarda en localStorage del navegador. Si el navegador no deja guardar
 * (modo privado, bloqueo de datos), se trata como "sin decidir" y la
 * analítica no se activa.
 */
import { useSyncExternalStore } from 'react'

export type Decision = 'aceptadas' | 'rechazadas'

const CLAVE = 'tecnofix:cookies'
const EVENTO = 'tecnofix:consentimiento'
const EVENTO_ABRIR = 'tecnofix:abrir-preferencias'

/** Respaldo cuando el navegador no deja usar localStorage. */
let enMemoria: Decision | null = null

function leer(): Decision | null {
  try {
    const v = localStorage.getItem(CLAVE)
    return v === 'aceptadas' || v === 'rechazadas' ? v : null
  } catch {
    return null
  }
}

export function guardarDecision(decision: Decision) {
  try {
    localStorage.setItem(CLAVE, decision)
  } catch {
    // Sin almacenamiento: la decisión dura solo esta visita.
    enMemoria = decision
  }
  window.dispatchEvent(new Event(EVENTO))
}

function suscribir(cb: () => void) {
  window.addEventListener(EVENTO, cb)
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener(EVENTO, cb)
    window.removeEventListener('storage', cb)
  }
}

/** Decisión actual; `null` si el visitante aún no elige. */
export function useDecision(): Decision | null {
  return useSyncExternalStore(suscribir, () => leer() ?? enMemoria)
}

/** Vuelve a mostrar el aviso de cookies (botón del footer o del aviso de privacidad). */
export function abrirPreferencias() {
  window.dispatchEvent(new Event(EVENTO_ABRIR))
}

export function alAbrirPreferencias(cb: () => void) {
  window.addEventListener(EVENTO_ABRIR, cb)
  return () => window.removeEventListener(EVENTO_ABRIR, cb)
}
