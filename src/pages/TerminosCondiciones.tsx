/**
 * Página de Términos y condiciones.
 * El contenido vive en src/data/terminos.ts (fácil de editar).
 */
import { DocumentoLegal } from '@/components/DocumentoLegal'
import { TERMINOS } from '@/data/terminos'

export function TerminosCondiciones() {
  return (
    <DocumentoLegal
      tema="terminos"
      titulo="Términos y condiciones"
      descripcion="Cómo funcionan el diagnóstico, los pagos, la entrega y la garantía de tu equipo, y nuestros proyectos de desarrollo."
      documento={TERMINOS}
    />
  )
}
