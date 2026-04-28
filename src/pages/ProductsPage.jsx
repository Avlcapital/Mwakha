import PageHero from '../components/PageHero'
import {
  formatCards,
  productAudienceCards,
  productCards,
  siteImages,
} from '../data/siteContent'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        variant="products"
        eyebrow="Product range"
        title="Tea categories arranged for real buying conversations."
        text="This page gives each tea line more room to breathe, which makes the site feel closer to a working export catalog and less like a compressed brochure trying to say everything at once."
        primaryAction={{
          href: '/contact/',
          label: 'Request Product Direction',
        }}
        secondaryAction={{
          href: '/export-services/',
          label: 'See Export Services',
        }}
        image={siteImages.leavesImage}
        imageAlt="Loose black tea leaves"
        secondaryImage={siteImages.cupImage}
        secondaryImageAlt="Cup of tea"
        note={{
          eyebrow: 'Product focus',
          text: 'Dedicated room for tea categories, formats, and buyer fit.',
        }}
      />

      <section className="section">
        <div className="catalog-layout">
          <article className="content-card catalog-intro">
            <p className="eyebrow">Tea programs</p>
            <h2>Built for wholesale, distribution, and private label growth.</h2>
            <p>
              The product page now behaves more like a catalog wall, with the
              overview on one side and the tea lines grouped as a product board
              instead of another repeated page section.
            </p>
            <ul className="feature-list">
              {formatCards.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className="catalog-grid">
            {productCards.map((product) => (
              <article className="content-card" key={product.title}>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--quiet">
        <div className="product-spotlight">
          <figure className="media-card">
            <img src={siteImages.leavesImage} alt="Loose tea leaves prepared for packing" />
          </figure>

          <div className="product-spotlight__copy">
            <p className="eyebrow">Formats</p>
            <h2>Flexible enough for both bulk trade and shelf-ready retail.</h2>
            <p>
              We also give packing formats a dedicated spotlight so buyers can
              immediately understand how the tea can travel from export pack to
              final market presentation.
            </p>
            <ul className="feature-list">
              {formatCards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="audience-strip">
          <article className="content-card audience-strip__intro">
            <p className="eyebrow">Buyer fit</p>
            <h2>Not every tea program is for every channel.</h2>
            <p>
              This final product section acts like a channel guide, helping a
              prospect match the right tea offer to the kind of business they
              run.
            </p>
          </article>

          {productAudienceCards.map((card) => (
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
