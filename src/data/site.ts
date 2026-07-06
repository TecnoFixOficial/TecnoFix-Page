/**
 * Datos del sitio (contacto, redes y servicios).
 *
 * TODO: reemplazar los marcadores por los datos reales de TecnoFix.
 */

export const SITE = {
  nombre: 'TecnoFix',

  // WhatsApp en formato internacional SIN "+" ni espacios (para enlaces wa.me).
  // México: 52 + 10 dígitos. Si el chat no abriera, probar con 521 + 10 dígitos.
  whatsapp: '522201012991',

  telefono: '2201012991',
  email: 'contacto@tecnofix.tech',

  // Local físico
  direccion: {
    calle: 'Av. 25 Poniente 917-B',
    colonia: 'Col. Chula Vista',
    ciudad: 'Puebla, Pue.',
    cp: 'C.P. 72420',
  },

  // Horario de atención
  horario: [
    { dias: 'Lunes a Viernes', horas: '10:00 – 19:00' },
    { dias: 'Sábado', horas: '10:00 – 17:00' },
  ],

  redes: {
    facebook: 'https://www.facebook.com/tecnofix.oficial',
    instagram: 'https://www.instagram.com/_tecnofix',
    tiktok: 'https://www.tiktok.com/@_tecnofix',
  },
} as const

/** Dirección en una línea. */
export const DIRECCION_TEXTO = `${SITE.direccion.calle}, ${SITE.direccion.colonia}, ${SITE.direccion.ciudad}, ${SITE.direccion.cp}`

/** Enlace a Google Maps con la dirección. */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `TecnoFix ${DIRECCION_TEXTO}`,
)}`

/** Enlace de WhatsApp con mensaje prellenado. */
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  'Hola TecnoFix 👋, me gustaría más información.',
)}`

export type Servicio = {
  area: 'Servicio técnico' | 'Desarrollo'
  titulo: string
  desc: string
  icon: 'phone' | 'desktop' | 'gamepad' | 'web' | 'mobile'
}

export const SERVICIOS: Servicio[] = [
  {
    area: 'Servicio técnico',
    titulo: 'Reparación de celulares',
    desc: 'Pantalla, batería, puerto de carga y problemas de software.',
    icon: 'phone',
  },
  {
    area: 'Servicio técnico',
    titulo: 'Reparación de computadoras',
    desc: 'Diagnóstico, mantenimiento, formateo y optimización.',
    icon: 'desktop',
  },
  {
    area: 'Servicio técnico',
    titulo: 'Mantenimiento de consolas',
    desc: 'Limpieza interna, cambio de pasta térmica y puesta a punto.',
    icon: 'gamepad',
  },
  {
    area: 'Desarrollo',
    titulo: 'Páginas web',
    desc: 'Sitios modernos, rápidos y a la medida de tu negocio.',
    icon: 'web',
  },
  {
    area: 'Desarrollo',
    titulo: 'Apps móviles',
    desc: 'Aplicaciones para Android hechas a tu medida.',
    icon: 'mobile',
  },
]
