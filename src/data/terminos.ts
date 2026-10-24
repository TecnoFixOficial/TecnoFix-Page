/**
 * Contenido de los Términos y condiciones.
 *
 * ✏️ Para modificarlo: edita SOLO el texto de este archivo y la fecha.
 * Los plazos y montos están en CONDICIONES (arriba) y la tabla de garantías
 * sale de GARANTIAS en src/data/site.ts, la misma de Servicio técnico.
 *
 * ⚠️ Texto base redactado para la operación real de TecnoFix. Conviene que
 * lo revise un abogado antes de publicarlo.
 */
import { SITE, DIRECCION_TEXTO, GARANTIAS } from '@/data/site'
import type { DocumentoLegal } from '@/data/legal'

/** Plazos y montos del taller. */
export const CONDICIONES = {
  anticipo: '50%',
  /** Días hábiles para recoger el equipo desde el aviso de que está listo. */
  diasParaRecoger: 7,
  /** Plazo menor en algunos trabajos (ej. corto de laptop). */
  diasParaRecogerCorto: 5,
  /** Desde el aviso de listo, cuándo se considera abandonado. */
  abandono: '1 mes',
  /** Cargo mensual de resguardo para equipos abandonados. */
  resguardoMensual: '$200 MXN',
  /** Tiempo de abandono tras el cual el equipo va a reciclaje. */
  reciclaje: '6 meses',
  formasDePago: 'efectivo, tarjeta y transferencia',
} as const

const c = CONDICIONES

