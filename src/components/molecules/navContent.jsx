import { NavLink } from "../atoms/navLink";

export function NavContent() {
  return (
    <nav className="nav" aria-label="Primary">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
    </nav>
  );
}