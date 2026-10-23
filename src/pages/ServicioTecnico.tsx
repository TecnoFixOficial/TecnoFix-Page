/**
 * Página de detalle: Servicio técnico.
 * Qué reparamos (por tipo de equipo), cómo funciona el servicio
 * (presentado como una orden de servicio del taller) y la garantía.
 */
import { SERVICIOS, GARANTIAS, NOTA_MARCAS } from '@/data/site'
import { SERVICE_ICONS } from '@/components/icons'
import { PageHero } from '@/components/PageHero'
import { WhatsAppCTA } from '@/components/WhatsAppCTA'

/** Pasos del servicio, en orden. */
const PASOS = [
  {
    titulo: 'Recepción',
    texto: 'Traes tu equipo al taller y nos cuentas qué le pasa.',
  },
  {
    titulo: 'Diagnóstico',
    texto: 'Lo revisamos y te explicamos qué tiene, sin tecnicismos.',
  },
  {
    titulo: 'Cotización',
    texto: 'Te damos el precio y un tiempo estimado.',
  },
  {
    titulo: 'Reparación',
    texto: 'Empezamos solo cuando tú lo autorizas.',
  },
  {
    titulo: 'Entrega',
    texto: 'Te avisamos en cuanto esté listo para recoger.',
  },
]

export function ServicioTecnico() {
  const tecnico = SERVICIOS.filter((s) => s.area === 'Servicio técnico')

  return (
    <>
      <PageHero
        tema="tecnico"
        seccion="Servicio técnico"
        titulo="Reparación y mantenimiento"
        descripcion="Reparamos celulares y computadoras, y damos mantenimiento a consolas. Diagnóstico honesto y trato directo con el técnico."
      />

      {/* Qué reparamos */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
            Qué reparamos
          </h2>
          <p className="mt-3 max-w-xl font-sans text-lg text-brand-ink/70">
            {NOTA_MARCAS}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {tecnico.map((s) => {
              const Icon = SERVICE_ICONS[s.icon]
              return (
                <div key={s.titulo} className="border-t-2 border-brand-purple pt-5">
                  <h3 className="flex items-center gap-2.5 font-sans text-xl font-extrabold text-brand-ink">
                    <Icon className="h-6 w-6 shrink-0 text-brand-purple" />
                    {s.titulo}
                  </h3>
                  <ul className="mt-4 font-sans text-brand-ink/75">
                    {s.incluye.map((item) => (
                      <li
                        key={item}
                        className="border-b border-brand-ink/10 py-2.5 last:border-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona: orden de servicio */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-[2fr_3fr]">
          <div>
            <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
              Cómo funciona
            </h2>
            <p className="mt-4 max-w-sm font-sans text-lg text-brand-ink/70">
              Cada equipo que entra al taller sigue el mismo camino. No
              reparamos nada sin que sepas antes cuánto cuesta.
            </p>
          </div>

          {/* Ticket: franja superior + pasos separados por línea punteada */}
          <div className="overflow-hidden rounded-lg border border-brand-ink/15 bg-brand-cream">
            <div className="bg-brand-purple px-6 py-3 font-sans text-sm font-bold text-white">
              Orden de servicio
            </div>
            <ol className="px-6">
              {PASOS.map((p, i) => (
                <li
                  key={p.titulo}
                  className="flex gap-5 border-b border-dashed border-brand-ink/20 py-5 last:border-0"
                >
                  <span className="w-8 shrink-0 font-display text-3xl leading-none text-brand-purple">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-extrabold text-brand-ink">
                      {p.titulo}
                    </h3>
                    <p className="mt-1 font-sans text-brand-ink/70">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-[2fr_3fr]">
          <div>
            <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
              Garantía
            </h2>
            <p className="mt-4 max-w-sm font-sans text-lg text-brand-ink/70">
              Todas las reparaciones tienen garantía. Al cotizar te
              confirmamos la de tu caso.
            </p>
          </div>

          <dl className="border-t-2 border-brand-purple">
            {GARANTIAS.map((g) => (
              <div
                key={g.concepto}
                className="flex items-baseline justify-between gap-6 border-b border-brand-ink/10 py-4"
              >
                <dt className="font-sans text-lg text-brand-ink">{g.concepto}</dt>
                <dd className="whitespace-nowrap font-display text-3xl uppercase text-brand-purple">
                  {g.tiempo}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <WhatsAppCTA
        titulo="¿Tu equipo necesita una revisión?"
        texto="Cuéntanos qué le pasa y te damos un diagnóstico sin compromiso."
      />
    </>
  )
}
