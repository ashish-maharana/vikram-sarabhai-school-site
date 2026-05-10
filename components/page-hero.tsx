import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/lib/types";

type HeroVariant = "default" | "vikram" | "vikram-ref";

export function PageHero({ content, variant = "default" }: { content: HeroContent; variant?: HeroVariant }) {
  if (variant === "vikram-ref") {
    return (
      <section className="relative overflow-hidden rounded-[34px] border border-[#e49a6b]/70 bg-[#fff1df] px-6 py-9 shadow-[0_24px_70px_rgba(49,33,19,0.1)] sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-3 rounded-[28px] border border-[#d97842]/35 bg-white/25" />
        <div className="relative grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="sticker bg-[#ffd45a] text-[#051228]">{content.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] text-[#151515] sm:text-7xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-[#4f5f74] sm:text-lg">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href={content.primaryCta.href}>
                {content.primaryCta.label}
              </Link>
              {content.secondaryCta ? (
                <Link className="btn-secondary" href={content.secondaryCta.href}>
                  {content.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
          {content.imageSrc ? (
            <div className="relative min-h-[300px]">
              <div className="absolute right-8 top-0 hidden h-24 w-24 rounded-full border-[18px] border-white bg-[#42c7b8] shadow-[0_14px_30px_rgba(49,33,19,0.12)] sm:block" />
              <div className="absolute bottom-4 left-3 z-[1] hidden h-28 w-28 rounded-[42%] border-[14px] border-white bg-[#ffd45a] shadow-[0_14px_30px_rgba(49,33,19,0.12)] md:block" />
              <div className="relative ml-auto w-full max-w-[560px] overflow-hidden rounded-[32px] border-[7px] border-[#ffd45a] bg-white shadow-[0_24px_58px_rgba(49,33,19,0.18)]">
                <Image
                  src={content.imageSrc}
                  alt={content.imageAlt ?? content.title}
                  width={820}
                  height={610}
                  priority
                  className="aspect-[1.18/1] w-full object-cover object-top"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  if (variant === "vikram") {
    return (
      <section className="soft-wave relative overflow-hidden bg-[#0f4c5c] p-6 text-white shadow-[0_24px_60px_rgba(15,76,92,0.2)] sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(200,155,60,0.24),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(224,122,95,0.18),transparent_42%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="sticker bg-[#c89b3c] text-[#1e2430]">{content.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.06] text-white sm:text-6xl">{content.title}</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/90 sm:text-lg">{content.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href={content.primaryCta.href}>{content.primaryCta.label}</Link>
              {content.secondaryCta ? <Link className="btn-secondary" href={content.secondaryCta.href}>{content.secondaryCta.label}</Link> : null}
            </div>
          </div>
          {content.imageSrc ? (
            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2rem_0.7rem_2rem_0.7rem] border-4 border-[#c89b3c]/70 bg-white shadow-[0_22px_56px_rgba(30,36,48,0.28)]">
                <Image src={content.imageSrc} alt={content.imageAlt ?? content.title} width={720} height={560} priority className="aspect-[5/4] w-full object-cover" />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="scallop-y relative overflow-hidden rounded-[2rem] bg-[#6d1b7b] p-6 text-white shadow-[0_24px_70px_rgba(109,27,123,0.22)] sm:p-10 lg:p-12">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0" />
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="sticker bg-[#ffd84d] text-[#35557a]">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/88 sm:text-lg">{content.description}</p>
        </div>
      </div>
    </section>
  );
}


