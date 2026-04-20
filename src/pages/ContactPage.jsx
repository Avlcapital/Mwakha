import PageHero from '../components/PageHero'
import SampleRequestForm from '../components/SampleRequestForm'
import {
  buyerDeckLink,
  sampleRequestOptions,
  specSheetLink,
} from '../data/buyerExperienceContent'
import {
  contactCards,
  contactChecklist,
  siteImages,
} from '../data/siteContent'

const whatsappLink =
  'https://wa.me/254700000000?text=Hello%20Mwakha%20team,%20I%20would%20like%20to%20discuss%20tea%20samples.'

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Contact and inquiry"
        title="Start a sample request, private label brief, or wholesale tea inquiry."
        text="The document review asked for a clearer path into the business, so this page now combines decision routes, response expectations, and a guided sample request flow."
        primaryAction={{
          href: '#sample-request',
          label: 'Start Sample Request',
        }}
        secondaryAction={{
          href: buyerDeckLink,
          label: 'Open Buyer Deck',
        }}
        image={siteImages.plantationImage}
        imageAlt="Tea plantation landscape"
        secondaryImage={siteImages.shipImage}
        secondaryImageAlt="Container ship in transit"
        note={{
          eyebrow: 'Inquiry-ready',
          text: 'Built to guide wholesale buyers, private label projects, and sample requests into the right conversation.',
        }}
      />

      <section className="section">
        <div className="contact-board">
          <div className="contact-stack">
            <article className="content-card contact-stack__intro">
              <p className="eyebrow">Inquiry paths</p>
              <h2>Choose the route that fits your tea program.</h2>
              <p>
                Different buyers need different starting points, so this page is
                arranged more like a decision board than another standard
                section stack.
              </p>
            </article>

            {contactCards.map((card) => (
              <article className="content-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a className="inline-link" href={card.href}>
                  {card.action}
                </a>
              </article>
            ))}
          </div>

          <aside className="contact-aside">
            <figure className="media-card media-card--compact">
              <img src={siteImages.cupImage} alt="Prepared black tea cup" />
            </figure>

            <article className="content-card content-card--checklist contact-note">
              <p className="eyebrow">What to send</p>
              <h3>A short buyer brief helps the conversation move faster.</h3>
              <p>
                The form below captures the same commercial details the document
                feedback asked for: product fit, sample size, shipping method,
                and private label readiness.
              </p>
              <ul className="feature-list">
                {contactChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="content-card contact-note">
              <p className="eyebrow">Response window</p>
              <h3>Mon-Fri, 08:00-17:00 EAT</h3>
              <p>{sampleRequestOptions.responseTime}</p>
              <a
                className="inline-link"
                href={whatsappLink}
                rel="noreferrer"
                target="_blank"
              >
                Message on WhatsApp
              </a>
            </article>
          </aside>
        </div>
      </section>

      <section className="section section--quiet" id="sample-request">
        <div className="contact-experience">
          <SampleRequestForm />

          <aside className="contact-rail">
            <article className="content-card">
              <p className="eyebrow">Reference materials</p>
              <h3>Open the same commercial resources buyers ask for most.</h3>
              <p>
                The feedback documents called for direct access to a buyer deck
                and product sheet so prospects can self-qualify before a call.
              </p>
              <div className="resource-panel__actions resource-panel__actions--stack">
                <a className="button button--solid" href={buyerDeckLink}>
                  Download Buyer Deck
                </a>
                <a className="button button--text" href={specSheetLink}>
                  Open Spec Sheet
                </a>
              </div>
            </article>

            <article className="content-card">
              <p className="eyebrow">Why this helps</p>
              <h3>Serious buyers can give better briefs when the path is guided.</h3>
              <ul className="feature-list">
                <li>Sample size and fee are visible before submission.</li>
                <li>Shipping and incoterm preferences are collected early.</li>
                <li>Private label prospects can declare pack size and volume.</li>
              </ul>
            </article>

            <article className="content-card">
              <p className="eyebrow">Direct desk</p>
              <h3>{sampleRequestOptions.whatsappLabel}</h3>
              <p>
                Useful for confirming sample dispatch, checking response status,
                or sharing quick clarifications after the form is submitted.
              </p>
              <a
                className="inline-link"
                href="mailto:export@mwakha.co.ke?subject=Export%20Tea%20Inquiry"
              >
                Email the export desk
              </a>
            </article>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="cta-card">
          <div className="cta-copy">
            <p className="eyebrow">Coordination points</p>
            <h2>Ready to shape the next tea export order.</h2>
            <p>
              The site now ends with a clearer action path for wholesale buyers,
              private label projects, and product sampling conversations.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="button button--solid"
              href="mailto:export@mwakha.co.ke?subject=Wholesale%20Tea%20Inquiry"
            >
              Write to export@mwakha.co.ke
            </a>
            <div className="cta-details">
              <span>Nairobi coordination | 08:00-17:00 EAT</span>
              <span>Mombasa shipping support</span>
              <span>Private label friendly | WhatsApp ready</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
