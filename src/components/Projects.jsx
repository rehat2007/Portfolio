import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useReveal } from "../hooks/useReveal.js";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" ref={ref} className="section">
      <div data-reveal>
        <p className="section-sub">Things I've built</p>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            data-reveal
            data-delay={i * 0.1}
            className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-brand-light/60"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{p.short}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full bg-brand/15 px-3 py-1 text-xs text-brand-light">
                    {t}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${p.slug}`} className="btn-primary mt-5 !py-2.5">
                View Details <FiArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
