/**
 * Página de detalle: Servicio técnico.
 * Base lista para llenar con más contenido (precios, tiempos, fotos, FAQ...).
 */
import { SERVICIOS } from '@/data/site'
import { ServiceCard } from '@/components/ServiceCard'
import { PageHero } from '@/components/PageHero'
import { WhatsAppCTA } from '@/components/WhatsAppCTA'

export function ServicioTecnico() {
  const tecnico = SERVICIOS.filter((s) => s.area === 'Servicio técnico')

  return (
    <>
      <PageHero
        eyebrow="Servicio técnico"
        titulo="Reparación y mantenimiento"
        descripcion="Reparamos celulares y computadoras, y damos mantenimiento a consolas. Diagnóstico honesto y trato directo con el técnico."
      />

      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tecnico.map((s) => (
              <ServiceCard key={s.titulo} servicio={s} />
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA
        titulo="¿Tu equipo necesita una revisión?"
        texto="Cuéntanos qué le pasa y te damos un diagnóstico sin compromiso."
      />
    </>
  )
}
