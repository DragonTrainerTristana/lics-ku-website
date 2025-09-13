"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_NAVIGATION_ITEMS } from "@/constants/navigationContents";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Suspense } from "react";

export const GnbButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const isCurrentPage = (url: string) => {
    if (url === "/") {
      return pathname === "/" || from === "home";
    }

    return !from && pathname.includes(url);
  };

  return (
    <Suspense>
      {DEFAULT_NAVIGATION_ITEMS.map((item) => (
        <Button
          key={item.label}
          variant={isCurrentPage(item.url) ? "default" : "ghost"}
          asChild
          className="justify-start sm:justify-center"
        >
          <Link href={item.url}>{item.label}</Link>
        </Button>
      ))}
      <div className="flex items-center justify-end">
        <ThemeToggle />
      </div>
    </Suspense>
  );
};
