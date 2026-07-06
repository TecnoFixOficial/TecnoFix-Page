import { Link } from 'react-router-dom'
import { SERVICIOS } from '@/data/site'
import { ServiceCard } from '@/components/ServiceCard'
import { ArrowRightIcon } from '@/components/icons'

function AreaHeader({
  titulo,
  to,
}: {
  titulo: string
  to: string
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <h3 className="font-display text-lg uppercase tracking-wide text-brand-ink">
        {titulo}
      </h3>
      <span className="h-px flex-1 bg-brand-ink/10" />
      <Link
        to={to}
        className="inline-flex items-center gap-1 whitespace-nowrap font-sans text-sm font-bold text-brand-purple hover:text-brand-cyan"
      >
        Ver más
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  )
}

export function Services() {
  const tecnico = SERVICIOS.filter((s) => s.area === 'Servicio técnico')
  const desarrollo = SERVICIOS.filter((s) => s.area === 'Desarrollo')

  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-brand-cyan">
            Lo que hacemos
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
            Dos áreas, una misma confianza
          </h2>
          <p className="mt-4 font-sans text-brand-ink/65">
            Desde reparar tu equipo hasta construir tu presencia digital.
          </p>
        </div>

        {/* Servicio técnico */}
        <AreaHeader titulo="Servicio técnico" to="/servicio-tecnico" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tecnico.map((s) => (
            <ServiceCard key={s.titulo} servicio={s} />
          ))}
        </div>

        {/* Desarrollo */}
        <div className="mt-14">
          <AreaHeader titulo="Desarrollo de software" to="/desarrollo" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {desarrollo.map((s) => (
            <ServiceCard key={s.titulo} servicio={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
