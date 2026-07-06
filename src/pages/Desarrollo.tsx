/**
 * Página de detalle: Desarrollo de software.
 * Base lista para llenar con portafolio, proceso, tecnologías, etc.
 */
import { SERVICIOS } from '@/data/site'
import { ServiceCard } from '@/components/ServiceCard'
import { PageHero } from '@/components/PageHero'
import { WhatsAppCTA } from '@/components/WhatsAppCTA'

export function Desarrollo() {
  const desarrollo = SERVICIOS.filter((s) => s.area === 'Desarrollo')

  return (
    <>
      <PageHero
        eyebrow="Desarrollo de software"
        titulo="Creamos tu presencia digital"
        descripcion="Diseñamos y desarrollamos páginas web y aplicaciones móviles (Android) a la medida de tu negocio."
      />

      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {desarrollo.map((s) => (
              <ServiceCard key={s.titulo} servicio={s} />
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA
        titulo="¿Tienes un proyecto en mente?"
        texto="Platícanos tu idea y la convertimos en una web o app."
      />
    </>
  )
}
