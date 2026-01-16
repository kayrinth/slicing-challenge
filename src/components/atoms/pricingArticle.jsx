export function PricingArticle({className, title, desc, amount, button, features, access, component, tag, variant}) {
    return (
        <article class={`price-card ${className ?? ''}`}>           
            {tag && (
                <div className="price-card__tag">{tag}</div>
            )}
            <h3 class="price-card__title">{title}</h3>
            <p class="price-card__desc">{desc}</p>
            <div class="price-card__price">
              <span class="price-card__currency">$</span>
              <span class="price-card__amount">{amount}</span>
              <span class="price-card__period">/mo</span>
            </div>
            <ul class="list list--compact">
              <li class="list__item"><span class="check">✓</span>{features}</li>
              <li class="list__item"><span class="check">✓</span>{component}</li>
              <li class="list__item"><span class="check">✓</span>{access}</li>
            </ul>
            <a class={`btn btn--${variant} btn--full`} href="#">{button}</a>
        </article>
    )
}