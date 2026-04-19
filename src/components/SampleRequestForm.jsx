import { useEffect, useMemo, useState } from 'react'
import {
  buyerDeckLink,
  sampleRequestOptions,
} from '../data/buyerExperienceContent'

const STORAGE_KEY = 'mwakha-sample-request'

const steps = [
  'Buyer & contact',
  'Product details',
  'Shipping & payment',
  'Review & submit',
]

const createInitialState = () => ({
  buyerType: '',
  companyName: '',
  fullName: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  sampleSize: '',
  packagingPreference: '',
  privateLabelInterest: false,
  targetAnnualVolume: '',
  desiredPackSizes: [],
  deliveryDateFrom: '',
  deliveryDateTo: '',
  artworkName: '',
  notes: '',
  shippingAddress: '',
  shippingMethod: '',
  incoterms: 'FOB',
  paymentMethod: 'Invoice (net 7)',
  agreeToTerms: false,
  companyWebsite: '',
})

function createRequestId() {
  const now = new Date()
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(
    now.getDate(),
  ).padStart(2, '0')}`
  const suffix = String(Math.floor(Math.random() * 9000) + 1000)

  return `MWK-${date}-${suffix}`
}

function getSavedDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw)
    const isFresh = Date.now() - parsed.savedAt < 24 * 60 * 60 * 1000

    return isFresh ? parsed.data : null
  } catch {
    return null
  }
}

function getStepErrors(form, step) {
  const errors = {}

  if (step === 0) {
    if (!form.buyerType) errors.buyerType = 'Choose the option that best describes your business.'
    if (!form.companyName) errors.companyName = 'Company name is required.'
    if (!form.fullName) errors.fullName = 'Full name is required.'
    if (!form.email) {
      errors.email = 'Business email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Enter a valid email address.'
    }
    if (!form.country) errors.country = 'Country / region is required.'
  }

  if (step === 1) {
    if (!form.product) errors.product = 'Choose a tea line or product program.'
    if (!form.sampleSize) errors.sampleSize = 'Choose a sample quantity.'
    if (form.privateLabelInterest && !form.targetAnnualVolume) {
      errors.targetAnnualVolume = 'Select an indicative annual volume.'
    }
  }

  if (step === 2) {
    if (!form.shippingAddress) errors.shippingAddress = 'Shipping address is required.'
    if (!form.shippingMethod) errors.shippingMethod = 'Choose a shipping method.'
    if (!form.incoterms) errors.incoterms = 'Select incoterms.'
    if (!form.paymentMethod) errors.paymentMethod = 'Select a payment method.'
    if (!form.agreeToTerms) errors.agreeToTerms = 'You need to agree before submitting.'
  }

  if (step === 3 && form.companyWebsite) {
    errors.companyWebsite = 'Spam validation triggered. Please clear the hidden field.'
  }

  return errors
}

function FieldError({ message }) {
  if (!message) {
    return null
  }

  return <span className="field-error">{message}</span>
}

export default function SampleRequestForm() {
  const [form, setForm] = useState(() => ({
    ...createInitialState(),
    ...getSavedDraft(),
  }))
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState(null)

  const selectedSampleSize = useMemo(
    () =>
      sampleRequestOptions.sampleSizes.find((size) => size.value === form.sampleSize),
    [form.sampleSize],
  )

  const shippingNote = useMemo(
    () =>
      sampleRequestOptions.shippingMethods.find(
        (method) => method.value === form.shippingMethod,
      )?.note,
    [form.shippingMethod],
  )

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          savedAt: Date.now(),
          data: form,
        }),
      )
    } catch {
      // Ignore storage errors and keep the form usable.
    }
  }, [form])

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }))
  }

  function togglePackSize(packSize) {
    const nextPackSizes = form.desiredPackSizes.includes(packSize)
      ? form.desiredPackSizes.filter((item) => item !== packSize)
      : [...form.desiredPackSizes, packSize]

    updateField('desiredPackSizes', nextPackSizes)
  }

  function handleArtworkChange(event) {
    const file = event.target.files?.[0]

    if (!file) {
      updateField('artworkName', '')
      return
    }

    const extension = file.name.split('.').pop()?.toLowerCase()
    const allowedExtensions = ['png', 'jpg', 'jpeg', 'pdf']

    if (!allowedExtensions.includes(extension)) {
      setErrors((current) => ({
        ...current,
        artworkName: 'Upload a PNG, JPG, JPEG, or PDF file.',
      }))
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((current) => ({
        ...current,
        artworkName: 'Artwork files must be 5 MB or smaller.',
      }))
      return
    }

    updateField('artworkName', file.name)
  }

  function goNext() {
    const stepErrors = getStepErrors(form, currentStep)

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }

    setErrors({})
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
  }

  function goBack() {
    setErrors({})
    setCurrentStep((step) => Math.max(step - 1, 0))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const stepErrors = getStepErrors(form, currentStep)

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }

    const requestId = createRequestId()

    setSubmitState({
      requestId,
      responseTime: sampleRequestOptions.responseTime,
    })
    localStorage.removeItem(STORAGE_KEY)
    setErrors({})
  }

  if (submitState) {
    return (
      <section className="sample-form success-card">
        <p className="eyebrow">Request received</p>
        <h2>Your sample request is ready for follow-up.</h2>
        <p>
          Request ID: <strong>{submitState.requestId}</strong>
        </p>
        <p>{submitState.responseTime}</p>
        <div className="success-card__actions">
          <a className="button button--solid" href={buyerDeckLink} target="_blank" rel="noreferrer">
            Open Buyer Deck
          </a>
          <a
            className="button button--text"
            href="https://wa.me/254700000000?text=Hello%20Mwakha%20team,%20I%20have%20submitted%20a%20sample%20request."
            target="_blank"
            rel="noreferrer"
          >
            Contact via WhatsApp
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="sample-form">
      <div className="sample-form__header">
        <div>
          <p className="eyebrow">Guided sample request</p>
          <h2>Start Sample Request</h2>
          <p>
            Segmented for wholesalers, distributors, private label buyers, and
            first-time importers. Draft answers are saved locally for 24 hours.
          </p>
        </div>

        <div className="sample-form__aside">
          <p className="sample-form__fee-label">Estimated sample fee</p>
          <strong>{selectedSampleSize?.fee ?? 'Choose a sample size'}</strong>
          <span>{sampleRequestOptions.responseTime}</span>
        </div>
      </div>

      <div className="sample-form__progress" aria-hidden="true">
        <span style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></span>
      </div>

      <div className="sample-form__steps">
        {steps.map((step, index) => (
          <div
            className={`sample-step${index === currentStep ? ' is-active' : ''}${index < currentStep ? ' is-complete' : ''}`}
            key={step}
          >
            <span>{index + 1}</span>
            <small>{step}</small>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 0 ? (
          <div className="sample-form__grid">
            <label className="field-group">
              <span className="field-label">Buyer type</span>
              <select
                value={form.buyerType}
                onChange={(event) => updateField('buyerType', event.target.value)}
              >
                <option value="">Choose buyer type</option>
                {sampleRequestOptions.buyerTypes.map((buyerType) => (
                  <option value={buyerType} key={buyerType}>
                    {buyerType}
                  </option>
                ))}
              </select>
              <FieldError message={errors.buyerType} />
            </label>

            <label className="field-group">
              <span className="field-label">Company name</span>
              <input
                maxLength={100}
                placeholder="Acme Imports Ltd."
                type="text"
                value={form.companyName}
                onChange={(event) => updateField('companyName', event.target.value)}
              />
              <FieldError message={errors.companyName} />
            </label>

            <label className="field-group">
              <span className="field-label">Full name</span>
              <input
                maxLength={60}
                placeholder="Jane Doe"
                type="text"
                value={form.fullName}
                onChange={(event) => updateField('fullName', event.target.value)}
              />
              <FieldError message={errors.fullName} />
            </label>

            <label className="field-group">
              <span className="field-label">Business email</span>
              <input
                placeholder="jane@company.com"
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
              />
              <FieldError message={errors.email} />
            </label>

            <label className="field-group">
              <span className="field-label">Phone (WhatsApp preferred)</span>
              <input
                placeholder="+254 7XX XXX XXX"
                type="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
              />
            </label>

            <label className="field-group">
              <span className="field-label">Country / region</span>
              <select
                value={form.country}
                onChange={(event) => updateField('country', event.target.value)}
              >
                <option value="">Choose market</option>
                {sampleRequestOptions.countries.map((country) => (
                  <option value={country} key={country}>
                    {country}
                  </option>
                ))}
              </select>
              <FieldError message={errors.country} />
            </label>
          </div>
        ) : null}

        {currentStep === 1 ? (
          <div className="sample-form__grid">
            <label className="field-group">
              <span className="field-label">Product</span>
              <select
                value={form.product}
                onChange={(event) => updateField('product', event.target.value)}
              >
                <option value="">Choose tea line</option>
                {sampleRequestOptions.products.map((product) => (
                  <option key={product.value} value={product.value}>
                    {product.label}
                  </option>
                ))}
              </select>
              <FieldError message={errors.product} />
            </label>

            <div className="field-group field-group--full">
              <span className="field-label">Quantity for sample</span>
              <div className="choice-grid">
                {sampleRequestOptions.sampleSizes.map((size) => (
                  <label className="choice-card" key={size.value}>
                    <input
                      checked={form.sampleSize === size.value}
                      name="sampleSize"
                      type="radio"
                      value={size.value}
                      onChange={(event) => updateField('sampleSize', event.target.value)}
                    />
                    <span>{size.label}</span>
                    <small>{size.fee}</small>
                  </label>
                ))}
              </div>
              <FieldError message={errors.sampleSize} />
            </div>

            <label className="field-group">
              <span className="field-label">Packaging preference</span>
              <select
                value={form.packagingPreference}
                onChange={(event) => updateField('packagingPreference', event.target.value)}
              >
                <option value="">Choose packaging</option>
                {sampleRequestOptions.packagingPreferences.map((packaging) => (
                  <option value={packaging} key={packaging}>
                    {packaging}
                  </option>
                ))}
              </select>
            </label>

            <label className="field-group field-group--toggle">
              <input
                checked={form.privateLabelInterest}
                type="checkbox"
                onChange={(event) =>
                  updateField('privateLabelInterest', event.target.checked)
                }
              />
              <span>I want private label pricing and MOQ guidance</span>
            </label>

            {form.privateLabelInterest ? (
              <>
                <label className="field-group">
                  <span className="field-label">Target annual volume</span>
                  <select
                    value={form.targetAnnualVolume}
                    onChange={(event) =>
                      updateField('targetAnnualVolume', event.target.value)
                    }
                  >
                    <option value="">Choose volume band</option>
                    {sampleRequestOptions.volumeBands.map((band) => (
                      <option value={band} key={band}>
                        {band}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.targetAnnualVolume} />
                </label>

                <div className="field-group field-group--full">
                  <span className="field-label">Desired pack sizes</span>
                  <div className="choice-grid choice-grid--checkboxes">
                    {sampleRequestOptions.packSizes.map((size) => (
                      <label className="choice-card" key={size}>
                        <input
                          checked={form.desiredPackSizes.includes(size)}
                          type="checkbox"
                          onChange={() => togglePackSize(size)}
                        />
                        <span>{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            ) : null}

            <label className="field-group">
              <span className="field-label">Desired delivery window (from)</span>
              <input
                type="date"
                value={form.deliveryDateFrom}
                onChange={(event) => updateField('deliveryDateFrom', event.target.value)}
              />
            </label>

            <label className="field-group">
              <span className="field-label">Desired delivery window (to)</span>
              <input
                type="date"
                value={form.deliveryDateTo}
                onChange={(event) => updateField('deliveryDateTo', event.target.value)}
              />
            </label>

            <label className="field-group">
              <span className="field-label">Upload artwork / spec (optional)</span>
              <input
                accept=".png,.jpg,.jpeg,.pdf"
                type="file"
                onChange={handleArtworkChange}
              />
              <FieldError message={errors.artworkName} />
              {form.artworkName ? (
                <small className="field-help">Attached: {form.artworkName}</small>
              ) : null}
            </label>

            <label className="field-group field-group--full">
              <span className="field-label">Additional notes</span>
              <textarea
                maxLength={800}
                placeholder="Tell us about your target market, required certifications, or any special requests."
                rows={5}
                value={form.notes}
                onChange={(event) => updateField('notes', event.target.value)}
              />
            </label>
          </div>
        ) : null}

        {currentStep === 2 ? (
          <div className="sample-form__grid">
            <label className="field-group field-group--full">
              <span className="field-label">Shipping address</span>
              <textarea
                placeholder="Buyer name, street, city, postal code, country"
                rows={4}
                value={form.shippingAddress}
                onChange={(event) => updateField('shippingAddress', event.target.value)}
              />
              <FieldError message={errors.shippingAddress} />
            </label>

            <div className="field-group field-group--full">
              <span className="field-label">Preferred shipping method</span>
              <div className="choice-grid">
                {sampleRequestOptions.shippingMethods.map((method) => (
                  <label className="choice-card" key={method.value}>
                    <input
                      checked={form.shippingMethod === method.value}
                      name="shippingMethod"
                      type="radio"
                      value={method.value}
                      onChange={(event) =>
                        updateField('shippingMethod', event.target.value)
                      }
                    />
                    <span>{method.value}</span>
                    <small>{method.note}</small>
                  </label>
                ))}
              </div>
              <FieldError message={errors.shippingMethod} />
              {shippingNote ? <small className="field-help">{shippingNote}</small> : null}
            </div>

            <label className="field-group">
              <span className="field-label">Incoterms</span>
              <select
                value={form.incoterms}
                onChange={(event) => updateField('incoterms', event.target.value)}
              >
                {sampleRequestOptions.incoterms.map((term) => (
                  <option value={term} key={term}>
                    {term}
                  </option>
                ))}
              </select>
              <FieldError message={errors.incoterms} />
            </label>

            <label className="field-group">
              <span className="field-label">Sample fee payment</span>
              <select
                value={form.paymentMethod}
                onChange={(event) => updateField('paymentMethod', event.target.value)}
              >
                {sampleRequestOptions.paymentMethods.map((paymentMethod) => (
                  <option value={paymentMethod} key={paymentMethod}>
                    {paymentMethod}
                  </option>
                ))}
              </select>
              <FieldError message={errors.paymentMethod} />
            </label>

            <label className="field-group field-group--toggle field-group--full">
              <input
                checked={form.agreeToTerms}
                type="checkbox"
                onChange={(event) => updateField('agreeToTerms', event.target.checked)}
              />
              <span>I agree to the sample policy and privacy policy.</span>
            </label>
            <FieldError message={errors.agreeToTerms} />

            <label className="field-group field-group--honeypot" aria-hidden="true">
              <span className="field-label">Leave this empty</span>
              <input
                autoComplete="off"
                tabIndex={-1}
                type="text"
                value={form.companyWebsite}
                onChange={(event) => updateField('companyWebsite', event.target.value)}
              />
            </label>
          </div>
        ) : null}

        {currentStep === 3 ? (
          <div className="sample-form__review">
            <article className="sample-summary">
              <h3>Request summary</h3>
              <dl>
                <div>
                  <dt>Buyer</dt>
                  <dd>
                    {form.fullName} · {form.companyName} · {form.country}
                  </dd>
                </div>
                <div>
                  <dt>Product</dt>
                  <dd>
                    {form.product} · {form.sampleSize || 'No sample size selected'}
                  </dd>
                </div>
                <div>
                  <dt>Packaging</dt>
                  <dd>{form.packagingPreference || 'To be advised by export desk'}</dd>
                </div>
                <div>
                  <dt>Shipping</dt>
                  <dd>
                    {form.shippingMethod || 'Not selected'} · {form.incoterms} ·{' '}
                    {selectedSampleSize?.fee ?? 'Fee pending'}
                  </dd>
                </div>
                <div>
                  <dt>Private label</dt>
                  <dd>
                    {form.privateLabelInterest
                      ? `${form.targetAnnualVolume || 'Volume pending'} · ${form.desiredPackSizes.join(', ') || 'Pack sizes pending'}`
                      : 'No'}
                  </dd>
                </div>
                <div>
                  <dt>Artwork</dt>
                  <dd>{form.artworkName || 'No file attached'}</dd>
                </div>
              </dl>
            </article>

            <article className="sample-summary">
              <h3>Before you submit</h3>
              <ul className="feature-list">
                <li>Expected response within 48 business hours</li>
                <li>Samples prepared within 72 hours after confirmation</li>
                <li>FOB/CIF options discussed after product fit is confirmed</li>
              </ul>
            </article>
          </div>
        ) : null}

        <div className="step-actions">
          <button
            className="button button--text"
            disabled={currentStep === 0}
            type="button"
            onClick={goBack}
          >
            Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button className="button button--solid" type="button" onClick={goNext}>
              Continue
            </button>
          ) : (
            <button className="button button--solid" type="submit">
              Request Sample
            </button>
          )}
        </div>
      </form>
    </section>
  )
}
