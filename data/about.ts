import { placeholderAssets } from "@/data/placeholders";
import type {
  AboutQuickNavItem,
  FacultyContent,
  FeatureItem,
  HeroContent,
  ManagementContent,
  TimelineItem,
} from "@/lib/types";

// Content verification checklist:
// - Confirm school leadership names/designations before production.
// - Confirm school establishment year and official milestone timeline.

export const aboutHero: HeroContent = {
  eyebrow: "About Vikram Sarabhai School",
  title: "A Warm Start for Curious Children",
  description:
    "We focus on foundational education, values, and confident growth through a caring and structured school environment.",
  imageSrc: placeholderAssets.classroom,
  imageAlt: "Placeholder students in a warm school setting",
  primaryCta: { label: "View Academics", href: "/academics" },
  secondaryCta: { label: "Admissions", href: "/admissions" },
};

export const missionVision = {
  mission: "To nurture foundational literacy, numeracy, values, and confidence in every child through guided and joyful learning.",
  vision: "To develop responsible young learners prepared for future academic stages and life opportunities.",
};

export const coreValues: FeatureItem[] = [
  { title: "Respect", description: "We build a school culture rooted in empathy, kindness, and responsibility.", icon: "Handshake" },
  { title: "Discipline", description: "Daily routines and positive habits support steady academic and personal growth.", icon: "ShieldCheck" },
  { title: "Curiosity", description: "Children are encouraged to ask, observe, and discover.", icon: "Lightbulb" },
  { title: "Confidence", description: "Every learner gets opportunities to speak, participate, and lead.", icon: "Megaphone" },
];

export const differentiators: FeatureItem[] = [
  { title: "Primary-Focused Attention", description: "Early learning years receive structured, child-friendly teaching support.", icon: "School" },
  { title: "Balanced Development", description: "Academics, values, activities, and communication grow together.", icon: "Scale" },
  { title: "Community Connection", description: "Families and school work together for student progress.", icon: "Users" },
];

export const philosophyTimeline: TimelineItem[] = [
  { year: "Step 1", title: "Belonging", description: "Children feel safe, included, and ready to learn." },
  { year: "Step 2", title: "Foundation", description: "Strong literacy, numeracy, and classroom behavior habits." },
  { year: "Step 3", title: "Expression", description: "Speaking, participation, and teamwork in daily learning." },
  { year: "Step 4", title: "Readiness", description: "Prepared for future classes with confidence and values." },
];

export const aboutQuickNav: AboutQuickNavItem[] = [
  { label: "Management", href: "#management" },
  { label: "Faculty", href: "#faculty" },
];

export const managementContent: ManagementContent = {
  quickIntro: "Leadership at Vikram Sarabhai School is committed to foundational excellence and child-centered growth.",
  chairmanMessage: {
    title: "Message from School Leadership",
    intro: "Our focus is to create a safe and inspiring school where every child learns with clarity, confidence, and purpose.",
    quote: "Education is not just preparation for life; education is life itself.",
    quoteSource: "John Dewey",
    paragraphs: [
      "We believe strong early learning shapes future success.",
      "Along with academics, we value discipline, communication, and emotional well-being in everyday school life.",
      "We welcome parents to partner with us in this meaningful learning journey.",
    ],
  },
  leaders: [
    {
      name: "School Leadership Team",
      role: "Management",
      imageSrc: placeholderAssets.campus,
      imageAlt: "Placeholder school management representative",
      bio: "Guides school vision, culture, and academic direction for foundational student growth.",
      tags: ["Vision", "Governance"],
    },
    {
      name: "Principal (To Be Confirmed)",
      role: "Principal",
      imageSrc: placeholderAssets.reading,
      imageAlt: "Placeholder principal profile",
      bio: "Leads daily academic planning and teacher support for primary learning outcomes.",
      tags: ["Academic Leadership"],
    },
  ],
};

export const facultyContent: FacultyContent = {
  quickIntro: "Our faculty team supports children through patient instruction, activity-based methods, and consistent guidance.",
  members: [
    {
      name: "Faculty Team",
      role: "Primary Educators",
      imageSrc: placeholderAssets.classroom,
      imageAlt: "Placeholder faculty profile representative",
      bio: "Dedicated teachers who build foundational skills with care and consistency.",
      tags: ["Literacy", "Numeracy", "Guidance"],
    },
    {
      name: "Activity Mentors",
      role: "Co-Curricular Support",
      imageSrc: placeholderAssets.activity,
      imageAlt: "Placeholder activity mentor representative",
      bio: "Supports student confidence through arts, events, and participation-based learning.",
      tags: ["Activities", "Confidence"],
    },
  ],
};
