import {
  CABECERAS,
  CABECERA_ELEGIDA,
  type CabeceraProps,
} from '@/assets/propuestas/cabecera'

/**
 * Encabezado de página (banda superior) para las páginas de detalle.
 *
 * El diseño se elige en src/assets/propuestas/cabecera/index.ts
 * (constante CABECERA_ELEGIDA); aquí solo se muestra el elegido.
 */
export function PageHero(props: CabeceraProps) {
  const { Component } = CABECERAS[CABECERA_ELEGIDA]
  return <Component {...props} />
}
