import Link from "next/link";

type Props = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  variant?: "default" | "vikram" | "vikram-ref";
};

export function CTASection({ title, description, primary, secondary, variant = "default" }: Props) {
  if (variant === "vikram-ref") {
    return (
      <section className="relative overflow-hidden rounded-[34px] bg-[#fff1df] p-8 shadow-[0_22px_58px_rgba(49,33,19,0.10)] sm:p-10">
        <div className="pointer-events-none absolute bottom-0 right-8 h-32 w-32 rounded-full bg-[#ffd45a]/45" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold leading-[1.02] text-[#151515] sm:text-5xl">{title}</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-[#35557a] sm:text-base">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary" href={primary.href}>{primary.label}</Link>
            {secondary ? <Link className="btn-secondary" href={secondary.href}>{secondary.label}</Link> : null}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "vikram") {
    return (
      <section className="soft-wave relative overflow-hidden bg-[#0f4c5c] p-8 text-white shadow-[0_24px_64px_rgba(15,76,92,0.22)] sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(200,155,60,0.28),transparent_36%),radial-gradient(circle_at_88%_82%,rgba(224,122,95,0.2),transparent_38%)]" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
            <p className="mt-4 font-semibold leading-7 text-white/88">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary" href={primary.href}>{primary.label}</Link>
            {secondary ? <Link className="btn-secondary" href={secondary.href}>{secondary.label}</Link> : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="scallop-y relative overflow-hidden rounded-[2rem] bg-[#6d1b7b] p-8 text-white shadow-[0_24px_64px_rgba(109,27,123,0.22)] sm:p-10">
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 font-semibold leading-7 text-white/85">{description}</p>
        </div>
      </div>
    </section>
  );
}


