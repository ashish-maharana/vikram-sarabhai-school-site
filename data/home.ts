import type {
  AdmissionsUpdatesContent,
  CoCurricularItem,
  CurriculumCardItem,
  FeatureItem,
  GalleryItem,
  HeroContent,
  LegacyStatItem,
  TimelineItem,
} from "@/lib/types";
import { placeholderAssets } from "@/data/placeholders";

// Content verification checklist:
// - Verify exact enrollment count, staff count, and established year.
// - Confirm final transport and facility statements with school office.
// - Replace placeholder contacts with official admissions details.

export const homeHero: HeroContent = {
  eyebrow: "Inspired by Dr. Vikram Sarabhai",
  title: "Scientific Thinking for Every Young Learner",
  description:
    "A child-friendly school environment where foundational academics, values, confidence, and future skills grow together with curiosity-led learning.",
  imageSrc: "https://www.nrsc.gov.in/nrscnew/assets/img/leaders/VikramSarabhai_PNG.png",
  imageAlt: "Dr. Vikram Sarabhai portrait",
  primaryCta: { label: "Admissions Open", href: "/admissions" },
  secondaryCta: { label: "Visit School", href: "/contact" },
};

export const imageSlots = {
  learningSection: "https://www.nrsc.gov.in/nrscnew/assets/img/leaders/VikramSarabhai_PNG.png",
  principalSection: placeholderAssets.campus,
  coCurricularSection: placeholderAssets.activity,
  curriculum: {
    computerScience: placeholderAssets.technology,
    primaryEducation: placeholderAssets.classroom,
    science: placeholderAssets.campus,
    publicSpeaking: placeholderAssets.reading,
    mathematics: placeholderAssets.art,
    languages: placeholderAssets.reading,
  },
} as const;

export const learningIntro = {
  title: "Learning Foundation with Care and Clarity",
  paragraphs: [
    "At Vikram Sarabhai School, we focus on strong primary learning with daily routines that build discipline, curiosity, and confidence.",
    "Our classrooms balance foundational academics with communication, activities, and values so each child grows steadily.",
  ],
  link: { label: "Know Our School", href: "/about" },
};

export const schoolAtAGlance = "Vikram Sarabhai School at a Glance";

export const legacyStats: LegacyStatItem[] = [
  { value: "Primary", label: "School Profile" },
  { value: "Co-Ed", label: "Learning Environment" },
  { value: "Bardoli", label: "School Region" },
  { value: "Focused", label: "Foundational Growth" },
];

export const homeHighlights: FeatureItem[] = [
  { title: "Foundational Academics", description: "Structured literacy and numeracy support for strong early learning.", icon: "BookMarked" },
  { title: "Values and Discipline", description: "Respect, routine, and responsible behavior as part of daily school culture.", icon: "ShieldCheck" },
  { title: "Confidence Building", description: "Speaking and participation opportunities to nurture expression and self-belief.", icon: "Megaphone" },
  { title: "Future Readiness", description: "Age-appropriate digital awareness and problem-solving habits.", icon: "Rocket" },
];

export const homeLearningPathway: TimelineItem[] = [
  { year: "Step 1", title: "Read, Write, Count", description: "Children build foundational classroom and communication skills." },
  { year: "Step 2", title: "Explore and Ask", description: "Activities, stories, and guided discovery deepen understanding." },
  { year: "Step 3", title: "Apply and Present", description: "Students use concepts in tasks, teamwork, and stage moments." },
  { year: "Step 4", title: "Grow with Confidence", description: "Learners become self-driven, responsible, and ready for next stages." },
];

export const homeCampusMoments: GalleryItem[] = [
  { src: placeholderAssets.gallery[0], alt: "Placeholder classroom activity", title: "Active Learning" },
  { src: placeholderAssets.gallery[1], alt: "Placeholder group activity", title: "Sports and Team Spirit" },
  { src: placeholderAssets.gallery[2], alt: "Placeholder joyful classroom", title: "Joyful Campus Life" },
  { src: placeholderAssets.gallery[3], alt: "Placeholder recognition moment", title: "Celebrating Effort" },
];

