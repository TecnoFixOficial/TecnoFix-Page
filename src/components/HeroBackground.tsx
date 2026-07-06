/**
 * Fondo decorativo animado: textura de puntos tenue + formas geométricas
 * rellenas y difuminadas que vagan con recorridos irregulares y
 * desincronizados. No interactivo.
 *
 * Variantes:
 * - `full`    → secciones altas (hero del inicio, 404): formas grandes,
 *               recorrido amplio en ambos ejes.
 * - `compact` → bandas bajas (PageHero de las páginas de detalle): formas
 *               más chicas y movimiento casi horizontal, para que nunca
 *               crucen los bordes de la franja.
 */
export function HeroBackground({
  variant = 'full',
}: {
  variant?: 'full' | 'compact'
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Textura de puntos muy tenue */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #2D2B6E 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {variant === 'full' ? (
        <>
          {/*
            Zona segura: las formas se colocan lejos de los bordes de la
            sección (≥ ~18% vertical) para que su recorrido (hasta ±150px
            horizontal, ±75px vertical) + el blur nunca toque el límite.
          */}

          {/* Cuadrado redondeado cian — arriba a la derecha */}
          <div className="absolute right-[10%] top-[20%] h-56 w-56 rotate-12 rounded-[2.8rem] bg-brand-cyan/25 blur-xl animate-wander-a" />

          {/* Círculo púrpura — derecha, media altura */}
          <div className="absolute right-[15%] top-[52%] h-40 w-40 rounded-full bg-brand-purple/15 blur-xl animate-wander-b [animation-delay:-6s]" />

          {/* Rombo cian — izquierda arriba */}
          <div className="absolute left-[9%] top-[24%] hidden h-32 w-32 rotate-45 rounded-3xl bg-brand-cyan/20 blur-lg animate-wander-c [animation-delay:-9s] sm:block" />

          {/* Círculo cian grande — izquierda abajo */}
          <div className="absolute left-[10%] bottom-[22%] hidden h-48 w-48 rounded-full bg-brand-cyan/15 blur-xl animate-wander-b [animation-duration:18s] [animation-delay:-3s] sm:block" />

          {/* Cuadrado púrpura chico — centro abajo */}
          <div className="absolute right-[32%] bottom-[18%] hidden h-28 w-28 -rotate-6 rounded-3xl bg-brand-purple/10 blur-lg animate-wander-a [animation-duration:15s] [animation-delay:-7s] md:block" />
        </>
      ) : (
        <>
          {/* Banda baja: movimiento casi horizontal (wander-x), centrado. */}

          {/* Cuadrado redondeado cian — derecha */}
          <div className="absolute right-[12%] top-1/2 h-28 w-28 -translate-y-1/2 rotate-12 rounded-3xl bg-brand-cyan/20 blur-lg animate-wander-x" />

          {/* Círculo púrpura — centro-derecha */}
          <div className="absolute right-[32%] top-[30%] hidden h-20 w-20 rounded-full bg-brand-purple/10 blur-lg animate-wander-x [animation-duration:21s] [animation-delay:-8s] [animation-direction:reverse] sm:block" />

          {/* Rombo cian chico — izquierda */}
          <div className="absolute left-[8%] top-[55%] hidden h-16 w-16 rotate-45 rounded-2xl bg-brand-cyan/15 blur-md animate-wander-x [animation-duration:24s] [animation-delay:-13s] md:block" />
        </>
      )}
    </div>
  )
}
