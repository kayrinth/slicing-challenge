import { FaqContent } from "../molecules/faqContent";

export function Faq() {
    return( 
        <section className="section section--alt" id="faq">
            <div className="container">
                <div className="section__head">
                <h2 className="section__title">FAQ</h2>
                <p className="section__subtitle">Each item can become its own component.</p>
                </div>

                <div className="faq">
                    <FaqContent />
                </div>
            </div>
        </section>
    )
}