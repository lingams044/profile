import { useState, type FormEvent } from 'react'
import { Mail, Github, Linkedin, Loader2 } from 'lucide-react'
import { contactConfig as c } from '../config/contact'
import { portfolioData as d } from '../data/portfolio'

type Field = { name: string; label: string; type?: 'textarea' | 'email' }
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Form({ fields, button, map }: { fields: Field[]; button: string; map: Record<string, string> }) {
  const [v, setV] = useState<Record<string, string>>({})
  const [err, setErr] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'fail'>('idle')

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    const er: Record<string, string> = {}
    fields.forEach(f => {
      const val = (v[f.name] || '').trim()
      if (!val) er[f.name] = `${f.label} is required`
      else if (f.type === 'email' && !emailRe.test(val)) er[f.name] = 'Enter a valid email address'
    })
    setErr(er)
    if (Object.keys(er).length) return
    setStatus('sending')
    try {
      const params = Object.fromEntries(fields.map(f => [map[f.name], v[f.name].trim()]))
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: c.accessKey, ...params }),
      })
      const result = await response.json() as { success?: boolean }
      if (!response.ok || !result.success) throw new Error('Web3Forms submission failed')
      setStatus('ok'); setV({})
    } catch { setStatus('fail') }
  }

  return (
    <form onSubmit={submit} noValidate className="glass p-6 space-y-4">
      {fields.map(f => (
        <div key={f.name}>
          <label className="text-sm text-slate-300 block mb-1" htmlFor={button + f.name}>{f.label}</label>
          {f.type === 'textarea'
            ? <textarea id={button + f.name} rows={5} value={v[f.name] || ''} onChange={e => setV({ ...v, [f.name]: e.target.value })} />
            : <input id={button + f.name} type={f.type === 'email' ? 'email' : 'text'} value={v[f.name] || ''} onChange={e => setV({ ...v, [f.name]: e.target.value })} />}
          {err[f.name] && <p className="text-red-400 text-xs mt-1">{err[f.name]}</p>}
        </div>
      ))}
      <button type="submit" disabled={status === 'sending'} className="btn btn-p disabled:opacity-60">
        {status === 'sending' && <Loader2 size={16} className="animate-spin" />}{status === 'sending' ? 'Sending…' : button}
      </button>
      {status === 'ok' && <p className="text-emerald-400 text-sm">✓ Message sent successfully!<br />I'll get back to you soon.</p>}
      {status === 'fail' && <p className="text-red-400 text-sm">Something went wrong.<br />Please try again.</p>}
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-20">
      <h2 className="text-3xl font-bold mb-10"><span className="grad">Let's Work Together</span></h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Form button="Send Message"
            fields={[{ name: 'name', label: 'Name' }, { name: 'email', label: 'Email', type: 'email' }, { name: 'subject', label: 'Subject' }, { name: 'message', label: 'Message', type: 'textarea' }]}
            map={{ name: 'from_name', email: 'from_email', subject: 'subject', message: 'message' }} />
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-s" href={`mailto:${d.email}`}><Mail size={16} />Email</a>
            <a className="btn btn-s" href={d.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
            <a className="btn btn-s" href={d.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Have a Question?</h3>
          <Form button="Send Query"
            fields={[{ name: 'name', label: 'Name' }, { name: 'email', label: 'Email', type: 'email' }, { name: 'query', label: 'Query', type: 'textarea' }]}
            map={{ name: 'name', email: 'email', query: 'message' }} />
        </div>
      </div>
    </section>
  )
}
