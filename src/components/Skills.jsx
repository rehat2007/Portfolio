import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../hooks/useReveal.js";
import { useReveal } from "../hooks/useReveal.js";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  const ref = useReveal();
  const barsRoot = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-bar]").forEach((bar) => {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${bar.dataset.level}%`,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 92%", once: true },
          }
        );
      });
    }, barsRoot);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="bg-panel/30">
      <div ref={barsRoot} className="section">
        <div data-reveal>
          <p className="section-sub">What I work with</p>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <div key={group.category} data-reveal data-delay={gi * 0.1} className="card p-6">
              <h3 className="mb-5 text-lg font-bold text-white">
                <span className="gradient-text">{group.category}</span>
              </h3>
              <div className="space-y-4">
                {group.items.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-slate-200">{s.name}</span>
                      <span className="text-slate-400">{s.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink">
                      <div
                        data-bar
                        data-level={s.level}
                        className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent"
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
