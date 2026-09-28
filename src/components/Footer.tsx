import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData as d } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400 space-y-3">
      <p className="text-white font-semibold">{d.name}</p>
      <p>Software Developer | AI/ML Enthusiast</p>
      <div className="flex justify-center gap-5">
        <a href={d.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href={d.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href={`mailto:${d.email}`} aria-label="Email"><Mail size={18} /></a>
      </div>
      <p>© 2026 {d.name}</p>
    </footer>
  )
}
