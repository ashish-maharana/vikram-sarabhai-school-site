import { placeholderAssets } from "@/data/placeholders";
import type { HeroContent } from "@/lib/types";

// Content verification checklist:
// - Confirm official admission desk timings.
// - Confirm exact map pin used by school management.

export const contactHero: HeroContent = {
  eyebrow: "Contact Vikram Sarabhai School",
  title: "We Would Love to Hear from You",
  description:
    "Reach out for admissions guidance, campus visit details, and primary learning information.",
  imageSrc: placeholderAssets.campus,
  imageAlt: "Placeholder school campus contact visual",
  primaryCta: { label: "Call Admissions", href: "tel:+919726100148" },
  secondaryCta: { label: "Email Us", href: "mailto:admissions@vikramsarabhaischool.in" },
};

export const officeHours = [
  "Monday - Saturday: 8:00 AM - 3:30 PM",
  "Admissions Desk: 9:00 AM - 1:30 PM",
  "Sunday: Closed",
];
