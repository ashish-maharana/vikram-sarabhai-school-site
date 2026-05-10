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
    <header className="sticky top-0 z-50 border-b border-[#8fc4ff]/20 bg-[#081729]/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-md bg-white shadow-[0_8px_24px_rgba(109,27,123,0.14)]">
            <Image src={placeholderAssets.logo} alt={`${site.name} logo placeholder`} width={80} height={80} className="h-full w-full object-cover" priority />
          </span>
          <span className="hidden max-w-[18rem] text-xl font-extrabold leading-tight text-[#ffb26b] sm:block lg:max-w-none lg:text-2xl">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[18px] px-5 py-3 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b8cff] ${
                  active ? "bg-[#1b8cff] text-white" : "text-[#bed5ef] hover:bg-[#152b4d] hover:text-white"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-[#8fc4ff]/20 bg-[#112746] text-[#f0f7ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b8cff] lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#8fc4ff]/15 bg-[#081729] px-4 py-3 lg:hidden">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-[16px] px-3 py-2 text-sm font-extrabold ${
                      active ? "bg-[#1b8cff] text-white" : "text-[#bed5ef] hover:bg-[#152b4d]"
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
