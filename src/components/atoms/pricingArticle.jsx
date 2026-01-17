export function PricingArticle({className, title, desc, amount, button, features, access, component, tag, variant}) {
    return (
        <article className={`price-card ${className ?? ''}`}>           
            {tag && (
                <div className="price-card__tag">{tag}</div>
            )}
            <h3 className="price-card__title">{title}</h3>
            <p className="price-card__desc">{desc}</p>
            <div className="price-card__price">
              <span className="price-card__currency">$</span>
              <span className="price-card__amount">{amount}</span>
              <span className="price-card__period">/mo</span>
            </div>
            <ul className="list list--compact">
              <li className="list__item"><span className="check">✓</span>{features}</li>
              <li className="list__item"><span className="check">✓</span>{component}</li>
              <li className="list__item"><span className="check">✓</span>{access}</li>
            </ul>
            <a className={`btn btn--${variant} btn--full`} href="#">{button}</a>
        </article>
    )
}