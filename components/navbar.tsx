"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { placeholderAssets } from "@/data/placeholders";
import { navigation, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f36b2a]/10 bg-[#fffaf2]/94 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-[20px] bg-white shadow-[0_10px_24px_rgba(49,33,19,0.10)]">
            <Image src={placeholderAssets.logo} alt={`${site.name} logo placeholder`} width={58} height={58} className="h-full w-full object-cover" priority />
          </span>
          <span className="hidden max-w-[16rem] text-lg font-extrabold leading-tight text-[#151515] sm:block lg:max-w-none lg:text-xl">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[18px] px-5 py-3 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6877] ${
                  active ? "bg-[#0f6877] text-white" : "text-[#444b5a] hover:bg-[#fff1df] hover:text-[#151515]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-[#f36b2a]/20 bg-white text-[#151515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6877] lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#f36b2a]/10 bg-[#fffaf2] px-4 py-3 lg:hidden">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-[16px] px-3 py-2 text-sm font-extrabold ${
                      active ? "bg-[#0f6877] text-white" : "text-[#444b5a] hover:bg-[#fff1df]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
