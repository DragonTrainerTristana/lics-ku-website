"use client";

import { ArrowRightIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { MAIN_ANNOUNCEMENT } from "@data/home/MainAnnouncement";

export const MainAnnouncement = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/notices/${MAIN_ANNOUNCEMENT.noticeId}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="flex flex-col md:items-center justify-center gap-4 p-6 w-full lg:w-[260px] lg:h-[120px] lg:h-[260px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 relative"
    >
      <div className="flex flex-col md:items-center justify-center gap-2">
        <SearchIcon className="hidden md:block w-8 h-8 lg:w-10 lg:h-10" />
        <h4 className="text-base lg:text-lg font-bold">
          {MAIN_ANNOUNCEMENT.title}
        </h4>
        <p className="text-xs lg:text-sm text-left md:text-center whitespace-pre-line">
          {MAIN_ANNOUNCEMENT.messages.join("\n")}
        </p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="hidden md:absolute bottom-0 right-0 md:flex"
      >
        자세히 보기 <ArrowRightIcon className="w-3 h-3 lg:w-4 lg:h-4 ml-1" />
      </Button>
    </Card>
  );
};
