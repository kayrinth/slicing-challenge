export function FeaturedCard({ icon, title, text, link }) {
    return (
        <article class="feature-card">
            <div class="icon-bubble" aria-hidden="true">{icon}</div>
            <h3 class="feature-card__title">{title}</h3>
            <p class="feature-card__text">
              {text}
            </p>
            <a class="feature-card__link" href={link}>Learn more</a>
        </article>
    );
}