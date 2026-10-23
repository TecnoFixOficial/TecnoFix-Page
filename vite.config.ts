import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { SITE, MAPS_URL } from './src/data/site'

/**
 * Rellena el <head> de index.html según el modo construcción:
 * título, meta description y datos estructurados (JSON-LD) del negocio.
 *
 * Se hace aquí (y no en React) para que los buscadores lo lean en el HTML
 * inicial. Misma regla que src/config.ts: sin variable => en construcción.
 */
function siteHead(underConstruction: boolean): Plugin {
  const title = underConstruction ? 'TecnoFix — Sitio en construcción' : 'TecnoFix'
  const description = underConstruction
    ? 'TecnoFix — Servicio técnico y desarrollo de software. Sitio web en construcción.'
    : 'Reparación de celulares, computadoras y consolas, y desarrollo de páginas web y apps en Puebla. Trato directo con el técnico.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.nombre,
    url: SITE.url,
    description,
    telephone: `+52${SITE.telefono}`,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE.direccion.calle}, ${SITE.direccion.colonia}`,
      addressLocality: 'Puebla',
      addressRegion: 'Puebla',
      postalCode: SITE.direccion.cp.replace(/\D/g, ''),
      addressCountry: 'MX',
    },
    openingHoursSpecification: SITE.horario.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.diasSchema,
      opens: h.abre,
      closes: h.cierra,
    })),
    hasMap: MAPS_URL,
    sameAs: Object.values(SITE.redes),
  }

  return {
    name: 'site-head',
    transformIndexHtml: (html) =>
      html
        .replace('%SITE_TITLE%', title)
        .replace('%SITE_DESCRIPTION%', description)
        // Escapa "<" para que el JSON no pueda cerrar la etiqueta <script>.
        .replace('%SITE_JSON_LD%', JSON.stringify(jsonLd).replace(/</g, '\\u003c')),
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const flag = env.VITE_UNDER_CONSTRUCTION
  const underConstruction = flag !== undefined ? flag === 'true' : true

  return {
    plugins: [react(), siteHead(underConstruction)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
