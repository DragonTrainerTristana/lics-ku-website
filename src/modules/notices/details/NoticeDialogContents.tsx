"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import { NOTIFICATION_LIST } from "@data/home/NotificationList";
import { NoticeContents } from "./contents/NoticeContents";

export const NoticeDialogContents = () => {
  const { id } = useParams();
  const notice = NOTIFICATION_LIST.find((notice) => notice.id === Number(id));

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mb-8 mt-2">
          {notice?.title}
        </DialogTitle>
        <p className="text-sm text-gray-500">
          {new Date(notice?.createdAt ?? "").toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </DialogHeader>
      <NoticeContents notice={notice!} />
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">닫기</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};
