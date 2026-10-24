import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '@/data/site'
import { CheckIcon } from '@/components/icons'

type Estado = 'idle' | 'enviando' | 'ok' | 'error'
type Campo = 'name' | 'email' | 'message'
type Errores = Partial<Record<Campo, string>>

/** Valida los campos obligatorios; devuelve un mensaje por campo inválido. */
function validar(data: FormData): Errores {
  const errores: Errores = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()

  if (!name) errores.name = 'Escribe tu nombre.'
  if (!email) errores.email = 'Escribe tu correo para poder responderte.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errores.email = 'Revisa el correo, parece incompleto (ej. nombre@correo.com).'
  if (!message) errores.message = 'Cuéntanos en qué te ayudamos.'
  return errores
}

export function ContactForm() {
  const [estado, setEstado] = useState<Estado>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [errores, setErrores] = useState<Errores>({})

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    // Errores junto a cada campo; el foco va al primero con problema.
    const nuevos = validar(data)
    setErrores(nuevos)
    const primero = (Object.keys(nuevos) as Campo[])[0]
    if (primero) {
      form.querySelector<HTMLElement>(`#${primero}`)?.focus()
      return
    }

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
        setErrorMsg(
          json.message ||
            'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.',
        )
      }
    } catch {
      setEstado('error')
      setErrorMsg(
        'No hay conexión con el servidor. Revisa tu internet e inténtalo de nuevo, o escríbenos por WhatsApp.',
      )
    }
  }

  /** Quita el error de un campo en cuanto la persona lo corrige. */
  function limpiar(campo: Campo) {
    if (errores[campo]) setErrores((prev) => ({ ...prev, [campo]: undefined }))
  }

  if (estado === 'ok') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center rounded-lg border border-brand-ink/10 bg-white p-8"
      >
        <CheckIcon className="h-8 w-8 text-brand-purple" />
        <h3 className="mt-4 font-display text-3xl uppercase text-brand-purple">
          Mensaje enviado
        </h3>
        <p className="mt-2 font-sans text-brand-ink/70">
          Te responderemos a tu correo en nuestro horario de atención.
        </p>
        <button
          type="button"
          onClick={() => setEstado('idle')}
          className="mt-6 font-sans text-sm font-bold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-md border bg-white px-4 py-3 font-sans text-brand-ink transition-colors placeholder:text-brand-ink/40 focus:border-brand-purple focus-visible:outline-offset-0'
  const borde = (campo: Campo) =>
    errores[campo] ? 'border-red-600' : 'border-brand-ink/20'
  const labelClass = 'mb-1.5 block font-sans text-sm font-bold text-brand-ink'
  const errorClass = 'mt-1.5 font-sans text-sm text-red-700'

  /** Atributos de accesibilidad de un campo con posible error. */
  const aria = (campo: Campo) =>
    errores[campo]
      ? { 'aria-invalid': true, 'aria-describedby': `${campo}-error` }
      : {}

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-brand-ink/10 bg-white p-6 sm:p-8"
    >
      <h3 className="font-display text-3xl uppercase text-brand-purple">
        Envíanos un mensaje
      </h3>
      <p className="mt-1 font-sans text-brand-ink/70">
        Te respondemos a tu correo.
      </p>

      {/* Honeypot anti-spam (oculto) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            onInput={() => limpiar('name')}
            className={`${inputClass} ${borde('name')}`}
            {...aria('name')}
          />
          {errores.name && (
            <p id="name-error" className={errorClass}>
              {errores.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@correo.com"
            onInput={() => limpiar('email')}
            className={`${inputClass} ${borde('email')}`}
            {...aria('email')}
          />
          {errores.email && (
            <p id="email-error" className={errorClass}>
              {errores.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono <span className="font-normal text-brand-ink/60">(opcional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="10 dígitos"
            className={`${inputClass} border-brand-ink/20`}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Ej. Mi celular no carga, o quiero una página para mi negocio."
            onInput={() => limpiar('message')}
            className={`${inputClass} ${borde('message')} resize-y`}
            {...aria('message')}
          />
          {errores.message && (
            <p id="message-error" className={errorClass}>
              {errores.message}
            </p>
          )}
        </div>
      </div>

      {estado === 'error' && (
        <p
          role="alert"
          className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-700"
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === 'enviando'}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-purple px-6 py-3 font-sans font-bold text-white transition-colors hover:bg-brand-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      <p className="mt-3 text-center font-sans text-xs text-brand-ink/60">
        Tu mensaje llega directo a {SITE.email}. Al enviarlo aceptas el{' '}
        <Link
          to="/aviso-de-privacidad"
          className="font-semibold text-brand-purple underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
        >
          aviso de privacidad
        </Link>
        .
      </p>
    </form>
  )
}
