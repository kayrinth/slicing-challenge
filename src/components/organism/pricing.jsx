import {PricingContent} from "../molecules/pricingContent";

export function Pricing() {
    return (
        <section className="section" id="pricing">
            <div className="container">
                <div className="section__head">
                <h2 className="section__title">Pricing</h2>
                <p className="section__subtitle">Three cards with a highlighted plan. Great for component variants.</p>
                </div>

                <div className="grid grid--3">
                    <PricingContent />
                </div>
            </div>
        </section>
    )
} 