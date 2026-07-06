/**
 * Página de Aviso de Privacidad.
 * El contenido vive en src/data/privacidad.ts (fácil de editar).
 */
import { PageHero } from '@/components/PageHero'
import {
  PRIVACIDAD_ACTUALIZACION,
  PRIVACIDAD_SECCIONES,
} from '@/data/privacidad'

export function AvisoPrivacidad() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        titulo="Aviso de privacidad"
        descripcion="Cómo tratamos y protegemos tus datos personales en TecnoFix."
      />

      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-8 font-sans text-sm text-brand-ink/50">
            Última actualización: {PRIVACIDAD_ACTUALIZACION}
          </p>

          <div className="space-y-8">
            {PRIVACIDAD_SECCIONES.map((sec) => (
              <div key={sec.titulo}>
                <h2 className="font-display text-xl uppercase tracking-wide text-brand-purple">
                  {sec.titulo}
                </h2>
                <div className="mt-2 space-y-2">
                  {sec.parrafos.map((p, i) => (
                    <p key={i} className="font-sans text-brand-ink/70">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
