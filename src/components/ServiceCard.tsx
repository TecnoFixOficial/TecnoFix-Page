import type { Servicio } from '@/data/site'
import { SERVICE_ICONS } from '@/components/icons'

/** Servicio en columna: línea superior, ícono junto al título y descripción. */
export function ServiceCard({ servicio }: { servicio: Servicio }) {
  const Icon = SERVICE_ICONS[servicio.icon]
  return (
    <article className="border-t-2 border-brand-purple pt-5">
      <h4 className="flex items-center gap-2.5 font-sans text-lg font-extrabold text-brand-ink">
        <Icon className="h-6 w-6 shrink-0 text-brand-purple" />
        {servicio.titulo}
      </h4>
      <p className="mt-2 font-sans text-brand-ink/70">{servicio.desc}</p>
    </article>
  )
}
