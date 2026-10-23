import { WHATSAPP_URL } from '@/data/site'
import { WhatsAppIcon } from '@/components/icons'

/** Franja de cierre con llamado a la acción hacia WhatsApp. */
export function WhatsAppCTA({
  titulo = '¿Listo para empezar?',
  texto = 'Escríbenos por WhatsApp y te atendemos al instante.',
}: {
  titulo?: string
  texto?: string
}) {
  return (
    <section className="bg-brand-purple">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl uppercase text-white sm:text-4xl">
            {titulo}
          </h2>
          <p className="mt-2 max-w-xl font-sans text-white/75">{texto}</p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-cyan px-7 py-3 font-sans font-bold text-brand-ink transition-colors hover:bg-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  )
}
