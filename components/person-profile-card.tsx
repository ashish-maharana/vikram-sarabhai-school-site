import Image from "next/image";
import type { PersonProfile } from "@/lib/types";

type PersonProfileCardProps = {
  person: PersonProfile;
  compact?: boolean;
  showImage?: boolean;
  imageClassName?: string;
};

export function PersonProfileCard({ person, compact = false, showImage = true, imageClassName }: PersonProfileCardProps) {
  const defaultImageClass = compact ? "aspect-[4/3] object-cover" : "aspect-square object-cover";

  return (
    <article className="glass-panel group h-full overflow-hidden p-5 sm:p-6">
      {showImage ? (
        <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-white bg-[#fff3dc]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,216,77,0.42),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(34,199,232,0.22),transparent_40%)]" />
          <Image
            src={person.imageSrc}
            alt={person.imageAlt}
            width={420}
            height={420}
            className={`relative z-[1] w-full ${imageClassName ?? defaultImageClass}`}
          />
        </div>
      ) : null}

      <h3 className={`${showImage ? "mt-5" : "mt-1"} text-2xl font-semibold leading-tight text-[#15112b]`}>{person.name}</h3>
      <p className="mt-1 text-sm font-extrabold text-[#6d1b7b]">{person.role}</p>
      <p className="mt-3 text-sm font-medium leading-7 text-[#5b5570]">{person.bio}</p>

      {person.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {person.tags.map((tag) => (
            <span
              key={tag}
              className="sticker bg-[#ffd84d]"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

