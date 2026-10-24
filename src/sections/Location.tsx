import { SITE, MAPS_URL, MAPS_EMBED_URL } from '@/data/site'
import { MapPinIcon } from '@/components/icons'

/** Ubicación del establecimiento y horario de atención, con mapa. */
export function Location() {
  return (
    <section id="ubicacion" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
            Visítanos en Puebla
          </h2>

          <address className="mt-6 flex items-start gap-3 font-sans not-italic text-brand-ink/75">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
            <span>
              {SITE.direccion.calle}
              <br />
              {SITE.direccion.colonia}, {SITE.direccion.ciudad}
              <br />
              {SITE.direccion.cp}
            </span>
          </address>

          <h3 className="mt-8 font-sans text-sm font-bold uppercase tracking-wider text-brand-ink/50">
            Horario
          </h3>
          <dl className="mt-2 max-w-xs font-sans text-brand-ink/75">
            {SITE.horario.map((h) => (
              <div
                key={h.dias}
                className="flex justify-between gap-6 border-b border-brand-ink/10 py-2.5"
              >
                <dt>{h.dias}</dt>
                <dd className="font-semibold text-brand-ink">{h.horas}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-6 py-2.5">
              <dt>Domingo</dt>
              <dd className="text-brand-ink/50">Cerrado</dd>
            </div>
          </dl>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-brand-purple px-6 py-3 font-sans font-bold text-white transition-colors hover:bg-brand-ink"
          >
            Cómo llegar
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-cream">
          <iframe
            src={MAPS_EMBED_URL}
            title={`Mapa: ${SITE.nombre} en ${SITE.direccion.ciudad}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-[4/3] w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}
