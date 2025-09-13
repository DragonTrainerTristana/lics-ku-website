"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ResearchDialogContents } from "@/modules/research/details/ResearchDialogContents";

export default function ResearchDialogContentPage() {
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto flex flex-col gap-8">
        <ResearchDialogContents />
      </DialogContent>
    </Dialog>
  );
}
