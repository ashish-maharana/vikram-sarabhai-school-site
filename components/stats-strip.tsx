"use client";

import { useEffect, useRef, useState } from "react";
import type { StatItem } from "@/lib/types";

function useCountUp(target: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let started = false;
    let frame = 0;
    const duration = 1100;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const startedAt = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          setCount(Math.round(progress * target));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return { count, ref };
}

function Counter({ item }: { item: StatItem }) {
  const { count, ref } = useCountUp(item.value);

  return (
    <div ref={ref} className="stat-holo play-card text-center">
      <p className="relative z-[1] text-4xl font-semibold text-[#6d1b7b] sm:text-5xl">
        {count}
        {item.suffix}
      </p>
      <p className="relative z-[1] mt-2 text-lg font-extrabold text-[#35557a]">{item.label}</p>
      <p className="relative z-[1] mt-3 text-sm font-medium leading-6 text-[#ffffff]">{item.description}</p>
    </div>
  );
}

export function StatsStrip({ stats }: { stats: StatItem[] }) {
  return (
    <section aria-label="School impact highlights" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <Counter key={item.label} item={item} />
      ))}
    </section>
  );
}

