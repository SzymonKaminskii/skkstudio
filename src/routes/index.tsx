import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowRight,
  Compass,
  Facebook,
  Globe2,
  Instagram,
  Layers,
  Menu,
  Palette,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import {
  faqItems,
  portfolioItems,
  pricingTiers,
  processSteps,
  services,
  testimonials,
} from '@/data/content'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const serviceIcons = [Globe2, Compass, Sparkles, Palette, ShieldCheck]

const accentClasses: Record<string, { soft: string; strong: string }> = {
  clay: { soft: 'bg-clay/15', strong: 'bg-clay/25' },
  moss: { soft: 'bg-moss/15', strong: 'bg-moss/25' },
  gold: { soft: 'bg-gold/15', strong: 'bg-gold/25' },
  'ink-soft': { soft: 'bg-ink-soft/15', strong: 'bg-ink-soft/25' },
  'clay-dark': { soft: 'bg-clay-dark/15', strong: 'bg-clay-dark/25' },
}

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-cream text-ink">
      <SkipLink />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
    >
      Skip to content
    </a>
  )
}

function Nav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-bold text-cream">
            SK
          </span>
          SKK Studio
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-clay-dark md:inline-block"
        >
          Get a Free Audit
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-cream px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-ink-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-clay px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Get a Free Audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grain">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-moss/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-sm font-medium text-ink-soft">
            <Sparkles size={16} className="text-gold" />
            Built for shops, restaurants, salons &amp; contractors
          </p>
          <h1 className="font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Your business is real.
            <br />
            Make it <span className="text-clay">easy to find</span> online.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            SKK Studio builds websites and online listings for small businesses
            that have little to no presence online — so the customers already
            searching for you can actually find you, and trust what they see.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-cream transition hover:bg-ink-soft"
            >
              Get a Free Website Audit
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="link-underline inline-flex items-center justify-center gap-2 px-2 py-4 text-base font-semibold text-ink"
            >
              See past projects
            </a>
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            No jargon, no pressure — just a plain-language look at what's working
            on your current site (or what to build if you don't have one yet).
          </p>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-xl shadow-ink/5 backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-clay/60" />
                <span className="h-3 w-3 rounded-full bg-gold/60" />
                <span className="h-3 w-3 rounded-full bg-moss/60" />
              </div>
              <span className="text-xs text-ink-soft">yourbusiness.com</span>
            </div>
            <div className="mt-5 space-y-4">
              <div className="h-28 rounded-xl bg-gradient-to-br from-clay/30 via-gold/20 to-moss/20" />
              <div className="h-3 w-3/4 rounded-full bg-ink/10" />
              <div className="h-3 w-1/2 rounded-full bg-ink/10" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-16 rounded-lg bg-ink/5" />
                <div className="h-16 rounded-lg bg-ink/5" />
                <div className="h-16 rounded-lg bg-ink/5" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-ink/10 bg-ink px-5 py-4 text-cream shadow-lg sm:-left-10">
            <p className="text-2xl font-bold">4.9<span className="text-gold">★</span></p>
            <p className="text-xs text-cream/70">avg. client rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="What we do"
        title="Everything it takes to be found, trusted, and chosen"
        description="Most small businesses don't need a marketing department — they need these five things done well."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length]
          const isFeatured = index === 0
          return (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border border-ink/10 p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5 ${
                isFeatured
                  ? 'bg-ink text-cream lg:col-span-2 lg:row-span-1'
                  : 'bg-white/60 text-ink'
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <div
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                  isFeatured ? 'bg-cream/15 text-gold' : 'bg-clay/10 text-clay'
                }`}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-display text-xl">{service.title}</h3>
              <p className={`mt-2.5 leading-relaxed ${isFeatured ? 'text-cream/80' : 'text-ink-soft'}`}>
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="How it works"
          title="Four steps, start to finish"
          description="No 40-page proposals. We keep the process short so you can get back to running your business."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl text-cream/20">{step.number}</span>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-cream/10 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Past work"
        title="Real businesses, real results"
        description="A sample of the shops, restaurants, and service businesses we've helped get found. Photos above are placeholders for your review copy — final case studies use each client's real site."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <div
            key={item.name}
            className="group overflow-hidden rounded-2xl border border-ink/10 bg-white/50 transition hover:shadow-lg hover:shadow-ink/5"
          >
            <div
              className={`relative flex h-44 items-center justify-center overflow-hidden ${accentClasses[item.accent].soft}`}
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${accentClasses[item.accent].strong} transition duration-500 group-hover:scale-125`}
              />
              <span className="relative font-display text-3xl text-ink/30">
                {item.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-clay">
                {item.category}
              </p>
              <h3 className="mt-1.5 font-display text-xl text-ink">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">Why SKK Studio</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            We started this because too many good businesses stay invisible.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
            <p>
              SKK Studio began after watching a neighborhood bakery lose regulars
              to a chain three blocks over — not because the coffee was worse,
              but because the bakery didn't show up when people searched, and
              its Facebook page hadn't been touched since a wedding announcement
              in 2019.
            </p>
            <p>
              That's the gap we work in: the space between a great local
              business and the internet actually knowing it exists. We handle
              the technical side — the code, the search settings, the hosting —
              so you can stay focused on the part you're actually good at.
            </p>
            <p>
              Every project starts with a real conversation about your
              customers, not a sales pitch about ours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <StatCard number="60+" label="Small businesses launched online" />
          <StatCard number="18 days" label="Median time to launch" />
          <StatCard number="4.9 / 5" label="Average client rating" />
          <StatCard number="92%" label="Clients who renew Website Care" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/60 p-6">
      <p className="font-display text-3xl text-clay">{number}</p>
      <p className="mt-1.5 text-sm leading-snug text-ink-soft">{label}</p>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="bg-cream-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client stories"
          title="What it's like to work with us"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-7 shadow-sm"
            >
              <blockquote className="font-display text-lg leading-relaxed text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-ink-soft">{t.business}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Investment"
        title="Straightforward packages, no surprise invoices"
        description="Every project is a flat, one-time price agreed before we start. Not sure which fits? The audit call will tell you."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 ${
              tier.featured
                ? 'border-clay bg-ink text-cream shadow-xl shadow-clay/20 lg:-translate-y-3'
                : 'border-ink/10 bg-white/60 text-ink'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-clay px-3 py-1 text-xs font-semibold text-cream">
                Most booked
              </span>
            )}
            <h3 className="font-display text-2xl">{tier.name}</h3>
            <p className={`mt-2 text-sm ${tier.featured ? 'text-cream/70' : 'text-ink-soft'}`}>
              {tier.description}
            </p>
            <p className="mt-6">
              <span className="font-display text-3xl">{tier.price}</span>
              {tier.cadence && (
                <span className={tier.featured ? 'text-cream/60' : 'text-ink-soft'}> {tier.cadence}</span>
              )}
            </p>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-snug">
                  <Layers size={15} className={`mt-0.5 shrink-0 ${tier.featured ? 'text-gold' : 'text-clay'}`} />
                  <span className={tier.featured ? 'text-cream/85' : 'text-ink-soft'}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                tier.featured
                  ? 'bg-clay text-cream hover:bg-clay-dark'
                  : 'bg-ink text-cream hover:bg-ink-soft'
              }`}
            >
              {tier.price === 'Get a quote' ? 'Request a custom quote' : 'Start with ' + tier.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="bg-cream-dim py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Small business owners ask us this a lot"
        />

        <div className="mt-12 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white/60">
          {faqItems.map((item) => (
            <FaqRow key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqRow({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="px-6 sm:px-8">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-ink">{item.question}</span>
        <span
          className={`shrink-0 rounded-full border border-ink/20 p-1.5 text-ink transition-transform ${open ? 'rotate-45' : ''}`}
        >
          <ArrowRight size={14} className="rotate-[-45deg]" />
        </span>
      </button>
      {open && <p className="pb-6 leading-relaxed text-ink-soft">{item.answer}</p>}
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 rounded-3xl border border-ink/10 bg-white/60 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">Get started</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Tell us about your business — we'll tell you what's possible.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            No obligation, no sales script. Send us a few details and we'll follow
            up with a plain-language look at your online presence and what we'd
            recommend first.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <p className="text-ink-soft">
              Prefer to talk it through?{' '}
              <a href="tel:+15551234567" className="link-underline font-semibold text-ink">
                (555) 123-4567
              </a>
            </p>
            <p className="text-ink-soft">
              Email us directly at{' '}
              <a href="mailto:hello@skkstudio.com" className="link-underline font-semibold text-ink">
                hello@skkstudio.com
              </a>
            </p>
            <p className="text-ink-soft">Serving businesses locally and remotely, nationwide.</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark,
}: {
  eyebrow: string
  title: string
  description?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-semibold uppercase tracking-wide ${dark ? 'text-gold' : 'text-clay'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${dark ? 'text-cream' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 leading-relaxed ${dark ? 'text-cream/70' : 'text-ink-soft'}`}>{description}</p>
      )}
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink py-14 text-cream/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-cream">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream/10 text-sm font-bold">
                SK
              </span>
              SKK Studio
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Websites and online presence for small businesses that deserve to
              be found.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                aria-label="SKK Studio on Instagram"
                className="rounded-full border border-cream/20 p-2 transition hover:border-cream/50 hover:text-cream"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="SKK Studio on Facebook"
                className="rounded-full border border-cream/20 p-2 transition hover:border-cream/50 hover:text-cream"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <FooterColumn
            title="Explore"
            links={[
              { label: 'Services', href: '#services' },
              { label: 'Our Work', href: '#work' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ]}
          />
          <div>
            <p className="text-sm font-semibold text-cream">Get in touch</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+15551234567" className="link-underline">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@skkstudio.com" className="link-underline">
                  hello@skkstudio.com
                </a>
              </li>
              <li>Serving clients nationwide, remote-friendly</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SKK Studio. All rights reserved.</p>
          <p>Made for small businesses, by people who like small businesses.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string }>
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-cream">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="link-underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
