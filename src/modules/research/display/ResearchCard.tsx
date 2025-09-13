"use client";

import { Card } from "@/components/ui/card";
import { Research } from "@data/index";
import { changeToIdFormat } from "@/modules/research/_utils/changeToIdFormat";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const ResearchCard = ({
  research,
  id,
}: {
  research: Research;
  id: number;
}) => {
  const thumbnailSize =
    research.displayVariant === "QUARTER_WIDTH" ? "w-1/2 md:w-1/4" : "w-1/2";

  return (
    <Link href={`/research/${id}`} scroll={false} prefetch={false}>
      <Card
        id={String(id)}
        className="flex flex-col gap-4 w-full h-auto max-h-110 overflow-hidden cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-2 md:p-6 transition-all duration-200 hover:scale-101"
      >
        <h2
          className="text-2xl font-bold"
          id={changeToIdFormat(research.title)}
        >
          {research.title}
        </h2>
        <div className="flex gap-4 h-60">
          {research.resources?.length ? (
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className={`${thumbnailSize} h-60 shrink-0`}
            >
              <CarouselContent className="h-60">
                {research.resources.map((resource, index) => (
                  <CarouselItem key={index} className="h-60 w-full">
                    <div className="relative w-full h-60">
                      <Image
                        src={resource.url}
                        alt={resource.description ?? "research"}
                        fill
                        className="rounded-3xl object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : null}
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <p className="text text-gray-500 dark:text-gray-400 line-clamp-10 whitespace-pre-line">
              {research.description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
