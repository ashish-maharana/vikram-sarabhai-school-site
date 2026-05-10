import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { academicPrograms, academicsHero, learningPathway, pedagogy } from "@/data/academics";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Academics | Vikram Sarabhai School",
  description: "Explore the primary-stage academic framework and learning pathway at Vikram Sarabhai School, Bardoli.",
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap p-1"><PageHero content={academicsHero} variant="vikram-ref" /></section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeader variant="vikram-ref" eyebrow="Academic Map" title="Stage-Based Primary Progression" description="Programs are structured to build clarity, confidence, and readiness." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{academicPrograms.map((program) => <ProgramCard key={program.title} {...program} variant="vikram-ref" />)}</div>
        </div>
        <article className="soft-wave p-6">
          <h3 className="text-2xl font-semibold text-[#ffffff]">Outcomes Matrix</h3>
          <div className="mt-5 space-y-3">
            {["Reading confidence and comprehension", "Numeracy with concept application", "Classroom communication and participation", "Routine, discipline, and responsibility"].map((item) => (
              <p key={item} className="rounded-lg border border-[#0f6877]/12 bg-white p-3 text-sm font-semibold text-[#000000]">{item}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Teaching Practice" title="Pedagogy Designed for Lasting Understanding" description="Concepts are reinforced with activities, guided practice, and feedback." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">{pedagogy.map((item) => <GlowCard key={item.title} {...item} theme="vikram-ref" />)}</div>
      </section>

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Progression Rail" title="From Readiness to Confidence" description="A clear classroom growth path for primary learners." />
        <div className="mt-8"><Timeline items={learningPathway} variant="vikram-ref" /></div>
      </section>

      <section className="section-wrap"><CTASection variant="vikram-ref" title="Build Strong Primary Foundations" description="Join a school experience that values foundational clarity and child confidence." primary={{ label: "Start Admissions", href: "/admissions" }} secondary={{ label: "Talk to School", href: "/contact" }} /></section>
    </div>
  );
}



