import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { portfolioData as d } from '../data/portfolio'
import { resumeUrl } from './Navbar'

const ThreeScene = lazy(() => import('./ThreeScene'))

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(99,102,241,.22),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-12 grid lg:grid-cols-2 gap-6 items-center w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <p className="text-cyan-300 mb-3 text-sm tracking-widest uppercase">Hello, I'm</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight"><span className="grad">{d.name}</span></h1>
          <h2 className="mt-3 text-lg sm:text-xl text-slate-300">{d.role}</h2>
          <p className="mt-5 text-slate-400 max-w-lg">{d.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-p">View My Work <ArrowDown size={16} /></a>
            <a href={resumeUrl} download className="btn btn-s"><Download size={16} />Download Resume</a>
            <a href="#contact" className="btn btn-s"><Mail size={16} />Contact Me</a>
          </div>
        </motion.div>
        <div className="h-[320px] sm:h-[460px] lg:h-[540px]">
          <Suspense fallback={<div className="w-full h-full grid place-items-center text-slate-500 text-sm">Loading 3D…</div>}>
            <ThreeScene />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
