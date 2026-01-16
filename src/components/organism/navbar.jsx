import { NavContent } from "../molecules/NavContent";
import { BaseButton } from "../atoms/button";

export function Navbar() {
  return (
 <header className="navbar">
    <div className="container navbar__inner">
      <a className="brand" href="#">
        <span className="brand__logo" aria-hidden="true">◇</span>
        <span className="brand__text">Idaz</span>
      </a>

        <NavContent />

      <div className="navbar__actions">
        <BaseButton variant="ghost" href="#pricing">Sign in</BaseButton>
        <BaseButton variant="primary" href="#pricing">Get started</BaseButton>
      </div>
    </div>
 </header>
  );
}
