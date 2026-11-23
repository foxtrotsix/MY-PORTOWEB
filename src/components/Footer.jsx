import { profile, socials } from "../data.js"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-2xl font-bold">
              <span className="text-accent">&lt;</span>ROBOTICS
              <span className="text-accent">/&gt;</span>
            </p>
            <p className="mt-3 font-mono text-sm text-dim">
              &gt; contact: <span className="text-ink">{profile.email}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2 font-mono text-xs text-dim transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 font-mono text-[11px] text-dim sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>
            built with <span className="text-accent">React + Tailwind + Lenis</span>  no_restart_needed
          </p>
        </div>
      </div>
    </footer>
  )
}
