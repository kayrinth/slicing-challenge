import { FooterContent } from "../molecules/footerContent"

export function Footer() {
    return(
        <footer className="footer">
        <div className="container footer__inner">
        <div className="footer__brand">
            <div className="brand brand--footer">
            <span className="brand__logo" aria-hidden="true">◇</span>
            <span className="brand__text">Idaz</span>
            </div>
            <p className="footer__text">A simple page for slicing into React components.</p>
        </div>

        <div className="footer__links">
            <FooterContent />
        </div>
        </div>

        <div className="container footer__bottom">
        <span>© 2026 Idaz. All rights reserved.</span>
        <span className="footer__small">Made for HTML/CSS slicing practice.</span>
        </div>
    </footer>
    )
}