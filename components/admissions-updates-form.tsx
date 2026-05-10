import type { AdmissionsUpdatesContent } from "@/lib/types";

export function AdmissionsUpdatesForm({ content }: { content: AdmissionsUpdatesContent }) {
  return (
    <section className="scallop-y rounded-[2rem] bg-[#ff6b35] p-7 text-white shadow-[0_24px_64px_rgba(255,107,53,0.22)] sm:p-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{content.title}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-white/85">{content.description}</p>

        <form action="#" className="mt-7 space-y-3" aria-label="Admissions and updates subscription form">
          {content.fields.map((field) => (
            <label key={field.name} className="block">
              <span className="sr-only">{field.label}</span>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border-2 border-white/40 bg-white/95 px-4 py-3 text-sm font-bold text-[#15112b] outline-none transition focus:border-white focus:ring-2 focus:ring-white/70"
              />
            </label>
          ))}
          <label className="block">
            <span className="sr-only">{content.message.label}</span>
            <textarea
              name={content.message.name}
              rows={4}
              placeholder={content.message.placeholder}
              className="w-full rounded-2xl border-2 border-white/40 bg-white/95 px-4 py-3 text-sm font-bold text-[#15112b] outline-none transition focus:border-white focus:ring-2 focus:ring-white/70"
            />
          </label>
          <button
            type="submit"
            className="btn-primary !bg-white !px-5 !py-3 !text-[#15112b] hover:!bg-[#ffd84d] focus-visible:!ring-white focus-visible:!ring-offset-transparent"
          >
            {content.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

