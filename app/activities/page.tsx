import { ActivitiesGalleryTabs } from "@/components/activities-gallery-tabs";
import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { activitiesHero, activityPrograms, campusGalleryItems, lifeSkills, schoolTripsGalleryItems } from "@/data/activities";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Activities | Vikram Sarabhai School",
  description: "Explore sports, events, and child-development activities at Vikram Sarabhai School, Bardoli.",
  path: "/activities",
});

export default function ActivitiesPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap p-1"><PageHero content={activitiesHero} variant="vikram-ref" /></section>

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Activity Tracks" title="Programs that Build Character and Confidence" description="Co-curricular exposure is integrated into student growth." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{activityPrograms.map((item) => <ProgramCard key={item.title} {...item} variant="vikram-ref" />)}</div>
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[1fr_1fr]">
        <article className="soft-wave p-6">
          <SectionHeader variant="vikram-ref" eyebrow="Life Skills" title="Learning Beyond Textbooks" description="Activities strengthen social and emotional development." />
          <div className="mt-6 grid gap-4">{lifeSkills.map((item) => <GlowCard key={item.title} {...item} theme="vikram-ref" />)}</div>
        </article>
        <article className="glass-panel p-6">
          <h3 className="text-2xl font-semibold text-[#151515]">Event Highlights</h3>
          <div className="mt-5 space-y-3">
            {["Assembly participation and school routines", "Sports and movement-based engagement", "Cultural stage opportunities", "Recognition and celebration moments"].map((item) => (
              <p key={item} className="rounded-lg border border-[#0f6877]/12 bg-white p-3 text-sm font-semibold text-[#5d5a54]">{item}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Gallery" title="Campus and Trip Moments" description="Visual stories from events, activities, and student participation." />
        <div className="mt-8"><ActivitiesGalleryTabs campusItems={campusGalleryItems} schoolTripItems={schoolTripsGalleryItems} /></div>
      </section>

      <section className="section-wrap"><CTASection variant="vikram-ref" title="A School Life Full of Participation" description="Give your child a vibrant environment where activities build confidence and life skills." primary={{ label: "Explore Admissions", href: "/admissions" }} secondary={{ label: "Contact School", href: "/contact" }} /></section>
    </div>
  );
}



