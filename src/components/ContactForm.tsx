import { useState, type FormEvent } from 'react'
import { SITE } from '@/data/site'

type Estado = 'idle' | 'enviando' | 'ok' | 'error'

export function ContactForm() {
  const [estado, setEstado] = useState<Estado>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      message: data.get('message'),
      botcheck: data.get('botcheck') ? true : false,
    }

    setEstado('enviando')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setEstado('ok')
        form.reset()
      } else {
        setEstado('error')
        setErrorMsg(json.message || 'No se pudo enviar. Intenta de nuevo.')
      }
    } catch {
      setEstado('error')
      setErrorMsg('Hubo un problema de conexión. Intenta de nuevo.')
    }
  }

  if (estado === 'ok') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-brand-ink/5 bg-white p-8 text-center shadow-sm">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl uppercase text-brand-purple">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-2 font-sans text-brand-ink/65">
          Gracias por escribirnos. Te responderemos muy pronto.
        </p>
        <button
          type="button"
          onClick={() => setEstado('idle')}
          className="mt-6 font-sans text-sm font-bold text-brand-purple hover:text-brand-cyan"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border border-brand-ink/10 bg-brand-cream/40 px-4 py-3 font-sans text-brand-ink outline-none transition-colors placeholder:text-brand-ink/40 focus:border-brand-cyan focus:bg-white'

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-brand-ink/5 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-2xl uppercase text-brand-purple">
        Envíanos un mensaje
      </h3>
      <p className="mt-1 font-sans text-sm text-brand-ink/60">
        Te responderemos a tu correo lo antes posible.
      </p>

      {/* Honeypot anti-spam (oculto) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="mt-5 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-sans text-sm font-semibold text-brand-ink/80">
            Nombre
          </label>
          <input id="name" name="name" type="text" required placeholder="Tu nombre" className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-sans text-sm font-semibold text-brand-ink/80">
            Correo
          </label>
          <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block font-sans text-sm font-semibold text-brand-ink/80">
            Teléfono <span className="font-normal text-brand-ink/40">(opcional)</span>
          </label>
          <input id="phone" name="phone" type="tel" placeholder="10 dígitos" className={inputClass} />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block font-sans text-sm font-semibold text-brand-ink/80">
            Mensaje
          </label>
          <textarea id="message" name="message" required rows={4} placeholder="¿En qué te ayudamos? Cuéntanos sobre tu equipo o proyecto." className={`${inputClass} resize-none`} />
        </div>
      </div>

      {estado === 'error' && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 font-sans text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === 'enviando'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3 font-sans font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-ink hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      <p className="mt-3 text-center font-sans text-xs text-brand-ink/40">
        Tu mensaje llega directo a {SITE.email}
      </p>
    </form>
  )
}
