import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { portfolioData as d } from '../data/portfolio'

export const resumeUrl = `${import.meta.env.BASE_URL}${d.resume}`
const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled || open ? 'bg-[#050816]/80 backdrop-blur-lg border-b border-white/10' : ''}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        <a href="#home" className="font-bold text-lg grad">{d.name}</a>
        <div className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-cyan-300 transition">{l}</a>)}
          <a href={resumeUrl} download className="btn btn-p !py-2"><Download size={15} />Resume</a>
        </div>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="lg:hidden flex flex-col gap-4 px-5 pb-5 text-slate-200">
          {links.map(l => <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`}>{l}</a>)}
          <a href={resumeUrl} download className="btn btn-p w-fit"><Download size={15} />Download Resume</a>
        </div>
      )}
    </header>
  )
}
