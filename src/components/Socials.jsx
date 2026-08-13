import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { socials } from "../data.js"
import Section from "./Section.jsx"
import Reveal from "./Reveal.jsx"
import iconGithub from "../assets/icons/github.png"
import iconLinkedin from "../assets/icons/linkedin.png"
import iconInstagram from "../assets/icons/instagram.png"
import iconYoutube from "../assets/icons/youtube.png"
import iconGmail from "../assets/icons/gmail.png"

const ICONS = {
  GitHub: iconGithub,
  LinkedIn: iconLinkedin,
  Instagram: iconInstagram,
  YouTube: iconYoutube,
  Gmail: iconGmail,
}

const POS = [
  { angle: -15, r: 220, dur: 0.8 },
  { angle: 50, r: 260, dur: 0.95 },
  { angle: 120, r: 230, dur: 0.85 },
  { angle: 190, r: 270, dur: 1 },
  { angle: 260, r: 210, dur: 0.8 },
]

export default function Socials() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.3"] })
  const hubScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const hubOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <Section id="socials" kicker="network" title="Social Media">
      {/* Mobile: simple grid (no exploded view) */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
        {socials.map((s, i) => (
          <Reveal key={s.label} dir="up" delay={i * 0.05}>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 transition-colors hover:border-accent"
            >
              <img
                src={ICONS[s.label]}
                alt={s.label}
                className="h-10 w-10 shrink-0 object-contain"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="truncate font-semibold text-ink">{s.label}</p>
                <p className="truncate font-mono text-xs text-dim">{s.handle}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Desktop: exploded radial view */}
      <div ref={ref} className="relative hidden h-[620px] items-center justify-center lg:flex">
        <motion.div
          style={{ scale: hubScale, opacity: hubOpacity }}
          className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-accent bg-panel text-center"
        >
          <span className="font-mono text-2xl font-bold text-accent">you</span>
          <span className="font-mono text-xs uppercase tracking-widest text-dim">connect</span>
        </motion.div>

        {socials.map((s, i) => {
          const { angle, r, dur } = POS[i % POS.length]
          const rad = (angle * Math.PI) / 180
          const x = Math.cos(rad) * r
          const y = Math.sin(rad) * r
          return (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              whileInView={{ opacity: 1, x, y, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: dur, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group absolute flex h-20 w-20 items-center justify-center rounded-full border border-line bg-panel shadow-lg transition-colors hover:border-accent"
              style={{ marginLeft: -40, marginTop: -40 }}
            >
              <img
                src={ICONS[s.label]}
                alt={s.label}
                className="h-11 w-11 object-contain"
                loading="lazy"
              />
              <span className="pointer-events-none absolute left-1/2 top-full mt-3 whitespace-nowrap font-mono text-xs text-dim">
                {s.label}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] text-dim opacity-0 transition-opacity group-hover:opacity-100" style={{ transform: "translate(-50%, calc(-100% - 28px))" }}>
                {s.handle}
              </span>
            </motion.a>
          )
        })}
      </div>
    </Section>
  )
}
