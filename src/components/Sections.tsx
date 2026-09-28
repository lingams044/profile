import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, GraduationCap, Award } from 'lucide-react'
import { portfolioData as d, type Project } from '../data/portfolio'

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }}>
        <h2 className="text-3xl font-bold mb-10"><span className="grad">{title}</span></h2>
        {children}
      </motion.div>
    </section>
  )
}

export function About() {
  const a = d.about
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-6 space-y-4 text-slate-300">
          <p>{a.intro}</p><p>{a.goals}</p>
          <p className="text-sm text-slate-400">Languages: {a.languages.join(', ')}</p>
        </div>
        <div className="space-y-6">
          <div className="glass p-6"><h3 className="font-semibold mb-3">Technical Interests</h3><div className="flex flex-wrap gap-2">{a.interests.map(i => <span key={i} className="chip">{i}</span>)}</div></div>
          <div className="glass p-6"><h3 className="font-semibold mb-3">Strengths</h3><div className="flex flex-wrap gap-2">{a.strengths.map(i => <span key={i} className="chip">{i}</span>)}</div></div>
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {d.skills.map(s => (
          <motion.div key={s.category} whileHover={{ y: -6 }} className="glass p-6 hover:border-cyan-400/40 transition">
            <h3 className="font-semibold mb-4 text-cyan-300">{s.category}</h3>
            <div className="flex flex-wrap gap-2">{s.items.map(i => <span key={i} className="chip">{i}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const block = (t: string, c: ReactNode) => <div><h4 className="text-cyan-300 font-semibold mb-1">{t}</h4>{c}</div>
  return (
    <motion.div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="glass !bg-[#0B1020] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 space-y-5" initial={{ scale: .92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .95, opacity: 0 }} onClick={e => e.stopPropagation()}>
        <div className="flex justify-between gap-4"><h3 className="text-2xl font-bold">{p.name}</h3><button onClick={onClose} aria-label="Close"><X /></button></div>
        {block('Project Overview', <p className="text-slate-300">{p.description}</p>)}
        {block('Key Features', <ul className="list-disc pl-5 text-slate-300 space-y-1">{p.features.map(f => <li key={f}>{f}</li>)}</ul>)}
        {block('Technology Stack', <div className="flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>)}
        {p.role && block('My Role', <p className="text-slate-300">{p.role}</p>)}
        <div className="flex gap-3 pt-2">
          {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-s"><Github size={16} />GitHub</a>}
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-p"><ExternalLink size={16} />Live Demo</a>}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [sel, setSel] = useState<Project | null>(null)
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {d.projects.map(p => (
          <motion.button key={p.name} whileHover={{ y: -6 }} onClick={() => setSel(p)}
            className={`glass p-6 text-left flex flex-col gap-3 hover:border-violet-400/50 transition ${p.featured ? 'lg:col-span-2 border-cyan-400/30 shadow-[0_0_40px_rgba(59,130,246,.15)]' : ''}`}>
            <div className="flex justify-between text-xs text-slate-400"><span>{p.org}</span><span>{p.year}</span></div>
            {p.featured && <span className="text-xs text-cyan-300 font-semibold uppercase tracking-widest">Featured</span>}
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-slate-400 text-sm">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>{sel && <Modal p={sel} onClose={() => setSel(null)} />}</AnimatePresence>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-5">
        {d.education.map(e => (
          <div key={e.title} className="glass p-6">
            <GraduationCap className="text-cyan-300 mb-3" />
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-slate-400 text-sm mt-1">{e.place}</p>
            <p className="text-sm mt-2"><span className="text-violet-300">{e.period}</span> · {e.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Achievements() {
  const groups: [string, string[]][] = [['Certifications', d.certifications], ['Co-Curricular Activities', d.activities]]
  return (
    <Section id="achievements" title="Certifications & Activities">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map(([t, list]) => (
          <div key={t} className="glass p-6">
            <h3 className="font-semibold mb-4">{t}</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {list.map(i => <li key={i} className="flex gap-2"><Award size={16} className="text-cyan-300 shrink-0 mt-0.5" />{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
