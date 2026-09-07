import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { activities, certifications, education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <SectionHeading chapter="03" overline="Curriculum Vitae" title="The record so far." />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <article data-testid="experience-card" className="h-full border border-[#E3DFD7] bg-[#FFFFFF] p-8">
            <div className="flex items-center justify-between">
              <Briefcase className="h-6 w-6" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
                Work experience
              </span>
            </div>
            {experience.map((job) => (
              <div key={job.company} className="mt-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-heading text-2xl tracking-tight">{job.role}</h3>
                  <span className="font-mono text-xs text-[#8C877E]">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#5A5751]">{job.company}</p>
                <ul className="mt-5 space-y-3">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-[#5A5751]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#121212]" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <article data-testid="education-card" className="h-full border border-[#E3DFD7] bg-[#121212] p-8 text-[#F8F7F4]">
            <div className="flex items-center justify-between">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9E9990]">
                Education
              </span>
            </div>
            <h3 className="mt-7 font-heading text-2xl tracking-tight">{education.degree}</h3>
            <p className="mt-2 text-sm text-[#9E9990]">{education.institution}</p>
            <p className="mt-1 text-sm text-[#9E9990]">{education.detail}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#2B2824] pt-6">
              <span className="font-mono text-xs text-[#9E9990]">{education.period}</span>
              <span className="rounded-full bg-[#E0F65D] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#121212]">
                {education.honors}
              </span>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-5">
          <article data-testid="certifications-card" className="h-full border border-[#E3DFD7] bg-[#FFFFFF] p-8">
            <div className="flex items-center justify-between">
              <Award className="h-6 w-6" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
                Certifications
              </span>
            </div>
            <ul className="mt-7 divide-y divide-[#E3DFD7]">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="text-sm font-medium">{cert.name}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-[#8C877E]">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <article data-testid="activities-card" className="h-full border border-[#E3DFD7] bg-[#F1EEE7] p-8">
            <div className="flex items-center justify-between">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
                Activities & events
              </span>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {activities.map((a) => (
                <div key={a.title} className="border-l border-[#C9C3B8] pl-4">
                  <h4 className="text-sm font-semibold">{a.title}</h4>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#8C877E]">
                    {a.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A5751]">{a.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
