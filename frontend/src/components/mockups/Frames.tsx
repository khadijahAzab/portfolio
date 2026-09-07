import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  label,
  dark,
  className,
}: {
  children: ReactNode;
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div
        className={cn(
          "w-[218px] rounded-[2rem] border p-[5px] transition-transform duration-500 sm:w-[236px]",
          dark ? "border-[#31302C] bg-[#191918]" : "border-[#D4CFC4] bg-[#FAF9F6]"
        )}
      >
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.65rem] bg-white">
          {children}
          <div className="pointer-events-none absolute left-1/2 top-1.5 z-20 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black/85" aria-hidden="true" />
        </div>
      </div>
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">{label}</span>
      )}
    </div>
  );
}

export function BrowserFrame({
  children,
  url,
  className,
}: {
  children: ReactNode;
  url: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-[#D4CFC4] bg-[#FAF9F6]", className)}>
      <div className="flex items-center gap-3 border-b border-[#E3DFD7] bg-[#ECE8DF] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D8D3C8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#C9C3B8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#B4AEA2]" />
        </div>
        <div className="flex-1 rounded-full bg-white px-4 py-1 text-center font-mono text-[10px] tracking-wide text-[#8C877E]">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}
