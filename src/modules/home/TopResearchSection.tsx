"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { RESEARCH_LIST } from "@data/research/ResearchList";
import { ResearchCard } from "@/modules/home/_components/ResearchCard";
import Link from "next/link";

export const TopResearchSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerGroup = 3;
  const totalGroups = Math.ceil(RESEARCH_LIST.length / itemsPerGroup);

  const getCurrentGroup = () => {
    const startIndex = currentIndex * itemsPerGroup;
    return RESEARCH_LIST.slice(startIndex, startIndex + itemsPerGroup);
  };

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      if (newIndex === currentIndex) return;

      // Disable animations on mobile
      if (isMobile) {
        setCurrentIndex(newIndex);
        return;
      }

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsTransitioning(false);
      }, 300);
    },
    [currentIndex, isMobile]
  );

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - go to next
      handleIndexChange((currentIndex + 1) % totalGroups);
    } else if (isRightSwipe) {
      // Swipe right - go to previous
      handleIndexChange((currentIndex - 1 + totalGroups) % totalGroups);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Check if device is mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Only start timer on desktop
    if (isMobile) return;

    const timer = setInterval(() => {
      handleIndexChange((currentIndex + 1) % totalGroups);
    }, 5000); // 5 초 단위

    return () => clearInterval(timer);
  }, [currentIndex, handleIndexChange, totalGroups, isMobile]);

  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex flex-col items-center justify-center gap-10 max-w-[1400px]">
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <h3 className="text-4xl font-bold">Top Researches</h3>
          <Link
            href="/research"
            className="text text-muted-foreground underline"
          >
            Show All
          </Link>
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className={`flex flex-col items-center px-8 md:px-24 justify-between w-full gap-4 lg:gap-12 lg:flex-row md:transition-all md:duration-600 md:ease-in-out ${
              isTransitioning
                ? "md:opacity-0 md:scale-95"
                : "md:opacity-100 md:scale-100"
            }`}
          >
            {getCurrentGroup().map((research) => (
              <div
                key={`${currentIndex}-${research.id}`}
                className={`md:transition-all md:duration-600 md:ease-in-out ${
                  isTransitioning
                    ? "md:transform md:translate-y-4"
                    : "md:transform md:translate-y-0"
                }`}
              >
                <ResearchCard research={research} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: totalGroups }, (_, index) => (
            <button
              key={index}
              onClick={() => handleIndexChange(index)}
              className={`w-2 h-2 rounded-full md:transition-all md:duration-300 md:ease-in-out ${
                index === currentIndex
                  ? "bg-primary md:scale-125"
                  : "bg-muted md:hover:bg-muted-foreground md:hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
