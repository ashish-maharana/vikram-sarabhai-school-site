import type { TimelineItem } from "@/lib/types";

export function Timeline({ items, variant = "default" }: { items: TimelineItem[]; variant?: "default" | "vikram" | "vikram-ref" }) {
  if (variant === "vikram-ref") {
    return (
      <ol className="grid gap-4">
        {items.map((item, index) => (
          <li key={item.title} className="grid gap-4 rounded-[22px] bg-white p-4 shadow-[0_12px_30px_rgba(49,33,19,0.07)] sm:grid-cols-[auto_1fr] sm:items-start">
            <div className={`${index % 2 === 0 ? "bg-[#0f6877] text-white" : "bg-[#ffd45a] text-[#171717]"} inline-flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-extrabold`}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase text-[#f36b2a]">{item.year}</p>
              <h3 className="mt-1 text-xl font-extrabold text-[#151515]">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-7 text-[#5d5a54]">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }
  const isVikram = variant === "vikram";

  return (
    <ol className={`${isVikram ? "timeline-rail" : ""} divide-y rounded-[1.5rem] bg-white/65 px-5 ${isVikram ? "divide-[#0f4c5c]/15" : "divide-[#15112b]/10"}`}>
      {items.map((item, index) => (
        <li key={item.title} className="py-6 pl-2">
          <div className={`sticker mb-3 ${isVikram ? (index % 2 === 0 ? "bg-[#c89b3c]" : "bg-[#7c8a6a] text-white") : (index % 2 === 0 ? "bg-[#ffd84d]" : "bg-[#2ee881]")}`}>{item.year}</div>
          <h3 className={`text-xl font-semibold ${isVikram ? "text-[#1e2430]" : "text-[#15112b]"}`}>{item.title}</h3>
          <p className={`mt-3 font-medium leading-7 ${isVikram ? "text-[#425062]" : "text-[#5b5570]"}`}>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

