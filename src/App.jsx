import { useEffect } from 'react'
import './App.css'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'

const pages = {
  home: HomePage,
  company: CompanyPage,
  products: ProductsPage,
  services: ServicesPage,
  contact: ContactPage,
}

function App({ pageKey = 'home' }) {
  const resolvedPageKey = pages[pageKey] ? pageKey : 'home'
  const Page = pages[resolvedPageKey]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const targets = Array.from(
      document.querySelectorAll('.section, .trust-strip, .site-footer'),
    )

    targets.forEach((target, index) => {
      target.classList.add('reveal-target')
      target.style.setProperty('--reveal-delay', `${Math.min(index * 70, 260)}ms`)
    })

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [resolvedPageKey])

  return (
    <div className={`page-shell page-shell--${resolvedPageKey}`}>
      <SiteHeader pageKey={resolvedPageKey} />

      <main>
        <Page />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
