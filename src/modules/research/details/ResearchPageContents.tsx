"use client";

import { RESEARCH_LIST } from "@data/research/ResearchList";
import { useParams } from "next/navigation";
import { ResearchContents } from "./contents/ResearchContents";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const ResearchPageContents = () => {
  const { id } = useParams();
  const research = RESEARCH_LIST.find((research) => research.id === Number(id));
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 items-center">
        <Link href="/research">
          <ChevronLeft className="w-10 h-10" />
        </Link>
        <h1 className="text-2xl font-bold">{research?.title}</h1>
      </div>
      <ResearchContents research={research!} />
    </div>
  );
};
