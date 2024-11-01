"use client";

import { Minus, Plus, Sparkle } from "lucide-react";
import { forwardRef, useEffect, useRef, useState } from "react";

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
  id: number;
  header: string;
  children: React.ReactNode;
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
};

export function FaqAccordion({ id, header, children, expanded, onExpandedChange} : FaqAccordionProps){
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [contentHeight, setContentHeight] = useState<string | number>("0px");

    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(
          expanded ? `${contentRef.current.scrollHeight}px` : "0px"
        );
      }
    }, [expanded]);
    return (
      <div
        className={`flex md:h-[24px] h-[30px] transition-all duration-300 flex-col gap-3 w-full overflow-hidden`}
        style={{ minHeight: expanded ? `${contentHeight}` : "0px" }}
      >
        <button
          className="flex justify-between items-center"
          aria-controls={`${id}-accordion`}
          aria-expanded={expanded}
          onClick={() => onExpandedChange(!expanded)}
        >
          <span className="font-medium">{header}</span>
          {expanded ? (
            <Minus className="size-4 text-rose-900" />
          ) : (
            <Plus className="size-4 text-rose-900" />
          )}
        </button>
        <div ref={contentRef} className="overflow-hidden">
          <p className="text-sm text-slate-700">{children}</p>
        </div>
      </div>
    );
}

FaqAccordion.displayName = "FaqAccordion";
