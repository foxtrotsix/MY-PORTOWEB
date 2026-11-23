import { profile } from "../data.js"
import Section from "./Section.jsx"
import Reveal from "./Reveal.jsx"

export default function About() {
  return (
    <Section id="about" kicker="who_am_i" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-dim">
          {profile.about.map((p, i) => (
            <Reveal key={i} dir={i % 2 ? "right" : "blur"}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal dir="float">
            <div className="mt-6 space-y-2 rounded-2xl border border-line bg-panel-light p-6 font-mono text-sm text-panel">
              <p>
                <span className="text-accent">$</span> whoami
              </p>
              <p>&gt; {profile.name}  {profile.role}</p>
              <p>
                <span className="text-accent">$</span> mail --to {profile.email}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          {profile.facts.map((f, fi) => (
            <Reveal key={f.k} dir={fi % 2 ? "left" : "up"} delay={fi * 0.08}>
              <div className="group flex items-center gap-4">
                <span className="w-10 shrink-0 text-right font-mono text-xs text-dim">
                  {String(fi + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-2xl border border-line bg-panel px-5 py-4 transition-colors group-hover:border-accent">
                  <div className="flex items-baseline justify-between">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-dim">{f.k}</p>
                    <p className="font-mono text-2xl font-bold text-accent">{f.v}</p>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-1000"
                      style={{ width: `${70 + fi * 6}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
