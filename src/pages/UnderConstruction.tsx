import { Link } from 'react-router-dom'
// Logo a color (visible sobre fondo claro).
import logoTecnoFix from '@/assets/TECNOFIX.svg'
import { SITE, WHATSAPP_URL, MAPS_URL, DIRECCION_TEXTO } from '@/data/site'
import { WhatsAppIcon } from '@/components/icons'

/**
 * Pantalla temporal de "Sitio en construcción".
 * Se activa con VITE_UNDER_CONSTRUCTION=true (ver src/config.ts) cuando hay
 * un problema o se está agregando algo nuevo. Mientras tanto, deja a la mano
 * cómo contactar y cómo llegar.
 */
export function UnderConstruction() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-cream px-6 font-sans text-brand-ink">
      <div className="mx-auto flex w-full max-w-xl flex-1 animate-fade-up flex-col justify-center py-16">
        <img src={logoTecnoFix} alt="TecnoFix" className="h-10 w-auto self-start" />

        <h1 className="mt-12 font-display text-5xl uppercase leading-[0.95] text-brand-purple sm:text-6xl">
          Sitio en construcción
        </h1>
        <p className="mt-5 text-lg text-brand-ink/75">
          Estamos haciendo ajustes al sitio y volvemos pronto. Mientras
          tanto, seguimos atendiendo en el taller y por WhatsApp.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 font-bold text-white transition-colors hover:bg-brand-ink"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escribir por WhatsApp
          </a>
          <Link
            to="/links"
            className="inline-flex items-center rounded-full border-2 border-brand-purple/25 px-6 py-3 font-bold text-brand-purple transition-colors hover:border-brand-purple"
          >
            Ver todos nuestros enlaces
          </Link>
        </div>

        <dl className="mt-12 grid gap-6 border-t border-brand-ink/10 pt-8 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-bold text-brand-ink/60">Dirección</dt>
            <dd className="mt-1">
              {DIRECCION_TEXTO}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-semibold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
              >
                Cómo llegar
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-bold text-brand-ink/60">Horario</dt>
            <dd className="mt-1">
              {SITE.horario.map((h) => (
                <span key={h.dias} className="block">
                  {h.dias}: {h.horas}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <footer className="mx-auto w-full max-w-xl pb-8 text-sm text-brand-ink/60">
        © {new Date().getFullYear()} TecnoFix
      </footer>
    </main>
  )
}
