/**
 * Propuesta F — "Objeto característico".
 * Fondo blanco con el texto a la izquierda y, a la derecha, un objeto real
 * de cada tema hecho con HTML (texto de verdad, no imagen):
 *   - técnico:    la etiqueta que se amarra al equipo en el taller
 *   - desarrollo: un editor con el código de una página
 *   - contacto:   el chat de WhatsApp con el mensaje con que se abre
 *   - legal / terminos: la hoja del documento con su fecha de actualización
 * En celular el objeto se oculta para que la cabecera no crezca de más.
 */
import type { ReactNode } from 'react'
import { BrandMark } from '@/components/BrandMark'
import { CheckIcon } from '@/components/icons'
import { SITE, WHATSAPP_MENSAJE } from '@/data/site'
import { PRIVACIDAD } from '@/data/privacidad'
import { TERMINOS } from '@/data/terminos'
import { Migas, type CabeceraProps, type Tema } from './comun'

/** Etiqueta de reparación colgada con su hilo. */
function Etiqueta() {
  const campos = [
    ['Equipo', 'Celular'],
    ['Falla', 'No carga'],
    ['Recibido', 'Hoy, 11:30'],
  ]
  return (
    <div className="relative -rotate-3">
      {/* Hilo */}
      <div className="absolute -top-16 left-10 h-[4.75rem] w-px bg-brand-ink/30" />
      <div className="relative w-72 rounded-md border border-brand-ink/15 bg-brand-cream px-6 pb-6 pt-9 font-sans shadow-[0_8px_0_-4px_rgb(27_26_64_/_0.08)]">
        {/* Ojal */}
        <div className="absolute left-8 top-3 h-4 w-4 rounded-full border-2 border-brand-ink/30 bg-white" />
        <div className="flex items-center justify-between">
          <BrandMark className="h-7 w-auto" />
          <span className="text-sm font-bold text-brand-ink/60">Folio 0427</span>
        </div>
        <dl className="mt-5 space-y-2.5">
          {campos.map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-dashed border-brand-ink/20 pb-2">
              <dt className="text-sm text-brand-ink/60">{k}</dt>
              <dd className="font-bold text-brand-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 inline-block rounded-full bg-brand-purple px-3 py-1 text-xs font-bold text-white">
          En diagnóstico
        </p>
      </div>
    </div>
  )
}

/** Editor de código con una página sencilla. */
function Editor() {
  const k = 'text-brand-cyan' // etiquetas
  const a = 'text-white/60' // atributos y textos
  return (
    <div className="w-[26rem] overflow-hidden rounded-lg bg-brand-ink font-mono text-[13px] leading-6">
      <div className="border-b border-white/10 px-4 py-2 font-sans text-xs font-semibold text-white/70">
        TuNegocio.tsx
      </div>
      <pre className="px-4 py-4 text-white">
        <code>
          <span className={k}>{'<Pagina>'}</span>
          {'\n  '}
          <span className={k}>{'<Encabezado'}</span> <span className={a}>logo</span>
          <span className={k}>{' />'}</span>
          {'\n  '}
          <span className={k}>{'<Servicios'}</span> <span className={a}>{'lista={tusServicios}'}</span>
          <span className={k}>{' />'}</span>
          {'\n  '}
          <span className={k}>{'<Ubicacion'}</span> <span className={a}>mapa</span>
          <span className={k}>{' />'}</span>
          {'\n  '}
          <span className={k}>{'<BotonWhatsApp'}</span>
          <span className={k}>{' />'}</span>
          {'\n'}
          <span className={k}>{'</Pagina>'}</span>
        </code>
      </pre>
    </div>
  )
}

/** Conversación de WhatsApp: el mensaje con que se abre el chat. */
function Chat() {
  return (
    <div className="w-80 rounded-xl border border-brand-ink/10 bg-brand-cream p-4 font-sans">
      <div className="flex items-center gap-3 border-b border-brand-ink/10 pb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <BrandMark className="h-5 w-auto" />
        </div>
        <div>
          <p className="text-sm font-bold text-brand-ink">{SITE.nombre}</p>
          <p className="text-xs text-brand-ink/60">Responde en horario de atención</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-brand-purple px-3 py-2 text-sm text-white">
          {WHATSAPP_MENSAJE}
        </p>
        <p className="max-w-[85%] rounded-lg rounded-bl-sm bg-white px-3 py-2 text-sm text-brand-ink">
          ¡Hola! Claro, cuéntanos qué necesitas.
        </p>
      </div>
    </div>
  )
}

/** Hoja de un documento legal con sello. */
function Hoja({
  titulo,
  fecha,
  sello,
}: {
  titulo: string
  fecha: string
  sello: [string, string]
}) {
  return (
    <div className="relative w-72 rotate-2 rounded-sm border border-brand-ink/15 bg-white px-7 py-8 font-sans">
      <p className="font-display text-xl uppercase text-brand-purple">{titulo}</p>
      <p className="mt-1 text-xs text-brand-ink/60">Actualizado: {fecha}</p>
      <div className="mt-5 space-y-2.5" aria-hidden>
        {['w-full', 'w-11/12', 'w-full', 'w-3/4', 'w-full', 'w-2/3'].map((w, i) => (
          <div key={i} className={`h-1.5 rounded-full bg-brand-ink/10 ${w}`} />
        ))}
      </div>
      {/* Sello */}
      <div className="absolute -bottom-5 -right-5 flex h-20 w-20 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-brand-purple bg-white text-brand-purple">
        <CheckIcon className="h-6 w-6" />
        <span className="text-[10px] font-extrabold leading-tight">{sello[0]}</span>
        <span className="text-[10px] font-extrabold leading-tight">{sello[1]}</span>
      </div>
    </div>
  )
}

const OBJETOS: Record<Tema, ReactNode> = {
  tecnico: <Etiqueta />,
  desarrollo: <Editor />,
  contacto: <Chat />,
  legal: (
    <Hoja
      titulo="Aviso de privacidad"
      fecha={PRIVACIDAD.actualizacion}
      sello={['Datos', 'protegidos']}
    />
  ),
  terminos: (
    <Hoja
      titulo="Términos y condiciones"
      fecha={TERMINOS.actualizacion}
      sello={['Reglas', 'claras']}
    />
  ),
}

export function Objeto({ tema, seccion, titulo, descripcion }: CabeceraProps) {
  return (
    <section className="border-b border-brand-ink/10 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1fr_auto]">
        <div>
          <Migas seccion={seccion} />
          <h1 className="mt-5 max-w-xl font-display text-5xl uppercase leading-[0.95] text-brand-purple sm:text-6xl">
            {titulo}
          </h1>
          <p className="mt-5 max-w-lg font-sans text-lg text-brand-ink/70">
            {descripcion}
          </p>
        </div>
        <div aria-hidden className="hidden justify-center pr-6 lg:flex">
          {OBJETOS[tema]}
        </div>
      </div>
    </section>
  )
}
