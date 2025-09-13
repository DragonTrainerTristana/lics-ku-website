"use client";

import { Research } from "@data/index";
import { ResearchContentCarousels } from "./ResearchContentCarousels";

export const ResearchContents = ({ research }: { research: Research }) => {
  return (
    <div className="flex flex-col gap-8">
      {research.resources && (
        <ResearchContentCarousels resources={research.resources} />
      )}
      {research.subtitle && (
        <p className="text-lg text-gray-500 dark:text-gray-400 whitespace-pre-line font-bold">
          {research.subtitle}
        </p>
      )}
      <p className="text-lg text-gray-500 dark:text-gray-400 whitespace-pre-line">
        {research.description}
      </p>
    </div>
  );
};
