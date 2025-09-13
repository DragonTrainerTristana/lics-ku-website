"use client";

import { type Alumni } from "@data/index";
import { ExternalLink } from "lucide-react";

export const AlumniLink = ({ alumni }: { alumni: Alumni }) => {
  const hasWebsite = alumni.website !== undefined;

  const handleWebsiteClick = () => {
    if (hasWebsite) {
      window.open(alumni.website, "_blank");
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center md:justify-end pb-2 h-full">
      <div
        className={`flex gap-1 items-center text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300`}
        onClick={handleWebsiteClick}
      >
        <p className="text font-bold">{alumni.name}</p>
        {hasWebsite && <ExternalLink className="w-4 h-4" />}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{alumni.field}</p>
    </div>
  );
};