export const TERMINOS: DocumentoLegal = {
  actualizacion: 'octubre de 2026',

  esencial: [
    'El diagnóstico es gratis y no reparamos nada sin tu autorización.',
    `Todo trabajo lleva ${c.anticipo} de anticipo; el resto se paga al entregar.`,
    `Tienes ${c.diasParaRecoger} días hábiles para recoger tu equipo desde que te avisamos que está listo.`,
    'Para la garantía trae tu nota original. Los equipos mojados no tienen garantía.',
  ],

  secciones: [
    {
      id: 'alcance',
      titulo: 'Quiénes somos y qué cubren estos términos',
      bloques: [
        `${SITE.nombre} es el nombre comercial con el que opera ${SITE.responsable.nombre}, ${SITE.responsable.figura}, con domicilio en ${DIRECCION_TEXTO}.`,
        'Estos términos aplican al uso de tecnofix.tech y a los servicios de reparación y desarrollo que contrates con nosotros. Al usar el sitio o dejarnos un equipo, los aceptas.',
        'Lo que acordemos por escrito en tu nota de servicio o en tu cotización, como el precio, los tiempos o la garantía de tu caso, tiene prioridad sobre estos términos generales.',
      ],
    },
    {
      id: 'sitio',
      titulo: 'Uso del sitio',
      bloques: [
        {
          lista: [
            'El sitio es informativo. Los servicios y tiempos que aparecen pueden cambiar; lo que vale es tu cotización.',
            `El logo, los textos, las imágenes y el diseño del sitio son de ${SITE.nombre}. No los copies ni los uses sin nuestro permiso.`,
            'No uses el formulario para enviar spam, contenido ilegal o datos de otra persona sin su permiso.',
            'Los enlaces a WhatsApp, redes sociales y Google Maps llevan a servicios de terceros, con sus propias reglas.',
            'Procuramos que el sitio esté siempre disponible, pero puede haber pausas por mantenimiento o por fallas ajenas a nosotros.',
          ],
        },
      ],
    },
    {
      id: 'recepcion',
      titulo: 'Recepción y diagnóstico',
      bloques: [
        'Al recibir tu equipo te damos una nota de servicio con tu nombre y teléfono, el equipo, la falla que reportas y la contraseña o patrón de desbloqueo. Guárdala: la necesitas para recoger tu equipo y para hacer válida la garantía.',
        'El diagnóstico es gratis. Antes de reparar te decimos qué tiene tu equipo, cuánto cuesta y cuánto tarda. No hacemos ninguna reparación sin tu autorización.',
        'La contraseña la usamos solo para el servicio y para probar las piezas, por ejemplo que la pantalla o la batería funcionen. Lo que pasa con tu información está en el [aviso de privacidad](/aviso-de-privacidad#contenido-equipo).',
        'Si tu información es importante, respáldala antes de dejarnos el equipo, cuando sea posible. Algunas fallas dañan el almacenamiento por sí solas y no siempre se puede recuperar lo que había.',
      ],
    },
    {
      id: 'pagos',
      titulo: 'Anticipo, pagos y cancelación',
      bloques: [
        `Todo trabajo requiere un anticipo del ${c.anticipo} al autorizarlo; con ese anticipo pedimos la pieza. El resto se paga al entregar.`,
        `Aceptamos ${c.formasDePago}. No recibimos equipos como parte del pago.`,
        'Una vez dado el anticipo, la reparación no se puede cancelar, salvo en estos casos:',
        {
          lista: [
            'Si todavía no pedimos la pieza, te devolvemos el anticipo completo.',
            'Si al revisarlo resulta que el equipo no tiene reparación por una causa técnica, te devolvemos el anticipo.',
          ],
        },
        'Las refacciones están sujetas a disponibilidad. Si una pieza tarda más de lo previsto, te avisamos.',
      ],
    },
    {
      id: 'entrega',
      titulo: 'Entrega y equipos no recogidos',
      bloques: [
        'Cuando tu equipo esté listo te avisamos al teléfono de tu nota. Para recogerlo, trae tu nota de servicio.',
        {
          pasos: [
            {
              cuando: 'Te avisamos',
              que: 'Tu equipo está listo y empieza a contar el plazo.',
            },
            {
              cuando: `${c.diasParaRecoger} días hábiles`,
              que: `Plazo para recogerlo. En algunos trabajos, como un corto de laptop, son ${c.diasParaRecogerCorto} días hábiles y se indica en tu nota.`,
            },
            {
              cuando: c.abandono,
              que: `Hasta aquí no se cobra nada. Después el equipo se considera abandonado y se cobran ${c.resguardoMensual} por cada mes de resguardo.`,
            },
            {
              cuando: `${c.reciclaje} después`,
              que: 'Si nadie lo reclama, el equipo se manda a reciclaje y ya no se puede recuperar.',
            },
          ],
        },
        'Antes de mandarlo a reciclaje intentaremos contactarte al teléfono de tu nota. Para recoger un equipo abandonado se paga el saldo pendiente más los meses de resguardo.',
      ],
    },
    {
      id: 'garantia',
      titulo: 'Garantía',
      bloques: [
        'La garantía cuenta desde el día en que recoges tu equipo. Estos son los plazos generales; al cotizar te confirmamos el de tu caso:',
        {
          tabla: GARANTIAS.map((g) => ({ concepto: g.concepto, valor: g.tiempo })),
        },
        'Para hacer válida la garantía trae tu nota original.',
        'La garantía cubre solo la pieza que cambiamos o el trabajo que hicimos. Si la reparación afectó otra parte del equipo y se puede comprobar, también la cubrimos.',
        'La garantía se pierde por:',
        {
          lista: [
            'Golpes o caídas.',
            'Humedad o contacto con líquidos.',
            'Sellos de garantía rotos.',
            'Mal uso del equipo.',
            'Que otra persona abra o manipule el equipo después de nuestra reparación.',
          ],
        },
      ],
    },
    {
      id: 'mojados-manipulados',
      titulo: 'Equipos mojados o manipulados',
      bloques: [
        'Equipos mojados: no tienen garantía, aunque la pieza que cambiemos esté en buen estado. Una limpieza quita la humedad, pero no asegura que el equipo vuelva a funcionar ni que siga funcionando.',
        'Equipos que otra persona ya abrió o reparó: la garantía cubre solo la pieza que cambiamos. No aplica si después se reporta que la reparación afectó otra función del equipo.',
        'Si al abrir tu equipo encontramos algo anormal, te avisamos antes de continuar.',
      ],
    },
    {
      id: 'desarrollo',
      titulo: 'Páginas web y apps',
      bloques: [
        {
          lista: [
            'Cada proyecto lleva una cotización personalizada con lo que incluye y los tiempos de entrega.',
            `Se paga ${c.anticipo} de anticipo para empezar y el resto al entregar.`,
            'Las cuentas del proyecto, como el dominio, el hosting, GitHub o Vercel, van a tu nombre y son tuyas. El costo de esos servicios, por ejemplo la renovación del dominio, lo pagas directamente.',
            'Al terminar de pagar, el sitio o la app y su código son tuyos. No nos quedamos con tus accesos ni con tus datos; te recomendamos cambiar las contraseñas al recibir el proyecto.',
            'Tú nos das los textos, fotos y logos del proyecto, y te corresponde tener permiso para usarlos.',
            'Los cambios o funciones que no estén en la cotización se cotizan aparte.',
          ],
        },
      ],
    },
    {
      id: 'responsabilidad',
      titulo: 'Límites de responsabilidad',
      bloques: [
        'No respondemos por fallas que no tengan relación con el trabajo que hicimos, ni por retrasos causados por terceros, como proveedores de piezas o paqueterías, o por causas de fuerza mayor.',
      ],
    },
    {
      id: 'datos',
      titulo: 'Tus datos personales',
      bloques: [
        'Cómo usamos y protegemos tus datos está en el [aviso de privacidad](/aviso-de-privacidad).',
      ],
    },
    {
      id: 'cambios',
      titulo: 'Cambios a estos términos',
      bloques: [
        'Podemos actualizar estos términos. La versión vigente es la publicada en esta página, con su fecha. Un servicio ya contratado se rige por los términos que estaban vigentes cuando lo contrataste.',
      ],
    },
    {
      id: 'ley',
      titulo: 'Ley aplicable y quejas',
      bloques: [
        `Si algo no salió como esperabas, escríbenos a ${SITE.email} o búscanos en el establecimiento. Preferimos resolverlo directamente contigo.`,
        'También puedes acudir a la Procuraduría Federal del Consumidor (Profeco).',
        'Estos términos se rigen por las leyes de México. Para cualquier controversia, las partes se someten a los tribunales de la ciudad de Puebla.',
      ],
    },
  ],
}
