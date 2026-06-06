// ─── Ecosystem Metrics (Illustrative — based on public GDE / SA Government education data) ──────
export const ECOSYSTEM_METRICS = [
  {
    value: '2.83M',
    label: 'Parents & guardians in Gauteng school sector',
    note: 'Illustrative — based on GDE enrolment data',
  },
  {
    value: '1.2M',
    label: 'Learners aged 15–19',
    note: 'Illustrative — based on public SA education statistics',
  },
  {
    value: '95K',
    label: 'Teachers & school staff',
    note: 'Illustrative — based on GDE staffing data',
  },
  {
    value: '2,148',
    label: 'Schools & communities',
    note: 'Illustrative — GDE registered schools',
  },
  {
    value: '180',
    label: 'School days of daily engagement per year',
    note: 'Based on SA school calendar',
  },
];

// ─── Use Case Cards ────────────────────────────────────────────────────────────────────────────
export const USE_CASES = [
  {
    id: 'back-to-school',
    title: 'Back-to-School Campaigns',
    description:
      'Target parents at the most high-spending school moment of the year. Uniforms, shoes, bags, stationery — all connected to real school enrolment and term-start data.',
    tags: ['Uniforms', 'Shoes', 'Bags', 'Stationery'],
    icon: 'ShoppingBag',
    color: '#00843D',
  },
  {
    id: 'teen-retail',
    title: 'Teen Retail Conversion',
    description:
      'Reach learners aged 15–19 directly with fashion, mobile, and device affordability campaigns. PEP is already the brand for township and working-class youth.',
    tags: ['Fashion', 'Mobile', 'Devices', 'Youth'],
    icon: 'Smartphone',
    color: '#FFD200',
  },
  {
    id: 'parent-household',
    title: 'Parent Household Campaigns',
    description:
      'Affordable family bundles, seasonal promotions and household essentials targeted at parents inside a platform they trust and use daily.',
    tags: ['Family Bundles', 'Seasonal', 'Household'],
    icon: 'Home',
    color: '#00A3A3',
  },
  {
    id: 'pep-cell',
    title: 'PEP Cell Growth',
    description:
      'Grow SIM, prepaid, data bundle and device affordability campaigns across a captive parent and learner audience. Device ownership and connectivity are school necessities.',
    tags: ['SIM', 'Prepaid', 'Data Bundles', 'Devices'],
    icon: 'Signal',
    color: '#00843D',
  },
  {
    id: 'future-bank',
    title: 'Future Bank Launch Readiness',
    description:
      'Build trust and brand familiarity before the Pepkor bank launches in April 2027. Schools are a high-trust environment for financial services education.',
    tags: ['Banking', 'Trust', 'Financial Literacy', '2027'],
    icon: 'Landmark',
    color: '#FFD200',
  },
  {
    id: 'community-commerce',
    title: 'Community Commerce',
    description:
      'Use PAXI drop points in schools and communities to drive parcel collection, rural logistics and last-mile commerce in underserved school communities.',
    tags: ['PAXI', 'Rural', 'Communities', 'Logistics'],
    icon: 'Package',
    color: '#00A3A3',
  },
];

// ─── FAB Table ────────────────────────────────────────────────────────────────────────────────
export const FAB_ROWS = [
  {
    feature: 'Headline sponsorship across SchoolBridge & ProvinceBridge',
    advantage:
      'High-visibility across comms, dashboards, apps & campaigns',
    benefit:
      'PEP becomes the trusted retail partner embedded in daily school life before competitors enter',
  },
  {
    feature: 'Segmented campaigns by school, district, age group & parent profile',
    advantage:
      'Target back-to-school, exam periods, winter, school events',
    benefit:
      'Higher relevance, stronger conversion, less wasted spend',
  },
  {
    feature: 'Digital vouchers and offers',
    advantage:
      'Parents & learners receive contextual offers inside a trusted platform',
    benefit:
      'Direct path from awareness to retail conversion',
  },
  {
    feature: 'School calendar integration',
    advantage:
      'Align campaigns with real school-year moments',
    benefit:
      'Present at moments of actual household spending',
  },
  {
    feature: 'Mobile & financial services promotion',
    advantage:
      'Introduce airtime, SIM, phone, banking propositions',
    benefit:
      'Customer acquisition for higher-frequency digital services',
  },
];

// ─── Campaign Mock Tiles ───────────────────────────────────────────────────────────────────────
export const CAMPAIGN_TILES = [
  {
    id: 'back-to-school-pep',
    title: 'Back-to-School with PEP',
    audience: 'Parents',
    channel: 'App banner & notification',
    offerType: 'Uniform & shoe offer',
    conversion: 'Store visit',
    metric: 'Redemptions',
    color: '#00843D',
  },
  {
    id: 'pep-cell-student',
    title: 'PEP Cell Student Data Deals',
    audience: 'Learners 15–19',
    channel: 'In-app offer',
    offerType: 'SIM & data bundle',
    conversion: 'Store/digital',
    metric: 'Activations',
    color: '#FFD200',
  },
  {
    id: 'school-shoe-month',
    title: 'School Shoe Month',
    audience: 'Parents',
    channel: 'School communication',
    offerType: 'Footwear campaign',
    conversion: 'Store locator',
    metric: 'Foot traffic',
    color: '#00A3A3',
  },
  {
    id: 'exam-season',
    title: 'Exam Season Parent Support',
    audience: 'Parents',
    channel: 'Homework & event channel',
    offerType: 'Stationery/device offer',
    conversion: 'Online/store',
    metric: 'Basket size',
    color: '#00843D',
  },
  {
    id: 'paxi-school',
    title: 'PAXI for School Communities',
    audience: 'School communities',
    channel: 'Notification',
    offerType: 'PAXI drop point',
    conversion: 'Collection',
    metric: 'Parcels processed',
    color: '#FFD200',
  },
  {
    id: 'future-money',
    title: 'Future Money Skills with PEP',
    audience: 'Learners',
    channel: 'Financial literacy content',
    offerType: 'Banking awareness',
    conversion: 'Future account',
    metric: 'Trust built',
    color: '#00A3A3',
  },
];

