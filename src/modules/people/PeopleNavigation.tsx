"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { PEOPLE_TYPE_LIST } from "@data/index";

export const PeopleNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row md:flex-col justify-center md:justify-start md:mt-10">
      {PEOPLE_TYPE_LIST.map((peopleType) => {
        const isClickingRoot = peopleType === "professor";
        const isActive =
          peopleType === "professor"
            ? pathname === "/people"
            : pathname.includes(peopleType);

        return (
          <Link
            key={peopleType}
            href={isClickingRoot ? `/people` : `/people/${peopleType}`}
          >
            <Button
              variant={"ghost"}
              className={` ${isActive ? "font-bold dark:font-extrabold" : ""}`}
            >
              {peopleType.toUpperCase()}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};
