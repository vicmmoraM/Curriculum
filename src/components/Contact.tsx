import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { personal } from '../data/cv'
import { SectionLabel } from './About'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const ref = useScrollFade()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Fallback: opens mail client with prefilled content
    // Replace with EmailJS or your preferred email service
    const subject = encodeURIComponent(`Mensaje de ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nDesde: ${form.email}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  return (
    <section id="contacto" ref={ref as React.RefObject<HTMLElement>} className="section-fade py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Contacto</SectionLabel>
        <div className="mt-10 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-100 mb-3">
              ¿Hablamos?
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-8">
              Si tienes un proyecto, una oportunidad o simplemente quieres conectar, escríbeme.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { label: 'GitHub', value: 'vicmmoraM', href: personal.github },
                { label: 'GitLab', value: 'vicmmoraM', href: personal.gitlab },
                { label: 'LinkedIn', value: 'Victor Morales', href: personal.linkedin },
              ].map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="text-xs font-mono w-16 text-zinc-400 dark:text-zinc-600">{label}</span>
                  {value}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-zinc-400 dark:text-zinc-600 block mb-1.5">Nombre</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-zinc-400 dark:text-zinc-600 block mb-1.5">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-zinc-400 dark:text-zinc-600 block mb-1.5">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntame sobre tu proyecto o consulta..."
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white text-sm font-medium rounded-lg transition-colors"
            >
              {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Enviado!' : 'Enviar mensaje'}
            </button>
            {status === 'sent' && (
              <p className="text-xs text-green-600 dark:text-green-400 text-center">
                Se abrirá tu cliente de correo con el mensaje prellenado.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
