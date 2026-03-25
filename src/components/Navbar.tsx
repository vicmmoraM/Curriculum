import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const links = ['Sobre mí', 'Experiencia', 'Habilidades', 'Proyectos', 'Contacto']
const ids = ['sobre-mi', 'experiencia', 'habilidades', 'proyectos', 'contacto']

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-100 dark:border-zinc-800'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#inicio" className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
          vm<span className="text-blue-500">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((label, i) => (
            <li key={label}>
              <a
                href={`#${ids[i]}`}
                className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            {dark ? (
              <HiOutlineSun className="w-4 h-4" strokeWidth={1.5} />
            ) : (
              <HiOutlineMoon className="w-4 h-4" strokeWidth={1.5} />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-zinc-500"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((label, i) => (
              <li key={label}>
                <a
                  href={`#${ids[i]}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
