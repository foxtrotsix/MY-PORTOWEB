import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"
import Navbar from "./components/Navbar.jsx"
import Cursor from "./components/Cursor.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Socials from "./components/Socials.jsx"
import Projects from "./components/Projects.jsx"
import Team from "./components/Team.jsx"
import Business from "./components/Business.jsx"
import Gallery from "./components/Gallery.jsx"
import Footer from "./components/Footer.jsx"
import Marquee from "./components/Marquee.jsx"
import Splash from "./components/Splash.jsx"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [loading])

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <AnimatePresence>
        {loading && <Splash onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Marquee />
        <Socials />
        <Projects />
        <Marquee reverse />
        <Team />
        <Business />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
