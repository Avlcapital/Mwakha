export default function PageHero({
  eyebrow,
  title,
  text,
  variant = 'default',
  primaryAction,
  secondaryAction,
  metrics,
  image,
  imageAlt,
  secondaryImage,
  secondaryImageAlt,
  note,
}) {
  return (
    <section className={`hero section hero--${variant}`}>
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>

        <div className="hero-actions">
          {primaryAction ? (
            <a className="button button--solid" href={primaryAction.href}>
              {primaryAction.label}
            </a>
          ) : null}
          {secondaryAction ? (
            <a className="button button--text" href={secondaryAction.href}>
              {secondaryAction.label}
            </a>
          ) : null}
        </div>

        {metrics?.length ? (
          <div className="hero-metrics" aria-label="Business highlights">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </article>
            ))}
          </div>
        ) : null}
      </div>

      <div className="hero-media">
        <figure className="hero-frame hero-frame--main">
          <img src={image} alt={imageAlt} loading="eager" />
        </figure>
        {secondaryImage ? (
          <figure className="hero-frame hero-frame--accent">
            <img src={secondaryImage} alt={secondaryImageAlt} />
          </figure>
        ) : null}
        {note ? (
          <div className="hero-note">
            <span className="hero-note__eyebrow">{note.eyebrow}</span>
            <strong>{note.text}</strong>
          </div>
        ) : null}
      </div>
    </section>
  )
}
