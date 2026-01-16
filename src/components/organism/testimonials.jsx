import { TestimonialContent } from "../molecules/testimonialContent";

export function Testimonials() {
  return (
   <section class="section section--alt" id="testimonials">
      <div class="container">
        <div class="section__head">
          <h2 class="section__title">Loved by learners</h2>
          <p class="section__subtitle">Great for practicing props, lists, and layout.</p>
        </div>

        <div class="grid grid--3">
            <TestimonialContent />
        </div>
      </div>
    </section>
  );
}