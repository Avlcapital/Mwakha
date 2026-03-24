import PageHero from '../components/PageHero'
import {
  companyCards,
  principleCards,
  siteImages,
} from '../data/siteContent'

export default function CompanyPage() {
  return (
    <>
      <PageHero
        variant="reverse"
        eyebrow="Company profile"
        title="A company page that feels ready for buyer scrutiny."
        text="The goal here is not to sound big for the sake of sounding big. It is to communicate sourcing mindset, commercial reliability, and presentation quality in a way that feels credible to importers and distributors."
        primaryAction={{
          href: '/contact/',
          label: 'Talk to the Export Desk',
        }}
        secondaryAction={{
          href: '/products/',
          label: 'See Tea Categories',
        }}
        image={siteImages.cupImage}
        imageAlt="Cup of black tea"
        secondaryImage={siteImages.plantationImage}
        secondaryImageAlt="Tea plantation"
        note={{
          eyebrow: 'Buyer-first profile',
          text: 'Stronger hierarchy, cleaner claims, and a more commercial narrative than the usual catalog page.',
        }}
      />

      <section className="section">
        <div className="company-storyboard">
          <article className="content-card content-card--featured company-storyboard__lead">
            <p className="eyebrow">Who we are</p>
            <h2>Mwakha focuses on tea programs we can source, cup, and present with confidence.</h2>
            <p className="lead-text">
              The company story is arranged more like an editorial profile than
              a standard exporter page so it feels deliberate rather than
              generic.
            </p>
            <p>
              That means less filler, less repetition, and more emphasis on the
              qualities buyers actually look for before they start sample or
              pricing discussions.
            </p>
          </article>

          <figure className="media-card media-card--tall">
            <img src={siteImages.plantationImage} alt="Tea estate landscape" />
          </figure>

          <div className="stack-grid company-storyboard__stack">
            {companyCards.map((card) => (
              <article className="content-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="company-principles">
          <article className="content-card company-principles__intro">
            <p className="eyebrow">Operating principles</p>
            <h2>How the company should feel to a prospective importer.</h2>
            <p>
              These are the qualities the rest of the site now reinforces:
              thoughtful range selection, responsive communication, and a better
              fit between tea, packing, and destination market.
            </p>
          </article>

          {principleCards.map((card) => (
            <article className="content-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
