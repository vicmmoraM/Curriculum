import { useScrollFade } from '../hooks/useScrollFade'
import { skills, architectures } from '../data/cv'
import { SectionLabel } from './About'
// Importamos los iconos necesarios
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss,
  SiNodedotjs, 
  SiDjango, 
  SiPython, 
  SiPostman,
  SiMysql, 
  SiMariadb, 
  SiPandas, 
  SiNumpy,
  SiGithub, 
  SiGitlab, 
  SiGit,
  SiCplusplus,
  SiOpenjdk
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di"

// 1. Mapeo de nombres a Iconos
const skillIcons: Record<string, React.ReactNode> = {
  // Frontend
  'React': <SiReact className="text-[#61DAFB]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'HTML5': <SiHtml5 className="text-[#E34F26]" />,
  'CSS3': <SiCss className="text-[#1572B6]" />,
  // Backend
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Django': <SiDjango className="text-[#092E20]" />,
  'Python': <SiPython className="text-[#3776AB]" />,
  'REST APIs': <SiPostman className="text-[#FF6C37]" />,
  // Data
  'SQL Server': <DiMsqlServer className="text-[#CC2927]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'MariaDB': <SiMariadb className="text-[#003545]" />,
  'Pandas': <SiPandas className="text-[#150458]" />,
  'Numpy': <SiNumpy className="text-[#013243]" />,
  // Tooling
  'Git': <SiGit className="text-[#F05032]" />,
  'GitHub': <SiGithub />,
  'GitLab': <SiGitlab className="text-[#FC6D26]" />,
  'Java': <SiOpenjdk className="text-[#ED8B00]" />,
  'C': <SiCplusplus className="text-[#00599C]" />,
}

const dotColors: Record<string, string> = {
  Frontend: '#61DAFB',
  Backend: '#68A063',
  Data: '#CC2927',
  'Tooling & VCS': '#FC6D26',
}

export default function Skills() {
  const ref = useScrollFade()

  return (
    <section id="habilidades" ref={ref as React.RefObject<HTMLElement>} className="section-fade py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Habilidades</SectionLabel>
        
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 group"
            >
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-2 h-2 rounded-full shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                  style={{ 
                    background: dotColors[category] ?? '#888',
                    boxShadow: `0 0 10px ${dotColors[category]}44` 
                  }}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                  {category}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-zinc-100 dark:border-zinc-800/50 bg-white dark:bg-zinc-800/30 text-zinc-600 dark:text-zinc-400 hover:scale-105 transition-transform"
                  >
                    <span className="text-base">
                        {skillIcons[skill] || null}
                    </span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Arquitecturas con diseño más limpio */}
        <div className="mt-8 bg-zinc-50/50 dark:bg-zinc-950/30 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800/50 backdrop-blur-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 mb-6">
            Arquitecturas & Patrones
          </p>
          <div className="flex flex-wrap gap-3">
            {architectures.map(arch => (
              <span
                key={arch}
                className="text-xs font-mono px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 shadow-sm"
              >
                {arch}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}