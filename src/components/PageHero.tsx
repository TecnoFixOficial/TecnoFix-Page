import { HeroBackground } from '@/components/HeroBackground'

/** Encabezado de página (banda superior) para las páginas de detalle. */
export function PageHero({
  eyebrow,
  titulo,
  descripcion,
}: {
  eyebrow: string
  titulo: string
  descripcion: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-ink/5 bg-white">
      {/* Fondo animado (variante compacta para banda baja) */}
      <HeroBackground variant="compact" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
        <span className="animate-fade-up font-sans text-sm font-bold uppercase tracking-[0.15em] text-brand-cyan">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl animate-fade-up font-display text-4xl uppercase leading-[0.95] text-brand-purple [animation-delay:100ms] sm:text-6xl">
          {titulo}
        </h1>
        <p className="mt-5 max-w-xl animate-fade-up font-sans text-lg text-brand-ink/70 [animation-delay:200ms]">
          {descripcion}
        </p>
      </div>
    </section>
  )
}
