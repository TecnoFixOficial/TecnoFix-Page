import type { Servicio } from '@/data/site'
import { SERVICE_ICONS } from '@/components/icons'

export function ServiceCard({ servicio }: { servicio: Servicio }) {
  const Icon = SERVICE_ICONS[servicio.icon]
  return (
    <article className="group flex flex-col items-start rounded-2xl border border-brand-ink/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan transition-colors group-hover:bg-brand-cyan group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl uppercase tracking-wide text-brand-purple">
        {servicio.titulo}
      </h3>
      <p className="mt-2 font-sans text-sm text-brand-ink/65">{servicio.desc}</p>
    </article>
  )
}
