/**
 * Preguntas frecuentes de la página de inicio.
 *
 * Para agregar una pregunta, basta con añadir un objeto a la lista; la
 * sección se arma sola. El orden de la lista es el orden en pantalla.
 *
 * TODO: validar las respuestas con TecnoFix antes de publicar.
 */

export type Pregunta = {
  pregunta: string
  respuesta: string
}

export const FAQ: Pregunta[] = [
  {
    pregunta: '¿Necesito hacer cita para llevar mi equipo?',
    respuesta:
      'No. Puedes venir directamente en nuestro horario de atención. Si prefieres, escríbenos antes por WhatsApp y te decimos si podemos atenderte ese mismo día.',
  },
  {
    pregunta: '¿Me cotizan antes de reparar?',
    respuesta:
      'Sí. Primero revisamos el equipo, te explicamos qué tiene y cuánto costaría. No hacemos ninguna reparación sin tu autorización.',
  },
  {
    pregunta: '¿Qué garantía tienen las reparaciones?',
    respuesta:
      'En general 15 días. Baterías y reparación de cortos tienen 1 mes, y pantallas 15 días. Al cotizar te confirmamos la garantía de tu caso.',
  },
  {
    pregunta: '¿Reparan todas las marcas?',
    respuesta:
      'Sí, trabajamos con todas las marcas. Las refacciones están sujetas a disponibilidad; si alguna no está a la mano, te decimos el tiempo para conseguirla.',
  },
  {
    pregunta: '¿Cuánto tarda una reparación?',
    respuesta:
      'Depende del equipo y de la falla. Después del diagnóstico te damos un tiempo estimado y te avisamos en cuanto esté listo.',
  },
  {
    pregunta: '¿Hacen páginas web para negocios pequeños?',
    respuesta:
      'Sí. Hacemos sitios a la medida de cada negocio, desde una página sencilla para que te encuentren en internet hasta proyectos más completos.',
  },
  {
    pregunta: '¿Cómo empiezo un proyecto de software?',
    respuesta:
      'Escríbenos por WhatsApp o desde la página de contacto contándonos tu idea. Platicamos lo que necesitas y te enviamos una cotización personalizada según tus preferencias.',
  },
]
