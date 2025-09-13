"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { NoticeDialogContents } from "@/modules/notices/details/NoticeDialogContents";

export default function NoticeDialogContentPage() {
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto flex flex-col gap-8">
        <NoticeDialogContents />
      </DialogContent>
    </Dialog>
  );
}
