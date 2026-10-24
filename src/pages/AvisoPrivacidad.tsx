/**
 * Página de Aviso de Privacidad.
 * El contenido vive en src/data/privacidad.ts (fácil de editar).
 */
import { DocumentoLegal } from '@/components/DocumentoLegal'
import { PRIVACIDAD } from '@/data/privacidad'

export function AvisoPrivacidad() {
  return (
    <DocumentoLegal
      tema="legal"
      titulo="Aviso de privacidad"
      descripcion="Qué datos te pedimos, para qué los usamos y cómo puedes consultarlos, corregirlos o borrarlos."
      documento={PRIVACIDAD}
    />
  )
}
