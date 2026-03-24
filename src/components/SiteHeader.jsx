import { useState } from 'react'
import {
  companyName,
  companyTagline,
  navigation,
} from '../data/siteContent'

export default function SiteHeader({ pageKey }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">M</span>
        <span className="brand-copy">
          <strong>{companyName}</strong>
          <span>{companyTagline}</span>
        </span>
      </a>

      <button
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
        onClick={() => setIsMenuOpen((open) => !open)}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`header-panel${isMenuOpen ? ' is-open' : ''}`}>
        <nav className="site-nav" id="site-navigation" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              aria-current={item.key === pageKey ? 'page' : undefined}
              href={item.href}
              key={item.key}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button button--ghost site-cta"
          href="mailto:export@mwakha.co.ke?subject=Sample%20Deck%20Request"
          onClick={closeMenu}
        >
          Request Samples
        </a>
      </div>
    </header>
  )
}
