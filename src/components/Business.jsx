import { business } from "../data.js"
import Section from "./Section.jsx"
import Reveal from "./Reveal.jsx"

export default function Business() {
  const single = business.length === 1
  return (
    <Section id="business" kicker="services" title="My Business">
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line md:block" />
        <div className={`${single ? "space-y-6" : "space-y-10"}`}>
          {business.map((b, i) => {
            const left = i % 2 === 0
            const wrap = single ? "md:ml-auto md:w-full md:pl-12" : `md:w-1/2 ${left ? "md:pr-12" : "md:ml-auto md:pl-12"}`
            return (
              <Reveal key={b.title} dir={single ? "up" : left ? "right" : "left"} delay={i * 0.05}>
                <div className={`relative flex ${wrap}`}>
                  <div
                    className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 border-accent bg-bg md:block ${
                      left ? "-left-2" : "-left-2"
                    }`}
                  />
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="group block w-full overflow-hidden rounded-2xl border border-line bg-panel transition-all hover:-translate-y-1 hover:border-accent"
                  >
                    {b.img && (
                      <div className="relative aspect-[16/7] overflow-hidden">
                        <img
                          src={b.img}
                          alt={b.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-bg/80 font-mono text-lg text-accent backdrop-blur">
                          {b.icon}
                        </span>
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm text-dim">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="mt-3 text-2xl font-bold text-ink transition-colors group-hover:text-accent">
                        {b.title}
                      </h3>
                      {b.role && (
                        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                          {b.role}
                        </p>
                      )}
                      <p className="mt-4 leading-relaxed text-dim">{b.desc}</p>
                      <p className="mt-5 font-mono text-xs text-accent">
                        visit website <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </p>
                    </div>
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
