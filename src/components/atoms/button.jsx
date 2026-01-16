
export function BaseButton({ children, variant, className, ...props }) {
  return (
    <button
      className={`btn btn--${variant} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}