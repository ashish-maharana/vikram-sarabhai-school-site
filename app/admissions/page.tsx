import { CTASection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { admissionFaqs, admissionsHero, documents, eligibility, parentReasons, processSteps } from "@/data/admissions";

export const metadata = createPageMetadata({
  title: "Admissions | Vikram Sarabhai School",
  description: "Admissions process, required documents, and FAQs for Vikram Sarabhai School, Bardoli.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap p-1"><PageHero content={admissionsHero} variant="vikram-ref" /></section>

      <section className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Why Parents Choose Us" title="A Supportive Start for Primary Learners" description="Families value our structured foundational learning and caring environment." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">{parentReasons.map((item) => <GlowCard key={item.title} {...item} theme="vikram-ref" />)}</div>
      </section>

      <section id="process" className="section-wrap soft-wave p-7 sm:p-10">
        <SectionHeader variant="vikram-ref" eyebrow="Admissions Process" title="Four Clear Enrollment Steps" description="Transparent, parent-friendly guidance from inquiry to confirmation." />
        <ol className="mt-8 grid gap-5 md:grid-cols-2">{processSteps.map((step) => <li key={step.step} className="play-card"><span className="sticker bg-[#ffd45a]">{step.step}</span><h3 className="mt-4 text-xl font-semibold text-[#ffffff]">{step.title}</h3><p className="mt-3 font-medium leading-7 text-[#ffffff]">{step.description}</p></li>)}</ol>
      </section>

      <section className="section-wrap grid gap-6 md:grid-cols-2">
        <article className="glass-panel p-6"><h2 className="text-3xl font-semibold text-[#ffffff]">Eligibility</h2><ul className="mt-5 space-y-3 font-medium text-[#000000]">{eligibility.map((item) => <li key={item} className="rounded-xl bg-[#fff1df] px-4 py-3">{item}</li>)}</ul></article>
        <article id="documents" className="glass-panel p-6"><h2 className="text-3xl font-semibold text-[#ffffff]">Required Documents</h2><ul className="mt-5 space-y-3 font-medium text-[#000000]">{documents.map((item) => <li key={item} className="rounded-xl bg-[#fff1df] px-4 py-3">{item}</li>)}</ul></article>
      </section>

      <section id="faq" className="section-wrap">
        <SectionHeader variant="vikram-ref" eyebrow="Admissions FAQ" title="Common Parent Questions" description="Quick answers to support your admission decision." />
        <div className="mt-8"><FaqAccordion items={admissionFaqs} /></div>
      </section>

      <section className="section-wrap"><CTASection variant="vikram-ref" title="Ready to Begin Admission?" description="Contact our admissions desk for class availability and guidance." primary={{ label: "Start Inquiry", href: "/contact" }} secondary={{ label: "Call +91 97261 00148", href: "tel:+919726100148" }} /></section>
    </div>
  );
}



