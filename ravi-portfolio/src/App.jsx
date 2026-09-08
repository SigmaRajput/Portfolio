import { useEffect, useMemo, useRef, useState } from "react";
import {
  profile,
  socials,
  skillGroups,
  experience,
  education,
  achievements,
  certifications,
  projects,
} from "./data";
import MatrixRain from "./MatrixRain";

const NAV = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "certifications", label: "certifications" },
  { id: "contact", label: "contact" },
];

const BOOT_LINES = [
  { prompt: "$", cmd: "whoami" },
  { prompt: "", out: profile.name, cls: "accent" },
  { prompt: "$", cmd: "cat role.txt" },
  { prompt: "", out: `${profile.role} @ ${profile.company}` },
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

function useTypewriter(lines, active) {
  const [rendered, setRendered] = useState(() =>
    active ? [] : lines
  );
  const [done, setDone] = useState(!active);

  useEffect(() => {
    if (!active) {
      setRendered(lines);
      setDone(true);
      return;
    }
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const out = [];

    function step() {
      if (cancelled) return;
      const line = lines[lineIdx];
      if (!line) {
        setDone(true);
        return;
      }
      const text = line.cmd ?? line.out ?? "";
      charIdx += 2;
      const partial = { ...line };
      if (line.cmd) partial.cmd = text.slice(0, charIdx);
      else partial.out = text.slice(0, charIdx);

      setRendered([...out, partial]);

      if (charIdx >= text.length) {
        out.push(line);
        lineIdx += 1;
        charIdx = 0;
        setTimeout(step, 120);
      } else {
        setTimeout(step, 18);
      }
    }
    const start = setTimeout(step, 300);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return [rendered, done];
}

function useTilt(prefersReducedMotion) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * 5}deg) rotateX(${
        -py * 5
      }deg) translateZ(0)`;
    }
    function onLeave() {
      el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [prefersReducedMotion]);

  return ref;
}

export default function App() {
  const [theme, setTheme] = useTheme();
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const [lines, bootDone] = useTypewriter(BOOT_LINES, !prefersReducedMotion);
  const termRef = useTilt(prefersReducedMotion);

  return (
    <>
      <MatrixRain theme={theme} />
      <header className="pathbar">
        <div className="pathbar-inner">
          <span className="pathbar-user">ravi@singh:~</span>
          <nav className="pathbar-links">
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                ~/{item.label}
              </a>
            ))}
          </nav>
          <button
            className="theme-flag"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle color theme"
          >
            --theme=<span className="flag-value">{theme}</span>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-a" aria-hidden="true" />
        <div className="hero-glow hero-glow-b" aria-hidden="true" />
        <div className="hero-inner">
          <div className="term" ref={termRef}>
            <div className="term-bar">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-title">ravi@singh: ~</span>
            </div>
            <div className="term-body">
              {lines.map((line, i) => (
                <div className="term-line" key={i}>
                  {line.prompt ? <span className="term-prompt">{line.prompt}</span> : null}
                  <span className={`term-out ${line.cls ?? ""}`}>
                    {line.cmd ?? line.out}
                    {bootDone && i === lines.length - 1 ? (
                      <span className="cursor" />
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>

          <div className="hero-cta">
            <a className="btn primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              download resume
            </a>
            <a className="btn" href="#contact">
              get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap-wide">
          <div className="cmd-line">
            <span className="prompt">$</span>
            <span className="cmd">cat about.md</span>
          </div>
          <div className="about-grid">
            <p className="about-text">
              {profile.summary}
              <span className="end-cursor" />
            </p>
            <div className="avatar-frame">
              <img src={profile.avatar} alt="" width="320" height="320" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="wrap-wide">
          <div className="cmd-line">
            <span className="prompt">$</span>
            <span className="cmd">./skills --list --all</span>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.dir}>
                <div className="skill-group-dir">
                  <span className="slash">./</span>
                  {group.dir}
                </div>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="wrap-wide">
          <div className="cmd-line">
            <span className="prompt">$</span>
            <span className="cmd">git log --oneline --graph --experience</span>
          </div>
          <div className="prose-col">
            {experience.map((job) => (
              <div className="commit" key={job.hash}>
                <span className="commit-hash">{job.hash}</span>
                <span className="commit-meta">{job.period}</span>
                <div className="commit-title">{job.role}</div>
                <div className="commit-org">{job.org}</div>
                <ul className="commit-body">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cmd-line" style={{ marginTop: 40 }}>
            <span className="prompt">$</span>
            <span className="cmd">cat education.log</span>
          </div>
          <div className="prose-col">
            {education.map((e) => (
              <div className="edu-item" key={e.degree}>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-meta">
                  {e.school} · {e.period} · {e.note}
                </div>
              </div>
            ))}
          </div>

          <div className="cmd-line" style={{ marginTop: 40 }}>
            <span className="prompt">$</span>
            <span className="cmd">stats --achievements</span>
          </div>
          <div className="stat-grid">
            {achievements.map((a) => (
              <div className="stat" key={a.label}>
                <div className="stat-value">{a.value}</div>
                <div className="stat-label">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="wrap-wide">
          <div className="cmd-line">
            <span className="prompt">$</span>
            <span className="cmd">ls ~/projects/</span>
          </div>
          <div className="notice">
            <span className="tag">[info]</span>
            personal projects are being curated and will land here soon —
            check back shortly.
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <div className="project-slot" key={p.slot}>
                <div className="project-slot-img">
                  <img src={p.image} alt="" width="480" height="300" />
                </div>
                <div className="project-slot-meta">
                  <span className="slot-name">{p.slot}.md</span>
                  <span className="slot-status">// {p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="wrap-wide">
          <div className="cmd-line">
            <span className="prompt">$</span>
            <span className="cmd">ls -la ~/certifications/</span>
          </div>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div className="cert-item" key={c.name}>
                <span className="cert-icon">▸</span>
                <span>
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-issuer">{c.issuer}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap">
          <div className="cmd-line">
            <span className="prompt">$</span>
            <span className="cmd">cat contact.txt</span>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.href.replace(/^https?:\/\//, "").replace(/^mailto:/, "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} {profile.name}. Built from the
          terminal, for the terminal.
          <br />
          <span className="prompt-end">ravi@singh:~$</span>
          <span className="cursor" />
        </div>
      </footer>
    </>
  );
}
