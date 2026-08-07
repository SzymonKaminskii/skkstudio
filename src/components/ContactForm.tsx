import { useState } from 'react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-moss/30 bg-moss/10 p-8 text-center animate-fade-up">
        <p className="font-display text-2xl text-ink">Thanks — that's in our inbox.</p>
        <p className="mt-2 text-ink-soft">
          We read every message ourselves and usually reply within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-soft">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Odalys Ferreira"
            className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-ink outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="you@yourbusiness.com"
            className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-ink outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-ink-soft">
          Business name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          value={fields.business}
          onChange={handleChange}
          placeholder="Marisol's Kitchen"
          className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-ink outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-soft">
          What are you hoping to fix or build?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={handleChange}
          placeholder="We don't have a website yet, or ours hasn't been touched since 2016..."
          className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-ink outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-xl bg-clay px-6 py-3.5 font-semibold text-cream transition hover:bg-clay-dark disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === 'sending' ? 'Sending…' : 'Send my message'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-clay-dark">
          Something went wrong sending that — try again, or email us directly below.
        </p>
      )}
    </form>
  )
}
