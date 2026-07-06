/**
 * Landing (página de inicio) del sitio real de TecnoFix.
 * Estilo "Claro y cercano". Resume las áreas y enlaza a las páginas de detalle.
 */
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}
