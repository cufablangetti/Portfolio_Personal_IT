import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Ir al contenido</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
