import PageHero from '../components/PageHero'
import SectionLead from '../components/SectionLead'
import {
  companyCards,
  homeHighlights,
  siteImages,
  trustPoints,
} from '../data/siteContent'

export default function HomePage() {
  return (
    <>
      <PageHero
        variant="home"
        eyebrow="Tea export programs for serious buyers"
        title="From Kenyan highlands to dependable global tea shelves."
        text="Inspired by traditional exporter websites but rebuilt as a richer multi-page experience, Mwakha positions tea as both an origin story and a supply chain promise. Buyers can now explore the company, product range, export services, and contact path page by page."
        primaryAction={{
          href: '/contact/',
          label: 'Start an Inquiry',
        }}
        secondaryAction={{
          href: '/products/',
          label: 'View Product Slate',
        }}
        metrics={[
          { value: '72hr', label: 'Sample prep direction' },
          { value: 'Bulk + Retail', label: 'Packing flexibility' },
          { value: 'FOB / CFR / CIF', label: 'Shipment support' },
        ]}
        image={siteImages.plantationImage}
        imageAlt="Tea plantation in the highlands"
        secondaryImage={siteImages.cupImage}
        secondaryImageAlt="Cup of black tea"
        note={{
          eyebrow: 'Multi-page upgrade',
          text: 'A broader, more credible export presence than a single long-scroll brochure.',
        }}
      />

      <section className="trust-strip">
        {trustPoints.map((point) => (
          <p key={point}>{point}</p>
        ))}
      </section>

      <section className="section">
        <SectionLead
          eyebrow="Explore the site"
          title="Each page now does a specific job for the buyer."
          text="Instead of compressing every trust signal into one landing page, the site separates company story, products, services, and contact into cleaner routes that feel more substantial and easier to scan."
          split
        />

        <div className="teaser-grid">
          {homeHighlights.map((item) => (
            <a className="page-link-card" href={item.href} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>Open page</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section section--quiet">
        <div className="home-storyboard">
          <article className="content-card content-card--featured">
            <p className="eyebrow">Why this structure works</p>
            <h2>The homepage is now the front door, not the whole building.</h2>
            <p className="lead-text">
              It gives the overview and pushes buyers into the deeper pages
              where trust, product fit, and export detail can be explained more
              clearly.
            </p>
            <p>
              That makes the website feel more substantial and more credible for
              actual buyer evaluation.
            </p>
          </article>

          <div className="stack-grid">
            {companyCards.map((card) => (
              <article className="content-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
