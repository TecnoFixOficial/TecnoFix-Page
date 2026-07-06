import { Link } from 'react-router-dom'
import logoBlanco from '@/assets/TECNOFIX Blanco.svg'
import { SITE, WHATSAPP_URL, MAPS_URL, DIRECCION_TEXTO } from '@/data/site'
import { NAV_PAGES } from '@/navigation'
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

const telFmt = SITE.telefono.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <img src={logoBlanco} alt="TecnoFix" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs font-sans text-sm text-white/60">
              Tecnología integral: servicio técnico y desarrollo de software en
              Puebla.
            </p>
            <div className="mt-5 flex gap-3">
              {REDES.map(({ nombre, url, Icon }) => (
                <a
                  key={nombre}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={nombre}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-brand-cyan hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.15em] text-brand-cyan">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_PAGES.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="font-sans text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.15em] text-brand-cyan">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 font-sans text-sm text-white/70">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-brand-cyan" />
                  WhatsApp {telFmt}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+52${SITE.telefono}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <PhoneCallIcon className="h-4 w-4 text-brand-cyan" />
                  {telFmt}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4 text-brand-cyan" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Ubicación y horario */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.15em] text-brand-cyan">
              Visítanos
            </h3>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
            >
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
              <span>{DIRECCION_TEXTO}</span>
            </a>
            <div className="mt-4 flex items-start gap-2 font-sans text-sm text-white/70">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
              <div className="space-y-1">
                {SITE.horario.map((h) => (
                  <p key={h.dias}>
                    <span className="text-white/90">{h.dias}:</span> {h.horas}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-white/50">
            © {new Date().getFullYear()} TecnoFix · Tecnología integral
          </p>
          <Link
            to="/aviso-de-privacidad"
            className="font-sans text-xs text-white/50 transition-colors hover:text-white"
          >
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
