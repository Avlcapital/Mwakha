import {
  companyName,
  companyTagline,
  footerMarkets,
  footerPrograms,
  navigation,
} from '../data/siteContent'
import { buyerDeckLink } from '../data/buyerExperienceContent'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-showcase">
        <div className="footer-brand-block">
          <span className="brand-mark footer-brand-mark">M</span>
          <div className="footer-brand-copy">
            <p className="footer-eyebrow">East African tea export desk</p>
            <h2>{companyName}</h2>
            <p>
              {companyTagline}. Built to support importers, distributors, and
              private label buyers with a cleaner commercial presence.
            </p>
          </div>
          <a
            className="button button--solid footer-button"
            href={buyerDeckLink}
          >
            Download Buyer Deck
          </a>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <p className="footer-heading">Explore</p>
            <div className="footer-link-list">
              {navigation.map((item) => (
                <a href={item.href} key={item.key}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Tea programs</p>
            <ul className="footer-list">
              {footerPrograms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Target markets</p>
            <ul className="footer-list">
              {footerMarkets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Trade desk</p>
            <ul className="footer-list">
              <li>Nairobi coordination</li>
              <li>Mombasa shipping support</li>
              <li>Private label friendly</li>
              <li>export@mwakha.co.ke</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-meta">
        <p>
          Copyright {new Date().getFullYear()} {companyName}. Tea export
          website concept for wholesale buyers and private label partners.
        </p>
        <div className="footer-meta-links">
          <a href="mailto:export@mwakha.co.ke">export@mwakha.co.ke</a>
          <a href="/media-attributions.html" target="_blank" rel="noreferrer">
            Media attributions
          </a>
        </div>
      </div>
    </footer>
  )
}
