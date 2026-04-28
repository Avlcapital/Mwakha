import PageHero from '../components/PageHero'
import {
  contactCards,
  contactChecklist,
  siteImages,
} from '../data/siteContent'

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Contact and inquiry"
        title="A cleaner path from interest to the next shipment conversation."
        text="The contact page should help different buyer types know exactly how to approach Mwakha, what to include, and where the conversation goes next."
        primaryAction={{
          href: 'mailto:export@mwakha.co.ke?subject=Export%20Tea%20Inquiry',
          label: 'Email the Export Desk',
        }}
        secondaryAction={{
          href: '/company/',
          label: 'Revisit the Company Profile',
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
                Even without a backend form yet, the page can still guide users
                toward the information that makes sample and quotation
                discussions more productive.
              </p>
              <ul className="feature-list">
                {contactChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
              <span>Nairobi coordination</span>
              <span>Mombasa shipping support</span>
              <span>Private label friendly</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
