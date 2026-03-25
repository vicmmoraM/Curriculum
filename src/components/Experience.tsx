import { useScrollFade } from '../hooks/useScrollFade'
import { experience, education } from '../data/cv'
import { SectionLabel } from './About'
import { tagIcons } from '../utils/icons'

export default function Experience() {
  const ref = useScrollFade()


  return (
    <section id="experiencia" ref={ref as React.RefObject<HTMLElement>} className="section-fade py-32 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Experiencia</SectionLabel>
        <div className="mt-16 relative">
          {/* Línea vertical del timeline (Solo visible en desktop) */}
          <div className="absolute left-[189px] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
          <div className="space-y-20">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 group relative"
              >
                {/* Lado izquierdo: Periodo y Punto del Timeline */}
                <div className="relative">
                  <p className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-600 uppercase md:text-right">
                    {exp.period}
                  </p>
                  {/* El "Punto" de conexión */}
                  <div className="absolute -right-[71px] top-1 w-3 h-3 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 z-10 hidden md:block group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300" />
                </div>
                {/* Lado derecho: Contenido de la Experiencia */}
                <div className="relative p-6 -mt-6 rounded-2xl transition-all duration-300 group-hover:bg-zinc-100/60 dark:group-hover:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/50">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 mb-4">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">Full-time</span>
                  </div>
                  <p className="text-[15px] text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed mb-6 max-w-2xl">
                    {exp.description}
                  </p>
                  {/* Tags de Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/70 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/30 text-[11px] font-medium hover:border-blue-500/30 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
                      >
                        <span className="text-sm opacity-90">
                          {tagIcons[tag] || null}
                        </span>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Separador sutil entre secciones */}
        <div className="my-24 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        {/* Educación - Diseño más compacto y elegante */}
        <div>
          <SectionLabel>Educación</SectionLabel>
          <div className="mt-12 grid gap-6">
            {education.map((edu) => (
              <div key={edu.institution} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-zinc-100 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-900/30 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 transition-all">
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
                </div>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}