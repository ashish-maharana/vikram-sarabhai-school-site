export type NavItem = {
  label: string;
  href: string;
};

export type BrandTheme = {
  palette: {
    bg: string;
    ink: string;
    primary: string;
    accent: string;
    support: string;
    highlight: string;
  };
  motif: "scholastic-frame" | "default";
  buttonStyle: "pill" | "arched";
  sectionSpacing: "airy" | "compact";
};

export type SiteConfig = {
  name: string;
  shortName: string;
  location: string;
  email: string;
  phones: string[];
  address: string;
  brand?: BrandTheme;
};

export type SectionLayoutVariant = "split" | "band" | "mosaic" | "rail";

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProgramItem = FeatureItem & {
  tag?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type LegacyStatItem = {
  label: string;
  value: string;
};

export type CurriculumCardItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type CoCurricularItem = {
  title: string;
  description: string;
};

export type AdmissionsFormField = {
  label: string;
  name: string;
  type: "text" | "email";
  placeholder: string;
};

export type AdmissionsUpdatesContent = {
  title: string;
  description: string;
  fields: AdmissionsFormField[];
  message: { label: string; name: string; placeholder: string };
  submitLabel: string;
};

export type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export type PersonProfile = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bio: string;
  tags?: string[];
};

export type ManagementMessage = {
  title: string;
  intro: string;
  quote: string;
  quoteSource: string;
  paragraphs: string[];
};

export type ManagementContent = {
  quickIntro: string;
  chairmanMessage: ManagementMessage;
  leaders: PersonProfile[];
};

export type FacultyContent = {
  quickIntro: string;
  members: PersonProfile[];
};

export type AboutQuickNavItem = {
  label: string;
  href: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
};

