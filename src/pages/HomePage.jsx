import PageHero from '../components/PageHero'
import SectionLead from '../components/SectionLead'
import { buyerDeckLink, specSheetLink } from '../data/buyerExperienceContent'
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
        eyebrow="Kenyan tea, export ready"
        title="Premium Orthodox, CTC, and Green Tea for private label and bulk buyers."
        text="Consistent grades, traceable origin, export packaging, and 72 hour sample turnaround. FOB/CIF options for Europe, MENA, and North America."
        primaryAction={{
          href: '/contact/',
          label: 'Request Samples — 72 Hour Prep',
        }}
        secondaryAction={{
          href: '/products/',
          label: 'View Product Slate',
        }}
        metrics={[
          { value: '72hr', label: 'Sample turnaround' },
          { value: 'Private label ready', label: 'Artwork and MOQ guidance' },
          { value: 'FOB / CIF', label: 'Trade terms available' },
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

      <section className="section resource-band">
        <article className="resource-panel resource-panel--primary">
          <p className="eyebrow">Buyer resources</p>
          <h2>Procurement teams need more than one CTA.</h2>
          <p>
            The documents call for a direct sample action, a browsing path, and
            a downloadable buyer resource. This section adds the resource layer
            that was still missing from the site.
          </p>
          <div className="resource-panel__actions">
            <a className="button button--solid" href={buyerDeckLink} target="_blank" rel="noreferrer">
              Download Buyer Deck
            </a>
            <a className="button button--text" href={specSheetLink} target="_blank" rel="noreferrer">
              Open Spec Sheet
            </a>
          </div>
        </article>

        <article className="resource-panel">
          <p className="eyebrow">Trust cue line</p>
          <h3>Exporting since 2010 · HACCP-aligned process · FOB & CIF terms available</h3>
          <p>
            Contact hours: Mon–Fri, 08:00–17:00 EAT. Fastest response for
            verified buyers and sample request submissions.
          </p>
        </article>
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
