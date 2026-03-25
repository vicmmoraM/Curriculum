import { useScrollFade } from '../hooks/useScrollFade'
import { personal } from '../data/cv'

export default function About() {
  const ref = useScrollFade()

  return (
    <section id="sobre-mi" ref={ref as React.RefObject<HTMLElement>} className="section-fade py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Sobre mí</SectionLabel>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base font-light">
            {personal.about}
          </p>
          <div className="space-y-4">
            {[
              { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { label: 'Teléfono', value: personal.phone, href: `tel:${personal.phone}` },
              { label: 'Ubicación', value: personal.location },
              { label: 'GitHub', value: 'vicmmoraM', href: personal.github },
              { label: 'GitLab', value: 'vicmmoraM', href: personal.gitlab },
              { label: 'LinkedIn', value: 'victor-morales-vasquez', href: personal.linkedin },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 w-20 pt-0.5 shrink-0">{label}</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-600">{children}</span>
      <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
    </div>
  )
}
