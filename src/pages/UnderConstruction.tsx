// Variante blanca del logo (legible sobre el fondo púrpura).
import logoTecnoFix from '@/assets/TECNOFIX Blanco.svg'

/**
 * Pantalla temporal de "Sitio en construcción".
 * Es la única vista visible en esta etapa. Se reemplazará por la
 * página real (inicio, servicio técnico, desarrollo, contacto, etc.).
 */
export function UnderConstruction() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-purple bg-gradient-to-br from-brand-purple via-brand-ink to-brand-purple bg-[length:200%_200%] px-6 py-16 text-center text-white animate-gradient-move">
      {/* Halos de luz animados */}
      <div className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-brand-cyan/25 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-brand-cyan/15 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-3xl animate-pulse-glow" />

      {/* Anillos decorativos flotantes */}
      <div className="pointer-events-none absolute right-[12%] top-[16%] hidden h-24 w-24 rounded-full border border-brand-cyan/30 animate-float sm:block" />
      <div className="pointer-events-none absolute bottom-[18%] left-[10%] hidden h-16 w-16 rounded-full border-2 border-white/10 animate-float-slow sm:block" />

      {/* Rejilla de puntos sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo de marca (variante blanca sobre fondo púrpura) */}
        <img
          src={logoTecnoFix}
          alt="TecnoFix"
          className="mb-8 h-14 w-auto animate-fade-up drop-shadow-[0_0_28px_rgba(2,197,206,0.35)] sm:h-20"
        />

        {/* Píldora de estado */}
        <span className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan [animation-delay:150ms]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
          </span>
          Sitio en construcción
        </span>

        {/* Título */}
        <h1 className="max-w-3xl animate-fade-up font-display text-5xl uppercase leading-[0.95] tracking-wide [animation-delay:300ms] sm:text-7xl">
          Estamos construyendo
          <br />
          algo{' '}
          <span className="animate-gradient-move bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[length:200%_auto] bg-clip-text text-transparent">
            increíble
          </span>
        </h1>

        <p className="mt-6 max-w-lg animate-fade-up font-sans text-base text-white/70 [animation-delay:450ms] sm:text-lg">
          Servicio técnico y desarrollo de software, muy pronto en un solo lugar.
        </p>

        {/* Chips de áreas */}
        <div className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-3 [animation-delay:600ms]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-sans text-sm text-white/80 backdrop-blur-sm">
            <WrenchIcon className="h-4 w-4 text-brand-cyan" />
            Servicio técnico
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-sans text-sm text-white/80 backdrop-blur-sm">
            <CodeIcon className="h-4 w-4 text-brand-cyan" />
            Desarrollo de software
          </span>
        </div>

        {/* Barra de progreso indeterminada */}
        <div className="mt-12 w-64 max-w-full animate-fade-up [animation-delay:750ms]">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-shimmer" />
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-16 animate-fade-up font-sans text-xs text-white/40 [animation-delay:900ms]">
        © {new Date().getFullYear()} TecnoFix
      </footer>
    </main>
  )
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 3 3 6-6a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  )
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  )
}
