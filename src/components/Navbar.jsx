import { useEffect, useState } from "react"
import { nav } from "../data.js"

export default function Navbar() {
  const [light, setLight] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"))
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle("light", next)
    localStorage.setItem("theme", next ? "light" : "dark")
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm font-bold tracking-widest">
          <span className="text-accent">&lt;</span>ROBOTICS
          <span className="text-accent">/&gt;</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="rounded-full px-3 py-1.5 font-mono text-xs tracking-wide text-dim transition-colors hover:text-ink"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-accent"
          >
            {light ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full border border-accent px-4 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-white md:block"
          >
            hire me
          </a>
        </div>
      </nav>
    </header>
  )
}
