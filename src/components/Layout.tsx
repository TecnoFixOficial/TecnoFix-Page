import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Analitica, AvisoCookies } from '@/components/Cookies'

/** Estructura común a todas las páginas: navbar + contenido + footer. */
export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream font-sans text-brand-ink">
      <ScrollToTop />
      <Analitica />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AvisoCookies />
    </div>
  )
}
