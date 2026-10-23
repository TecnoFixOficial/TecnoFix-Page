/**
 * Propuesta B — "Bloque diagonal".
 * Fondo blanco con el título en púrpura. A la derecha, un bloque púrpura
 * con el borde izquierdo cortado en diagonal (el mismo corte de las puntas
 * de la "T" del logo) y el isotipo completo al centro, como un sello.
 * En celular el bloque se vuelve una franja inferior con el mismo corte.
 */
import { BrandMark } from '@/components/BrandMark'
import { Migas, type CabeceraProps } from './comun'

export function BloqueDiagonal({ seccion, titulo, descripcion }: CabeceraProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-ink/10 bg-white">
      {/* Bloque diagonal (escritorio) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] items-center justify-center bg-brand-purple [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] lg:flex">
        <BrandMark
          className="ml-[18%] h-40 w-auto"
          tClassName="fill-white"
          fClassName="fill-brand-cyan"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-14 md:py-20">
        <Migas seccion={seccion} />
        <h1 className="mt-5 max-w-xl font-display text-5xl uppercase leading-[0.95] text-brand-purple sm:text-6xl">
          {titulo}
        </h1>
        <p className="mt-5 max-w-lg font-sans text-lg text-brand-ink/70">
          {descripcion}
        </p>
      </div>

      {/* Franja inferior con corte diagonal (celular y tablet) */}
      <div className="absolute bottom-0 right-0 h-3 w-2/3 bg-brand-purple [clip-path:polygon(1rem_0,100%_0,100%_100%,0_100%)] lg:hidden" />
    </section>
  )
}
