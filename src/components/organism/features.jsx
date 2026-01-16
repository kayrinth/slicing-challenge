import { FeaturedCardContent, FeaturedListContent, FeaturedMockRow } from "../molecules/featuredContent";
import { BaseButton } from "../atoms/button";

export function Features() {
    return (
        <section class="section" id="features">
        <div class="container">
            <div class="section__head">
            <h2 class="section__title">Features made for slicing practice</h2>
            <p class="section__subtitle">Each block is designed to become a small component.</p>
            </div>

            <FeaturedCardContent />

            <div class="split">
            <div class="split__media" aria-hidden="true">
                <div class="mock">
                <div class="mock__badge">UI Kit</div>
                <div class="mock__title">Component Library</div>

                <FeaturedMockRow />
                
                <div class="mock__row">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                </div>
            </div>

            <div class="split__content">
                <h3 class="split__title">Recommended slicing approach</h3>
                <FeaturedListContent />
                <div class="split__cta">
                <BaseButton href="#pricing" variant="secondary">View pricing</BaseButton>
                <BaseButton href="#faq" variant="ghost">Read FAQ</BaseButton>
                </div>
            </div>
            </div>
        </div>
        </section> 
    )
}