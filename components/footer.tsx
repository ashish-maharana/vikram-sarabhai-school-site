import Image from "next/image";
import Link from "next/link";
import { placeholderAssets } from "@/data/placeholders";
import { footerLinks, site, socialLinks } from "@/data/site";

type SocialPlatform = (typeof socialLinks)[number]["platform"];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const className = "h-4 w-4";
  if (platform === "Facebook") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M13.5 21v-7.7h2.6l.4-3h-3V8.4c0-.86.24-1.45 1.48-1.45h1.58V4.26A21.1 21.1 0 0 0 14.25 4c-2.29 0-3.86 1.4-3.86 3.96v2.21H7.8v3h2.59V21h3.11Z" /></svg>;
  }
  if (platform === "Instagram") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.2" /><circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M21.6 7.2a3 3 0 0 0-2.1-2.12C17.64 4.58 12 4.58 12 4.58s-5.64 0-7.5.5A3 3 0 0 0 2.4 7.2 31.3 31.3 0 0 0 1.9 12a31.3 31.3 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.12c1.86.5 7.5.5 7.5.5s5.64 0 7.5-.5a3 3 0 0 0 2.1-2.12 31.3 31.3 0 0 0 .5-4.8 31.3 31.3 0 0 0-.5-4.8ZM10 15.42V8.58L15.8 12 10 15.42Z" /></svg>;
}

export function Footer() {
  return (
    <footer className="mt-20 bg-[#fff1df]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <section>
          <div className="flex items-center gap-3">
            <Image src={placeholderAssets.logo} alt={`${site.name} logo placeholder`} width={54} height={54} className="rounded-2xl bg-white" />
            <h2 className="text-xl font-extrabold leading-tight text-[#151515]">{site.name}</h2>
          </div>
          <p className="mt-4 text-sm font-semibold leading-7 text-[#5d5a54]">{site.address}</p>
          <p className="mt-2 text-sm font-semibold text-[#5d5a54]">Email: {site.email}</p>
          <div className="mt-2 text-sm font-semibold text-[#5d5a54]">{site.phones.map((phone) => <p key={phone}>{phone}</p>)}</div>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((item) => (
              <a key={item.platform} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5d5a54] shadow-[0_8px_18px_rgba(49,33,19,0.08)] transition hover:bg-[#0f6877] hover:text-white">
                <SocialIcon platform={item.platform} />
              </a>
            ))}
          </div>
        </section>

        <section>
          <h3 className="sticker bg-[#ffd45a]">Quick Links</h3>
          <ul className="mt-4 space-y-2">{footerLinks.quick.map((item) => <li key={item.href}><Link className="text-sm font-bold text-[#5d5a54] hover:text-[#0f6877]" href={item.href}>{item.label}</Link></li>)}</ul>
        </section>

        <section>
          <h3 className="sticker bg-[#42c7b8] text-white">Admissions</h3>
          <ul className="mt-4 space-y-2">{footerLinks.admissions.map((item) => <li key={item.href}><Link className="text-sm font-bold text-[#5d5a54] hover:text-[#0f6877]" href={item.href}>{item.label}</Link></li>)}</ul>
        </section>

        <section className="rounded-[28px] bg-[#0f6877] p-6 text-white shadow-[0_18px_44px_rgba(15,104,119,0.18)]">
          <h3 className="text-2xl font-extrabold text-white">Admissions Open</h3>
          <p className="mt-3 text-sm font-semibold leading-7 text-white/88">Begin your child's primary learning journey at Vikram Sarabhai School, Bardoli.</p>
          <Link href="/admissions" className="btn-primary mt-4 !px-4 !py-2">Apply Now</Link>
        </section>
      </div>
      <div className="border-t border-[#f36b2a]/10 py-4 text-center text-xs font-bold text-[#5d5a54]">© {new Date().getFullYear()} {site.shortName}. All rights reserved.</div>
    </footer>
  );
}
