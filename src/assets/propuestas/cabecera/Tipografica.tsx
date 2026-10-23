/**
 * Propuesta C — "Tipográfica".
 * Sin gráficos: el título en Anton muy grande es el protagonista, con el
 * mismo marcador cian por debajo que usa el título del inicio. En escritorio
 * la descripción se va a la derecha, alineada con la última línea del título.
 */
import { Migas, type CabeceraProps } from './comun'

export function Tipografica({ seccion, titulo, descripcion }: CabeceraProps) {
  return (
    <section className="border-b border-brand-ink/10 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Migas seccion={seccion} />
        <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1fr_20rem] lg:gap-12">
          <h1 className="font-display text-6xl uppercase leading-[0.92] text-brand-purple sm:text-7xl lg:text-8xl">
            <span className="box-decoration-clone bg-[linear-gradient(to_top,rgb(2_197_206_/_0.45)_0.28em,transparent_0.28em)]">
              {titulo}
            </span>
          </h1>
          <p className="font-sans text-lg text-brand-ink/70 lg:pb-2">
            {descripcion}
          </p>
        </div>
      </div>
    </section>
  )
}
