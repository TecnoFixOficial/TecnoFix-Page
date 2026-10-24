/**
 * Aviso de cookies y activación de la analítica.
 *
 * Si no hay ninguna herramienta configurada en el .env (ver
 * src/data/rastreo.ts), ninguno de los dos componentes hace nada.
 */
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HAY_RASTREO, RASTREO_ACTIVO } from '@/data/rastreo'
import {
  alAbrirPreferencias,
  guardarDecision,
  useDecision,
} from '@/lib/consentimiento'
import {
  activarGoogleAnalytics,
  desactivarGoogleAnalytics,
  registrarVisita,
} from '@/lib/analytics'

const nombres = RASTREO_ACTIVO.map((h) => h.nombre).join(' y ')

/** Carga la analítica solo con permiso y registra cada cambio de página. */
export function Analitica() {
  const decision = useDecision()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!HAY_RASTREO) return
    if (decision === 'aceptadas') activarGoogleAnalytics()
    if (decision === 'rechazadas') desactivarGoogleAnalytics()
  }, [decision])

  useEffect(() => {
    if (decision === 'aceptadas') registrarVisita(pathname)
  }, [decision, pathname])

  return null
}

/** Franja inferior para aceptar o rechazar las cookies de analítica. */
export function AvisoCookies() {
  const decision = useDecision()
  const [reabierto, setReabierto] = useState(false)
  const caja = useRef<HTMLDivElement>(null)

  useEffect(() => alAbrirPreferencias(() => setReabierto(true)), [])

  // Al reabrirlo desde un botón, el foco pasa al aviso.
  useEffect(() => {
    if (reabierto) caja.current?.focus()
  }, [reabierto])

  if (!HAY_RASTREO || (decision !== null && !reabierto)) return null

  const elegir = (d: 'aceptadas' | 'rechazadas') => {
    guardarDecision(d)
    setReabierto(false)
  }

  const boton =
    'flex-1 rounded-full px-5 py-2.5 font-sans text-sm font-bold transition-colors'

  return (
    <div
      ref={caja}
      tabIndex={-1}
      role="region"
      aria-labelledby="cookies-titulo"
      className="fixed inset-x-4 bottom-4 z-50 rounded-lg border border-brand-ink/15 bg-white p-5 shadow-lg sm:left-auto sm:right-6 sm:max-w-md"
    >
      <p id="cookies-titulo" className="font-sans font-bold text-brand-ink">
        ¿Aceptas cookies de analítica?
      </p>
      <p className="mt-1.5 font-sans text-sm text-brand-ink/70">
        Usamos {nombres} para saber qué páginas se visitan y mejorar el sitio.
        Solo se activa si aceptas.{' '}
        <Link
          to="/aviso-de-privacidad#cookies"
          className="font-semibold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
        >
          Más información
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => elegir('rechazadas')}
          className={`${boton} border border-brand-purple text-brand-purple hover:bg-brand-cream`}
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={() => elegir('aceptadas')}
          className={`${boton} bg-brand-purple text-white hover:bg-brand-ink`}
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
