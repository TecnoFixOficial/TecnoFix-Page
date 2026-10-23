/**
 * Piezas compartidas por todas las propuestas de cabecera.
 */
import { Link } from 'react-router-dom'

/** De qué trata la página; algunos diseños dibujan algo propio de cada tema. */
export type Tema = 'tecnico' | 'desarrollo' | 'contacto' | 'legal'

export type CabeceraProps = {
  tema: Tema
  /** Nombre de la página, tal como aparece en la ruta de navegación. */
  seccion: string
  titulo: string
  descripcion: string
}

/** Ruta de navegación (Inicio / Página), en tono claro u oscuro. */
export function Migas({
  seccion,
  sobreOscuro = false,
}: {
  seccion: string
  sobreOscuro?: boolean
}) {
  return (
    <nav aria-label="Ruta de navegación" className="font-sans text-sm">
      <ol
        className={`flex items-center gap-2 ${
          sobreOscuro ? 'text-white/70' : 'text-brand-ink/60'
        }`}
      >
        <li>
          <Link
            to="/"
            className={`underline underline-offset-4 ${
              sobreOscuro
                ? 'decoration-white/30 hover:text-white hover:decoration-white'
                : 'decoration-brand-ink/20 hover:text-brand-purple hover:decoration-brand-purple'
            }`}
          >
            Inicio
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li
          aria-current="page"
          className={`font-semibold ${sobreOscuro ? 'text-white' : 'text-brand-ink'}`}
        >
          {seccion}
        </li>
      </ol>
    </nav>
  )
}
