"use client";

import { ResearchContentCarousels } from "@/modules/research/details/contents/ResearchContentCarousels";
import { type Notification } from "@data/index";

export const NoticeContents = ({ notice }: { notice: Notification }) => {
  return (
    <div className="flex flex-col gap-8">
      {notice.resources && (
        <ResearchContentCarousels resources={notice.resources} />
      )}
      {notice.subtitle && (
        <p className="text-lg text-gray-500 dark:text-gray-400 whitespace-pre-line font-bold">
          {notice.subtitle}
        </p>
      )}
      <p className="text-lg text-gray-500 dark:text-gray-400 whitespace-pre-line">
        {notice.description}
      </p>
    </div>
  );
};
