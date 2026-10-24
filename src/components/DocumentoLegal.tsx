/**
 * Página de documento legal (aviso de privacidad, términos y condiciones).
 * Todo el contenido llega desde src/data; aquí solo se presenta:
 * cabecera, índice, "lo esencial" y las secciones numeradas.
 */
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import type { Tema } from '@/assets/propuestas/cabecera'
import type { Bloque, DocumentoLegal as Documento } from '@/data/legal'
import { HAY_RASTREO } from '@/data/rastreo'
import { abrirPreferencias } from '@/lib/consentimiento'

const enlaceClass =
  'font-semibold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple'

/** Convierte [texto](destino) y correos sueltos en enlaces. */
function Texto({ children }: { children: string }) {
  const partes: ReactNode[] = []
  const patron = /\[([^\]]+)\]\(([^)\s]+)\)|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g
  let ultimo = 0
  for (const m of children.matchAll(patron)) {
    const i = m.index ?? 0
    if (i > ultimo) partes.push(children.slice(ultimo, i))
    const [, texto, destino, correo] = m
    if (correo) {
      partes.push(
        <a key={i} href={`mailto:${correo}`} className={enlaceClass}>
          {correo}
        </a>,
      )
    } else if (destino.startsWith('/')) {
      partes.push(
        <Link key={i} to={destino} className={enlaceClass}>
          {texto}
        </Link>,
      )
    } else {
      const externo = destino.startsWith('http')
      partes.push(
        <a
          key={i}
          href={destino}
          className={enlaceClass}
          {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {texto}
        </a>,
      )
    }
    ultimo = i + m[0].length
  }
  partes.push(children.slice(ultimo))
  return <>{partes}</>
}

function BloqueLegal({ bloque }: { bloque: Bloque }) {
  if (typeof bloque === 'string') {
    return (
      <p className="font-sans leading-relaxed text-brand-ink/80">
        <Texto>{bloque}</Texto>
      </p>
    )
  }

  if ('lista' in bloque) {
    return (
      <ul className="space-y-2.5">
        {bloque.lista.map((item) => (
          <li
            key={item}
            className="relative pl-5 font-sans leading-relaxed text-brand-ink/80 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-purple"
          >
            <Texto>{item}</Texto>
          </li>
        ))}
      </ul>
    )
  }

  if ('tabla' in bloque) {
    return (
      <dl className="border-t-2 border-brand-purple">
        {bloque.tabla.map((fila) => (
          <div
            key={fila.concepto}
            className="flex items-baseline justify-between gap-6 border-b border-brand-ink/10 py-3"
          >
            <dt className="font-sans text-brand-ink">{fila.concepto}</dt>
            <dd className="whitespace-nowrap font-display text-2xl uppercase text-brand-purple">
              {fila.valor}
            </dd>
          </div>
        ))}
      </dl>
    )
  }

  if ('pasos' in bloque) {
    // Línea de tiempo: vertical en celular, horizontal desde tablet.
    return (
      <ol className="grid gap-0 sm:grid-cols-4 sm:gap-4">
        {bloque.pasos.map((paso, i) => (
          <li
            key={paso.cuando}
            className="relative border-l-2 border-brand-purple/20 pb-6 pl-6 last:border-transparent last:pb-0 sm:border-l-0 sm:border-t-2 sm:pb-0 sm:pl-0 sm:pt-6 sm:last:border-brand-purple/20"
          >
            <span
              aria-hidden
              className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full sm:-top-[7px] sm:left-0 ${
                i === bloque.pasos.length - 1
                  ? 'bg-brand-purple'
                  : 'bg-brand-cyan'
              }`}
            />
            <p className="font-display text-2xl uppercase leading-none text-brand-purple">
              {paso.cuando}
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-ink/75">
              {paso.que}
            </p>
          </li>
        ))}
      </ol>
    )
  }

  // Botón de preferencias de cookies: solo tiene sentido si hay rastreo.
  if (!HAY_RASTREO) return null
  return (
    <button
      type="button"
      onClick={abrirPreferencias}
      className="rounded-full border border-brand-purple px-5 py-2.5 font-sans text-sm font-bold text-brand-purple transition-colors hover:bg-white"
    >
      Cambiar preferencias de cookies
    </button>
  )
}

type Props = {
  tema: Tema
  titulo: string
  descripcion: string
  documento: Documento
}

export function DocumentoLegal({ tema, titulo, descripcion, documento }: Props) {
  const { actualizacion, esencial, secciones } = documento

  const indice = (
    <ol className="space-y-1.5 font-sans text-sm">
      {secciones.map((s, i) => (
        <li key={s.id} className="flex gap-2.5">
          <span className="w-5 shrink-0 text-right tabular-nums text-brand-ink/55">
            {i + 1}
          </span>
          <a
            href={`#${s.id}`}
            className="text-brand-ink/75 underline decoration-transparent underline-offset-4 hover:text-brand-purple hover:decoration-brand-purple/40"
          >
            {s.titulo}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <>
      <PageHero
        tema={tema}
        seccion={titulo}
        titulo={titulo}
        descripcion={descripcion}
      />

      <section className="bg-brand-cream py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          {/* Índice: desplegable en celular, fijo al costado en escritorio */}
          <aside>
            <details className="rounded-lg border border-brand-ink/10 bg-white lg:hidden">
              <summary className="cursor-pointer px-5 py-4 font-sans font-bold text-brand-ink">
                Contenido ({secciones.length} secciones)
              </summary>
              <nav aria-label="Contenido" className="px-5 pb-5">
                {indice}
              </nav>
            </details>
            <nav
              aria-label="Contenido"
              className="sticky top-24 hidden lg:block"
            >
              <p className="mb-4 font-sans text-sm font-bold text-brand-ink">
                En esta página
              </p>
              {indice}
            </nav>
          </aside>

          <article className="max-w-[68ch]">
            <p className="font-sans text-sm text-brand-ink/60">
              Última actualización: {actualizacion}
            </p>

            <div className="mt-6 rounded-lg border border-brand-ink/10 border-l-brand-cyan bg-white p-6 [border-left-width:4px] sm:p-7">
              <h2 className="font-sans text-lg font-bold text-brand-ink">
                Lo esencial
              </h2>
              <ul className="mt-3 space-y-2">
                {esencial.map((punto) => (
                  <li
                    key={punto}
                    className="relative pl-5 font-sans leading-relaxed text-brand-ink/80 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-purple"
                  >
                    <Texto>{punto}</Texto>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-sans text-sm text-brand-ink/60">
                Este resumen no sustituye el texto completo.
              </p>
            </div>

            {secciones.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-titulo`}
                className="mt-12 scroll-mt-24"
              >
                <h2
                  id={`${s.id}-titulo`}
                  className="flex gap-3 font-sans text-xl font-bold leading-snug text-brand-purple"
                >
                  <span className="tabular-nums text-brand-ink/50">{i + 1}.</span>
                  {s.titulo}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.bloques.map((b, j) => (
                    <BloqueLegal key={j} bloque={b} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
