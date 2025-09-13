"use client";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Research } from "@data/index";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export const ResearchCard = ({ research }: { research: Research }) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const handleClick = () => {
    router.push(`/research#${research.id}`);
  };

  const thumbnailUrl =
    research.resources?.find((resource) => resource.isThumbnail)?.url ??
    research.resources?.[0]?.url;

  return (
    <Card
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-full lg:max-w-[25vw] lg:w-[1/3] gap-4 p-0 transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 lg:h-[418px]"
    >
      <div className="w-full flex lg:flex-col">
        {thumbnailUrl && (
          <div className="hidden md:flex w-1/4 h-1/2 lg:h-[200px] overflow-hidden m-0 rounded-t-lg lg:w-full lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={research.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col items-start lg:items-center justify-center gap-2 px-6 pt-2 md:w-3/4 lg:w-full">
          <h3 className="text-xl font-bold line-clamp-2 dark:text-white">
            {research.title}
          </h3>
          <div className="h-[100px] overflow-hidden text-ellipsis">
            <p className="text-sm line-clamp-3 lg:line-clamp-5 dark:text-white whitespace-pre-line">
              {research.description}
            </p>
          </div>
        </div>
        <div className="items-center w-full pr-1 pb-2 justify-end hidden lg:flex">
          <Button variant="ghost">
            {!isMobile && "Read More"}
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
