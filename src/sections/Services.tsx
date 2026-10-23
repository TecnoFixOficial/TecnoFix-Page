import { Link } from 'react-router-dom'
import { SERVICIOS } from '@/data/site'
import { ServiceCard } from '@/components/ServiceCard'

function AreaHeader({
  titulo,
  to,
  enlace,
}: {
  titulo: string
  to: string
  /** Texto del enlace a la página del área. */
  enlace: string
}) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h3 className="font-sans text-2xl font-extrabold text-brand-ink">
        {titulo}
      </h3>
      <Link
        to={to}
        className="font-sans text-sm font-bold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
      >
        {enlace}
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
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
            Lo que hacemos
          </h2>
          <p className="mt-4 font-sans text-lg text-brand-ink/70">
            Reparamos tu equipo y desarrollamos tu página o app, en el mismo
            lugar.
          </p>
        </div>

        {/* Servicio técnico */}
        <AreaHeader
          titulo="Servicio técnico"
          to="/servicio-tecnico"
          enlace="Ver reparaciones y garantía"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tecnico.map((s) => (
            <ServiceCard key={s.titulo} servicio={s} />
          ))}
        </div>

        {/* Desarrollo */}
        <div className="mt-16">
          <AreaHeader
            titulo="Desarrollo de software"
            to="/desarrollo"
            enlace="Ver cómo trabajamos"
          />
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {desarrollo.map((s) => (
            <ServiceCard key={s.titulo} servicio={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
