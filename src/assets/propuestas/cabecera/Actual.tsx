/**
 * Actual — "Franja con isotipo".
 * Bloque púrpura sólido, como en las lonas y tarjetas, con el isotipo en
 * grande cortado por el borde derecho: la "F" en cian y la "T" apenas visible.
 */
import { BrandMark } from '@/components/BrandMark'
import { Migas, type CabeceraProps } from './comun'

export function Actual({ seccion, titulo, descripcion }: CabeceraProps) {
  return (
    <section className="relative overflow-hidden bg-brand-purple">
      <BrandMark
        className="pointer-events-none absolute -bottom-20 right-[-2rem] hidden h-[22rem] w-auto lg:block xl:right-[6%]"
        tClassName="fill-white/[0.07]"
        fClassName="fill-brand-cyan"
      />

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
