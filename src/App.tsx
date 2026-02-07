import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import InteractiveRobot from './components/InteractiveRobot'
import LoadingScreen from './components/LoadingScreen'
import ParticlesBackground from './components/ParticlesBackground'
import SectionDivider from './components/SectionDivider'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Lazy load the heavy 3D scene
const Scene3D = lazy(() => import('./components/Scene3D'))

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* EVA floating robot + chat */}
      <InteractiveRobot />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Effects */}
      <div className="aurora-bg" />
      <ParticlesBackground />
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <SectionDivider variant="gradient" />
        <About />
        <SectionDivider variant="dots" />
        <Experience />
        <SectionDivider variant="line" />
        <TechStack />
        <SectionDivider variant="gradient" />
        <Projects />
        <SectionDivider variant="dots" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
