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
        <p className="sticker bg-[#ffd45a] text-[#171717]">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] text-[#151515] sm:text-5xl">{title}</h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-[#5d5a54] sm:text-base">{description}</p>
      </header>
    );
  }

  return (
    <header className={base}>
      <p className={`sticker ${isVikram ? "bg-[#c89b3c] text-[#1e2430]" : "bg-[#ffd84d] text-[#15112b]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight sm:text-5xl ${isVikram ? "text-[#1e2430]" : "text-[#15112b]"}`}>{title}</h2>
      <p className={`mt-4 text-base font-medium leading-7 ${isVikram ? "text-[#425062]" : "text-[#4b4564]"}`}>{description}</p>
    </header>
  );
}

