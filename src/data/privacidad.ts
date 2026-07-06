/**
 * Contenido del Aviso de Privacidad.
 *
 * ✏️ Para modificarlo después: edita SOLO el texto de este archivo
 * (fecha y secciones). La página se actualiza sola.
 *
 * ⚠️ Este es un texto base de referencia. Conviene que lo revise alguien
 * con conocimiento legal y lo ajuste a la operación real de TecnoFix.
 */

/** Fecha visible de "última actualización". */
export const PRIVACIDAD_ACTUALIZACION = 'julio de 2026'

export type SeccionPrivacidad = {
  titulo: string
  parrafos: string[]
}

export const PRIVACIDAD_SECCIONES: SeccionPrivacidad[] = [
  {
    titulo: 'Responsable de tus datos',
    parrafos: [
      'TecnoFix, con domicilio en Av. 25 Poniente 917-B, Col. Chula Vista, Puebla, Pue., C.P. 72420, es responsable del uso y protección de tus datos personales, conforme a este aviso.',
    ],
  },
  {
    titulo: 'Datos que recabamos',
    parrafos: [
      'Cuando nos contactas por el formulario del sitio o por otros medios, podemos recabar: tu nombre, correo electrónico, teléfono y el contenido del mensaje que nos envías.',
    ],
  },
  {
    titulo: 'Para qué usamos tus datos',
    parrafos: [
      'Utilizamos tus datos únicamente para: responder tus dudas y solicitudes, elaborar cotizaciones, dar seguimiento a reparaciones o proyectos, y contactarte respecto al servicio solicitado.',
    ],
  },
  {
    titulo: 'Con quién los compartimos',
    parrafos: [
      'No vendemos ni compartimos tus datos personales con terceros con fines comerciales. Solo se usarán internamente para atenderte.',
    ],
  },
  {
    titulo: 'Tus derechos (ARCO)',
    parrafos: [
      'Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al uso de tus datos personales, así como a revocar tu consentimiento.',
      'Para ejercer cualquiera de estos derechos, escríbenos a contacto@tecnofix.tech indicando tu solicitud.',
    ],
  },
  {
    titulo: 'Cambios a este aviso',
    parrafos: [
      'Este aviso de privacidad puede actualizarse. Cualquier cambio se publicará en esta misma página.',
    ],
  },
]
