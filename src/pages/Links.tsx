/**
 * Página de enlaces (/links) — destino del código QR.
 *
 * Estilo "link in bio" minimalista: fondo crema, una sola columna,
 * sin degradados ni sombras. Colores del logo: púrpura como color
 * principal y cian como acento puntual. Pensada primero
 * para celular, sin navbar ni footer del sitio.
 *
 * Los datos salen de src/data/site.ts.
 */
import type { ComponentType, SVGProps } from 'react'
import { Link } from 'react-router-dom'
import logoTecnoFix from '@/assets/TECNOFIX.svg'
import { SITE, MAPS_URL, WHATSAPP_URL } from '@/data/site'
import {
  WhatsAppIcon,
  PhoneCallIcon,
  MailIcon,
  MapPinIcon,
  WebIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from '@/components/icons'

type Icon = ComponentType<SVGProps<SVGSVGElement>>

/** Botones secundarios (externos). */
const ENLACES: { label: string; href: string; Icon: Icon }[] = [
  { label: 'Llamar', href: `tel:${SITE.telefono}`, Icon: PhoneCallIcon },
  { label: 'Cómo llegar', href: MAPS_URL, Icon: MapPinIcon },
  { label: 'Enviar correo', href: `mailto:${SITE.email}`, Icon: MailIcon },
]

const REDES: { label: string; href: string; Icon: Icon }[] = [
  { label: 'Facebook', href: SITE.redes.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: SITE.redes.instagram, Icon: InstagramIcon },
  { label: 'TikTok', href: SITE.redes.tiktok, Icon: TikTokIcon },
]

/** Estilo común de los botones secundarios. */
const secundario =
  'relative flex h-[4.25rem] w-full items-center justify-center rounded-xl border border-brand-purple/15 bg-white px-14 text-lg font-bold text-brand-purple transition-colors duration-200 hover:border-brand-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan'

/** Ícono alineado a la izquierda dentro del botón. */
const iconoIzq = 'absolute left-5 h-6 w-6'

export function Links() {
  return (
    <main className="flex min-h-screen justify-center bg-brand-cream px-4 py-20 font-sans text-brand-ink">
      <div className="flex w-full max-w-md animate-fade-up flex-col items-center">
        {/* Perfil: logo + descripción */}
        <header className="flex flex-col items-center text-center">
          <img src={logoTecnoFix} alt="TecnoFix" className="h-12 w-auto" />
          {/* Línea de acento cian (mismo cian del logo) */}
          <div className="mt-6 h-1 w-10 rounded-full bg-brand-cyan" />
          <p className="mt-6 text-lg text-brand-ink/70">
            Servicio técnico y desarrollo de software
          </p>
          <p className="mt-1 text-base text-brand-ink/50">
            {SITE.direccion.ciudad}
          </p>
        </header>

        {/* Enlaces principales */}
        <nav
          aria-label="Enlaces de TecnoFix"
          className="mt-14 flex w-full flex-col gap-4"
        >
          {/* Botón principal */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-[4.25rem] w-full items-center justify-center rounded-xl bg-brand-purple px-14 text-lg font-bold text-white transition-colors duration-200 hover:bg-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
          >
            <WhatsAppIcon className={`${iconoIzq} text-brand-cyan`} />
            Escríbenos por WhatsApp
          </a>

          {ENLACES.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={secundario}
            >
              <Icon className={iconoIzq} />
              {label}
            </a>
          ))}

          <Link to="/" className={secundario}>
            <WebIcon className={iconoIzq} />
            Visita nuestro sitio
          </Link>
        </nav>

        {/* Horario */}
        <div className="mt-12 text-center text-base text-brand-ink/60">
          {SITE.horario.map(({ dias, horas }) => (
            <p key={dias}>
              <span className="font-bold text-brand-purple">{dias}</span>{' '}
              {horas}
            </p>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="mt-10 flex items-center gap-4">
          {REDES.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full text-brand-purple transition-colors duration-200 hover:text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan"
            >
              <Icon className="h-7 w-7" />
            </a>
          ))}
        </div>

        <footer className="mt-16 text-sm text-brand-purple/40">
          © {new Date().getFullYear()} TecnoFix
        </footer>
      </div>
    </main>
  )
}
