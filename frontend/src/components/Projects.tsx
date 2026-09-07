import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { archive, projects, type Project } from "@/data/portfolio";
import BIDashboard from "@/components/mockups/BIDashboard";
import { BrowserFrame } from "@/components/mockups/Frames";

function FramedImage({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="group/img">
      <div className="overflow-hidden rounded-xl border border-[#D4CFC4] bg-white">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="w-full transition-transform duration-700 group-hover/img:scale-[1.02]"
        />
      </div>
      <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Visual({ project }: { project: Project }) {
  if (project.visual === "bi") {
    const img = project.images?.[0];
    return (
      <div className="mx-auto w-full max-w-3xl space-y-8">
        {img && <FramedImage src={img.src} caption={img.caption} />}
        <div>
          <BIDashboard />
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
            Interactive mini-recreation — try the filters
          </p>
        </div>
      </div>
    );
  }
  if (project.visual === "wasla") {
    const img = project.images?.[0];
    if (!img) return null;
    return (
      <figure className="group/img mx-auto w-full max-w-2xl">
        <BrowserFrame url="wasla-project.vercel.app">
          <img
            src={img.src}
            alt={img.caption}
            loading="lazy"
            className="w-full transition-transform duration-700 group-hover/img:scale-[1.015]"
          />
        </BrowserFrame>
        <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
          {img.caption}
        </figcaption>
      </figure>
    );
  }
  const images = project.images ?? [];
  return (
    <div
      className={
        images.length > 1
          ? "grid grid-cols-1 items-start gap-6 sm:grid-cols-2"
          : "mx-auto w-full max-w-2xl"
      }
    >
      {images.map((img) => (
        <FramedImage key={img.src} src={img.src} caption={img.caption} />
      ))}
    </div>
  );
}

function ProjectBlock({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article
      id={`project-${project.id}`}
      data-testid={`project-card-${project.id}`}
      className="border-t border-[#E3DFD7] py-20 first:border-t-0 lg:py-28"
    >
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-heading italic text-base text-[#8C877E]">{project.index}</span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#121212] font-semibold">
            {project.category}
          </span>
        </div>
        <h3 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight leading-[1.08] sm:text-4xl lg:text-5xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5A5751]">{project.tagline}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal delay={0.1} className={flip ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
          <div className="border border-[#E3DFD7] bg-[#F1EEE7] px-6 py-12 sm:px-10">
            <Visual project={project} />
          </div>
        </Reveal>

        <div className={flip ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
          <Reveal delay={0.15}>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">Objective</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#5A5751]">{project.objective}</p>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
                Tools & technologies
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[#D8D3C8] bg-[#F1EEE7] px-3 py-1 text-xs font-medium text-[#22201D]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
                Key process steps
              </h4>
              <ol className="mt-3 space-y-3">
                {project.process.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#5A5751]">
                    <span className="font-heading italic text-sm text-[#8C877E]">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 border-l-2 border-[#121212] pl-4">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
                Deliverables & results
              </h4>
              <p className="mt-2 text-sm leading-relaxed font-medium">{project.deliverables}</p>
            </div>

            {project.link && (
              <a
                data-testid={`project-link-${project.id}`}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#121212] px-6 py-3 text-sm font-medium text-[#F8F7F4] transition-colors duration-300 hover:bg-black focus:ring-2 focus:ring-[#121212] focus:ring-offset-2"
              >
                {project.linkLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <SectionHeading chapter="04" overline="Selected Work" title="Six projects, each its own chapter." />
      <div className="mt-6">
        {projects.map((p, i) => (
          <ProjectBlock key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      <Reveal>
        <div className="mt-4 border border-[#E3DFD7] bg-[#F1EEE7] p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
            Coursework archive
          </span>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {archive.map((a) => (
              <div key={a.title} data-testid={`archive-${a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <div className="overflow-hidden rounded-lg border border-[#D8D3C8] bg-white">
                  <img
                    src={a.image}
                    alt={`${a.title} — ${a.course} project screens`}
                    loading="lazy"
                    className="w-full transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-4 font-heading text-xl tracking-tight">{a.title}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#8C877E]">{a.course}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#5A5751]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