// ─── Sponsorship Packages ─────────────────────────────────────────────────────────────────────
export const SPONSORSHIP_PACKAGES = [
  {
    id: 'headline',
    title: 'Headline Sponsorship',
    tagline: 'Named retail partner across selected provinces or districts',
    border: '#00843D',
    features: [
      'Named brand association across SchoolBridge platform',
      'Province or district-level exclusivity',
      'Priority placement in all parent & learner comms',
      'Co-branded school communications',
      'Dedicated measurement dashboard',
    ],
  },
  {
    id: 'campaign',
    title: 'Campaign Partnership',
    tagline: 'Seasonal campaigns — back-to-school, winter, exam season, festive',
    border: '#FFD200',
    features: [
      'Seasonal campaign integration',
      'Back-to-school, winter, exam & festive hooks',
      'Targeted audience segmentation',
      'Digital voucher distribution',
      'Campaign performance reporting',
    ],
  },
  {
    id: 'digital-services',
    title: 'Digital Services Growth Partner',
    tagline: 'PEP Cell, SIM, prepaid, future financial services education',
    border: '#00A3A3',
    features: [
      'Mobile & cellular promotion across learner channels',
      'Financial literacy content integration',
      'Banking awareness ahead of 2027 launch',
      'SIM and data bundle offer campaigns',
      'Longitudinal trust-building strategy',
    ],
  },
];

// ─── Measurement Dashboard Metrics ────────────────────────────────────────────────────────────
export const DASHBOARD_METRICS = [
  { label: 'Impressions', value: '4.2M', trend: '+12%', note: 'Illustrative' },
  { label: 'Click-throughs', value: '318K', trend: '+8%', note: 'Illustrative' },
  { label: 'Voucher Redemptions', value: '42K', trend: '+23%', note: 'Illustrative' },
  { label: 'Store Locator Clicks', value: '87K', trend: '+17%', note: 'Illustrative' },
  { label: 'Campaign Engagement', value: '68%', trend: '+5%', note: 'Illustrative' },
  { label: 'Parent Reach', value: '1.1M', trend: '+9%', note: 'Illustrative' },
  { label: 'Learner Reach', value: '620K', trend: '+14%', note: 'Illustrative' },
  { label: 'District Performance', value: '24/26', trend: 'Active', note: 'Illustrative' },
  { label: 'School-Level Visibility', value: '1,847', trend: 'Schools', note: 'Illustrative' },
  { label: 'Conversion Rate', value: '3.8%', trend: '+1.2pp', note: 'Illustrative' },
];

// ─── Business Context Facts (publicly sourced) ────────────────────────────────────────────────
export const BUSINESS_CONTEXT = [
  {
    id: 'A',
    title: 'Affordable Family Retail',
    body: 'Core store footprint across South Africa, serving township and working-class families with affordable clothing, footwear and household goods.',
    source: 'PEP Stores',
    sourceId: 'pepstores',
    icon: 'Store',
  },
  {
    id: 'B',
    title: 'Mobile & Cellular',
    body: 'PEP Cell offers affordable smartphones, SIM cards, airtime and data bundles — positioning PEP as a digital access enabler in underserved communities.',
    source: 'PEP Cell',
    sourceId: 'pepcell',
    icon: 'Smartphone',
  },
  {
    id: 'C',
    title: 'Parcel & Logistics',
    body: 'PAXI is a nationwide parcel delivery and collection network using PEP stores as collection points — extending PEP\'s footprint into e-commerce and logistics.',
    source: 'PAXI',
    sourceId: 'paxi',
    icon: 'Package',
  },
  {
    id: 'D',
    title: 'Informal-Market Fintech',
    body: 'The Flash platform powers value-added services for informal traders, spaza shops and community commerce — a fintech infrastructure for underserved SA.',
    source: 'Pepkor Integrated Report 2025',
    sourceId: 'pepkor-integrated-2025',
    icon: 'Zap',
  },
  {
    id: 'E',
    title: 'Financial Services',
    body: 'Pepkor\'s financial services division provides cash-in, cash-out, bill payments, insurance and credit — building a financial services stack in communities banks do not serve.',
    source: 'Pepkor Annual Results',
    sourceId: 'pepkor-results',
    icon: 'CreditCard',
  },
  {
    id: 'F',
    title: 'Future Banking',
    body: 'Planned bank launch in April 2027, targeting 1.8M primary banking customers within 5 years — the most significant expansion of Pepkor\'s financial services ambition.',
    source: 'Reuters, May 2026',
    sourceId: 'reuters-2026',
    icon: 'Landmark',
  },
];
