"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/types";

type ActivitiesGalleryTabsProps = {
  campusItems: GalleryItem[];
  schoolTripItems: GalleryItem[];
};

type TabKey = "campus" | "school-trips";

function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.title}-${item.src}`} className="overflow-hidden rounded-[1.5rem] border-2 border-white bg-white shadow-[0_18px_42px_rgba(21,17,43,0.08)]">
          <Image src={item.src} alt={item.alt} width={960} height={640} className="h-56 w-full object-cover" />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-[#15112b]">{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ActivitiesGalleryTabs({ campusItems, schoolTripItems }: ActivitiesGalleryTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("campus");
  const baseId = useId();
  const campusPanelId = `${baseId}-campus-panel`;
  const tripsPanelId = `${baseId}-trips-panel`;

  return (
    <div>
      <div role="tablist" aria-label="Activities gallery tabs" className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          role="tab"
          id={`${baseId}-campus-tab`}
          aria-selected={activeTab === "campus"}
          aria-controls={campusPanelId}
          onClick={() => setActiveTab("campus")}
          className={`rounded-full px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d1b7b] ${
            activeTab === "campus" ? "bg-[#ffd84d] text-[#15112b]" : "bg-white text-[#5b5570] hover:bg-[#fff3dc]"
          }`}
        >
          Campus Life
        </button>
        <button
          type="button"
          role="tab"
          id={`${baseId}-trips-tab`}
          aria-selected={activeTab === "school-trips"}
          aria-controls={tripsPanelId}
          onClick={() => setActiveTab("school-trips")}
          className={`rounded-full px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d1b7b] ${
            activeTab === "school-trips" ? "bg-[#2ee881] text-[#15112b]" : "bg-white text-[#5b5570] hover:bg-[#fff3dc]"
          }`}
        >
          School Trips
        </button>
      </div>

      {activeTab === "campus" ? (
        <div role="tabpanel" id={campusPanelId} aria-labelledby={`${baseId}-campus-tab`}>
          <GalleryGrid items={campusItems} />
        </div>
      ) : (
        <div role="tabpanel" id={tripsPanelId} aria-labelledby={`${baseId}-trips-tab`}>
          <GalleryGrid items={schoolTripItems} />
        </div>
      )}
    </div>
  );
}

