"use client";

import { useId, useState } from "react";
import { PersonProfileCard } from "@/components/person-profile-card";
import { Reveal } from "@/components/reveal";
import type { FacultyContent, ManagementContent, PersonProfile } from "@/lib/types";

type AboutPeopleTabsProps = {
  management: ManagementContent;
  faculty: FacultyContent;
};

type TabKey = "management" | "faculty";

function PeopleCardsGrid({ members, imageClassName }: { members: PersonProfile[]; imageClassName?: string }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((person) => (
        <Reveal key={person.name}>
          <PersonProfileCard person={person} imageClassName={imageClassName} />
        </Reveal>
      ))}
    </div>
  );
}

export function AboutPeopleTabs({ management, faculty }: AboutPeopleTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("management");
  const tabsBaseId = useId();
  const unifiedPortraitImageClass = "h-80 object-contain object-top bg-[#fff3dc]";

  const managementPanelId = `${tabsBaseId}-management-panel`;
  const facultyPanelId = `${tabsBaseId}-faculty-panel`;

  return (
    <section className="section-wrap">
      <div role="tablist" aria-label="About people sections" className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          role="tab"
          id={`${tabsBaseId}-management-tab`}
          aria-selected={activeTab === "management"}
          aria-controls={managementPanelId}
          onClick={() => setActiveTab("management")}
          className={`rounded-full px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d1b7b] ${
            activeTab === "management"
              ? "bg-[#ffd84d] text-[#35557a]"
              : "border border-[#d9e5f3] bg-white text-[#35557a] hover:bg-[#fff3dc]"
          }`}
        >
          Management
        </button>
        <button
          type="button"
          role="tab"
          id={`${tabsBaseId}-faculty-tab`}
          aria-selected={activeTab === "faculty"}
          aria-controls={facultyPanelId}
          onClick={() => setActiveTab("faculty")}
          className={`rounded-full px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d1b7b] ${
            activeTab === "faculty"
              ? "bg-[#2ee881] text-[#35557a]"
              : "border border-[#d9e5f3] bg-white text-[#35557a] hover:bg-[#fff3dc]"
          }`}
        >
          Faculty
        </button>
      </div>

      {activeTab === "management" ? (
        <div
          role="tabpanel"
          id={managementPanelId}
          aria-labelledby={`${tabsBaseId}-management-tab`}
          className="mt-6"
        >
          <PeopleCardsGrid members={management.leaders} imageClassName={unifiedPortraitImageClass} />

          <article className="signal-card glass-panel relative mt-10 overflow-hidden p-7 sm:p-9">
            <p className="sticker bg-[#ffd84d]">
              {management.chairmanMessage.title}
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-[#ffffff] sm:text-base">
              {management.chairmanMessage.intro}
            </p>
            <blockquote className="mt-6 border-l-4 border-[#f45fa2] pl-5 text-lg font-semibold italic leading-8 text-[#35557a]">
              &ldquo;{management.chairmanMessage.quote}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-extrabold text-[#6d1b7b]">{management.chairmanMessage.quoteSource}</p>
            <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-[#ffffff] sm:text-base">
              {management.chairmanMessage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      ) : (
        <div
          role="tabpanel"
          id={facultyPanelId}
          aria-labelledby={`${tabsBaseId}-faculty-tab`}
          className="mt-6"
        >
          <p className="text-sm font-medium leading-7 text-[#ffffff] sm:text-base">{faculty.quickIntro}</p>

          <PeopleCardsGrid members={faculty.members} imageClassName={unifiedPortraitImageClass} />
        </div>
      )}
    </section>
  );
}

