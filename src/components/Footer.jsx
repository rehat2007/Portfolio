import { profile, socials } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:px-8 md:flex-row">
        <p className="text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-3">
          {socials.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="text-lg text-slate-400 transition hover:text-brand-accent"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
