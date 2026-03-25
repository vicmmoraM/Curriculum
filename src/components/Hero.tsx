import { personal } from '../data/cv'
// Importamos de Remix Icons (ri) y Hero Icons (hi2)
import { RiArrowRightLine, RiGithubFill, RiDownloadLine } from "react-icons/ri";

export default function Hero() {
  const handleDownload = async () => {
    const html2pdf = (await import('html2pdf.js')).default
    const el = document.getElementById('cv-content')
    if (!el) return
    html2pdf().set({
      margin: 0.5,
      filename: 'Victor_Morales_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    }).from(el).save()
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300"
    >
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blob superior izquierdo */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-200 dark:bg-purple-900/20 blur-[120px] transition-colors duration-300" />
        {/* Blob inferior derecho */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-100 dark:bg-indigo-900/10 blur-[100px] transition-colors duration-300" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 text-sm mb-12 animate-fade-up transition-colors duration-300">
          <span>Ubicado en {personal.location}</span>
          <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700" />
          <a href="#sobre-mi" className="text-blue-600 dark:text-indigo-400 hover:text-blue-400 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors">
            Read more <RiArrowRightLine className="inline" />
          </a>
        </div>

        {/* Título de la imagen */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-up">
          {personal.name}
          <span className="block text-zinc-500 dark:text-zinc-400 mt-4 text-4xl md:text-6xl">
            {personal.role}
          </span>
        </h1>

        {/* Descripción corta */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mb-12 animate-fade-up">
          {personal.tagline}
        </p>

        {/* Botones */}
        <div className="flex flex-wrap justify-center items-center gap-6 animate-fade-up">
          <a
            href="#sobre-mi"
            className="px-8 py-3 bg-blue-600 dark:bg-indigo-600 hover:bg-blue-500 dark:hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20 dark:shadow-indigo-500/20"
          >
            Get started
          </a>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 text-blue-600 dark:text-indigo-400 font-semibold hover:text-blue-400 dark:hover:text-indigo-300 transition-colors"
          >
            Descargar CV <RiDownloadLine />
          </button>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 font-semibold hover:text-blue-600 dark:hover:text-indigo-400 transition-colors"
          >
            <RiGithubFill size={20} /> GitHub
          </a>
        </div>

        {/* Footer del Hero */}
        <div className="mt-20 text-zinc-400 dark:text-zinc-600 font-mono text-xs tracking-widest uppercase">
          {personal.email}
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <div className="w-5 h-8 border-2 border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
        </div>
      </div>
    </section>
  )
}