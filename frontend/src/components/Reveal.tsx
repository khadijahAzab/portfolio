import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  chapter,
  overline,
  title,
}: {
  chapter: string;
  overline: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="font-heading italic text-base text-[#8C877E]">{chapter}</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#121212] font-semibold">
          {overline}
        </span>
      </div>
      <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
        {title}
      </h2>
    </Reveal>
  );
}
