import { Link, NavLink } from 'react-router-dom'
// Logo a color (visible sobre fondo claro).
import logoTecnoFix from '@/assets/TECNOFIX.svg'
import { WHATSAPP_URL } from '@/data/site'
import { WhatsAppIcon } from '@/components/icons'
import { NAV_PAGES } from '@/navigation'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/5 bg-brand-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img src={logoTecnoFix} alt="TecnoFix" className="h-7 w-auto" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_PAGES.map((l) => (
            <li key={l.path}>
              <NavLink
                to={l.path}
                end={l.end}
                className={({ isActive }) =>
                  `font-sans text-sm font-semibold transition-colors hover:text-brand-purple ${
                    isActive ? 'text-brand-purple' : 'text-brand-ink/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-4 py-2 font-sans text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-ink hover:shadow-md"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </nav>
    </header>
  )
}
