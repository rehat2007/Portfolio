import { useLayoutEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio.js";

function Block({ title, children }) {
  return (
    <div data-p className="card p-6">
      <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
      {children}
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-slate-400">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-p]", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, [slug]);

  if (!project) {
    return (
      <section className="section pt-36 text-center">
        <h1 className="section-title">Project not found</h1>
        <Link to="/#projects" className="btn-primary mt-8">
          <FiArrowLeft /> Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section ref={root} className="mx-auto max-w-4xl px-5 pb-20 pt-28 sm:px-8 md:pt-32">
      <Link
        data-p
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <FiArrowLeft /> Back to projects
      </Link>

      <h1 data-p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
        {project.name}
      </h1>

      <img
        data-p
        src={project.image}
        alt={project.name}
        className="mt-6 w-full rounded-2xl border border-line object-cover"
      />

      <div data-p className="mt-6 flex flex-wrap gap-3">
        <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
          <FiExternalLink /> Live Project
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
          <FaGithub /> GitHub (Client)
        </a>
      </div>

      <div className="mt-8 space-y-6">
        <Block title="Main Technology Stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="rounded-full bg-brand/15 px-4 py-1.5 text-sm font-medium text-brand-light">
                {t}
              </span>
            ))}
          </div>
        </Block>

        <Block title="Description">
          <p className="leading-relaxed text-slate-400">{project.description}</p>
        </Block>

        <Block title="Challenges Faced">
          <List items={project.challenges} />
        </Block>

        <Block title="Improvements & Future Plans">
          <List items={project.future} />
        </Block>
      </div>
    </section>
  );
}
