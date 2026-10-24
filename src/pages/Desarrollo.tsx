/**
 * Página de detalle: Desarrollo de software.
 * Qué hacemos (web y apps, con lo que incluye), cómo trabajamos un proyecto
 * y un ejemplo real: este mismo sitio.
 */
import { Link } from 'react-router-dom'
import { SERVICIOS } from '@/data/site'
import { CheckIcon } from '@/components/icons'
import { PageHero } from '@/components/PageHero'
import { WhatsAppCTA } from '@/components/WhatsAppCTA'

/** Etapas de un proyecto, en orden. */
const ETAPAS = [
  {
    titulo: 'Platicamos tu idea',
    texto: 'Nos cuentas qué necesitas y para quién es.',
  },
  {
    titulo: 'Te enviamos una cotización',
    texto: 'Personalizada según lo que necesitas y tus preferencias.',
  },
  {
    titulo: 'Diseñamos y desarrollamos',
    texto: 'Te mostramos avances para ajustar sobre la marcha.',
  },
  {
    titulo: 'Entregamos',
    texto: 'Tu proyecto listo para usarse.',
  },
]

/** Lo que tiene este sitio, contado para alguien que busca una página. */
const EJEMPLO = [
  'Se adapta a celular, tablet y computadora',
  'Formulario de contacto que llega directo al correo del negocio',
  'Página de enlaces para el código QR del establecimiento',
  'Ubicación, horario y datos del negocio listos para Google',
  'Aviso de "en mantenimiento" que se activa sin tocar el diseño',
]

export function Desarrollo() {
  const desarrollo = SERVICIOS.filter((s) => s.area === 'Desarrollo')

  return (
    <>
      <PageHero
        tema="desarrollo"
        seccion="Desarrollo"
        titulo="Páginas web y apps para tu negocio"
        descripcion="Diseñamos y desarrollamos páginas web y aplicaciones para Android y iPhone. Cada proyecto se cotiza a la medida, según lo que necesitas."
      />

      {/* Qué hacemos: una fila por servicio */}
      <section className="bg-brand-cream py-6 md:py-10">
        <div className="mx-auto max-w-6xl px-6">
          {desarrollo.map((s) => (
            <div
              key={s.titulo}
              className="grid gap-6 border-b border-brand-ink/10 py-12 last:border-0 md:grid-cols-2 md:gap-12"
            >
              <div>
                <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
                  {s.titulo}
                </h2>
                <p className="mt-3 max-w-md font-sans text-lg text-brand-ink/70">
                  {s.desc}
                </p>
              </div>
              <ul className="space-y-3 self-center font-sans text-brand-ink">
                {s.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo trabajamos: línea de tiempo */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
            Cómo trabajamos
          </h2>

          <ol className="mt-10 grid gap-8 md:grid-cols-4 md:gap-6">
            {ETAPAS.map((e, i) => (
              <li key={e.titulo} className="relative border-l-2 border-brand-purple/20 pl-5 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6">
                {/* Marca de la etapa sobre la línea */}
                <span
                  className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-brand-purple md:-top-[7px] md:left-0"
                  aria-hidden
                />
                <p className="font-sans text-sm font-bold text-brand-ink/60">
                  Paso {i + 1}
                </p>
                <h3 className="mt-1 font-sans text-lg font-extrabold text-brand-ink">
                  {e.titulo}
                </h3>
                <p className="mt-1 font-sans text-brand-ink/70">{e.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ejemplo real: este sitio */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-[2fr_3fr]">
          <div>
            <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
              Un ejemplo: este sitio
            </h2>
            <p className="mt-4 max-w-sm font-sans text-lg text-brand-ink/70">
              La página que estás viendo la diseñamos y programamos nosotros.
              Esto es lo que tiene:
            </p>
          </div>

          <ul className="border-t-2 border-brand-purple font-sans text-brand-ink">
            {EJEMPLO.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-brand-ink/10 py-4"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                {item}
              </li>
            ))}
            <li className="py-4">
              <Link
                to="/links"
                className="font-bold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
              >
                Ver la página de enlaces del código QR
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <WhatsAppCTA
        titulo="¿Tienes un proyecto en mente?"
        texto="Platícanos tu idea y te decimos cómo podemos ayudarte."
      />
    </>
  )
}
