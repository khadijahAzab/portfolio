import { Compass, BarChart3, Code2 } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { skillGroups, softSkills } from "@/data/portfolio";

const icons = [Compass, BarChart3, Code2];

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="border-y border-[#E3DFD7] bg-[#F1EEE7]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <SectionHeading chapter="02" overline="Skills" title="Two disciplines, one toolbox." />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <article
                  data-testid={`skill-group-${i}`}
                  className="group h-full border border-[#D8D3C8] bg-[#F8F7F4] p-8 transition-colors duration-500 hover:bg-[#FFFFFF]"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[#121212]" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
                      {group.caption}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl tracking-tight">{group.title}</h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-[#D8D3C8] bg-[#F1EEE7] px-3.5 py-1.5 text-xs font-medium text-[#22201D] transition-colors duration-300 group-hover:border-[#C9C3B8]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 border border-[#D8D3C8] bg-[#F8F7F4] p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
              Soft skills
            </span>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5 text-sm text-[#5A5751]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#121212]" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
