/**
 * Contenido del Aviso de Privacidad (LFPDPPP 2025).
 *
 * ✏️ Para modificarlo: edita SOLO el texto de este archivo y la fecha.
 * La sección de cookies se arma sola según src/data/rastreo.ts.
 *
 * ⚠️ Texto base redactado para la operación real de TecnoFix. Conviene que
 * lo revise un abogado antes de publicarlo.
 */
import { SITE, DIRECCION_TEXTO } from '@/data/site'
import { HAY_RASTREO, RASTREO_ACTIVO } from '@/data/rastreo'
import type { Bloque, DocumentoLegal } from '@/data/legal'

const telefono = SITE.telefono.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

const mapa =
  'El mapa de Google en la página de inicio es un servicio externo: al cargarse, Google puede guardar sus propias cookies. Puedes borrarlas o bloquearlas desde la configuración de tu navegador.'

const cookies: Bloque[] = HAY_RASTREO
  ? [
      'Usamos estas herramientas solo si las aceptas en el aviso que aparece al entrar al sitio:',
      {
        lista: RASTREO_ACTIVO.map(
          (h) =>
            `${h.nombre} (${h.proveedor}): la usamos para ${h.para}. Recaba ${h.datos}. [Política de privacidad de ${h.proveedor}](${h.politica}).`,
        ),
      },
      'Puedes cambiar tu decisión cuando quieras:',
      { boton: 'preferencias-cookies' },
      mapa,
    ]
  : [
      'Este sitio no usa cookies propias ni herramientas de analítica o publicidad.',
      mapa,
    ]

