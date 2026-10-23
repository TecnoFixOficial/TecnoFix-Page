/**
 * Propuesta D — "Patrón de marca".
 * Franja púrpura con el isotipo repetido como estampado tenue, como en una
 * lona o papel de envoltura de la marca. El patrón se desvanece hacia la
 * izquierda para que el texto siempre se lea. Una sola "F" va en cian.
 */
import { BrandMark } from '@/components/BrandMark'
import { Migas, type CabeceraProps } from './comun'

/** Isotipo en blanco muy tenue, como imagen para repetir. */
const PATRON = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="88" viewBox="-30 -30 255 237"><g fill="white" fill-opacity="0.08"><path d="M130.765 151.07L98.7654 175.5V45.3718H174.765L160.765 77.2806H130.765V151.07Z"/><path d="M53.7654 150.073L85.7654 175.001V32.4088H179.765L193.765 0.5H0.765384L14.7654 32.4088H53.7654V150.073Z"/></g></svg>',
)}")`

export function PatronMarca({ seccion, titulo, descripcion }: CabeceraProps) {
  return (
    <section className="relative overflow-hidden bg-brand-purple">
      {/* Estampado del isotipo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_left,black_30%,transparent_85%)]"
        style={{ backgroundImage: PATRON, backgroundSize: '96px 88px' }}
      />
      {/* La única pieza en color: una "F" cian dentro del patrón */}
      <BrandMark
        className="pointer-events-none absolute right-[8%] top-1/2 hidden h-24 w-auto -translate-y-1/2 lg:block"
        tClassName="fill-transparent"
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
