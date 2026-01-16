export function CardPreviewTop() {
    return (
      <div className="card-preview__top">
        <div className="dot dot--red"></div>
        <div className="dot dot--yellow"></div>
        <div className="dot dot--green"></div>
        <div className="card-preview__title">Dashboard</div>
      </div>
    );
  }

  export function CardPreviewBody({ count, desc, status, variant }) {
  return (
    <div className="mini-list__item">
      <span className={`pill pill--${variant}`}>{status}</span>
      <span className="mini-list__text">{desc}</span>
      <span className="mini-list__num">{count}</span>
    </div>
  );
}