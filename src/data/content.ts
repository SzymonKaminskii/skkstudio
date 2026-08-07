export type Service = {
  title: string
  description: string
}

export const services: Array<Service> = [
  {
    title: 'Website Design & Development',
    description:
      'A fast, mobile-friendly site built around what makes customers call, book, or walk in — not a template that looks like everyone else\'s.',
  },
  {
    title: 'Google Business Profile Setup',
    description:
      'We claim, verify, and optimize your listing so you show up when someone searches "near me" and looks right when they find you.',
  },
  {
    title: 'Local SEO',
    description:
      'Page titles, descriptions, and local content tuned so search engines understand what you do and where you do it.',
  },
  {
    title: 'Branding & Logo Design',
    description:
      'A simple, consistent look across your site, signage, and socials — so customers recognize you before they read a word.',
  },
  {
    title: 'Website Care & Hosting',
    description:
      "Monthly updates, backups, and uptime monitoring, so your site keeps working long after launch day and you're never stuck fixing it yourself.",
  },
]

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: Array<ProcessStep> = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 20-minute call about your business, your customers, and what "success" looks like for your website.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We sketch the look and layout around your brand and send it over for feedback before a line of code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We build the real thing — fast-loading, mobile-ready, and wired up to Google and your booking or contact tools.',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description:
      "We go live, submit your site to search engines, and check in monthly to keep things running and improving.",
  },
]

export type PortfolioItem = {
  name: string
  category: string
  result: string
  accent: string
}

export const portfolioItems: Array<PortfolioItem> = [
  {
    name: "Marisol's Kitchen",
    category: 'Restaurant',
    result: 'Online reservations up 63% in the first two months after launch.',
    accent: 'clay',
  },
  {
    name: 'Ridgeline Hardware',
    category: 'Local Retail',
    result: 'Went from page 4 to the top 3 Google results for "hardware store" locally.',
    accent: 'moss',
  },
  {
    name: 'Thistle & Bloom Salon',
    category: 'Salon',
    result: 'Booking requests through the site nearly tripled after their old Facebook-only presence.',
    accent: 'gold',
  },
  {
    name: 'Cedar Creek Plumbing',
    category: 'Contractor',
    result: 'Missed-call follow-up form now captures leads the phone used to lose overnight.',
    accent: 'ink-soft',
  },
  {
    name: 'Loom & Leaf Coffee',
    category: 'Cafe',
    result: 'New site paid for itself in nine weeks from catering inquiries alone.',
    accent: 'clay-dark',
  },
  {
    name: 'Vantage Auto Repair',
    category: 'Automotive',
    result: 'Google Business calls increased after profile cleanup and weekly posting.',
    accent: 'moss',
  },
]

export type Testimonial = {
  quote: string
  name: string
  business: string
}

export const testimonials: Array<Testimonial> = [
  {
    quote:
      "I had a Facebook page and nothing else for eleven years. SKK Studio built a site that actually explains what we do, and my daughter says it's the first time she's been able to send a link instead of a phone number.",
    name: 'Odalys Ferreira',
    business: "Owner, Marisol's Kitchen",
  },
  {
    quote:
      "They didn't just build a website, they explained why each piece mattered. I finally understand why my Google listing matters more than my site did for the first few months.",
    name: 'Grant Okafor',
    business: 'Owner, Cedar Creek Plumbing',
  },
  {
    quote:
      'We priced two other web designers first. SKK Studio was the only one who asked about our slow season before talking about design.',
    name: 'Priya Ramanathan',
    business: 'Owner, Thistle & Bloom Salon',
  },
]

export type PricingTier = {
  name: string
  price: string
  cadence: string
  description: string
  features: Array<string>
  featured?: boolean
}

export const pricingTiers: Array<PricingTier> = [
  {
    name: 'Storefront',
    price: '$1,150',
    cadence: 'one-time',
    description: 'A clean, credible one-to-three page site to get you found online.',
    features: [
      'Up to 3 pages',
      'Mobile-friendly design',
      'Google Business Profile setup',
      'Contact form',
      '2 weeks to launch',
    ],
  },
  {
    name: 'Growth',
    price: '$2,400',
    cadence: 'one-time',
    description: 'Our most-booked package — for businesses ready to actively compete for local search.',
    features: [
      'Up to 7 pages',
      'Local SEO setup',
      'Google Business Profile optimization',
      'Booking or quote-request forms',
      'Basic brand refresh (logo touch-up, colors, fonts)',
      '3–4 weeks to launch',
    ],
    featured: true,
  },
  {
    name: 'Custom',
    price: 'Get a quote',
    cadence: '',
    description: 'E-commerce, multi-location, or something we haven\'t listed here — let\'s talk specifics.',
    features: [
      'Online ordering or booking systems',
      'Multi-location or franchise sites',
      'Ongoing marketing support',
      'Tailored scope and timeline',
    ],
  },
]

export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: Array<FaqItem> = [
  {
    question: "I don't have a website at all — where do we even start?",
    answer:
      "That's the most common place people start with us. We begin with a short call about your business and customers, then handle the domain, hosting, and design from there. You won't need to know any technical terms.",
  },
  {
    question: 'How long does it take to get a site live?',
    answer:
      'Most Storefront sites launch in about 2 weeks; Growth sites typically take 3–4 weeks. Timelines depend on how quickly we get photos and text back from you — we\'ll give you a checklist up front.',
  },
  {
    question: "I don't have professional photos. Is that a problem?",
    answer:
      "Not at all. We can work with photos from your phone, source licensed stock images that match your business, or point you to a local photographer if you want to invest in that later.",
  },
  {
    question: 'Will I be able to update the site myself later?',
    answer:
      "Yes — every site comes with simple instructions for editing text, hours, and photos. If you'd rather not touch it, our Website Care add-on handles updates for you.",
  },
  {
    question: "What's the difference between a website and a Google Business Profile?",
    answer:
      "Your website is what customers see once they click through; your Google Business Profile is what makes you show up in search and maps in the first place. Most small businesses need both — we set up and connect them together.",
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. Our Website Care plan covers hosting, backups, security updates, and small content changes for a flat monthly rate, so your site keeps running without becoming another task on your plate.',
  },
]
