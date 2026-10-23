/**
 * Página de Contacto: WhatsApp como vía principal, el resto de datos en
 * una lista simple, y el formulario de correo.
 */
import type { ReactNode } from 'react'
import { SITE, WHATSAPP_URL, MAPS_URL, DIRECCION_TEXTO } from '@/data/site'
import { PageHero } from '@/components/PageHero'
import { ContactForm } from '@/components/ContactForm'
import {
  WhatsAppIcon,
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

const enlace =
  'font-semibold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple'

/** Fila de la lista de datos: etiqueta a la izquierda, valor a la derecha. */
function Dato({ etiqueta, children }: { etiqueta: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-brand-ink/10 py-4 last:border-0 sm:grid-cols-[7rem_1fr] sm:gap-4">
      <dt className="font-sans text-sm font-bold text-brand-ink/60">{etiqueta}</dt>
      <dd className="font-sans text-brand-ink">{children}</dd>
    </div>
  )
}

export function Contacto() {
  return (
    <>
      <PageHero
        tema="contacto"
        seccion="Contacto"
        titulo="Hablemos"
        descripcion="¿Una reparación o un proyecto de software? Escríbenos por el medio que prefieras."
      />

      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-2">
          <div>
            {/* WhatsApp: la vía más rápida */}
            <h2 className="font-display text-4xl uppercase leading-tight text-brand-purple">
              La forma más rápida
            </h2>
            <p className="mt-3 max-w-md font-sans text-brand-ink/70">
              Escríbenos por WhatsApp y te respondemos en nuestro horario de
              atención.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand-purple px-6 py-3.5 font-sans font-bold text-white transition-colors hover:bg-brand-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp {telFmt}
            </a>

            {/* Resto de datos */}
            <dl className="mt-10 border-t border-brand-ink/10">
              <Dato etiqueta="Teléfono">
                <a href={`tel:+52${SITE.telefono}`} className={enlace}>
                  {telFmt}
                </a>
              </Dato>
              <Dato etiqueta="Correo">
                <a href={`mailto:${SITE.email}`} className={enlace}>
                  {SITE.email}
                </a>
              </Dato>
              <Dato etiqueta="Dirección">
                <span className="block">{DIRECCION_TEXTO}</span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-1 inline-block ${enlace}`}
                >
                  Cómo llegar
                </a>
              </Dato>
              <Dato etiqueta="Horario">
                {SITE.horario.map((h) => (
                  <span key={h.dias} className="block">
                    {h.dias}: {h.horas}
                  </span>
                ))}
              </Dato>
              <Dato etiqueta="Redes">
                <span className="flex flex-wrap gap-x-5 gap-y-2">
                  {REDES.map(({ nombre, url, Icon }) => (
                    <a
                      key={nombre}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 ${enlace}`}
                    >
                      <Icon className="h-4 w-4" />
                      {nombre}
                    </a>
                  ))}
                </span>
              </Dato>
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
