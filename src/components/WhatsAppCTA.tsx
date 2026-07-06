import { WHATSAPP_URL } from '@/data/site'
import { WhatsAppIcon } from '@/components/icons'

/** Bloque de llamado a la acción hacia WhatsApp. */
export function WhatsAppCTA({
  titulo = '¿Listo para empezar?',
  texto = 'Escríbenos por WhatsApp y te atendemos al instante.',
}: {
  titulo?: string
  texto?: string
}) {
  return (
    <section className="bg-brand-cream py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple to-brand-ink px-8 py-12 text-center shadow-xl">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-cyan/20 blur-3xl" />
          <h2 className="relative font-display text-3xl uppercase text-white sm:text-4xl">
            {titulo}
          </h2>
          <p className="relative mt-3 font-sans text-white/70">{texto}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3 font-sans font-bold text-brand-ink shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
