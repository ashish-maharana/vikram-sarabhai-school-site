import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { aiHero, aiPrograms, howStudentsLearn, showcaseCards, tomorrowSkills } from "@/data/ai-learning";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AI Learning | Vikram Sarabhai School",
  description: "Age-appropriate digital and AI readiness modules for primary learners at Vikram Sarabhai School.",
  path: "/ai-learning",
});

export default function AiLearningPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap p-1"><PageHero content={aiHero} variant="vikram-ref" /></section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionHeader variant="vikram-ref" eyebrow="Program Modules" title="Future Skills for Young Learners" description="Child-friendly modules that introduce structured digital thinking." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{aiPrograms.map((item) => <ProgramCard key={item.title} {...item} variant="vikram-ref" />)}</div>
        </div>
        <article className="glass-panel p-6">
          <h3 className="text-2xl font-semibold text-[#151515]">Skills Built</h3>
          <div className="mt-4 flex flex-wrap gap-2">{tomorrowSkills.map((skill, i) => <span key={skill} className={`sticker px-3 py-1.5 text-sm ${i % 2 === 0 ? "bg-[#ffd45a]" : "bg-[#42c7b8] text-white"}`}>{skill}</span>)}</div>
        </article>
      </section>

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="How Students Learn" title="Guided, Practical, and Safe" description="Every module is taught with teacher support and classroom relevance." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">{howStudentsLearn.map((item) => <GlowCard key={item.title} {...item} theme="vikram-ref" />)}</div>
      </section>

      <section className="section-wrap soft-wave p-7 sm:p-10">
        <SectionHeader variant="vikram-ref" eyebrow="Innovation Showcase" title="Small Projects, Big Confidence" description="Students present ideas, refine outcomes, and build communication habits." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">{showcaseCards.map((item) => <GlowCard key={item.title} {...item} theme="vikram-ref" />)}</div>
      </section>

      <section className="section-wrap"><CTASection variant="vikram-ref" title="Future Learning Starts Early" description="Introduce your child to structured digital readiness with confidence and care." primary={{ label: "Apply for Admission", href: "/admissions" }} secondary={{ label: "Speak to School", href: "/contact" }} /></section>
    </div>
  );
}