export const parentTestimonials = [
  {
    quote: "The school keeps learning warm, structured, and confidence-building for children.",
    name: "Parent Voice",
    role: "Primary Section",
  },
  {
    quote: "Daily routines, activities, and teacher guidance help children enjoy school.",
    name: "Parent Voice",
    role: "Bardoli",
  },
  {
    quote: "We value the balanced focus on academics, discipline, and expression.",
    name: "Parent Voice",
    role: "Admissions Inquiry",
  },
];

export const schoolNews = [
  {
    title: "Teaching responsibility through daily classroom habits",
    category: "Activities",
    imageSrc: placeholderAssets.news[0],
  },
  {
    title: "Building confidence with reading and speaking practice",
    category: "Academics",
    imageSrc: placeholderAssets.news[1],
  },
  {
    title: "Activity moments that help young learners participate",
    category: "Student Life",
    imageSrc: placeholderAssets.news[2],
  },
];

export const homeAdmissionsPreview = [
  { step: "01", title: "Connect", description: "Call or visit to know class availability and admission details." },
  { step: "02", title: "Interact", description: "Meet the school team and understand the child learning approach." },
  { step: "03", title: "Enroll", description: "Complete documentation and admission formalities with guidance." },
];

export const homeQuickLinks = [
  { title: "Academics", description: "Explore foundational learning pathways.", icon: "School", href: "/academics" },
  { title: "Activities", description: "See student life, events, and growth opportunities.", icon: "Trophy", href: "/activities" },
  { title: "AI Learning", description: "Discover age-appropriate future-skills exposure.", icon: "BotMessageSquare", href: "/ai-learning" },
  { title: "Admissions", description: "Review process, documents, and FAQs.", icon: "ClipboardCheck", href: "/admissions" },
];

export const principalSection = {
  quote: "Every child deserves a school journey that builds knowledge, character, confidence, and hope for the future.",
  author: "School Leadership Team - Vikram Sarabhai School",
};

export const curriculumOverview = {
  title: "Primary Curriculum Overview",
  description: "A structured academic path designed for foundational clarity, communication, and confident progression.",
};

export const curriculumCards: CurriculumCardItem[] = [
  { title: "Language Foundations", description: "Reading, writing, and expression through child-friendly methods.", imageSrc: imageSlots.curriculum.languages, imageAlt: "Language development classroom" },
  { title: "Mathematics", description: "Numeracy and logic with concept-based teaching.", imageSrc: imageSlots.curriculum.mathematics, imageAlt: "Mathematics learning" },
  { title: "Environmental Studies", description: "Understanding the world through observation and discussion.", imageSrc: imageSlots.curriculum.science, imageAlt: "Environmental studies learning" },
  { title: "Communication", description: "Speaking confidence through daily interactions and activities.", imageSrc: imageSlots.curriculum.publicSpeaking, imageAlt: "Communication development" },
  { title: "Creative Learning", description: "Arts and expression for imagination and confidence.", imageSrc: imageSlots.curriculum.primaryEducation, imageAlt: "Creative classroom work" },
  { title: "Digital Readiness", description: "Basic technology familiarity and responsible use.", imageSrc: imageSlots.curriculum.computerScience, imageAlt: "Digital learning exposure" },
];

export const coCurricular = {
  title: "Activities and Exposure",
  description: "Student activities support physical wellness, creativity, teamwork, and life skills.",
};

export const coCurricularItems: CoCurricularItem[] = [
  { title: "Sports and Movement", description: "Regular physical activities for fitness, discipline, and teamwork." },
  { title: "Cultural Participation", description: "Events and stage opportunities to build confidence and expression." },
  { title: "Creative Arts", description: "Drawing, music, and performance for imagination and self-expression." },
  { title: "Value-Based Activities", description: "Collaborative tasks that encourage empathy, responsibility, and respect." },
];

export const admissionsUpdatesCta: AdmissionsUpdatesContent = {
  title: "Need Admissions Updates?",
  description: "Share details and we will contact you with class availability and admission process updates.",
  fields: [
    { label: "Parent Name", name: "parent_name", type: "text", placeholder: "Parent Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Email Address" },
    { label: "Phone", name: "phone", type: "text", placeholder: "Phone Number" },
  ],
  message: { label: "Message", name: "message", placeholder: "Inquiry for class admission" },
  submitLabel: "Submit",
};

