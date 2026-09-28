import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Education, Achievements } from './components/Sections'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Education /><Achievements /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
