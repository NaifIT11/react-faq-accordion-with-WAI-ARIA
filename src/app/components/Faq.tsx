"use client"


import { Minus, Plus, Sparkle } from "lucide-react";

export function Faq({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[70vw] md:w-[50vw] p-4 flex flex-col gap-4 rounded bg-white shadow-xl">
      {children}
    </div>
  );
}

export function FaqHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <Sparkle className="size-6 text-rose-900" />
      <h1 className="text-2xl text-rose-900 font-bold">{title}</h1>
    </div>
  );
}

type FaqAccordionProps = {
  id: number,
  header: string,
  children: React.ReactNode,
  expanded: boolean , 
  containerRef: React.Ref<HTMLDivElement>
  onExpandedChange: (expanded: boolean) => void
};

export function FaqAccordion({ id, header, containerRef ,  children , expanded , onExpandedChange }: FaqAccordionProps) {
  return (
    <div ref={containerRef} className={`flex h-24 data-[expanded=true]:h-${containerRef?.scrollHeight} transition flex-col gap-3 w-full`} data-expanded={expanded}>
      <button
        className="flex justify-between items-center"
        aria-controls={`${id}-accoridion`}
        aria-expanded={expanded}
        onClick={() => onExpandedChange(!expanded)}
      >
        <span className="font-medium">{header}</span>
        {expanded ? <Minus className="size-4 text-rose-900" /> : <Plus className="size-4 text-rose-900" />}
      </button>
      <p className="text-sm text-slate-700">{children}</p>
    </div>
  );
}
