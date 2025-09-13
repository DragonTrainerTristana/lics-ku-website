"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RESEARCH_LIST } from "@data/research/ResearchList";
import { useParams } from "next/navigation";
import { ResearchContents } from "./contents/ResearchContents";

export const ResearchDialogContents = () => {
  const { id } = useParams();
  const research = RESEARCH_LIST.find((research) => research.id === Number(id));
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mt-2 text-center">
          {research?.title}
        </DialogTitle>
        <Divider />
        <ResearchContents research={research!} />
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">닫기</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

const Divider = () => {
  return <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800 my-4" />;
};
