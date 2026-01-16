import {PricingContent} from "../molecules/pricingContent";

export function Pricing() {
    return (
        <section class="section" id="pricing">
            <div class="container">
                <div class="section__head">
                <h2 class="section__title">Pricing</h2>
                <p class="section__subtitle">Three cards with a highlighted plan. Great for component variants.</p>
                </div>

                <div class="grid grid--3">
                    <PricingContent />
                </div>
            </div>
        </section>
    )
} 