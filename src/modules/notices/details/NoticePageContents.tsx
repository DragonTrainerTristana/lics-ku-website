"use client";

import { useParams } from "next/navigation";
import { NOTIFICATION_LIST } from "@data/home/NotificationList";
import { NoticeContents } from "./contents/NoticeContents";

export const NoticePageContents = () => {
  const { id } = useParams();
  const notice = NOTIFICATION_LIST.find((notice) => notice.id === Number(id));
  return (
    <div className="flex flex-col gap-4 px-24">
      <div className="flex flex-col gap-2 max-w-[750px]">
        <h1 className="text-2xl font-bold">{notice?.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(notice?.createdAt ?? "").toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
      <NoticeContents notice={notice!} />
    </div>
  );
};
