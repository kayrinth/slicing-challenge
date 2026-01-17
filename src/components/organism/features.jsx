import { FeaturedCardContent, FeaturedListContent, FeaturedMockRow } from "../molecules/featuredContent";
import { BaseButton } from "../atoms/button";

export function Features() {
    return (
        <section className="section" id="features">
            <div className="container">
                <div className="section__head">
                <h2 className="section__title">Features made for slicing practice</h2>
                <p className="section__subtitle">Each block is designed to become a small component.</p>
                </div>

                <FeaturedCardContent />

                <div className="split">
                <div className="split__media" aria-hidden="true">
                    <div className="mock">
                    <div className="mock__badge">UI Kit</div>
                    <div className="mock__title">Component Library</div>

                    <FeaturedMockRow />
                    
                    <div className="mock__row">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    </div>
                </div>

                <div className="split__content">
                    <h3 className="split__title">Recommended slicing approach</h3>
                    <FeaturedListContent />
                    <div className="split__cta">
                    <BaseButton href="#pricing" variant="secondary">View pricing</BaseButton>
                    <BaseButton href="#faq" variant="ghost">Read FAQ</BaseButton>
                    </div>
                </div>
                </div>
            </div>
        </section> 
    )
}