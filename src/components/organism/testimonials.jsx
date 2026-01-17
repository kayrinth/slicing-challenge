import { TestimonialContent } from "../molecules/testimonialContent";

export function Testimonials() {
  return (
   <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Loved by learners</h2>
          <p className="section__subtitle">Great for practicing props, lists, and layout.</p>
        </div>

        <div className="grid grid--3">
            <TestimonialContent />
        </div>
      </div>
    </section>
  );
}