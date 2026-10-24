import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sube el scroll al inicio cada vez que cambia la ruta.
 * Si la URL trae ancla (ej. /aviso-de-privacidad#cookies), baja a esa sección.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const destino = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (destino) destino.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
