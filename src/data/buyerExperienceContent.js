export const buyerDeckLink = '/resources/buyer-deck.html'
export const specSheetLink = '/resources/tea-spec-sheet.html'

export const heroTrustCues = [
  '72 hour sample prep',
  'FOB/CIF options',
  'Serving Europe, MENA, and North America',
]

export const productDetailCards = [
  {
    id: 'orthodox-black-tea',
    title: 'Orthodox Black Tea',
    originRegion: 'Kericho and Nandi highlands',
    grade: 'OP1 / Pekoe-style export grades',
    tastingProfile: 'Bright cup, brisk finish, floral top notes',
    moq: '1 metric ton mixed or 20 ft focused load',
    packaging: '25 kg paper sacks, 250 g retail pouches, private label tins',
    leadTime: '3 to 5 weeks after PO confirmation',
    priceBand: 'Price on request based on grade and pack format',
    sampleAvailability: '25 g, 100 g, and 250 g sample options',
  },
  {
    id: 'ctc-tea-programs',
    title: 'CTC Tea Programs',
    originRegion: 'Rift Valley blending program',
    grade: 'BP1 / PF / Dust export-ready grades',
    tastingProfile: 'Strong liquor, fast infusion, bold color',
    moq: '2 metric tons for recurring distributor programs',
    packaging: 'Bulk sacks, tea-bag grade supply, private label refill packs',
    leadTime: '2 to 4 weeks for standard grades',
    priceBand: 'Price on request by grade, season, and volume',
    sampleAvailability: 'Courier samples with fee credited on first bulk order',
  },
  {
    id: 'green-and-purple-tea',
    title: 'Green and Purple Tea',
    originRegion: 'Kenyan specialty tea gardens',
    grade: 'Specialty loose leaf and premium retail grades',
    tastingProfile: 'Fresh vegetal notes, cleaner finish, wellness-focused profile',
    moq: '500 kg for specialty runs and branded launches',
    packaging: 'Loose leaf export packs, premium pouches, gifting formats',
    leadTime: '4 to 6 weeks depending on finishing and labeling',
    priceBand: 'Premium pricing tier; quote per market brief',
    sampleAvailability: 'Small lot samples available for evaluation and private label trials',
  },
  {
    id: 'private-label-formats',
    title: 'Private Label Formats',
    originRegion: 'Packed to buyer brief',
    grade: 'Bulk-to-retail conversion and custom packaging support',
    tastingProfile: 'Matched to selected tea line and target market',
    moq: 'MOQ depends on pack size, format, and artwork complexity',
    packaging: 'Retail pouches, cartons, tins, hospitality packs, label-ready mockups',
    leadTime: '4 to 8 weeks with artwork approval',
    priceBand: 'Quoted against pack size, print finish, and annual volume',
    sampleAvailability: 'Mock pack samples and label review available',
  },
]

export const certificateBadges = [
  'HACCP-aligned food safety process',
  'Export documentation and origin support',
  'Private label workflow with artwork review',
]

export const buyerTestimonials = [
  {
    quote:
      'The sample turnaround was fast, the cup profile matched the brief, and the export communication was cleaner than most suppliers we screened.',
    author: 'Procurement Lead, Gulf retail buyer',
  },
  {
    quote:
      'What stood out was not just product quality but the way shipping formats and response times were explained early in the conversation.',
    author: 'Founder, private label tea brand',
  },
  {
    quote:
      'We need supplier pages that answer MOQ, pack style, and lead time quickly. This direction does that far better than a generic brochure site.',
    author: 'Category manager, European importer',
  },
]

export const traceabilitySteps = [
  {
    title: 'Source by region',
    text: 'Tea lines are positioned around Kenyan sourcing regions so buyers understand origin before they ask about price.',
  },
  {
    title: 'Cup and match',
    text: 'Profiles are shortlisted against channel, market, and packaging brief rather than sold as one-size-fits-all stock.',
  },
  {
    title: 'Pack for route',
    text: 'Bulk, retail, and private label formats are aligned to shipment method and destination market expectations.',
  },
  {
    title: 'Move to port',
    text: 'Documents, incoterms, and dispatch sequence are handled as part of the buyer journey from farm to port.',
  },
]

export const sampleRequestOptions = {
  buyerTypes: [
    'Wholesaler',
    'Distributor',
    'Retailer',
    'Private label',
    'New importer',
  ],
  countries: ['United Kingdom', 'Germany', 'UAE', 'Saudi Arabia', 'United States', 'Other'],
  products: productDetailCards.map((product) => ({
    value: product.title,
    label: `${product.title} — ${product.grade}`,
  })),
  sampleSizes: [
    { value: '25g', label: '25g sample', fee: '$0 + shipping' },
    { value: '100g', label: '100g sample', fee: '$18 + shipping' },
    { value: '250g', label: '250g sample', fee: '$32 + shipping' },
  ],
  packagingPreferences: [
    'Loose leaf (bulk)',
    'Retail pouch (250 g)',
    'Private label pouch',
  ],
  volumeBands: ['Under 2 MT', '2–5 MT', '5–10 MT', '10 MT+'],
  packSizes: ['100 g', '250 g', '500 g', '1 kg', 'Bulk 25 kg'],
  shippingMethods: [
    { value: 'Air', note: 'Fastest option for urgent evaluation samples.' },
    { value: 'Sea', note: 'Best for economical follow-on bulk planning.' },
    { value: 'Courier', note: 'Common for DHL/UPS sample dispatch.' },
  ],
  incoterms: ['FOB', 'CIF', 'DAP'],
  paymentMethods: ['Invoice (net 7)', 'Pay now (card/PayPal)'],
  responseTime: 'We respond within 48 business hours (Mon–Fri, 08:00–17:00 EAT).',
  whatsappLabel: 'WhatsApp export desk: +254 700 000 000',
}