export const PRIVACIDAD: DocumentoLegal = {
  actualizacion: 'octubre de 2026',

  esencial: [
    'Usamos tus datos solo para atenderte: cotizar, reparar, avisarte y entregar.',
    'No vendemos ni compartimos tus datos, y no te mandamos publicidad.',
    'No revisamos ni copiamos la información de tu equipo. Los respaldos se borran al entregarlo.',
    `Puedes pedir ver, corregir o borrar tus datos en ${SITE.email}.`,
  ],

  secciones: [
    {
      id: 'responsable',
      titulo: 'Quién es responsable de tus datos',
      bloques: [
        `${SITE.responsable.nombre}, ${SITE.responsable.figura} que opera con el nombre comercial ${SITE.nombre}, con domicilio en ${DIRECCION_TEXTO}, es responsable de tus datos personales y de cómo se usan.`,
        `Puedes contactarnos en ${SITE.email}, al ${telefono} o en el establecimiento, en horario de atención.`,
      ],
    },
    {
      id: 'datos',
      titulo: 'Qué datos recabamos',
      bloques: [
        'Solo pedimos lo necesario para el servicio. Según cómo nos contactes y lo que necesites, podemos recabar:',
        {
          lista: [
            'Identificación y contacto: tu nombre, tu teléfono y, si nos escribes por el sitio o por correo, tu correo electrónico.',
            'Lo que nos cuentas: tus mensajes y las fotos o videos que nos mandes por WhatsApp, redes sociales o el formulario para revisar una falla.',
            'Datos de tu equipo: marca, modelo, la falla que reportas y la contraseña o patrón de desbloqueo, que se anotan en tu nota de servicio.',
            'Accesos para proyectos de desarrollo: si nos encargas una página o una app, los usuarios y contraseñas de las cuentas que nos compartas, como dominio, hosting, GitHub o Vercel.',
            'Datos de pago: el monto, la forma de pago y, en transferencias, el comprobante. Los pagos con tarjeta los procesa la terminal bancaria; nunca vemos ni guardamos el número completo de tu tarjeta.',
            'Datos de navegación: cuando visitas el sitio, el servicio de alojamiento registra de forma automática tu dirección IP, tu navegador y la página que consultas. Lo hace por seguridad y para que el sitio funcione.',
          ],
        },
        'No pedimos datos personales sensibles, como los de salud, creencias u origen étnico.',
        'Si eres menor de edad, tu madre, padre o tutor debe darnos los datos y autorizar el servicio.',
      ],
    },
    {
      id: 'contenido-equipo',
      titulo: 'La información dentro de tu equipo',
      bloques: [
        'Tus fotos, mensajes, documentos y cuentas se quedan como están: no los revisamos, no los copiamos y no los usamos para nada.',
        'Algunos trabajos sí requieren entrar al equipo. Por ejemplo, probar que una pantalla o una batería funcionen, o pasar tu información a otro equipo o a un respaldo cuando tú nos lo pides. En esos casos hacemos solo lo necesario para ese trabajo.',
        'No nos quedamos con copias. Cualquier respaldo o archivo temporal se elimina en cuanto recoges tu equipo.',
        'Te recomendamos cambiar la contraseña de tu equipo después de recibirlo.',
      ],
    },
    {
      id: 'finalidades',
      titulo: 'Para qué usamos tus datos',
      bloques: [
        'Usamos tus datos solo para:',
        {
          lista: [
            'Responder tus mensajes y darte cotizaciones.',
            'Recibir, diagnosticar y reparar tu equipo, y probar las piezas que cambiamos.',
            'Avisarte cuando tu equipo esté listo y recordarte los plazos para recogerlo.',
            'Desarrollar, publicar y entregar tu página o app.',
            'Registrar anticipos y pagos.',
            'Atender garantías y aclaraciones.',
            'Cumplir con las obligaciones que nos marca la ley.',
          ],
        },
        'Todas estas finalidades son necesarias para darte el servicio. No usamos tus datos para publicidad, no te enviamos promociones y no hacemos perfiles sobre ti.',
        'Si algún día quisiéramos usarlos para algo distinto, primero actualizaríamos este aviso y te pediríamos permiso.',
      ],
    },
    {
      id: 'compartir',
      titulo: 'Con quién los compartimos',
      bloques: [
        'No vendemos, rentamos ni compartimos tus datos con otras empresas para sus propios fines.',
        'Para que el sitio y la comunicación funcionen usamos estos proveedores. Cada uno trata algunos datos solo para darnos su servicio:',
        {
          lista: [
            'Vercel Inc.: aloja el sitio y envía los mensajes del formulario. Sus servidores están fuera de México.',
            'Hostinger: es nuestro servicio de correo electrónico, donde recibimos tus mensajes.',
            'Google: muestra el mapa del sitio y las tipografías. Al cargarlos, Google recibe tu dirección IP.',
          ],
        },
        'Si decides escribirnos por WhatsApp, Facebook, Instagram o TikTok, esas plataformas tratan tus mensajes según sus propias políticas de privacidad.',
        'Solo entregaríamos tus datos a una autoridad cuando una ley o una orden lo exija.',
      ],
    },
    {
      id: 'conservacion',
      titulo: 'Cuánto tiempo los guardamos',
      bloques: [
        {
          lista: [
            'Notas de servicio, con la contraseña de tu equipo: mientras dura la garantía, hasta 1 mes después de la entrega. Después se destruyen.',
            'Respaldos y archivos temporales: se eliminan cuando recoges tu equipo.',
            'Accesos a cuentas de proyectos: se eliminan al entregar el proyecto. Te recomendamos cambiar esas contraseñas.',
            'Mensajes y correos: el tiempo necesario para atenderte y dar seguimiento a tu servicio.',
            'Registros de pago: el tiempo que exigen las leyes fiscales.',
          ],
        },
      ],
    },
    {
      id: 'seguridad',
      titulo: 'Cómo los protegemos',
      bloques: [
        'Las notas de servicio se guardan dentro del establecimiento y solo las consulta quien atiende tu equipo. El correo y las cuentas del negocio tienen contraseña, y el sitio usa conexión cifrada (HTTPS).',
        'Si alguna vez ocurriera un incidente que afecte tus datos, te avisaríamos para que puedas protegerte.',
      ],
    },
    {
      id: 'cookies',
      titulo: 'Cookies y analítica',
      bloques: cookies,
    },
    {
      id: 'derechos',
      titulo: 'Tus derechos ARCO',
      bloques: [
        'Sobre tus datos personales tienes derecho a:',
        {
          lista: [
            'Acceso: saber qué datos tuyos tenemos y cómo los usamos.',
            'Rectificación: corregirlos si están mal o incompletos.',
            'Cancelación: pedir que los eliminemos.',
            'Oposición: negarte a que los usemos para un fin concreto.',
          ],
        },
        `Para ejercerlos, escríbenos a ${SITE.email} o acude al establecimiento con una solicitud que incluya:`,
        {
          lista: [
            'Tu nombre y un medio para responderte.',
            'Copia de una identificación oficial. Si alguien hace el trámite por ti, también el documento que acredite que te representa.',
            'Qué derecho quieres ejercer y sobre qué datos.',
            'Cualquier documento que nos ayude a ubicarlos, como tu nota de servicio.',
          ],
        },
        'Te respondemos en un máximo de 20 días hábiles. Si tu solicitud procede, la aplicamos en los 15 días hábiles siguientes. El trámite es gratuito; solo cobraríamos el costo de copias o envío, si los pides.',
        'Algunos datos, como los registros de pago, la ley nos obliga a conservarlos por un tiempo. En ese caso te lo explicaremos en la respuesta.',
      ],
    },
    {
      id: 'revocar',
      titulo: 'Retirar tu consentimiento o limitar el uso',
      bloques: [
        'Puedes retirar el permiso que nos diste para usar tus datos, o pedirnos que limitemos su uso, con el mismo procedimiento de los derechos ARCO.',
        'Si lo retiras mientras tu equipo o tu proyecto está en proceso, quizá no podamos terminar el servicio, porque necesitamos tus datos para avisarte y entregarlo.',
      ],
    },
    {
      id: 'consentimiento',
      titulo: 'Tu consentimiento',
      bloques: [
        'Al darnos tus datos en el establecimiento, por mensaje o en el formulario del sitio, aceptas que los usemos como se describe en este aviso. Si no estás de acuerdo, no nos los envíes.',
      ],
    },
    {
      id: 'autoridad',
      titulo: 'Si crees que no respetamos tus derechos',
      bloques: [
        'Puedes acudir a la Secretaría Anticorrupción y Buen Gobierno, la autoridad encargada de proteger los datos personales en México.',
      ],
    },
    {
      id: 'cambios',
      titulo: 'Cambios a este aviso',
      bloques: [
        'Si cambiamos este aviso, publicaremos la nueva versión en esta página con su fecha de actualización. Si el cambio afecta cómo usamos tus datos, también te avisaremos por el medio en que nos contactaste, cuando sea posible.',
      ],
    },
  ],
}
