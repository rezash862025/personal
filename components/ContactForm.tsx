'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{type:'success'|'error', message:string} | null>(null)
  const [form, setForm] = useState({ name: '', email: '', goal: '', message: '', website:'' }) // website = honeypot

  useEffect(() => {
    if (publicKey) {
      try { emailjs.init({ publicKey }) } catch (e) { console.warn('EmailJS init warning:', e) }
    } else {
      console.warn('EmailJS public key missing. Check NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local')
    }
    console.table({
      EMAILJS_PUBLIC_KEY: !!publicKey,
      EMAILJS_SERVICE_ID: !!serviceId,
      EMAILJS_TEMPLATE_ID: !!templateId
    })
  }, [])

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in name, email, and message.' })
      return
    }

    // Honeypot: if filled by bots, pretend success
    if (form.website?.trim()) {
      setStatus({ type: 'success', message: 'Thanks! I will get back to you soon.' })
      setForm({ name: '', email: '', goal: '', message: '', website:'' })
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', message: 'Email service not configured. Missing env variables.' })
      return
    }

    setLoading(true)
    try {
      const params = {
        from_name:   form.name,
        from_email:  form.email,
        goal:        form.goal,
        message:     form.message,
        reply_to:    form.email, // important: use Reply-To instead of spoofing From
      }
      const res = await emailjs.send(serviceId, templateId, params, { publicKey })
      console.log('EmailJS success:', res)
      setStatus({ type: 'success', message: 'Message sent! I will reach out via email.' })
      setForm({ name: '', email: '', goal: '', message: '', website:'' })
    } catch (err: any) {
      console.error('EmailJS error:', err)
      const msg = typeof err?.text === 'string' ? err.text : (err?.message || 'Failed to send.')
      setStatus({ type: 'error', message: `Send failed: ${msg}` })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6" id="contact">
      <h3 className="font-semibold text-lg">Contact me</h3>
      <p className="text-sm text-dim mt-1">Tell me your goals and I’ll propose a plan.</p>

      <div className="mt-4 grid gap-4">
        <label className="block">
          <span className="block text-sm mb-1">Name</span>
          <input className="input" name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
        </label>

        <label className="block">
          <span className="block text-sm mb-1">Email</span>
          <input className="input" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
        </label>

        {/* Honeypot (hidden) */}
        <input className="hidden" tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={onChange} />

        <label className="block">
          <span className="block text-sm mb-1">What do you want to achieve?</span>
          <input className="input" name="goal" value={form.goal} onChange={onChange} placeholder="e.g., Master DDD, pass AWS SAA, land a dev job" />
        </label>

        <label className="block">
          <span className="block text-sm mb-1">Message</span>
          <textarea className="input" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Briefly describe your background and what you need help with." required />
        </label>

        <button disabled={loading} className="btn">{loading ? 'Sending…' : 'Send message'}</button>

        {status && <p className={"text-sm " + (status.type === 'success' ? "text-emerald-400" : "text-rose-400")}>{status.message}</p>}
        <p className="text-xs text-dim">Powered by EmailJS. Your info is used only to reply to your inquiry.</p>
      </div>
    </form>
  )
}
