/**
 * Función serverless (Vercel) que recibe el formulario de contacto y envía
 * el correo por el SMTP propio (Hostinger). Sin servicios de terceros.
 *
 * Requiere estas variables de entorno en Vercel (Settings → Environment
 * Variables) — NO llevan prefijo VITE_ para que queden solo en el servidor:
 *   SMTP_HOST   ej. smtp.hostinger.com
 *   SMTP_PORT   ej. 465
 *   SMTP_USER   contacto@tecnofix.tech
 *   SMTP_PASS   (contraseña del correo)  ← marcar como Sensitive
 *   CONTACT_TO  (opcional) destino; por defecto = SMTP_USER
 */
import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido.' })
  }

  const { name, email, phone, message, botcheck } = (req.body ?? {}) as Record<
    string,
    unknown
  >

  // Anti-spam: si el honeypot viene lleno, fingimos éxito y no enviamos nada.
  if (botcheck) {
    return res.status(200).json({ success: true })
  }

  const nombre = String(name ?? '').trim()
  const correo = String(email ?? '').trim()
  const telefono = String(phone ?? '').trim()
  const mensaje = String(message ?? '').trim()

  if (!nombre || !correo || !mensaje) {
    return res
      .status(400)
      .json({ success: false, message: 'Faltan campos requeridos.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return res.status(400).json({ success: false, message: 'Correo no válido.' })
  }
  if (mensaje.length > 5000) {
    return res
      .status(400)
      .json({ success: false, message: 'El mensaje es demasiado largo.' })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return res
      .status(500)
      .json({ success: false, message: 'Servidor de correo no configurado.' })
  }

  const port = Number(SMTP_PORT) || 465
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = SSL; 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      // El "from" debe ser la cuenta autenticada (Hostinger lo exige).
      from: `"Sitio TecnoFix" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `${nombre} <${correo}>`,
      subject: `Nuevo mensaje de ${nombre} — tecnofix.tech`,
      text:
        `Nombre: ${nombre}\n` +
        `Correo: ${correo}\n` +
        `Teléfono: ${telefono || '—'}\n\n` +
        `Mensaje:\n${mensaje}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#1B1A40">
          <h2 style="color:#2D2B6E;margin:0 0 12px">Nuevo mensaje desde el sitio</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
          <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
          <p><strong>Teléfono:</strong> ${escapeHtml(telefono || '—')}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space:pre-wrap;border-left:3px solid #02C5CE;padding-left:12px">${escapeHtml(
            mensaje,
          )}</p>
        </div>
      `,
    })
    return res.status(200).json({ success: true })
  } catch {
    return res
      .status(500)
      .json({ success: false, message: 'No se pudo enviar el correo. Intenta de nuevo.' })
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
