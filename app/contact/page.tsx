import { Mail, MapPin, Phone } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { contactHero, officeHours } from "@/data/contact";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact | Vikram Sarabhai School",
  description: "Contact Vikram Sarabhai School, Bardoli for admissions, school visits, and primary program information.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap p-1"><PageHero content={contactHero} variant="vikram-ref" /></section>

      <section className="section-wrap grid gap-5 md:grid-cols-3">
        <article className="glass-panel p-6"><MapPin className="h-7 w-7 text-[#e07a5f]" /><h2 className="mt-4 text-xl font-semibold text-[#151515]">Address</h2><p className="mt-2 font-medium leading-7 text-[#5d5a54]">{site.address}</p></article>
        <article className="glass-panel p-6"><Phone className="h-7 w-7 text-[#0f6877]" /><h2 className="mt-4 text-xl font-semibold text-[#151515]">Phone</h2>{site.phones.map((p) => <p key={p} className="mt-1 font-medium text-[#5d5a54]">{p}</p>)}</article>
        <article className="glass-panel p-6"><Mail className="h-7 w-7 text-[#ffd45a]" /><h2 className="mt-4 text-xl font-semibold text-[#151515]">Email</h2><p className="mt-2 font-medium text-[#5d5a54]">{site.email}</p></article>
      </section>

      <section className="section-wrap grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <article className="soft-wave p-6">
          <SectionHeader variant="vikram-ref" eyebrow="Inquiry Panel" title="Send Admission Inquiry" description="This form is for UI flow and can be connected to your backend lead workflow." />
          <form className="mt-8 grid gap-4" action="#">
            <label className="text-sm font-extrabold text-[#151515]">Parent Name<input className="mt-2 w-full rounded-xl border border-[#0f6877]/20 bg-white px-4 py-3 text-[#151515] outline-none ring-[#0f6877] focus:ring-2" type="text" /></label>
            <label className="text-sm font-extrabold text-[#151515]">Email<input className="mt-2 w-full rounded-xl border border-[#0f6877]/20 bg-white px-4 py-3 text-[#151515] outline-none ring-[#0f6877] focus:ring-2" type="email" /></label>
            <label className="text-sm font-extrabold text-[#151515]">Phone<input className="mt-2 w-full rounded-xl border border-[#0f6877]/20 bg-white px-4 py-3 text-[#151515] outline-none ring-[#0f6877] focus:ring-2" type="tel" /></label>
            <label className="text-sm font-extrabold text-[#151515]">Message<textarea className="mt-2 min-h-28 w-full rounded-xl border border-[#0f6877]/20 bg-white px-4 py-3 text-[#151515] outline-none ring-[#0f6877] focus:ring-2" /></label>
            <button type="button" className="btn-primary w-fit">Submit Inquiry</button>
          </form>
        </article>

        <div className="space-y-6">
          <article className="glass-panel overflow-hidden p-2">
            <iframe title="School location map" src="https://maps.google.com/maps?q=Bardoli%20Surat%20Gujarat&t=&z=12&ie=UTF8&iwloc=&output=embed" className="h-72 w-full rounded-xl border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </article>
          <article className="glass-panel p-6">
            <h2 className="text-2xl font-semibold text-[#151515]">Visit Timings</h2>
            <ul className="mt-4 space-y-2 font-medium text-[#5d5a54]">{officeHours.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="mt-4 text-sm font-medium text-[#5d5a54]">For admissions support, contact during desk hours.</p>
          </article>
        </div>
      </section>

      <section className="section-wrap"><CTASection variant="vikram-ref" title="Admissions Team Ready to Help" description="Connect with our school team for enrollment guidance and class details." primary={{ label: "Call Admissions", href: "tel:+919726100148" }} secondary={{ label: "View Admissions", href: "/admissions" }} /></section>
    </div>
  );
}



