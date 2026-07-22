import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '@/data/site'
import { HeroBackground } from '@/components/HeroBackground'
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from '@/components/icons'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Fondo animado detrás del contenido */}
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Columna de texto */}
        <div className="flex flex-col items-start">
          <span className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-brand-purple">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            Servicio técnico y desarrollo
          </span>

          <h1 className="max-w-xl animate-fade-up font-display text-5xl uppercase leading-[0.95] text-brand-purple [animation-delay:100ms] sm:text-6xl">
            Reparamos tu equipo y{' '}
            <span className="text-brand-cyan">creamos tu software</span>
          </h1>

          <p className="mt-6 max-w-md animate-fade-up font-sans text-lg text-brand-ink/70 [animation-delay:200ms]">
            Reparación de celulares y computadoras, mantenimiento de consolas y
            desarrollo de páginas web y apps. Todo en un solo lugar, con
            atención cercana.
          </p>

          <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:300ms]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 font-sans font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-ink hover:shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
            <Link
              to="/servicio-tecnico"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-purple/20 px-6 py-3 font-sans font-bold text-brand-purple transition-all hover:border-brand-purple hover:bg-brand-purple/5"
            >
              Ver servicios
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex animate-fade-up items-center gap-2 font-sans text-sm text-brand-ink/60 [animation-delay:400ms]">
            <ShieldCheckIcon className="h-5 w-5 text-brand-cyan" />
            Diagnóstico honesto y trato directo con el técnico.
          </div>
        </div>

        
        {/* Columna visual: marco para foto real */}
        
        {/*
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-ink/5 bg-gradient-to-br from-brand-purple to-brand-ink shadow-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-white/80">
              <span className="font-display text-2xl uppercase tracking-wide">
                TecnoFix
              </span>
              <span className="font-sans text-xs text-white/50">
                [ Aquí va una foto real del taller ]
              </span>
            </div>
          </div>
                
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-brand-ink/5 bg-white px-5 py-3 shadow-lg sm:block">
            <p className="font-display text-2xl text-brand-purple">+500</p>
            <p className="font-sans text-xs text-brand-ink/60">
              equipos reparados
            </p>
          </div>
        </div>
        */}
        
      </div>
    </section>
  )
}
