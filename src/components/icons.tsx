/** Íconos SVG inline (sin dependencias externas). */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  )
}

export function DesktopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  )
}

export function GamepadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 12h4M8 10v4" />
      <circle cx="15.5" cy="11.5" r="0.6" fill="currentColor" />
      <circle cx="17.5" cy="13.5" r="0.6" fill="currentColor" />
      <path d="M6.5 7h11a4.5 4.5 0 0 1 4.4 5.5l-.8 3.6A2.5 2.5 0 0 1 16.9 17l-1.4-2a2 2 0 0 0-1.6-.8h-3.8a2 2 0 0 0-1.6.8L7.1 17a2.5 2.5 0 0 1-4.2-.9l-.8-3.6A4.5 4.5 0 0 1 6.5 7Z" />
    </svg>
  )
}

export function WebIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  )
}

export function MobileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M10 5h4" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.34 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 1.82c2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.76c0 4.5-3.66 8.15-8.16 8.15a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.5 3.66-8.15 8.16-8.15Zm-2.7 4.44c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.62s.7 1.88.8 2.01c.1.13 1.38 2.1 3.34 2.95 1.63.7 1.96.56 2.32.53.35-.03 1.14-.47 1.3-.92.16-.45.16-.83.11-.91-.05-.08-.18-.13-.38-.23-.2-.1-1.18-.58-1.36-.64-.18-.07-.32-.1-.45.1-.13.2-.51.64-.63.77-.11.13-.23.15-.43.05-.2-.1-.85-.31-1.62-1a6.1 6.1 0 0 1-1.12-1.39c-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.08-.62-1.48-.16-.38-.32-.33-.44-.34l-.38-.01Z" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function PhoneCallIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v2a2 2 0 0 1-2 2A16 16 0 0 1 3 7a2 2 0 0 1 2-3Z" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.5c-1.3.1-2.5-.3-3.6-1v5.9c0 3.4-2.6 5.9-5.9 5.9A5.7 5.7 0 0 1 5 14.4c0-3.3 3-5.9 6.4-5.3v2.7c-.4-.1-.9-.2-1.3-.2-1.5 0-2.6 1.2-2.6 2.7 0 1.6 1.2 2.7 2.7 2.7 1.6 0 2.8-1.2 2.8-2.9V3h1.5Z" />
    </svg>
  )
}

/** Mapa nombre -> componente, para renderizar por dato. */
export const SERVICE_ICONS = {
  phone: PhoneIcon,
  desktop: DesktopIcon,
  gamepad: GamepadIcon,
  web: WebIcon,
  mobile: MobileIcon,
}
