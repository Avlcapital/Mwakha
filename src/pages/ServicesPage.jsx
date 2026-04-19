import PageHero from '../components/PageHero'
import SectionLead from '../components/SectionLead'
import { traceabilitySteps } from '../data/buyerExperienceContent'
import {
  assuranceCards,
  marketCards,
  processSteps,
  siteImages,
} from '../data/siteContent'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="services"
        eyebrow="Export services"
        title="A clearer shipment story from cup profile to container handoff."
        text="One of the strongest ideas in export websites is showing buyers that logistics and documentation are understood, not just promised. This page gives those trust signals their own dedicated space."
        primaryAction={{
          href: '/contact/',
          label: 'Discuss Shipment Needs',
        }}
        secondaryAction={{
          href: '/products/',
          label: 'Back to Products',
        }}
        image={siteImages.shipImage}
        imageAlt="Container ship at port"
        secondaryImage={siteImages.plantationImage}
        secondaryImageAlt="Tea plantation"
        note={{
          eyebrow: 'Workflow visibility',
          text: 'Services, documentation, markets, and shipping logic brought forward instead of buried in copy.',
        }}
      />

      <section className="section section--dark">
        <SectionLead
          eyebrow="Export workflow"
          title="How orders move through the business."
          text="Rather than hide operations behind vague claims, the site now shows the path from tea selection to port-ready dispatch."
        />

        <div className="process-list">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="traceability-layout">
          <article className="content-card traceability-layout__intro">
            <p className="eyebrow">Traceability map</p>
            <h2>Show buyers how tea moves from origin to port.</h2>
            <p>
              One of the clearest gaps in the document feedback was a more
              visible origin-to-shipment story. This section translates that
              requirement into a short operational map buyers can understand at
              a glance.
            </p>
          </article>

          <div className="traceability-grid">
            {traceabilitySteps.map((step, index) => (
              <article className="content-card trace-card" key={step.title}>
                <span className="trace-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="service-mosaic">
          <article className="content-card service-mosaic__intro">
            <p className="eyebrow">Market coverage</p>
            <h2>Structured for regions that buy tea differently.</h2>
            <p>
              Export sites often mention countries in passing. Here, market fit
              and trade support are woven together in one operations layout so
              the services page feels more like a working export dashboard.
            </p>
          </article>

          <div className="service-market-grid">
            {marketCards.map((card) => (
              <article className="content-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <div className="service-support-stack">
            {assuranceCards.map((card) => (
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
