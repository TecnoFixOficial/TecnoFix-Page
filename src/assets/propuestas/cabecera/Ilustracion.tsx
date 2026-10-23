/**
 * Propuesta E — "Ilustración de línea".
 * Franja púrpura con un dibujo de trazo fino a la derecha, distinto para
 * cada página: celular abierto con desarmador (técnico), ventana con código
 * (desarrollo), conversación (contacto) y documento protegido (legal).
 * Trazos en blanco tenue; un solo detalle en cian por dibujo.
 */
import type { ReactNode } from 'react'
import { Migas, type CabeceraProps, type Tema } from './comun'

/** Trazo base (blanco tenue) y acento (cian). */
const linea = 'stroke-white/45'
const acento = 'stroke-brand-cyan'

const DIBUJOS: Record<Tema, ReactNode> = {
  // Celular sin tapa, tornillos y un desarmador cruzando.
  tecnico: (
    <>
      <rect x="52" y="22" width="84" height="156" rx="14" className={linea} />
      <rect x="64" y="40" width="60" height="96" rx="4" className={linea} />
      <path d="M86 156h16" className={linea} />
      {[
        [62, 30],
        [126, 30],
        [62, 170],
        [126, 170],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`} className={linea}>
          <circle cx={cx} cy={cy} r="3.5" />
          <path d={`M${cx - 2} ${cy}h4`} />
        </g>
      ))}
      {/* Desarmador */}
      <path d="M104 126l58-58" className={acento} />
      <path d="M160 70l14-14 10 10-14 14z" className={acento} />
    </>
  ),
  // Ventana de navegador con etiquetas de código.
  desarrollo: (
    <>
      <rect x="24" y="38" width="152" height="124" rx="10" className={linea} />
      <path d="M24 60h152" className={linea} />
      <path d="M36 49h6M48 49h6M60 49h6" className={linea} />
      <path d="M78 92l-16 16 16 16M122 92l16 16-16 16" className={acento} />
      <path d="M108 86l-16 44" className={linea} />
      <path d="M44 146h40M92 146h24" className={linea} />
    </>
  ),
  // Dos globos de conversación: el del cliente y la respuesta.
  contacto: (
    <>
      <path
        d="M30 46h96a12 12 0 0 1 12 12v42a12 12 0 0 1-12 12H66l-20 18v-18H30a12 12 0 0 1-12-12V58a12 12 0 0 1 12-12Z"
        className={linea}
      />
      <path d="M38 70h70M38 88h48" className={linea} />
      <path
        d="M170 118H90a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h50l18 16v-16h12a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12Z"
        className={acento}
      />
      <path d="M96 142h60M96 158h36" className={acento} />
    </>
  ),
  // Documento con esquina doblada y escudo con palomita.
  legal: (
    <>
      <path d="M50 22h70l30 30v126H50z" className={linea} />
      <path d="M120 22v30h30" className={linea} />
      <path d="M66 70h52M66 88h68M66 106h60M66 124h40" className={linea} />
      <path
        d="M140 120l26 10v22c0 16-12 26-26 32-14-6-26-16-26-32v-22z"
        className={acento}
      />
      <path d="M129 152l8 8 15-17" className={acento} />
    </>
  ),
}

export function Ilustracion({ tema, seccion, titulo, descripcion }: CabeceraProps) {
  return (
    <section className="relative overflow-hidden bg-brand-purple">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-1/2 hidden h-72 w-72 -translate-y-1/2 lg:block xl:right-[10%]"
      >
        {DIBUJOS[tema]}
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Migas seccion={seccion} sobreOscuro />
        <h1 className="mt-5 max-w-xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
          {titulo}
        </h1>
        <p className="mt-5 max-w-lg font-sans text-lg text-white/80">
          {descripcion}
        </p>
      </div>
    </section>
  )
}
