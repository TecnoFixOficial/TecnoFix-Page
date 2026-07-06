/**
 * Página 404 (ruta no encontrada).
 * Estilo temático de taller ("se nos desconectó algo") con flotación suave.
 */
import { Link } from 'react-router-dom'
import { HeroBackground } from '@/components/HeroBackground'

/** Ilustración: un enchufe desconectado (reemplaza el "0" del 404). */
function UnplugArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      {/* Contactos / toma de corriente (derecha) */}
      <path
        d="M116 26c-16 2-22 10-22 24 0 6 3 11 3 16"
        stroke="#2D2B6E"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="72"
        y="42"
        width="26"
        height="34"
        rx="7"
        fill="#F4F4FA"
        stroke="#2D2B6E"
        strokeWidth="5"
      />
      <path
        d="M80 52v8M90 52v8"
        stroke="#02C5CE"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Clavija / enchufe (izquierda) */}
      <path
        d="M4 94c16-2 22-10 22-24 0-6-3-11-3-16"
        stroke="#2D2B6E"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="22"
        y="42"
        width="26"
        height="34"
        rx="7"
        fill="#2D2B6E"
      />
      <path
        d="M48 52h9M48 66h9"
        stroke="#02C5CE"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Chispa de "desconexión" en el hueco */}
      <path
        d="M64 44l-5 11h9l-5 11"
        stroke="#02C5CE"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NotFound() {
  return (
    <section className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      {/* Fondo animado en toda la pantalla del 404 */}
      <HeroBackground />

      {/* 404 con el enchufe flotando en lugar del 0 */}
      <div className="relative z-10 flex animate-fade-up items-center justify-center gap-2 sm:gap-4">
        <span className="font-display text-8xl leading-none text-brand-purple sm:text-9xl">
          4
        </span>
        <UnplugArt className="h-24 w-24 animate-float sm:h-32 sm:w-32" />
        <span className="font-display text-8xl leading-none text-brand-purple sm:text-9xl">
          4
        </span>
      </div>

      <h1 className="relative z-10 mt-6 animate-fade-up font-display text-3xl uppercase text-brand-ink [animation-delay:100ms] sm:text-4xl">
        ¡Se nos desconectó algo!
      </h1>
      <p className="relative z-10 mt-3 max-w-md animate-fade-up font-sans text-brand-ink/65 [animation-delay:200ms]">
        La página que buscas no existe o se desconectó del sistema. Nosotros
        reparamos aparatos… esta ruta se nos escapó.
      </p>

      <Link
        to="/"
        className="relative z-10 mt-8 inline-flex animate-fade-up items-center gap-2 rounded-full bg-brand-purple px-6 py-3 font-sans font-bold text-white shadow-md transition-all [animation-delay:300ms] hover:-translate-y-0.5 hover:bg-brand-ink hover:shadow-lg"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
