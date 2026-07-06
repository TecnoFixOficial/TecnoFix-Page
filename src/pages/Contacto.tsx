/**
 * Página de Contacto: datos reales, redes y formulario de correo.
 */
import { SITE, WHATSAPP_URL, MAPS_URL, DIRECCION_TEXTO } from '@/data/site'
import { PageHero } from '@/components/PageHero'
import { ContactForm } from '@/components/ContactForm'
import {
  WhatsAppIcon,
  MailIcon,
  PhoneCallIcon,
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from '@/components/icons'

const REDES = [
  { nombre: 'Facebook', url: SITE.redes.facebook, Icon: FacebookIcon },
  { nombre: 'Instagram', url: SITE.redes.instagram, Icon: InstagramIcon },
  { nombre: 'TikTok', url: SITE.redes.tiktok, Icon: TikTokIcon },
]

/** Teléfono formateado para mostrar: 2201012991 -> 220 101 2991 */
const telFmt = SITE.telefono.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

export function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        titulo="Hablemos"
        descripcion="¿Una reparación o un proyecto de software? Escríbenos por el medio que prefieras y te atendemos con gusto."
      />

      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
          {/* Columna de datos */}
          <div className="flex flex-col gap-4">
            {/* WhatsApp destacado */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-brand-ink/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan transition-colors group-hover:bg-brand-cyan group-hover:text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-display text-lg uppercase tracking-wide text-brand-purple">
                  WhatsApp
                </span>
                <span className="font-sans text-sm text-brand-ink/60">
                  {telFmt} · respuesta rápida
                </span>
              </span>
            </a>

            {/* Teléfono */}
            <a
              href={`tel:+52${SITE.telefono}`}
              className="group flex items-center gap-4 rounded-2xl border border-brand-ink/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan transition-colors group-hover:bg-brand-cyan group-hover:text-white">
                <PhoneCallIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-display text-lg uppercase tracking-wide text-brand-purple">
                  Teléfono
                </span>
                <span className="font-sans text-sm text-brand-ink/60">
                  {telFmt}
                </span>
              </span>
            </a>

            {/* Correo */}
            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-brand-ink/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan transition-colors group-hover:bg-brand-cyan group-hover:text-white">
                <MailIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-display text-lg uppercase tracking-wide text-brand-purple">
                  Correo
                </span>
                <span className="font-sans text-sm text-brand-ink/60">
                  {SITE.email}
                </span>
              </span>
            </a>

            {/* Ubicación y horario */}
            <div className="rounded-2xl border border-brand-ink/5 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <div>
                  <span className="block font-display text-lg uppercase tracking-wide text-brand-purple">
                    Visítanos
                  </span>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-brand-ink/60 hover:text-brand-cyan"
                  >
                    {DIRECCION_TEXTO}
                  </a>
                  <div className="mt-3 flex items-start gap-2 font-sans text-sm text-brand-ink/60">
                    <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                    <div className="space-y-0.5">
                      {SITE.horario.map((h) => (
                        <p key={h.dias}>
                          <span className="font-semibold text-brand-ink/75">
                            {h.dias}:
                          </span>{' '}
                          {h.horas}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="rounded-2xl border border-brand-ink/5 bg-white p-5 shadow-sm">
              <span className="mb-3 block font-display text-lg uppercase tracking-wide text-brand-purple">
                Síguenos
              </span>
              <div className="flex gap-3">
                {REDES.map(({ nombre, url, Icon }) => (
                  <a
                    key={nombre}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={nombre}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/5 text-brand-purple transition-all hover:-translate-y-0.5 hover:bg-brand-purple hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna del formulario */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
