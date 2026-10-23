import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
// Logo a color (visible sobre fondo claro).
import logoTecnoFix from '@/assets/TECNOFIX.svg'
import { WHATSAPP_URL } from '@/data/site'
import { WhatsAppIcon, MenuIcon, CloseIcon } from '@/components/icons'
import { NAV_PAGES } from '@/navigation'

export function Navbar() {
  // Menú desplegable para celular (en escritorio los enlaces siempre se ven).
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Cierra el menú al cambiar de página.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Cierra el menú con la tecla Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

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

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-purple px-4 font-sans text-sm font-bold text-white transition-colors hover:bg-brand-ink"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-purple transition-colors hover:bg-brand-purple/5 md:hidden"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <ul
          id="menu-movil"
          className="border-t border-brand-ink/5 bg-brand-cream px-6 py-2 md:hidden"
        >
          {NAV_PAGES.map((l) => (
            <li
              key={l.path}
              className="border-b border-brand-ink/5 last:border-0"
            >
              <NavLink
                to={l.path}
                end={l.end}
                className={({ isActive }) =>
                  `block py-3.5 font-sans text-base font-semibold ${
                    isActive ? 'text-brand-purple' : 'text-brand-ink/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
