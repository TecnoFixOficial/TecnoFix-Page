/**
 * Propuesta F2 — "Objeto característico", versión 2.
 * Mismos objetos que F, más trabajados y apoyados sobre un panel crema:
 *   - técnico:    etiqueta con esquinas cortadas, ojal reforzado, hilo y sello
 *   - desarrollo: editor con números de línea y la línea activa resaltada
 *   - contacto:   chat con hora, palomitas de leído y barra para escribir
 *   - legal:      hojas encimadas con línea de firma y sello
 * Se ve desde tablet (debajo del texto) y en escritorio va a la derecha.
 */
import type { ReactNode } from 'react'
import { BrandMark } from '@/components/BrandMark'
import { CheckIcon, WhatsAppIcon } from '@/components/icons'
import { SITE, WHATSAPP_MENSAJE } from '@/data/site'
import { PRIVACIDAD_ACTUALIZACION } from '@/data/privacidad'
import { Migas, type CabeceraProps, type Tema } from './comun'

/** Etiqueta de reparación con forma de etiqueta de envío. */
function Etiqueta() {
  const campos = [
    ['Equipo', 'Celular'],
    ['Falla', 'No carga'],
    ['Recibido', 'Hoy, 11:30'],
  ]
  return (
    <div className="relative -mt-10 pt-11">
      {/* Hilo que sale del ojal */}
      <svg
        viewBox="0 0 60 60"
        fill="none"
        className="absolute left-1/2 top-0 h-14 w-14 -translate-x-[40%]"
      >
        <path
          d="M30 58C16 42 44 26 26 2"
          className="stroke-brand-ink/40"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="relative w-60 -rotate-[4deg]">
        <div className="bg-white px-5 pb-5 pt-11 font-sans [clip-path:polygon(18%_0,82%_0,100%_11%,100%_100%,0_100%,0_11%)]">
          <div className="flex items-center justify-between">
            <BrandMark className="h-6 w-auto" />
            <span className="text-xs font-bold text-brand-ink/60">Folio 0427</span>
          </div>
          <dl className="mt-4 space-y-2">
            {campos.map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between border-b border-dashed border-brand-ink/20 pb-1.5"
              >
                <dt className="text-xs text-brand-ink/60">{k}</dt>
                <dd className="text-sm font-bold text-brand-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 h-6" />
        </div>
        {/* Ojal con refuerzo */}
        <div className="absolute left-1/2 top-3.5 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-cream ring-4 ring-brand-cyan/50" />
        {/* Sello */}
        <div className="absolute bottom-4 right-4 -rotate-[8deg] rounded-md border-2 border-brand-purple px-2 py-0.5 font-sans text-xs font-extrabold text-brand-purple">
          En diagnóstico
        </div>
      </div>
    </div>
  )
}

/** Editor de código con números de línea. */
function Editor() {
  const k = 'text-brand-cyan' // etiquetas
  const a = 'text-white/60' // atributos
  const lineas: ReactNode[] = [
    <span className={k}>{'<Pagina>'}</span>,
    <>
      {'  '}
      <span className={k}>{'<Encabezado'}</span> <span className={a}>logo</span>
      <span className={k}>{' />'}</span>
    </>,
    <>
      {'  '}
      <span className={k}>{'<Servicios'}</span>{' '}
      <span className={a}>{'lista={tusServicios}'}</span>
      <span className={k}>{' />'}</span>
    </>,
    <>
      {'  '}
      <span className={k}>{'<BotonWhatsApp'}</span>
      <span className={k}>{' />'}</span>
    </>,
    <>
      {'  '}
      <span className={k}>{'<Ubicacion'}</span> <span className={a}>mapa</span>
      <span className={k}>{' />'}</span>
    </>,
    <span className={k}>{'</Pagina>'}</span>,
  ]
  const activa = 3 // línea resaltada (índice)
  return (
    <div className="w-[25rem] overflow-hidden rounded-lg bg-brand-ink font-mono text-[13px] leading-7">
      <div className="flex border-b border-white/10 font-sans text-xs font-semibold">
        <span className="border-b-2 border-brand-cyan px-4 py-2 text-white">TuNegocio.tsx</span>
        <span className="px-4 py-2 text-white/40">estilos.css</span>
      </div>
      <pre className="py-3 text-white">
        <code>
          {lineas.map((l, i) => (
            <div key={i} className={`flex pr-4 ${i === activa ? 'bg-white/[0.06]' : ''}`}>
              <span className="w-10 shrink-0 select-none pr-3 text-right text-white/30">
                {i + 1}
              </span>
              <span className="whitespace-pre">{l}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

/** Palomitas de "leído". */
function Leido() {
  return (
    <span className="relative inline-flex h-3 w-4 text-brand-cyan" aria-hidden>
      <CheckIcon className="absolute left-0 h-3 w-3" />
      <CheckIcon className="absolute left-1 h-3 w-3" />
    </span>
  )
}

/** Chat de WhatsApp con el mensaje con que se abre. */
function Chat() {
  return (
    <div className="w-80 overflow-hidden rounded-xl bg-white font-sans">
      <div className="flex items-center gap-3 bg-brand-purple px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <BrandMark className="h-5 w-auto" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">{SITE.nombre}</p>
          <p className="text-xs text-white/70">Responde en horario de atención</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-brand-cream px-4 py-5">
        <div className="ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-brand-purple px-3 py-2 text-sm text-white">
          {WHATSAPP_MENSAJE}
          <span className="ml-2 inline-flex items-center gap-1 align-bottom text-[10px] text-white/60">
            11:30 <Leido />
          </span>
        </div>
        <div className="max-w-[85%] rounded-lg rounded-bl-sm bg-white px-3 py-2 text-sm text-brand-ink">
          ¡Hola! Claro, cuéntanos qué necesitas.
          <span className="ml-2 align-bottom text-[10px] text-brand-ink/50">11:32</span>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-brand-ink/10 px-3 py-2.5">
        <div className="flex-1 rounded-full bg-brand-cream px-3 py-1.5 text-sm text-brand-ink/50">
          Escribe un mensaje
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple text-white">
          <WhatsAppIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

/** Hojas del aviso encimadas, con firma y sello. */
function Hojas() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rotate-6 rounded-sm border border-brand-ink/10 bg-white" />
      <div className="absolute inset-0 -rotate-3 rounded-sm border border-brand-ink/10 bg-white" />
      <div className="relative w-72 rotate-1 rounded-sm border border-brand-ink/15 bg-white px-7 py-8 font-sans">
        <p className="font-display text-xl uppercase text-brand-purple">Aviso de privacidad</p>
        <p className="mt-1 text-xs text-brand-ink/60">Actualizado: {PRIVACIDAD_ACTUALIZACION}</p>
        <div className="mt-5 space-y-2.5" aria-hidden>
          {['w-full', 'w-11/12', 'w-full', 'w-3/4', 'w-full'].map((w, i) => (
            <div key={i} className={`h-1.5 rounded-full bg-brand-ink/10 ${w}`} />
          ))}
        </div>
        {/* Firma */}
        <div className="mt-8 w-32">
          <svg viewBox="0 0 120 30" fill="none" className="h-7 w-full" aria-hidden>
            <path
              d="M4 22c10-14 18-16 20-6s8 4 14-6 10 2 12 8 10-12 18-6 12 6 22 0 12-4 26-2"
              className="stroke-brand-purple"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <div className="border-t border-brand-ink/30 pt-1 text-[10px] text-brand-ink/60">
            {SITE.nombre}
          </div>
        </div>
        {/* Sello */}
        <div className="absolute -bottom-4 -right-4 flex h-20 w-20 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-brand-purple bg-white text-brand-purple">
          <CheckIcon className="h-6 w-6" />
          <span className="text-[10px] font-extrabold leading-tight">Datos</span>
          <span className="text-[10px] font-extrabold leading-tight">protegidos</span>
        </div>
      </div>
    </div>
  )
}

const OBJETOS: Record<Tema, ReactNode> = {
  tecnico: <Etiqueta />,
  desarrollo: <Editor />,
  contacto: <Chat />,
  legal: <Hojas />,
}

export function ObjetoV2({ tema, seccion, titulo, descripcion }: CabeceraProps) {
  return (
    <section className="border-b border-brand-ink/10 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1fr_auto] lg:gap-14">
        <div>
          <Migas seccion={seccion} />
          <h1 className="mt-5 max-w-xl font-display text-5xl uppercase leading-[0.95] text-brand-purple sm:text-6xl">
            {titulo}
          </h1>
          <p className="mt-5 max-w-lg font-sans text-lg text-brand-ink/70">
            {descripcion}
          </p>
        </div>
        {/* Panel crema donde descansa el objeto */}
        <div
          aria-hidden
          className="hidden items-center justify-center rounded-2xl bg-brand-cream px-10 py-12 sm:flex lg:min-h-[22rem] lg:w-[30rem]"
        >
          {OBJETOS[tema]}
        </div>
      </div>
    </section>
  )
}
