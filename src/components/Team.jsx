import { team } from "../data.js"
import Section from "./Section.jsx"
import Reveal from "./Reveal.jsx"

const offsets = [0, 40, -40, 20]
const dirs = ["up", "float", "scale", "blur"]

export default function Team() {
  return (
    <Section id="team" kicker="crew" title="My Team">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {team.map((m, i) => (
          <Reveal key={m.name} dir={dirs[i % dirs.length]} delay={i * 0.05}>
            <a
              href={m.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              style={{ transform: `translateY(${offsets[i]}px)` }}
              className="group block overflow-hidden rounded-2xl border border-line bg-panel text-center transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-3 pt-10 font-mono text-[10px] uppercase tracking-widest text-accent transition-transform duration-300 group-hover:translate-y-0">
                  visit →
                </span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-ink transition-colors group-hover:text-accent">{m.name}</p>
                <p className="mt-1 font-mono text-[11px] text-dim">{m.role}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
