import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { createPageMetadata } from "@/lib/metadata";
import {
  coCurricularItems,
  curriculumCards,
  homeAdmissionsPreview,
  homeCampusMoments,
  homeHero,
  homeHighlights,
  homeLearningPathway,
  homeQuickLinks,
  imageSlots,
  learningIntro,
  parentTestimonials,
  schoolNews,
} from "@/data/home";

export const metadata = createPageMetadata({
  title: "Home | Vikram Sarabhai School",
  description: "Primary-focused learning in Bardoli with structured academics, values, and child-centered growth.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap">
        <PageHero content={homeHero} variant="vikram-ref" />
      </section>

      <section className="section-wrap grid gap-5 md:grid-cols-2">
        {homeQuickLinks.slice(0, 2).map((item, index) => (
          <Link key={item.href} href={item.href} className="block">
            <article className="ref-card flex min-h-32 items-center gap-5 p-5">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#14345d] text-3xl">
                {index === 0 ? "A+" : "Go"}
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#151515]">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#35557a]">{item.description}</p>
                <p className="mt-3 text-sm font-extrabold text-[#ffb26b]">Explore Activities</p>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <section className="section-wrap text-center">
        <SectionHeader
          align="center"
          variant="vikram-ref"
          eyebrow="Scientific Learning Vision"
          title="Guided by the Spirit of Dr. Vikram Sarabhai"
          description="The school culture blends curiosity, experiments, creativity, and confidence for real-world readiness."
        />
        <div className="orbit-grid relative mx-auto mt-10 max-w-4xl">
          <div className="mx-auto h-[360px] max-w-[360px] overflow-hidden rounded-full border-[12px] border-[#67d0ff]/40 shadow-[0_22px_54px_rgba(3,12,28,0.35)]">
            <Image src={imageSlots.learningSection} alt="Dr. Vikram Sarabhai inspirational portrait" width={540} height={540} className="h-full w-full object-cover bg-[#0d1c35]" />
          </div>
          <div className="mt-8 grid gap-4 md:absolute md:inset-0 md:mt-0 md:grid-cols-2">
            {homeHighlights.map((item, index) => (
              <div key={item.title} className={`md:flex ${index % 2 === 0 ? "md:items-start md:justify-start" : "md:items-end md:justify-end"}`}>
                <GlowCard {...item} theme="vikram-ref" variant="flat" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cream-band section-wrap py-16">
        <SectionHeader
          align="center"
          variant="vikram-ref"
          eyebrow="Learning Stages"
          title="Age-Appropriate Growth for Every Stage"
          description="Programs are designed around readiness, confidence, and steady foundational progress."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {curriculumCards.slice(0, 3).map((card, index) => (
            <article key={card.title} className="ref-card overflow-hidden p-4">
              <Image src={card.imageSrc} alt={card.imageAlt} width={640} height={420} className="aspect-[4/3] w-full rounded-[22px] object-cover" />
              <div className="p-3">
                <p className="text-xs font-extrabold text-[#ffb26b]">Stage 0{index + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold text-[#151515]">{card.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#35557a]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            variant="vikram-ref"
            eyebrow="Foundation Path"
            title="A Simple Journey from Comfort to Confidence"
            description="The school day builds small wins through routine, discovery, expression, and readiness."
          />
          <div className="mt-8">
            <Timeline items={homeLearningPathway} variant="vikram-ref" />
          </div>
        </div>
        <article className="overflow-hidden rounded-[34px] border border-[#8fc4ff]/20 bg-[#0f223f] p-5">
          <Image src={imageSlots.coCurricularSection} alt="Placeholder co-curricular learning" width={900} height={620} className="aspect-[4/3] w-full rounded-[28px] object-cover" />
          <div className="grid gap-3 pt-5 sm:grid-cols-2">
            {coCurricularItems.map((item) => (
              <div key={item.title} className="rounded-[22px] bg-white p-4">
                <h3 className="text-base font-extrabold text-[#151515]">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#35557a]">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="cream-band section-wrap py-16">
        <SectionHeader
          align="center"
          variant="vikram-ref"
          eyebrow="Parent Voices"
          title="What Families Look For in a School"
          description="Warmth, structure, and confidence-building are at the heart of the Vikram experience."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {parentTestimonials.map((item) => (
            <article key={item.quote} className="ref-card p-6">
              <p className="text-sm font-extrabold text-[#f36b2a]">5.0 out of 5</p>
              <blockquote className="mt-4 text-base font-extrabold leading-7 text-[#151515]">"{item.quote}"</blockquote>
              <p className="mt-5 text-sm font-bold text-[#35557a]">{item.name}</p>
              <p className="text-xs font-bold text-[#6d7e94]">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          align="center"
          variant="vikram-ref"
          eyebrow="Moments"
          title="Learning, Play, and Growth"
          description="Placeholder visuals show the final gallery rhythm until real school images are ready."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {homeCampusMoments.map((item, index) => (
            <article key={item.src} className={`${index === 0 ? "md:translate-y-8" : index === 2 ? "md:-translate-y-6" : ""} overflow-hidden rounded-[24px] border border-[#8fc4ff]/20 bg-[#0f223f] p-2 shadow-[0_16px_36px_rgba(3,12,28,0.28)]`}>
              <Image src={item.src} alt={item.alt} width={540} height={540} className="aspect-square w-full rounded-[20px] object-cover" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          align="center"
          variant="vikram-ref"
          eyebrow="School Updates"
          title="Read About School News and Educational Insights"
          description="Short content cards give the homepage the richer rhythm of the reference layout."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {schoolNews.map((item) => (
            <article key={item.title} className="ref-card overflow-hidden">
              <Image src={item.imageSrc} alt={`Placeholder ${item.category}`} width={640} height={420} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-extrabold text-[#6d7e94]">{item.category}</p>
                <h3 className="mt-2 text-lg font-extrabold leading-tight text-[#151515]">{item.title}</h3>
                <Link href="/activities" className="mt-4 inline-flex text-sm font-extrabold text-[#ffb26b]">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <article>
          <h2 className="text-4xl font-extrabold leading-[1.03] text-[#ffffff] sm:text-5xl">Contact us, we would love to hear from you.</h2>
          <p className="mt-4 max-w-lg text-sm font-semibold leading-7 text-[#ffffff]">
            Share your admission interest and the school team will guide you with availability, process, and visit details.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-bold text-[#ffffff]">
            <p>+91 97261 00148</p>
            <p>admissions@vikramsarabhaischool.in</p>
            <p>Bardoli, Surat district, Gujarat</p>
          </div>
        </article>
        <article className="ref-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {homeAdmissionsPreview.map((step) => (
              <div key={step.step} className="rounded-[20px] bg-[#fff1df] p-4">
                <p className="text-xs font-extrabold text-[#ffb26b]">{step.step}</p>
                <h3 className="mt-2 text-lg font-extrabold text-[#151515]">{step.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#35557a]">{step.description}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-5">Contact Now</Link>
        </article>
      </section>

      <section className="section-wrap">
        <CTASection
          variant="vikram-ref"
          title="Ready to Give Your Child the Best Start?"
          description="Plan a visit, explore the learning rhythm, and begin the admission conversation with Vikram Sarabhai School."
          primary={{ label: "Schedule a Visit", href: "/contact" }}
          secondary={{ label: "View Admissions", href: "/admissions" }}
        />
      </section>
    </div>
  );
}

