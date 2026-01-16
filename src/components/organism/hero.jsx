import { BaseButton } from "../atoms/button"
import { CardPreviewTop, CardPreviewBody } from "../atoms/cardPreview"
import { StatsContent } from "../molecules/statsContent"

export function Hero () {
    return (
      <>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="badge">
                <span className="badge__dot" aria-hidden="true"></span>
                New: Weekly UI challenges for students
              </p>

              <h1 className="hero__title">
                Build clean, reusable UI components
                <span className="hero__title-accent"> fast</span>
              </h1>

              <p className="hero__subtitle">
                A simple landing page template for slicing practice.
                Your task: break this page into small components and reuse them.
              </p>

              <div className="hero__cta">
                <BaseButton variant="primary" href="#features">Explore features</BaseButton>
                <BaseButton variant="secondary" href="#faq">How it works</BaseButton>
              </div>

              <div className="hero__meta">
                <div className="avatar-row" aria-label="Happy learners">
                  <span className="avatar avatar--a" aria-hidden="true"></span>
                  <span className="avatar avatar--b" aria-hidden="true"></span>
                  <span className="avatar avatar--c" aria-hidden="true"></span>
                  <span className="avatar avatar--d" aria-hidden="true"></span>
                  <span className="avatar avatar--e" aria-hidden="true"></span>
                  <span className="avatar-row__text">Trusted by 2,400+ learners</span>
                </div>

                <div className="rating">
                  <span className="rating__stars" aria-hidden="true">★★★★★</span>
                  <span className="rating__text">4.9/5 average rating</span>
                </div>
              </div>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="card-preview">
                <CardPreviewTop />
                <div className="card-preview__body">
                  <div className="mini-chart"></div>
                  <div className="mini-list">
                      <CardPreviewBody 
                        variant="success" 
                        status="Active" 
                        desc="Components built" 
                        count="18" 
                      />
                      <CardPreviewBody 
                        variant="info" 
                        status="Draft" 
                        desc="In Progress" 
                        count="6" 
                      />
                      <CardPreviewBody 
                        variant="warning" 
                        status="Review" 
                        desc="Needs Polish" 
                        count="3" 
                      />
                  </div>
                  <div className="mini-cta">
                    <BaseButton variant="primary" className={"btn--small"} href="#preview">Publish</BaseButton>
                    <BaseButton variant="ghost" className={"btn--small"} href="#preview">Preview</BaseButton>
                  </div>
                </div>
              </div>
              <div className="blob blob--1"></div>
              <div className="blob blob--2"></div>
            </div>
          </div>
        </section>
        <section class="stats">
          <div class="container">
            <StatsContent />
          </div>
        </section>
      </>
    )
}