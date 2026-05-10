import { IconGlyph } from "@/components/icons";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
  variant?: "default" | "vikram" | "vikram-ref";
};

export function ProgramCard({ title, description, icon, tag, variant = "default" }: ProgramCardProps) {
  if (variant === "vikram-ref") {
    return (
      <article className="ref-card group p-5 transition hover:-translate-y-1">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff1df] text-[#f36b2a]">
            <IconGlyph name={icon} />
          </div>
          {tag ? <span className="sticker bg-[#42c7b8] text-white">{tag}</span> : null}
        </div>
        <h3 className="mt-5 text-xl font-extrabold leading-tight text-[#151515]">{title}</h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-[#5d5a54]">{description}</p>
      </article>
    );
  }

  if (variant === "vikram") {
    return (
      <article className="play-card soft-wave transition hover:-translate-y-1">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.8rem] bg-[#0f4c5c]/12 text-[#0f4c5c] ring-1 ring-[#c89b3c]/45">
            <IconGlyph name={icon} />
          </div>
          {tag ? <span className="sticker bg-[#e07a5f] text-white">{tag}</span> : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#1e2430]">{title}</h3>
        <p className="mt-3 font-medium leading-7 text-[#425062]">{description}</p>
      </article>
    );
  }

  return (
    <article className="play-card transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffd84d] text-[#6d1b7b]"><IconGlyph name={icon} /></div>
        {tag ? <span className="sticker bg-[#2ee881]">{tag}</span> : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[#15112b]">{title}</h3>
      <p className="mt-3 font-medium leading-7 text-[#5b5570]">{description}</p>
    </article>
  );
}


