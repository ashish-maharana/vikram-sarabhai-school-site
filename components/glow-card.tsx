import { IconGlyph } from "@/components/icons";

type GlowCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
  variant?: "card" | "flat";
  theme?: "default" | "vikram" | "vikram-ref";
};

export function GlowCard({ title, description, icon, tag, variant = "card", theme = "default" }: GlowCardProps) {
  const isVikram = theme === "vikram";
  const isRef = theme === "vikram-ref";

  if (isRef && variant === "flat") {
    return (
      <article className="flex gap-4 rounded-2xl bg-white p-4 shadow-[0_12px_28px_rgba(49,33,19,0.06)]">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff1df] text-[#f36b2a]">
          <IconGlyph name={icon} />
        </div>
        <div>
          {tag ? <span className="sticker mb-3 bg-[#ffd45a]">{tag}</span> : null}
          <h3 className="text-lg font-extrabold text-[#151515]">{title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#5d5a54]">{description}</p>
        </div>
      </article>
    );
  }

  if (isRef) {
    return (
      <article className="ref-card group overflow-hidden p-5 transition hover:-translate-y-1">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#fff1df]" />
        <div className="relative">
          {tag ? <span className="sticker bg-[#f36b2a] text-white">{tag}</span> : null}
          <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1df] text-[#0f6877]">
            <IconGlyph name={icon} />
          </div>
          <h3 className="mt-4 text-xl font-extrabold leading-tight text-[#151515]">{title}</h3>
          <p className="mt-3 text-sm font-semibold leading-7 text-[#5d5a54]">{description}</p>
        </div>
      </article>
    );
  }

  if (variant === "flat") {
    return (
      <article className="flex gap-4">
        <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-2 ring-white ${isVikram ? "bg-[#0f4c5c]/12 text-[#0f4c5c]" : "bg-[#22c7e8]/18 text-[#6d1b7b]"}`}>
          <IconGlyph name={icon} />
        </div>
        <div>
          {tag ? <span className={`sticker mb-3 ${isVikram ? "bg-[#c89b3c]" : "bg-[#f45fa2] text-white"}`}>{tag}</span> : null}
          <h3 className={`text-xl font-semibold ${isVikram ? "text-[#1e2430]" : "text-[#15112b]"}`}>{title}</h3>
          <p className={`mt-3 font-medium leading-7 ${isVikram ? "text-[#425062]" : "text-[#5b5570]"}`}>{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`play-card group transition hover:-translate-y-1 ${isVikram ? "hover:shadow-[0_20px_46px_rgba(15,76,92,0.14)]" : "hover:shadow-[0_20px_46px_rgba(109,27,123,0.14)]"}`}>
      <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full transition ${isVikram ? "bg-[#c89b3c]/35 group-hover:bg-[#e07a5f]/35" : "bg-[#ffd84d]/60 group-hover:bg-[#2ee881]/60"}`} />
      <div className="relative">
        {tag ? <span className={`sticker ${isVikram ? "bg-[#e07a5f] text-white" : "bg-[#f45fa2] text-white"}`}>{tag}</span> : null}
        <div className={`mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-2 ring-white ${isVikram ? "bg-[#0f4c5c]/12 text-[#0f4c5c]" : "bg-[#22c7e8]/18 text-[#6d1b7b]"}`}>
          <IconGlyph name={icon} />
        </div>
        <h3 className={`mt-4 text-xl font-semibold ${isVikram ? "text-[#1e2430]" : "text-[#15112b]"}`}>{title}</h3>
        <p className={`mt-3 font-medium leading-7 ${isVikram ? "text-[#425062]" : "text-[#5b5570]"}`}>{description}</p>
      </div>
    </article>
  );
}

