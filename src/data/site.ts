/**
 * Datos del sitio (contacto, redes y servicios).
 *
 * TODO: reemplazar los marcadores por los datos reales de TecnoFix.
 */

export const SITE = {
  nombre: 'TecnoFix',

  // Titular legal del negocio (aparece en el aviso de privacidad y en los
  // términos). Cuando se constituya la persona moral, cambiar por la razón
  // social y actualizar la fecha de ambos documentos.
  responsable: {
    nombre: 'José David Martínez Nájera',
    figura: 'persona física',
  },

  // Dominio oficial del sitio.
  url: 'https://tecnofix.tech',

  // WhatsApp en formato internacional SIN "+" ni espacios (para enlaces wa.me).
  // México: 52 + 10 dígitos. Si el chat no abriera, probar con 521 + 10 dígitos.
  whatsapp: '522201012991',

  telefono: '2201012991',
  email: 'contacto@tecnofix.tech',

  // Establecimiento físico
  direccion: {
    calle: 'Av. 25 Poniente 917-B',
    colonia: 'Col. Chula Vista',
    ciudad: 'Puebla, Pue.',
    cp: 'C.P. 72420',
  },

  // Horario de atención.
  // `abre`/`cierra`/`diasSchema` alimentan los datos estructurados para
  // Google (ver vite.config.ts); `dias`/`horas` son el texto que se muestra.
  horario: [
    {
      dias: 'Lunes a Viernes',
      horas: '10:00 – 19:00',
      abre: '10:00',
      cierra: '19:00',
      diasSchema: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
      dias: 'Sábado',
      horas: '10:00 – 17:00',
      abre: '10:00',
      cierra: '17:00',
      diasSchema: ['Saturday'],
    },
  ],

  redes: {
    facebook: 'https://www.facebook.com/tecnofix.oficial',
    instagram: 'https://www.instagram.com/_tecnofix',
    tiktok: 'https://www.tiktok.com/@_tecnofix',
  },
} as const

/** Dirección en una línea. */
export const DIRECCION_TEXTO = `${SITE.direccion.calle}, ${SITE.direccion.colonia}, ${SITE.direccion.ciudad}, ${SITE.direccion.cp}`

/** Ficha de TecnoFix en Google Maps. */
export const MAPS_URL = 'https://maps.app.goo.gl/akNqT6coQYHgwRBK7'

/**
 * Mapa embebido (iframe); no requiere API key. Se busca "TecnoFix" + la
 * dirección para que el pin caiga en la ficha del negocio y no solo en la calle.
 */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `TecnoFix ${DIRECCION_TEXTO}`,
)}&output=embed`

/** Mensaje con el que se abre el chat de WhatsApp. */
export const WHATSAPP_MENSAJE = 'Hola TecnoFix 👋, me gustaría más información.'

/** Enlace de WhatsApp con mensaje prellenado. */
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  WHATSAPP_MENSAJE,
)}`

export type Servicio = {
  area: 'Servicio técnico' | 'Desarrollo'
  titulo: string
  desc: string
  icon: 'phone' | 'desktop' | 'gamepad' | 'web' | 'mobile'
  /** Detalle para la página del área (lista de trabajos o de lo que incluye). */
  incluye: string[]
}

export const SERVICIOS: Servicio[] = [
  {
    area: 'Servicio técnico',
    titulo: 'Reparación de celulares',
    desc: 'Pantalla, batería, puerto de carga y problemas de software.',
    icon: 'phone',
    incluye: [
      'Cambio de pantalla',
      'Cambio de batería',
      'Puerto de carga',
      'Problemas de software',
    ],
  },
  {
    area: 'Servicio técnico',
    titulo: 'Reparación de computadoras',
    desc: 'Diagnóstico, mantenimiento, formateo y optimización.',
    icon: 'desktop',
    incluye: [
      'Diagnóstico de fallas',
      'Mantenimiento preventivo',
      'Formateo e instalación',
      'Optimización para que vaya más rápido',
    ],
  },
  {
    area: 'Servicio técnico',
    titulo: 'Mantenimiento de consolas',
    desc: 'Limpieza interna, cambio de pasta térmica y puesta a punto.',
    icon: 'gamepad',
    incluye: [
      'Limpieza interna',
      'Cambio de pasta térmica',
      'Puesta a punto',
    ],
  },
  {
    area: 'Desarrollo',
    titulo: 'Páginas web',
    desc: 'Sitios modernos, rápidos y a la medida de tu negocio.',
    icon: 'web',
    // TODO: validar con TecnoFix qué incluye cada proyecto.
    incluye: [
      'Diseño a la medida de tu negocio',
      'Se ve bien en celular, tablet y computadora',
      'Botón de WhatsApp y formulario de contacto',
      'Lista para aparecer en Google',
    ],
  },
  {
    area: 'Desarrollo',
    titulo: 'Apps móviles',
    desc: 'Aplicaciones para Android y iPhone hechas a tu medida.',
    icon: 'mobile',
    // TODO: validar con TecnoFix qué incluye cada proyecto.
    incluye: [
      'Apps para Android y iOS (iPhone)',
      'Diseño de pantallas pensado para tus usuarios',
      'Desarrollo a partir de tu idea o proceso actual',
    ],
  },
]

/** Garantía por tipo de reparación (lo general; casos especiales se indican al cotizar). */
export const GARANTIAS: { concepto: string; tiempo: string }[] = [
  { concepto: 'Baterías', tiempo: '1 mes' },
  { concepto: 'Reparación de cortos', tiempo: '1 mes' },
  { concepto: 'Pantallas (displays)', tiempo: '15 días' },
  { concepto: 'Demás reparaciones', tiempo: '15 días' },
]

/** Aviso sobre marcas y refacciones. */
export const NOTA_MARCAS =
  'Trabajamos con todas las marcas. Las refacciones están sujetas a disponibilidad.'
