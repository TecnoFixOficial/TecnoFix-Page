import { FAQ } from '@/data/faq'
import { WHATSAPP_URL } from '@/data/site'
import { PlusIcon } from '@/components/icons'

/**
 * Preguntas frecuentes. Las preguntas viven en src/data/faq.ts.
 * Usa <details> nativo: accesible por teclado y sin JavaScript.
 */
export function Faq() {
  return (
    <section id="preguntas" className="bg-brand-cream py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple sm:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 max-w-sm font-sans text-brand-ink/70">
            ¿Tu duda no está aquí?{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
            >
              Pregúntanos por WhatsApp
            </a>
            .
          </p>
        </div>

        <div className="border-t border-brand-ink/10">
          {FAQ.map((item) => (
            <details
              key={item.pregunta}
              className="group border-b border-brand-ink/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-sans text-lg font-bold text-brand-ink [&::-webkit-details-marker]:hidden">
                {item.pregunta}
                <PlusIcon className="h-5 w-5 shrink-0 text-brand-purple transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="max-w-prose pb-5 font-sans text-brand-ink/70">
                {item.respuesta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
