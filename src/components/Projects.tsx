import { useScrollFade } from '../hooks/useScrollFade'
import { projects } from '../data/cv'
import { SectionLabel } from './About'

export default function Projects() {
  const ref = useScrollFade()

  return (
    <section id="proyectos" ref={ref as React.RefObject<HTMLElement>} className="section-fade py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Proyectos</SectionLabel>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj) => (
            <a
              key={proj.name}
              href={proj.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-5 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                <svg className="w-4 h-4 text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm mb-1">{proj.name}</h3>
              <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mb-3">{proj.repo}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 font-light leading-relaxed flex-1">{proj.description}</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: proj.langColor }} />
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">{proj.lang}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
