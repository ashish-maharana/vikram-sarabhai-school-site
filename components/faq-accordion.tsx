"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Item = { question: string; answer: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <article key={item.question} className="overflow-hidden rounded-[1.35rem] border-2 border-white bg-white shadow-[0_14px_34px_rgba(21,17,43,0.07)]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d1b7b]"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : idx)}
            >
              <span className="font-extrabold text-[#35557a]">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#6d1b7b] transition ${open ? "rotate-180" : ""}`} />
            </button>
            {open ? <p className="px-5 pb-5 font-medium leading-7 text-[#000000]">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}

