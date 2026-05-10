import { placeholderAssets } from "@/data/placeholders";
import type { FeatureItem, GalleryItem, HeroContent, ProgramItem } from "@/lib/types";

// Content verification checklist:
// - Confirm annual event list and inter-school participation details.
// - Confirm sports infrastructure details before explicit claims.

export const activitiesHero: HeroContent = {
  eyebrow: "Activities and Student Life",
  title: "Play, Perform, Grow Together",
  description:
    "From sports and cultural events to collaborative activities, students develop confidence, discipline, and joy in learning.",
  imageSrc: placeholderAssets.activity,
  imageAlt: "Placeholder students in activity and sports moments",
  primaryCta: { label: "Explore Admissions", href: "/admissions" },
  secondaryCta: { label: "Contact School", href: "/contact" },
};

export const activityPrograms: ProgramItem[] = [
  { title: "Sports", description: "Physical fitness, teamwork, and discipline through regular sports participation.", icon: "Trophy" },
  { title: "Cultural Events", description: "Celebrations and stage opportunities that build expression and confidence.", icon: "CalendarCheck2" },
  { title: "Creative Arts", description: "Drawing, music, and craft activities that support imagination.", icon: "Palette" },
  { title: "Wellness Activities", description: "Habits that support mindfulness, balance, and positive routines.", icon: "Leaf" },
];

export const lifeSkills: FeatureItem[] = [
  { title: "Teamwork", description: "Children learn to collaborate, listen, and support peers.", icon: "UsersRound" },
  { title: "Responsibility", description: "Activity routines reinforce accountability and discipline.", icon: "ClipboardCheck" },
  { title: "Communication", description: "Event participation strengthens speaking confidence.", icon: "MessagesSquare" },
  { title: "Resilience", description: "Students build confidence by learning from practice and effort.", icon: "Mountain" },
];

export const campusGalleryItems: GalleryItem[] = [
  { src: placeholderAssets.gallery[0], alt: "Placeholder students in action", title: "Classroom Engagement" },
  { src: placeholderAssets.gallery[1], alt: "Placeholder sports practice", title: "Sports Time" },
  { src: placeholderAssets.gallery[2], alt: "Placeholder school discipline", title: "School Discipline" },
  { src: placeholderAssets.gallery[3], alt: "Placeholder assembly activity", title: "Assembly Moments" },
  { src: placeholderAssets.gallery[4], alt: "Placeholder recognition ceremony", title: "Recognition" },
  { src: placeholderAssets.gallery[5], alt: "Placeholder joyful campus", title: "Joyful Campus" },
];

export const schoolTripsGalleryItems: GalleryItem[] = [
  { src: placeholderAssets.news[0], alt: "Placeholder exploration activity", title: "Exploration" },
  { src: placeholderAssets.news[1], alt: "Placeholder interactive learning", title: "Interactive Learning" },
  { src: placeholderAssets.news[2], alt: "Placeholder physical challenge", title: "Physical Challenge" },
  { src: placeholderAssets.gallery[2], alt: "Placeholder shared moments", title: "Shared Moments" },
  { src: placeholderAssets.gallery[3], alt: "Placeholder refresh moment", title: "Refresh and Recharge" },
  { src: placeholderAssets.gallery[4], alt: "Placeholder trip memories", title: "Memorable Trips" },
];
