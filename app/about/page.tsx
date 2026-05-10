import { AboutPeopleTabs } from "@/components/about-people-tabs";
import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { aboutHero, coreValues, differentiators, facultyContent, managementContent, missionVision, philosophyTimeline } from "@/data/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About | Vikram Sarabhai School",
  description: "Discover the school vision, values, and foundational learning philosophy of Vikram Sarabhai School, Bardoli.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap p-1"><PageHero content={aboutHero} variant="vikram-ref" /></section>

      <section className="section-wrap grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="soft-wave p-7"><p className="sticker bg-[#ffd45a]">Mission</p><p className="mt-4 text-lg font-medium leading-8 text-[#ffffff]">{missionVision.mission}</p></article>
        <article className="soft-wave p-7"><p className="sticker bg-[#42c7b8] text-white">Vision</p><p className="mt-4 text-lg font-medium leading-8 text-[#ffffff]">{missionVision.vision}</p></article>
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeader variant="vikram-ref" eyebrow="School Philosophy" title="How We Shape Foundational Growth" description="A structured child-centered progression model for primary learners." />
          <div className="mt-7"><Timeline items={philosophyTimeline} variant="vikram-ref" /></div>
        </div>
        <article className="glass-panel p-6">
          <h3 className="text-2xl font-semibold text-[#ffffff]">Editorial Note</h3>
          <p className="mt-4 text-sm font-medium leading-7 text-[#ffffff]">The school identity presented here follows a safe factual baseline. Leadership names, establishment year, and specific institutional milestones should be verified and finalized by the school office before public launch.</p>
          <div className="mt-6 h-1 w-28 bg-[#ffd45a]" />
        </article>
      </section>

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Leadership and Faculty" title="People Who Guide the Journey" description={managementContent.quickIntro} />
      </section>
      <AboutPeopleTabs management={managementContent} faculty={facultyContent} />

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Core Values" title="Culture Built on Care and Clarity" description="The values that shape student behavior and school life." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{coreValues.map((value) => <GlowCard key={value.title} {...value} theme="vikram-ref" />)}</div>
      </section>

      <section className="section-wrap soft-wave p-7 sm:p-10">
        <SectionHeader variant="vikram-ref" eyebrow="What Makes Us Different" title="Focused, Balanced, and Child-Friendly" description="Parents value this balance in foundational schooling." />
        <div className="mt-7 divide-y divide-[#0f6877]/10 rounded-[1.1rem] bg-white/70 px-5">{differentiators.map((item) => <div key={item.title} className="py-5"><GlowCard {...item} variant="flat" theme="vikram-ref" /></div>)}</div>
      </section>

      <section className="section-wrap">
        <CTASection variant="vikram-ref" title="Experience Vikram Sarabhai School" description="Visit the campus and explore how foundational academics and child development come together." primary={{ label: "Plan a Visit", href: "/contact" }} secondary={{ label: "View Admissions", href: "/admissions" }} />
      </section>
    </div>
  );
}



