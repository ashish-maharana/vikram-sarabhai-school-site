import { placeholderAssets } from "@/data/placeholders";
import type { FeatureItem, HeroContent, ProgramItem, TimelineItem } from "@/lib/types";

// Content verification checklist:
// - Confirm exact class range, board affiliation, and founding year.
// - Confirm facility list (transport, labs, timings) with school admin.

export const academicsHero: HeroContent = {
  eyebrow: "Primary Learning Journey",
  title: "Strong Foundations for Young Learners",
  description:
    "Our academics focus on concept clarity, communication confidence, and age-appropriate progression for primary students.",
  imageSrc: placeholderAssets.classroom,
  imageAlt: "Placeholder primary learners in a classroom setting",
  primaryCta: { label: "Admissions Open", href: "/admissions" },
  secondaryCta: { label: "Contact School", href: "/contact" },
};

export const academicPrograms: ProgramItem[] = [
  { title: "Foundational Literacy", description: "Reading, writing, and language expression through guided classroom practice.", icon: "BookMarked" },
  { title: "Numeracy & Logic", description: "Mathematics with stepwise understanding, patterns, and real examples.", icon: "Sigma" },
  { title: "Environmental Studies", description: "Concepts connected with surroundings, observation, and discussion.", icon: "Leaf" },
  { title: "Creative Expression", description: "Drawing, storytelling, and speaking for confidence and imagination.", icon: "Palette" },
  { title: "Digital Readiness", description: "Age-appropriate digital exposure and responsible technology habits.", icon: "MonitorCog" },
  { title: "Language Confidence", description: "Listening, speaking, and structured communication development.", icon: "Languages" },
];

export const pedagogy: FeatureItem[] = [
  { title: "Playful Practice", description: "Lessons use examples, stories, and short activities to keep concepts clear.", icon: "Blocks" },
  { title: "Teacher Guidance", description: "Children receive steady support, correction, and encouragement.", icon: "GraduationCap" },
  { title: "Small Wins", description: "Daily progress moments help young learners feel capable.", icon: "Sparkles" },
  { title: "Parent Connection", description: "Simple communication keeps families close to learning progress.", icon: "MessagesSquare" },
];

export const learningPathway: TimelineItem[] = [
  { year: "Stage 1", title: "Readiness", description: "Comfort in school routine, listening skills, and foundational habits." },
  { year: "Stage 2", title: "Core Skill Building", description: "Literacy and numeracy with strong concept basics." },
  { year: "Stage 3", title: "Application", description: "Using concepts in activities, speaking tasks, and collaborative work." },
  { year: "Stage 4", title: "Confidence", description: "Independent expression, curiosity, and future-learning mindset." },
];
