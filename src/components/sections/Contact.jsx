'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
)
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const contactLinks = [
  { Icon: MailIcon,     href: 'mailto:delatorreandre03@gmail.com',                       label: 'delatorreandre03@gmail.com' },
  { Icon: PhoneIcon,    href: 'tel:+51927535786',                                        label: '+51 927 535 786'            },
  { Icon: GithubIcon,   href: 'https://github.com/Andre121314115',                       label: 'github.com/Andre121314115',   target: '_blank' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/andre-de-la-torre-segura20',  label: 'linkedin.com/in/andre-de-la-torre-segura20', target: '_blank' },
  { Icon: PinIcon,      href: null,                                                      label: 'Concepción, Junín, Perú' },
]

// ⚠️ Reemplaza TU_ID_AQUI con tu ID de formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/mnjbykpy'

export default function Contact() {
  const { lang } = useLang()
  const [status, setStatus] = useState('idle')
  const [form,   setForm]   = useState({ nombre: '', email: '', mensaje: '' })
  const t = (es, en) => lang === 'es' ? es : en

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      })
      if (res.ok) { setStatus('ok'); setForm({ nombre: '', email: '', mensaje: '' }) }
      else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full bg-bg border border-border text-text px-4 py-3 text-sm
                      outline-none focus:border-accent transition-colors placeholder:text-muted`

  return (
    <section id="contact" className="py-24 px-6 sm:px-16 bg-surface">
      <SectionHeader num="07" title={t('Contacto', 'Contact')} />

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Info izquierda */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            {t('¿Tienes algo en mente?', 'Have something in mind?')}
          </h3>
          <p className="text-muted leading-loose mb-2 text-sm">
            {t(
              'Busco prácticas o posiciones junior en desarrollo de software o soporte TI. Si tienes un proyecto, una oferta o simplemente quieres conversar, escríbeme.',
              "I'm looking for internships or junior positions in software development or IT support. If you have a project, an offer, or just want to talk, reach out."
            )}
          </p>
          <p className="font-mono text-xs text-muted mb-8">
            {t('Respondo en menos de 24 horas.', 'I reply within 24 hours.')}
          </p>

          {/* Badge de disponibilidad */}
          <div className="border border-accent/25 bg-accent/5 p-4 mb-6
                          [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            <p className="font-mono text-[0.62rem] text-accent tracking-widest uppercase mb-2">
              {t('// Estado actual', '// Current status')}
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-text">
                {t('Disponible para prácticas y posiciones junior', 'Available for internships and junior positions')}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-accent2" />
              <span className="font-mono text-xs text-muted">
                {t('Modalidad: Remoto o Híbrido', 'Modality: Remote or Hybrid')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="font-mono text-xs text-muted">
                {t('Medio tiempo — sigo estudiando (10mo ciclo)', 'Part time — still studying (10th semester)')}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            {contactLinks.map(({ Icon, href, label, target }, i) =>
              href ? (
                <a key={i} href={href} target={target} rel={target ? 'noreferrer' : undefined}
                   className="flex items-center gap-3 p-3 bg-bg border border-border
                              text-muted hover:border-accent hover:text-accent
                              transition-all text-sm no-underline">
                  <span className="w-8 h-8 min-w-[32px] bg-accent/8 border border-accent/15
                                   flex items-center justify-center text-accent">
                    <Icon />
                  </span>
                  <span className="truncate">{label}</span>
                </a>
              ) : (
                <div key={i}
                     className="flex items-center gap-3 p-3 bg-bg border border-border text-sm">
                  <span className="w-8 h-8 min-w-[32px] bg-accent/8 border border-accent/15
                                   flex items-center justify-center text-accent">
                    <Icon />
                  </span>
                  <span className="text-muted">{label}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.62rem] text-accent tracking-[3px] uppercase">
              {t('Nombre', 'Name')}
            </label>
            <input type="text" name="nombre" required
                   value={form.nombre} onChange={handleChange}
                   placeholder={t('Tu nombre completo', 'Your full name')}
                   className={inputClass} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.62rem] text-accent tracking-[3px] uppercase">
              Email
            </label>
            <input type="email" name="email" required
                   value={form.email} onChange={handleChange}
                   placeholder="tu@empresa.com"
                   className={inputClass} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.62rem] text-accent tracking-[3px] uppercase">
              {t('Asunto', 'Subject')}
            </label>
            <input type="text" name="asunto"
                   placeholder={t('Prácticas / Proyecto / Consulta', 'Internship / Project / Inquiry')}
                   className={inputClass} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.62rem] text-accent tracking-[3px] uppercase">
              {t('Mensaje', 'Message')}
            </label>
            <textarea name="mensaje" required rows={5}
                      value={form.mensaje} onChange={handleChange}
                      placeholder={t(
                        'Cuéntame sobre el proyecto o la oportunidad...',
                        'Tell me about the project or opportunity...'
                      )}
                      className={inputClass + ' resize-none'} />
          </div>

          <button type="submit"
                  disabled={status === 'sending' || status === 'ok'}
                  className="py-3 font-mono font-bold text-sm tracking-[3px] uppercase
                             bg-gradient-to-r from-accent to-accent2 text-bg
                             hover:opacity-90 transition-opacity disabled:opacity-50
                             [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            {status === 'sending' ? t('Enviando...', 'Sending...')
              : status === 'ok'   ? t('Mensaje enviado', 'Message sent')
              : t('Enviar mensaje', 'Send message')}
          </button>

          {status === 'ok' && (
            <p className="font-mono text-xs text-accent border border-accent/25 bg-accent/8 p-3 text-center">
              {t('Recibido. Te respondo antes de 24 horas.', "Got it. I'll reply within 24 hours.")}
            </p>
          )}
          {status === 'error' && (
            <p className="font-mono text-xs text-red-400 border border-red-500/25 bg-red-500/8 p-3 text-center">
              {t('Algo salió mal. Escríbeme directo a delatorreandre03@gmail.com', 'Something went wrong. Email me directly at delatorreandre03@gmail.com')}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
