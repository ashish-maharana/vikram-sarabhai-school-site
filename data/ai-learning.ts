import { placeholderAssets } from "@/data/placeholders";
import type { FeatureItem, HeroContent, ProgramItem } from "@/lib/types";

// Content verification checklist:
// - Confirm exact digital lab facilities and tool stack.
// - Confirm age bands for each module before publishing detailed class mapping.

export const aiHero: HeroContent = {
  eyebrow: "Future Skills for Children",
  title: "Curious Digital Learning, Made Gentle",
  description:
    "Students are introduced to logic, creativity, and responsible technology use through guided, child-friendly modules.",
  imageSrc: placeholderAssets.technology,
  imageAlt: "Placeholder young learners exploring technology concepts",
  primaryCta: { label: "View Programs", href: "/academics" },
  secondaryCta: { label: "Admissions", href: "/admissions" },
};

export const aiPrograms: ProgramItem[] = [
  { title: "Thinking with Patterns", description: "Simple logic and sequencing activities for foundational computational thinking.", icon: "GitBranch" },
  { title: "Creative Digital Tasks", description: "Visual and storytelling exercises using classroom-safe tools.", icon: "Lightbulb" },
  { title: "Problem Solving Projects", description: "Small guided projects that build curiosity and solution mindset.", icon: "Puzzle" },
  { title: "Safe Technology Use", description: "Responsible device habits, online behavior, and digital awareness.", icon: "Shield" },
  { title: "Presentation Skills", description: "Children explain their project ideas in simple structured formats.", icon: "Presentation" },
  { title: "Future Learning Confidence", description: "Gradual readiness for advanced digital learning stages.", icon: "Rocket" },
];

export const howStudentsLearn: FeatureItem[] = [
  { title: "Teacher-Led Sessions", description: "Every concept is introduced with support and real-life examples.", icon: "BookOpenCheck" },
  { title: "Hands-On Exploration", description: "Children try, test, and improve ideas in activity-rich sessions.", icon: "Construction" },
  { title: "Peer Collaboration", description: "Group work encourages communication and shared problem-solving.", icon: "UsersRound" },
  { title: "Reflection and Growth", description: "Students review outcomes and celebrate progress.", icon: "RefreshCcwDot" },
];

export const tomorrowSkills = [
  "Curiosity",
  "Communication",
  "Creative Thinking",
  "Problem Solving",
  "Responsible Technology Use",
  "Teamwork",
  "Confidence",
  "Learning Agility",
];

export const showcaseCards: FeatureItem[] = [
  { title: "Classroom Showcases", description: "Children share project outcomes in age-friendly presentation formats.", icon: "GalleryHorizontalEnd" },
  { title: "Integrated Learning", description: "Digital tasks connected with language, EVS, and numeracy themes.", icon: "Orbit" },
  { title: "Future-Ready Mindset", description: "Students build confidence to explore new tools and ideas responsibly.", icon: "Sparkles" },
];
