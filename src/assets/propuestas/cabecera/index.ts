/**
 * Propuestas de diseño para la cabecera de las páginas internas
 * (Servicio técnico, Desarrollo, Contacto, Aviso de privacidad).
 *
 * PARA ELEGIR UN DISEÑO: cambia el valor de `CABECERA_ELEGIDA` abajo.
 */
import type { ComponentType } from 'react'
import type { CabeceraProps, Tema } from './comun'
import { Actual } from './Actual'
import { BloqueDiagonal } from './BloqueDiagonal'
import { Tipografica } from './Tipografica'
import { PatronMarca } from './PatronMarca'
import { Ilustracion } from './Ilustracion'
import { Objeto } from './Objeto'
import { ObjetoV2 } from './ObjetoV2'

export const CABECERAS = {
  actual: {
    nombre: 'Actual — Franja con isotipo',
    descripcion:
      'Franja púrpura sólida con la "F" cian del logo en grande, cortada por el borde.',
    Component: Actual,
  },
  bloqueDiagonal: {
    nombre: 'B — Bloque diagonal',
    descripcion:
      'Fondo blanco; bloque púrpura con el corte diagonal de la "T" y el isotipo completo como sello.',
    Component: BloqueDiagonal,
  },
  tipografica: {
    nombre: 'C — Tipográfica',
    descripcion:
      'Sin gráficos: título enorme en Anton con el marcador cian del inicio.',
    Component: Tipografica,
  },
  patronMarca: {
    nombre: 'D — Patrón de marca',
    descripcion:
      'Franja púrpura con el isotipo repetido como estampado tenue y una sola "F" cian.',
    Component: PatronMarca,
  },
  ilustracion: {
    nombre: 'E — Ilustración de línea',
    descripcion:
      'Franja púrpura con un dibujo distinto por página: celular y desarmador, ventana con código, conversación, documento protegido.',
    Component: Ilustracion,
  },
  objeto: {
    nombre: 'F — Objeto característico',
    descripcion:
      'Fondo blanco con un objeto real de cada tema: etiqueta del taller, editor de código, chat de WhatsApp, hoja del aviso.',
    Component: Objeto,
  },
  objetoV2: {
    nombre: 'F2 — Objeto característico (versión 2)',
    descripcion:
      'Los mismos objetos de F, más detallados y sobre un panel crema: etiqueta con hilo y sello, editor con números de línea, chat con hora y palomitas, hojas con firma.',
    Component: ObjetoV2,
  },
} satisfies Record<
  string,
  { nombre: string; descripcion: string; Component: ComponentType<CabeceraProps> }
>

export type CabeceraId = keyof typeof CABECERAS

/**
 * ← Diseño en uso. Opciones:
 * 'actual' | 'bloqueDiagonal' | 'tipografica' | 'patronMarca' | 'ilustracion' | 'objeto' | 'objetoV2'
 */
export const CABECERA_ELEGIDA: CabeceraId = 'objetoV2'

export type { CabeceraProps, Tema }
