export function FooterLink({ title, links }) {
  return (
    <div className="link-col">
      <div className="link-col__title">{title}</div>

      {links.map((link, index) => (
        <a key={index} className="link" href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  )
}
