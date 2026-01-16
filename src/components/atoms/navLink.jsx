export function NavLink({ children, href, ...props }) {
  return (
    <a href={href} className="nav__link" {...props}>{children}</a>
  )
}