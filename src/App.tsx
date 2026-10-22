import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UNDER_CONSTRUCTION } from '@/config'
import { ENABLED_PAGES, ALWAYS_AVAILABLE_PAGES } from '@/navigation'
import { UnderConstruction } from '@/pages/UnderConstruction'
import { Layout } from '@/components/Layout'
import { NotFound } from '@/pages/NotFound'

function App() {
  // Título de la pestaña según el modo construcción.
  useEffect(() => {
    document.title = UNDER_CONSTRUCTION
      ? 'TecnoFix — Sitio en construcción'
      : 'TecnoFix'
  }, [])

  // Interruptor del modo "Sitio en construcción" (ver src/config.ts).
  // Las páginas `alwaysAvailable` (ej. /links del QR) siguen funcionando;
  // cualquier otra ruta muestra la pantalla de construcción.
  if (UNDER_CONSTRUCTION) {
    return (
      <BrowserRouter>
        <Routes>
          {ALWAYS_AVAILABLE_PAGES.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Rutas generadas desde src/navigation.tsx (páginas activas). */}
          {ENABLED_PAGES.filter((p) => p.withLayout !== false).map(
            ({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ),
          )}
          {/* Cualquier ruta desconocida -> página 404. */}
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Páginas independientes, sin navbar ni footer (ej. /links). */}
        {ENABLED_PAGES.filter((p) => p.withLayout === false).map(
          ({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ),
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
