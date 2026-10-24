/**
 * Estructura común de los documentos legales (aviso de privacidad y
 * términos y condiciones). La página se arma sola a partir de estos datos
 * (ver src/components/DocumentoLegal.tsx).
 *
 * Dentro de cualquier texto se puede escribir un enlace como
 * [texto](/ruta) o [texto](#seccion); los correos se enlazan solos.
 */

export type Bloque =
  /** Párrafo. */
  | string
  /** Lista con viñetas. */
  | { lista: string[] }
  /** Tabla de dos columnas (concepto / valor). */
  | { tabla: { concepto: string; valor: string }[] }
  /** Secuencia en el tiempo (ej. plazos para recoger un equipo). */
  | { pasos: { cuando: string; que: string }[] }
  /** Botón para cambiar la preferencia de cookies (solo si hay rastreo activo). */
  | { boton: 'preferencias-cookies' }

export type SeccionLegal = {
  /** Ancla en la URL (ej. /aviso-de-privacidad#cookies). */
  id: string
  titulo: string
  bloques: Bloque[]
}

export type DocumentoLegal = {
  /** Fecha visible de "última actualización". */
  actualizacion: string
  /** Puntos clave que se muestran antes del texto completo. */
  esencial: string[]
  secciones: SeccionLegal[]
}
