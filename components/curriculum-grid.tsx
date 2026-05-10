import Image from "next/image";
import type { CurriculumCardItem } from "@/lib/types";

const skillTags: Record<string, string[]> = {
  "Computer Science": ["Logic", "Digital", "Problem Solving"],
  "Primary Education": ["Literacy", "Numeracy", "Foundation"],
  Science: ["Inquiry", "Experiment", "Discovery"],
  "Public Speaking": ["Confidence", "Expression", "Stage Skill"],
  Mathematics: ["Reasoning", "Concepts", "Application"],
  Languages: ["Reading", "Writing", "Communication"],
};

export function CurriculumGrid({ items }: { items: CurriculumCardItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="curriculum-card group overflow-hidden rounded-[1.5rem] border-2 border-white bg-white shadow-[0_18px_42px_rgba(21,17,43,0.08)] transition duration-300 hover:-translate-y-1"
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={420}
            height={280}
            className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#35557a]">{item.title}</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-[#ffffff]">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 opacity-90 transition group-hover:opacity-100">
              {(skillTags[item.title] ?? ["Future Ready", "Creative", "Focused"]).map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex -translate-y-1 rounded-full px-2.5 py-1 text-[11px] font-extrabold text-[#35557a] transition duration-300 group-hover:translate-y-0 ${
                    index % 3 === 0 ? "bg-[#ffd84d]" : index % 3 === 1 ? "bg-[#2ee881]" : "bg-[#22c7e8]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

