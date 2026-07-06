import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UNDER_CONSTRUCTION } from '@/config'
import { ENABLED_PAGES } from '@/navigation'
import { UnderConstruction } from '@/pages/UnderConstruction'
import { Layout } from '@/components/Layout'
import { NotFound } from '@/pages/NotFound'

function App() {
  // Interruptor del modo "Sitio en construcción" (ver src/config.ts).
  if (UNDER_CONSTRUCTION) {
    return <UnderConstruction />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Rutas generadas desde src/navigation.tsx (páginas activas). */}
          {ENABLED_PAGES.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {/* Cualquier ruta desconocida -> página 404. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
