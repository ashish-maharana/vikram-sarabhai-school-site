import type { SectionIntro } from "@/lib/types";

type SectionHeaderProps = SectionIntro & {
  align?: "left" | "center";
  variant?: "default" | "vikram" | "vikram-ref";
};

export function SectionHeader({ eyebrow, title, description, align = "left", variant = "default" }: SectionHeaderProps) {
  const base = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const isVikram = variant === "vikram";
  const isRef = variant === "vikram-ref";

  if (isRef) {
    return (
      <header className={base}>
        <p className="sticker bg-[#ffd45a] text-[#051228]">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] text-[#ffffff] sm:text-5xl">{title}</h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-[#ffffff] sm:text-base">{description}</p>
      </header>
    );
  }

  return (
    <header className={base}>
      <p className={`sticker ${isVikram ? "bg-[#c89b3c] text-[#1e2430]" : "bg-[#ffd84d] text-[#35557a]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight sm:text-5xl ${isVikram ? "text-[#1e2430]" : "text-[#35557a]"}`}>{title}</h2>
      <p className={`mt-4 text-base font-medium leading-7 ${isVikram ? "text-[#425062]" : "text-[#4b4564]"}`}>{description}</p>
    </header>
  );
}

