/**
 * Isotipo de TecnoFix (la "T" y la "F" entrelazadas) como componente,
 * para usarlo en grande como gráfico de marca con colores ajustables.
 * Trazos tomados de src/assets/ICONO TECNOFIX.svg.
 */
export function BrandMark({
  className,
  tClassName = 'fill-brand-purple',
  fClassName = 'fill-brand-cyan',
}: {
  className?: string
  /** Clases de relleno para la "T". */
  tClassName?: string
  /** Clases de relleno para la "F". */
  fClassName?: string
}) {
  return (
    <svg viewBox="0 0 195 177" className={className} aria-hidden>
      <path
        className={fClassName}
        d="M130.765 151.07L98.7654 175.5V45.3718H174.765L160.765 77.2806H130.765V151.07Z"
      />
      <path
        className={tClassName}
        d="M53.7654 150.073L85.7654 175.001V32.4088H179.765L193.765 0.5H0.765384L14.7654 32.4088H53.7654V150.073Z"
      />
    </svg>
  )
}
