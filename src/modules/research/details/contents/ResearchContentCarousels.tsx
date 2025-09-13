import Image from "next/image";

import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
} from "@/components/ui/carousel";
import { Resource } from "@data/index";

export const ResearchContentCarousels = ({
  resources,
}: {
  resources: Resource[];
}) => {
  const showNavigation = resources.length > 1;

  return (
    <Carousel
      opts={{
        loop: showNavigation,
      }}
      className="w-full h-auto"
    >
      <CarouselContent className="h-[400px] max-h-[400px] w-auto">
        {resources.map((resource, index) => (
          <CarouselItem key={index}>
            <div className="h-[90%] relative">
              <Image
                src={resource.url}
                alt={resource.description ?? "research"}
                fill
                className="rounded-3xl object-contain"
              />
            </div>
            <div className="justify-center mt-2">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                {resource.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {showNavigation && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 dark:bg-gray-800 dark:hover:bg-gray-700"  />
          <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 dark:bg-gray-800 dark:hover:bg-gray-700" />
        </>
      )}
    </Carousel>
  );
};
